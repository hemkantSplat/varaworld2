import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Work from "../components/ourWork"
import About from "../components/aboutUs"
import Client from "../components/Client"
import Team from "../components/ourTeam"
export default function Home() {
  return (
    <Layout>
      <Hero />
      <Work />
      <About />
      <Team />
      <Client />
    </Layout>
  )
}
