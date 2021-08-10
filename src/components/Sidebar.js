import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { IoMdClose } from "react-icons/all"

const Sidebar = ({ active, closeSidebar }) => {
  return (
    <div className={`${active ? "sidebar active" : "sidebar"}`}>
      <div className="sidebar-center">
        <IoMdClose className="close" onClick={closeSidebar} />
        <div className="side-links">
          <Link to="/" activeStyle={{ borderBottom: "2px solid #ffffff" }}>
            Home
          </Link>
          <Link to="/about" activeStyle={{ borderBottom: "2px solid #ffffff" }}>
            About
          </Link>
          <Link to="/work" activeStyle={{ borderBottom: "2px solid #ffffff" }}>
            Work
          </Link>
          <Link
            to="/solution"
            activeStyle={{ borderBottom: "2px solid #ffffff" }}
          >
            Solutions
          </Link>
          <Link
            to="/contact"
            activeStyle={{ borderBottom: "2px solid #ffffff" }}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
