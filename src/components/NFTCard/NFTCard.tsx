import React from 'react'
import { StyledNFTCard } from './nft-card.styles'

const NFTCard = ({ ...props }): JSX.Element => {
  return <StyledNFTCard>This is a NFT test</StyledNFTCard>
}

NFTCard.displayName = 'NFTCard'

export default NFTCard
