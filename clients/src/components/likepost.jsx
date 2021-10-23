import { useState, useEffect } from "react";
import { likepost } from "../api/postapi";
import Swal from 'sweetalert2';

import "../stylesheet/postform.css";
function LikePost({ user, updateUser }){
    const [currentUser, setCurrentUser] = useState(user);
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    useEffect(() => {
        setCurrentUser(user);
    }, [user]);
    const handleLike = (id) => {
        const previousPostLike = user.likedpost.length;
        likepost(id)
            .then(res => {
                const { updatedUser } = res.data;
                updateUser(updatedUser);
                let currentPostLike =updatedUser.likedpost.length
                previousPostLike > currentPostLike ?
                    Toast.fire({
                        icon: 'error',
                        title: `You dislike ${user.likedpost[user.likedpost.length-1].createdby.username} post`
                    }):Toast.fire({
                        icon: 'success',
                        title: `You like ${updatedUser.likedpost[updatedUser.likedpost.length-1].createdby.username} post`
                    })
            });
    }

    return(
        <div className="myPost">
            {
                currentUser.posts && currentUser.likedpost.map(post => {
                    return (<section className="postform-post" key ={post._id}>
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