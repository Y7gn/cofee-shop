import React from "react"
import CupsData from "./CupsData";

const Cart = () => {
  return (
    <>
      <div className='content grid product'>
        {CupsData.map((val, index) => {
          return (
            <div className='box' key={index}>
              <div className='img'>
                <img src={val.cover} alt='' width={230} height={230}/>
              </div>
              <h4>{val.name}</h4>
              <span>${val.price}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Cart
