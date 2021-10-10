import React, {useState} from "react";
import {signIn} from "../api/auth"
import Input from "./input"
import {Link, useHistory} from "react-router-dom";
import "../stylesheet/form.css";

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
                    if(res.data.success) {
                        console.log(res.data);
                        localStorage.setItem("token", res.data.token);
                        updateUser(res.data.user);
                        history.push("/");
                    } else {
                        // Show alert
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