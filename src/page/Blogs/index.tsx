import React, { Component } from 'react'
import { Row, Col, Affix, List } from 'antd'
import { Link as LinkNav } from 'react-router-dom'
import Footer from '../../components/Footer'
import Label from '../../components/Label'
import Contact from '../../components/Contact'
import BlogLabel from '../../components/BlogLabel'
import Statistics from '../../components/Statistics'
import MenuNav from '../../components/MenuNav'


import 'highlight.js/styles/monokai-sublime.css'
import './index.css'
import axios from 'axios'

interface Props {
    location: any
}

interface IState {
    result: any
}

export default class index extends Component<Props, IState>{
    pageNumber = localStorage.getItem('blogPage') || 1
    pageSize = 8

    constructor(props: any) {
        super(props)
        this.state = {
            result: {},
        }
    }

    componentDidMount() {
        this.refreshData()
    }

    refreshData = () => {
        const labelId = this.props.location.state.labelId || localStorage.getItem('labelId')
        axios(`/api/blogList?pageNumber=${this.pageNumber}&pageSize=${this.pageSize}&labelId=${labelId}`).then((res) => {
            const result = res.data.result
            this.setState({ result: result })
        })
    }

    onPageChange = (page: any, pageSize: any) => {
        localStorage.setItem('blogPage', page)
        this.pageNumber = page
        this.pageSize = pageSize
        this.refreshData()
    }

    render() {
        const labelName = this.props.location.state.labelName || localStorage.getItem('labelName')
        let { list, pageNumber, pageSize, total } = this.state.result
        let blogs: any[] = list || []
        return (
            <>
                <Row justify='center'>
                    <Col span={4} >
                        <Affix offsetTop={50}>
                            <MenuNav />
                        </Affix>
                    </Col>
                    <Col span={15}>
                        <h2>包含'{labelName}'相关文章</h2>
                        <List itemLayout='vertical'
                            dataSource={blogs}
                            pagination={{ position: 'bottom', current: pageNumber || this.pageNumber, defaultCurrent: 1, pageSize: pageSize || this.pageSize, total: total, hideOnSinglePage: true, onChange: this.onPageChange }}
                            renderItem={(item) => {
                                return <List.Item>
                                    <div className='blogTitleStyle'>
                                        <LinkNav to='/blog'>
                                            {item.title}
                                        </LinkNav>
                                    </div>
                                    <BlogLabel tags={item.labels} />
                                    <span className='briefEllipsis'>{item.brief}</span>
                                    <div className='blogStatistics'>
                                        <Statistics publishTime={item.updatedAt} readCount={item.readCount} />
                                    </div>
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
