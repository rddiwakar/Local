
import NewsBody from "./NewsBody";
import "../stylesheet/dashboard.css"
import DashHeader from "./dashheader"
import ProfileSection from "./profileSection";
import PostForm from "./PostForm";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ProfileSetting from "./profilesetting";
import MyPost from "./Mypost";

function DasktopDashBoard(){
        return(
            <div>
                <DashHeader />
                <Router>
                    <Switch >
                        <Route exact path = "/">
                        <div className="dashboard">
                            <ProfileSection />
                            <PostForm />
                            <NewsBody />               
                        </div>  
                        </Route>
                        <Route path ="/profilesetting">
                            <ProfileSetting />
                        </Route>
                        <Route path ="/mypost" >
                            <MyPost />
                        </Route>
                    </Switch>
                </Router>          
            </ div>
        ) 
}
// 
export default DasktopDashBoard