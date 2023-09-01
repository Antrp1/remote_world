import React, { useState } from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import { useMutation } from '@apollo/client';
import { userSignup } from '../utils/mutations';

const LoginForm = () => {
  const [formSignup, setFormSignup] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [signup] = useMutation(userSignup);


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

  function handleSignupChange(event) {
    const { name, value } = event.target;
    setFormSignup({ ...formSignup, [name]: value });
  }

  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='black' textAlign='center'> Signup </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input
              fluid
              onChange={handleSignupChange}
              name="username"
              value={formSignup.username}
              icon='write'
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