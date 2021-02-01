import React from 'react'

import Collection from '@components/Collection'
import Contact from '@components/Contact'
import Header from '@components/Header'
import Slider from '@components/Slider'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Slider />
        <Collection />
        <Contact />
      </main>
    </>
  )
}

export default App
