import React, { useState } from 'react'

import '@styles/Header.styl'
import diamondIcon from '@svg/diamond-gold.svg'
import expandIcon from '@svg/expand-button.svg'
import lockIcon from '@svg/lock.svg'
import logoIcon from '@svg/logo.svg'
import searchIcon from '@svg/magnifying-glass.svg'

const Header = () => {
  // let optionsState = {
  //   homeActive: true,
  //   aboutActive: false,
  //   jewelsActive: false,
  //   contactActive: false
  // }

  const [headerOptions, setHeaderOptions] = useState({
    homeActive: true,
    aboutActive: false,
    jewelsActive: false,
    contactActive: false
  })

  const handleChange = () => {
    console.log('link working')
    
  }

  return (
    <header className='header'>
      <div className='header__login'>
        <img src={lockIcon} alt='login logo' />
        <a href='#login'>
          <p>Login</p>
        </a>
      </div>

      <nav className='header__navbar'>
        <div
          className={
            headerOptions.homeActive === true
              ? 'header-active'
              : ''
          }
        >
          <a href='#home' onClick={handleChange()}>
            <p>HOME</p>
          </a>
          <img
            className='header__navbar-diamond'
            src={diamondIcon}
            alt='diamond icon'
          />
        </div>

        <div>
          <a href='#about'>
            <p>ABOUT</p>
          </a>
          <img
            className='header__navbar-diamond'
            src={diamondIcon}
            alt='diamond icon'
          />
        </div>

        <div>
          <img
            className='header__navbar-logo'
            src={logoIcon}
            alt='diamond logo'
          />
        </div>

        <div>
          <a href='#jewels'>
            <p>JEWELS</p>
          </a>
          <img
            className='header__navbar-diamond'
            src={diamondIcon}
            alt='diamond icon'
          />
        </div>

        <div>
          <a href='#contact'>
            <p>CONTACT</p>
          </a>
          <img
            className='header__navbar-diamond'
            src={diamondIcon}
            alt='diamond icon'
          />
        </div>
      </nav>

      <div className='header__search'>
        <div className='header__search-lang'>
          <p>EN</p>
          <img src={expandIcon} alt='expand icon' />
        </div>
        <img
          className='header__search-icon'
          src={searchIcon}
          alt='search icon'
        />
      </div>
    </header>
  )
}

export default Header
