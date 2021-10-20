import TextArea from "antd/lib/input/TextArea"
import  Input  from "./input";
import "../stylesheet/form.css"
import { useState } from "react";
function ProfileSetting(){
    const [settingDetails,setSettingDetails]= useState({
        username:"",
        password:"",
        bio:"",
    })
    const handleChange = (event) =>{
        const {name , value} = event.target
        setSettingDetails({
            ...settingDetails,
            [name]: value
        })
    }
    return(
        <>
            <form className="auth-form profilesetting">
                <Input value={settingDetails.username} onChange={handleChange} type="text" title ="Name" placeholder="change user name" name="username" />
                <Input value={settingDetails.password} onChange={handleChange} type="password" title = "Password" placeholder="change your password" name="password" />
                <label>Bio</label>
                <br />
                <TextArea value={settingDetails.bio} onChange={handleChange} name="bio" placeholder="write your bio.." autoSize/>
                <br/>
                <button >submit</button>
            </form>
        </>
    )
}
export default ProfileSetting