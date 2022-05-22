import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";
const Banner = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block hid w-100"
            src="https://vmn-bike-eu.imgix.net/uploads/2020/09/Bike-Europe-EU-implements-regulation.jpg?auto=compress%2Cformat&q=50"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Top Quality Bike Parts</h3>
            <p>BikeX has all the Top Quality of Parts!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block hid w-100"
            src="https://media.istockphoto.com/photos/mechanic-repairing-a-motorcycle-picture-id1188820923?k=20&m=1188820923&s=612x612&w=0&h=IhWHLZdqa6Xry60Q6RCmKstWKVuzi7R6BhbcFyVAdEU="
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Buy Parts with warrenty</h3>
            <p>We offer you warrenty and lifetime services</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block hid w-100"
            src="https://media.istockphoto.com/photos/this-bike-will-be-perfect-picture-id614415432?k=20&m=614415432&s=612x612&w=0&h=pxoABtoInMevUnC08h4rlbBVqc-5q1f4Pv4JW37SfAI="
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Buy parts and get Repair free</h3>
            <p>You will get free repair if buy good amount of parts!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
