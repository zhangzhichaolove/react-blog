import { Switch, Route } from 'react-router-dom'
import Home from './page/Home'
import Class from './page/Class'
import About from './page/About'
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/class' component={Class} />
        <Route exact path='/about' component={About} />
      </Switch>
    </div>
  );
}

export default App;
