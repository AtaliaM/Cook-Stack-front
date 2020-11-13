import React from 'react';
import cookstackapi from '../../apis/cook-stack';

import './SignInUser.css';

class SignInUser extends React.Component  {

    state = {email: "", password: "", users: []}

    onInputChange = (event) => {
        console.log(event.target.name);
        if(event.target.name === "email") {
            this.setState({ email: event.target.value })
        }
        else {
            this.setState({ password: event.target.value })
        }
    }

    handlingSubmit = async() => {
        console.log("sending request to get existing user data");
        try {
            const response = await cookstackapi.get("/users");
            this.setState({users:[...response.data]});
            console.log(response.data);
        } catch(e) {
            console.log(e);
        }
    }

    searchUser = async() => {
        
    }

    render() {
        return (
            <div className="container">
                <div>
                <h3 className="register-msg">Welcome back! <span role="img" aria-labelledby="smile">😊</span></h3>
                    <label>Email</label>
                    <input type="text" name="email" value={this.state.email} onChange={this.onInputChange}/>
                    <label>password</label>
                    <input type="text" name="password" value={this.state.password} onChange={this.onInputChange}/>
                    <button onClick={this.handlingSubmit}>Sign in</button>
                </div>
            </div>
        )
    }
}

export default SignInUser;