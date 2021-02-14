import React, { Component } from 'react'
import { List } from 'antd'
import { Link as LinkNav } from 'react-router-dom'
import axios from 'axios'
import Statistics from '../../components/Statistics'
import './index.css'

interface IState {
    blogs: Array<any>
}

interface Iprops {

}


export default class index extends Component<Iprops, IState> {

    state = {
        blogs: new Array()
    }

    componentDidMount() {
        axios('http://blog.chaochao.cool:8066/api/posts/list?pageNumber=1&pageSize=5&wordsCount=260').then((res) => {
            const blogs = res.data.result.list
            this.setState({ blogs: blogs })
        })
    }

    render() {
        return (
            <div>
                <List itemLayout='vertical' dataSource={this.state.blogs}
                    renderItem={(item) => {
                        return <List.Item>
                            <div className='blogTitleStyle'>
                                <LinkNav to={{ pathname: '/blog', state: { id: item.id } }}>
                                    {item.title}
                                </LinkNav>
                            </div>
                            <Statistics />
                            <div>{item.content}</div>
                        </List.Item>
                    }}
                />
            </div>
        )
    }
}
