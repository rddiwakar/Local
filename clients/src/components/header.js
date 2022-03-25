import { Link} from 'react-router-dom';
import React from 'react';
import logo from '../Assets/logo.svg'

function Header(){
    return(
        <div className="header">
            <ul>
                <li className="navbar-logo"> 
                    <Link to="/">
                        <div><img src={logo} /> <strong>Local</strong></div> 
                    </Link>
                </li>
                <li className="navbar-signup"> <Link to="/public/signup">SignUp </Link></li>
                <li className="navbar-login"> <Link to="/public/login">Login </Link></li>
            </ul>
            <hr/>
        </div>
    )
}
export default Header;