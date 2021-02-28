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
    title: string
    brief: string
    content: string
    blogData: any
}

interface Iprops {
    history: any
    location: any
}

const { TextArea } = Input;

export default class index extends Component<Iprops, IState> {

    labelModal: any

    constructor(props: any) {
        super(props)
        this.state = {
            tags: [],
            title: '',
            brief: '',
            content: '',
            blogData: {}
        }
    }

    componentDidMount() {
        const id = this.props.location.state ? this.props.location.state.editBlogId : localStorage.getItem('editBlogId')
        if (!id) {
            return
        }
        axios('/api/blogDetails?id=' + id).then((res) => {
            const blogData = res.data.result
            this.setState({ blogData: blogData, title: blogData.title, brief: blogData.brief, content: blogData.content, tags: blogData.labels })
        })
        // console.log('支持高亮语言-->', hljs.listLanguages());
    }

    handleEditorChange = (data: { text: string, html: string }) => {
        this.setState({ content: data.text })
    }

    handleBriefChange = ({ target: { value } }: any) => {
        this.setState({ brief: value })
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
        this.labelModal.show(this.state.tags)
    }

    titleOnChange = ({ target: { value } }: any) => {
        this.setState({ title: value })
    }

    submitBlog = () => {
        const { tags, title } = this.state
        const tagIds: Array<any> = []
        tags.forEach(tag => tagIds.push(tag.id))
        let param: any = {
            title: title,
            brief: this.state.brief,
            content: this.state.content,
            tagIds: tagIds.join(',')
        }
        const id = this.props.location.state ? this.props.location.state.editBlogId : localStorage.getItem('editBlogId')
        if (id) {
            param.id = Number(id)
            axios.post('/api/updateBlog', param).then((res) => {
                const { code } = res.data
                if (code === 200) {
                    Message.success('编辑成功!');
                    this.props.history.push("/");
                }
            })
        } else {
            axios.post('/api/addBlog', param).then((res) => {
                const { code } = res.data
                if (code === 200) {
                    Message.success('发布成功!');
                    this.props.history.push("/");
                }
            })
        }
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
                <div className='tagContainer'>
                    {tagChild}
                    <Button type='primary' size='small' onClick={this.addLabel}>添加标签</Button>
                </div>
                <Input allowClear placeholder='请输入文章标题' value={this.state.title} onChange={this.titleOnChange} />
                <TextArea
                    className='briefStyle'
                    value={this.state.brief}
                    onChange={this.handleBriefChange}
                    defaultValue="请输入文章简介"
                    autoSize={{ minRows: 3, maxRows: 50 }}
                />
                <MdEditor
                    style={{ height: "600px", marginTop: '20px' }}
                    config={{ imageAccept: '.jpg,.jpeg,.gif,.png' }}
                    onImageUpload={this.onImageUpload}
                    renderHTML={(text) => <div className='blogStyle' dangerouslySetInnerHTML={{ __html: marked(text || '') }}></div>}
                    value={this.state.content}
                    onChange={this.handleEditorChange}
                />
                <LabelModal ref={ref => this.labelModal = ref} handleOk={(selectTags: Array<string>) => {
                    this.setState({
                        tags: selectTags
                    });
                }} />
                <Button type='primary' onClick={this.submitBlog}>发布文章</Button>
            </div>
        )
    }
}
