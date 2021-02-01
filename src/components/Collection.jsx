import React from 'react'

import DiamondImg from '@img/shutterstock_1530727334.jpg'
import DiamondIcon from '@svg/diamond.svg'

const Collection = () => {
  return (
    <section className='collection'>
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
        <div className='collection__cards-item'>
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
        </div>
      </div>

      <button className='collection__button' type='button'>View All</button>
    </section>
  )
}

export default Collection
