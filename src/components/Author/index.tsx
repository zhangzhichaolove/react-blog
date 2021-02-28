import React, { Component } from 'react'
import { Avatar, Divider } from 'antd'
import { WechatOutlined, WeiboCircleOutlined, QqOutlined, GithubOutlined } from '@ant-design/icons';
import './index.css'

export default class index extends Component {
    render() {
        return (
            <div>
                <Avatar size={80} src='/admin.png' className='avatarStyle' />
                <div>
                    独特编程思想才是真正的巨人、
                    <Divider>社交账号</Divider>
                    <a href="https://github.com/zhangzhichaolove"><WechatOutlined className='socialStyle' /></a>
                    <a href="https://github.com/zhangzhichaolove"><WeiboCircleOutlined className='socialStyle' /></a>
                    <a href="https://github.com/zhangzhichaolove"><QqOutlined className='socialStyle' /></a>
                    <a href="https://github.com/zhangzhichaolove"><GithubOutlined className='socialStyle' /></a>
                </div>
            </div>
        )
    }
}
