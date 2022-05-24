import React from 'react'
import NavBarItem from './NavBarItem'

function NavBar() {
  return (
    <ul className = "NavBar">
      <NavBarItem text="Find a Car"/>
      <NavBarItem text="How to Buy"/>
      <NavBarItem text="Sell your Car"/>
      <NavBarItem text="Finance"/>
      <NavBarItem text="Insurance"/>
      <NavBarItem text="Subscription"/>
    </ul>
  )
}

export default NavBar