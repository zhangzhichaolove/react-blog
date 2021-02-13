import React from 'react'
import { Divider, Tag } from 'antd'
import { NavLink as LinkNav } from 'react-router-dom'
import './index.css'

export default function index() {
    return (
        <div>
            <Divider>标签云</Divider>
            <div className='tagContainer'>
                <LinkNav to={{ pathname: '/blogs', state: { tag: 'android' } }}><Tag color="magenta" className='tagStyle'>android</Tag></LinkNav>
                <LinkNav to={{ pathname: '/blogs', state: { tag: 'java' } }}><Tag color="magenta" className='tagStyle'>java</Tag></LinkNav>
                <LinkNav to={{ pathname: '/blogs', state: { tag: 'go' } }}><Tag color="magenta" className='tagStyle'>go</Tag></LinkNav>
                <LinkNav to={{ pathname: '/blogs', state: { tag: 'python' } }}><Tag color="magenta" className='tagStyle'>python</Tag></LinkNav>
                <LinkNav to={{ pathname: '/blogs', state: { tag: 'js' } }}><Tag color="magenta" className='tagStyle'>js</Tag></LinkNav>
                <LinkNav to={{ pathname: '/blogs', state: { tag: '换肤' } }}><Tag color="magenta" className='tagStyle'>换肤</Tag></LinkNav>
                <LinkNav to={{ pathname: '/blogs', state: { tag: '设计' } }}><Tag color="magenta" className='tagStyle'>设计</Tag></LinkNav>
                <LinkNav to={{ pathname: '/blogs', state: { tag: 'linux' } }}><Tag color="magenta" className='tagStyle'>linux</Tag></LinkNav>
                <LinkNav to={{ pathname: '/blogs', state: { tag: 'shell' } }}><Tag color="magenta" className='tagStyle'>shell</Tag></LinkNav>
                <LinkNav to={{ pathname: '/blogs', state: { tag: '博客' } }}><Tag color="magenta" className='tagStyle'>博客</Tag></LinkNav>
            </div>
        </div>
    )
}
