import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Logo from "../Assets/VarahaLogo_white.png"
import { FiAlignJustify } from "react-icons/all"

const Navbar = () => {
  return (
    <Nav>
      <div className="nav-center">
        <img src={Logo} alt="logo" />
        <div className="nav-links">
          <NavLink to="/" activeStyle={{ borderBottom: "2px solid #ffffff" }}>
            Home
          </NavLink>
          <NavLink
            to="/about"
            activeStyle={{ borderBottom: "2px solid #ffffff" }}
          >
            About
          </NavLink>
          <NavLink
            to="/work"
            activeStyle={{ borderBottom: "2px solid #ffffff" }}
          >
            Work
          </NavLink>
          <NavLink
            to="/solution"
            activeStyle={{ borderBottom: "2px solid #ffffff" }}
          >
            Solutions
          </NavLink>
          <NavLink
            to="/contact"
            activeStyle={{ borderBottom: "2px solid #ffffff" }}
          >
            Contact Us
          </NavLink>
        </div>
        <FiAlignJustify className="bars" />
      </div>
    </Nav>
  )
}

export default Navbar

const Nav = styled.nav`
  min-height: 100px;
  width: 100%;
  display: grid;
  align-items: center;
  background: hsla(360, 0%, 14%, 0.62);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  img {
    width: 70px;
  }

  .bars {
    font-size: 28px;
    cursor: pointer;
    transition: all 0.3s linear;
    color: #ffffff;
    &:hover {
      transform: scale(1.3);
    }
    @media screen and (min-width: 892px) {
      display: none;
    }
  }

  .nav-links {
    display: none;
    justify-content: space-between;
    width: 40%;

    @media screen and (min-width: 892px) {
      display: flex;
    }
  }

  h4 {
    color: #ffffff;
    display: flex;
    align-items: center;

    span {
      margin-left: 0.5rem;
    }
  }
`

const NavLink = styled(Link)`
  color: white;
  font-size: 18px;
  transition: all 0.2s linear;
  text-decoration: none;

  &:hover {
    transform: scale(1.3);
    color: #ffffff;
  }
`
