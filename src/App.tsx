import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './page/Home'
import Class from './page/Class'
// import About from './page/About'
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/class' component={Class} />
        {/* <Route exact path='/about' component={About} /> */}
        <Redirect to='/home' />
      </Switch>
    </div>
  );
}

export default App;
