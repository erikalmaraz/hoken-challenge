import React from 'react'
import { StyledHome } from './home.styles'

const Home = ({ ...props }): JSX.Element => {
  return <StyledHome>This is a test</StyledHome>
}

Home.displayName = 'Home'

export default Home
