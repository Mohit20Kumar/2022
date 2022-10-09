import React, { useEffect, useState } from "react";
// import React, { useState } from 'react';
import Carousel from "react-bootstrap/Carousel";

import "./crew.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Aos from "aos";
import "aos/dist/aos.css";
import curation from "../../images/crew/Curation.png";
import design from "../../images/crew/Design.png";
import marketing from "../../images/crew/Marketing.png";
import oc from "../../images/crew/OC.png";
import organizers from "../../images/crew/organizers.png";
import query from "../../images/crew/Query.png";
import sponsor from "../../images/crew/Sponsor.png";
import technical from "../../images/crew/Technical.png";
import bg from "../../images/tracks_bg.png";

const Crew = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div id="crew" className="crew-main">
      <Container className="track-heading-container">
        <Row data-aos="slide-up" className="title-container-tracks">
          <Col lg="2">
            <h1 className="track-heading">CREW</h1>
          </Col>
          <Col xs lg="10">
            <img className="tracks-image" src={bg} alt="" width="100%" />
          </Col>
        </Row>
        {/* <div data-aos="slide-up" className="track-heading-div">
          <img className="track-img" src={bg} width={"100%"} alt="" />
        </div> */}
      </Container>
      <Container>
                <br /> <br />
      <Carousel activeIndex={index} onSelect={handleSelect} indicators = {false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={organizers}
          alt="Student Organizers"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={oc}
          alt="Professor Organizers"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={technical}
          alt="Technical Crew"
        />
        </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sponsor}
          alt="Sponsorship Crew"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={design}
          alt="Design Crew"
        />
        </Carousel.Item>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={curation}
          alt="Curation Crew"
        /></Carousel.Item>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={query}
          alt="Query Management Crew"
        /></Carousel.Item>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={marketing}
          alt="Marketing Crew"
        /></Carousel.Item>
    </Carousel>
      </Container>
    </div>
  );
};

export default Crew;
