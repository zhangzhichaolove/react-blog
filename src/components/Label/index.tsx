import React from 'react'
import { Divider, Tag } from 'antd'
import './index.css'

export default function index() {
    return (
        <div>
            <Divider>标签云</Divider>
            <div className='tagContainer'>
                <Tag color="magenta" className='tagStyle'>android</Tag>
                <Tag color="magenta" className='tagStyle'>java</Tag>
                <Tag color="magenta" className='tagStyle'>go</Tag>
                <Tag color="magenta" className='tagStyle'>python</Tag>
                <Tag color="magenta" className='tagStyle'>js</Tag>
                <Tag color="magenta" className='tagStyle'>换肤</Tag>
                <Tag color="magenta" className='tagStyle'>设计</Tag>
                <Tag color="magenta" className='tagStyle'>linux</Tag>
                <Tag color="magenta" className='tagStyle'>shell</Tag>
                <Tag color="magenta" className='tagStyle'>博客</Tag>
            </div>
        </div>
    )
}
