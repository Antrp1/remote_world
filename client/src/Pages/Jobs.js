import React from 'react'
import "semantic-ui-css/semantic.min.css";
// import React, { Component } from "react";
import {
  Button,
  Container,
  Header,
  Icon,
  Image,
  Item,
  Label,
  Step,
} from 'semantic-ui-react'

const style = {
  h1: {
    marginTop: '3em',
  },
  h2: {
    margin: '4em 0em 2em',
  },
  h3: {
    marginTop: '2em',
    padding: '2em 0em',
  },
  last: {
    marginBottom: '300px',
  },
}

const ResponsiveLayout = () => (
  <div>
    <Header as='h1' content='Responsive UI Examples' style={style.h1} textAlign='center' />
    <Header as='h2' content='Basic Responsive' style={style.h2} textAlign='center' />
    <Header as='h3' content='Responsive Item' style={style.h3} textAlign='center' />
    <Container>
      <Item.Group divided>
        <Item>
          <Item.Image src='/images/wireframe/image.png' />
          <Item.Content>
            <Item.Header as='a'>Content Header</Item.Header>
            <Item.Meta>
              <span>Date</span>
              <span>Category</span>
            </Item.Meta>
            <Item.Description>

            </Item.Description>
            <Item.Extra>
              <Image avatar circular src='/images/wireframe/square-image.png' />

            </Item.Extra>
          </Item.Content>
        </Item>

        <Item>
          <Item.Image src='/images/wireframe/image.png' />
          <Item.Content>
            <Item.Header as='a'>Content Header</Item.Header>
            <Item.Meta>
              <span>Date</span>
              <span>Category</span>
            </Item.Meta>
            <Item.Description>

            </Item.Description>
            <Item.Extra>
              <Button floated='right' primary>
                Primary
                <Icon name='chevron right' />
              </Button>
              <Label>Limited</Label>
            </Item.Extra>
          </Item.Content>
        </Item>
        <Item>
          <Item.Image src='/images/wireframe/image.png' />
          <Item.Content>
            <Item.Header as='a'>Content Header</Item.Header>
            <Item.Meta>
              <span>Date</span>
              <span>Category</span>
            </Item.Meta>
            <Item.Description>

            </Item.Description>
            <Item.Extra>
              <Button primary floated='right'>
                Primary
                <Icon name='chevron right' />
              </Button>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </Container>

    <Header as='h3' content='Responsive Steps' style={style.h3} textAlign='center' />

    <Container style={style.last}>
      <Step.Group fluid>
        <Step icon='plane' title='Shipping' description='Choose your shipping options' />
        <Step active icon='dollar' title='Billing' description='Enter billing information' />
        <Step
          disabled
          icon='info circle'
          title='Confirm Order'
          description='Verify order details'
        />
      </Step.Group>
    </Container>
  </div>
)

export default ResponsiveLayout