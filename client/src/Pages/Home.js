import { Component } from "react";

import {
  Container,
  Divider,
  Grid,
  Header,
  Segment
} from "semantic-ui-react";

import PropTypes from "prop-types";

import PersonalBios from '../Segments/PersonalBios';

class Home extends Component {
  render() {
    return (
      <>
        <Segment style={{ padding: "6em 0em" }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={8}>
                <Header style={{ fontSize: "2em" }}>
                  We help coders find companies...
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  ...and companies find coders! Let us find the best fit for
                  you! Remote World wants our subscribers to showcase their
                  talents through our platform, in order for them to connect
                  with potential employers.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: "6em 0em" }} vertical>
          <Container text>
            <Divider
              className="header"
              horizontal
              style={{ margin: ".2em 0em", textTransform: "uppercase" }}
            >
              <h3>Meet the Creators</h3>
            </Divider>
          </Container>
        </Segment>
        <PersonalBios />
      </>
    );
  }
}

export default Home;
