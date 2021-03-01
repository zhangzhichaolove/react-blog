import React from 'react'
import { Tag } from 'antd'
import { NavLink as LinkNav } from 'react-router-dom'

import './index.css'

export default function Label({ tags = [] }: any) {
    return (
        <div>
            <div className='tagContainer'>
                {tags.map((item: any) => <LinkNav key={item.id} onClick={() => {
                    localStorage.setItem('labelId', item.id)
                    localStorage.setItem('labelName', item.name)
                }} to={{ pathname: '/blogs', state: { labelName: item.name, labelId: item.id } }}><Tag color="magenta" className='tagStyle'>{item.name}</Tag></LinkNav>)}
            </div>
        </div>
    )
}
