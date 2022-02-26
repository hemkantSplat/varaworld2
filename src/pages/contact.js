import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { FaPhoneAlt} from "react-icons/fa"
import { FiMail } from "react-icons/fi"
import {MdLocationOn} from "react-icons/md"
import SEO from "../components/SEO"

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" description="Contact Page" />
      <AboutHeader img={`../contact/intro.png`}>
        <h1>GET IN TOUCH</h1>
        <h5>We would love to hear from you</h5>
      </AboutHeader>
      <Wrapper>
        <div className="contact-center">
          <div className="contact">
            <FiMail />
            <h5>drop a line.</h5>
            <p>info@varahaworld.com</p>
          </div>
          <div className="contact">
            <FaPhoneAlt />
            <h5>call us.</h5>
            <p>+91 96507 87318</p>
          </div>
          <div className="contact">
            <MdLocationOn />
            <h5>find us.</h5>
            <p>
              B-103, Fourth Floor, Behind Triveni Complex, Panchsheel Vihar, New
              Delhi, 110017
            </p>
          </div>
        </div>
      </Wrapper>
    </Layout>
  )
}

export default contact

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
  height: 60vh;
  h5 {
    font-size: 22px;
  }
`

const Wrapper = styled.div`
  background: #000000;
  width: 100vw;

  .contact-center {
    width: 90vw;
    max-width: 1200px;
    margin: 0 auto;
    padding: 3rem 0;
    display: grid;
    /* grid-template-columns: repeat(3, 1fr); */
    place-items: center;
    text-align: center;
    color: #ffffff;
    gap: 1rem;

    @media screen and (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }

    .contact p {
      color: #f9f9f9;
    }

    .contact svg {
      font-size: 25px;
      margin-bottom: 0.5rem;
    }
  }
`
