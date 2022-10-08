import React, { Component } from "react";
import "./timeline.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import bg from "../../images/tracks_bg.png";

export default class TimeLine extends Component {
  render() {
    return (
      <div
        id="timeline"
        className="timeline-main d-flex align-items-center justify-content-center"
      >
        <Container>
          <Row className="title-container">
            <Col xs lg="10">
              <img src={bg} alt="" width="100%" />
            </Col>
            <Col lg="2">
              <h1 className="timeline-heading">TIMELINE</h1>
            </Col>
          </Row>
          {/* <div data-aos="slide-up" className="track-heading-div">
          </div> */}
          <Container>
            <div data-aos="fade-up" id="timeline2" class="timeline">
              <div class="timeline__event timeline__event--type1">
                <div class="timeline__event__icon ">
                  <i class="lni lni-cake"></i>
                </div>
                <div style={{ color: "white" }} class="timeline__event__date">
                  11-11-2022
                </div>
                <div class="timeline__event__content ">
                  {/* <div class="timeline__event__title">HACK BEGINS!</div> */}
                  <div class="timeline__event__description">
                    <p>
                      {"< Opening Ceremony />"}
                      <br />
                      {"< Theme Announcement />"}
                      <br />
                      {"< Let The Hack Begin! />"}
                      <br />
                    </p>
                  </div>
                </div>
              </div>
              <div class="timeline__event timeline__event--type2">
                <div class="timeline__event__icon">
                  {/* <i class="lni lni-burger"></i> */}
                  <i class="lni lni-fireworks"></i>
                </div>
                <div style={{ color: "white" }} class="timeline__event__date">
                  12-11-2022
                </div>
                <div class="timeline__event__content">
                  {/* <div class="timeline__event__title">Lorem Ipsum</div> */}
                  <div class="timeline__event__description">
                    <p>
                      {" <1st Segment of Submission />"}
                      <br />
                    </p>
                  </div>
                </div>
              </div>
              <div class="timeline__event timeline__event--type3">
                <div class="timeline__event__icon">
                  {/* <i class="lni lni-slim"></i> */}
                  <i class="lni lni-calendar"></i>
                </div>
                <div style={{ color: "white" }} class="timeline__event__date">
                  13-11-2022
                </div>
                <div class="timeline__event__content">
                  {/* <div class="timeline__event__title">Lorem Ipsum</div> */}
                  <div class="timeline__event__description">
                    <p>
                      {"< Final Submission />"}
                      <br />
                      {"< Closing Ceremony />"}
                      <br />
                    </p>
                  </div>
                </div>
              </div>
              <div class="timeline__event timeline__event--type1">
                <div class="timeline__event__icon">
                  {/* <i class="lni lni-cake"></i> */}
                  <i class="lni lni-unlock"></i>
                </div>
                <div style={{ color: "white" }} class="timeline__event__date">
                  13-11-2022
                </div>
                <div class="timeline__event__content">
                  {/* <div class="timeline__event__title">Lorem Ipsum</div> */}
                  <div class="timeline__event__description">
                    <p>
                      {"< Announcement of Results! />"}
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Container>
      </div>
    );
  }
}
