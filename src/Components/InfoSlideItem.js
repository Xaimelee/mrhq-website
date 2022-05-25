import React from 'react'

function InfoSlideItem({image, headerText, text}) {
  return (
    <ul className = "InfoSlideItems">
        <li className = "InfoSlideImage">
            <img src={image} alt=""/>
        </li>
        <li className = "InfoSlideHeaderText">
            {headerText}
        </li>
        <li className = "InfoSlideText">
            {text}
        </li>
        <li>
            <button className = "InfoSlideButton">
                Learn More
            </button>
        </li>
    </ul>
  )
}

export default InfoSlideItem