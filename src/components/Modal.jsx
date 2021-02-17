import React, { useRef, useState, useEffect } from 'react'

import ReactDOM from 'react-dom'

import '@styles/Modal.styl'

const Modal = ({ open, close }) => {
  if (!open) return null

  const [filledName, setFilledName] = useState(false)
  const [filledEmail, setFilledEmail] = useState(false)
  const [validEmail, setValidEmail] = useState(false)
  const [filledMessage, setFilledMessage] = useState(false)

  const [validationSuccess, setValidationtSuccess] = useState(false)

  // useEffect(() => {
  //   // filledName === true
  //   //   ? filledEmail === true
  //   //     ? filledMessage === true
  //   //       ? validEmail === true
  //   //         ? setValidationtSuccess(true)
  //   //         : setValidationtSuccess(false)
  //   //       : setValidationtSuccess(false)
  //   //     : setValidationtSuccess(false)
  //   //   : setValidationtSuccess(false)

  //   const validations = [
  //     filledName,
  //     filledMessage,
  //     filledEmail,
  //     validEmail
  //   ]

  //   if (validations.includes(false)) {
  //     setValidationtSuccess(false)
  //   } else {
  //     setValidationtSuccess(true)
  //   }

  //   // return () => {
  //   //   cleanup
  //   // }
  // }, [filledName, filledEmail, validEmail, filledMessage])

  const submitForm = () => {
    if (!filledName || !filledEmail || !filledMessage || !validEmail) {
      setValidationtSuccess(false)
      console.warn('Submit failed')
    } else {
      setValidationtSuccess(true)
      console.log('Form Submited')
    }
  }

  const formRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(formRef.current)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    }

    if (data.name === '') {
      setFilledName(false)
    } else {
      setFilledName(true)
    }

    if (data.email === '') {
      setFilledEmail(false)
    } else {
      setFilledEmail(true)
    }

    if (data.message === '') {
      setFilledMessage(false)
    } else {
      setFilledMessage(true)
    }

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    emailRegex.test(data.email)
      ? setValidEmail(true)
      : setValidEmail(false)

    // if (
    //   filledName === true
    //   && filledEmail === true
    //   && filledMessage === true
    //   && validEmail === true
    // ) {
    //   submitForm()
    // } else {
    //   console.warn('Submit failed')
    // }

    // if (filledName !== true || filledEmail !== true || filledMessage !== true || validEmail !== true) {
    //   setValidationtSuccess(false)
    // } else {
    //   submitForm()
    // }

    submitForm()
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
              filledName === true
                ? null
                : <label htmlFor='name'>This field is required.</label>
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
              filledEmail === true
                ? null
                : <label htmlFor='name'>This field is required.</label>
            }

            {
              validEmail === true
                ? null
                : <label htmlFor='name'>This email address is invalid.</label>
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
              filledMessage === true
                ? null
                : <label htmlFor='name'>This field is required.</label>
            }

            <textarea
              name='message'
              id='message'
              cols='30'
              rows='8'
              placeholder='Your message here.'
            />
          </div>

          {
            validationSuccess === true
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

      {/* <button form='contact-form' type='button' className='modal__submit'>
        send
      </button> */}

    </section>,
    document.body
  )
}

export default Modal
