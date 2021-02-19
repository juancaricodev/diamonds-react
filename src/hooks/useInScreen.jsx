import { useState, useEffect, useRef } from 'react'

const useInScreen = () => {
  const [inScreen, setInScreen] = useState('')
  const element = useRef(null)

  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0]
      if (isIntersecting) {
        // console.log(inScreen)
        setInScreen(element.current.id)
        console.log(element.current.id)
      } else {
        setInScreen('')
      }
    })

    observer.observe(element.current)
  }, [element])

  return [inScreen, element]
}

export default useInScreen
