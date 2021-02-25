import axios from "axios";
import { message as Message } from 'antd';

//"development","production"
// axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost' : ''//window.location.host
// axios.defaults.headers = { token: TokenUtil.getToken() }
axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers.token = token
    }
    return config
}, err => {
    return Promise.reject(err)
})

axios.interceptors.response.use(
    response => {
        if (response.data.code && response.data.code !== 200) {
            switch (response.data.code) {
                case 401:
                    Message.error("登录失效,请重新登录!")
                    break
                default:
                    Message.error(response.data.message)
                    break
            }
            return Promise.reject(response.data.message)
        }
        return response
    },
    error => {
        return Promise.reject(error)
    })