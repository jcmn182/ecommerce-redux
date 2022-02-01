import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// components
import App from './App';
<<<<<<< HEAD
// redux
import {Provider} from 'react-redux';
import store from './redux/store/store.js'
// react reouter
import {BrowserRouter as Router,} from 'react-router-dom';
// bootstrap 
=======
// react router
import {BrowserRouter as Router,} from 'react-router-dom';
// bootstrap
>>>>>>> redux/thunk
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
// icons
import 'font-awesome/css/font-awesome.min.css'
// redux
import {Provider} from 'react-redux';
import store from './redux/store/store'



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
<<<<<<< HEAD
      <Router>
        <App />
      </Router>
    </Provider>   
=======
    <Router>
      <App />
    </Router>
   </Provider> 
>>>>>>> redux/thunk
  </React.StrictMode>,
  document.getElementById('root')
);


