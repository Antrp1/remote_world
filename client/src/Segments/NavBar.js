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

import { InView } from "react-intersection-observer";

import { createMedia } from "@artsy/fresnel";

import PropTypes from "prop-types";

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
                            style={{ minHeight: 100, padding: "1em 0em" }}
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
                                    <a href="/">Home</a>
                                    <Menu.Item as="a" active>
                                        Home
                                    </Menu.Item>
                                    <a href="/jobs">About Us</a>
                                    <Menu.Item>
                                        <a href="/jobs">Jobs</a>
                                    </Menu.Item>
                                    <Menu.Item as="a">About Us</Menu.Item>
                                    <Menu.Item position="right">
                                        <Button as="a" inverted={!fixed}>
                                            Log in
                                        </Button>
                                        <a href="/signup">Sign Up</a>
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
                        </Segment>
                    </InView>
                </Media>
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
                            <a href="/jobs">Jobs</a>
                            <Menu.Item as="a">Jobs</Menu.Item>
                            <Menu.Item as="a">About Us</Menu.Item>
                            <Menu.Item as="a">Log in</Menu.Item>
                            <Menu.Item as="a">Sign Up</Menu.Item>
                        </Sidebar>

                        <Sidebar.Pusher dimmed={sidebarOpened}>
                            <Segment
                                inverted
                                textAlign="center"
                                style={{ minHeight: 120, padding: "1em 0em" }}
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
                            </Segment>
                        </Sidebar.Pusher>
                    </Sidebar.Pushable>
                </Media>

            </MediaContextProvider>
        );
    }
}