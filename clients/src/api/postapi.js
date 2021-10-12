import axios from "axios";

export  const userInfo = (token) => axios({
    method: "get",
    url: "/api/private",
    headers: {
        "content-type": "application/json",
        "authorization": "Bearer "+ token
    }
})