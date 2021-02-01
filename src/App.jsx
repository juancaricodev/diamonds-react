import React from 'react'

import Collection from '@components/Collection'
import Contact from '@components/Contact'
import Footer from '@components/Footer'
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
      <Footer />
    </>
  )
}

export default App
