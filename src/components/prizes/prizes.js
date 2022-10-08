import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import bg from "../../images/about_bg.png";

import "./prize.css";

const Prizes = () => {
  return (
    <div id="prizes" className="prizes-main">
      <Container className="title-container">
        <Row data-aos="slide-up">
          <Col lg="2">
            <h1 className="sponsors-heading">PRIZES</h1>
          </Col>
          <Col xs lg="10">
            <img src={bg} alt="" width="100%" />
          </Col>
        </Row>
      </Container>

      <Container className="prize-container">
        <Container className="prize-1">
          <div className="prize">
            <h5 className="prize-title">1st Prize</h5>
            <p className="prize-amt"> ₹ 40,000 </p>
          </div>
        </Container>
        <Container id="prizes-2" className="prizes">
          <div className="prize">
            <h5 className="prize-title">2nd Prize</h5>
            <p className="prize-amt"> ₹ 30,000 </p>
          </div>
          <div id="prize3" className="prize">
            <h5 className="prize-title">3rd Prize</h5>
            <p className="prize-amt"> ₹ 20,000 </p>
          </div>
        </Container>
        <Container className="prizes">
          <div className="prize">
            <h5 className="prize-title">Best Female Team</h5>
            <p className="prize-amt"> ₹ 5,000 </p>
          </div>
          <div id="prize3" className="prize">
            <h5 className="prize-title">Best Virtual Team</h5>
            <p className="prize-amt"> ₹ 5,000 </p>
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default Prizes;
