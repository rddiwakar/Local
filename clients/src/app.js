import React,{useState} from "react";
import PublicRouting from "./components/publicRouting";
import Dashboard from "./components/dashboard";




function App(){
    const[view,setview]= useState(false);
    return(
        <div>
           {view ? <PublicRouting />: <Dashboard />}
        </div>
    )
}
export default App
