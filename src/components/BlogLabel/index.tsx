import React from 'react'
import { Tag } from 'antd'
import { NavLink as LinkNav } from 'react-router-dom'

import './index.css'

export default function Label({ tags = [] }: any) {
    return (
        <div>
            <div className='tagContainer'>
                {tags.map((item: any) => <LinkNav key={item.id} to={{ pathname: '/blogs', state: { tag: item.name } }}><Tag color="magenta" className='tagStyle'>{item.name}</Tag></LinkNav>)}
            </div>
        </div>
    )
}
