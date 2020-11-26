import React from 'react';
import cookstackapi from '../../apis/cook-stack';
import myLocalStorage from '../../localStorage';
import Auth from '../../Auth';
import './RegisterUser.css';

class registerUser extends React.Component  {
    state = {name: "", email: "", password: ""}

    onInputChange = (event) => {
        // console.log(event.target.name);
        if(event.target.name === "name") {
            this.setState({ name: event.target.value })
        }
        else if(event.target.name === "email") {
            this.setState({ email: event.target.value })
        }
        else {
            this.setState({ password: event.target.value })
        }
    }

    handlingSubmit = async() => {
        const userData = {
            name : this.state.name,
            email: this.state.email,
            password:this.state.password
        }
        // console.log(userData);
        try {
            const response = await cookstackapi.post("/users", userData);

            console.log("sending request to save new user");
            console.log(response);
            console.log(response.data.token);
            myLocalStorage.save("token", response.data.token);
            myLocalStorage.save("username", userData.name);

            Auth.login(()=> {
                this.props.history.push("/addrecipe") //////after register, we will be redirected to this page
            })

        } catch(e) {
            console.log(e);
        }

    }

    render() {
        return (
            <div className="container">
                <div>
                <h3 className="register-msg">Welcome! <span role="img" aria-labelledby="smile">😊</span></h3>
                    <label>Name</label>
                    <input type="text" name="name" required value={this.state.name} onChange={this.onInputChange}/>
                    <label>Email</label>
                    <input type="text" name="email" required value={this.state.email} onChange={this.onInputChange}/>
                    <label>password</label>
                    <input type="password" name="password" required value={this.state.password} onChange={this.onInputChange}/>
                    <button onClick={this.handlingSubmit}>Register</button>
                </div>
            </div>
        )
    }
}

export default registerUser;