import { Container, Nav, Navbar, Image } from "react-bootstrap";
import sr from "../assests/Sr.png";

const NavigationBar = () => {
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
          Sri Ram Singarapu
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="me-2">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="me-2">
              About
            </Nav.Link>
            <Nav.Link href="#skills" className="me-2">
              Skills
            </Nav.Link>
            <Nav.Link href="#projects" className="me-2">
              Projects
            </Nav.Link>
            <Nav.Link href="#contact" className="me-2">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
