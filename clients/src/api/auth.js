import axios from "axios";

const url = "/api/auth/register"

export  const signIn = (signInDetails)=> axios({
    method: "post",
    url,
    data: signInDetails,
    headers: {
        "content-type": "application/json",
        "authorization": ""
    }
});