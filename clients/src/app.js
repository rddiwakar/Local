import React,{useState} from "react";
import PublicRouting from "./components/publicRouting";
import Dashboard from "./components/dashboard";
import {BrowserRouter as Router,Redirect, Route} from "react-router-dom";




function App(){
     const [loggedIn,setloggedIn]=useState(false)
    return(
        <Router>
            <Route path="/private/dashboard">
                <Dashboard />
            </Route>
            <Route exact path="/">
                {loggedIn ? <Redirect to="/private/dashboard" /> : <PublicRouting />}
            </Route>
        </Router>
    )
}
export default App
