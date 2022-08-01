import React, { useState } from 'react'

const Tour = ({ id, name, info, image, price, DeleteItem }) => {
  //handel readmore toggle
  const [readmore, setReadmore] = useState(true)
  const ToggleReadmore = () => {
    setReadmore(!readmore)
  }

  return (
    <div className='single-tour'>
      <img src={image} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <div className='flex-readmore'>
          <p>{readmore ? `${info.substring(0, 180)}...` : info}
            <button onClick={ToggleReadmore}>{readmore ? "Read More" : "read less"}</button>
          </p>
        </div>
        <button className='delete-btn ' onClick={() => DeleteItem(id)} >Not intersted</button>
      </footer>
    </div>

  )
}

export default Tour