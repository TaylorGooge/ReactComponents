import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route , Routes} from "react-router-dom";
import { HomePage } from './Components/Pages/HomePage'
import { AboutPage } from "./Components/Pages/AboutPage"
import { PortfolioPage } from "./Components/Pages/PortfolioPage"
import {ContactPage} from "./Components/Pages/ContactPage"

import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element = {<HomePage/>} /> 
      <Route path='/about' element = {<AboutPage/>} /> 
      <Route path ='/portfolio' element = {<PortfolioPage/>} />
      <Route path ='/contact' element = {<ContactPage/>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
