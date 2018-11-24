import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Posts from './pages/Posts';
import Navigation from './components/Navigation';
import Edit from './pages/Edit';
import socketIOClient from 'socket.io-client';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: localStorage.getItem('token'),
    };

    this.socket = socketIOClient('http://192.168.20.131:3000');
    this.socket.on('hello', data => {
        console.log(data);
        });
  }

  render() {
    const { token } = this.state;
    console.log(token);
    return (
      <BrowserRouter>
        <div className="App">
          {token ? <Navigation /> : null}
          <Switch>
            <Route
              path="/"
              exact
              render={() => {
                return token === null ? <LoginPage /> : <Home />;
              }}
            />
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
