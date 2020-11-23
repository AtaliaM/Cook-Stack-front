import React from 'react';
import cookstackapi from '../../apis/cook-stack';
import myLocalStorage from '../../localStorage';
import Auth from '../../Auth';

import './SignInUser.css';

class SignInUser extends React.Component  {

    state = {email: "", password: "", user: {}}

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
        const reqBody = {email: this.state.email, password: this.state.password};
        try {
            const response = await cookstackapi.post("/users/login", reqBody);
            console.log(response);
            this.setState({user:response.data.user});
            myLocalStorage.save("token", response.data.token);
            myLocalStorage.save("username", response.data.user.name);
            Auth.login(()=> {
                this.props.history.push("/addrecipe") //////after login, we will be redirected to this page
            })
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