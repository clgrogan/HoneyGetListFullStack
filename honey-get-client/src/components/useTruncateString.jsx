import { useState } from 'react'

export const useTruncateString = (startIndex, endIndex, initialString) => {
  const lengthInitialString = initialString.length
  const [truncatedString, setTruncatedString] = useState(initialString)
  console.log(startIndex, endIndex, initialString, truncatedString)
  const truncateString = () => {
    if (lengthInitialString > endIndex) {
      setTruncatedString(initialString.slice(startIndex, endIndex - 4) + '...')
    }
  }
  console.log(lengthInitialString, endIndex)
  return [truncatedString, truncateString]
}
