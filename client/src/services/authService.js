const baseUrl = 'http://localhost:3030/users';

export async function register(email, password) {
    const response = await fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    });

    if (!response.ok) {
        const error =  await response.json();
        throw new Error(error.message || 'Registration failed!');
    }

    return await response.json();
}

export async function login(email, password) {
    const response = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error("Unable to login!" || error.message);
    }

    return await response.json();
}