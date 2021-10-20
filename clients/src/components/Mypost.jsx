import { useState, useEffect } from "react";
import {deletepost, likepost} from "../api/postapi"

import "../stylesheet/postform.css";
function MyPost({ user, updateUser }){
    const [currentUser, setCurrentUser] = useState(user);

    useEffect(() => {
        setCurrentUser(user);
    }, [user]);
    const handleLike = (id) => {
        likepost(id)
            .then(res => {
                const { updatedUser } = res.data;
                updateUser(updatedUser);
            })
    }
    const handleDelete = (id) =>{
        deletepost(id).then(res => {
            const { updatedUser } = res.data;
            updateUser(updatedUser);
        })
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
                        <div>
                            <button onClick={()=>handleDelete(post._id)} >Delete</button>
                        </div>
                        
                    </section>)
                })
            }
        </div>
    )
}
export default MyPost;