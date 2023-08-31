import React from "react";
import "semantic-ui-css/semantic.min.css";
// import React, { Component } from "react";
import {
  Button,
  Container,
  Header,
  Icon,
  Item,
  Label
} from "semantic-ui-react";

const style = {
  h1: {
    marginTop: "3em",
    marginBottom: "3em",
  },
  h2: {
    margin: "4em 0em 2em",
  },
  h3: {
    marginTop: "2em",
    marginBottom: "2em",
    padding: "2em 0em",
  },
  last: {
    marginBottom: "300px",
  },
};

const ResponsiveLayout = () => (
  <div>
    <Header
      as="h1"
      content="Current Listings"
      style={style.h1}
      textAlign="center"
    />
    {/* <Header
      as="h2"
      content="Basic Responsive"
      style={style.h2}
      textAlign="center"
    />
    <Header
      as="h3"
      content="Responsive Item"
      style={style.h3}
      textAlign="center"
    /> */}
    <Container>
      <Item.Group divided>
        <Item>
          <Item.Image src="/stressed-coder.jpg" />
          <Item.Content>
            <Item.Header as="a">Junior Front End Web Developer</Item.Header>
            <Item.Meta>
              <span>Posted on 8/21/2023</span>
              <span>by UrgentlyHiring</span>
            </Item.Meta>
            <Item.Description>
              Job Description: Exciting opportunity for a Junior Web Developer!
              No prior experience required. Collaborate with the team to create
              and maintain engaging web experiences. Proficiency in HTML, CSS,
              and JavaScript is a plus. Learn valuable skills through hands-on
              training and guidance. Bring your creativity and passion for web
              development to contribute effectively to projects.
            </Item.Description>
            <Item.Extra>
              <Button floated="right" primary>
                Apply
                <Icon name="chevron right" />
              </Button>
              <Label>HTML</Label>
              <Label>CSS</Label>
              <Label>JavaScript</Label>
              <Label>No previous work experience needed</Label>
            </Item.Extra>
            {/* <Item.Extra>
              <Image avatar circular src="/images/wireframe/square-image.png" />
            </Item.Extra> */}
          </Item.Content>
        </Item>

        <Item>
          <Item.Image src="/stressed-coder.jpg" />
          <Item.Content>
            <Item.Header as="a">Remote Medical Coder</Item.Header>
            <Item.Meta>
              <span>Posted on 6/14/2023</span>
              <span>by MedicalCoders</span>
            </Item.Meta>
            <Item.Description>
              {" "}
              Job Description: Urgently hiring a Medical Coder to ensure
              accurate coding of medical services, diagnoses, and procedures.
              Collaborate with healthcare providers to review clinical
              documentation. Assign appropriate codes following established
              guidelines. Facilitate timely reimbursement and compliance with
              regulations. Detail-oriented individuals with coding certification
              preferred. Join our fast-paced team and contribute to efficient
              healthcare operations while ensuring precision in coding and
              billing.
            </Item.Description>
            <Item.Extra>
              <Button floated="right" primary>
                Apply
                <Icon name="chevron right" />
              </Button>
              <Label>Urgently Hiring</Label>
              <Label>Detail-Oriented</Label>
              <Label>Coding Certifcation</Label>
              <Label>Billing</Label>
            </Item.Extra>
          </Item.Content>
        </Item>
        <Item>
          <Item.Image src="/stressed-coder.jpg" />
          <Item.Content>
            <Item.Header as="a">Full-Stack Web Developer</Item.Header>
            <Item.Meta>
              <span>Posted on 3/25/2023</span>
              <span>by SeasonedCoders</span>
            </Item.Meta>
            <Item.Description>
              Job Description: Seeking a seasoned Full-Stack Web Developer with
              over 5 years of experience. Responsible for end-to-end development
              of web applications, ensuring seamless user experience and
              functionality. Proficiency in both front-end and back-end
              technologies such as HTML, CSS, JavaScript, and various
              frameworks. Collaborate with cross-functional teams to translate
              business requirements into technical solutions. Bring expertise in
              database management, API integration, and responsive design. Join
              us to lead and contribute to the growth of innovative web
              projects.
            </Item.Description>
            <Item.Extra>
              <Button primary floated="right">
                Apply
                <Icon name="chevron right" />
              </Button>
              <Label>HTML</Label>
              <Label>CSS</Label>
              <Label>JavaScript</Label>
              <Label>API Integration</Label>
              <Label>Responsive Design</Label>
              <Label>Database Management</Label>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </Container>

    <Header
      as="h3"
      content="No more listings at this time..."
      style={style.h3}
      textAlign="center"
    />

    {/* <Container style={style.last}>
      <Step.Group fluid>
        <Step
          icon="plane"
          title="Shipping"
          description="Choose your shipping options"
        />
        <Step
          active
          icon="dollar"
          title="Billing"
          description="Enter billing information"
        />
        <Step
          disabled
          icon="info circle"
          title="Confirm Order"
          description="Verify order details"
        />
      </Step.Group>
    </Container> */}
  </div>
);

export default ResponsiveLayout;