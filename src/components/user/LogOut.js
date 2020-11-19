import React from 'react';
// import cookstackapi from '../../apis/cook-stack';
import myLocalStorage from '../../localStorage';

class LogOut extends React.Component  {

    state = {}

    handlingSubmit = async() => {
        console.log("log out");
        try {
            myLocalStorage.remove("token");
        } catch(e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div className="container">
               <button onClick={this.handlingSubmit}>Log Out</button>
            </div>
        )
    }
}

export default LogOut;