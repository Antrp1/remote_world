import React, { useState } from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import { useMutation } from '@apollo/client';
import { userLogin } from '../utils/mutations';

const LoginForm = () => {
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  
  const [login] = useMutation(userLogin);
  async function handleLogin() {
    const { data } = await login({
      variables: {
        ...formLogin
      }
    });
    localStorage.setItem('id_token', data.login.token);
    window.location.replace("/");
  }


  function handleLoginChange(event) {
    const { name, value } = event.target;
    setFormLogin({ ...formLogin, [name]: value });
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
      </Grid.Column>
    </Grid>
  )
}

export default LoginForm