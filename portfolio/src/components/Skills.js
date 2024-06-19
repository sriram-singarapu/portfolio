import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import html from "../assests/html.png";
import css from "../assests/css.png";
import bootstrap from "../assests/bootstrap.png";
import js from "../assests/js.png";
import react from "../assests/react.png";
import github from "../assests/github.png";
import azure from "../assests/azure.png";
import mysql from "../assests/mysql.png";

const Skills = () => {
  const skills = [
    { name: "JavaScript", image: js },
    { name: "React", image: react },
    { name: "HTML", image: html },
    { name: "CSS", image: css },
    { name: "Bootstrap", image: bootstrap },
    { name: "GitHub", image: github },
    { name: "Microsoft Azure", image: azure },
    { name: "MySQL", image: mysql },
  ];

  const cardStyle = {
    width: "100%",
    maxWidth: "150px",
    border: "1px solid skyblue",
    transition: "transform 0.3s, box-shadow 0.3s",
  };

  const cardHoverStyle = {
    transform: "scale(1.05)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };

  return (
    <section id="skills" style={{ margin: "3% 12% 3% 12%" }}>
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
              margin: 0,
            }}
          >
            My Skills...
          </h2>
        </div>
        <Row className="justify-content-center">
          {skills.map((skill, index) => (
            <Col
              key={index}
              xs={6}
              sm={6}
              md={5}
              lg={2}
              xl={2}
              className="mb-4"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                className="h-100 d-flex justify-content-center align-items-center"
                style={cardStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = cardHoverStyle.transform;
                  e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <Card.Body
                  className="p-4 rounded text-center"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {skill.image ? (
                    <img
                      src={skill.image}
                      alt={skill.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  ) : (
                    <skill.icon
                      style={{
                        fontSize: "100px",
                        color: "black",
                      }}
                    />
                  )}
                  <div style={{ fontWeight: "bold", marginTop: "10px" }}>
                    {skill.name}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
