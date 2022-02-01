import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// components
import App from './App';
// react router
import {BrowserRouter as Router,} from 'react-router-dom';
// bootstrap
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
    <Router>
      <App />
    </Router>
   </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);


