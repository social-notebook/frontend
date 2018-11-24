import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import LoginPage from './pages/LoginPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/login' component={LoginPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
