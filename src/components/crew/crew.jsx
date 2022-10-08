import React, { useEffect,useState } from "react";
// import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import "./crew.css"
import Container from "react-bootstrap/Container";
import Aos from "aos";
import "aos/dist/aos.css";
// import ph from "../../images/placeholder.jpg"
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
        <div data-aos="slide-up" className="track-heading-div">
          <h1 className="track-heading">CREW</h1>
          <img className="track-img" src={bg} width={"100%"} alt="" />
        </div>
      </Container>
      <Container>
                {/* PUT YOUR CONTENT HERE */}
                <br /> <br />
                <Carousel activeIndex={index} onSelect={handleSelect} variant = "dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://repository-images.githubusercontent.com/279611541/b7e1e580-c611-11ea-9b24-523c65baea0e"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Team1</h3>
          <p>Info about Team1
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://repository-images.githubusercontent.com/279611541/b7e1e580-c611-11ea-9b24-523c65baea0e"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Team2</h3>
          <p>Info about Team2</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://repository-images.githubusercontent.com/279611541/b7e1e580-c611-11ea-9b24-523c65baea0e"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Team3</h3>
          <p>
            Info about Team3
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </Container>
        </div>
  )
}

export default Crew