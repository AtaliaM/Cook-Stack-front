import React from 'react';
import myLocalStorage from '../localStorage';
import { Link } from 'react-router-dom';
import "./SavedRecipes.css";

//style={{ fontFamily: "Pacifico, cursive", fontSize: "40px", marginTop: "30px" }}

let longStrMeal;

class SavedRecipes extends React.Component {

    state = { savedRecipes: [] }

    gridStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(5, 200px)",
        gridTemplateRows: "repeat(5, 270px)",
    }

    componentDidMount() {
        const recipes = myLocalStorage.get("recipes") || [];
        // const userRecipes = myLocalStorage.get("users-recipes") || [];
        this.setState({ savedRecipes: [...recipes] });
    }

    removeFromSavedRecipes = (id) => {
        let tempRecipes = [...this.state.savedRecipes];
        // let tempRecipes = myLocalStorage.get("recipes");
        // console.log(tempRecipes);
        let indexToRemove;
        for (let i = 0; i < tempRecipes.length; i++) {
            if (tempRecipes[i].idMeal === id) {
                indexToRemove = i;
                tempRecipes.splice(indexToRemove, 1);
                break;
            }
        }
        myLocalStorage.remove("recipes");

        //doing this logic so I won't have array with 'null' on local storage//
        if (tempRecipes.length === 0) {
            tempRecipes = [];
            this.setState({ savedRecipes: [] });
        }
        else {
            console.log("in elseee");
            for (let i = 0; i < tempRecipes.length; i++) {
                myLocalStorage.save("recipes", tempRecipes[i]);
            }
            let t = myLocalStorage.get("recipes");
            console.log(t);
            this.setState({ savedRecipes: [...tempRecipes] });
        }
    }

    render() {
        if (this.state.savedRecipes.length !== 0) {
            return (
                <>
                    <h1 style={{ fontFamily: "Pacifico, cursive", marginBottom: "20px" }}>Saved Recipes</h1>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div style={this.gridStyle}>
                            {this.state.savedRecipes.map((singleData) => {
                                if (singleData.strMeal.length > 15) {
                                    longStrMeal = singleData.strMeal;
                                    singleData.strMeal = singleData.strMeal.slice(0, 15) + "...";
                                }
                                else {
                                    longStrMeal = "";
                                }
                                return (
                                    <div key={singleData.idMeal} style={{ width: "170px" }}>
                                        <Link to={{ pathname: `/savedrecipes/${singleData.idMeal}`, obj: singleData }}>
                                            <div>
                                                <h5 className="tooltip h5style">{singleData.strMeal} <span className="tooltiptext">{longStrMeal || singleData.strMeal}</span></h5>
                                                <img className="imgstyle" src={singleData.strMealThumb} alt={singleData.strMeal}></img>
                                            </div>
                                        </Link>
                                        <button className="buttonstyle" onClick={() => this.removeFromSavedRecipes(singleData.idMeal)}>Remove from saved recipes</button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </>
            );
        }
        else {
            return (
                <div className="initialMsg">Save your recipes here! <span role="img" aria-label="xxxxx">😋</span></div>
            )
        }

    }

}

export default SavedRecipes;