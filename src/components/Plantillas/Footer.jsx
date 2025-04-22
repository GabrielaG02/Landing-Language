// src/components/templates/Footer.jsx
import React from "react";
import Icon from "../Atoms/Icon";

export default function Footer() {
  return (
    <footer className="bg-secondary text-center text-white lg:text-left relative z-[1100]">
      {/* Barra superior con gradiente */}
      <div
        className="h-[4px] bg-gradient-to-r from-secondary-800 via-primary to-secondary-800"
      ></div>

      {/* Contenido principal del footer */}
      <div className="p-4">
        {/* Sección de redes sociales */}
        <div className="sm:flex items-center justify-center border-b-[1px] border-white p-6 lg:justify-between">
          {/* Texto solo visible en pantallas grandes */}
          <div className="font-sans  block sm:text-start space-y-2">
            <h1>
            ¿Don’t feel comfortable speaking English yet?
            </h1>
            <h1>
            We live English interpretation!
            </h1>
          </div>

          {/* Íconos de redes sociales */}
          <div className="flex justify-center items-center mt-5 sm:mt-0">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/bscolombia.co/"
              target="_blank"
              rel="noreferrer"
              className="mr-6 text-neutral-600 dark:text-neutral-200"
            >
              <Icon name="bi bi-instagram" size="1.5em" className="h-4 w-4" />
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/bscolombia/posts/?feedView=all"
              target="_blank"
              rel="noreferrer"
              className="text-neutral-600 dark:text-neutral-200"
            >
              <Icon name="bi bi-linkedin" size="1.5em" className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Sección principal (Business Support y Contacto) */}
        <div className="flex flex-col items-center justify-center p-6 lg:flex-row lg:justify-between">
          {/* Información de la empresa */}
          <div className="w-full text-center lg:w-auto lg:text-left">
            <h6 className="font-archivo mb-4 font-semibold uppercase">
            Latin Language Solutions
            </h6>
            <p className="font-sans max-w-md mx-auto lg:mx-0">
            Latin Language Solutions specializes in legal and medical interpretation. 
            We have experience in employee training, conferences, human resources meetings, and more. We proudly serve people traveling for tourism or business, dedicating ourselves to meeting their Spanish and Portuguese translation and interpretation needs into English.
            </p>
          </div>

          {/* Datos de contacto */}
          <div className="w-full text-center lg:w-auto lg:text-left mt-6 lg:mt-0 lg:text-left">
            <h6 className="font-archivo mb-4 font-semibold uppercase">
              Contact Us
            </h6>

            {/* Dirección */}
            <p className="font-sans mb-4">
              <Icon
                name="bi bi-geo-alt"
                size="1em"
                className="inline-block w-5 h-5 mr-3"
              />
              San Francisco, CA 94102
            </p>

            {/* Ubicación (Bogotá) */}
            <p className="font-sans mb-4">
              <Icon
                name="bi bi-geo-alt-fill"
                size="1em"
                className="inline-block w-5 h-5 mr-3"
              />
              United States of America
            </p>

            {/* Teléfono */}
            <p className="mb-4">
              <Icon
                name="bi bi-telephone"
                size="1em"
                className="inline-block w-5 h-5 mr-3"
              />
              + (415) 724-4998
            </p>

            {/* Correo */}
            <p>
              <Icon
                name="bi bi-envelope"
                size="1em"
                className="inline-block w-5 h-5 mr-3"
              />
              tatiana@latinlanguagesolutions.com

            </p>
          </div>
        </div>
      </div>

      {/* Sección de copyright */}

    </footer>
  );
}
