import React, {useState,useEffect} from "react";
import {signIn} from "../api/auth"
import Input from "./input"
import {Link} from "react-router-dom";
import "../stylesheet/form.css"
function SignUp(){
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
                .then((res) => console.log(res))
                .catch((error)=>console.log(error.error))   
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
                <button >Login with google</button>
            </form>
        </div>
    )
}
export default SignUp