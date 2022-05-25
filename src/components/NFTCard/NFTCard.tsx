import React from 'react'
import DateValueCard from './components/DateValueCard/DateValueCard'
import ImageCard from './components/ImageCard/ImageCard'
import InfoCard from './components/InfoCard/InfoCard'
import { StyledNFTCard } from './nft-card.styles'

const NFTCard = ({ ...props }): JSX.Element => {
  return (
    <StyledNFTCard>
      <ImageCard />
      <InfoCard />
      <DateValueCard />
    </StyledNFTCard>
  )
}

NFTCard.displayName = 'NFTCard'

export default NFTCard
