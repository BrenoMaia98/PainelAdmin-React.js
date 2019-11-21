import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from "../../views/login/index";
import NovoEditClientePF from "../../views/clientePF/novoEditclientePF/index"
import ClientePF from "../../views/clientePF/index"
import NovoEditClientePJ from "../../views/clientePJ/novoEditclientePJ/index"
import ClientePJ from "../../views/clientePJ/index"

class DrawerLeftRouter extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    
                    <Route exact path="/pessoa fisica" component={ClientePF} />
                    <Route exact path="/pessoa fisica/edit" component={NovoEditClientePF} />
                    <Route exact path="/pessoa fisica/add" component={NovoEditClientePF} />

                    <Route exact path="/pessoa juridica" component={ClientePJ} />
                    <Route exact path="/pessoa juridica/edit" component={NovoEditClientePJ} />
                    <Route exact path="/pessoa juridica/add" component={NovoEditClientePJ} />
                </Switch>
            </div>
        );
    }
}

export default DrawerLeftRouter;