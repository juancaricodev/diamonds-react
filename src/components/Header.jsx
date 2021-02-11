import React, { useState, useEffect, useRef } from 'react'

import '@styles/Header.styl'
import diamondIcon from '@svg/diamond-gold.svg'
import expandIcon from '@svg/expand-button.svg'
import lockIcon from '@svg/lock.svg'
import logoIcon from '@svg/logo.svg'
import searchIcon from '@svg/magnifying-glass.svg'

const NavbarOption = ({ id, children, checked }) => {
  const handleOption = () => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      document.querySelector(`.${id}`).scrollIntoView({ behavior: 'smooth' })
    }
  }

  // TODO: IntersectionObserver for observing #id on window and check navbar option

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
  const [scrolled, setScrolled] = useState(false)

  const headerRef = useRef(null)

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', () => handleScroll)
    }
  }, [])

  return (
    <header className={`header${scrolled === true ? ' header--scroll' : ''}`} ref={headerRef}>
      <div className='header__login'>
        <img src={lockIcon} alt='login logo' />
        <a href='#login'>
          <p>Login</p>
        </a>
      </div>

      <nav className='header__navbar'>

        <NavbarOption id='home' checked='checked'>home</NavbarOption>

        <NavbarOption id='about'>about</NavbarOption>

        <div>
          <img
            className='header__navbar-logo'
            src={logoIcon}
            alt='diamond logo'
          />
        </div>

        <NavbarOption id='jewels'>jewels</NavbarOption>

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
