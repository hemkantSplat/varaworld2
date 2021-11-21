import React, { useState } from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
const Layout = ({ children }) => {
  const [active, setActive] = useState(false)

  const openSidebar = () => {
    setActive(true)
  }

  const closeSidebar = () => {
    setActive(false)
  }

  return (
    <>
      <Navbar openSidebar={openSidebar} />
      <Sidebar active={active} closeSidebar={closeSidebar} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
