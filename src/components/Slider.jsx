import React, { useRef } from 'react'

import '@styles/Slider.styl'
import CarouselImg from '@img/jewelry-carousel2.png'
import ArrowIcon from '@svg/arrow.svg'
import DiamondIcon from '@svg/diamond.svg'

const Slider = () => {
  const info = [
    {
      title: 'Diamonds 1',
      description: 'Diamonds are the brightest stars and only the sky is the limit when it comes to achieving our jewels.',
      img: 'https://res.cloudinary.com/dncmrxklt/image/upload/v1611317451/jewelry-carousel_yqqeha.jpg'
    },
    {
      title: 'Diamonds 2',
      description: 'You see a glimmer of light at the end of the darkness. Is a small lake of water with a waterfall. Lake of diamonds',
      img: 'https://res.cloudinary.com/dncmrxklt/image/upload/v1611317460/jewelry-carousel2_t9plag.png'
    },
    {
      title: 'Diamonds 3',
      description: 'We may share our diamonds with one soul, or we may find a few who we trust with our jewels',
      img: 'https://res.cloudinary.com/dncmrxklt/image/upload/v1611317616/diamonds-003_wxxoia.jpg'
    }
  ]

  return (
    <section className='slider-container about' id='about'>
      <div className='carousel'>
        <div className='carousel__slider'>
          {info.map((item, index) => {
            return (
              <div className='carousel__slider-section' key={item.title}>
                <img src={info[index].img ? info[index].img : CarouselImg} alt='slider cover' />
                <h2>{info[index].title}</h2>
                <div className='hl-divider' />
                <p className='slider__text-content'>
                  {info[index].description}
                </p>
              </div>
            )
          })}
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
