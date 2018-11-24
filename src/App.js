import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Home from './pages/Home';
import Auth from './pages/Auth';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Link to='/'>goHome</Link>
          <br/>
          <Link to='auth'>Login</Link>

          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/auth' component={Auth} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
