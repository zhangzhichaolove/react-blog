import React, { Component } from 'react'
import { Avatar, Divider } from 'antd'
import { WechatOutlined, WeiboCircleOutlined, QqOutlined, GithubOutlined } from '@ant-design/icons';
import './index.css'

export default class index extends Component {
    render() {
        return (
            <div>
                <Avatar size={80} src='https://secure.gravatar.com/avatar/ab0b8d7cc00b30d36d8cb1f67e86f551?s=192&d=mm&r=g' className='avatarStyle' />
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
