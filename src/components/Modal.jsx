import React from 'react'

import ReactDOM from 'react-dom'

import '@styles/Modal.styl'

const Modal = ({ open }) => {
  if (!open) return null

  return (
    ReactDOM.createPortal(
      <div className='modal'>
        Hola, soy um modal
      </div>
      , document.body
    )
  )
}

export default Modal
