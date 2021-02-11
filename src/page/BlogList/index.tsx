import React, { Component } from 'react'
import { List } from 'antd'
import Statistics from '../../components/Statistics'
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
                            <div className='blogTitleStyle'>{item.title}</div>
                            <Statistics />
                            <div>{item.abstract}{item.abstract}{item.abstract}{item.abstract}{item.abstract}</div>
                        </List.Item>
                    }}
                />
            </div>
        )
    }
}
