import React from "react";
import photo from "../assests/photo.png";
import html from "../assests/html.png";
// import { FaGithub } from "react-icons/fa";
import css from "../assests/css.png";
import bootstrap from "../assests/bootstrap.png";
import js from "../assests/js.png";
import react from "../assests/react.png";
import { Button, Card, Container, Row, Col, Image } from "react-bootstrap";

const Home = () => {
  return (
    <section id="home" style={{ margin: "5%", marginTop: "80px" }}>
      <Card style={{ width: "auto", margin: "3% 12% 3% 12%", border: "none" }}>
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={8}>
              <Card.Title>
                <h1>Front-End React Developer</h1>
              </Card.Title>
              <Card.Text style={{ margin: "2% 0% 2% 0%" }}>
                Hi, I'm Sri Ram Singarapu. A passionate Front-end React
                developer based in Hyderabad.
              </Card.Text>
              <Button style={{ margin: "2% 0% 2% 0%" }} variant="dark">
                Contact me
              </Button>
              <div style={{ margin: "10% 2% 2% 2%" }}>
                <strong>Tech Stack | </strong>
                <Image
                  style={{ margin: "10px", width: "auto", height: "28px" }}
                  src={js}
                  alt="js"
                />
                <Image
                  style={{ margin: "10px", width: "auto", height: "40px" }}
                  src={react}
                  alt="react"
                />
                <Image
                  style={{ margin: "10px", width: "auto", height: "33px" }}
                  src={html}
                  alt="html"
                />
                <Image
                  style={{ margin: "10px", width: "auto", height: "27px" }}
                  src={css}
                  alt="css"
                />
                <Image
                  style={{ margin: "10px", width: "auto", height: "30px" }}
                  src={bootstrap}
                  alt="bootstrap"
                />
              </div>
            </Col>

            <Col xs={12} md={4}>
              <Card.Img src={photo} roundedCircle />
            </Col>
          </Row>
        </Container>
      </Card>
    </section>
  );
};

export default Home;
