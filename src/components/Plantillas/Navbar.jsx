import React from 'react'
import Logo from '../Atoms/Logo'
import Button from '../Atoms/Button'
import Hamburguer from '../Atoms/HamburguerButton'

const navbarlinks = [
  {
    id: 1,
    title: "Home",
    link: "#inicio",
  },
  {
    id: 2,
    title: "About Us",
    link: "/AboutUs",
  },
  {
    id: 3,
    title: "Services",
    link: "#services",
  },
  {
    id: 4,
    title: "Blog",
    link: "/Blog",
  },
  {
    id: 5,
    title: "Contact",
    link: "#contact",
  },
]

const redirectWhatsApp = () => {
  window.open(" https://wa.me/14157244998?text=Hello,%20I%20would%20like%20to%20get%20information%20about%20the%20services%20offered%20by%20Latin%20Language%20Solutions", "_blank");
};

function Navbar() {
  return (
    <nav className="fixed w-full max-w-full top-0 z-50 bg-(--color-secondary)">
      {/* Contenido principal del navbar */}
      <div className="p-1 pt-2 px-8 flex justify-between items-center">
        {/* Logo */}
        <Logo size="w-16 h-16" />

        {/* Navegación para pantallas grandes */}
        <div className="md:flex flex-1 justify-end items-center mr-6 hidden">
          <ul className="flex justify-items-center space-x-4">
            {navbarlinks.map(link => (
              <li key={link.id}>
                <a
                  href={link.link}
                  className="md:text-base text-body-4 text-white hover:text-(--color-light-800)"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Botón con ícono de WhatsApp */}
        <Button
          text="Contact an Advisor"
          tipo="navbar"
          onClick={redirectWhatsApp}
          iconName="bi bi-whatsapp"
        />

        {/* Menú hamburguesa para móviles */}
        <Hamburguer links={navbarlinks} />
      </div>

      {/* Línea con gradiente al final del navbar */}
      <div
         className="h-[4px] bg-gradient-to-r from-secondary-800 via-primary to-secondary-800"
      ></div>
    </nav>
  )
}

export default Navbar;
