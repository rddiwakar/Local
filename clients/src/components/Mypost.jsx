import { useState, useEffect } from "react";
import {likepost} from "../api/postapi"

import "../stylesheet/postform.css";
function MyPost({ user }){
    const [currentUser, setCurrentUser] = useState(user);

    useEffect(() => {
        setCurrentUser(user);
    }, [user]);
    const handleLike = (id) => {
        likepost(id)
    }

    return(
        <div className="myPost">
            {
                currentUser.posts && currentUser.posts.map(post => {
                    return (<section className="postform-post">
                        <div className="form-post-header">
                            <img className="logo-img" src ={currentUser.avatar} alt="profile"  />
                            <h3>{currentUser.username}</h3>
                        </div>
                        <hr />
                        <div>
                            <p>{post.content}</p>
                        </div>
                        <div>
                            {post.image && <img className="postimg" src={post.image} alt="postimg" />}
                        </div>
                        <div>
                            <button onClick={()=>handleLike(post._id)} >Like {post.likes.length}</button>
                        </div>
                    </section>)
                })
            }
        </div>
    )
}
export default MyPost;