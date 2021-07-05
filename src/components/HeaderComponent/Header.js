import React from 'react'
import marvelLogo from '../../assets/marvel-logo.png'

const Header = () => {
  return (
    <div className="container-fluid py-2">
        <img src={marvelLogo} alt="Marvel logo" width="50px" height="50px" />
    </div>
  )
}

export default Header
