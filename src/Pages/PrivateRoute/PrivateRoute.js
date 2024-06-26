import React from 'react';
import { Redirect, Route } from 'react-router-dom/cjs/react-router-dom.min';
import { UserContext } from '../../App';

const PrivateRoute = ({children , ...rest}) => {
    //const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { value} = React.useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = value;
    return (
        <div>
            <Route
        {...rest}
        render={({ location }) =>
          loggedInUser.email || sessionStorage.getItem("token") ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
        </div>
    );
};

export default PrivateRoute;