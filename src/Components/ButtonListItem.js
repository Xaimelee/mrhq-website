import React from 'react'

function ButtonListItem({text, className}) {
  return (
    <li className = "ButtonListItem">
      <button className = {className}>
        {text}
      </button>
    </li>
  )
}

export default ButtonListItem