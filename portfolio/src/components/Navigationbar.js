import { Container, Nav, Navbar, Image } from "react-bootstrap";
import sr from "../assests/Sr.png";

const NavigationBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="#home" className="fs-2">
          <Image
            style={{
              margin: "10px",
              width: "auto",
              height: "40px",
              filter: "invert(100%)",
            }}
            src={sr}
            alt="sr"
          />
          Sri Ram Singarapu
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto fs-5 me-5 bold-text">
            <Nav.Link href="#home" className="me-4">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="me-4">
              About
            </Nav.Link>
            <Nav.Link href="#skills" className="me-4">
              Skills
            </Nav.Link>
            <Nav.Link href="#projects" className="me-4">
              Projects
            </Nav.Link>
            <Nav.Link href="#contact" className="me-4">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
