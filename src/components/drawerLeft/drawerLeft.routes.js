import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from "../../views/login/index";
import NovoCliente from "../../views/usuario/novoUsuario/index"
import EditUsuario from "../../views/usuario/editUsuario/index"

class DrawerLeftRouter extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/novo cliente" component={NovoCliente} />
                    <Route exact path="/alterar cliente" component={EditUsuario} />
                    <Route exact path="/resumo" component={Login} />
                </Switch>
            </div>
        );
    }
}

export default DrawerLeftRouter;