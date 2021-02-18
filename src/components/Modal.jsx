import React, { useRef, useState, useEffect } from 'react'

import ReactDOM from 'react-dom'

import '@styles/Modal.styl'

const Modal = ({ open, close }) => {
  if (!open) return null

  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [emailInvalid, setEmailInvalid] = useState(false)
  const [messageError, setMessageError] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [validationSuccess, setValidationtSuccess] = useState(false)

  useEffect(() => {
    if (
      nameError
      || emailError
      || emailInvalid
      || messageError
      || !name.length > 0
      || !email.length > 0
      || !message.length > 0
    ) {
      setValidationtSuccess(false)
    } else {
      setValidationtSuccess(true)
    }
  }, [emailError, emailInvalid, nameError, name, email, message])

  const formRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(formRef.current)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    }

    if (name.length > 0) {
      setNameError(false)
    } else {
      setNameError(true)
    }

    if (email.length > 0) {
      setEmailError(false)
    } else {
      setEmailError(true)
    }

    if (message.length > 0) {
      setMessageError(false)
    } else {
      setMessageError(true)
    }

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    emailRegex.test(data.email)
      ? setEmailInvalid(false)
      : setEmailInvalid(true)

    if (
      nameError
      || emailError
      || emailInvalid
      || messageError
      || !data.name.length > 0
      || !data.email.length > 0
      || !data.message.length > 0
    ) {
      console.warn('Form not submited')
    } else {
      console.info('Form submited')
    }
  }

  const handleName = (e) => setName(e.target.value)

  const handleEmail = (e) => setEmail(e.target.value)

  const handleMessage = (e) => setMessage(e.target.value)

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
              nameError
                ? <label htmlFor='name'>This field is required.</label>
                : null
            }

            <input
              type='text'
              name='name'
              id='name'
              placeholder='Name'
              value={name}
              onChange={handleName}
            />
          </div>

          <div className='modal-container__form-group'>
            {
              emailError
                ? <label htmlFor='name'>This field is required.</label>
                : null
            }

            {
              !emailInvalid
                ? null
                : <label htmlFor='name'>This email address is invalid.</label>
            }

            <input
              type='text'
              name='email'
              id='email'
              placeholder='Email'
              value={email}
              onChange={handleEmail}
            />
          </div>

          <div className='modal-container__form-group'>
            {
              !messageError
                ? null
                : <label htmlFor='name'>This field is required.</label>
            }

            <textarea
              name='message'
              id='message'
              cols='30'
              rows='8'
              placeholder='Your message here.'
              value={message}
              onChange={handleMessage}
            />
          </div>

          {
            validationSuccess
              ? (
                <p className='modal-container__form-server-error'>
                  Unexpected server error ...
                </p>
              )
              : null
          }

          <input type='submit' id='submit-form' style={{ visibility: 'hidden' }} />
        </form>
      </div>

      <label htmlFor='submit-form' className='modal__submit'>
        send
      </label>
    </section>,
    document.body
  )
}

export default Modal
