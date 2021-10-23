import Input from "./input";
import "../stylesheet/forgotpassword.css"
import React, { useState } from "react";
import {ForgetPassword} from "../api/auth"
import Swal from 'sweetalert2';


function ForgotPassword(){
    const [email,setEmail] = useState("");
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const handleChange = (event) => {
        const {value} = event.target
        setEmail(value)
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        
        ForgetPassword({email})
            .then(res => {
                console.log(res)
                Toast.fire({
                    icon: 'success',
                    title: 'Email Send Successfully'
                })
            })
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