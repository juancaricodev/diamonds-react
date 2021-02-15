import React, { useState, useEffect } from 'react'

import '@styles/Collection.styl'
import DiamondImg from '@img/shutterstock_1530727334.jpg'
import DiamondIcon from '@svg/diamond-gold.svg'

const INITIAL_STATE = [
  {
    id: 0,
    title: 'Diamonds 1',
    description: 'The shining diamonds of the bracelet sprinkle the space.'
  },
  {
    id: 1,
    title: 'Diamonds 100',
    description: 'The intrinsic beauty lies in these sleek and clean earings where polished diamonds embrace the wearer and mark the shape of the face.'
  },
  {
    id: 2,
    title: 'Diamonds 17',
    description: 'The sparkles of the diamonds on this powerful ring symbolize the strength of beauty.'
  },
  {
    id: 3,
    title: 'Diamonds 68',
    description: 'smoke tobacco show riding empty key short task parent stone account pink teach dog at useful drop molecular remain railroad globe factory whom children'
  },
  {
    id: 4,
    title: 'Diamonds 43',
    description: 'depth knowledge several shine rapidly percent frozen listen score minerals machinery perhaps about sold long cook brother wheat science slabs shore pie paper tonight'
  },
  {
    id: 5,
    title: 'Diamonds 19',
    description: 'golden clock show cut wish interior queen three fix up shore burst tone direction drawn lot mice believed twenty green product ought handsome length'
  },
  {
    id: 6,
    title: 'Diamonds 26',
    description: 'rise tone log building leg supply baseball neighbor shirt whom swept missing carried onto dark dried camera activity drop ask stone biggest shoot cross'
  },
  {
    id: 7,
    title: 'Diamonds 28',
    description: 'straight sense scene cream sides tie lips cat worth health information happily force course forest spoken store principal life exclaimed greater facing rising program'
  },
  {
    id: 8,
    title: 'Diamonds 35',
    description: 'wave minerals glad mark out congress only part mouse send all raw apart choice palace circus empty rapidly dress solve begun blue short leader'
  },
  {
    id: 9,
    title: 'Diamonds 55',
    description: 'customs tail case art will president citizen pond film arrow height climate are this hay give average courage without rule thou thing higher settle'
  },
  {
    id: 10,
    title: 'Diamonds 45',
    description: 'lesson cap curious afternoon available shall cover turn foreign split answer pleasant party original dark largest as movement appearance appropriate frozen needle friend pay'
  },
  {
    id: 11,
    title: 'Diamonds 31',
    description: 'review dropped future fresh softly frozen purpose silence pen mental live not useful event stranger oil once nearest occasionally stared adventure sad water couple'
  }
]

const Collection = () => {
  const [diamonds, setDiamonds] = useState(INITIAL_STATE)
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    if (showAll === false) {
      const lessDiamonds = diamonds.filter((product) => product.id <= 2)
      setDiamonds(lessDiamonds)
    }

    return () => {
      setDiamonds(INITIAL_STATE)
    }
  }, [showAll])

  const handleShowAll = () => {
    setShowAll(!showAll)
  }

  return (
    <section className='collection jewels' id='jewels'>
      <div className='collection__header'>
        <div className='collection__header-title'>
          <span />
          <h2>Our Collection</h2>
        </div>

        <p className='collection__header-description'>
          Specially crafted with the utmost of precision and care, our dreamy
          jewels are meant to make your wishes come true.
        </p>
      </div>

      <div className='collection__cards'>
        <ul>
          {diamonds.map((product) => (
            <li key={product.id} className='collection__cards-item'>
              <img
                src={DiamondImg}
                alt='product'
                className='collection__cards-item-img'
              />

              <div className='collection__cards-item-content'>
                <h3>{product.title}</h3>
                <span />
                <p>{product.description}</p>
              </div>

              <img
                src={DiamondIcon}
                alt='diamond icon'
                className='collection__cards-item-diamond'
              />
            </li>
          ))}
        </ul>
        {/* <div className='collection__cards-item'>
          <img
            src={DiamondImg}
            alt='product'
            className='collection__cards-item-img'
          />

          <div className='collection__cards-item-content'>
            <h3>Diamonds 1</h3>
            <span />
            <p>The shining diamonds of the bracelet sprinkle the space.</p>
          </div>

          <img
            src={DiamondIcon}
            alt='diamond icon'
            className='collection__cards-item-diamond'
          />
        </div> */}
      </div>

      <button
        className='collection__button'
        type='button'
        onClick={handleShowAll}
      >
        {showAll === false ? 'View All' : 'View Less'}
      </button>
    </section>
  )
}

export default Collection
