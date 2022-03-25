import React, {useState} from "react";
import Input from "./input";
import {Link, useHistory} from "react-router-dom"
import Swal from 'sweetalert2';
import {logIn} from "../api/auth"
function Login({updateUser}){
    const history = useHistory()
    const [loginDetail,setLoginDetail]=useState({
        email:"",
        password:""
    })
    const handleChange = (event) =>{
        const name = event.target.name;
        setLoginDetail({
            ...loginDetail,
            [name]: event.target.value
        })
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
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
        logIn(loginDetail)
            .then((res)=>{
                if(res.data.success) {
                    
                    localStorage.setItem("token", res.data.token);
                    Toast.fire({
                        icon: 'success',
                        title: 'Login successfully'
                    })
                    updateUser(res.data.user);
                    history.push("/")
                }
            })
            .catch((error)=>{
                console.log(error)
                Toast.fire({
                    icon: 'error',
                    title:"Something Went Wrong Please Fill Correctly"
                })
            })

    }
    return (
        <div className="form-data">
            <div>
                <h1>Local Social Media</h1>
                <p>Share your thoughts and remain updated with the latest news</p>
            </div>
            <form className="auth-form" onSubmit = {handleSubmit}>
                <Input onChange ={handleChange} value={loginDetail.email} name="email" type="email" title = "Email" placeholder="Please enter your email" />
                <Input onChange ={handleChange} value={loginDetail.password} name="password" type="password" title = "Password" placeholder="Please enter your password" />
                <Input className="button" type="submit" value="submit"/>
                <div >
                    <Link to="/public/signup">Create account </Link>
                    <br />
                    <Link to="/forgetPassword">Forgot password ? </Link>
                </div>
                <br />
                <button  role="button" ><a href={`${window.location.origin}/api/oAuth/google`}>Login with google</a></button>
            </form>
        </div>
    )
}
export default Login