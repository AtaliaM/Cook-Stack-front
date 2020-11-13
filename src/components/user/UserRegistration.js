import React from 'react';
// import { Link } from 'react-router-dom';
import './UserRegistration.css';

class UserRegistration extends React.Component  {

    registerUser = () => {
        console.log("sending user to register route");
        window.location.replace("http://localhost:3000/register");
    }

    signInUser = () => {
        console.log("sending user to sign in route");
        window.location.replace("http://localhost:3000/signin");
    }

    render() {
        return (
            <div className="registration-container">
                <div className="reg-option">
                    <label>New here?</label>
                    <button onClick={this.registerUser}>Register</button>
                </div>
                <div className="reg-option">
                    <button onClick={this.signInUser}>Sign In</button>
                </div>
            </div>
        )
    }
}

export default UserRegistration;