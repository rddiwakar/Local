import Input from "./input";
import "../stylesheet/forgotpassword.css"
import React, { useState } from "react";
import {PatchResetPassword} from "../api/auth"
import {Redirect, useParams, useHistory} from "react-router-dom";


function ResetPassword({updateUser}){
    const {id} = useParams()
    const history = useHistory();
    console.log(id)
    const [password,setPassword] = useState("");

    const handleChange = (event) => {
        const {value} = event.target
        setPassword(value)  
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
     
        PatchResetPassword({password}, id) 
            .then(res => {
                console.log(res);
                updateUser(res.data.updatedUser)
                history.push("/")
            })
            .catch(err => console.log(err))

    }
    return(
        <div className= "forgotpassword">
            <Input value={password} onChange={handleChange} title="New password" placeholder="type your new password" Name="password" />
            <button onClick={handleSubmit} >submit</button>
        </div>
    )
}
export default ResetPassword;