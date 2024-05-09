import { Link } from "../Link"

const i18n = {
  es: {
    title: "Sobre mi",
    description: "¡Hola! Me llamo Leonel y estoy creando un clon de React Router",
    button: "Volver al inicio"
  },
  en: {
    title: "About me",
    description: "Hi! My name is Leonel and I am creating a clone of React Router",
    button: "Back to home"
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

export default function AboutPage ({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? "es")

  return (
    <>
      <h1>{i18n.title}</h1>
      <div>
        <img
            src="/leo-y-luna.jpeg"
            alt="Foto de Leonel"
            width={200}
        />
        <p>{i18n.description}</p>
      </div>
      <Link to="/">{i18n.button}</Link>
    </>
  )
}