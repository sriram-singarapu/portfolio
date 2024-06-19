import React from "react";
import about from "../assests/about.png";
import { Card, Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <section id="about" style={{ margin: "5%" }}>
      <Card style={{ width: "auto", margin: "3% 12% 3% 12%", border: "none" }}>
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={5}>
              <Card.Img
                style={{
                  width: "90%",

                  borderRadius: "10%",
                  margin: "1%",
                }}
                src={about}
              />
            </Col>
            <Col xs={12} md={7}>
              <Card.Title>
                <h3
                  style={{
                    margin: "5% 0% 5% 0%",
                    fontWeight: "bold",
                    color: "#10B981",
                    padding: "10px",
                    backgroundColor: "#A7F3D0",
                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  About Me
                </h3>
              </Card.Title>
              <Card.Text
                style={{
                  fontSize: "18px",
                  fontFamily: "monospace",
                }}
              >
                As a fresher, I have a strong foundation in web
                development,focusing on creating dynamic and user-friendly web
                applications. I have hands-on experience with various
                technologies, including JavaScript, React, HTML, CSS, Bootstrap,
                GitHub, Microsoft Azure, and MySQL.
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
