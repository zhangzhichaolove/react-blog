import React, { Component } from 'react'
import Footer from '../../components/Footer'
import Label from '../../components/Label'
import Contact from '../../components/Contact'
import { Row, Col, Affix } from 'antd'
import Statistics from '../../components/Statistics'
import { List } from 'antd'
import { Link as LinkNav } from 'react-router-dom'

import 'highlight.js/styles/monokai-sublime.css'
import './index.css'

interface Props {
    location: any
}

export default class index extends Component<Props>{

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
            <>
                <Row justify='center'>
                    <Col span={4} />
                    <Col span={15}>
                        <h2>包含'{this.props.location.state.tag}'相关文章</h2>
                        <List itemLayout='vertical' dataSource={this.state.blogs}
                            renderItem={(item) => {
                                return <List.Item>
                                    <div className='blogTitleStyle'>
                                        <LinkNav to='/blog'>
                                            {item.title}
                                        </LinkNav>
                                    </div>
                                    <Statistics />
                                    <div>{item.abstract}{item.abstract}{item.abstract}{item.abstract}{item.abstract}</div>
                                </List.Item>
                            }}
                        />
                    </Col>
                    <Col span={5}>
                        <Affix offsetTop={5}>
                            <Label />
                            <Contact />
                        </Affix>
                    </Col>
                </Row>
                <Footer />
            </>
        )
    }
}
