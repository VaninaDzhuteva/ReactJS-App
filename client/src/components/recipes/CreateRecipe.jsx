export default function CreateRecipe() {
    return (
        <section className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-xl mt-10">
            <h1 className="text-3xl font-semibold mb-6 text-gray-800 text-center">
                Create Recipe
            </h1>

            {/* error */}
            {/* <p className="mb-4 text-red-600">{error}</p> */}

            <form className="space-y-6">
                {/* Title */}
                <div>
                    <label className="text-m/6 font-medium text-gray-900">
                        Title <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="title"
                            placeholder="Chocolate Cake"
                            required
                            className="block w-full rounded-md bg-white px-4 py-2 text-base text-gray-900
            outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400
            focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>

                {/* Category */}
                <div>
                    <label className="text-m/6 font-medium text-gray-900">
                        Category <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-2">
                        <select
                            name="category"
                            required
                            className="block w-full rounded-md bg-white px-4 py-2 text-base text-gray-900
            outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400
            focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        >
                            <option value="">Select category...</option>
                            <option value="Dessert">Dessert</option>
                            <option value="Main Meal">Main Meal</option>
                            <option value="Salad">Salad</option>
                            <option value="Soup">Soup</option>
                            <option value="Breakfast">Breakfast</option>
                            <option value="Drink">Drink</option>
                        </select>
                    </div>
                </div>

                {/* Description */}
                <div>
                    <label className="text-m/6 font-medium text-gray-900">
                        Description <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-2">
                        <textarea
                            name="description"
                            rows="3"
                            placeholder="A quick description of the recipe..."
                            required
                            className="block w-full rounded-md bg-white px-4 py-2 text-base text-gray-900
            outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400
            focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        ></textarea>
                    </div>
                </div>

                {/* Ingredients */}
                <div>
                    <label className="text-m/6 font-medium text-gray-900">
                        Ingredients (one per line)
                    </label>
                    <div className="mt-2">
                        <textarea
                            name="ingredients"
                            rows="4"
                            placeholder={`200g flour\n3 eggs\n1 tsp vanilla`}
                            className="block w-full rounded-md bg-white px-4 py-2 text-base text-gray-900
            outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400
            focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        ></textarea>
                    </div>
                </div>

                {/* Steps */}
                <div>
                    <label className="text-m/6 font-medium text-gray-900">
                        Steps (one per line)
                    </label>
                    <div className="mt-2">
                        <textarea
                            name="steps"
                            rows="5"
                            placeholder={`Preheat oven to 180C...\nMix all ingredients...\nBake for 35min...`}
                            className="block w-full rounded-md bg-white px-4 py-2 text-base text-gray-900
            outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400
            focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        ></textarea>
                    </div>
                </div>

                {/* Image URL */}
                <div>
                    <label className="text-m/6 font-medium text-gray-900">Image URL</label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="imageUrl"
                            placeholder="https://example.com/image.jpg"
                            className="block w-full rounded-md bg-white px-4 py-2 text-base text-gray-900
            outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400
            focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>

                {/* Submit */}
                <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md px-3 py-2 text-m/6 font-semibold text-white bg-indigo-600 shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Create Recipe
                    </button>
                </div>
            </form>
        </section>


    )
}

