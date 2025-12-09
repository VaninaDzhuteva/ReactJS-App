const baseUrl = 'http://localhost:3030/data/recipes';

export async function getAll() {
    try {
        const response = await fetch(baseUrl);

        return await response.json();
    } catch (err) {
        console.log(err.message);
    }

}

export async function getOne(id) {
    const response = await fetch(`${baseUrl}/${id}`);
    return await response.json();
}

export async function create(data, token) {
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error("Failed to create a recipe!");
    }

    return response.json()
}

export async function update(id, data, token) {
    const res = await fetch(`${baseUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(data)
    });

    return await res.json();
}

export async function remove(id, token) {
    await fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        }
    });
}