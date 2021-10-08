import Input from "./input";
import {Link} from "react-router-dom"
function Login(){
    return (
        <div className="form-data">
            <div>
                <h1>Local Morning</h1>
                <p>Share your thoughts and remain updated with the latest news</p>
            </div>
            <form className="auth-form">
                <Input  type="email" title = "Email" placeholder="Please enter your email" />
                <Input type="password" title = "Password" placeholder="Please enter your password" />
                <Input className="button" type="submit" value="submit"/>
                <div >
                    <Link to="/public/signup">Create account </Link>
                    <br />
                    <Link to="/forgetPassword">Forgot password ? </Link>
                </div>
                <br />
                <button className="button">Login with google</button>
            </form>
        </div>
    )
}
export default Login