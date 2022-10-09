import React, { useEffect } from "react";

import "./crew.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Aos from "aos";
import "aos/dist/aos.css";

import bg from "../../images/tracks_bg.png";

const Crew = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div id="crew" className="crew-main">
      <Container className="track-heading-container">
        <Row data-aos="slide-up">
          <Col lg="2">
            <h1 className="crew-heading">CREW</h1>
          </Col>
          <Col xs lg="10">
            <img className="crew_image" src={bg} alt="" width="100%" />
          </Col>
        </Row>
        {/* <div data-aos="slide-up" className="track-heading-div">
          
        </div> */}
      </Container>
      <Container> PUT YOUR CONTENT HERE </Container>
    </div>
  );
};

export default Crew;
