import React, { Component } from 'react';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';
import { withRouter, Redirect } from 'react-router-dom';
import axios from 'axios';
import { URL_HOST } from '../config.js';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = props => {
    const { username, password } = this.state;

    axios
      .post(`${URL_HOST}/auth/register`, {
        username,
        password,
      })
      .then(response => {
        console.log(response);
        if (response.status === 200 && response.data.token !== '') {
          localStorage.setItem('token', response.data.token);
          this.props.history.push('/');
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="login-form">
        {/*
        Heads up! The styles below are necessary for the correct render of this example.
        You can do same with CSS, the main idea is that all the elements up to the `Grid`
        below must have a height of 100%.
      */}
        <style>{`
        body > div,
        body > div > div,
        body > div > div > div.login-form {
          height: 100%;
        }
      `}</style>
        <Grid
          textAlign="center"
          style={{ height: '100%' }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              Log-in to your account
            </Header>
            <Form size="large" onSubmit={this.handleSubmit}>
              <Segment stacked>
                <Form.Input
                  name="username"
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="User Name"
                  onChange={this.handleChange}
                />
                <Form.Input
                  name="password"
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  onChange={this.handleChange}
                />

                <Button color="teal" fluid size="large">
                  Login
                </Button>
                <Button
                  style={{ marginTop: '20px' }}
                  color="purple"
                  fluid
                  size="large"
                >
                  Sign-up
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default withRouter(LoginPage);
