import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import todo from "../projectsvideo/todo app.mp4";
import expense from "../projectsvideo/Expense.mp4";
import restaurant from "../projectsvideo/Restaurant.mp4";

const Projects = () => {
  const ExpenseGitHub = () => {
    window.open("https://github.com/sriram-singarapu/ExpenseTracker", "_blank");
  };

  const ExpenseLiveServer = () => {
    window.open("https://sriram-singarapu.github.io/ExpenseTracker/", "_blank");
  };

  const TodoGitHub = () => {
    window.open("https://github.com/sriram-singarapu/react-todo", "_blank");
  };

  const TodoLiveServer = () => {
    window.open("https://sriram-singarapu.github.io/react-todo/", "_blank");
  };

  const FoodGitHub = () => {
    window.open(
      "https://github.com/sriram-singarapu/react-restaurant",
      "_blank"
    );
  };

  const FoodLiveServer = () => {
    window.open(
      "https://sriram-singarapu.github.io/react-restaurant/",
      "_blank"
    );
  };

  return (
    <section id="projects" style={{ margin: "5%" }}>
      <h2 className="text-center text-6xl text-emerald-500 font-bold mb-5">
        Projects
      </h2>
      <Card style={{ width: "80%", margin: "3% 12% 3% 12%", padding: "1%" }}>
        <Container>
          <Row className="align-items-center">
            <Card.Title className="text-center">
              <strong>Expense tracker</strong>
            </Card.Title>
            <Col xs={12} md={5}>
              <video style={{ width: "100%" }} controls autoPlay loop muted>
                <source src={expense} type="video/mp4" allowFullScreen />
              </video>
            </Col>
            <Col xs={12} md={6} style={{ margin: "1%" }}>
              <Card.Text>
                <li>
                  An interactive expense tracker using React JS with a modular,
                  component-based architecture.
                </li>{" "}
                <li>
                  Utilized state management techniques for efficient data
                  handling and integrated intuitive UI components for expense
                  management and dynamic visualization.
                </li>
              </Card.Text>
              <Button variant="light" onClick={ExpenseGitHub}>
                GitHub repo <FaGithub />
              </Button>
              <Button
                style={{ margin: "5%" }}
                variant="link"
                onClick={ExpenseLiveServer}
              >
                Live server
              </Button>
            </Col>
          </Row>
        </Container>
      </Card>

      <br />

      <Card style={{ width: "80%", margin: "3% 12% 3% 12%", padding: "1%" }}>
        <Container>
          <Row className="align-items-center">
            <Card.Title className="text-center">
              <strong>Todo App</strong>
            </Card.Title>
            <Col xs={12} md={6} style={{ margin: "1%" }}>
              <Card.Text>
                <li>
                  {" "}
                  A dynamic Todo application with task management features using
                  React useState hook for state management.
                </li>
                <li>
                  {" "}
                  Implementing create, read, update, and delete (CRUD)
                  operations ensures comprehensive task management.
                </li>
              </Card.Text>
              <Button variant="light" onClick={TodoGitHub}>
                GitHub repo <FaGithub />
              </Button>
              <Button
                style={{ margin: "5%" }}
                variant="link"
                onClick={TodoLiveServer}
              >
                Live server
              </Button>
            </Col>
            <Col xs={12} md={5}>
              <video
                style={{ width: "100%", margin: "1%" }}
                controls
                autoPlay
                loop
                muted
              >
                <source src={todo} type="video/mp4" allowFullScreen />
              </video>
            </Col>
          </Row>
        </Container>
      </Card>

      <br />
      <Card style={{ width: "80%", margin: "3% 12% 3% 12%", padding: "1%" }}>
        <Container>
          <Row className="align-items-center">
            <Card.Title className="text-center">
              <strong>Food order app</strong>
            </Card.Title>
            <Col xs={12} md={5}>
              <video style={{ width: "100%" }} controls autoPlay loop muted>
                <source src={restaurant} type="video/mp4" allowFullScreen />
              </video>
            </Col>
            <Col xs={12} md={6} style={{ margin: "1%" }}>
              <Card.Text>
                <li>
                  Implemented a responsive cart system using React Context API.
                </li>{" "}
                <li>
                  Integrated modal components using react dom to display cart
                  and user interaction.
                </li>
              </Card.Text>
              <Button variant="light" onClick={FoodGitHub}>
                GitHub repo <FaGithub />
              </Button>
              <Button
                style={{ margin: "5%" }}
                variant="link"
                onClick={FoodLiveServer}
              >
                Live server
              </Button>
            </Col>
          </Row>
        </Container>
      </Card>
    </section>
  );
};

export default Projects;
