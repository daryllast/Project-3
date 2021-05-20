import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import TodoList from './components/TodoList';
import App2 from './App2';

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/todolist" exact component={TodoList} />
          <Route path="/app2" exact component={App2} />
        </Switch>
      </Router>
      <div className='todo-app'>
      <TodoList />
      </div>

    </div>
  );
}

export default App;
