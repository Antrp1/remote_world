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
                  src="/aden.png"
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
    </>
  )
}