import React, {useState} from "react";
import {signIn} from "../api/auth"
import Input from "./input"
import {Link, useHistory} from "react-router-dom";
import "../stylesheet/form.css";
import Swal from 'sweetalert2'

function SignUp({updateUser}){
        const history = useHistory();
        const [signUpDetail,setSignUpDetail] = useState({
            username: "",
            email: "",
            password:""
        });

            const handleChange = (event) =>{
            const name = event.target.name;
            setSignUpDetail({
                ...signUpDetail,
                [name]:event.target.value
            })
        }
        const handleSubmit = (event) =>{
            event.preventDefault();
            signIn(signUpDetail)
                .then((res) => {
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
                    if(res.data.success) {
                        console.log(res.data.user)
                        localStorage.setItem("token", res.data.token);
                        Toast.fire({
                            icon: 'success',
                            title: 'Signed in successfully'
                        })
                        updateUser(res.data.user);
                        history.push("/");
                        
                    } else {
                        Toast.fire({
                            icon: 'error',
                            title: 'Email already exist!'
                        })
                    }
                })
                .catch((error)=>console.log(error))   
        }
    return (
        <div className="form-data">
            <div>
                <h1>Local Morning</h1>
                <p>Share your thoughts and remain updated with the latest news</p>
            </div>
            <form className="auth-form" onSubmit={handleSubmit}>
                <Input onChange ={handleChange} value={signUpDetail.username} type="text" name ="username" placeholder="Username"/>
                <Input onChange ={handleChange} value={signUpDetail.email} type="email" name = "email" placeholder="Please enter your email" />
                <Input onChange ={handleChange} value={signUpDetail.password} type="password" name = "password" placeholder="Please enter your password" />
                <Input onSubmit ={handleSubmit} type="submit" value="submit"/>
                <div>
                    <Link to="/public/login">Login with existing account</Link>
                </div>
                <br />
                <button role="button">Login with google</button>
            </form>
        </div>
    )
}
export default SignUp