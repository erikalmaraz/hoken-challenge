import React from 'react'
import { StyledInfoCard } from './info-card.styles'
import { InfoCardProps } from './info-card.interfaces'
const InfoCard = ({ title, description }: InfoCardProps): JSX.Element => {
  return (
    <StyledInfoCard>
      <div className="info-card--name">
        <span>{title}</span>
      </div>
      <div className="info-card--desc">{description}</div>
    </StyledInfoCard>
  )
}

InfoCard.displayName = 'InfoCard'

export default InfoCard
