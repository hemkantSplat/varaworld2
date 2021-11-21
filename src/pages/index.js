import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Work from "../components/OurWork"
import About from "../components/aboutUs"
import Client from "../components/Client"
import Team from "../components/ourTeam"
import SEO from "../components/SEO"
export default function Home() {
  return (
    <Layout>
      <SEO title="Home" description="Home Page" />
      <Hero />
      <Work />
      <About />
      <Team />
      <Client />
    </Layout>
  )
}
