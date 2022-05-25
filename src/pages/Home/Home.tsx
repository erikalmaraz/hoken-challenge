import React from 'react'
import NFTCard from '../../components/NFTCard/NFTCard'
import { GlobalStyles } from '../../styles/global'
import { StyledHome } from './home.styles'

const Home = ({ ...props }): JSX.Element => {
  return (
    <StyledHome>
      <GlobalStyles />
      <NFTCard></NFTCard>
    </StyledHome>
  )
}

Home.displayName = 'Home'

export default Home
