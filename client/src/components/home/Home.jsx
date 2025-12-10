import { useRecipes } from "../../contexts/RecipeContext.jsx";
import { useUserContext } from "../../contexts/UserContext.jsx";
import RecipeCard from "../recipe-card/RecipeCard.jsx";
import { Link } from "react-router"

export default function Home() {
    const { recipes } = useRecipes();
    const { user, isAuthenticated } = useUserContext();

    const username = user?.email?.split("@")[0];

    const latestRecipes = [...recipes]
        .sort((a, b) => new Date(b._createdOn) - new Date(a._createdOn))
        .slice(0, 3);

    return (
        <div className="home-page">
            <div className="container">
                <div className="text-center">
                    {/* Greeting */}
                    {isAuthenticated && (
                        <h2 className="text-xl font-semibold text-gray-700 mt-3 text-center">
                            Hello, <span className="text-indigo-600">{username}</span>!
                        </h2>
                    )}
                    <h1 className="text-4xl font-bold text-gray-800">Discover Your Next Favorite Recipe</h1>
                    <p className="mt-2 text-lg text-gray-600">Browse, create, and savor the most delicious recipes from our community. Find inspiration for every meal!</p>
                </div>

            </div>
            <section className="cta add-more mt-10 text-center">
                <h2>Share your favorite recipes!</h2>
                <Link
                    to="/create-recipe"
                    className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:from-indigo-600 hover:to-purple-700 transition transform duration-300"
                >
                    Add Recipe
                </Link>

            </section>
            <div className="container">
                <h2>Explore Delicious Recipes</h2>

                <div className="recipes-container mt-10">
                    {
                        latestRecipes.length === 0
                            ?
                            (<h3 className="text-gray-600">No recipes yet!</h3>)
                            : (
                                <div className="recipes-container mt-10">
                                    {latestRecipes.map((recipe) => (
                                        <RecipeCard key={recipe._id} {...recipe} />
                                    ))}
                                </div>
                            )
                    }
                </div>


            </div>

        </div>
    )
}