import React from 'react'
import { Menu } from 'antd'
import { NavLink as LinkNav } from 'react-router-dom'
import { CrownTwoTone, WalletTwoTone, IdcardTwoTone } from '@ant-design/icons';

import './index.css'

const { Item } = Menu;

export default function index() {
    const iconColor = '#d4237a'
    return (
        <Menu>
            <Item className="itemStyle">
                <LinkNav to='/'>
                    <CrownTwoTone twoToneColor={iconColor} />首页
            </LinkNav>
            </Item>
            <Item className="itemStyle">
                <LinkNav to='/class'>
                    <WalletTwoTone twoToneColor={iconColor} />分类
            </LinkNav>
            </Item>
            <Item className="itemStyle">
                <LinkNav to='/home/about'>
                    <IdcardTwoTone twoToneColor={iconColor} />关于
            </LinkNav>
            </Item>
        </Menu>
    )
}
