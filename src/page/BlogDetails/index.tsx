import React, { Component } from 'react'
import Footer from '../../components/Footer'
import Label from '../../components/Label'
import Contact from '../../components/Contact'
import { Row, Col, Affix } from 'antd'
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
}

interface Iprops {
    location: any
}

export default class index extends Component<Iprops, IState> {

    constructor(props: any) {
        super(props)
        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        const id = this.props.location.state.id
        axios('http://blog.chaochao.cool:8066/api/posts/get?id=' + id).then((res) => {
            const content = res.data.result
            this.setState({ data: content })
        })
    }

    render() {
        const tocify = new Tocify()
        const render = new marked.Renderer()
        render.heading = (text, level, raw) => {
            const anchor = tocify.add(text, level);
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
                return hljs.highlightAuto(code).value
            }
        })
        let { title, content } = this.state.data
        const html = marked(content || '')
        return (
            <>
                <Row justify='center'>
                    <Col span={4} >
                        <MenuNav />
                    </Col>
                    <Col span={15} style={{ overflow: 'hidden' }}>
                        <h2>{title}</h2>
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
            </>
        )
    }
}
