import React,{useState, useEffect} from "react";
import HomeIcon from "remixicon-react/Home2LineIcon";
import NewsIcon from "remixicon-react/NewspaperLineIcon";
import ProfileIcon from "remixicon-react/UserLineIcon";
import NewsBody from "./NewsBody";
import "../stylesheet/dashboard.css"
import DashHeader from "./dashheader"
import ProfileSection from "./profileSection";
import PostForm from "./PostForm";
import {BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";
import ProfileSetting from "./profilesetting";
import MyPost from "./Mypost";

function Dashboard(){
    const [screenSize, setScreenSize] = useState(window.innerWidth);

    useEffect(() => {
        console.log("useEffect");
        function updateScreenSize() {
            setScreenSize(window.innerWidth);
        }

        window.addEventListener("resize", updateScreenSize);
    }, []);

    return(
        <div>
            <DashHeader />
                <Router> 
                        <Switch>
                                <Route path ="/private/dashboard/setting" component={ ProfileSetting } />
                                <Route path ="/private/dashboard/mypost" component={MyPost} /> 
                                {screenSize > 760 ?
                                 <Route path="/private/dashboard">
                                    <div className="dashboard">
                                        <ProfileSection />
                                        <PostForm />
                                        <NewsBody />               
                                    </div> 
                                </Route>
                                :<div>
                                    <Route exact path="/private/dashboard" component={PostForm} />
                         
                                    <Route path="/private/dashboard/profilesection" component={ProfileSection} />
                            
                                    <Route path="/private/dashboard/newssection" component={NewsBody} />
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
                </Router>
        </div>
    )
}
export default Dashboard