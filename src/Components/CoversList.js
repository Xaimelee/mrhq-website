import React from 'react';
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

  function addAllEntries() {
    let result = [];
    for (let i = 0; i < covers.length; i++) {
      result.push (
        <tr className = "CoversEntries">
          <td className = "CoversTextEntry">{covers[i].cover}</td>
          <td className = "CoversImageEntry"><img className = "CoversIcon" src = {covers[i].fc} alt = ""/></td>
          <td className = "CoversImageEntry"><img className = "CoversIcon" src = {covers[i].tpft} alt = ""/></td>
          <td className = "CoversImageEntry"><img className = "CoversIcon" src = {covers[i].tp} alt = ""/></td>
        </tr>
      )
    }
    return result;
  }

  return (
      <table className = "CoversTable">
          <tr className = "CoversHeaders">
            <th className = "CoverHeaderText">Services</th>
            <th className = "CoverHeaderText">Full Cover</th>
            <th className = "CoverHeaderText">Third Party Fire & Theft</th>
            <th className = "CoverHeaderText">Third Party Only</th>
          </tr>
          {addAllEntries()}
      </table> 
  )
}

export default CoversList