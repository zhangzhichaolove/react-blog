import React, { Component } from 'react'
import { Row, Col, Affix } from 'antd'
import { Switch, Route } from 'react-router-dom'
import About from '../About'
import BlogList from '../BlogList'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Author from '../../components/Author'
import Label from '../../components/Label'
import Contact from '../../components/Contact'
import MenuNav from '../../components/MenuNav'
import Login from '../../components/Login'
import './index.css'
// import LinkNav from '../../components/LinkNav'

export default class index extends Component {
    render() {
        return (
            <>
                <Header />
                <Row justify='center'>
                    <Col span={4}>
                        <Affix offsetTop={5}>
                            <MenuNav />
                        </Affix>
                    </Col>
                    <Col span={15}>
                        <Switch>
                            <Route exact path='/' component={BlogList} />
                            <Route path='/home/about' component={About} />
                        </Switch>
                    </Col>
                    <Col span={5}>
                        <Login props={this.props} />
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
