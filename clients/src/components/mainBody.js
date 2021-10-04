import {Link} from "react-router-dom";
function MainBody(){
    return(
        <>
            <div>Local Morning is a news website that keeps you update on what happening around the world. </div>
            <div>
                On this website, we give access to people so they can also post important news which is helpful for other people. 
            </div>
            <div>For continue, Please <Link to="/signup">signUp</Link> </div>
        </>
    )
}
export default MainBody