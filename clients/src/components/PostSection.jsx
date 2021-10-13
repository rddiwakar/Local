import "../stylesheet/postform.css";
//import Gallery from "remixicon-react/ImageLineIcon";
import {Input} from "antd";
import { Link } from "react-router-dom";
import { useState } from "react";
import { postDataInfo } from "../api/postapi";
const {TextArea} = Input;

function PostSection({user}){
    const [postData,setPostData]=useState({
        content:"",
        image: null
    })

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
            .then(res => console.log(res));
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
            <section className="postform-post">
                <Link to="/private/dashboard/mypost">
                    <div className="form-post-header">
                        <img className="logo-img" src ="https://pbs.twimg.com/profile_images/1395655338628587524/XOxnFDlg_400x400.jpg" alt="profile"  />
                        <h3>rddiwakar</h3>
                    </div>
                </Link>
                
                <hr />
                <div>
                    <h3>Lorem</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus necessitatibus assumenda facilis vero maxime cum molestias aliquid error quam nostrum velit illum sit, quos qui quibusdam et id neque. Eum!</p>
                </div>
                <div>
                    <img className="postimg" src="https://www.thesprucepets.com/thmb/kV_cfc9P4QWe-klxZ8y--awxvY4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/adorable-white-pomeranian-puppy-spitz-921029690-5c8be25d46e0fb000172effe.jpg" alt="dog" />
                </div>
                <div>
                    <button>Like</button>
                </div>
            </section>
            <section className="postform-post">
                <Link to="/private/dashboard/mypost">
                    <div className="form-post-header">
                        <img className="logo-img" src ="https://pbs.twimg.com/profile_images/1395655338628587524/XOxnFDlg_400x400.jpg" alt="profile"  />
                        <h3>rddiwakar</h3>
                    </div>
                </Link>
                <hr />
                <div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus necessitatibus assumenda facilis vero maxime cum molestias aliquid error quam nostrum velit illum sit, quos qui quibusdam et id neque. Eum!</p>
                </div>
                <div>
                    <img className="postimg" src="https://www.thesprucepets.com/thmb/kV_cfc9P4QWe-klxZ8y--awxvY4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/adorable-white-pomeranian-puppy-spitz-921029690-5c8be25d46e0fb000172effe.jpg" alt="dog" />
                </div>
                <div>
                    <button>Like</button>
                </div>
            </section>
            
        </div>
    )
}
export default PostSection;