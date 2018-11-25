import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { Grid, Button, Menu } from 'semantic-ui-react';
import './Navigation.css';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: '',
      showNavBar: true
    };
  }

  handleItemClick = (e, { name }) => {
    if (name === 'login') {
      this.setState({ showNavBar: true });
    } else {
      this.setState({ showNavBar: true });
    }
    this.setState({ activeItem: name });
  };
  logOut = (args) => {
    localStorage.removeItem('token')
    this.props.history.push('/')
  }
  render() {
    const { activeItem } = this.state;
    console.log('rerender');
    console.log(activeItem);

    const navbar = this.state.showNavBar ?  <Menu stackable>
              <Menu.Item
              name="home"
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
              as={NavLink}
              to="/"> <img src='https://react.semantic-ui.com/logo.png' />
                      <strong><p className={"logoName"}> Notebook </p></strong>
              </Menu.Item>

              <Menu.Item
                position='right'
                name='about'
                active={activeItem === 'about'}
                onClick={this.handleItemClick}
                as={NavLink}
                to="/about"
              >
                About
              </Menu.Item>

              <Menu.Item
                name='create'
                active={activeItem === 'create'}
                onClick={this.handleItemClick}
                as={NavLink}
                to="/edit"
              >
                Create
              </Menu.Item>


              {localStorage.getItem('token') === null ?               <Menu.Item  name='login' active={activeItem === 'login'} onClick={this.handleItemClick} as={NavLink} to="/login">
                Login
              </Menu.Item> : <Menu.Item onClick={this.logOut}>
                Logout
              </Menu.Item>}

      </Menu> : null;

    console.log(this.state.showNavBar)
    return navbar
  }
}


export default withRouter(Navigation)