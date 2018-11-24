import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Grid, Menu } from 'semantic-ui-react';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const { activeItem } = this.state;
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
      </Grid>
    );
  }
}
