import React from "react"
import Head from "../components/header/Head"
import OfferCardContainer from "../components/Offers/OfferCardContainer"

const Offers = () => {
    return (
    <div className="backGroundCoffee">
        <Head />
        <div className="testoContainer">
          <h2 className="testoTitle">What Do We Offer ?</h2>
          <p className="testoPara">We offer a couple of offers which includes:</p>
        </div>
        <div className="testoCardContainer">
          <OfferCardContainer />
        </div>
    </div>
    )
}

export default Offers
