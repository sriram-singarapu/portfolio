import React, { Fragment } from "react";
import photo from "../assests/photo.png";
import html from "../assests/html.png";
import css from "../assests/css.png";
import bootstrap from "../assests/bootstrap.png";
import js from "../assests/js.png";
import react from "../assests/react.png";
import resume from "../assests/SriRam-Singarapu.pdf";
import { Button, Card, Container, Row, Col, Image } from "react-bootstrap";
import { FaRegMessage } from "react-icons/fa6";

const Home = ({ toggleTheme, currentTheme }) => {
  return (
    <Fragment>
      <section id="home" className="pt-lg-2  pt-5">
        <Card
          style={{ width: "auto", margin: "3% 12% 3% 12%", border: "none" }}
        >
          <Container>
            <Row className="align-items-center">
              <Col xs={12} md={8}>
                <Card.Title>
                  <h1 style={{ fontFamily: "Times New Roman, fantasy" }}>
                    Front-End React Developer
                  </h1>
                </Card.Title>
                <Card.Text
                  style={{
                    margin: "2% 0% 2% 0%",
                    fontSize: "16px",
                    //fontWeight: "bold",
                    fontFamily: "monospace",
                  }}
                >
                  <h5>
                    Hi,{" "}
                    <strong style={{ color: "#35B1DA" }}>
                      I'm Sri Ram Singarapu
                    </strong>
                    . A passionate Front-end React developer based in Hyderabad.
                  </h5>
                </Card.Text>
                <Button
                  style={{
                    border:
                      currentTheme === "dark" ? "1px solid white" : "none",
                    margin: "2% 2% 0 0",
                  }}
                  variant="dark"
                  href="#contact"
                >
                  {" "}
                  Hire Me <FaRegMessage />
                </Button>
                <Button
                  style={{
                    border:
                      currentTheme === "dark" ? "1px solid white" : "none",
                    marginTop: "2%",
                  }}
                  variant="dark"
                  href={resume}
                  download="SriRam-Singarapu-resume"
                >
                  Download CV
                </Button>
                <div style={{ margin: "5% 2% 2% 2%" }}>
                  <strong>Tech Stack | </strong>
                  <Image
                    style={{ margin: "10px", width: "auto", height: "28px" }}
                    src={js}
                    alt="js"
                  />
                  <Image
                    style={{ margin: "10px", width: "auto", height: "30px" }}
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
                <Card.Img src={photo} />
              </Col>
            </Row>
          </Container>
        </Card>
      </section>
    </Fragment>
  );
};

export default Home;
