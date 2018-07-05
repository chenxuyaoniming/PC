import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Router,Route,hashHistory,IndexRedirect,IndexRoute} from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import Home from './components/home'
import About from './components/about'
import './css/home.scss'
import './css/index.scss'
import './css/about.scss'
import './css/app.scss'

ReactDOM.render(<Router history={hashHistory}>
    <Route path='/' component={App}>
    </Route>
    <Route path='/home' component={Home}></Route>
</Router>, document.getElementById('root'));
registerServiceWorker();
