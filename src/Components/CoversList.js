import React from 'react';
import QuoteButton from './QuoteButton';
import CheckIcon from '../Images/check_icon.png';
import LineIcon from '../Images/line_icon.png';

function CoversList() {
  const covers = [
    {cover: "Accident loss or damage to your vehicle", fc: CheckIcon, tpft: LineIcon, tp: LineIcon},
    {cover: "Loss or damage by fire or theft", fc: CheckIcon, tpft: CheckIcon, tp: LineIcon},
    {cover: "Legal liability up to $20 million", fc: CheckIcon, tpft: CheckIcon, tp: LineIcon},
    {cover: "No excess on windscreen or window cover claims", fc: CheckIcon, tpft: LineIcon, tp: LineIcon},
    {cover: "Trailer cover up to $1000", fc: CheckIcon, tpft: LineIcon, tp: LineIcon},
    {cover: "Protection against uninsured drivers", fc: CheckIcon, tpft: CheckIcon, tp: CheckIcon},
    {cover: "Emergency travel and accomodation cover up to $500", fc: CheckIcon, tpft: LineIcon, tp: LineIcon}
  ]
  const optionalCovers = [
    {cover: "Mechanical Warranty Cover", fc: CheckIcon, tpft: CheckIcon, tp: CheckIcon},
    {cover: "AA Roadside Rescure", fc: CheckIcon, tpft: CheckIcon, tp: CheckIcon}
  ]

  function addAllEntries(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      result.push (
        <tr>
          <td className = "CoversTextEntry">{array[i].cover}</td>
          <td className = "CoversImageEntry"><img src = {array[i].fc} alt = ""/></td>
          <td className = "CoversImageEntry"><img src = {array[i].tpft} alt = ""/></td>
          <td className = "CoversImageEntry"><img src = {array[i].tp} alt = ""/></td>
        </tr>
      )
    }
    return result;
  }

  return (
    <table className = "CoversTable">
        <tr>
          <th className = "CoverHeaderText">Services</th>
          <th className = "CoverHeaderText">Full Cover</th>
          <th className = "CoverHeaderText">Third Party Fire & Theft</th>
          <th className = "CoverHeaderText">Third Party Only</th>
        </tr>
        {addAllEntries(covers)}
        <tr>
          <td className = "CoversTextEntry"></td>
          <td className = "CoversImageEntry"><QuoteButton /></td>
          <td className = "CoversImageEntry"><QuoteButton /></td>
          <td className = "CoversImageEntry"><QuoteButton /></td>
        </tr>
        <tr>
          <th className = "CoverHeaderText">Optional</th>
        </tr>
        {addAllEntries(optionalCovers)}
    </table> 
  )
}

export default CoversList