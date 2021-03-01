import React, { useState } from 'react'
import { Divider, Input, Button } from 'antd'
import axios from 'axios';
import './index.css'

export default function Login(props: any) {
    const [account, setAccount] = useState('')
    const [password, setPassword] = useState('')

    function changeAccount({ target: { value } }: any) {
        setAccount(value)
    }
    function changePassword({ target: { value } }: any) {
        setPassword(value)
    }

    function loginAdmin() {
        const param = {
            account: account,
            password: password
        }
        axios.post('/api/login', param).then((res) => {
            const { token } = res.data.result
            localStorage.setItem('token', token)
            localStorage.setItem('editBlogId', '')
            localStorage.setItem('userInfo', JSON.stringify(res.data.result))
            props.props && props.props.history.push("/edit");
        })
    }

    return (
        <div className='loginContainer'>
            <Divider>登录</Divider>
            <Input className='accountStyle' placeholder="用户名" value={account} onChange={changeAccount} />
            <Input.Password className='passwordStyle' placeholder="密码" value={password} onChange={changePassword} />
            <Button type='primary' className='buttonStyle' onClick={loginAdmin}>登录</Button>
        </div>
    )
}
