import React, { Component } from 'react'
import MdEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css';
import marked from 'marked'
import hljs from 'highlight.js'
import axios from 'axios';

export default class index extends Component {


    handleEditorChange(data: { text: string, html: string }) {
        console.log('handleEditorChange', data.html, data.text)
    }

    onImageUpload(file: any) {
        return new Promise(resolve => {
            const reader = new FileReader();
            reader.onload = data => {
                console.log(data.target && data.target.result);
                const formdata = new FormData();
                formdata.append('file', file);
                let config = {
                    headers: { 'Content-Type': 'multipart/form-data', 'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiY3JlYXRlZEF0IjoiMjAyMC0wOC0xMCAyMTozNToxMSIsInVwZGF0ZWRBdCI6IjIwMjAtMDgtMTAgMjE6MzU6MTEiLCJuaWNrTmFtZSI6InBlYWtjaGFvIiwicGhvbmVOdW1iZXIiOiIxMzU5NDM0NzgxNyIsImV4cCI6MTYxMzM4MjA0MCwiaXNzIjoiYXBpb3BlbiIsIm5iZiI6MTYxMzM4MDQ0MH0.ojcASEUcoge10QzT6_e-3my7HlesGjXm6LimMxvDJIY' }
                }
                axios.post('http://blog.chaochao.cool:8066/uploadFile', formdata, config).then((res) => {
                    resolve(res.data.result.url);
                })
            };
            //读取文件
            reader.readAsDataURL(file);
        });
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
                return hljs.highlightAuto(code).value
            }
        })
        return (
            <div>
                <h2>文章编辑</h2>
                <MdEditor
                    style={{ height: "600px" }}
                    config={{ imageAccept: '.jpg,.jpeg,.gif,.png' }}
                    onImageUpload={this.onImageUpload}
                    renderHTML={(text) => <div dangerouslySetInnerHTML={{ __html: marked(text || '') }}></div>}
                    onChange={this.handleEditorChange}
                />
            </div>
        )
    }
}
