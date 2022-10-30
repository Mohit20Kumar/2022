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
import taskade from "../../images/taskade.png";
import xyz from "../../images/xyz.png";
import balsamiq from "../../images/balsamiq.png";
import voiceflow from "../../images/voiceflow.png";
import streamyard from "../../images/streamyard.png";
import echo from "../../images/echo.png";
import swift from "../../images/swift.png";
import duolearn from "../../images/duolearn.jpg";
import digital from "../../images/digital.png";
import cakeview from "../../images/cakeview.png";

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
              <Col xs lg="10">
                <img className="sponsor-image" src={bg} alt="" width="100%" />
              </Col>
              <Col lg="2">
                <h1 className="sponsors-heading">SPONSORS</h1>
              </Col>
            </Row>
            {/* <div data-aos="slide-up" className="track-heading-div">
              <h1 id="header-titles" className="sponsors-heading">
                SPONSORS
              </h1>
              <img className="track-img" src={bg} width={"100%"} alt="" />
            </div> */}
          </Container>
          <Container data-aos="fade-up" className="sponsers d-flex flex-wrap">
            <Container>
              <div>
                <h3 className="sponser-title">Title Sponsors</h3>
              </div>
              <div className="sponserContainer flex-wrap ">
                <img src={logo} className="img" alt="Reva Logo" />
                <img src={mlh} className="img" alt="MLH Logo" />
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
                  <img src={polygon} className="img" alt="Polygon Logo" />
                </a>
                <a
                  href="https://devfolio.co/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <img src={devfolio} className="img" alt="Devfolio Logo" />
                </a>
                <a
                  href="https://www.taskade.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <img src={taskade} className="img" alt="taskade Logo" />
                </a>
                <a href="https://gen.xyz/" target={"_blank"} rel="noreferrer">
                  <img src={xyz} className="img" height={125} alt="xyz Logo" />
                </a>
                <a
                  href="https://balsamiq.com/wireframes/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <img src={balsamiq} className="img" alt="balsamiq Logo" />
                </a>
                <a
                  href="https://www.voiceflow.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <img
                    src={voiceflow}
                    height={200}
                    className="img"
                    alt="voiceflow Logo"
                  />
                </a>
                <a
                  href="https://www.echo3d.co/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <img src={echo} className="img" alt="echo Logo" />
                </a>
                <a
                  href="https://www.duolearn.tech/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <img src={duolearn} className="img" alt="duolearn Logo" />
                </a>
                <a
                  href="https://www.digitalocean.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <img src={digital} className="img" alt="Digital Ocean Logo" />
                </a>
                <a
                  href="https://www.interviewcake.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <img src={cakeview} className="img" alt="Cake View Logo" />
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
                  <img src={solana} className="img" alt="solana Logo" />
                </a>
                <a
                  href="https://filecoin.io/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <img src={filecoin} className="img" alt="filecoin Logo" />
                </a>
                <a
                  href="https://replit.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <img src={replit} className="img" alt="replit Logo" />
                </a>
                <a
                  href="https://streamyard.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <img src={streamyard} className="img" alt="streamyard Logo" />
                </a>
                <a
                  href="https://swiftride.in/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <img src={swift} className="img" alt="swift Logo" />
                </a>
              </div>
            </Container>
          </Container>
        </Container>
      </div>
    );
  }
}
