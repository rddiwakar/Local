import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheet/index.css';
import Routing from './components/Router';
import DashBoard from "./components/dashboard"


ReactDOM.render( 
  // <Routing />,
  <DashBoard />
  ,
  document.getElementById('root')
);