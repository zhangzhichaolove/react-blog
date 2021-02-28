import React, { Component } from 'react'
import Footer from '../../components/Footer'
import Label from '../../components/Label'
import Contact from '../../components/Contact'
import { Row, Col, Affix, Spin } from 'antd'
import { EditOutlined } from '@ant-design/icons';
import { Link as LinkNav } from 'react-router-dom'
import Statistics from '../../components/Statistics'
import BlogNav from '../../components/BlogNav'
import Tocify from '../../components/Tocify'
import MenuNav from '../../components/MenuNav'
import BackTop from '../../components/BackTop'
import marked from 'marked'
import hljs from 'highlight.js'

import 'highlight.js/styles/monokai-sublime.css'
import './index.css'
import axios from 'axios'

interface IState {
    data: any
    loading: boolean
}

interface Iprops {
    location: any
}

export default class index extends Component<Iprops, IState> {

    constructor(props: any) {
        super(props)
        this.state = {
            data: {},
            loading: true
        }
    }

    componentDidMount() {
        const id = this.props.location.state ? this.props.location.state.id : localStorage.getItem('blogId')
        axios('/api/blogDetails?id=' + id).then((res) => {
            const content = res.data.result
            this.setState({ data: content, loading: false })
        })
    }

    render() {
        const tocify = new Tocify()
        const render = new marked.Renderer()
        render.heading = (text, level, raw) => {
            var reg = /<[^<>]+>/g;
            const tocifyText = text.replace(reg, '');
            const anchor = tocify.add(tocifyText, level);
            return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
        }
        marked.setOptions({
            renderer: render,
            gfm: true,
            pedantic: false,
            sanitize: false,
            breaks: true,
            smartLists: true,
            highlight: (code) => {
                return hljs.highlightAuto(code, hljs.listLanguages()).value
            }
        })
        let { title, content } = this.state.data
        const html = marked(content || '')
        const id = this.props.location.state ? this.props.location.state.id : localStorage.getItem('blogId')
        return (
            <>
                <Spin tip="Loading..." spinning={this.state.loading}>
                    <Row justify='center'>
                        <Col span={4} >
                            <Affix offsetTop={50}>
                                <MenuNav />
                            </Affix>
                        </Col>
                        <Col span={15} style={{ overflow: 'hidden' }}>
                            <div className='titleContainer'><span>{title}</span>
                                <LinkNav onClick={() => {
                                    localStorage.setItem('editBlogId', id)
                                }} to={{ pathname: '/edit', state: { editBlogId: id } }}>
                                    <span className='blogEdit'><EditOutlined />编辑</span>
                                </LinkNav>

                            </div>
                            <Statistics isCenter={true} />
                            <div className='blogStyle'
                                dangerouslySetInnerHTML={{ __html: html }}>
                            </div>
                        </Col>
                        <Col span={5}>
                            <Affix offsetTop={5}>
                                <BlogNav >{tocify && tocify.render()}</BlogNav>
                                <Label />
                                <Contact />
                            </Affix>
                        </Col>
                    </Row>
                    <BackTop />
                    <Footer />
                </Spin>
            </>
        )
    }
}
