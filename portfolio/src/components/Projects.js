import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import todo from "../projectsvideo/todo app.mp4";
import expense from "../projectsvideo/Expense.mp4";
import restaurant from "../projectsvideo/Restaurant.mp4";
import "./Projects.css";

const projectsData = [
  {
    title: "Expense tracker",
    video: expense,
    description: [
      "An interactive expense tracker using React JS with a modular, component-based architecture.",
      "Utilized state management techniques for efficient data handling and integrated intuitive UI components for expense management and dynamic visualization.",
    ],
    githubLink: "https://github.com/sriram-singarapu/ExpenseTracker",
    liveServerLink: "https://sriram-singarapu.github.io/ExpenseTracker/",
  },
  {
    title: "Todo App",
    video: todo,
    description: [
      "A dynamic Todo application with task management features using React useState hook for state management.",
      "Implementing create, read, update, and delete (CRUD) operations ensures comprehensive task management.",
    ],
    githubLink: "https://github.com/sriram-singarapu/react-todo",
    liveServerLink: "https://sriram-singarapu.github.io/react-todo/",
  },
  {
    title: "Food order app",
    video: restaurant,
    description: [
      "Implemented a responsive cart system using React Context API.",
      "Integrated modal components using react dom to display cart and user interaction.",
    ],
    githubLink: "https://github.com/sriram-singarapu/react-restaurant",
    liveServerLink: "https://sriram-singarapu.github.io/react-restaurant/",
  },
];

const Projects = () => {
  const handleGitHubClick = (url) => {
    window.open(url, "_blank");
  };

  const handleLiveServerClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section id="projects" className="projects-section">
      <div
        style={{
          width: "100%",
          backgroundColor: "#A7F3D0",
          padding: "10px",
          textAlign: "center",
          margin: "0%",
        }}
      >
        <h2
          className="text-center"
          style={{
            fontSize: "30px",
            color: "#10B981",
            fontWeight: "bold",
          }}
        >
          Projects
        </h2>
      </div>
      {projectsData.map((project, index) => (
        <Card key={index} className="project-card">
          <Container fluid className="p-0">
            <Row className="align-items-center">
              <Col xs={12}>
                <Card.Title className="text-center mb-4">
                  <strong>{project.title}</strong>
                </Card.Title>
              </Col>
              <Col xs={12} md={5} className="mb-3 mb-md-0">
                <video className="project-video" controls autoPlay loop muted>
                  <source
                    src={project.video}
                    type="video/mp4"
                    allowFullScreen
                  />
                </video>
              </Col>
              <Col xs={12} md={7}>
                <Card.Text className="mb-4">
                  {project.description.map((desc, descIndex) => (
                    <li key={descIndex}>{desc}</li>
                  ))}
                </Card.Text>
                <Button
                  variant="light"
                  onClick={() => handleGitHubClick(project.githubLink)}
                >
                  GitHub repo <FaGithub />
                </Button>
                <Button
                  className="ml-3"
                  variant="link"
                  onClick={() => handleLiveServerClick(project.liveServerLink)}
                >
                  Live server
                </Button>
              </Col>
            </Row>
          </Container>
        </Card>
      ))}
    </section>
  );
};

export default Projects;
