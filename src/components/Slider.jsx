import React, { useRef, useState, useEffect } from 'react'

import CarouselImg from '@img/jewelry-carousel2.png'
import ArrowIcon from '@svg/arrow.svg'
import DiamondIcon from '@svgComponent/DiamondIcon'
import '@styles/Slider.styl'

const info = [
  {
    id: 0,
    title: 'Diamonds 1',
    description: 'Diamonds are the brightest stars and only the sky is the limit when it comes to achieving our jewels.',
    img: 'https://res.cloudinary.com/dncmrxklt/image/upload/v1611317451/jewelry-carousel_yqqeha.jpg'
  },
  {
    id: 1,
    title: 'Diamonds 2',
    description: 'You see a glimmer of light at the end of the darkness. Is a small lake of water with a waterfall. Lake of diamonds',
    img: 'https://res.cloudinary.com/dncmrxklt/image/upload/v1611317460/jewelry-carousel2_t9plag.png'
  },
  {
    id: 2,
    title: 'Diamonds 3',
    description: 'We may share our diamonds with one soul, or we may find a few who we trust with our jewels',
    img: 'https://res.cloudinary.com/dncmrxklt/image/upload/v1611317616/diamonds-003_wxxoia.jpg'
  }
]

const Slider = () => {
  const [selector, setSelector] = useState(0)

  const sliderRef = useRef(null)
  const leftBtnRef = useRef(null)
  const rightBtnRef = useRef(null)

  useEffect(() => {
    selector === 0
      ? leftBtnRef.current.classList.add('btn-disabled')
      : null

    selector === 2
      ? rightBtnRef.current.classList.add('btn-disabled')
      : null

    return () => {
      rightBtnRef.current.classList.remove('btn-disabled')
      leftBtnRef.current.classList.remove('btn-disabled')
    }
  }, [selector])

  let sectionIndex = selector

  const sliderFade = () => {
    sliderRef.current.classList.add('fade')
    setTimeout(() => { sliderRef.current.classList.remove('fade') }, 300)
  }

  const handleRightBtn = () => {
    sectionIndex = sectionIndex < 2 ? sectionIndex + 1 : 2
    sliderRef.current.style.transform = `translate(${sectionIndex * -33.33}%)`
    selector >= 2
      ? ''
      : sliderFade()

    return setSelector(sectionIndex)
  }

  const handleLeftBtn = () => {
    sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 0
    sliderRef.current.style.transform = `translate(${sectionIndex * -33.33}%)`
    selector !== 0
      ? sliderFade()
      : ''
    return setSelector(sectionIndex)
  }

  const handleSelector = (id) => {
    if (id === 0) {
      return () => {
        sliderRef.current.style.transform = `translate(${id * -33.33}%)`
        selector !== id
          ? sliderFade()
          : ''

        return setSelector(id)
      }
    } if (id === 1) {
      return () => {
        sliderRef.current.style.transform = `translate(${id * -33.33}%)`
        selector !== id
          ? sliderFade()
          : ''

        return setSelector(id)
      }
    } if (id === 2) {
      return () => {
        sliderRef.current.style.transform = `translate(${id * -33.33}%)`
        selector !== id
          ? sliderFade()
          : ''

        return setSelector(id)
      }
    }
    return ''
  }

  return (
    <section className='slider-container about' id='about'>
      <div className='carousel'>
        <div className='carousel__slider' ref={sliderRef}>
          {info.map((item, index) => (
            <div className='carousel__slider-section' key={item.title}>
              <img src={info[index].img ? info[index].img : CarouselImg} alt='slider cover' />
              <h2>{info[index].title}</h2>
              <div className='hl-divider' />
              <p className='slider__text-content'>
                {info[index].description}
              </p>
            </div>
          ))}
        </div>

        <div className='carousel__controls'>
          <button
            className='carousel__controls--right'
            type='button'
            onClick={handleRightBtn}
            ref={rightBtnRef}
          >
            <img src={ArrowIcon} alt='right arrow button' />
          </button>

          <button
            className='carousel__controls--left'
            type='button'
            onClick={handleLeftBtn}
            ref={leftBtnRef}
          >
            <img src={ArrowIcon} alt='left arrow button' />
          </button>

          <ul>

            {info.map((item) => (
              <li key={item.id} onClick={handleSelector(item.id)}>
                <DiamondIcon className={item.id === selector ? 'selected' : ''} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Slider
