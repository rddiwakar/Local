import TextArea from "antd/lib/input/TextArea"
import  Input  from "./input";
import "../stylesheet/form.css"
import { useState } from "react";
import { changeUserBio , changeUserEmail, changeUserName, changeUserPassword} from "../api/setting";
function ProfileSetting({updateUser}){
    const [settingDetails,setSettingDetails]= useState({
        username:"",
        oldpassword:"",
        newpassword:"",
        bio:"",
        oldemail:"",
        newemail:""
    })
    const handleChange = (event) =>{
        const {name , value} = event.target
        setSettingDetails({
            ...settingDetails,
            [name]: value
        })
    }
    const changeusername = (event) =>{
        event.preventDefault();
        const username = {username:settingDetails.username}
        changeUserName(username)
            .then(res => {
                console.log(res)
                updateUser(res.data.user)
            })
            .catch(err => console.log(err))
        setSettingDetails({
            username:""
        })    
    }
    const changeuserbio = (event) =>{
        event.preventDefault();
        const bio = {bio:settingDetails.bio}
        changeUserBio(bio)
            .then(res => {
                console.log(res)
                updateUser(res.data.user)
            })
            .catch(err => console.log(err))
        setSettingDetails({
            bio:""
        })    
    }
    const changeuseremail = (event) =>{
        event.preventDefault();
        const email = {oldemail:settingDetails.oldemail,newemail:settingDetails.newemail}
        changeUserEmail(email)
            .then(res => {
                console.log(res)
                updateUser(res.data.user)
            })
            .catch(err => console.log(err))

        setSettingDetails({
            oldemail:"",
            newemail:""
        })
    }
    const changeuserpassword = (event) =>{
        event.preventDefault();
        const password = {oldpassword:settingDetails.oldpassword, newpassword:settingDetails.newpassword};
        changeUserPassword(password)
            .then(res => {
                console.log(res)
                updateUser(res.data.user)
            })
            .catch(error =>console.log(error))
    }
    return(
        <>
            <h1>Settings</h1>
            <form className="auth-form profilesetting" >
                <div>
                    <Input value={settingDetails.username} onChange={handleChange} type="text" title ="Name" placeholder="change user name" name="username" />
                    <button onClick={changeusername}>change</button>
                </div>
                <div>
                    <Input value={settingDetails.oldemail} onChange={handleChange} type="text" title ="OldEmail" placeholder="OldPassword" name="oldemail" />
                    <Input value={settingDetails.newemail} onChange={handleChange} type="text" title ="NewEmail" placeholder="NewPassword" name="newemail" />
                    <button onClick={changeuseremail}>change</button> 
                </div>
                <div>
                    <br />
                    <TextArea value={settingDetails.bio} onChange={handleChange} name="bio" placeholder="write your bio.." autoSize/>
                    <br/>
                    <button onClick={changeuserbio}>change</button>
                </div>
                <div>
                    <Input value={settingDetails.oldpassword} onChange={handleChange} type="password" title = "OldPassword" placeholder="Old Password" name="oldpassword" />
                    <Input value={settingDetails.newpassword} onChange={handleChange} type="password" title = "NewPassword" placeholder="New Password" name="newpassword" />
                   
                    <button onClick={changeuserpassword} >change</button>
                </div>
            </form>
        </>
    )
}
export default ProfileSetting