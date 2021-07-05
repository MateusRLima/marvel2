import React from 'react'
import marvelLogo from '../../assets/marvel-logo.png'
import './Header.css'

const Header = () => {
  return (
    <header className="container-fluid py-2 shield-header">
      <img className="float-left" src={marvelLogo} alt="Marvel logo" width="50px" height="50px" />
      <h1 className="shield-welcome h3">
        Bem vindo a S.H.I.E.L.D
        <small className="text-muted" > Usuário </small>
      </h1>
    </header>
  )
}

export default Header
