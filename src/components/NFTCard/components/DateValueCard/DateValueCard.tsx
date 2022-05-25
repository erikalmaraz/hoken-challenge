import React from 'react'
import { StyledDateValueCard } from './date-value-card.styles'

const DateValueCard = ({ ...props }): JSX.Element => {
  return (
    <StyledDateValueCard>
      <div className="footer-card--amount">
        <img src="./assets/images/icon-ethereum.svg" alt="Etherium icon" />
        <span>0.041 ETH</span>
      </div>
      <div className="footer-card--time">
        <img src="./assets/images/icon-clock.svg" alt="Clock icon" />
        <span>3 days left</span>
      </div>
    </StyledDateValueCard>
  )
}

DateValueCard.displayName = 'DateValueCard'

export default DateValueCard
