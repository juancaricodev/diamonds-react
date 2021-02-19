import { useState, useEffect, useRef } from 'react'

const useInScreen = () => {
  const [inScreen, setInScreen] = useState('')
  const element = useRef(null)

  useEffect(() => {
    // const options = { root: null, rootMargin: '0', threshold: 0.5 }

    const observer = new window.IntersectionObserver(
      (entries) => {
        const { isIntersecting } = entries[0]

        if (isIntersecting) {
          console.log(element.current.id)
          setInScreen(element.current.id)
        } else if (window.pageYOffset === 0) {
          console.log('top')
          setInScreen('top')
        } else {
          setInScreen('')
        }
      }
      //, { options }
    )

    observer.observe(element.current)

    // return () => observer.disconnect()
  }, [element, inScreen])

  return [inScreen, element]
}

export default useInScreen
