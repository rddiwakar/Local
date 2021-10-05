
import NewsBody from "./NewsBody";
import "../stylesheet/dashboard.css"
import Dash_Header from "./dashheader"
import ProfileSection from "./profileSection";
import PostForm from "./PostForm";
function DashBoard(){
    return(
        <div>
            <Dash_Header />
            <div className="dashboard">
                <ProfileSection />
                <PostForm />
                <NewsBody />
            </div>
        </ div>
    )
}
export default DashBoard