import { useState } from "react";
import { useNavigate } from "react-router"
import { useRecipes } from "../../contexts/RecipeContext.jsx";
import { useForm } from "../../hooks/useForm.js";

export default function CreateRecipe() {
    const navigate = useNavigate();
    const { createRecipe } = useRecipes();
    const [error, setError] = useState('');

    const createRecipeHandler = async (values) => {
        setError('');

        const { title, description, ingredients, steps, imageUrl } = values;

        if (!title || !description) {
            return setError('Title and description are required!')
        }

        try {
            const recipeData = {
                title,
                description,
                ingredients: ingredients ? ingredients.split('\n').map(i => i.trim()).filter(Boolean) : [],
                steps: steps ? steps.split('\n').map(s => s.trim()).filter(Boolean) : [],
                imageUrl
            }

            await createRecipe(recipeData);
            navigate('/browse-recipes');
        } catch (err) {
            setError(err.message)
        }
    }

    const { bindField, formAction } = useForm(createRecipeHandler, {
        title: '',
        description: '',
        ingredients: '',
        steps: '',
        imageUrl: ''
    })

    return (
        <div className="container">
            <h1 className="text-3xl font-semibold mb-6 text-gray-800 text-center">
                Create Your New Recipe!
            </h1>
            <section className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-xl mt-10">
                {/* error */}
                {error && (<p className="mb-4 text-red-600">{error}</p>)}

                <form className="space-y-6" action={formAction}>
                    {/* Title */}
                    <div>
                        <label className="text-m/6 font-medium text-gray-900">
                            Title <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                 {...bindField('title')}
                                required
                                className="block w-full rounded-md bg-white px-4 py-2 text-base text-gray-900
            outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400
            focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    {/* Category */}
                    {/* <div>
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
                </div> */}

                    {/* Description */}
                    <div>
                        <label className="text-m/6 font-medium text-gray-900">
                            Description <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-2">
                            <textarea
                                {...bindField('description')}
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
                                {...bindField('ingredients')}
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
                                {...bindField('steps')}
                                rows="5"
                                
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
                                {...bindField('imageUrl')}
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
                            className="inline-block px-6 py-3 bg-gradient-to-r from-green-400 to-teal-500 text-white font-semibold rounded-lg shadow-md hover:from-green-500 hover:to-teal-600 transition transform duration-300"
                        >
                            Create Recipe
                        </button>
                    </div>
                </form>
            </section>
        </div>

    )
}
