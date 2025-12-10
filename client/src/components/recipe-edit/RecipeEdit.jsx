import { useNavigate, useParams } from "react-router";
import { useRecipes } from "../../contexts/RecipeContext.jsx";
import { useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm.js";
import { getOne } from "../../services/recipeServices.js";

export default function RecipeEdit() {
    const { recipeId } = useParams();
    const navigate = useNavigate();
    const { editRecipe } = useRecipes();

    const [error, setError] = useState('');

    const { values, bindField, setValues, formAction } = useForm(onEdit, {
        title: '',
        description: '',
        ingredients: '',
        steps: '',
        imageUrl: ''
    });

    async function onEdit(values) {
        setError('');

        const updatedRecipe = {
            ...values,
            ingredients: values.ingredients
                .split("\n")
                .map(x => x.trim())
                .filter(Boolean),
            steps: values.steps
                .split("\n")
                .map(x => x.trim())
                .filter(Boolean),
        }

        try {
            await editRecipe(recipeId, updatedRecipe);
            navigate(`/recipes/${recipeId}`);
        } catch (err) {
            setError(err.message)
        }
    }

    // Load existing recipe
    useEffect(() => {
        async function fetchRecipe() {
            try {
                const recipe = await getOne(recipeId);

                setValues({
                    title: recipe.title,
                    description: recipe.description,
                    ingredients: recipe.ingredients.join('\n'),
                    steps: recipe.steps.join('\n'),
                    imageUrl: recipe.imageUrl || ''
                })
            } catch (err) {
                setError('Failed to load recipe!')
            }
        }

        fetchRecipe();
    }, [recipeId]);

    return (
        <section className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-xl mt-10">
            <h1 className="text-3xl font-semibold mb-6 text-gray-800 text-center">
                Edit Recipe
            </h1>

            {error && <p className="text-red-600 mb-4">{error}</p>}

            <form className="space-y-6" action={formAction}>

                {/* Title */}
                <div>
                    <label className="font-medium text-gray-900">Title</label>
                    <input
                        {...bindField("title")}
                        required
                        className="block w-full rounded-md px-4 py-2 border"
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="font-medium text-gray-900">Description</label>
                    <textarea
                        {...bindField("description")}
                        rows="3"
                        required
                        className="block w-full rounded-md px-4 py-2 border"
                    ></textarea>
                </div>

                {/* Ingredients */}
                <div>
                    <label className="font-medium text-gray-900">Ingredients</label>
                    <textarea
                        {...bindField("ingredients")}
                        rows="4"
                        className="block w-full rounded-md px-4 py-2 border"
                    ></textarea>
                </div>

                {/* Steps */}
                <div>
                    <label className="font-medium text-gray-900">Steps</label>
                    <textarea
                        {...bindField("steps")}
                        rows="5"
                        className="block w-full rounded-md px-4 py-2 border"
                    ></textarea>
                </div>

                {/* Image URL */}
                <div>
                    <label className="font-medium text-gray-900">Image URL</label>
                    <input
                        {...bindField("imageUrl")}
                        className="block w-full rounded-md px-4 py-2 border"
                    />
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full inline-block px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:from-indigo-600 hover:to-purple-700 transition transform duration-300"
                >
                    Save Changes
                </button>
            </form>
        </section>
    )
}