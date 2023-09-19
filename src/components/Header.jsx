import React from 'react'
import Logo from '../assets/icons/meme-logo.svg'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-wrapper container">
        <div className="header-brand">
          <div><img src={Logo} alt="" /></div>
          <span className='header-brand-text'>Meme Generator</span>
        </div>
        <div className="header-desc">
          <p>React Course - Project 3</p>
        </div>
      </div>
    </div>
  )
}

export default Header