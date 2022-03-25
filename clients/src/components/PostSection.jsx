import "../stylesheet/postform.css";
import Gallery from "remixicon-react/ImageLineIcon";
import {Input} from "antd";
import Swal from 'sweetalert2';
import { useEffect, useState } from "react";
import { getAllPostData, likepost, postDataInfo } from "../api/postapi";
const {TextArea} = Input;


function PostSection({user, updateUser}){
    const [postData,setPostData]=useState({
        content:"",
        image: null
    });
    
    const [allPost, setAllPost] = useState([]);
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
    
    useEffect(()=>{
        getAllPostData().then(res => setAllPost(res.data.reverse()))
    },[])

    const handleFileChange = (event) => {
       
        setPostData({
            ...postData,
            image: event.target.files[0]
        });
    }

    const handleChange = (event) =>{
        setPostData({
            ...postData,
            content:event.target.value,
        })
    } 

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("content", postData.content);
        formData.append("image", postData.image);

        postDataInfo(formData)
            .then(res => {
                updateUser(res.data.updatedUser)
                getAllPostData().then(res => setAllPost(res.data.reverse()))
                Toast.fire({
                    icon: 'success',
                    title: 'Post Created Successfully'
                })
                setPostData({
                    content:"",
                    image: null
                })
            })
            .catch(err=>{
                Toast.fire({
                    icon: 'error',
                    title: 'something went wrong'
                })
            })
    }
    const handleLike =(post) =>{
        let id = post._id
        const previousPostLike = user.likedpost.length;
        
        likepost(id)
            .then((res)=> {
                const { updatedUser } = res.data;
                updateUser(updatedUser);
                getAllPostData().then(res => setAllPost(res.data.reverse()))
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
    return(
        <div className="postform">
            <section className="postform-data">
                <div>
                    <img className="logo-img" src={user.avatar ||"https://pbs.twimg.com/profile_images/1395655338628587524/XOxnFDlg_400x400.jpg"} alt="profile" />
                    <form onSubmit={handleSubmit}>
                        <TextArea onChange={handleChange} value={postData.content} placeholder="Share your view" autoSize />
                        <hr />
                        <div>
                            <input type="file" id="file" onChange={handleFileChange} hidden />
                            <label htmlFor="file"> <Gallery /> </label>
                            <button type="submit">submit</button>
                        </div>
                    </form>
                </div>
            </section>
            <hr />
            {
                allPost.map(post => {
                    return (
                        <section className="postform-post" key ={post._id} >
                            
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
                                <button onClick={()=>handleLike(post)}>Like {post.likes.length}</button>
                            </div>
                        </section>
                    )
                })
            }           
        </div>
    )
}
export default PostSection;