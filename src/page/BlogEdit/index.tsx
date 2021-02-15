import React, { Component } from 'react'
import { Tag, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import MdEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css';
import marked from 'marked'
import hljs from 'highlight.js'
import axios from 'axios';

import './index.css'

interface IState {
    tags: Array<string>,
    inputVisible: boolean,
    inputValue: string,
}

interface Iprops {
}

export default class index extends Component<Iprops, IState> {

    inputRef: any

    constructor(props: any) {
        super(props)
        this.state = {
            tags: ['Tag 1', 'Tag 2', 'Tag 3'],
            inputVisible: false,
            inputValue: '',
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

    showInput = () => {
        this.setState({ inputVisible: true }, () => this.inputRef.focus());
    }

    handleInputChange = (e: any) => {
        this.setState({ inputValue: e.target.value });
    }

    handleInputConfirm = () => {
        const { inputValue } = this.state;
        let { tags } = this.state;
        if (inputValue && tags.indexOf(inputValue) === -1) {
            tags = [...tags, inputValue];
        }
        console.log(tags);
        this.setState({
            tags,
            inputVisible: false,
            inputValue: '',
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
        const { tags, inputVisible, inputValue } = this.state;
        const tagChild = tags.map(this.mapTag);
        return (
            <div>
                <h2>文章编辑</h2>
                {tagChild}
                {inputVisible ? <Input
                    ref={ref => this.inputRef = ref}
                    type="text"
                    size="small"
                    style={{ width: 78 }}
                    value={inputValue}
                    onChange={this.handleInputChange}
                    onBlur={this.handleInputConfirm}
                    onPressEnter={this.handleInputConfirm}
                /> :
                    <Tag onClick={this.showInput} className="site-tag-plus">
                        <PlusOutlined /> 新标签
                </Tag>}

                <MdEditor
                    style={{ height: "600px", marginTop: '20px' }}
                    config={{ imageAccept: '.jpg,.jpeg,.gif,.png' }}
                    onImageUpload={this.onImageUpload}
                    renderHTML={(text) => <div className='blogStyle' dangerouslySetInnerHTML={{ __html: marked(text || '') }}></div>}
                    onChange={this.handleEditorChange}
                />
            </div>
        )
    }
}
