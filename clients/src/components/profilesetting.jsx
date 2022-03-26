import TextArea from "antd/lib/input/TextArea"
import Input from "./input";
import "../stylesheet/form.css"
import Swal from 'sweetalert2';
import { useState } from "react";
import { changeUserBio, changeUserEmail, changeUserName, changeUserPassword,setProfilePic } from "../api/setting";
function ProfileSetting({ updateUser }) {
    const [settingDetails, setSettingDetails] = useState({
        username: "",
        oldpassword: "",
        newpassword: "",
        bio: "",
        oldemail: "",
        newemail: "",
        avatar:[],
    })
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
    const handleChange = (event) => {
        const { name, value } = event.target
            setSettingDetails({
                ...settingDetails,
                [name]: value
            }) 
        console.log(settingDetails) 
    }
    const changeusername = (event) => {
        event.preventDefault();
        const username = { username: settingDetails.username }
        changeUserName(username)
            .then(res => {
                updateUser(res.data.user);
                Toast.fire({
                    icon: 'success',
                    title: `Username change successfully`
                })
            })
            .catch(err => console.log(err))
        setSettingDetails({
            username: ""
        })
    }
    const changeuserbio = (event) => {
        event.preventDefault();
        const bio = { bio: settingDetails.bio }
        changeUserBio(bio)
            .then(res => {
                updateUser(res.data.user);
                Toast.fire({
                    icon: 'success',
                    title: `New Bio Created`
                })
            })
            .catch(err => console.log(err))
        setSettingDetails({
            bio: ""
        })
    }
    const changeuseremail = (event) => {
        event.preventDefault();
        const email = { oldemail: settingDetails.oldemail, newemail: settingDetails.newemail }
        changeUserEmail(email)
            .then(res => {
                updateUser(res.data.user)
                Toast.fire({
                    icon: 'success',
                    title: `Email Change Successfully`
                })
            })
            .catch(err => {
                console.log(err)
                Toast.fire({
                    icon: 'error',
                    title: `Please fill correctly`
                })
            })

        setSettingDetails({
            oldemail: "",
            newemail: ""
        })
    }
    const changeuserpassword = (event) => {
        event.preventDefault();
        const password = { oldpassword: settingDetails.oldpassword, newpassword: settingDetails.newpassword };
        changeUserPassword(password)
            .then(res => {
                updateUser(res.data.user);
                Toast.fire({
                    icon: 'success',
                    title: `Password change successfully`
                })
            })
            .catch(error => {
                Toast.fire({
                    icon: 'error',
                    title: `Old password Error`
                })
            })
    }
    const setAvtar = (event)=>{
        event.preventDefault();
        const formData = new FormData();
        formData.append('avatar',settingDetails.avatar)
        setProfilePic(formData)
        .then(res => {
            updateUser(res.data.user);
            Toast.fire({
                icon: 'success',
                title: `Pic change successfully`
            })
        })
        .catch(error => {
            Toast.fire({
                icon: 'error',
                title: `Error Occured`
            })
        })
    }
    const handleAvtar = event =>{
        setSettingDetails({
            ...settingDetails,    
            avatar: event.target.files[0]
        })
    }
    return (
        <>
            <h1>Settings</h1>
            <form className="auth-form profilesetting" >
                <div>
                    <Input  onChange={handleAvtar} type="file" title="Profile Pic"   />
                    <button onClick={setAvtar}>change</button>
                </div>
                <hr />
                <div>
                    <Input value={settingDetails.username} onChange={handleChange} type="text" title="Name" placeholder="change user name" name="username" />
                    <button onClick={changeusername}>change</button>
                </div>
                <hr />
                <div>
                    <Input value={settingDetails.oldemail} onChange={handleChange} type="text" title="OldEmail" placeholder="OldPassword" name="oldemail" />
                    <Input value={settingDetails.newemail} onChange={handleChange} type="text" title="NewEmail" placeholder="NewPassword" name="newemail" />
                    <button onClick={changeuseremail}>change</button>
                </div>
                <hr />
                <div>
                    <br />
                    <TextArea value={settingDetails.bio} onChange={handleChange} name="bio" placeholder="write your bio.." autoSize />
                    <br />
                    <button onClick={changeuserbio}>change</button>
                </div>
                <hr />
                <div>
                    <Input value={settingDetails.oldpassword} onChange={handleChange} type="password" title="OldPassword" placeholder="Old Password" name="oldpassword" />
                    <Input value={settingDetails.newpassword} onChange={handleChange} type="password" title="NewPassword" placeholder="New Password" name="newpassword" />

                    <button onClick={changeuserpassword} >change</button>
                </div>
            </form>
        </>
    )
}
export default ProfileSetting