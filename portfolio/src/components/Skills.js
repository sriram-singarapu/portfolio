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
    { name: "MicroSoft Azure", image: azure },
    { name: "MySQL", image: mysql },
  ];

  return (
    <section id="skills" style={{ margin: "3% 12% 3% 12%" }}>
      <Container>
        <h2 className="text-center text-6xl text-emerald-500 font-bold mb-5">
          My Skills...
        </h2>
        <Row className="justify-content-center">
          {skills.map((skill, index) => (
            <Col
              key={index}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={2}
              className="mb-4"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                className="h-100 d-flex justify-content-center align-items-center"
                style={{
                  width: "100%",
                  maxWidth: "150px",
                }}
              >
                <Card.Body
                  className="p-4 rounded bg-emerald-200 text-center"
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
                        width: "100px",
                        height: "100px",
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
                  <div className="font-bold mt-2">{skill.name}</div>
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
