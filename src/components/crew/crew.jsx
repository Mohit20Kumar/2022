import React, { useEffect,useState } from "react";
// import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import "./crew.css"
import Container from "react-bootstrap/Container";
import Aos from "aos";
import "aos/dist/aos.css";

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
                <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </Container>
        </div>
  )
}

export default Crew