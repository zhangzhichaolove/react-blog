import React, { Component } from 'react'
import { Row, } from 'antd'
import { DingtalkOutlined } from '@ant-design/icons';
import './index.css'

export default class index extends Component {
    render() {
        return (
            <div>
                <Row align='top' justify='center'>
                    <DingtalkOutlined style={{ fontSize: 30 }} />
                    <h2>博客中心</h2>
                </Row>
                <h5 className="headerDescribe">逆水行舟、不进则退。</h5>
            </div>
        )
    }
}
