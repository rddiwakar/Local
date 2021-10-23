import React, {useEffect} from "react";
import {userInfo} from "../api/postapi";
import Swal from 'sweetalert2';
export const Gtoken = ({updateUser})=> {
    var url = window.location;
    var token = new URLSearchParams(url.search).get('t');
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
        Toast.fire({
            icon: 'success',
            title: 'Login successfully'
        })
        localStorage.token = token;
        userInfo(token).then((res)=> {
            console.log(res.data.user)
            updateUser(res.data.user)
        })
    },[token,updateUser])
    return (
        <div>
            loading...
        </div>
    )
}