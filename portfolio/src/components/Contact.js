import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub } from "react-icons/fa";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Contact = () => {
  const GitHub = () => {
    window.open("https://github.com/sriram-singarapu", "_blank");
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_qlzr9gq", "template_kd3jao5", form.current, {
        publicKey: "1RHAdTLSob-2fRpne",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact" style={{ margin: "0% 12% 5% 12%" }}>
      <h2 className="text-center" style={{ marginBottom: "5%" }}>
        Contact Information
      </h2>
      <Container>
        <Row>
          <Col md={6}>
            <Row>
              <Col>
                <Button
                  variant="light"
                  href="mailto:sriramsingarapu2@gmail.com"
                >
                  sriramsingarapu2@gmail.com
                </Button>
              </Col>
              <Col>
                <Button variant="light" href="tel:+919866521020">
                  +919866521020
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button variant="light" onClick={GitHub}>
                  GitHub <FaGithub />
                </Button>
              </Col>
              <Col md={6}>
                {/* Add another button here if needed or leave it empty */}
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <h2>Get in Touch</h2>
            <form
              ref={form}
              onSubmit={sendEmail}
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <label style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                Name
              </label>
              <input
                type="text"
                name="user_name"
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
              <label style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                Email
              </label>
              <input
                type="email"
                name="user_email"
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
              <label style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
              <Button
                type="submit"
                variant="warning"
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  fontWeight: "bold",
                  borderRadius: "5px",
                }}
              >
                Submit
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
