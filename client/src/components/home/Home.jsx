import { useRecipes } from "../../contexts/RecipeContext.jsx";
import RecipeCard from "../recipe-card/RecipeCard.jsx";

export default function Home() {
    const { recipes } = useRecipes();

    const latestRecipes = [...recipes]
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 4);

    return (
        <div className="home-page">
            <div className="container">
                <h1>Explore Delicious Recipes</h1>

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