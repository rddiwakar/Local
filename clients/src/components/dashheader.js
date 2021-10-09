
import SearchIcon from "remixicon-react/Search2LineIcon";
import "../stylesheet/dashHeader.css";
import {Link} from "react-router-dom";
function DashHeader(){
    return(
        <div className="dash_header">
            <h3><Link to="/private/dashboard">Local Morning</Link></h3>
                <div className="searchbar">
                    <input  placeholder="search here"/>
                    <p><SearchIcon size="2rem"/></p>
                </div>  
        </div>
    )
}
export default DashHeader;