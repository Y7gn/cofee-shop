import React from "react"
import FlashCard from "./FlashCard"
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot } from '@fortawesome/free-solid-svg-icons'

const EspressoTools = () => {
  return (
    <>
      <section className='flash'>
          <div className='heading f_flex'>
            <FontAwesomeIcon icon={faMugHot} className='fontA' />
            <h1>espresso tools</h1>
          </div>
        <div className='container1'>
          <FlashCard  />
        </div>
      </section>
    </>
  )
}
export default EspressoTools
