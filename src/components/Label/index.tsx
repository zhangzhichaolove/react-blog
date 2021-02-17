import React, { useEffect, useState } from 'react'
import { Divider, Tag } from 'antd'
import { NavLink as LinkNav } from 'react-router-dom'
import axios from 'axios'

import './index.css'

export default function Label() {
    const [tags, setTags] = useState(new Array())
    useEffect(() => {
        axios('/api/findAllTag').then((res) => {
            const labels = res.data.result
            setTags(labels)
        })
    }, [])
    return (
        <div>
            <Divider>标签云</Divider>
            <div className='tagContainer'>
                {tags.map(item => <LinkNav to={{ pathname: '/blogs', state: { tag: item.name } }}><Tag color="magenta" className='tagStyle'>{item.name}</Tag></LinkNav>)}
            </div>
        </div>
    )
}
