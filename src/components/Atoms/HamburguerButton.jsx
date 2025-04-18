import React, { useState } from 'react';

export default function HamburguerButton({ links}) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <div className="md:hidden">
    {/* Botón de menú hamburguesa */}
    <button 
      onClick={toggleMenu} 
      className="flex flex-col justify-center items-center p-2"
    >
      <span className="block w-6 h-0.5 bg-white"></span>
      <span className="block w-6 h-0.5 bg-white my-1"></span>
      <span className="block w-6 h-0.5 bg-white"></span>
    </button>

    {/* Menú desplegable */}
    {isOpen && (
      <div className="absolute top-[4rem] right-0 mt-2 w-auto bg-(--color-info) shadow-lg">
        <ul className="flex flex-col">
          {links.map(link => (
            <li key={link.id}>
              <a 
                href={link.link}
                className="block px-4 py-2 text-white hover:bg-(--color-light-800) text-[1rem]"
                onClick={toggleMenu} // Cierra el menú al seleccionar un enlace
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
  )
}
