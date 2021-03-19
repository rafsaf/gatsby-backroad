import React from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Services from "../components/Services"
import Tours from "../components/Tours"
import Contact from "../components/Contact"
import Galery from "../components/Galery"
import Footer from "../components/Footer"
import { Helmet } from "react-helmet"

const index = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Backroad Project</title>
        <meta name="description" content="Backroad project with Gatsby.js" />
      </Helmet>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Contact />
      <Galery />
      <Footer />
    </>
  )
}

export default index
