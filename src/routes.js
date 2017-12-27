import React from 'react';
import { Route, Switch} from 'react-router-dom';

import HomePage from './containers/HomePage/HomePage';
import LoginPage from './containers/LoginPage/Login';
import RegisterPage from './containers/RegisterPage/Register';


class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/register" component={RegisterPage}/>
                <Route path="/login" component={LoginPage}/>
            </Switch>
        );
    }
}

export default Routes;