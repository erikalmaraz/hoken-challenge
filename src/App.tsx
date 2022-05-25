import React from 'react'
import Home from './pages/Home/Home'
import { Router, RouteComponentProps } from '@reach/router'

function App(): JSX.Element {
  return (
    <>
      <Router>
        <RouterPage path="/" pageComponent={<Home />} />
      </Router>
    </>
  )
}

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
): JSX.Element => props.pageComponent

export default App
