import React, {useState} from "react";
import PublicRouting from "./components/publicRouting";
import Dashboard from "./components/dashboard";
import {Redirect, Route, Switch} from "react-router-dom";

function App(){
    const [user, setUser] = useState(null);

    const updateUser = (user) => {
        setUser(user);
    }

    const publicRoutes = () => {
        return (
            <Switch>
                <Route path="/public">
                    <PublicRouting updateUser={updateUser} />
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
                    <Dashboard updateUser={updateUser} />
                </Route>
                <Route path="/">
                    <Redirect to="/private/dashboard" />
                </Route>
            </Switch>
        )
    }

    return(
        <>
            {user || localStorage.token ? privateRoutes() : publicRoutes()}
        </>
    )
}
export default App
