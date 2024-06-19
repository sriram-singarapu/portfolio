import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";
import software from "../assests/software.png";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

const Contact = () => {
  const GitHub = () => {
    window.open("https://github.com/sriram-singarapu", "_blank");
  };
  const LinkedIn = () => {
    window.open("https://www.linkedin.com/in/sriram-singarapu/", "_blank");
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
          alert("Message sent");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("deliver failed");
        }
      );
  };

  return (
    <section
      id="contact"
      style={{
        margin: "0% 12% 5% 12%",
        border: "1px solid red",
        padding: "2%",
      }}
    >
      <h2
        className="text-center"
        style={{
          fontSize: "30px",
          color: "#10B981",
          fontWeight: "bold",
          marginBottom: "2%",
          backgroundColor: "#A7F3D0",
          padding: "10px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        Contact Information
      </h2>

      <Container>
        <Row>
          <Col md={6}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Image src={software} style={{ width: "90%" }}></Image>
              <Button
                variant="light"
                href="mailto:sriramsingarapu2@gmail.com"
                style={{ marginBottom: "2%", width: "100%", marginTop: "4%" }}
              >
                <FaEnvelope /> sriramsingarapu2@gmail.com
              </Button>
              <Button
                variant="light"
                href="tel:+919866521020"
                style={{ marginBottom: "2%", width: "100%" }}
              >
                <MdAddCall /> +919866521020
              </Button>
              <Button
                variant="light"
                onClick={GitHub}
                style={{ marginBottom: "2%", width: "100%" }}
              >
                <FaGithub /> GitHub
              </Button>
              <Button
                variant="light"
                onClick={LinkedIn}
                style={{ marginBottom: "2%", width: "100%" }}
              >
                <FaLinkedin /> LinkedIn
              </Button>
            </div>
          </Col>
          <Col md={6} style={{ border: "3px solid", padding: "3%" }}>
            <h4 className="text-center">Get in Touch</h4>
            <form
              ref={form}
              onSubmit={sendEmail}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <label style={{ fontWeight: "bold" }}>Name</label>
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
              <label style={{ fontWeight: "bold" }}>Email</label>
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
              <label style={{ fontWeight: "bold" }}>Message</label>
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
                  marginTop: "2%",
                }}
              >
                Send
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
