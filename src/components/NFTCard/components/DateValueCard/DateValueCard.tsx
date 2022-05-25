import React from 'react'
import { StyledDateValueCard } from './date-value-card.styles'
import { DateValueCardProps } from './date-value-card.interfaces'
const DateValueCard = ({
  currentValue,
  daysLeft,
  currency,
  ...props
}: DateValueCardProps): JSX.Element => {
  return (
    <StyledDateValueCard>
      <div className="footer-card--amount">
        <img src="./assets/images/icon-ethereum.svg" alt="Etherium icon" />
        <span>
          {currentValue} {currency}
        </span>
      </div>
      <div className="footer-card--time">
        <img src="./assets/images/icon-clock.svg" alt="Clock icon" />
        <span>{daysLeft} days left</span>
      </div>
    </StyledDateValueCard>
  )
}

DateValueCard.displayName = 'DateValueCard'

export default DateValueCard
