import React from "react"
import styled from "styled-components"
// import FooterLogo from "../Assets/footer/VTL_Logo_white.png"
// import StartUpIndia from "../Assets/footer/Startup_India_Logo.png"
// import MakeInIndia from "../Assets/footer/Make_In_India_Logo.png"
import {
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa"
import {FiMail} from "react-icons/fi"
// import { AiFillTwitterCircle } from "react-icons/Ai"
// import { FaPhoneAlt } from "react-icons/Fa"
// import { FiMail } from "react-icons/Fi"

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer-center">
        <div className="first-container">
          <img src={`../footer/VTL_Logo_white.png`} alt="footerLogo" />
          <div className="social-icons-container">
            <h4>Stay In Touch</h4>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/varahatechlabs/"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF className="icon" />
              </a>
              <a
                href="https://twitter.com/varahatechlabs"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter className="icon" />
              </a>
              <a
                href="https://www.instagram.com/varahatechlabs/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="icon" />
              </a>
              <a
                href="https://www.linkedin.com/company/varaha-tech-labs"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="third-container">
          <div className="contact">
            <FaPhoneAlt /> <span>+91 85955 83144</span>
          </div>
          <div className="email">
            <FiMail /> <span>info@varahaworld.com</span>
          </div>
        </div>
        <div className="second-container">
          <img src={`../footer/Startup_India_Logo.png`} alt="startUpIndia" />
          <img src={`../footer/Make_In_India_Logo.png`} alt="MakeInIndia" />
        </div>
      </div>
      <p className="copy">Varaha Techlabs LLP &copy; {new Date().getFullYear()}</p>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.footer`
  background: #212121;
  padding: 3rem 0 1rem 0;

  .copy {
    text-align: center;
    color: #ffffff;
  }

  .footer-center {
    width: 90vw;
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    place-items: center;
    row-gap: 2rem;

    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .footer-center img {
    width: 150px;
  }

  .first-container {
    display: grid;
    gap: 1rem;
    /* margin-bottom: 1.5rem; */
    .social-icons-container {
      display: grid;
      place-items: center;

      .social-icons {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 0.5rem;

        a {
          width: 30px;
          height: 30px;
          background: #ffffff;
          display: grid;
          place-items: center;
          border-radius: 50%;
          transition: all 0.3s linear;
          &:hover {
            transform: scale(1.3);
          }
        }
        .icon {
          font-size: 18px;
          color: #212121;
        }
      }
    }

    .social-icons-container h4 {
      color: #ffffff;
      font-size: 15px;
    }
  }

  .second-container {
    display: grid;

    img {
      margin-bottom: 1rem;
    }
  }

  .third-container {
    display: grid;
    gap: 1rem;
    align-items: center;

    .contact,
    .email {
      color: #ffffff;

      span {
        margin-left: 0.5rem;
      }
    }
  }
`
