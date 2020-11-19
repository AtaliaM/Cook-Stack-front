import React from 'react';
// import cookstackapi from '../../apis/cook-stack';
import myLocalStorage from '../../localStorage';
import Auth from '../../Auth';

class LogOut extends React.Component  {

    state = {}

    handlingSubmit = async() => {
        console.log("log out");
        try {
            myLocalStorage.remove("token");
            Auth.logout(()=> {
                console.log("in auth logout");
                console.log(this.props);
                this.props.history.push("/");
            })
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