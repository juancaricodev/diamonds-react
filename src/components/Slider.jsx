import React from 'react'

import '@styles/Slider.styl'
import CarouselImg from '@img/jewelry-carousel2.png'
import ArrowIcon from '@svg/arrow.svg'
import DiamondIcon from '@svg/diamond.svg'

const Slider = () => {
  return (
    <section className='slider-container'>
      <div className='carousel'>
        <div className='carousel__slider'>
          <div className='carousel__slider-section'>
            <img src={CarouselImg} alt='slider cover' />
          </div>
        </div>

        <div className='carousel__controls'>
          <button className='carousel__controls--right' type='button'>
            <img src={ArrowIcon} alt='right arrow button' />
          </button>

          <button className='carousel__controls--left' type='button'>
            <img src={ArrowIcon} alt='left arrow button' />
          </button>

          <ul>
            <li>
              <img src={DiamondIcon} alt='diamond icon' />
            </li>
            <li>
              <img src={DiamondIcon} alt='diamond icon' />
            </li>
            <li>
              <img src={DiamondIcon} alt='diamond icon' />
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Slider
