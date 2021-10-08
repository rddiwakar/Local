import Input from "./input"
import {Link} from "react-router-dom";
import "../stylesheet/form.css"
function SignUp(){
    return (
        <div className="form-data">
            <div>
                <h1>Local Morning</h1>
                <p>Share your thoughts and remain updated with the latest news</p>
            </div>
            <form className="auth-form">
                <Input  type="text" title ="Name" placeholder="Username"/>
                <Input  type="email" title = "Email" placeholder="Please enter your email" />
                <Input type="password" title = "Password" placeholder="Please enter your password" />
                <Input  type="submit" value="submit"/>
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