import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import DateValueCard from './DateValueCard'

it('Render DateValueCard component', () => {
  const NFTInfo = {
    days: 3,
    currency: 'ETH',
    value: 0.041
  }
  const component = render(
    <DateValueCard
      currentValue={NFTInfo.value}
      currency={NFTInfo.currency}
      daysLeft={NFTInfo.days}
    />
  )
  expect(component).toMatchSnapshot()
})
