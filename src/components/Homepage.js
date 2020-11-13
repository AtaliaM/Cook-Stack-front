import React from 'react';
import { Link } from 'react-router-dom';
import UserRegistration from './user/UserRegistration';
import './Homepage.css';

const Homepage = () => {
    return (
        <div className="hompage-container">
            <UserRegistration className="registration"/>
            <h1 style={{marginBottom:"20px"}}>Plan your meals</h1>
            <div className="btn-container">
                <button><Link to="/recipes">Search for recipes</Link></button>
                <button><Link to="/random">Get a random recipe</Link></button>
            </div>
        </div>

    )
}

export default Homepage;