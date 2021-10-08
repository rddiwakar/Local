import TextArea from "antd/lib/input/TextArea"
import  Input  from "./input";
import "../stylesheet/form.css"
function ProfileSetting(){
    return(
        <>
            <form className="auth-form profilesetting">
                <Input  type="text" title ="Name" placeholder="change user name"/>
                <Input type="password" title = "Password" placeholder="change your password" />
                <label>Bio</label>
                <br />
                <TextArea placeholder="write your bio.." autoSize/>
                <br/>
                <button >submit</button>
            </form>
        </>
    )
}
export default ProfileSetting