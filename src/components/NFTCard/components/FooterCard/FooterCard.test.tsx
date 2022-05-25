import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import FooterCard from './FooterCard'

it('Render DateValueCard component', () => {
  const component = render(<FooterCard name="test name" />)
  expect(component).toMatchSnapshot()
})
