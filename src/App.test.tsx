import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App'

it('Render App component', () => {
  const component = render(<App />)
  expect(component).toMatchSnapshot()
})
