import React, { useState } from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import { useMutation } from '@apollo/client';
import { userLogin, userSignup } from '../utils/mutations';

const LoginForm = () => {
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  const [formSignup, setFormSignup] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [login] = useMutation(userLogin);
  const [signup] = useMutation(userSignup);

  async function handleLogin() {
    const { data } = await login({
      variables: {
        ...formLogin
      }
    });
    localStorage.setItem('id_token', data.login.token);
    window.location.replace("/");
  }

  async function handleSignup() {
    const { data } = await signup({
      variables: {
        ...formSignup
      }
    });
    console.log(data);
    localStorage.setItem('id_token', data.addUser.token);
    window.location.replace("/");
  }

  function handleLoginChange(event) {
    const { name, value } = event.target;
    setFormLogin({ ...formLogin, [name]: value });
  }

  function handleSignupChange(event) {
    const { name, value } = event.target;
    setFormSignup({ ...formSignup, [name]: value });
  }

  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='black' textAlign='center'> Login
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input
              fluid
              onChange={handleLoginChange}
              name="email"
              value={formLogin.email}
              icon='user'
              iconPosition='left'
              placeholder='Email'
            />
            <Form.Input
              fluid
              onChange={handleLoginChange}
              name="password"
              value={formLogin.password}
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />
            <Button color='black' fluid size='large' onClick={handleLogin}>
              Login
            </Button>
          </Segment>
        </Form>
        <Header as='h2' color='black' textAlign='center'> Signup
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input
              fluid
              onChange={handleSignupChange}
              name="username"
              value={formSignup.username}
              icon='lock'
              iconPosition='left'
              placeholder='Username'
            />
            <Form.Input
              fluid
              onChange={handleSignupChange}
              name="email"
              value={formSignup.email}
              icon='user'
              iconPosition='left'
              placeholder='Email'
            />
            <Form.Input
              fluid
              onChange={handleSignupChange}
              name="password"
              value={formSignup.password}
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />
            <Button color='black' fluid size='large' onClick={handleSignup}>
              Signup
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  )
}

export default LoginForm