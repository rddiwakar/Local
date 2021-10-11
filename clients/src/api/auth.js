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

const url2 = "/api/auth/login"
export  const logIn = (logInDetails)=> axios({
    method: "post",
    url: url2,
    data: logInDetails,
    headers: {
        "content-type": "application/json",
        "authorization": ""
    }
});
