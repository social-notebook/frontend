import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Grid, Button, Menu } from 'semantic-ui-react';
import './Navigation.css';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: '',
      showNavBar: true
    };
  }

  handleItemClick = (e, { name }) => {
    if (name === 'login') {
      this.setState({ showNavBar: false });
    } else {
      this.setState({ showNavBar: true });
    }
    this.setState({ activeItem: name });
  };

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

              <Menu.Item  name='login' active={activeItem === 'login'} onClick={this.handleItemClick} as={NavLink} to="/login">
                Login
              </Menu.Item>
      </Menu> : null;

    console.log(this.state.showNavBar)
    return navbar
  }
}
