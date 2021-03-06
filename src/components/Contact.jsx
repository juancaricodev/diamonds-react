import React, { useState } from 'react'

import Modal from '@components/Modal'
import useInScreen from '@hooks/useInScreen'
import '@styles/Contact.styl'
import ScrollUp from '@svg/arrow-in-circle-point-to-up.svg'

const Contact = () => {
  const [openModal, setOpenModal] = useState(false)

  const [inScreen, element] = useInScreen()

  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className='contact' id='contact' ref={element}>
      <div className='contact__title'>
        <h1>Contact Us</h1>
        <h2>Diamonds</h2>
      </div>

      <div className='contact__description'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, velit
        nihil quia voluptatem odit totam reiciendis consectetur.
      </div>

      <button className='contact__button' type='button' onClick={handleOpenModal}>
        Contact
      </button>

      <Modal open={openModal} close={() => setOpenModal(false)} />

      <div className='scrollup'>
        <img src={ScrollUp} alt='go to top icon' onClick={handleScrollUp} />
      </div>
    </section>
  )
}

export default Contact
