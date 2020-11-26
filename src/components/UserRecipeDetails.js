import React from 'react';
import { Link } from 'react-router-dom';
import cookstackapi from '../apis/cook-stack';
import myLocalStorage from '../localStorage';
// import './SavedRecipeDetails.css';

const imageStyle = {
    width: "380px",
    height: "400px",
    border: "3px solid black",
    borderRadius: "25px",
}

class UserRecipeDetails extends React.Component {
    
    state = {currentRecipe:{}, ingredients:[] }
    
    componentDidMount() {
        this.fetchRecipe();
        console.log(this.props);
        console.log(this.props.match.params.id);
    }

    fetchRecipe = async () => {
        console.log("in fetch");
            const recipeId = this.props.match.params.id;
            try {
                const response = await cookstackapi.get(`/usersrecipes/${recipeId}`);
                this.setState({ currentRecipe: response.data })
                console.log(this.state.currentRecipe);
            }
            catch(e) {
                console.log(e);
            }
            this.fetchIngredients();
    }

    fetchIngredients = () => {
        const ingredients = this.state.currentRecipe.ingredients[0];
        const ingredientsSplit = ingredients.split(",");
        const newIngredients = [];
        for (let i=0; i<ingredientsSplit.length; i++) {
            let currIngredient = ingredientsSplit[i].trim();
            newIngredients.push(currIngredient);
        }
        console.log(newIngredients);
        this.setState({ingredients: newIngredients});
    }

    displayIngredients = () => {
        if (this.state.ingredients.length !== 0) {
            return (
                this.state.ingredients.map((ingredient) => {
                    return (<p key={ingredient} style={{margin: "15px"}}>{ingredient}
                    <span onClick={()=>this.addIngredientToStorage(ingredient)} style={{marginLeft: "5px",cursor:"pointer"}}><i className="fas fa-plus-circle add-ingredient"></i></span></p>)
                })
            )
        }
    }

    addIngredientToStorage = (ingredientName) =>{
        myLocalStorage.save("ingredients", ingredientName);
        console.log(ingredientName);
    }

    render() {
            return (
                <div className="recipe-container">
                    <h1>{this.state.currentRecipe.title}</h1>
                    <img style={imageStyle} src="https://www.actbus.net/fleetwiki/images/8/84/Noimage.jpg" alt={this.state.currentRecipe.strMeal}></img>
                    {/* <h3 style={{ margin: "10px" }}>Category: {this.state.currentRecipe.strCategory}</h3>
                    <h3 style={{ margin: "10px" }}>kitchen: {this.state.currentRecipe.strArea}</h3> */}
                    <h4>Uploaded by: {this.state.currentRecipe.username}</h4>
                    <h3>-Ingredients-</h3>
                    <h5>Click<span><i className="fas fa-plus-circle"  style={{marginRight: "3px"}}></i></span> to add ingredient to shopping list</h5>
                    {this.displayIngredients()}
                    <h3>-Instructions-</h3>
                    <h5 style={{ width: "55vw", margin: "auto", lineHeight: "27px" }}>{this.state.currentRecipe.instructions}</h5>
                    <Link style={{ fontSize: "18px" }} to={`/usersrecipes`}>Back to users recipes</Link>
                </div>
            );
    }
}
export default UserRecipeDetails;