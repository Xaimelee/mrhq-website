import React from 'react'
import InfoSlideItem from "./InfoSlideItem"
import AwardIcon from "../Images/award_icon.jpg"
import CarCrashIcon from "../Images/car_crash_icon.jpg"
import CarWashIcon from "../Images/car_wash_icon.jpg"
import MoneyIcon from "../Images/money_icon.jpg"

function InfoSlide() {
    return (
      <ul className = "InfoSlide">
        <InfoSlideItem image={AwardIcon} headerText="Very Strong Claim Paying Ability" text="Our policies have a AA- insurer financial strength rating by Standard & Poor's."/>
        <InfoSlideItem image={CarCrashIcon} headerText="Lodge a claim online" text="Had an accident? You can now lodge a claim online." />
        <InfoSlideItem image={CarWashIcon} headerText="3 Free Car Wash and Detail" text="Available for all new car insurance policies purchase before end of July." />
        <InfoSlideItem image={MoneyIcon} headerText="Easy Finance" text="Thinking of buying your next car and need some help? Talk to your team today!"/>
      </ul>
    )
}

export default InfoSlide