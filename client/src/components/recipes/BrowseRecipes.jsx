import { useRecipes } from "../../contexts/RecipeContext.jsx"
import RecipeCard from "../recipe-card/RecipeCard.jsx";

export default function BrowseRecipes() {
    const { recipes } = useRecipes();
    return (
        <div className="container">
            <section className="browse-recipes">
                <h1>Explore Our Delicious Recipes</h1>

                <div className="recipes-container mt-10">
                    {
                        recipes.length === 0
                            ? <p>No recipes available</p>
                            : recipes.map(recipe => <RecipeCard key={recipe._id} {...recipe} />)
                    }
                </div>
            </section>
        </div>
    )
}