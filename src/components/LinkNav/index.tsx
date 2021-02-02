import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './index.css'

interface Props {
    to: string
}
export default class index extends Component<Props> {

    render() {
        return (
            <NavLink activeClassName='navActive' className='navStyle' {...this.props}>{this.props.children}</NavLink>
        )
    }
}
