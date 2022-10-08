import React from "react";
import "./Themes.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import bg from "../../images/about_bg.png";

const Themes = () => {
  return (
    <div className="themes-main">
      <Container className="track-heading-container">
        <Row data-aos="slide-up">
          <Col lg="2">
            <h1 className="themes-heading">THEMES</h1>
          </Col>
          <Col xs lg="10">
            <img src={bg} alt="" width="100%" />
          </Col>
        </Row>
      </Container>

      {/* <Container>
        <div data-aos="slide-up" className="track-heading-div">
          
          <img className="track-img" src={bg} width={"100%"} alt="" />
        </div> */}
      {/* </Container> */}
      <Container data-aos="fade-up" className="prize-container">
        {/* <Container className="prize-1"> */}
        <Container className="themes">
          <div className="theme">
            {/* <h5 className="prize-title">More than Meta</h5> */}
            <p className="themes-amt">More than Meta</p>
          </div>
          {/* </Container> */}
          <div className="theme">
            {/* <h5 className="prize-title">More than Metros</h5> */}
            <p className="themes-amt">More than Metros</p>
          </div>
          <div className="theme">
            {/* <h5 className="prize-title">More than Media</h5> */}
            <p className="themes-amt">More than Media</p>
          </div>
          <div className="theme">
            {/* <h5 className="prize-title">More than Metros</h5> */}
            <p className="themes-amt">Sustainable Development Goals</p>
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default Themes;
