import React from "react"

const Catg = () => {
  const data = [
    {
      cateName: "Barista Package",
    },
    {
      cateName: "towels",
    },
    {
      cateName: "Cleaner",
    },
    {
      cateName: "Dryer",
    },
    {
      cateName: "Brush",
    },
    {
      cateName: "Machines",
    },
  ]

  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1>Brands </h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index} >
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )

}
export default Catg




