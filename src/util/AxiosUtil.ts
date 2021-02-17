import axios from "axios";
import { message as Message } from 'antd';
import TokenUtil from "./TokenUtil";


axios.defaults.baseURL = "http://localhost"
axios.defaults.headers = { token: TokenUtil.getToken() }
axios.interceptors.request.use(config => {
    const token = TokenUtil.getToken()
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
        }
        return response
    },
    error => {
        return Promise.reject(error.response.status)
    })