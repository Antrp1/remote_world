import {
  Container,
  Divider,
  Grid,
  Header,
  List,
  Segment,
} from "semantic-ui-react";
export default function ContactUs() {
  return (
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
        <Grid centered divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Anthony P." />
              <List link inverted>
                <List.Item>
                  <a href="https://github.com/Antrp1" target="_blank">
                    Anthony's GitHub
                  </a>
                </List.Item>
              </List>
            </Grid.Column>

            <Grid.Column width={3}>
              <Header inverted as="h4" content="Aden E." />
              <List link inverted>
                <List.Item>
                  <a href="https://github.com/NekoNoka" target="_blank">
                    Aden's GitHub
                  </a>
                </List.Item>
              </List>
            </Grid.Column>

            <Grid.Column width={3}>
              <Header inverted as="h4" content="Evelin O." />
              <List link inverted>
                <List.Item>
                  <a href="https://github.com/evelynortega" target="_blank">
                    Evelin's GitHub
                  </a>
                </List.Item>
              </List>
            </Grid.Column>

            <Grid.Column width={3}>
              <Header inverted as="h4" content="Grace C." />
              <List link inverted>
                <List.Item>
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
  )
}