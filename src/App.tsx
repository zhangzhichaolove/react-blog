import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './page/Home'
import Class from './page/Class'
import NotFound from './page/NotFound'
// import About from './page/About'
import './App.css';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/class' component={Class} />
        <Route path={['/', '/home']} component={Home} />
        {/* <Route path='/home/about' component={About} /> */}
        <Route path='/404' component={NotFound} />
        <Redirect to='/404' exact />
      </Switch>
    </div>
  );
}

export default App;
