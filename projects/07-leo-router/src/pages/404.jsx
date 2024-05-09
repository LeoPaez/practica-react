import { Link } from "../Link";

export default function Page404 () {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <h1>Error 404</h1>
        <strong>Página no encontrada</strong>
        <img width="500px" src="https://i.gifer.com/g2mL.gif" alt="Perro confundido" />
        <Link to="/">Volver al inicio</Link>
    </div>
  )
}