import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ImageCard from './ImageCard'

it('Render ImageCard component', () => {
  const NFTInfo = {
    image: './assets/images/equilibrium-bg.jpg',
    creator: 'Erik Almaraz',
    title: 'NFT for test'
  }
  const component = render(
    <ImageCard
      primaryImage={NFTInfo.image}
      alternativeText={`${NFTInfo.title} - By ${NFTInfo.creator}`}
    />
  )
  expect(component).toMatchSnapshot()
})
