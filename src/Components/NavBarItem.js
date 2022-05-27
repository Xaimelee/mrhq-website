import React from 'react'

function NavBarItem({text}) {
  return (
    <li >
      <a className = "NavBarItem" href = "/">{text}</a>
    </li>
  )
}

export default NavBarItem