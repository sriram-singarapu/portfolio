import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div
      style={{
        background: "#4F8DAC",
        height: "50px",
        width: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <a
        href="https://github.com/sriram-singarapu"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "inherit", textDecoration: "none" }}
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/sriram-singarapu/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "inherit", textDecoration: "none", margin: "4%" }}
      >
        <FaLinkedin />
      </a>
      <a
        href="https://www.instagram.com/srlooks_/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "inherit", textDecoration: "none" }}
      >
        <FaInstagram />
      </a>
      <a
        href="tel:+919866521020"
        style={{ color: "inherit", textDecoration: "none", margin: "4%" }}
      >
        <FaWhatsapp />
      </a>
      <a
        href="https://x.com/_I_am_sr_"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "inherit", textDecoration: "none" }}
      >
        <FaTwitter />
      </a>
    </div>
  );
};

export default Footer;
