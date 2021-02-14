import React, { Component } from 'react'
import Footer from '../../components/Footer'
import Label from '../../components/Label'
import Contact from '../../components/Contact'
import { Row, Col, Affix } from 'antd'
import Statistics from '../../components/Statistics'
import BlogNav from '../../components/BlogNav'
import Tocify from '../../components/Tocify'
import MenuNav from '../../components/MenuNav'
import marked from 'marked'
import hljs from 'highlight.js'

import 'highlight.js/styles/monokai-sublime.css'
import './index.css'


export default class index extends Component {
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
        let markdwonText = `

### API介绍

#### [官网](https://api.apiopen.top)

\`\`\`
https://api.apiopen.top
\`\`\`

### 例子

\`\`\`
# 一句名言
http://poetry.apiopen.top
\`\`\`

\`\`\`
# 接口地址
http://poetry.apiopen.top/sentences
\`\`\`

### 响应

\`\`\`
{

    "code": 200,

    "message": "成功!",

    "result": {

        "name": "花不语，水空流。年年拚得为花愁。",

        "from": "晏几道《鹧鸪天·守得莲开结伴游》"

    }
}

\`\`\`
        `
        const html = marked(markdwonText)
        return (
            <>
                <Row justify='center'>
                    <Col span={4} >
                        <MenuNav />
                    </Col>
                    <Col span={15}>
                        <h2>免费开放API接口</h2>
                        <Statistics isCenter={true} />
                        <div className='blogStyle'
                            dangerouslySetInnerHTML={{ __html: html }}>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                    </Col>
                    <Col span={5}>
                        <Affix offsetTop={5}>
                            <BlogNav >{tocify && tocify.render()}</BlogNav>
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
