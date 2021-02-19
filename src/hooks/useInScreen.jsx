import { useState, useEffect, useRef } from 'react'

const useInScreen = () => {
  const [inScreen, setInScreen] = useState('')
  const element = useRef(null)

  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0]
      if (isIntersecting) {
        setInScreen('jewels')
      }
      return console.log(inScreen)
    })

    observer.observe(element.current)
  }, [element])

  return [inScreen, element]
}

export default useInScreen
