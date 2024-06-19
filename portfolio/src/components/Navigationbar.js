import { Container, Nav, Navbar, Image, Button } from "react-bootstrap";
import sr from "../assests/Sr.png";

const NavigationBar = ({ toggleTheme, currentTheme }) => {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      className="bg-body-tertiary"
      fixed="top"
      style={{ boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
    >
      <Container>
        <Navbar.Brand href="#home" className="fs-4 ">
          <Image
            style={{
              margin: "10px",
              width: "auto",
              height: "35px",
              filter: "invert(100%)",
            }}
            src={sr}
            alt="sr"
          />
          Sri Ram Singarapu{"        "}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className="me-2"
              style={{
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              className="me-2"
              style={{
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className="me-2"
              style={{
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className="me-2"
              style={{
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className="me-2"
              style={{
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button
          className="me-2"
          onClick={toggleTheme}
          variant={currentTheme === "light" ? "dark" : "light"}
        >
          {currentTheme === "light" ? "Dark" : "Light"} Mode
        </Button>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
