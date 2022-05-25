import React from 'react'
import { NFTInfo } from '../../utils/mocks/nft-card'
import DateValueCard from './components/DateValueCard/DateValueCard'
import FooterCard from './components/FooterCard/FooterCard'
import ImageCard from './components/ImageCard/ImageCard'
import InfoCard from './components/InfoCard/InfoCard'
import { StyledNFTCard } from './nft-card.styles'

const NFTCard = ({ ...props }): JSX.Element => {
  return (
    <StyledNFTCard>
      <ImageCard
        primaryImage={NFTInfo.image}
        alternativeText={`${NFTInfo.title} - By ${NFTInfo.creator}`}
      />
      <InfoCard />
      <DateValueCard />
      <FooterCard />
    </StyledNFTCard>
  )
}

NFTCard.displayName = 'NFTCard'

export default NFTCard
