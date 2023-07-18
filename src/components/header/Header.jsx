import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
  
    //when scroll we add active which make the position fixed
    window.addEventListener("scroll", function () {
      const search = document.querySelector(".search")
      search.classList.toggle("active", window.scrollY > 100)
    })
  
  return (
      <section className='search'>
        <div className='container c_flex'>
          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search here...' />
          </div>

          <div className='icon f_flex width'>
            <i className='fa fa-user icon-circle'></i>
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Header
