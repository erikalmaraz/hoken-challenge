import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import NFTCard from './NFTCard'

it('Render NFTCard component', () => {
  const component = render(<NFTCard />)
  expect(component).toMatchSnapshot()
})
