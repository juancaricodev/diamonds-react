import React from 'react'

import '@styles/components/App.styl'
// import '../assets/styles/components/App.styl'
import Logo from '../assets/svg/logo.svg'

const App = () => {
  return (
    <div className='App'>
      <h1>Hello World! we are here trying out the Poppins font. aAa</h1>
      <button type='button'>Just a Button</button>
      <img src={Logo} alt='logo' />
    </div>
  )
}

export default App
