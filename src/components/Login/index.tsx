import React from 'react'
import { Button } from 'antd'
import axios from 'axios';
import TokenUtil from '../../util/TokenUtil';

export default function Login(props: any) {

    function loginAdmin() {
        const param = {
            account: "13594347817",
            password: "123456"
        }
        axios.post('/api/login', param).then((res) => {
            const { token } = res.data.result
            TokenUtil.token = token
            props.props && props.props.history.push("/edit");
        })
    }

    return (
        <div>
            <Button type='primary' onClick={loginAdmin}>登录</Button>
        </div>
    )
}
