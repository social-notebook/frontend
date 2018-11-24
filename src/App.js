import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Posts from './pages/Posts';
import Navigation from './components/Navigation';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: localStorage.getItem('token'),
    };
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
            <Route path="/login" component={LoginPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
