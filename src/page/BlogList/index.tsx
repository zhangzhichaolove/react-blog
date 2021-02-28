import React, { Component } from 'react'
import { List, Card, Skeleton } from 'antd'
import { Link as LinkNav } from 'react-router-dom'
import axios from 'axios'
import Statistics from '../../components/Statistics'
import BackTop from '../../components/BackTop'
import BlogLabel from '../../components/BlogLabel'
import './index.css'

interface IState {
    result: any
    isLoading: boolean
}

interface Iprops {

}


export default class index extends Component<Iprops, IState> {
    pageNumber = localStorage.getItem('blogPage') || 1
    pageSize = 8

    constructor(props: any) {
        super(props)
        this.state = {
            result: {},
            isLoading: true
        }
    }

    componentDidMount() {
        this.refreshData()
    }

    refreshData = () => {
        axios(`/api/blogList?pageNumber=${this.pageNumber}&pageSize=${this.pageSize}&wordsCount=0`).then((res) => {
            const result = res.data.result
            this.setState({ result: result, isLoading: false })
        })
    }

    onPageChange = (page: any, pageSize: any) => {
        localStorage.setItem('blogPage', page)
        this.pageNumber = page
        this.pageSize = pageSize
        this.refreshData()
    }

    render() {
        const { isLoading } = this.state
        let { list, pageNumber, pageSize, total } = this.state.result
        let blogs: any[] = list || []
        return (
            <div>
                <List itemLayout='vertical'
                    dataSource={blogs}
                    split={false}
                    loading={false}
                    pagination={{ position: 'bottom', current: pageNumber || this.pageNumber, defaultCurrent: 1, pageSize: pageSize || this.pageSize, total: total, hideOnSinglePage: true, onChange: this.onPageChange }}
                    renderItem={item => (
                        <List.Item>
                            {isLoading ? <Skeleton loading={isLoading} active /> :
                                <div className='blogTitleStyle'>
                                    <LinkNav onClick={() => {
                                        localStorage.setItem('blogId', item.id)
                                    }} to={{ pathname: '/blog', state: { id: item.id } }}>
                                        <Card title={item.title} style={{ flexDirection: 'column' }}>
                                            <BlogLabel tags={item.labels} />
                                            <span className='briefEllipsis'>{item.brief}</span>
                                            <div className='blogStatistics'>
                                                <Statistics publishTime={item.updatedAt} readCount={item.readCount} />
                                            </div>
                                        </Card>
                                    </LinkNav>
                                </div>}
                        </List.Item>)}
                />
                <BackTop />
            </div>
        )
    }
}
