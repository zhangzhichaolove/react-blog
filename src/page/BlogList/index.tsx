import React, { Component } from 'react'
import { List, Card, BackTop } from 'antd'
import { UpCircleTwoTone, setTwoToneColor } from '@ant-design/icons';
import { Link as LinkNav } from 'react-router-dom'
import axios from 'axios'
import Statistics from '../../components/Statistics'
import './index.css'

interface IState {
    result: any
}

interface Iprops {

}


export default class index extends Component<Iprops, IState> {
    pageNumber = 1
    pageSize = 8

    constructor(props: any) {
        super(props)
        this.state = {
            result: {}
        }
    }

    componentDidMount() {
        setTwoToneColor('#d4237a')
        this.refreshData()
    }

    refreshData = () => {
        axios(`http://blog.chaochao.cool:8066/api/posts/list?pageNumber=${this.pageNumber}&pageSize=${this.pageSize}&wordsCount=460`).then((res) => {
            const result = res.data.result
            this.setState({ result: result })
            console.log(result);

        })
    }

    onPageChange = (page: any, pageSize: any) => {
        this.pageNumber = page
        this.pageSize = pageSize
        this.refreshData()
    }

    render() {
        let { list, pageNumber, pageSize, total } = this.state.result
        let blogs: any[] = list || []
        return (
            <div>
                <List itemLayout='vertical'
                    dataSource={blogs}
                    split={false}
                    pagination={{ position: 'bottom', current: pageNumber || this.pageNumber, defaultCurrent: 1, pageSize: pageSize || this.pageSize, total: total, hideOnSinglePage: true, onChange: this.onPageChange }}
                    renderItem={(item) => {
                        return <List.Item>
                            <div className='blogTitleStyle'>
                                <LinkNav to={{ pathname: '/blog', state: { id: item.id } }}>
                                    <Card title={item.title}>
                                        <Statistics />
                                        <div>{item.content}</div>
                                    </Card>
                                </LinkNav>
                            </div>
                        </List.Item>
                    }}
                />
                <BackTop>
                    <UpCircleTwoTone style={{ fontSize: 40 }} />
                </BackTop>
            </div>
        )
    }
}
