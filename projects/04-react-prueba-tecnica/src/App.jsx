import "./App.css"

import { useCatFact } from "./hooks/useCatFact"
import { useCatImage } from "./hooks/useCatImage"

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>

      <button onClick={handleClick}>Nueva cita</button>

      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt={`Imagen de un gato generada a partir de la primera palabra de ${fact}`} />}
      </section>
    </main>
  )
}
