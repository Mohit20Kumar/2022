import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./sponsors.css";
import logo from "../../images/reva_logo.png";
import mlh from "../../images/mlh-logo.png";
import bg from "../../images/prizes_bg.png";
import polygon from "../../images/polygon.png";
import devfolio from "../../images/devfolio.png";
import solana from "../../images/Solana2.svg";
import filecoin from "../../images/filecoin.png";
import replit from "../../images/replit.png";

export default class Sponsors extends Component {
  render() {
    return (
      <div
        id="sponsors"
        className="sponsors-main d-flex align-items-center justify-content-center"
      >
        <Container>
          <Container className="title-container">
            <Row data-aos="slide-up">
              <Col lg="2">
                <h1 className="sponsors-heading">SPONSORS</h1>
              </Col>
              <Col xs lg="10">
                <img src={bg} alt="" width="100%" />
              </Col>
            </Row>
            {/* <div data-aos="slide-up" className="track-heading-div">
              <h1 id="header-titles" className="sponsors-heading">
                SPONSORS
              </h1>
              <img className="track-img" src={bg} width={"100%"} alt="" />
            </div> */}
          </Container>
          <Container data-aos="slide-up" className="sponsers d-flex flex-wrap">
            <Container>
              <div>
                <h3 className="sponser-title">Title Sponsors</h3>
              </div>
              <div className="sponserContainer flex-wrap ">
                <img src={logo} className="img" alt="Reva Logo" />
                <img src={mlh} className="img" alt="Reva Logo" />
              </div>
            </Container>
            <Container>
              <div>
                <h3 className="sponser-title">Tree</h3>
              </div>
              <div className="sponserContainer flex-wrap ">
                <a
                  href="https://polygon.technology/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <img src={polygon} className="img" alt="Reva Logo" />
                </a>
                <a
                  href="https://devfolio.co/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <img src={devfolio} className="img" alt="Reva Logo" />
                </a>
              </div>
            </Container>
            <Container>
              <div>
                <h3 className="sponser-title">Sapling</h3>
              </div>
              <div className="sponserContainer flex-wrap ">
                <a
                  href="https://solana.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <img src={solana} className="img" alt="Reva Logo" />
                </a>
                <a
                  href="https://filecoin.io/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <img src={filecoin} className="img" alt="Reva Logo" />
                </a>
                <a
                  href="https://replit.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <img src={replit} className="img" alt="Reva Logo" />
                </a>
              </div>
            </Container>
          </Container>
        </Container>
      </div>
    );
  }
}
