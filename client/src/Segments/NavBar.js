import { Component } from "react";
import {
    Button,
    Container,
    Icon,
    Menu,
    Segment,
    Sidebar
} from "semantic-ui-react";

import { InView } from "react-intersection-observer";

import { createMedia } from "@artsy/fresnel";

import {  Link } from "react-router-dom";

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