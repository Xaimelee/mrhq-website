import React from 'react'
import NavBarItem from './NavBarItem'

function NavBar() {
  return (
    <ul className = "NavBar">
      <NavBarItem text="Subscription"/>
      <NavBarItem text="Insurance"/>
      <NavBarItem text="Finance"/>
      <NavBarItem text="Sell your Car"/>
      <NavBarItem text="How to Buy"/>
      <NavBarItem text="Find a Car"/>
    </ul>
  )
}

export default NavBar