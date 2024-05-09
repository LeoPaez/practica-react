import { Link } from "../Link"

export default function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <div>
        <p>Esta es una página de ejemplo para crear un React Router desde cero</p>
      </div>
      <Link to="/about">Ir a Sobre nosotros</Link>
    </>
  )
}