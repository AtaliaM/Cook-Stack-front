import React from 'react';
// import { Link } from 'react-router-dom';
import myLocalStorage from '../../localStorage';
import Auth from '../../Auth';
import './UserRegistration.css';

class UserRegistration extends React.Component {

    registerUser = () => {
        console.log("sending user to register route");
        window.location.replace("http://localhost:3000/register");
    }

    signInUser = () => {
        console.log("sending user to sign in route");
        window.location.replace("http://localhost:3000/signin");
    }

    handlingLogOut = async () => {
        console.log("log out");
        try {
            myLocalStorage.remove("token");
            Auth.logout(() => {
                console.log("in auth logout");
                console.log(this.props);
                window.location.replace("/");
            })
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        if (!myLocalStorage.get('token')) {
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
        else {
            return (
                <div className="reg-option">
                    <button onClick={this.handlingLogOut}>Log Out</button>
                </div>
            )
        }
    }
}

export default UserRegistration;