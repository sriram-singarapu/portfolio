import React from "react";
import about from "../assests/about.png";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <section id="about" style={{ margin: "5%" }}>
      <Card style={{ width: "auto", margin: "3% 12% 3% 12%", border: "none" }}>
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={5}>
              <Card.Img
                style={{
                  width: "80%",
                  height: "80%",
                }}
                src={about}
                roundedCircle
              />
            </Col>
            <Col xs={12} md={7}>
              <Card.Title>
                <h3>About me</h3>
              </Card.Title>
              <Card.Text>
                Hi, I'm Sri Ram Singarapu. A passionate Front-end React
                developer based in Hyderabad.
              </Card.Text>
              <Button variant="dark">Contact me</Button>
              <div style={{ margin: "10% 2% 2% 2%" }}>
                <strong>Tech Stack | </strong>
              </div>
            </Col>
          </Row>
        </Container>
      </Card>
    </section>
  );
};

export default About;
