import React from 'react'
import spinner from "../../public/assets/loader.svg"

const Spinner = () => {
  return (
    <div className="spinner-container">
          <img src={spinner}/>
      </div>
  )
}

export default Spinner
