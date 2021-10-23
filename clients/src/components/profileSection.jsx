import "../stylesheet/profileSection.css";
import Settings2LineIcon from "remixicon-react/Settings2LineIcon";
import ThumbUpLineIcon from "remixicon-react/ThumbUpLineIcon";
import MyPost from "remixicon-react/Message2LineIcon";
import LogOut from "remixicon-react/LogoutBoxLineIcon";
import React from "react";
import {Link, useHistory} from "react-router-dom";

function ProfileSection({updateUser, user}){
    const history = useHistory();

    return(
        <div className="navigation">
            <figure className="profile">
                <Link to="/private/dashboard/setting">
                    <div className="profile-background">
                        <img className="profile-image" src={user.avatar||"https://pbs.twimg.com/profile_images/1395655338628587524/XOxnFDlg_400x400.jpg"} alt="profile" />
                    </div>             
                    <figcaption>
                        <h3>{user.username ||"user"}</h3>
                    </figcaption>
                    <p>{user.bio}</p>
                </Link>
                
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
                            <li ><Link to="/private/dashboard/mypost" className="profile-follow"> <MyPost /> <span>My Post</span> </Link></li>
                            <li ><Link to= "/private/dashboard/likepost" className="profile-follow"><ThumbUpLineIcon /><span>Liked Post</span></Link></li>
                            <li ><Link to="/private/dashboard/setting" className="profile-follow"><Settings2LineIcon/> <span>Setting</span></Link> </li>
                            <li className="profile-follow" onClick={() => {
                                localStorage.clear();
                                updateUser(null);
                                history.push("/");
                            }}><LogOut /><span>Log Out</span></li>
                        </ul>
                        
                </section>
            </figure>
        </div>
    )
}
export default ProfileSection;