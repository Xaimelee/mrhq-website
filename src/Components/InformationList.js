import React from 'react';

function InformationList() {
  const carsContents = [
    "How to Buy", "Sell your Car", "Auction and Events", "Buyer and Seller Fees", "Vehicle Sale Price History Tool", "Shipping Costs"
  ]
  const financeContents = [
    "Car and Personal Finance", "Loan Calculator", "Trucks Finance", "Financial Information"
  ]
  const carInsuranceContents = [
    "Car Insurance", "Mechanical Breakdown Insurance", "Insurance FAQ", "Insurance Claims"
  ]
  const aboutUsContents = [
    "History", "Turners Careers", "Terms and Conditions", "Privacy Policy", "Turners Live", "The Good Oil Blog", "Email Alerts", "Contact Us"
  ]

  function addEntries(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      result.push (
        <li><a className = "InformationContent" href="/">{array[i]}</a></li>
      )
    }
    return result;
  }

  function generateContents(array, text) {
    return (
        <ul className = "InformationContents">
            <li className = "InformationHeader">{text}</li>
            {addEntries(array)}
        </ul>
    );
  }

  return (
    <ul className = "InformationList">
        {generateContents(carsContents, "Cars")}
        {generateContents(financeContents, "Finance")}
        {generateContents(carInsuranceContents, "Car Insurance")}
        {generateContents(aboutUsContents, "About Us")}
    </ul>
  )
}

export default InformationList