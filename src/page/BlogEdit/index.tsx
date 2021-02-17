import React, { Component } from 'react'
import { Tag, Button, Input, message as Message } from 'antd';
import MdEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css';
import marked from 'marked'
import hljs from 'highlight.js'
import axios from 'axios';
import LabelModal from '../../components/LabelModal'

import './index.css'

interface IState {
    tags: Array<any>
    isLabelModalVisible: boolean
    title: string
}

interface Iprops {
}

const { TextArea } = Input;

export default class index extends Component<Iprops, IState> {

    content = ''

    constructor(props: any) {
        super(props)
        this.state = {
            tags: [],
            isLabelModalVisible: false,
            title: ''
        }
    }

    componentDidMount() {
        console.log('支持高亮语言-->', hljs.listLanguages());
    }

    handleEditorChange = (data: { text: string, html: string }) => {
        console.log('文本更新-->\n', data.text)
        this.content = data.text
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

    titleOnChange = ({ target: { value } }: any) => {
        console.log(value);
        this.setState({ title: value })
    }

    submitBlog = () => {
        const { tags, title } = this.state
        const tagIds: Array<any> = []
        tags.forEach(tag => tagIds.push(tag.id))
        let param = {
            title: title,
            brief: "这是简介。",
            content: this.content,
            tagIds: tagIds.join(',')
        }
        axios.post('/api/addBlog', param).then((res) => {
            const { code, message } = res.data
            if (code === 200) {
                Message.success('发布成功!');
            } else {
                Message.error(message);
            }
        })
    }

    mapTag(item: any) {
        return (
            <Tag color="magenta" key={item.id}>{item.name}</Tag>
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
                <Input allowClear placeholder='请输入文章标题' value={this.state.title} onChange={this.titleOnChange} />
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
                <TextArea
                    // value={value}
                    // onChange={this.onChange}
                    placeholder="请输入文章简介"
                    autoSize={{ minRows: 3, maxRows: 50 }}
                />
                <Button type='primary' onClick={this.submitBlog}>发布文章</Button>
            </div>
        )
    }
}
