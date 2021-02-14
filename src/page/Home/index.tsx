import React, { Component } from 'react'
import { Row, Col } from 'antd'
import { Switch, Route } from 'react-router-dom'
import About from '../About'
import BlogList from '../BlogList'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Author from '../../components/Author'
import Label from '../../components/Label'
import Contact from '../../components/Contact'
import MenuNav from '../../components/MenuNav'
import './index.css'
// import LinkNav from '../../components/LinkNav'

export default class index extends Component {
    render() {
        return (
            <>
                <Header />
                <Row justify='center'>
                    <Col span={4}>
                        <MenuNav />
                    </Col>
                    <Col span={15}>
                        <Switch>
                            <Route exact path='/' component={BlogList} />
                            <Route path='/home/about' component={About} />
                        </Switch>
                    </Col>
                    <Col span={5}>
                        <Author />
                        <Label />
                        <Contact />
                    </Col>
                </Row>
                <Footer />
            </>
        )
    }
}
