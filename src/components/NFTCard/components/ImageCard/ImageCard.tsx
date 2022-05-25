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
      <div className="image-card--layer"></div>
      <div className="image-card--more-info">
        <img src="./assets/images/icon-view.svg" alt="More information!" />
      </div>
    </StyledImageCard>
  )
}

ImageCard.displayName = 'ImageCard'

export default ImageCard
