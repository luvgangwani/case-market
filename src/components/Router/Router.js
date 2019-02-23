import React from 'react'

import { BrowserRouter, Switch , Route} from 'react-router-dom';

import App from '../components/App'
import Home from '../components/Home/Home'
import Login from '../components/Login/Login'


const Router = () =>{
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact/>
            <Route path="/Home" component={Home} exact/>
            <Route path="/Login" component={Login} exact/>
        </Switch>
    </BrowserRouter>
}


export default Router;


