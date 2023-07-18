import React from "react"
import Cart from "./Cart"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFire} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"

const Cups = () => {
  return (
    <>
      <section className='Cups background'>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
              <FontAwesomeIcon icon={faFire} className='fontA' />
              <h2>Cups</h2>
            </div>
            <div className='heading-right row '>
            <Link to='/Viewall'>View all</Link>
              <i className='fa-solid fa-caret-right'></i>
            </div>
          </div>
          <Cart/>
        </div>
      </section>
    </>
  )
}

export default Cups
