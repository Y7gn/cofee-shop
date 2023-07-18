import React from "react"
import AllData from "../Data/AllData";

const Viewallcomp = () => {
  return (
    <>
      <div className='content grid10 product'>
        {AllData.map((val, index) => {
          return (
            <div className='boxViewAll' key={index} >
              <div className='img'>
                <img src={val.cover} alt='' width={370} height={370}/>
              </div>
              <h4>{val.name}</h4>
              <span>{val.price}$</span>
                <button >
                    <i className='fa fa-plus'></i>
                </button>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Viewallcomp
