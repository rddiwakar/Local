
import SearchIcon from "remixicon-react/Search2LineIcon";
import "../stylesheet/dashHeader.css"
function DashHeader(){
    return(
        <div className="dash_header">
            <div>Local Morning</div>
            <div className="searchbar">
                <input  placeholder="search here"/>
                <p><SearchIcon size="2rem"/></p>
            </div>  
        </div>
    )
}
export default DashHeader;