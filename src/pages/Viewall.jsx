import React from "react"
import Head from "../components/header/Head"
import Viewallcomp from "../components/viewall/Viewallcomp"

const Viewall = () => {
    return (
    <div className="backGroundCoffee">
        <Head />
        <div className="testoContainer">
          <h2 className="testoTitle">Products</h2>
        </div>
        <div className="testoCardContainer">
          <Viewallcomp/>
        </div>
    </div>
    )
}

export default Viewall
