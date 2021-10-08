import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import DashHeader from "./dashheader";
import NewsBody from "./NewsBody";
import ProfileSection from "./profileSection";
import PostForm from "./PostForm";
import HomeIcon from "remixicon-react/Home2LineIcon";
import NewsIcon from "remixicon-react/NewspaperLineIcon";
import ProfileIcon from "remixicon-react/UserLineIcon";
import "../stylesheet/dashboard.css";
import ProfileSetting from "./profilesetting";
import MyPost from "./Mypost"
function MobileDashboard(){
    return(
        <div>
           <DashHeader /> 
           <Router>
                <div>
                    <Switch>
                        <Route path ="/profilesetting">
                            <ProfileSetting />
                        </Route>
                        <Route path ="/mypost" >
                            <MyPost />
                        </Route>
                        <Route exact path="/">
                            <PostForm />
                        </Route>
                        <Route path="/profilesection">
                            <ProfileSection />
                        </Route>
                        <Route path="/newssection">
                            <NewsBody />
                        </Route>
                    </Switch>
                    <hr />
                    <div className="mobile-navigator">
                        <button><Link to="/"><HomeIcon /></Link> </button>
                        <button><Link to="/newssection"><NewsIcon /></Link> </button>
                        <button><Link to="/profilesection"><ProfileIcon /></Link> </button>
                    </div>
                </div>
           </Router>
        </div>
    )
}
export default MobileDashboard;