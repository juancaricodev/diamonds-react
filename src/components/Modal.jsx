import React from 'react'

import ReactDOM from 'react-dom'

import '@styles/Modal.styl'

const Modal = ({ open, close }) => {
  if (!open) return null

  return ReactDOM.createPortal(
    <section className='modal'>
      <button type='button' className='modal-close' onClick={close}>
        Close
      </button>

      <div className='modal-container'>
        <div className='modal-container__header'>
          <h1>Contact</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            architecto doloribus.
          </p>
        </div>

        <form className='modal-container__form'>
          <p className='modal-container__form-group'>
            <label htmlFor=''>This field is required.</label>
            <input
              type='text'
              name='name'
              placeholder='Name'
            />
          </p>

          <p className='modal-container__form-group'>
            <label>This field is required.</label>
            <label>This email address is invalid.</label>
            <input
              type='text'
              name='email'
              placeholder='Email'
            />
          </p>

          <p className='modal-container__form-group'>
            <label htmlFor=''>This field is required.</label>
            <textarea
              name='message'
              cols='30'
              rows='8'
              placeholder='Your message here.'
            />
          </p>

          <p className='modal-container__form-server-error'>
            Unexpected server error ...
          </p>
        </form>
      </div>

      <button
        type='submit'
        className='modal__submit'
      >
        send
      </button>

    </section>,
    document.body
  )
}

export default Modal
