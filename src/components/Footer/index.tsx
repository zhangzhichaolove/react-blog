import React, { Component } from 'react'
import { CopyrightOutlined } from '@ant-design/icons';
import './index.css'

export default class index extends Component {
    render() {
        return (
            <div className='footerStyle'>
                本博客由react+go强力驱动
                <br />
                <span><CopyrightOutlined />版权所有 蜀ICP备18012666号</span>
            </div>
        )
    }
}
