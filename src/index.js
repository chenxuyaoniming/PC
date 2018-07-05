import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Router,Route,hashHistory,IndexRedirect,IndexRoute} from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import Home from './components/home'
import Retrieve from './components/retrieve'
import Login from './components/login'
import Register from './components/register'
import './css/home.scss'
import './css/index.scss'
import './css/login.scss'
import './css/register.scss'
import './css/retrieve.scss'

ReactDOM.render(<Router history={hashHistory}>
    <Route path='/' component={App}>
        <IndexRedirect to='/home' />
    </Route>
    <Route path='/home' component={Home}></Route>
    <Route path='/login' component={Login}></Route>
    <Route path='/register' component={Register}></Route>
    <Route path='/retrieve' component={Retrieve}></Route>
</Router>, document.getElementById('root'));
registerServiceWorker();
