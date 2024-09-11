import React from 'react'
import logo from '../Assets/logo.png';

const Uppernav = () => {
  return (
    <div className='uppernav'>
      <img src={logo} alt="logo..."/>
      <input type="text" placeholder='Search here...'/>

      <div className='icons'>
      <i className="bi bi-heart-fill"></i>
      <i className="bi bi-person-fill"></i>
      <i className="bi bi-cart"></i>
     </div>
    </div>
  )
}

export default Uppernav
