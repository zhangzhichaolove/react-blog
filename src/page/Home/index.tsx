import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import About from '../About'
import Header from '../../page/Header'
import LinkNav from '../../components/LinkNav'

export default class index extends Component {
    render() {
        return (
            <div>
                <Header />
                <hr />
                <div style={{ flexDirection: 'row', display: 'flex' }}>
                    <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                        <LinkNav to='/'>首页</LinkNav>
                        <LinkNav to='/class'>分类</LinkNav>
                        <LinkNav to='/about'>关于</LinkNav>
                    </div>
                    <div style={{ display: 'flex', flex: 5, justifyContent: 'center' }}>
                        <Switch>
                            <Route exact path='/about' component={About} />
                            {/* <Redirect to='/about' /> */}
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}
