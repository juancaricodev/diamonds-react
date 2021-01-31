import React from 'react'

import '@styles/components/Header.styl'
import diamondIcon from '@svg/diamond.svg'
import expandIcon from '@svg/expand-button.svg'
import lockIcon from '@svg/lock.svg'
import logoIcon from '@svg/logo.svg'
import searchIcon from '@svg/magnifying-glass.svg'

const Header = () => {
  return (
    <header className='header'>
      <div className='header__login'>
        <img src={lockIcon} alt='login logo' />
        <p>Login</p>
      </div>

      <nav className='header__navbar'>
        <div>
          <a href='#home'>
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
