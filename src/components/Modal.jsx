import React, { useRef, useState } from 'react'

import ReactDOM from 'react-dom'

import '@styles/Modal.styl'

const Modal = ({ open, close }) => {
  if (!open) return null

  const [filledName, setFilledName] = useState(true)
  const [filledEmail, setFilledEmail] = useState(true)
  const [validEmail, setValidEmail] = useState(true)
  const [filledMessage, setFilledMessage] = useState(true)

  const formRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(formRef.current)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    }

    // if ()

    console.warn(data)
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

        <form ref={formRef} className='modal-container__form' onSubmit={handleSubmit}>
          <div className='modal-container__form-group'>
            {
              filledName !== true
                ? <label htmlFor='name'>This field is required.</label>
                : null
            }

            <input
              type='text'
              name='name'
              id='name'
              placeholder='Name'
            />
          </div>

          <div className='modal-container__form-group'>
            {
              filledEmail !== true
                ? <label htmlFor='name'>This field is required.</label>
                : null
            }

            {
              validEmail !== true
                ? <label htmlFor='name'>This email address is invalid.</label>
                : null
            }

            <input
              type='text'
              name='email'
              id='email'
              placeholder='Email'
            />
          </div>

          <div className='modal-container__form-group'>
            {
              filledMessage !== true
                ? <label htmlFor='name'>This field is required.</label>
                : null
            }

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
      </label>

      {/* <button form='contact-form' type='button' className='modal__submit'>
        send
      </button> */}

    </section>,
    document.body
  )
}

export default Modal
