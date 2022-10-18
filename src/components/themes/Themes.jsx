import React, { useEffect } from "react";
import "./Themes.css";
import Aos from "aos";
import "aos/dist/aos.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import bg from "../../images/about_bg.png";

import { themeData } from "../../data/themeData";

const Themes = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="themes-main">
      <Container className="track-heading-container">
        <Row data-aos="slide-up">
          <Col xs lg="10">
            <img className="theme-image" src={bg} alt="" width="100%" />
          </Col>
          <Col lg="2">
            <h1 className="themes-heading">THEMES</h1>
          </Col>
        </Row>
      </Container>

      <Container className="prize-container">
        <Container className="themes">
          {themeData.map((item, i) => {
            return (
              <div data-aos="slide-up" key={i} className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">{item.title}</div>
                  <div className="flip-card-back">{item.desc}</div>
                </div>
              </div>
            );
          })}
        </Container>
      </Container>
    </div>
  );
};

export default Themes;
