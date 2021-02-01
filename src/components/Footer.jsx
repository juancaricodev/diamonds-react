import React from 'react'

import Logo from '@svg/logo-white.svg'
import FacebookLogo from '@svg/social-facebook-circular-button.svg'
import TwitterLogo from '@svg/social-twitter-circular-button.svg'

const Footer = () => {
  return (
    <footer className='footer'>
      <section className='footer__navbar'>
        <div className='footer__navbar-options'>
          <a href='#services'>Services</a>
          <span />
          <a href='#privacy'>Privacy and Cookie Policy</a>
        </div>

        <div className='footer__navbar-logo'>
          <img src={Logo} alt='diamond logo' />
        </div>

        <div className='footer__navbar-social'>
          <img src={FacebookLogo} alt='facebook logo' />
          <img src={TwitterLogo} alt='twitter logo' />
        </div>
      </section>

      <section className='footer__copy'>
        <p>Copyright &copy; 2021 DIAMONDS. All rights reserved.</p>
      </section>
    </footer>
  )
}

export default Footer
