import Input from "./input"
function Dash_Header(){
    return(
        <div className="dash_header">
            <div>Local Morning</div>
            <div className="searchbar">
                <Input  placeholder="search here"/>
                <button type="button">search</button>
            </div>
            
            
        </div>
    )
}
export default Dash_Header;