import React, { useState} from "react";
import PublicRouting from "./components/publicRouting";
import Dashboard from "./components/dashboard";
import {Gtoken} from "./components/g-token";
import ForgotPassword from "./components/forgotpassword";


import {Redirect, Route, Switch} from "react-router-dom";
import ResetPassword from "./components/resetpassword";

function App(){
    const [user, setUser] = useState({});

    const updateUser = (user) => {
        setUser(user);
    }

    const publicRoutes = () => {
        return (
            <Switch>
                <Route path="/token">
                    <Gtoken updateUser={updateUser} />
                </Route>
                <Route path="/public">
                    <PublicRouting updateUser={updateUser} />
                </Route>
                <Route path="/forgetPassword">
                    <ForgotPassword />
                </Route>
                <Route path="/resetpassword/:id">
                    <ResetPassword updateUser={updateUser} />
                </Route>
                <Route path="/">
                    <Redirect to="/public" />
                </Route>
                
            </Switch>
        );
    }

    const privateRoutes = () => {
        return (
            <Switch>
                <Route path="/private/dashboard">
                    <Dashboard updateUser={updateUser} user={user} />
                </Route>
                <Route path="/">
                    <Redirect to="/private/dashboard" />
                </Route>
            </Switch>
        )
    }

    return(
        <>
            { localStorage.token ? privateRoutes() : publicRoutes()}
        </>
    )
}
export default App
