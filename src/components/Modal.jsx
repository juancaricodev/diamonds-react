import React from 'react'

import ReactDOM from 'react-dom'

import '@styles/Modal.styl'

const Modal = ({ open, close }) => {
  if (!open) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    console.warn('Form Submited')
  }

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

        <form className='modal-container__form' onSubmit={handleSubmit}>
          <div className='modal-container__form-group'>
            <label htmlFor='name'>This field is required.</label>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Name'
            />
          </div>

          <div className='modal-container__form-group'>
            <label htmlFor='email'>This field is required.</label>
            <label htmlFor='email'>This email address is invalid.</label>
            <input
              type='text'
              name='email'
              id='email'
              placeholder='Email'
            />
          </div>

          <div className='modal-container__form-group'>
            <label htmlFor='message'>This field is required.</label>
            <textarea
              name='message'
              id='message'
              cols='30'
              rows='8'
              placeholder='Your message here.'
            />
          </div>

          <p className='modal-container__form-server-error'>
            Unexpected server error ...
          </p>

          <input type='submit' id='submit-form' style={{ visibility: 'hidden' }} />
        </form>
      </div>

      <label htmlFor='submit-form' className='modal__submit'>
        send
        {/* <button type='button' className='modal__submit'>
          send
        </button> */}
      </label>

    </section>,
    document.body
  )
}

export default Modal
