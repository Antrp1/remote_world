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

import PropTypes from "prop-types";

import { InView } from "react-intersection-observer";

import { createMedia } from "@artsy/fresnel";
import PersonalBios from '../Segments/PersonalBios';

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  }
});


/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */

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
        marginTop: mobile ? "1.5em" : "3em",
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
  state = {};

  toggleFixedMenu = (inView) => this.setState({ fixed: !inView });

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { sidebarOpened } = this.state;
    const { fixed } = this.state;

    return (
      <MediaContextProvider>
        <Media as={Sidebar.Pushable} at="mobile">
          <Sidebar.Pushable>
            <Sidebar
              as={Menu}
              animation="overlay"
              inverted
              onHide={this.handleSidebarHide}
              vertical
              visible={sidebarOpened}
            >
              <Menu.Item as="a" active>
                Home
              </Menu.Item>
              <Menu.Item as="a">Jobs</Menu.Item>
              <Menu.Item as="a">About Us</Menu.Item>
              <Menu.Item as="a">Log in</Menu.Item>
              <Menu.Item as="a">Sign Up</Menu.Item>
            </Sidebar>

            <Sidebar.Pusher dimmed={sidebarOpened}>
              <Segment
                inverted
                textAlign="center"
                style={{ minHeight: 350, padding: "1em 0em" }}
                vertical
              >
                <Container>
                  <Menu inverted pointing secondary size="large">
                    <Menu.Item onClick={this.handleToggle}>
                      <Icon name="sidebar" />
                    </Menu.Item>
                    <Menu.Item position="right">
                      <Button as="a" inverted>
                        Log in
                      </Button>
                      <Button as="a" inverted style={{ marginLeft: "0.5em" }}>
                        Sign Up
                      </Button>
                    </Menu.Item>
                  </Menu>
                </Container>
                <HomepageHeading mobile />
              </Segment>

              {this.props.children}
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Media>
        <Media greaterThan="mobile">
          <InView onChange={this.toggleFixedMenu}>
            <Segment
              inverted
              textAlign="center"
              style={{ minHeight: 700, padding: "1em 0em" }}
              vertical
            >
              <Menu
                fixed={fixed ? "top" : null}
                inverted={!fixed}
                pointing={!fixed}
                secondary={!fixed}
                size="large"
              >
                <Container>
                  <Menu.Item as="a" active>
                    Home
                  </Menu.Item>
                  <Menu.Item as="a">Jobs</Menu.Item>
                  <Menu.Item as="a">About Us</Menu.Item>
                  <Menu.Item position="right">
                    <Button as="a" inverted={!fixed}>
                      Log in
                    </Button>
                    <Button
                      as="a"
                      inverted={!fixed}
                      primary={fixed}
                      style={{ marginLeft: "0.5em" }}
                    >
                      Sign Up
                    </Button>
                  </Menu.Item>
                </Container>
              </Menu>
              <HomepageHeading />
            </Segment>
          </InView>

          {this.props.children}
        </Media>
        <Segment style={{ padding: "6em 0em" }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  We help coders find companies...
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  ...and companies find coders! Let us find the best fit for you!
                  Remote World wants our subscribers to showcase their talents
                  through our platform, in order for them to connect with potential
                  employers.
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
      </MediaContextProvider>
    );
  }
}

Home.propTypes = {
  children: PropTypes.node,
};

export default Home;