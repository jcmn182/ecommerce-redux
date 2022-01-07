import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// components
import App from './App';
// redux
import {Provider} from 'react-redux';
import store from './redux/store/store.js'
// react reouter
import {BrowserRouter as Router,} from 'react-router-dom';
// bootstrap 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import reportWebVitals from './reportWebVitals';
// icons
import 'font-awesome/css/font-awesome.min.css'

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
