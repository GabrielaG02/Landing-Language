// src/components/templates/Contact.jsx
import React from 'react';
import ContactForm from '../Moleculas/Form';
import BannerTitle from '../Moleculas/BannerTitle';

export default function Contact() {
  return (
    <section id="contact">
      {/* Banner superior */}
      <BannerTitle 
        title="Contáctanos" 
        subtitle="Contáctanos hoy mismo y descubre todo lo que tenemos para ti" 
        iconName="bi bi-whatsapp"
        iconLink="https://wa.me/573155381468?text=Hola,%20necesito%20informaci%C3%B3n%20sobre%20Cursos%20AULAS"
      />


      <div className="px-10 md:px-20 py-10 mx-auto">
        {/* Contenedor de 2 columnas */}
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-10 md:space-y-0">
          {/* Columna del formulario */}
          <div className="w-full md:w-[55%] p-5 rounded">
            <ContactForm />
          </div>

          {/* Columna de la imagen */}
          <div className="w-full md:w-[45%] flex justify-center">
            <img
              src="https://landingsapyaulas.blob.core.windows.net/imagesap/imgContact.webp"
              alt="Contacto"
              className="max-w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
