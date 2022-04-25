import React from 'react';
import ReactDOM from 'react-dom';
//import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(

  <BrowserRouter>
    <App/>
  </BrowserRouter>,document.getElementById('root')

);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
