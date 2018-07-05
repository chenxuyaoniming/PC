import React from 'react';
import ReactDOM from 'react-dom';
import './font/iconfont.css'
import App from './App';
import {Router,Route,hashHistory,IndexRedirect,IndexRoute} from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import Home from './components/home'
import About from './components/about'
import './css/home.scss'
import './css/index.scss'
import './css/about.scss'
import './css/gg1.scss'
import './css/aside.scss'

ReactDOM.render(<Router history={hashHistory}>
    <Route path='/' component={Home}>
    </Route>
    <Route path='/about/:id' component={About}></Route>
</Router>,document.getElementById('root'));
registerServiceWorker();
