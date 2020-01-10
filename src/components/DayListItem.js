import React from "react";

import "components/DayListItem.scss"
import cx from 'classnames';

export default function DayListItem(props) {
  const dayClass = cx( 'day-list__item', {
    'day-list__item--selected': props.selected,
    'day-list__item--full': props.spots === 0
  })

  const formatSpots = (spot) => {
    const textResultPlural = "spots remaining"
    const textResult = "spot remaining"
    if (spot === 0) {
      return `no ${textResultPlural}`
    } 
    return spot === 1 ?  `${spot} ${textResult}` : `${spot} ${textResultPlural}`
  }

  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)}>
      <h2>{props.name}</h2>
      <h3>{formatSpots(props.spots)}</h3>
    </li>
  )
}