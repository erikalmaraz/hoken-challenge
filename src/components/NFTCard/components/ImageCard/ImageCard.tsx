import React from 'react'
import { StyledImageCard } from './image-card.styles'

const ImageCard = ({ ...props }): JSX.Element => {
  return <StyledImageCard>This is a NFT test</StyledImageCard>
}

ImageCard.displayName = 'ImageCard'

export default ImageCard
