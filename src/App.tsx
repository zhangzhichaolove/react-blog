import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './page/Home'
import Class from './page/Class'
import NotFound from './page/NotFound'
// import About from './page/About'
import './App.less';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/class' component={Class} />
        <Route exact path='/' component={Home} />
        <Route path='/home' component={Home} />
        {/* <Route path='/home/about' component={About} /> */}
        <Route path='/404' component={NotFound} />
        <Redirect to='/404' />
      </Switch>
    </div>
  );
}

export default App;
