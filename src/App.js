import './App.css';
import TodoList from './features/todos/components/TodoList';
import {Route, Link, BrowserRouter, Switch} from 'react-router-dom';
import NotFoundPage from './features/notfound/NotFoundPage';
import DoneList from './features/todos/components/DoneList';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ul>
        <Link to = "/todo">TodoList link</Link>
        <Link to = "/donelist">DoneList link</Link>
      </ul>
      <Switch>
        <Route exact path ="/todo" component = {TodoList}></Route>
        <Route exact path ="/donelist" component = {DoneList}></Route>
        <Route path = "*" component = {NotFoundPage} ></Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
