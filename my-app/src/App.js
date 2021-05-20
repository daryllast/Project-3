import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import TodoList from './components/TodoList';
import Contact from './components/pages/Contact';

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/todolist" exact component={TodoList} />
          <Route path="/contactform" exact component={Contact} />
        </Switch>
      </Router>
      
      

    </div>
  );
}

export default App;
