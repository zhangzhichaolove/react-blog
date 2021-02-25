import React, { Component } from 'react'
import { Row } from 'antd'
import { SendOutlined, ProjectOutlined, FireOutlined } from '@ant-design/icons';
import './index.css'

interface Props {
    isCenter?: boolean,
    publishTime?: string
    readCount?: number
}

export default class index extends Component<Props> {

    render() {
        let { isCenter } = this.props
        return (
            <Row className={isCenter ? 'statisticsCenterStyle' : 'statisticsStyle'}>
                <span><SendOutlined />{this.props.publishTime}</span>
                <span><ProjectOutlined />go</span>
                <span><FireOutlined />{this.props.readCount}</span>
            </Row>
        )
    }
}
