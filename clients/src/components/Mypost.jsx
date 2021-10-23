import { useState, useEffect } from "react";
import {deletepost, likepost} from "../api/postapi"
import Swal from 'sweetalert2';

import "../stylesheet/postform.css";
function MyPost({ user, updateUser }){
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
            })
    }
    const handleDelete = (id) =>{
        deletepost(id).then(res => {
            const { updatedUser } = res.data;
            updateUser(updatedUser);
            Toast.fire({
                icon: 'error',
                title: `Deleted post successfully`
            })
        })
    }

    return(
        <div className="myPost">
            {
                currentUser.posts && currentUser.posts.map(post => {
                    return (<section className="postform-post" key ={post._id}>
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