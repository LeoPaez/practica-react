import { useEffect, useState } from "react"

const CAT_PREFIX_IMAGE_URL = "https://cataas.com/cat/"

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  // recuperar la imagen cada vez que tenemos un fact
  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(" ")[0]
    console.log(firstWord)

    fetch(`https://cataas.com/cat/says/${firstWord}?&json=true`)
      .then(res => res.json())
      .then(response => {
          const { _id } = response
          setImageUrl(`${_id}/says/${firstWord}`)
      })
  }, [fact])

  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}