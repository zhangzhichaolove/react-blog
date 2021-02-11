import React, { Component } from 'react'
import { Switch, Route, NavLink as LinkNav } from 'react-router-dom'
import About from '../About'
import BlogList from '../BlogList'
import Header from '../../components/Header'
import Author from '../../components/Author'
import { Row, Col, Menu } from 'antd'
import { CrownTwoTone, WalletTwoTone, IdcardTwoTone } from '@ant-design/icons';
import './index.css'
// import LinkNav from '../../components/LinkNav'

const { Item } = Menu;

export default class index extends Component {
    render() {
        return (
            <>
                <Header />
                <Row justify='center'>
                    <Col span={4}>
                        <Menu>
                            <Item className="itemStyle">
                                <LinkNav to='/'>
                                    <CrownTwoTone />首页
                                </LinkNav>
                            </Item>
                            <Item className="itemStyle">
                                <LinkNav to='/class'>
                                    <WalletTwoTone />分类
                                </LinkNav>
                            </Item>
                            <Item className="itemStyle">
                                <LinkNav to='/home/about'>
                                    <IdcardTwoTone />关于
                                </LinkNav>
                            </Item>
                        </Menu>
                    </Col>
                    <Col span={15}>
                        <Switch>
                            <Route exact path='/' component={BlogList} />
                            <Route path='/home/about' component={About} />
                        </Switch>
                    </Col>
                    <Col span={5}>
                        <Author />
                    </Col>
                </Row>
            </>
        )
    }
}
