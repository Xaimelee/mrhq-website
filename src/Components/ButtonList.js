import React from 'react'
import ButtonListItem from './ButtonListItem'

function ButtonList() {
  return (
    <ul className = "ButtonList">
      <ButtonListItem text="Retrieve your quote" className="whiteButton"/>
      <ButtonListItem text="Get a quote in 3 minutes!" className="blueButton"/>
    </ul>
  )
}

export default ButtonList