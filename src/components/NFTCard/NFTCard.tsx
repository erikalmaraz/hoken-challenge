import React from 'react'
import { StyledNFTCard } from './nft-card.styles'

const NFTCard = ({ ...props }): JSX.Element => {
  return (
    <StyledNFTCard>
      <p>This is a test</p>
    </StyledNFTCard>
  )
}

NFTCard.displayName = 'NFTCard'

export default NFTCard
