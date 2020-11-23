import React from 'react';
import { Link } from 'react-router-dom';
import cookstackapi from '../apis/cook-stack';
import myLocalStorage from '../localStorage';
import "./MapUsersRecipes.css";

let buttonInfo = {
    buttonDisable: false,
    buttonText: "Save Recipe",
}

let longStrMeal;

class MapUsersRecipes extends React.Component {

    state= {recipes : []}

    //fetching user recipes from my database//
    componentDidMount() {
        this.fetchUserRecipes();
    }

   fetchUserRecipes = async() => {
        const recipes = await cookstackapi.get("/allrecipes");
        console.log(recipes);
        this.setState({recipes: recipes.data});
   }

    saveToLocalStorage = (meal) => {
        let recipeSaved;
        const savedRecipes = myLocalStorage.get("users-recipes") || [];

        for (let i = 0; i < savedRecipes.length; i++) {
            if (savedRecipes[i].idMeal === meal.idMeal) {
                recipeSaved = true;
                break;
            }
        }
        if (!recipeSaved) {
            myLocalStorage.save("users-recipes", meal);
        }
    }

    render() {
        if(this.state.recipes.length!==0) {
            return (
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div className="users-meals-container">
                        {this.state.recipes.map((singleData) => {
                            if (singleData.title.length > 15) {
                                longStrMeal = singleData.title;
                                singleData.title = singleData.title.slice(0,15)+ "...";
                            }
                            else {
                                longStrMeal = "";
                            }
                            return (
                                <div key={singleData._id} style={{ width: "170px" }}>
                                    <Link to={{ pathname: `/usersrecipes/${singleData._id}`, obj: singleData }}>
                                        <div>
                                            <h5 className="tooltip">{singleData.title}<span className="tooltiptext">{longStrMeal || singleData.title}</span></h5>
                                            
                                            <img src={`data:image/png;base64,${singleData.image}`} alt={singleData.title} style={{ width: "150px", height: "150px", marginTop: "10px", border: "2px solid black" }}></img>
                                        </div>
                                    </Link>
                                    <button className="save-button" disabled={buttonInfo.buttonDisable} onClick={() => this.saveToLocalStorage(singleData)}>{buttonInfo.buttonText}</button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            );

        }
        else {
            return (
                <div>no users recipes yet</div>
            )
        }

    }
}

export default MapUsersRecipes;