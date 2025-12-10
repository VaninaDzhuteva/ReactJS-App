import { Routes, Route } from 'react-router';
import './App.css'
import Home from './components/home/Home.jsx'
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx';
import Register from './components/register/Register.jsx';
import Login from './components/login/Login.jsx';
import Logout from './components/logout/Logout.jsx';
import { GuestRoute, PrivateRoute } from './guards/AuthGuards.jsx';
import CreateRecipe from './components/recipes/CreateRecipe.jsx';
import BrowseRecipes from './components/recipes/BrowseRecipes.jsx';
import RecipeDetails from './components/recipe-details/Recipedetails.jsx';
import RecipeEdit from './components/recipe-edit/RecipeEdit.jsx';
import NotFound from './components/not-found/NotFound.jsx';

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route index element={<Home />}></Route>
        <Route path='/browse-recipes' element={<BrowseRecipes />}></Route>

        <Route element={<GuestRoute />}>
          <Route path='/sign-up' element={<Register />} ></Route>
          <Route path='/login' element={<Login />}></Route>
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path='/create-recipe' element={<CreateRecipe />}></Route>
          <Route path='/recipes/:recipeId' element={<RecipeDetails />}></Route>
          <Route path='/recipes/:recipeId/edit' element={<RecipeEdit />}></Route>
          <Route path='/logout' element={<Logout />}></Route>
        </Route>

        {/* Not found */}
        <Route path='*' element={<NotFound />}></Route>

      </Routes>

      <Footer />
    </>
  )
}

export default App
