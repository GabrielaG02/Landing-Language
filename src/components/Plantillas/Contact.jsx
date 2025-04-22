// src/components/templates/Contact.jsx
import React from 'react';
import ContactForm from '../Moleculas/Form';
import BannerTitle from '../Moleculas/BannerTitle';
import ContactUsGuy from '../../assets/contactUsGuy.svg'

export default function Contact() {
  return (
    <section id="contact" className='scroll-mt-4 md:scroll-mt-20'>
      {/* Banner superior */}


      <div className="pt-10 mx-auto">
        {/* Contenedor de 2 columnas */}
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-10 md:space-y-0">
          {/* Columna del formulario */}
          <div className="order-2 md:order-1 mt-0 lg:mt-auto justify-self-center mx-auto  md:mx-0 w-90/100 md:pl-0 md:w-40/100 xl:w-35/100 flex flex-col md:justify-center">
            <img
              src={ContactUsGuy}
              alt="Contacto"
              className="max-w-full h-auto object-cover"
            />
          </div>
          <div className="order-1 md:order-2 md:mb-10 mt-5 space-y-8 justify-self-center px-[10vw] sm:px-16 pb-10 md:pb-0 xl:px-0 xl:pl-45 w-full md:w-60/100 flex flex-col justify-center">
            <ContactForm />
          </div>

          {/* Columna de la imagen */}

        </div>
      </div>
    </section>
  );
}
