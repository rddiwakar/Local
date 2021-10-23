import axios from "axios";

const url1 = "/api/auth/register"

export  const signIn = (signInDetails)=> axios({
    method: "post",
    url: url1,
    data: signInDetails,
    headers: {
        "content-type": "application/json",
        "authorization": ""
    }
});
 
export  const logIn = (logInDetails)=> axios({
    method: "post",
    url: "/api/auth/login",
    data: logInDetails,
    headers: {
        "content-type": "application/json",
        "authorization": ""
    }
});
export const ForgetPassword =(email)=> axios({
    method: "post",
    url: "/api/auth/forgotpassword",
    data: email,
    headers: {
        "content-type": "application/json",
        "authorization": ""
    }
})
export const PatchResetPassword =(password, id)=> axios({
    method: "patch",
    url: "/api/auth/resetpassword/"+ id,
    data: password,
    headers: {
        "content-type": "application/json",
        "authorization": ""
    }
})
