import React from 'react';
import cookstackapi from '../../apis/cook-stack';
import './AddRecipe.css';

class AddRecipe extends React.Component {

    state= {title: "", ingredients: "", instructions: "", image: ""} //to break the ingredients string to array, or find another way of ingredients input

    onInputChange = (event) => {
        console.log(event.target.name);
        if(event.target.name === "title") {
            this.setState({ title: event.target.value })
        }
        else if(event.target.name === "ingredients") {
            this.setState({ ingredients: event.target.value })
        }
        else if(event.target.name === "instructions") {
            this.setState({ instructions: event.target.value })
        }
        else {
            this.setState({ image: event.target.value })
            console.log(event.target.value);
        }
    }

    handlingSubmit = async() => {
        console.log("on submit");

    }

    render() {
        return (
            <div className="recipe-container">
                <h2>Add new recipe</h2>
                <form>
                    <label>Recipe title</label>
                    <input type="text" id="title" name="title" value={this.state.title} onChange={this.onInputChange}></input>
                    <label>Ingredients</label>
                    <input type="text" id="ingredients" name="ingredients" value={this.state.ingredients} onChange={this.onInputChange}></input>
                    <label>Instructions</label>
                    <textarea name="instructions" rows="10" cols="60" value={this.state.instructions} onChange={this.onInputChange}/>
                    <label>Recipe image</label>
                    <input className="image-input" type="file" id="img" name="img" accept="image/*" value={this.state.image} onChange={this.onInputChange}/>
                    <input className="submit" type="submit" onClick={this.handlingSubmit}></input>
                </form>
            </div>
        )
    }
}

export default AddRecipe;