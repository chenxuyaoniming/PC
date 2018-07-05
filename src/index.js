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
<<<<<<< HEAD
import './css/about.scss'
import './css/app.scss'

ReactDOM.render(<Router history={hashHistory}>
    <Route path='/' component={App}>
    </Route>
    <Route path='/home' component={Home}></Route>
=======
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
>>>>>>> 4a0ee9397f7d3d50111e3238ff39ed0abdbf049b
</Router>, document.getElementById('root'));
registerServiceWorker();
