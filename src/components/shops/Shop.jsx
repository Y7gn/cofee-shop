import React from "react"
import Catg from "./Catg"
import ShopCart from "./ShopCart"
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSoap} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"

const Shop = () => {
  return (
    <>
      <section className='shop background'>
        <div className='container d_flex'>
          <Catg />
          
          <div className='contentWidth'>
            <div className='heading d_flex'>
              <div className='heading-left row  f_flex'>
              <FontAwesomeIcon icon={faSoap} className='fontA' />

                <h2>Cleaning Martials</h2>
              </div>
              <div className='heading-right row '>
                <Link to='/Viewall'>View all</Link>
                <i className='fa-solid fa-caret-right'></i>
              </div>
            </div>
            <div className='product-content  grid1'>
              <ShopCart />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Shop
