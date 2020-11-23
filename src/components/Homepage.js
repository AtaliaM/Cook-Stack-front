import React from 'react';
import { Link } from 'react-router-dom';
import UserRegistration from './user/UserRegistration';
import myLocalStorage from '../localStorage';
import './Homepage.css';

const Homepage = () => {

    if (!myLocalStorage.get("username")) {
        return (
            <div className="hompage-container">
                <UserRegistration className="registration" />
                <h1 style={{ marginBottom: "20px" }}>Plan your meals</h1>
                <div className="btn-container">
                    <button><Link to="/recipes">Search for recipes</Link></button>
                    <button><Link to="/random">Get a random recipe</Link></button>
                </div>
            </div>
        )
    }
    else {
        return (
        <div className="hompage-container">
            <UserRegistration className="registration" />
            <h1 style={{ marginBottom: "20px" }}>Plan your meals</h1>
            <div className="btn-container">
                <button><Link to="/recipes">Search for recipes</Link></button>
                <button><Link to="/random">Get a random recipe</Link></button>
                <button><Link to="/addrecipe">Add your own recipe</Link></button>
            </div>
        </div>
        )
    }
}

export default Homepage;