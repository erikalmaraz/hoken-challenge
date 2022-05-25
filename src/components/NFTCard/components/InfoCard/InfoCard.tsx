import React from 'react'
import { StyledInfoCard } from './info-card.styles'

const InfoCard = ({ ...props }): JSX.Element => {
  return (
    <StyledInfoCard>
      <div className="info-card--name">
        <span>Equilibrium #3429</span>
      </div>
      <div className="info-card--desc">
        Our Equilibrium collection promotes balance and calm.
      </div>
    </StyledInfoCard>
  )
}

InfoCard.displayName = 'InfoCard'

export default InfoCard
