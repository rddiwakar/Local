import axios from "axios";

export  const userInfo = (token) => axios({
    method: "get",
    url: "/api/private",
    headers: {
        "content-type": "application/json",
        "authorization": "Bearer "+ token
    }
})
export  const postDataInfo = (payload) => axios({
    method: "post",
    url: "/api/private/post",
    data:payload,
    headers: {
        "authorization": "Bearer "+ localStorage.token
    }
})
