import React, { useRef, useState, useEffect } from 'react'

import ReactDOM from 'react-dom'

import '@styles/Modal.styl'

const Modal = ({ open, close }) => {
  if (!open) return null

  const [filledName, setFilledName] = useState(true)
  const [filledEmail, setFilledEmail] = useState(true)
  const [validEmail, setValidEmail] = useState(true)
  const [filledMessage, setFilledMessage] = useState(true)
  // const [validationSuccess, setValidationtSuccess] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  // const [validEmail, setValidEmail] = useState('')
  const [message, setMessage] = useState('')
  const [successfull, setSuccessfull] = useState(false)

  const formRef = useRef(null)

  // let formValidated

  // const submitForm = () => {
  //   if (formValidated === true) {
  //     setValidationtSuccess(true)
  //     console.info('Submit Successfull')
  //   } else {
  //     setValidationtSuccess(false)
  //     console.warn('Submit Failed')
  //   }
  // }

  const handleSubmit = (e) => {
    e.preventDefault()

    // const formData = new FormData(formRef.current)
    // const data = {
    //   name: formData.get('name'),
    //   email: formData.get('email'),
    //   message: formData.get('message')
    // }

    if (name === '') {
      setFilledName(false)
    } else {
      setFilledName(true)
    }

    if (email === '') {
      setFilledEmail(false)
    } else {
      setFilledEmail(true)
    }

    if (message === '') {
      setFilledMessage(false)
    } else {
      setFilledMessage(true)
    }

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    emailRegex.test(email)
      ? setValidEmail(true)
      : setValidEmail(false)

    // if (
    //   filledName === true
    //   && filledEmail === true
    //   && filledMessage === true
    //   && validEmail === true
    // ) {
    //   setSuccessfull(true)
    //   console.info('Submit successfull - error from server')
    // } else {
    //   setSuccessfull(false)
    //   console.warn('Not submited yet')
    // }

    // submitForm()
  }

  useEffect(() => {
    if (
      filledName === true
      && filledEmail === true
      && filledMessage === true
      && validEmail === true
    ) {
      setSuccessfull(true)
      console.info('Submit successfull - error from server')
    } else {
      // setSuccessfull(false)
      console.warn('Not submited yet')
    }
    // return () => {
    //   cleanup
    // }
  }, [])

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
              filledName === true
                ? null
                : <label htmlFor='name'>This field is required.</label>
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
              value={email}
              onChange={handleEmail}
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
              value={message}
              onChange={handleMessage}
            />
          </div>

          {
            successfull === true
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
