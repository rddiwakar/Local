import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheet/index.css';
import Dashboard from "./components/dashboard";
//import Routing from './components/Router';
//import DesktopDashBoard from "./components/dashboard";
//import MobileDashboard from "./components/mobiledashboard"


ReactDOM.render( 
  // <Routing />,
   <Dashboard />
  // <MobileDashboard />
  ,
  document.getElementById('root')
);