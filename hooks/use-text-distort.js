import { useState } from 'react'

const useTextDistort = (text, maxDistort = 3, distortSpeed = 100) => {
  const [distortedText, setDistortedText] = useState(text)
  const [currentDistortCount, setCurrentDistortCount] = useState(0)
  const [storedInterval, setStoredInterval] = useState(null)

  const props = {
    onMouseEnter: () => {
      const interval = setInterval(() => {
        setDistortedText(
          generateDistortedText(text, distortedText, maxDistort, currentDistortCount, setCurrentDistortCount)
        )
      }, distortSpeed)
      setStoredInterval(interval)
    },
    onMouseLeave: () => {
      clearInterval(storedInterval)
      setDistortedText(text)
      setCurrentDistortCount(0)
    }
  }

  return [distortedText, props]
}

const generateDistortedText = (originalText, currentText, maxDistort, currentDistortCount, setCurrentDistortCount) => {
  if (currentDistortCount >= maxDistort) {
    setCurrentDistortCount(0)
    return originalText
  }

  const charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890+>?-$#@%&*'
  let chars = currentText.split('')
  const rand = Math.floor(Math.random() * (chars.length))
  const randRep = Math.floor(Math.random() * (charSet.length))

  if(chars[rand] != charSet[randRep] && chars[rand] != ' '){
    chars[rand] = charSet[randRep]
    setCurrentDistortCount(prevState => prevState += 1)
  }

  return chars.join('')
}

export default useTextDistort