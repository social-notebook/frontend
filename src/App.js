import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    const { token } = this.props;
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
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


const mapStateToProp = (state) => ({
  token: state.token,
  user: state.user
})

export default connect(mapStateToProp)(App);


