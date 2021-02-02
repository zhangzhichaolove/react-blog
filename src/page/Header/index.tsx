import React, { Component } from 'react'
import logo from '../../logo.svg'

export default class index extends Component {
    render() {
        return (
            <div>
                <img src={logo} alt="图标" style={{width:'50px',height:'50px'}} />
                <h2>博客中心</h2>
                <h5>逆水行舟、不进则退。</h5>
            </div>
        )
    }
}
