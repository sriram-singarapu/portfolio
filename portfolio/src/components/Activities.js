import React from "react";
import Carousel from "react-bootstrap/Carousel";
import sr from "../assests/sr-ma.png";
import satya from "../assests/satya-ma.png";
import grp from "../assests/grp-ma.png";
import { Container } from "react-bootstrap";
import "./Activities.css";

const Activities = () => {
  return (
    <div>
      <section id="activities" style={{ margin: "3% 12% 3% 12%" }}>
        <Container>
          <div
            style={{
              width: "100%",
              backgroundColor: "#A7F3D0",
              padding: "10px",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            <h2
              className="text-center"
              style={{
                fontSize: "30px",
                color: "#10B981",
                fontWeight: "bold",
                margin: "0 5%",
                fontFamily: "Arial, sans-serif",
              }}
            >
              Activities and achievements
            </h2>
          </div>
          <div
            className="activities-container"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <div
              className="activities-text"
              style={{ flex: "1", paddingRight: "20px", minWidth: "300px" }}
            >
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.5",
                  fontFamily: "monospace",
                }}
              >
                Honoured to be selected for the ‘Future Ready Technology Summit,
                2023’ hosted by Microsoft India, where I gained insights into
                Microsoft’s vision for technology-enabled growth, with{" "}
                <strong style={{ background: "orange" }}>Satya Nadella</strong>{" "}
                as the guest of honour.
              </p>
            </div>
            <div style={{ flex: "1.5", minWidth: "300px" }}>
              <Carousel>
                <Carousel.Item interval={1000}>
                  <img
                    src={sr}
                    alt="First slide"
                    style={{
                      width: "100%",
                      height: "350px",
                      objectFit: "cover",
                    }}
                  />
                  <Carousel.Caption>
                    <h6 style={{ background: "black", color: "white" }}>
                      At Microsoft Future Ready Technology Summit, Benguluru
                    </h6>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={700}>
                  <img
                    src={satya}
                    alt="Second slide"
                    style={{
                      width: "100%",
                      height: "350px",
                      objectFit: "cover",
                    }}
                  />
                  <Carousel.Caption>
                    <p style={{ background: "black", color: "white" }}>
                      Satya Nadella, Chairman and CEO, Microsoft addressing
                      developers and technology leaders
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img
                    src={grp}
                    alt="Third slide"
                    style={{
                      width: "100%",
                      height: "350px",
                      objectFit: "cover",
                    }}
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Activities;
