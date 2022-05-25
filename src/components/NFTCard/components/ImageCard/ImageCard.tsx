import React from 'react'
import { StyledImageCard } from './image-card.styles'
import { ImageProps } from './image-card.interfaces'
const ImageCard = ({
  primaryImage,
  alternativeText,
  ...props
}: ImageProps): JSX.Element => {
  return (
    <StyledImageCard>
      <img src={primaryImage} alt={alternativeText} />
    </StyledImageCard>
  )
}

ImageCard.displayName = 'ImageCard'

export default ImageCard
