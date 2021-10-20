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
export const newsApi = (query) => axios({
    method: "get",
    url:`/api/private/news?q=${query}}`,
    headers: {
        "authorization": "Bearer "+ localStorage.token
    }
})
export const getAllPostData = () => axios({
    method: "get",
    url:`/api/private/getallpost`,
    headers: {
        "authorization": "Bearer "+ localStorage.token
    }
})
export  const likepost = (id) => axios({
    method: "patch",
    url: "/api/private/post/like/" + id,
    headers: {
        "authorization": "Bearer "+ localStorage.token
    }
})

