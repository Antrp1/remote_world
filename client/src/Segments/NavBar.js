import { Component } from "react";
import {
    Button,
    Container,
    Header,
    Icon,
    Menu,
    Segment,
    Sidebar
} from "semantic-ui-react";

import { InView } from "react-intersection-observer";

import { createMedia } from "@artsy/fresnel";

import { Route, Link } from "react-router-dom";

import PropTypes from "prop-types";

const HomepageHeading = ({ mobile }) => (
    <Route exact path="/">
        <Container
            text
            style={{ margin: "0em 0em 8em 0em" }}
        >
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
            <Link to="/jobs">
                <Button primary size="huge">
                    Find remote jobs!
                    <Icon name="right arrow" />
                </Button>
            </Link>
        </Container>
    </Route>
);

HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
};

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */

const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
        mobile: 0,
        tablet: 768,
        computer: 1024,
    }
});

export default class NavBar extends Component {
    state = {};

    toggleFixedMenu = (inView) => this.setState({ fixed: !inView });

    handleSidebarHide = () => this.setState({ sidebarOpened: false });

    handleToggle = () => this.setState({ sidebarOpened: true });
    render() {
        const { sidebarOpened } = this.state;
        const { fixed } = this.state;
        return (
            <MediaContextProvider>
                <Media greaterThan="mobile">
                    <InView onChange={this.toggleFixedMenu}>
                        <Segment
                            inverted
                            textAlign="center"
                            style={{ padding: "1em 0em" }}
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
                                    <Link to="/">
                                        <Menu.Item active={window.location.pathname === "/"}>
                                            Home
                                        </Menu.Item>
                                    </Link>
                                    <Link to="/jobs">login
                                        <Menu.Item active={window.location.pathname === "/jobs"}>
                                            Jobs
                                        </Menu.Item>
                                    </Link>
                                    <Menu.Item position="right">
                                        <Link to="/login">
                                            <Button
                                                inverted={!fixed}
                                            >
                                                Log in
                                            </Button>
                                        </Link>
                                        <Link to="/signup">
                                            <Button
                                                inverted={!fixed}
                                                primary={fixed}
                                                style={{ marginLeft: "0.5em" }}
                                            >
                                                Sign Up
                                            </Button>
                                        </Link>
                                    </Menu.Item>
                                </Container>
                            </Menu>
                            <HomepageHeading />
                        </Segment>
                    </InView>
                </Media>
                <Media as={Sidebar.Pushable} at="mobile">
                    <Segment
                        inverted
                        textAlign="center"
                        style={{ padding: "1em 0em" }}
                        vertical
                    >
                        <Container>
                            <Menu inverted pointing secondary size="large">
                                <Menu.Item onClick={this.handleToggle}>
                                    <Icon name="sidebar" />
                                </Menu.Item>
                                <Menu.Item position="right">
                                    <Link to="/login">
                                        <Button inverted>
                                            Log in
                                        </Button>
                                    </Link>
                                    <Link to="/signup">
                                        <Button inverted style={{ marginLeft: "0.5em" }}>
                                            Sign Up
                                        </Button>
                                    </Link>
                                </Menu.Item>
                            </Menu>
                        </Container>
                        <HomepageHeading mobile />
                    </Segment>
                    <Sidebar
                        as={Menu}
                        animation="overlay"
                        inverted
                        onHide={this.handleSidebarHide}
                        vertical
                        visible={sidebarOpened}
                    >
                        <Link to="/">
                            <Menu.Item active={window.location.pathname === "/"}>Home</Menu.Item>
                        </Link>
                        <Link to="/jobs">
                            <Menu.Item active={window.location.pathname === "/jobs"}>Jobs</Menu.Item>
                        </Link>
                        <Link to="/login">
                            <Menu.Item active={window.location.pathname === "/login"}>Log in</Menu.Item>
                        </Link>
                        <Link to="/signup">
                            <Menu.Item active={window.location.pathname === "/signup"}>Sign Up</Menu.Item>
                        </Link>
                    </Sidebar>
                </Media>
            </MediaContextProvider>
        );
    }
}