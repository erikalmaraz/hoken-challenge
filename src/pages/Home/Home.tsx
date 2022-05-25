import React from 'react'
import NFTCard from '../../components/NFTCard/NFTCard'
import { GlobalStyles } from '../../styles/global'
const Home = ({ ...props }): JSX.Element => {
  return (
    <>
      <GlobalStyles />
      <NFTCard></NFTCard>
    </>
  )
}

Home.displayName = 'Home'

export default Home
