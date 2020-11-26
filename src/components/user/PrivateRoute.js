import React from "react";
import { Route, Redirect } from "react-router-dom";
import myLocalStorage from '../../localStorage';
// import Auth from '../../Auth';

const ProtectedRoute = ({component: Component, ...rest}) => {
   return (
      <Route {...rest} render= {
         (props)=> {
            if(myLocalStorage.get("auth")) { //if(Auth.isAuthenticated())
            return <Component {...props}/>
            }
            else {
               return <Redirect to= {
                  {
                     pathname:"/login",
                     state: {
                        from: props.location //the location we trying to go to
                     }
                  } 
               }/>
            }
      }} />
      
   )
}


export default ProtectedRoute;