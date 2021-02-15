import React, { useRef, useState } from 'react'

import '@styles/Slider.styl'
import CarouselImg from '@img/jewelry-carousel2.png'
import ArrowIcon from '@svg/arrow.svg'
import DiamondIcon from '@svgComponent/DiamondIcon'
// import DiamondIcon from '@svg/diamond.svg'

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
  const selectRef = useRef(null)

  let sectionIndex = selector

  const handleRightBtn = () => {
    sectionIndex = sectionIndex < 2 ? sectionIndex + 1 : 2
    sliderRef.current.style.transform = `translate(${sectionIndex * -33.33}%)`
    return setSelector(sectionIndex)
  }

  const handleLeftBtn = () => {
    sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 0
    sliderRef.current.style.transform = `translate(${sectionIndex * -33.33}%)`
    return setSelector(sectionIndex)
  }

  const handleSelector = (id) => {
    // if (id === 0) {
    //   sliderRef.current.style.transform = `translate(${0 * -33.33}%)`
    // } else if (id === 1) {
    //   sliderRef.current.style.transform = `translate(${1 * -33.33}%)`
    // } else if (id === 2) {
    //   sliderRef.current.style.transform = `translate(${2 * -33.33}%)`
    // }

    if (id === 0) {
      return () => {
        sliderRef.current.style.transform = `translate(${id * -33.33}%)`
        return setSelector(id)
      }
    } if (id === 1) {
      return () => {
        sliderRef.current.style.transform = `translate(${id * -33.33}%)`
        return setSelector(id)
      }
    } if (id === 2) {
      return () => {
        sliderRef.current.style.transform = `translate(${id * -33.33}%)`
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
          <button className='carousel__controls--right' type='button' onClick={handleRightBtn}>
            <img src={ArrowIcon} alt='right arrow button' />
          </button>

          <button className='carousel__controls--left' type='button' onClick={handleLeftBtn}>
            <img src={ArrowIcon} alt='left arrow button' />
          </button>

          <ul>

            {info.map((item) => (
              <li key={item.id} onClick={handleSelector(item.id)}>
                {/* <img
                  src={DiamondIcon}
                  className='selector img-selected'
                  alt='diamond icon'
                  onClick={handleSelector(index)}
                  ref={selectRef}
                /> */}

                <DiamondIcon
                  className={item.id === selector ? 'selected' : ''}
                  // onClick={handleSelector}
                />
              </li>
            ))}

            {/* <li>
              <img src={DiamondIcon} alt='diamond icon' />
            </li>
            <li>
              <img src={DiamondIcon} alt='diamond icon' />
            </li>
            <li>
              <img src={DiamondIcon} alt='diamond icon' />
            </li> */}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Slider
