import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Router,Route,hashHistory,IndexRedirect,IndexRoute} from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import Home from './components/home'
import './css/home.scss'
import './css/index.scss'

ReactDOM.render(<Router history={hashHistory}>
    <Route path='/' component={App}>
        <IndexRedirect to='/home' />
    </Route>
    <Route path='/home' component={Home}></Route>
</Router>, document.getElementById('root'));
registerServiceWorker();
