import React, { Component } from 'react'
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom'

export default class index extends Component {
    render() {
        return (
            <Result
                status="404"
                title="404"
                subTitle="Sorry, 页面找不到啦."
                extra={<Button type="primary"><Link to='/'>回到首页</Link></Button>}
            />
        )
    }
}
