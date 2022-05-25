import React from 'react'
import { StyledFooterCard } from './footer-card.styles'

const FooterCard = ({ ...props }): JSX.Element => {
  return (
    <StyledFooterCard>
      <div className="footer-card--avatar">
        <img
          src="./assets/images/image-avatar.png"
          alt="Jules Wyvern - Avatar"
        />
      </div>
      <div className="footer-card--name">
        Creation of <b>Jules Wyvern</b>
      </div>
    </StyledFooterCard>
  )
}

FooterCard.displayName = 'FooterCard'

export default FooterCard
