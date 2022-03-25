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
export  const changeUserName = (username) => axios({
    method: "patch",
    url: "/api/private/setting/username",
    data:username,
    headers: {
        "content-type": "application/json",
        "authorization": "Bearer "+ localStorage.token
    }
})
export  const changeUserPassword = (password) => axios({
    method: "patch",
    url: "/api/private/setting/password",
    data:password,
    headers: {
        "content-type": "application/json",
        "authorization": "Bearer "+ localStorage.token
    }
})
export  const setProfilePic = (data) => axios({
    method: "patch",
    url: "/api/private//upload-avatar",
    data:data ,
    headers: {
        "authorization": "Bearer "+ localStorage.token
    }
})