import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Posts from './pages/Posts';
import Navigation from './components/Navigation';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { token } = this.props;
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


const mapStateToProp = (state) => ({
  token: state.token,
  user: state.user
})

export default connect(mapStateToProp)(App);


