import React from "react"
import { Link } from "react-router-dom"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='containser d_flex'>
              <li>
                <Link to='/'>home</Link>
              </li>
              <li>
                <Link to='/offers'>Offers</Link>
              </li>
              <li>
                <Link to='/contact'>contact</Link>
              </li>
        </div>
      </section>
    </>
  )
}

export default Head
