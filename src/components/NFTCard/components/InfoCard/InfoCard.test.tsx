import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import InfoCard from './InfoCard'

it('Render InfoCard component', () => {
  const component = render(
    <InfoCard title="Title for test" description="Description for test" />
  )
  expect(component).toMatchSnapshot()
})
