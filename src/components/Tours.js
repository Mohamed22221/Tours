import React from 'react'
import Tour from "./Tour"
const Tours = ({tours ,DeleteItem}) => {

  return (
    <section>
      <div className='title'>
        <h2>Our Tours</h2>
        <div className='underline'></div>
      </div>
      <div className='display-tours'>
        {tours.map(item =>{
          return (
            <Tour key={item.id} {...item} DeleteItem={DeleteItem} />
          )
        })}

      </div>
    </section>
  )
}

export default Tours