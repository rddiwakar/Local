import { Link} from 'react-router-dom';

function Header(){
    return(
        <div className="header">
            <ul>
                <li className="navbar-logo"> <Link to="/">LOgo Local Morning </Link></li>
                <li className="navbar-signup"> <Link to="/public/signup">SignUp </Link></li>
                <li className="navbar-login"> <Link to="/public/login">Login </Link></li>
            </ul>
            <hr/>
        </div>
    )
}
export default Header;