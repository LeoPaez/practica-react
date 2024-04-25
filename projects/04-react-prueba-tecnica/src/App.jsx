import React, { useEffect, useState } from 'react'
import "./App.css"

const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact"
const CAT_PREFIX_IMAGE_URL = "https://cataas.com/cat/"

export function App () {
  const [fact, setFact] = useState("cat fact")
  const [imageUrl, setImageUrl] = useState()
  const [factError, setFactError] = useState()

  // recuperar fact al cargar la pagina
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => {
        if (!res.ok) throw new Error("Error al recuperar la cita")
        return res.json()
      })
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
      .catch((err) => {
        // tanto si hay error con la respuesta
        // como si hay un error con la petición
      })
  }, [])

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

  return (
    <main style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>App de gatitos</h1>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Imagen de un gato generada a partir de la primera palabra de ${fact}`} />}
      </section>
    </main>
  )
}
