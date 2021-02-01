import React from 'react'

import Collection from '@components/Collection'
import Header from '@components/Header'
import Slider from '@components/Slider'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Slider />

        <Collection />
      </main>
    </>
  )
}

export default App
