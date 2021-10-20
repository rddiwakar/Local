import "../stylesheet/postform.css";
//import Gallery from "remixicon-react/ImageLineIcon";
import {Input} from "antd";
//import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllPostData, likepost, postDataInfo } from "../api/postapi";
const {TextArea} = Input;

function PostSection({user}){
    const [postData,setPostData]=useState({
        content:"",
        image: null
    })
    const [allPost, setAllPost] = useState([])
    
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
                
                getAllPostData().then(res => setAllPost(res.data.reverse()))
            });
    }
    const handleLike =(id) =>{
        likepost(id).then(()=> {
            getAllPostData().then(res => setAllPost(res.data.reverse()))
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
                            {/* <p> <Gallery /> </p> */}
                            <input type="file" onChange={handleFileChange} />
                            <button type="submit">submit</button>
                        </div>
                    </form>
                </div>
            </section>
            <hr />
            {
                allPost.map(post => {
                    return (<section className="postform-post">
                        <div className="form-post-header">
                            <img className="logo-img" src ={post.createdby.avatar} alt="profile"  />
                            <h3>{post.createdby.username}</h3>
                        </div>
                        <hr />
                        <div>
                            <p>{post.content}</p>
                        </div>
                        {console.log("this is console")}
                        <div>
                            {post.image && <img className="postimg" src={post.image} alt="postimg" />}
                        </div>
                        <div>
                            <button onClick={()=>handleLike(post._id)}>Like {post.likes.length}</button>
                        </div>
                    </section>)
                })
            }           
        </div>
    )
}
export default PostSection;