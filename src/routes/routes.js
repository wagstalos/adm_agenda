import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {history} from '../history';
import PrivateRoute from './PrivateRoute';

import Login from '../pages/Login';
import RecuperarSenha from '../pages/RecuperarSenha';
import Dashboard from '../pages/Dashboard';
import Perfil from '../pages/Perfil';

import baseLogin from '../containers/login';
import baseDashboard from '../containers/dashboard';

function Routes() {
    return(
        <BrowserRouter history={history}>
            <Switch>
              <Route path="/" exact component={ baseLogin(Login)}/>
              <Route path="/recuperar-senha" exact component={ baseLogin(RecuperarSenha)}/>
              <PrivateRoute path="/dashboard" exact component={baseDashboard(Dashboard)}/>
              <PrivateRoute path="/perfil" exact component={baseDashboard(Perfil)}/>

            </Switch>
        </BrowserRouter>
    );
}

export default Routes;