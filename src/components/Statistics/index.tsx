import React, { Component } from 'react'
import { List, Row } from 'antd'
import { SendOutlined, ProjectOutlined, FireOutlined } from '@ant-design/icons';
import './index.css'

interface Props {
    isCenter?: boolean
}

export default class index extends Component<Props> {

    render() {
        let { isCenter } = this.props
        return (
            <Row className={isCenter ? 'statisticsCenterStyle' : 'statisticsStyle'}>
                <span><SendOutlined />2021-02-11</span>
                <span><ProjectOutlined />go</span>
                <span><FireOutlined />1888</span>
            </Row>
        )
    }
}
