import request from  "../../axios/axios"

//注册
export const register = (data) => {
    return request({
        url:'/api/user/register',
        method:'post',
        data:data
    })
}

export const login = (data) => {
    return request({
        url:'/api/user/login',
        method:'post',
        data:data
    })
}

export const getUserInfo = (userId,token) => {
    return request({
        url:'/api/user/getInfo',
        method:'post',
        data:{
            userId,
            token
        }
    })
}