import React from 'react'
import NavBar from './NavBar'
import InfoBar from './InfoBar'

function Header() {
  return (
    <div className = "Header">
      <InfoBar />
      <NavBar />
    </div>
  )
}

export default Header