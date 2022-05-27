import React from 'react'

function InfoBarItem({text}) {
  return (
    <li className = "InfoBarItem">
      <a className = "InfoBarItem" href = "/">{text}</a>
    </li>
  )
}

export default InfoBarItem