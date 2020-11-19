import React from 'react';
import { Link, Route} from 'react-router-dom';
import LogOut from './user/LogOut';
import './Header.css';


class Header extends React.Component {

    render() {
        return (
            <>
                <div className="header-container">
                    <button><Link to="/">Home</Link></button>
                    <button><Link to="/recipes">Search Recipes</Link></button>
                    <button><Link to= "/mealsbycategory">Meals By Category</Link></button>
                    <button><Link to="/savedrecipes">Saved Recipes</Link></button>
                    <button><Link to="/shoppinglist">Shopping List</Link></button>
                    <LogOut/>
                </div>
                {/* <SearchDataForResults /> */}
            </>

        )
    }
}

export default Header;