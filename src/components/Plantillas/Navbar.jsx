import React from 'react'
import Logo from '../Atoms/Logo'
import Button from '../Atoms/Button'
import Hamburguer from '../Atoms/HamburguerButton'

const navbarlinks = [
  {
    id: 1,
    title: "Inicio",
    link: "#inicio",
  },
  {
    id: 2,
    title: "Acerca de",
    link: "#acerca",
  },
  {
    id: 3,
    title: "Contacto",
    link: "#contact",
  },
]

const redirectWhatsApp = () => {
  window.open("https://wa.me/573155381468?text=Hola,%20necesito%20informaci%C3%B3n%20sobre%20Cursos%20SAP", "_blank");
};

function Navbar() {
  return (
    <nav className=" sticky top-0 z-50 bg-(--color-secondary)">
      {/* Contenido principal del navbar */}
      <div className="py-4 px-4 flex justify-between items-center">
        {/* Logo */}
        <Logo size="w-12 h-10" />

        {/* Navegación para pantallas grandes */}
        <div className="md:flex flex-1 justify-center items-center hidden">
          <ul className="flex justify-items-center space-x-4">
            {navbarlinks.map(link => (
              <li key={link.id}>
                <a
                  href={link.link}
                  className="md:text-[1.1vw] text-body-4 text-white hover:text-(--color-light-900)"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Botón con ícono de WhatsApp */}
        <Button
          text="Contactar un Asesor"
          tipo="navbar"
          onClick={redirectWhatsApp}
          iconName="bi bi-whatsapp"
        />

        {/* Menú hamburguesa para móviles */}
        <Hamburguer links={navbarlinks} />
      </div>

      {/* Línea con gradiente al final del navbar */}
      <div
         className="h-[4px] bg-gradient-to-r from-secondary via-primary to-secondary"
      ></div>
    </nav>
  )
}

export default Navbar;
