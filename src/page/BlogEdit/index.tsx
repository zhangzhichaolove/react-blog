import React, { Component } from 'react'
import { Tag, Button } from 'antd';
import MdEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css';
import marked from 'marked'
import hljs from 'highlight.js'
import axios from 'axios';
import LabelModal from '../../components/LabelModal'

import './index.css'

interface IState {
    tags: Array<string>
    isLabelModalVisible: boolean
}

interface Iprops {
}

export default class index extends Component<Iprops, IState> {


    constructor(props: any) {
        super(props)
        this.state = {
            tags: ['Tag 1', 'Tag 2', 'Tag 3'],
            isLabelModalVisible: false
        }
    }

    componentDidMount() {
        console.log('支持高亮语言-->', hljs.listLanguages());
    }

    handleEditorChange(data: { text: string, html: string }) {
        console.log('文本更新-->\n', data.text)
    }

    onImageUpload(file: any) {
        return new Promise(resolve => {
            const formdata = new FormData();
            formdata.append('file', file);
            let config = {
                headers: { 'Content-Type': 'multipart/form-data', 'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiY3JlYXRlZEF0IjoiMjAyMC0wOC0xMCAyMTozNToxMSIsInVwZGF0ZWRBdCI6IjIwMjAtMDgtMTAgMjE6MzU6MTEiLCJuaWNrTmFtZSI6InBlYWtjaGFvIiwicGhvbmVOdW1iZXIiOiIxMzU5NDM0NzgxNyIsImV4cCI6MTYxMzM4MjA0MCwiaXNzIjoiYXBpb3BlbiIsIm5iZiI6MTYxMzM4MDQ0MH0.ojcASEUcoge10QzT6_e-3my7HlesGjXm6LimMxvDJIY' }
            }
            axios.post('http://blog.chaochao.cool:8066/uploadFile', formdata, config).then((res) => {
                resolve(res.data.result.url);
            })
        });
    }

    addLabel = () => {
        this.setState({
            isLabelModalVisible: true
        });
    }

    mapTag(item: string) {
        return (
            <Tag color="magenta" >{item}</Tag>
        )
    }

    render() {
        const render = new marked.Renderer()
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
        const { tags } = this.state;
        const tagChild = tags.map(this.mapTag);
        return (
            <div>
                <h2>文章编辑</h2>
                {tagChild}
                <Button type='primary' onClick={this.addLabel}>添加标签</Button>
                <MdEditor
                    style={{ height: "600px", marginTop: '20px' }}
                    config={{ imageAccept: '.jpg,.jpeg,.gif,.png' }}
                    onImageUpload={this.onImageUpload}
                    renderHTML={(text) => <div className='blogStyle' dangerouslySetInnerHTML={{ __html: marked(text || '') }}></div>}
                    onChange={this.handleEditorChange}
                />
                <LabelModal isModalVisible={this.state.isLabelModalVisible} handleOk={(selectTags: Array<string>) => {
                    console.log('选择了标签-->', selectTags);
                    this.setState({
                        tags: selectTags
                    });
                }} />
            </div>
        )
    }
}