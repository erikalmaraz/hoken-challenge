import React from 'react'
import ImageCard from './components/ImageCard/ImageCard'
import { StyledNFTCard } from './nft-card.styles'
const NFTCard = ({ ...props }): JSX.Element => {
  return (
    <StyledNFTCard>
      <ImageCard />
    </StyledNFTCard>
  )
}

NFTCard.displayName = 'NFTCard'

export default NFTCard
