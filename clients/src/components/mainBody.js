import {Link} from "react-router-dom";
function MainBody(){
    return(
        <div className = "hero">
            <h1>Local Morning</h1>
            <h3>Local Morning is a news website that keeps you update on what happening around the world. </h3>
            <h3>
                On this website, we give access to people so they can also post important news which is helpful for other people. 
            </h3>
            <h3>For continue, Please <Link to="/signup">signUp</Link> </h3>
        </div>
    )
}
export default MainBody