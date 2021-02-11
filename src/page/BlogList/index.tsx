import React, { Component } from 'react'
import { List, Row } from 'antd'
import { SendOutlined, ProjectOutlined, FireOutlined } from '@ant-design/icons';
import './index.css'

export default class index extends Component {

    state = {
        blogs: [
            { title: '博客标题', abstract: '这里是博客摘要,这里是博客摘要,这里是博客摘要,这里是博客摘要,这里是博客摘要,这里是博客摘要,这里是博客摘要,这里是博客摘要,' },
            { title: '博客标题', abstract: '这里是博客摘要,这里是博客摘要,这里是博客摘要,这里是博客摘要,这里是博客摘要,这里是博客摘要,这里是博客摘要,这里是博客摘要,' },
            { title: '博客标题', abstract: '这里是博客摘要,这里是博客摘要,这里是博客摘要,这里是博客摘要,这里是博客摘要,这里是博客摘要,这里是博客摘要,这里是博客摘要,' },
            { title: '博客标题', abstract: '这里是博客摘要,这里是博客摘要,这里是博客摘要,这里是博客摘要,这里是博客摘要,这里是博客摘要,这里是博客摘要,这里是博客摘要,' },
            { title: '博客标题', abstract: '这里是博客摘要,这里是博客摘要,这里是博客摘要,这里是博客摘要,这里是博客摘要,这里是博客摘要,这里是博客摘要,这里是博客摘要,' },
            { title: '博客标题', abstract: '这里是博客摘要,这里是博客摘要,这里是博客摘要,这里是博客摘要,这里是博客摘要,这里是博客摘要,这里是博客摘要,这里是博客摘要,' },
            { title: '博客标题', abstract: '这里是博客摘要,这里是博客摘要,这里是博客摘要,这里是博客摘要,这里是博客摘要,这里是博客摘要,这里是博客摘要,这里是博客摘要,' },
            { title: '博客标题', abstract: '这里是博客摘要,这里是博客摘要,这里是博客摘要,这里是博客摘要,这里是博客摘要,这里是博客摘要,这里是博客摘要,这里是博客摘要,' },
            { title: '博客标题', abstract: '这里是博客摘要,这里是博客摘要,这里是博客摘要,这里是博客摘要,这里是博客摘要,这里是博客摘要,这里是博客摘要,这里是博客摘要,' },
        ]
    }

    render() {
        return (
            <div>
                <List itemLayout='vertical' dataSource={this.state.blogs}
                    renderItem={(item) => {
                        return <List.Item>
                            <div>{item.title}</div>
                            <Row>
                                <span className='statisticsStyle'><SendOutlined /> 2021-02-11</span>
                                <span className='statisticsStyle'><ProjectOutlined /> go</span>
                                <span className='statisticsStyle'><FireOutlined /> 1888</span>
                            </Row>
                            <div>{item.abstract}{item.abstract}{item.abstract}{item.abstract}{item.abstract}</div>
                        </List.Item>
                    }}
                />
            </div>
        )
    }
}
