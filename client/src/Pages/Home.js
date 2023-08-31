import { Component } from "react";

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";

// import { Container as bootstrapContainer, Nav, Navbar } from 'react-bootstrap';

import PropTypes from "prop-types";

import PersonalBios from '../Segments/PersonalBios';

const HomepageHeading = ({ mobile }) => (
  <Container text>
      <Header
          as="h1"
          content="Remote-World"
          inverted
          style={{
              fontSize: mobile ? "2em" : "4em",
              fontWeight: "normal",
              marginBottom: 0,
              marginTop: mobile ? "0px" : "0px",
              backgroundColor: "black"
          }}
      />
      <Header
          as="h2"
          content="Looking for coding jobs? Find remote work specialized for you!"
          inverted
          style={{
              fontSize: mobile ? "1.5em" : "1.7em",
              fontWeight: "normal",
              marginTop: mobile ? "0.5em" : "1.5em",
              backgroundColor: "black"
          }}
      />
      <Button primary size="huge">
          Find remote jobs!
          <Icon name="right arrow" />
      </Button>
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
};

class Home extends Component {
  toggleFixedMenu = (inView) => this.setState({ fixed: !inView });

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });
  render() {
    return (
      <>
        <Segment style={{ padding: "6em 0em" }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as="h3" style={{ fontSize: "2em" }}>
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
              as="h4"
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

Home.propTypes = {
  children: PropTypes.node,
};

export default Home;
