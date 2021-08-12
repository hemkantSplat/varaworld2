import React from "react"
import styled from "styled-components"
import Data from "../data/about-data"

const AboutUs = () => {
  return (
    <AboutContainer>
      <h1>About Us</h1>
      <p>
        A ‘Tech-Knowledge’ organisation founded to create end-to-end solutions
        for capturing high quality scientific archive of accurate 3D data of
        museum artifacts and heritage sites.
      </p>
      <div className="about-center">
        {/* {Data.map(item => {
          return (
            <div className="service" key={item.id} style={{ width: "300px" }}>
              <img src={item.img} alt={item.title} />
              <h5>{item.title}</h5>
            </div>
          )
        })} */}
        <div className="service" style={{ width: "300px" }}>
          <img src={`../digitisation.svg`} alt="digitisation" />
          <h5>
            Fast and accurate <br /> 3D/2D Digitisation
          </h5>
        </div>
        <div className="service" style={{ width: "300px" }}>
          <img src={`../digitalRepo.svg`} alt="digitalrepo" />
          <h5>
            Enhanced tools to create <br /> Digital Repositories
          </h5>
        </div>
        <div className="service" style={{ width: "300px" }}>
          <img src={`../centralizeddatabase.svg`} alt="centralized-database" />
          <h5>
            Centralized Database for museums <br /> and heritage collections
          </h5>
        </div>
        <div className="service" style={{ width: "300px" }}>
          <img src={`../tools.svg`} alt="tools" />
          <h5>
            Tools for learning and <br /> collaborative research
          </h5>
        </div>
        <div className="service" style={{ width: "300px" }}>
          <img src={`../Virtual_Museum.svg`} alt="virtualMuseum" />
          <h5>
            {" "}
            Virtual Museum building <br /> solutions
          </h5>
        </div>
      </div>
    </AboutContainer>
  )
}

export default AboutUs

const AboutContainer = styled.div`
  background: #151515;
  margin-top: -1rem;
  padding: 4rem 0;

  h1 {
    text-align: center;
    font-weight: 500;
    color: #ffffff;
    font-size: 42px;
  }

  /* 
    .about-center {
      width:90vw;
      max-width:1200px;
      margin:0 auto;
      display: grid;
      grid-template-columns: repeat(3, 1fr));
.service{
  width: 300px;

img{
  width: 100px;
}
}
    } */
  p {
    color: #ffffff;
    text-align: center;
    margin-bottom: 2rem;
    font-weight: 300;
    width: 90%;
    margin: 0 auto;
    font-size: 22px;

    @media screen and (min-width: 768px) {
      width: 62rem;
    }
  }

  .about-center {
    width: 90vw;
    margin: 6rem auto;
    max-width: 1200px;
    display: grid;
    gap: 2rem;
    place-items: center;

    @media screen and (min-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
      row-gap: 3rem;
      width: 80vw;
    }

    /* .first-container {
      display: grid;
      place-items: center;
      gap: 3rem;

      @media screen and (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .second-container {
      display: flex;
    } */

    .service {
      display: grid;
      place-items: center;
      text-align: center;
      color: #ffffff;
      height: 157px;

      img {
        width: 50px;
        margin-bottom: 1rem;
      }

      h5 {
        font-weight: 400;
        margin-top: 0.75rem;
        font-size: 18px;
      }

      @media screen and (min-width: 1200px) {
        &:nth-child(1) h5 {
          height: 43px;
        }

        &:nth-child(4) {
          transform: translateX(60%);
        }
        &:nth-child(5) {
          transform: translateX(60%);
        }
      }
    }
  }
`
