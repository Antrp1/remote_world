/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */

import "./App.js";
import "semantic-ui-css/semantic.min.css";
import { createMedia } from "@artsy/fresnel";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { InView } from "react-intersection-observer";
// import { motion } from "framer-motion";
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

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
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

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {};

  toggleFixedMenu = (inView) => this.setState({ fixed: !inView });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
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

        {children}
      </Media>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
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

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
};

const ResponsiveContainer = ({ children }) => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

const HomepageLayout = () => (
  <ResponsiveContainer>
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

    <Segment style={{ padding: "0em" }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <div>
              <img
                src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                alt=""
                class="ui small centered circular image"
              />
            </div>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Anthony Padfield
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              (enter short bio here + change image)
            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <div>
              <img
                src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                alt=""
                class="ui small centered circular image"
              />
            </div>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Aden Eldred
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              (enter short bio here + change image)
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: "0em" }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <div>
              <img
                src="/smirkingcat.jpg"
                alt=""
                class="ui small centered circular image"
              />
            </div>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Evelin Ortega
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              (enter short bio here + change image)
            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <div>
              <img
                src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                alt=""
                class="ui small centered circular image"
              />
            </div>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Grace Cabrera
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              (enter short bio here + change image)
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    {/* paste code somewhere here */}

    <Segment inverted vertical style={{ padding: "2em 0em" }}>
      <Container text>
        <Divider
          as="h4"
          className="header"
          horizontal
          style={{
            margin: "0em 0em",
            textTransform: "uppercase",
            padding: "6em 0em",
            color: "white",
          }}
        >
          <h3>Contact Us</h3>
        </Divider>
      </Container>

      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Anthony P." />
              <List link inverted>
                <List.Item as="a">
                  <a href="https://github.com/Antrp1" target="_blank">
                    Anthony's GitHub
                  </a>
                </List.Item>
              </List>
            </Grid.Column>

            <Grid.Column width={3}>
              <Header inverted as="h4" content="Aden E." />
              <List link inverted>
                <List.Item as="a">
                  <a href="https://github.com/NekoNoka" target="_blank">
                    Aden's GitHub
                  </a>
                </List.Item>
              </List>
            </Grid.Column>

            <Grid.Column width={3}>
              <Header inverted as="h4" content="Evelin O." />
              <List link inverted>
                <List.Item as="a">
                  <a href="https://github.com/evelynortega" target="_blank">
                    Evelin's GitHub
                  </a>
                </List.Item>
              </List>
            </Grid.Column>

            <Grid.Column width={3}>
              <Header inverted as="h4" content="Grace C." />
              <List link inverted>
                <List.Item as="a">
                  <a href="https://github.com/gracexcabrera" target="_blank">
                    Grace's GitHub
                  </a>
                </List.Item>
              </List>
            </Grid.Column>

            {/* <Grid.Column width={7}>
              <Header as="h4" inverted>
                Footer Header
              </Header>
              <p>
                Extra space for a call to action inside the footer that could
                help re-engage users.
              </p>
            </Grid.Column> */}
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
);

export default HomepageLayout;
