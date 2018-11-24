import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Grid, Button, Menu } from 'semantic-ui-react';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNavBar: true,
      showPosts: true,
      activeItem: '',
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
    const { activeItem, showNavBar, showPosts } = this.state;
    console.log('rerender');
    console.log(activeItem);

    return (
      <Grid columns={3}>
        <Grid.Column>
          <Menu>
            <Menu.Item
              name="home"
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
              as={NavLink}
              to="/"
            >
              Home
            </Menu.Item>

            {showPosts ? (
              <Menu.Item
                name="posts"
                active={activeItem === 'posts'}
                onClick={this.handleItemClick}
                as={NavLink}
                to="/posts"
              >
                Posts
              </Menu.Item>
            ) : null}

            <Menu.Item
              name="about"
              active={false}
              onClick={this.handleItemClick}
            >
              About
            </Menu.Item>
          </Menu>
        </Grid.Column>
        <Grid.Column />
        {showNavBar ? (
          <Grid.Column>
            <NavLink to="/login">
              <Button
                floated="right"
                name="login"
                onClick={this.handleItemClick}
              >
                Login
              </Button>
            </NavLink>
          </Grid.Column>
        ) : null}
      </Grid>
    );
  }
}
