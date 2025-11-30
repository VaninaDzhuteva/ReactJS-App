import RecipeCard from "../recipe-card/RecipeCard.jsx";

export default function Home () {
    return (
        <>
            <div className="home-page">
                <div className="container">
                    <h1>Explore Delicious Recipes</h1>  

                    <RecipeCard />
                </div>
                
            </div>
            

            
        </>
    )
}