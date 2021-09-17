import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Admin from './admin/app/App'
import Web from './REACT/app'
import "./admin/i18n";
import Login from './Login/login'
import Main from './main'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>
, document.getElementById('root'));

serviceWorker.unregister();