import React from 'react';
import cookstackapi from '../../apis/cook-stack';
import myLocalStorage from '../../localStorage';
import './AddRecipe.css';

class AddRecipe extends React.Component {

    state= {title: "", ingredients: "", instructions: "", image: "", owner: ""} //to break the ingredients string to array, or find another way of ingredients input

    componentDidMount() {
        const user = myLocalStorage.get("username");
        this.setState({owner: user});
    }
    
    onInputChange = (event) => {
        // console.log(event.target.name);
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
        //    const file = document.getElementById("img");
        //    const reader = new FileReader();
        //    reader.addEventListener("load", ()=> {
        //        this.setState({image: reader.result})
        //     })
        //     reader.readAsDataURL(file.files[0])
        }
    }

    handlingSubmit = async(event) => {
        event.preventDefault();
        console.log("on submit");
        const token = myLocalStorage.get("token");

        // if(this.state.image==="") {
        //     this.setState({image: "Noimage.jpg"});
        // }

        const recipeToSubmit = {
            title:this.state.title,
            ingredients: this.state.ingredients,
            instructions: this.state.instructions,
            image: this.state.image
        }
        try {
            const recipe = await cookstackapi.post("/recipes",recipeToSubmit, {
                headers: {
                    Authorization: "Bearer " + token
                }
            });
            console.log(recipe);
            window.location.replace("/");

        }
        catch(e) {
            console.log(e);
        }

    }

    render() {
        return (
            <div className="recipe-container">
                <h2>Add new recipe</h2>
                <form onSubmit={this.handlingSubmit}>
                    <label>Recipe title</label>
                    <input type="text" id="title" name="title" value={this.state.title} onChange={this.onInputChange}></input>
                    <label>Ingredients</label>
                    <input type="text" id="ingredients" name="ingredients" value={this.state.ingredients} onChange={this.onInputChange}></input>
                    <label>Instructions</label>
                    <textarea name="instructions" rows="10" cols="60" value={this.state.instructions} onChange={this.onInputChange}/>
                    <label>Recipe image</label>
                    <input className="image-input" type="file" id="img" name="img" accept="image/*" onChange={this.onInputChange}/>
                    <input className="submit" type="submit"></input>
                </form>
            </div>
        )
    }
}

export default AddRecipe;