import React from 'react'

import '@styles/Header.styl'
import diamondIcon from '@svg/diamond-gold.svg'
import expandIcon from '@svg/expand-button.svg'
import lockIcon from '@svg/lock.svg'
import logoIcon from '@svg/logo.svg'
import searchIcon from '@svg/magnifying-glass.svg'

const NavbarOption = ({ id, children, checked }) => {
  const handleOption = () => {
    document.querySelector(`.${id}`).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div>
      <a href={`#${id}`} htmlFor={id} className='option'>
        <input
          type='radio'
          id={id}
          name='nav'
          value={id}
          defaultChecked={checked}
          onClick={handleOption}
        />
        <label htmlFor={id}>
          {children}
          <div className='header__navbar-diamond'>
            <img
              src={diamondIcon}
              alt='diamond icon'
            />
          </div>
        </label>
      </a>
    </div>
  )
}

const Header = () => {
  return (
    <header className='header'>
      <div className='header__login'>
        <img src={lockIcon} alt='login logo' />
        <a href='#login'>
          <p>Login</p>
        </a>
      </div>

      <nav className='header__navbar'>
        {/* <div
          className={headerOptions.homeActive === true ? 'header-active' : ''}
        >
          <a href='#home'>
            <p>HOME</p>
          </a>
          <img
            className='header__navbar-diamond'
            src={diamondIcon}
            alt='diamond icon'
          />
        </div> */}

        <NavbarOption id='home' checked='checked'>home</NavbarOption>

        {/* <div>
          <a href='#about'>
            <p>ABOUT</p>
          </a>
          <img
            className='header__navbar-diamond'
            src={diamondIcon}
            alt='diamond icon'
          />
        </div> */}

        <NavbarOption id='about'>about</NavbarOption>

        <div>
          <img
            className='header__navbar-logo'
            src={logoIcon}
            alt='diamond logo'
          />
        </div>

        {/* <div>
          <a href='#jewels'>
            <p>JEWELS</p>
          </a>
          <img
            className='header__navbar-diamond'
            src={diamondIcon}
            alt='diamond icon'
          />
        </div> */}

        <NavbarOption id='jewels'>jewels</NavbarOption>

        {/* <div>
          <a href='#contact'>
            <p>CONTACT</p>
          </a>
          <img
            className='header__navbar-diamond'
            src={diamondIcon}
            alt='diamond icon'
          />
        </div> */}

        <NavbarOption id='contact'>contact</NavbarOption>
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
