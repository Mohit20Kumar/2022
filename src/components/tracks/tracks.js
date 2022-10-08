import React, { useEffect } from "react";
import "./tracks.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Aos from "aos";
import "aos/dist/aos.css";

import bg from "../../images/tracks_bg.png";

import { trackData } from "../../data/tracksData";

const Tracks = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="tracks" className="track-main">
      <Container>
        <Row data-aos="slide-up" className="title-container-tracks">
          <Col xs lg="10">
            <img src={bg} alt="" width="100%" />
          </Col>
          <Col lg="2">
            <h1 className="track-heading">TRACKS</h1>
          </Col>
        </Row>
        {/* <div data-aos="slide-up" className="track-heading-div">
          </div> */}
      </Container>
      {/* <Container className="track-heading-container">
        <div data-aos="slide-up" className="track-heading-div">
          
          <img className="track-img" src={bg} width={"100%"} alt="" />
        </div>
      </Container> */}
      <Container className="track-card-container">
        {trackData.map((item, i) => {
          return (
            <div key={i} data-aos="slide-up" className="track-container">
              <div className="track-card">
                <div className="card-front">
                  <img className="card-front-image" src={item.image} alt="" />
                </div>
                <div className="card-back">
                  <div className="card-back-content">
                    <h3 className="card-title">{item.title}</h3>
                    <hr />
                    <p className="track-para"> {item.paragraph} </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Container>
    </div>
  );
};

export default Tracks;
