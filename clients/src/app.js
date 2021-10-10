import React,{useState} from "react";
import PublicRouting from "./components/publicRouting";
import Dashboard from "./components/dashboard";
import {Redirect, Route, Switch} from "react-router-dom";

function App(){

    const publicRoutes = () => {
        return (<Route path="/" component={PublicRouting} />);
    }

    const privateRoutes = () => {
        return (
            <Switch>
                <Route path="/private/dashboard" component={Dashboard} />
                <Route path="/">
                    <Redirect to="/private/dashboard" />
                </Route>
            </Switch>
        )
    }

    return(
        <>
            {localStorage.token ? privateRoutes() : publicRoutes()}
        </>
    )
}
export default App
