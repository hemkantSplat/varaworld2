import React from "react"
import styled from "styled-components"
import Video from "../Assets/Video.mp4"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import HeroBackground from "../Assets/heroBackground.png"

const items = [
  <div
    className="item"
    data-value="1"
    style={{
      width: "100%",
      textAlign: "right",
      padding: "0rem 0rem",
      color: "#ffffff",
      // display: "flex",
      // justifyContent: "center",
      // alignItems: "center",
    }}
  >
    <h1>
      Enabling 3D digitisation for heritage and <br /> archaeological treasures
    </h1>
  </div>,
  <div
    className="item"
    data-value="2"
    style={{
      width: "100%",
      textAlign: "right",
      padding: "0rem 0rem",
      color: "#ffffff",
    }}
  >
    <h1>
      Helping museums create Virtual and <br /> Immersive experiences
    </h1>
  </div>,
  <div
    className="item"
    data-value="3"
    style={{
      width: "100%",
      textAlign: "right",
      padding: "0rem 0rem",
      color: "#ffffff",
    }}
  >
    <h1>Platform to promote research and education</h1>
  </div>,
]

const Hero = () => {
  return (
    <HeroContainer>
      <div className="video-container">
        <img src={HeroBackground} alt="heroImage" />
        <video autoPlay muted loop>
          <source src={Video} type="video/mp4" />
        </video>
        <AliceCarousel
          autoPlay
          autoPlayStrategy="none"
          autoPlayInterval={2000}
          animationDuration={2000}
          animationType="fadein"
          infinite
          touchTracking={false}
          disableDotsControls
          disableButtonsControls
          items={items}
        />
      </div>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
  position: relative;

  .video-container {
    position: relative;
    width: 100%;
    /* max-height: 100vh; */

    img {
      display: none;
    }
    .alice-carousel {
      position: absolute;
      top: 70%;
      left: 0;
      width: 95vw;
      z-index: 999;
    }
  }
  video {
    width: 100%;
  }

  @media screen and (max-width: 520px) {
    video {
      display: none;
    }
    .video-container {
      height: 70vh;
      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .video-container:before {
    position: absolute;
    content: "";
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
    width: 100%;
    height: 100%;
    z-index: 2;
  }
`
