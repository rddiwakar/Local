import React, {useEffect} from "react";
import {userInfo} from "../api/postapi";
export const Gtoken = ({updateUser})=> {
    var url = window.location;
    var token = new URLSearchParams(url.search).get('t');
    useEffect(()=>{
        localStorage.token = token;
        userInfo(token).then((res)=> {
            console.log(res.data.user)
            updateUser(res.data.user)
        })
    },[])
    return (
        <div>
            loading...
        </div>
    )
}