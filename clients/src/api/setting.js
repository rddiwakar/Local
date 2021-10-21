import axios from "axios";
export  const changeUser = (username) => axios({
    method: "patch",
    url: "/api/private/username",
    data:username,
    headers: {
        "content-type": "application/json",
        "authorization": "Bearer "+ localStorage.token
    }
})
export  const changeUserEmail = (email) => axios({
    method: "patch",
    url: "/api/private/email",
    data:email,
    headers: {
        "content-type": "application/json",
        "authorization": "Bearer "+ localStorage.token
    }
})
export  const changeUserBio = (bio) => axios({
    method: "patch",
    url: "/api/private/bio",
    data:bio,
    headers: {
        "content-type": "application/json",
        "authorization": "Bearer "+ localStorage.token
    }
})