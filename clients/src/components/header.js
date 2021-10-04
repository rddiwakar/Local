import { Link} from 'react-router-dom'
function Header(){
    return(
        <div className="Header">
            <ul>
                <li > <Link to="/">LOgo Local Morning </Link></li>
                <li> <Link to="/signup">SignUP </Link></li>
                <li> <Link to="/login">Login </Link></li>
            </ul>
            <hr/>
        </div>
    )
}
export default Header;