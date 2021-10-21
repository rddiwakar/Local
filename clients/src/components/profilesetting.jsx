import TextArea from "antd/lib/input/TextArea"
import  Input  from "./input";
import "../stylesheet/form.css"
import { useState } from "react";
import { changeUserBio } from "../api/setting";
function ProfileSetting(){
    const [settingDetails,setSettingDetails]= useState({
        username:"",
        password:"",
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
    const changebio = (event) =>{
        event.preventDefault();
        const bio = settingDetails.bio
        changeUserBio(bio)
            .then(res => console.log(res))
    }
    return(
        <>
            <h1>Settings</h1>
            <form className="auth-form profilesetting" >
                <div>
                    <Input value={settingDetails.username} onChange={handleChange} type="text" title ="Name" placeholder="change user name" name="username" />
                    <button>change</button>
                </div>
                <div>
                    <Input value={settingDetails.oldemail} onChange={handleChange} type="text" title ="OldEmail" placeholder="OldPassword" name="oldemail" />
                    <Input value={settingDetails.newemail} onChange={handleChange} type="text" title ="NewEmail" placeholder="NewPassword" name="newemail" />
                    <button>change</button> 
                </div>
                <div>
                    <br />
                    <TextArea value={settingDetails.bio} onChange={handleChange} name="bio" placeholder="write your bio.." autoSize/>
                    <br/>
                    <button onClick={changebio} >change</button>
                </div>
                <div>
                    <Input value={settingDetails.password} onChange={handleChange} type="password" title = "Password" placeholder="change your password" name="password" />
                   
                    <button>change</button>
                </div>
            </form>
        </>
    )
}
export default ProfileSetting