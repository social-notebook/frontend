import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Posts from './pages/Posts';
import Navigation from './components/Navigation';
import Edit from './pages/Edit';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/posts" component={Posts} />
            <Route path="/edit" component={Edit} />
            <Route path="/login" component={LoginPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
