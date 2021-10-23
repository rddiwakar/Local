import React,{useState, useEffect} from "react";
import HomeIcon from "remixicon-react/Home2LineIcon";
import NewsIcon from "remixicon-react/NewspaperLineIcon";
import ProfileIcon from "remixicon-react/UserLineIcon";
import NewsSection from "./NewsSection";
import "../stylesheet/dashboard.css"
import DashHeader from "./dashheader"
import ProfileSection from "./profileSection";
import PostSection from "./PostSection";
import { Switch, Route,Link} from "react-router-dom";
import ProfileSetting from "./profilesetting";
import MyPost from "./Mypost";
import {userInfo} from "../api/postapi";
import LikePost from "./likepost";

function Dashboard({updateUser,user}){
    const [topics, setTopics]=useState([])
    const [screenSize, setScreenSize] = useState(window.innerWidth);
    const token = localStorage.token;
    useEffect(() => {
        userInfo(token).then((res)=> {updateUser(res.data.user)})
        function updateScreenSize() {
            setScreenSize(window.innerWidth);
        }

        window.addEventListener("resize", updateScreenSize);
    }, [token]);

    return(
        <div>
           <DashHeader setTopics={setTopics} />
                <Switch>
                    <Route path="/private/dashboard/profilesection">
                        <ProfileSection updateUser={updateUser} user = {user} />    
                    </Route> 
                    <Route path="/private/dashboard/newssection" >
                        <NewsSection topics={topics} />
                    </Route>
                    <Route path ="/private/dashboard/setting" >
                        < ProfileSetting updateUser={updateUser} />
                     </Route>
                    <Route path ="/private/dashboard/mypost">
                        <MyPost user={user} updateUser={updateUser} />    
                    </Route> 
                    <Route path ="/private/dashboard/likepost">
                        <LikePost user={user} updateUser={updateUser} />    
                    </Route> 
                    {screenSize > 760 ?
                    <Route exact path="/private/dashboard">
                        <div className="dashboard">
                            <ProfileSection updateUser={updateUser} user = {user} />
                            <PostSection user = {user} updateUser={updateUser} />
                            <NewsSection topics={topics} />               
                        </div> 
                    </Route>
                    :<div>
                        <Route exact path="/private/dashboard">
                            <PostSection user = {user} updateUser={updateUser} />
                        </Route>
                                 
                        
                    </div>}           
                </Switch> 
                {screenSize > 760 ?
                     "": <div>
                            <hr />
                            <div className="mobile-navigator">
                                <button><Link to="/private/dashboard"><HomeIcon /></Link> </button>
                                <button><Link to="/private/dashboard/newssection"><NewsIcon /></Link> </button>
                                <button><Link to="/private/dashboard/profilesection"><ProfileIcon /></Link> </button>
                            </div>                       
                        </div>}                
        </div>
    )
}
export default Dashboard