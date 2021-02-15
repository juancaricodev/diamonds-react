import React, { useState } from 'react'

import Modal from '@components/Modal'
import '@styles/Contact.styl'
import ScrollUp from '@svg/arrow-in-circle-point-to-up.svg'

// const Modal = ({ open }) => {
//   if (!open) return null

//   return (
//     ReactDOM.createPortal(
//       <div className='modal'>
//         Hola, soy um modal
//       </div>
//       , document.body
//     )
//   )
// }

const Contact = () => {
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className='contact' id='contact'>
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

      <Modal open={openModal} />

      <div className='scrollup'>
        <img src={ScrollUp} alt='go to top icon' onClick={handleScrollUp} />
      </div>
    </section>
  )
}

export default Contact
