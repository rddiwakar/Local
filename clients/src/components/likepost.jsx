import { useState, useEffect } from "react";
import { likepost } from "../api/postapi";


import "../stylesheet/postform.css";
function LikePost({ user, updateUser }){
    const [currentUser, setCurrentUser] = useState(user);

    useEffect(() => {
        setCurrentUser(user);
    }, [user]);
    const handleLike = (id) => {
        likepost(id)
            .then(res => {
                const { updatedUser } = res.data;
                updateUser(updatedUser);
            });
    }

    return(
        <div className="myPost">
            {
                currentUser.posts && currentUser.likedpost.map(post => {
                    return (<section className="postform-post">
                        <div className="form-post-header">
                            <img className="logo-img" src ={post.createdby.avatar} alt="profile"  />
                            <h3>{post.createdby.username}</h3>
                        </div>
                        <hr />
                        <div>
                            <p>{post.content}</p>
                        </div>
                        <div>
                            {post.image && <img className="postimg" src={post.image} alt="postimg" />}
                        </div>
                        <div>
                            <button onClick={() =>handleLike(post._id)}>Like {post.likes.length}</button>
                        </div>
                    </section>)
                })
            }
        </div>
    )
}
export default LikePost;