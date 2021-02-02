import { Switch, Route, Redirect } from 'react-router-dom'
import Header from './page/Header'
import Home from './page/Home'
import About from './page/About'
import LinkNav from './components/LinkNav'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <div style={{ flexDirection: 'row', display: 'flex' }}>
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
          <LinkNav to='/home'>首页</LinkNav>
          <LinkNav to='/about'>关于</LinkNav>
        </div>
        <div style={{ display: 'flex', flex: 5, justifyContent: 'center' }}>
          <Switch>
            <Route exact path='/home' component={Home} />
            <Route exact path='/about' component={About} />
            <Redirect to='/home' />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
