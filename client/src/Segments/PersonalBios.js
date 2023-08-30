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
export default function personalBios() {
  return (
    <>
      <Segment style={{ padding: "0em" }} vertical>
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <div>
                <img
                  src="/sad cat.jpeg"
                  alt=""
                  class="ui small centered circular image"
                />
              </div>
              <Header as="h1" style={{ margin: "4px" }}>
                Anthony Padfield
              </Header>
              <Header as="h2" style={{ margin: "4px" }}>
                the
              </Header>
              <Header as="h1" style={{ margin: "4px" }}>
                <i>
                  Wizard of Syntax
                </i>
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Fighting bugs with a keyboard and a prayer.
              </p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <div>
                <img
                  src="/aden.png"
                  alt=""
                  class="ui small centered circular image"
                />
              </div>
              <Header as="h1" style={{ margin: "4px" }}>
                Aden Eldred
              </Header>
              <Header as="h2" style={{ margin: "4px" }}>
                the
              </Header>
              <Header as="h1" style={{ margin: "4px" }}>
                <i>
                  Data Alchemist
                </i>
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Forcing machines to follow cryptic orders for endless frustration.
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
              <Header as="h1" style={{ margin: "4px" }}>
                Evelin Ortega
              </Header>
              <Header as="h2" style={{ margin: "4px" }}>
                the
              </Header>
              <Header as="h1" style={{ margin: "4px" }}>
                <i>
                  Pixel Prophet
                </i>
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                404: Sense of direction not found, both in life and in programming.
              </p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <div>
                <img
                  src="/partyhatcat.jpeg"
                  alt=""
                  class="ui small centered circular image"
                />
              </div>
              <Header as="h1" style={{ margin: "4px" }}>
                Grace Cabrera
              </Header>
              <Header as="h2" style={{ margin: "4px" }}>
                the
              </Header>
              <Header as="h1" style={{ margin: "4px" }}>
                <i>
                  Data Druid
                </i>
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Future coder: currently lost in a maze of if-else statements.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
}
