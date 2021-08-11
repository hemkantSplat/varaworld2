import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
const solution = () => {
  return (
    <Layout>
      <AboutHeader img={`../solution.png`}>
        <h1>TECHNOLOGY ENABLED SOLUTIONS</h1>
        <h5>How Varaha can help preserve the cultural heritage</h5>
      </AboutHeader>
      <Wrapper>
        <AboutCenter>
          <div className="service" style={{ width: "300px" }}>
            <img src={`../digitisation.svg`} alt="digitisation" />
            <h5>Fast and accurate 3D/2D Digitisation</h5>
            <p>
              With extensive experience and robust technology backbone, Varaha
              can enable highly realistic 3D documentation with extremely fast
              speed and incredible meta data accuracy.
            </p>
          </div>
          <div className="service" style={{ width: "300px" }}>
            <img src={`../digitalRepo.svg`} alt="digitalrepo" />
            <h5>Enhanced tools to create Digital Repositories</h5>
            <p>
              By managing the data output in many instantly usable formats,
              creation of digital 3D repositories is easy with Varaha, providing
              easy access to museum and heritage related data.
            </p>
          </div>
          <div className="service" style={{ width: "300px" }}>
            <img src={`../centralizeddatabase.svg`} alt="centralizeddatabase" />
            <h5>Centralized Database for museums and heritage collections</h5>
            <p>
              Varaha brings together the highly scattered and lesser known
              collections on the online platform with greater efficiency
              enabling worldwide reach.
            </p>
          </div>
          <div className="service" style={{ width: "300px" }}>
            <img src={`../tools.svg`} alt="tools" />
            <h5>Tools for learning and collaborative research</h5>
            <p>
              By intelligently documenting the overwhelming amount of metadata
              and information, Varaha can enable better collaboration and
              learning with large communities of students and scholars. The AR
              and VR tools make the learning more engaging and fun.
            </p>
          </div>
          <div className="service" style={{ width: "300px" }}>
            <img src={`../Virtual_Museum.svg`} alt="virtualMuseum" />
            <h5>
              Virtual Museum building <br /> solutions
            </h5>
            <p>
              For institutions to reach wider audiences, Varaha can create
              virtual museums and spaces instantly with the help of its
              integrated platform support. Virtual reality enabled experiences
              can be easily created on the same platform of Varaha.
            </p>
          </div>
        </AboutCenter>
      </Wrapper>
    </Layout>
  )
}

export default solution

const Wrapper = styled.div`
  width: 100vw;
  background: #000000;
`

const AboutHeader = styled.div`
  background: #212121;
  display: flex;
  flex-direction: column;
  /* padding: 10rem 0 5rem 0; */
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  height: 70vh;

  h5 {
    font-size: 22px;
  }
`

const AboutCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1200px;
  display: grid;
  gap: 2rem;
  place-items: center;
  padding: 5rem 0;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 4rem;
  }

  .service {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #ffffff;
    height: 400px;
    width: 400px;
    background: #212121;
    padding: 2.5rem 2rem;
    border-radius: 5px;
    img {
      width: 50px;
      margin-bottom: 1rem;
    }

    h5 {
      font-weight: 400;
      margin-top: 0.75rem;
    }

    @media screen and (min-width: 768px) {
      &:nth-child(4) {
        transform: translateX(60%);
      }
      &:nth-child(5) {
        transform: translateX(60%);
      }
    }
  }

  .service:first-child img {
    width: 35px;
  }
  .service:first-child h5 {
    margin-top: 0.5rem;
  }
  .service:nth-child(2) {
    padding-top: 4.5rem;
  }
  .service:nth-child(4),
  .service:nth-child(5) {
    height: 450px;
  }

  /* .service:nth-child(4),
  .service:nth-child(5) > img {
    transform: translateY(1rem);
  } */
`
