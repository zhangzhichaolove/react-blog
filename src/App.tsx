import { NavLink, Switch, Route, Redirect } from 'react-router-dom'
import Header from './page/Header'
import Home from './page/Home'
import About from './page/About'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <div style={{ flexDirection: 'row', display: 'flex' }}>
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
          <NavLink activeClassName='navActive' className='navStyle' to='/home'>首页</NavLink>
          <NavLink activeClassName='navActive' className='navStyle' to='/about'>关于</NavLink>
        </div>
        <div style={{ display: 'flex', flex: 5, justifyContent: 'center' }}>
          <Switch>
            <Route path='/' exact render={() => (
              <Redirect to='/home' />
            )} />
            <Route path='/home' component={Home} />
            <Route path='/about' component={About} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
