import React, { Component } from 'react'
import Footer from '../../components/Footer'
import Label from '../../components/Label'
import Contact from '../../components/Contact'
import { Row, Col, Affix } from 'antd'
import Statistics from '../../components/Statistics'
import BlogNav from '../../components/BlogNav'
import Tocify from '../../components/Tocify'
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
        let markdwonText = `## Block Elements

        ## Paragraph and line breaks
        In Typora, input ‘#’s followed by title content, and press  key will create a header.

## Blockquotes

Markdown uses email-style > characters for block quoting. They are presented as:
## Math Blocks

You can render *LaTeX* mathematical expressions using **MathJax**.

To add a mathematical expression, input  and press the 'Return' key. This will trigger an input field which accepts *Tex/LaTex* source. For example:
## 博客中间

$$
athbf{V}_1 times mathbf{V}_2 =  begin{vmatrix}
athbf{i} & athbf{j} & mathbf{k} 
rac{artial X}{artial u} &  frac{partial Y}{partial u} & 0 
rac{artial X}{artial v} &  frac{partial Y}{partial v} & 0 
nd{vmatrix}
$$

## 博客结尾
In the markdown source file, the math block is a *LaTeX* expression wrapped by a pair of ‘$$’ marks:
        \`\`\`go\`\`\``
        const html = marked(markdwonText)
        return (
            <>
                <Row justify='center'>
                    <Col span={19}>
                        <h2>博客标题</h2>
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
