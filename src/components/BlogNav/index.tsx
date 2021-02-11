import React, { Component } from 'react'
import { Divider } from 'antd'

export default class index extends Component {
    render() {
        return (
            <div>
                <Divider>文章目录</Divider>
                <div>{this.props.children}</div>
            </div>
        )
    }
}
