import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import RegisterUser from './components/user/RegisterUser';
import SignInUser from './components/user/SignInUser';
import AddRecipe from './components/user/AddRecipe';
import MapUsersRecipes from './components/MapUsersRecipes';
import UserRecipeDetails from './components/UserRecipeDetails';
import recipeDetails from './components/RecipeDetails';
import SearchDataForResults from './components/SearchDataForResults';
import SavedRecipes from './components/SavedRecipes';
import savedRecipeDetails from './components/SavedRecipeDetails';
import ShoppingList from './components/ShoppingList';
import GetRandomRecipe from './components/GetRandomMeal';
import MealsByCategories from './components/MealsByCategories';
import MealCategory from './components/MealCategory'
import PrivateRoute from './components/user/PrivateRoute';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends React.Component {


  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
              <Header />
              <Route path="/" exact component={Homepage} />
              <Route path="/register" component={RegisterUser} />
              <Route path="/signin" component={SignInUser} />
              <PrivateRoute exact path="/addrecipe" component={AddRecipe} />
              <Route exact path="/usersrecipes" component={MapUsersRecipes}/>
              <Route path="/usersrecipes/:id" component={UserRecipeDetails}/>
              <Route path="/recipes" exact component={SearchDataForResults} />
              <Route path="/recipes/:id" component={recipeDetails} />
              <Route path="/savedrecipes" exact component={SavedRecipes} />
              <Route path="/savedrecipes/:id" component={savedRecipeDetails} />
              <Route path="/shoppinglist" component={ShoppingList} />
              <Route path="/random" component={GetRandomRecipe} />
              <Route path="/mealsbycategory" exact component={MealsByCategories} />
              <Route path="/mealsbycategory/:category" exact component={MealCategory} />
              {/* <Route path="*" component={() => "404 PAGE NOT FOUND"} /> */}
              <Footer />
              {/* <SearchDataForResults /> */}
          </div>
        </BrowserRouter>
      </div>
    );

  }
}

export default App;
