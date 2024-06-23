import React from "react";
import about from "../assests/about.png";
import { Card, Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <section id="about">
      <Card style={{ width: "auto", margin: "3% 10% 3% 10%", border: "none" }}>
        <Container>
          <Row className="align-items-center">
            <Card.Title>
              <h3
                style={{
                  margin: "3% 0% 3% 0%",
                  fontWeight: "bold",
                  color: "#10B981",
                  padding: "10px",
                  textAlign: "center",
                  backgroundColor: "#A7F3D0",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                About Me
              </h3>
            </Card.Title>
            <Col xs={12} md={5}>
              <Card.Img
                style={{
                  height: "90%",

                  borderRadius: "10%",
                }}
                src={about}
              />
            </Col>
            <Col xs={12} md={7}>
              <Card.Text
                style={{
                  fontSize: "18px",
                  fontFamily: "monospace",
                }}
              >
                As a fresher, I have a strong foundation in web development,
                focusing on creating dynamic and user-friendly web applications.
                <br />I have hands-on experience with various technologies,
                including JavaScript, React, HTML, CSS, Bootstrap, GitHub,
                Microsoft Azure, and MySQL.
                <br /> I am eager to learn and grow as a developer, and I am
                excited about the opportunities that lie ahead in the field of
                web development.
              </Card.Text>
            </Col>
          </Row>
        </Container>
      </Card>
    </section>
  );
};

export default About;
