import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Switch } from "react-router-dom";
import Login from "../src/views/login/index";
import DrawerLeft from '../src/components/drawerLeft/drawer';
import { auth } from "./auth"

const PrivateRoutes = ({ componet: Component, ...rest }) => (
    <Route {...rest} render={props => (
        auth.isAuthenticated === true ? (
            <Component {...props} />
        ) : (
                <Redirect to={{
                    pathname: "/login",
                    state: { from: props.location }
                }}
                />
            )
    )}
    />
)

class AppRoute extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={{ Login }} />
                    <PrivateRoutes path="/" component={DrawerLeft} />
                </Switch>
            </Router>
        );
    }
}

export default AppRoute;
