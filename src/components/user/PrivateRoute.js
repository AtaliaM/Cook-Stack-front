import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";

import Authentication from "../components/Authentication";

/**
 When you wrap your components in the withAuthenticationRequired Higher-Order Component 
 and users who have not logged in visit a page that renders that component (Protected Page), 
 your React application will redirect that user to the login page. 
 
 After the user logs in, Auth0 will redirect the user to your React application,
and the Auth0Provider will take the users to the page they intended to access before login.
 */
class ProtectedRoute extends React.Component {
   render() {
      return (
         <Route
            component={withAuthenticationRequired(this.props.component, {
               onRedirecting: () => <Authentication />,
            })}
            {...this.props.args}
         />
      );
   }
}

export default ProtectedRoute;