import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './page/Home'
import BlogDetails from './page/BlogDetails'
import BlogEdit from './page/BlogEdit'
import Blogs from './page/Blogs'
import Class from './page/Class'
import NotFound from './page/NotFound'
// import About from './page/About'
import './App.less';
import './util/AxiosUtil'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/class' component={Class} />
        <Route path='/blog' component={BlogDetails} />
        <Route path='/edit' component={BlogEdit} />
        <Route path='/blogs' component={Blogs} />
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
