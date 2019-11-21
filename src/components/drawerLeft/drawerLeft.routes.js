import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from "../../views/login/index";

class DrawerLeftRouter extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/login" component={Login} />
                </Switch>
            </div>
        );
    }
}

export default DrawerLeftRouter;