import { createContext, useContext, useEffect, useState } from "react";
import { useUserContext } from "./UserContext.jsx";
import { create, getAll, remove, update } from "../services/recipeServices.js";

export const RecipeContext = createContext();

export function RecipeProvider({children}) {
    const [recipes, setRecipes] = useState([]);
    const { user } = useUserContext();

    useEffect(() => {
        getAll().then(setRecipes).catch(err => console.log(err));
    }, []);

    const createRecipe = async (data) => {
        if (!user?.accessToken) {
            throw new Error("You must be logged in to create a recipe!");
        }
        const newRecipe = await create(data, user.accessToken);
        setRecipes(recipes => [...recipes, newRecipe]);
    }

    const editRecipe =  async (id, data) => {
        if (!user?.accessToken) {
            throw new Error("You dont have permissions to edit the recipe!");
        }

        const updatedRecipe = await update(id, data, user.accessToken);
        setRecipes(recipes => recipes.map(recipe => recipe._id === id ? updatedRecipe : recipe));
    }

    const deleteRecipe = async (id) => {
        if (!user?.accessToken) {
            throw new Error("You dont have permissions to delete the recipe!");
        }

        await remove(id, user.accessToken);
        setRecipes(recipes => recipes.filter(recipe => recipe._id !== id));
    }

    const contextValues = {
        recipes, 
        createRecipe,
        editRecipe,
        deleteRecipe
    }

    return (
        <RecipeContext.Provider value={contextValues}>
            {children}
        </RecipeContext.Provider>
    )
}

export const useRecipes = () => useContext(RecipeContext);