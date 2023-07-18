import React from "react"
import Head from "../components/header/Head"
import EspressoTools from "../components/espressotools/EspressoTools"
import Cups from "../components/cups/Cups"
import Shop from "../components/shops/Shop"
import Footer from "../components/footer/Footer"

const Pages = () => {
  return (
    <>
      <Head />
      <EspressoTools/>
      <Cups/>
      <Shop />
      <Footer />
    </>
  )
}

export default Pages
