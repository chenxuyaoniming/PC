import React from 'react';
import ReactDOM from 'react-dom';
import './font/iconfont.css'
import App from './App';
import {Router,Route,hashHistory,IndexRedirect,IndexRoute,Link} from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import Home from './components/home'
import Retrieve from './components/retrieve'
import Login from './components/login'
import Register from './components/register'
import About  from './components/about'
import List from './components/list'
import './css/home.scss'
import './css/index.scss'
import './css/about.scss'
import './css/gg1.scss'
import './css/aside.scss'
import './css/login.scss'
import './css/register.scss'
import './css/retrieve.scss'
import './css/app.scss'
import './css/list.scss'

ReactDOM.render(<Router history={hashHistory}>
    <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='/home' component={Home}></Route>
        <Route path='/list/:id' component={List}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/about/:id' component={About}></Route>
        <Route path='/register' component={Register}></Route>
        <Route path='/retrieve' component={Retrieve}></Route>
    </Route>
    
</Router>, document.getElementById('root'));
registerServiceWorker();
