import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router"
import { useUserContext } from "../../contexts/UserContext.jsx";
import { useRecipes } from "../../contexts/RecipeContext.jsx";
import { getOne } from "../../services/recipeServices.js";

export default function RecipeDetails() {
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState(null);
    const navigate = useNavigate();

    const { user } = useUserContext();
    const { deleteRecipe } = useRecipes();

    useEffect(() => {
        getOne(recipeId)
            .then(data => {
                setRecipe(data);
            })
            .catch(err => console.log(err));
    }, [recipeId]);

    if (!recipe) return <p className="text-center mt-10">Recipe not found.</p>;

    const isOwner = user?._id === recipe._ownerId;

    const onDelete = async () => {
        if (!confirm("Are you sure you want to delete this recipe?")) return;

        try {
            await deleteRecipe(recipeId);
            navigate('/browse-recipes');
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <div className="container">
            <div className="max-w-3xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-xl">
                <img
                    src={recipe.imageUrl}
                    alt={recipe.title}
                    className="w-full h-64 object-cover rounded-xl"
                />

                <h1 className="text-3xl font-bold mt-4">{recipe.title}</h1>
                <p className="text-gray-600 mt-2">{recipe.description}</p>

                {/* Ingredients */}
                <section className="mt-6">
                    <h2 className="text-xl font-semibold">Ingredients</h2>
                    <ul className="list-disc ml-6 mt-2 text-gray-700">
                        {recipe.ingredients.map((i, index) => (
                            <li key={index}>{i}</li>
                        ))}
                    </ul>
                </section>

                {/* Steps */}
                <section className="mt-6">
                    <h2 className="text-xl font-semibold">Steps</h2>
                    <ol className="list-decimal ml-6 mt-2 text-gray-700">
                        {recipe.steps.map((s, index) => (
                            <li key={index} className="mb-2">{s}</li>
                        ))}
                    </ol>
                </section>

                {isOwner && (
                    <div className="flex justify-center gap-3 mt-10">

                        {/* Edit Button */}
                        <Link
                            to={`/recipes/${recipe._id}/edit`}
                            className="flex items-center gap-2 px-5 py-2 rounded-lg 
                   bg-gradient-to-r from-indigo-500 to-purple-500 
                   text-white font-medium shadow-md 
                   hover:from-indigo-600 hover:to-purple-600 
                   hover:shadow-lg hover:scale-105 
                   transition-all duration-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                            </svg>
                            Edit
                        </Link>

                        {/* Delete Button */}
                        <button
                            onClick={onDelete}
                            className="flex items-center gap-2 px-5 py-2 rounded-lg 
               bg-gradient-to-r from-pink-500 to-rose-600 
               text-white font-medium shadow-md
               hover:from-pink-600 hover:to-rose-700
               hover:shadow-lg hover:scale-105
               transition-all duration-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            Delete
                        </button>

                    </div>

                )}
            </div>
        </div>
    )
}