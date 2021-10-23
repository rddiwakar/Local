import Input from "./input";
import "../stylesheet/forgotpassword.css"
import React, { useState } from "react";
import {ForgetPassword} from "../api/auth"


function ForgotPassword(){
    const [email,setEmail] = useState("");

    const handleChange = (event) => {
        const {value} = event.target
        setEmail(value)
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        
        ForgetPassword({email})
            .then(res => console.log(res))
            .catch(err => console.log(err))

    }
    return(
        <div className= "forgotpassword">
            <Input value={email} onChange={handleChange} title="Email" placeholder="Write your email" Name="email" />
            <button onClick={handleSubmit} >submit</button>
        </div>
    )
}
export default ForgotPassword;