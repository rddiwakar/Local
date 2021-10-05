import "../stylesheet/profileSection.css";
import Settings2LineIcon from "remixicon-react/Settings2LineIcon";
import ThumbUpLineIcon from "remixicon-react/ThumbUpLineIcon";
import MyPost from "remixicon-react/Message2LineIcon";
import LogOut from "remixicon-react/LogoutBoxLineIcon"
function profileSection(){
    return(
        <div className="navigation">
            <figure className="profile">
                <div className="profile-background">
                    <img className="profile-image" src="https://pbs.twimg.com/profile_images/1395655338628587524/XOxnFDlg_400x400.jpg" alt="profile" />
                </div>               
                <figcaption>Rahul Diwakar</figcaption>
                <p>Learning full stack development and building visionmad.com</p>
                <br />
                <hr />
                <div>
                    <div className="profile-follow">
                        <h3>Follower</h3>
                        <p>260</p>
                    </div>
                    <div className="profile-follow">
                        <h3>Following</h3>
                        <p>260</p>
                    </div>
                </div>
                <hr />
                <section >
                    <ul>
                        <li className="profile-follow"><MyPost /> <span>My Post</span></li>
                        <li className="profile-follow"><ThumbUpLineIcon /><span>Liked Post</span></li>
                        <li className="profile-follow"><Settings2LineIcon/> <span>Setting</span></li>
                        <li className="profile-follow"><LogOut /><span>Log Out</span></li>
                    </ul>
                </section>
            </figure>
        </div>
    )
}
export default profileSection;