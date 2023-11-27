import React from "react";
import { motion } from "framer-motion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import heart from "../assets/heart.gif";
import "./Footer.css";

function Footer() {
  const iconVariants = {
    hover: {
      scale: 1.9,
      rotate: 360, // Apply a full 360-degree rotation
      transition: {
        duration: 0.5,
        yoyo: Infinity,
      },
    },
  };

  return (
    <footer className="py-4">
      <Container className="text-center">
        <Row className="mb-3">
          <Col sm={12}>
            <h5 className="mb-0">Jasmine tours & events</h5>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col sm={12}>
            <a
              href="https://wa.me/c/31642221525"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2"
            >
              <motion.i
                className="fa-brands fa-whatsapp icon-margin m-2"
                variants={iconVariants}
                whileHover="hover"
                style={{ originX: 0.7, originY: 0.5 }}
              ></motion.i>
            </a>
            <a
              href="https://www.instagram.com/jasmine.tours.amsterdam/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2"
            >
              <motion.i
                className="fa-brands fa-instagram icon-margin m-2"
                variants={iconVariants}
                whileHover="hover"
                style={{ originX: 0.7, originY: 0.5 }}
              ></motion.i>
            </a>
            <a
              href="https://www.facebook.com/zerifegulieva/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.i
                className="fa-brands fa-facebook icon-margin m-2"
                variants={iconVariants}
                whileHover="hover"
                style={{ originX: 0.7, originY: 0.5 }}
              ></motion.i>
            </a>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm={12}>
            <div className="row">
              <p className="text-center mb-0">
                Copyright © 2023 Made with{" "}
                <img
                  className="heart"
                  src={heart}
                  alt="heart"
                  style={{ width: "1.5em" }}
                />{" "}
                by nurlanimamali
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
