import React from 'react'
import InfoBarItem from './InfoBarItem'
import UserIcon from '../Images/user_icon.jpg'

function InfoBar() {
    return (
      <ul className = "InfoBar">
        <InfoBarItem text="Login / Register"/>
        <li className = "InfoBarItemImage">
            <img src={UserIcon} alt="Missing"/>
        </li>
        <InfoBarItem text="Find Us"/>
        <InfoBarItem text="Call (0800 887 637)"/>
      </ul>
    )
}

export default InfoBar