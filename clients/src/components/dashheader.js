
import SearchIcon from "remixicon-react/Search2LineIcon";
import "../stylesheet/dashHeader.css";
import {Link, Redirect} from "react-router-dom";
import { newsApi } from "../api/postapi";
import { useEffect, useState } from "react";



function DashHeader({setTopics}){
     const [newsTopic,setNewsTopic]=useState("")
     useEffect(()=>{
        newsApi(newsTopic).then((res)=> {
            setTopics(res.data.articles)
    
        })
     },[])
    
        const handleChange =(event) =>{
            setNewsTopic(event.target.value)
        }
        const handleSubmit =(event) =>{
            event.preventDefault();
            newsApi(newsTopic).then((res)=> {
                setTopics(res.data.articles);
            })
        }
    return(
        <div className="dash_header">
            <h3><Link to="/private/dashboard">Local Morning</Link></h3>
                <div className="searchbar">
                    <input value={newsTopic} onChange={handleChange} placeholder="search latest news here"/>
                    <p onClick={handleSubmit}><SearchIcon size="2rem"/></p>
                </div>  
        </div>
    )
}
export default DashHeader;