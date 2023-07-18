import React from "react"
import Head from "../components/header/Head";

const Cart = () => {
    return (
        <>
          <Head />
          <section className='cart-items'>
            <div className='container d_flex'>
              <div className='cart-total product'>
                <h2>Cart Summary</h2>
                <div className=' d_flex'>
                  <h4>Total Price :</h4>
                </div>
              </div>
            </div>
          </section>
        </>
      )
}

export default Cart;


