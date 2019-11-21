import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Login from "../../views/login/index";

class DrawerLeftRouter extends Component{
    <>
        <Switch>
            <Route exact path="/login" component={Login}/>
        </Switch>
    </>
}

export default DrawerLeftRouter;