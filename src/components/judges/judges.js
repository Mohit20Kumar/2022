import React, { useEffect } from "react";
import Card from "./Card";
import "./judges.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Aos from "aos";
import "aos/dist/aos.css";
import bg from "../../images/tracks_bg.png";
import { judgesData } from "../../data/judgesData";

const Judges = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id='judges' className='judges-main'>
      <Container>
        <Row data-aos='fade-up' className='title-container-speakers'>
          <Col xs lg='10'>
            <img src={bg} alt='' width='100%' />
          </Col>
          <Col lg='2'>
            <h1 className='speaker-heading'>JUDGES</h1>
          </Col>
        </Row>
      </Container>
      <Container data-aos='fade-up' className='judges-container'>
        <div className='row'>
          {judgesData.map(({ title, image, url, text, id }) => (
            <div className='col-md-4 judges' key={id}>
              <Card imageSource={image} title={title} url={url} text={text} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Judges;
