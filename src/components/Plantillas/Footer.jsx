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
        <div className="flex items-center justify-center border-b-[1px] border-white p-6 lg:justify-between">
          {/* Texto solo visible en pantallas grandes */}
          <div className="font-sans mr-12 hidden lg:block">
            <span>
              ¡Síguenos y descubre cómo revolucionamos la gestión del conocimiento!
            </span>
          </div>

          {/* Íconos de redes sociales */}
          <div className="flex justify-center items-center">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/bscolombia.co/"
              target="_blank"
              rel="noreferrer"
              className="mr-6 text-neutral-600 dark:text-neutral-200"
            >
              <Icon name="bi bi-instagram" size="1em" className="h-4 w-4" />
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/bscolombia/posts/?feedView=all"
              target="_blank"
              rel="noreferrer"
              className="mr-6 text-neutral-600 dark:text-neutral-200"
            >
              <Icon name="bi bi-linkedin" size="1em" className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Sección principal (Business Support y Contacto) */}
        <div className="flex flex-col items-center justify-center p-6 lg:flex-row lg:justify-between">
          {/* Información de la empresa */}
          <div className="w-full text-center lg:w-auto lg:text-left">
            <h6 className="font-archivo mb-4 font-semibold uppercase">
              Business Support
            </h6>
            <p className="font-sans max-w-md mx-auto lg:mx-0">
              Llevamos 20 años impulsando la innovación digital para optimizar
              procesos y mejorar la competitividad empresarial en la
              transformación tecnológica.
            </p>
          </div>

          {/* Datos de contacto */}
          <div className="w-full text-center lg:w-auto lg:text-left mt-6 lg:mt-0 lg:text-left">
            <h6 className="font-archivo mb-4 font-semibold uppercase">
              Contáctanos
            </h6>

            {/* Dirección */}
            <p className="font-sans mb-4">
              <Icon
                name="bi bi-geo-alt"
                size="1em"
                className="inline-block w-5 h-5 mr-3"
              />
              Carrera 7B No 123 - 46
            </p>

            {/* Ubicación (Bogotá) */}
            <p className="font-sans mb-4">
              <Icon
                name="bi bi-geo-alt-fill"
                size="1em"
                className="inline-block w-5 h-5 mr-3"
              />
              Bogotá - Colombia
            </p>

            {/* Teléfono */}
            <p className="mb-4">
              <Icon
                name="bi bi-telephone"
                size="1em"
                className="inline-block w-5 h-5 mr-3"
              />
              + (60 1) 384 17 44
            </p>

            {/* Correo */}
            <p>
              <Icon
                name="bi bi-envelope"
                size="1em"
                className="inline-block w-5 h-5 mr-3"
              />
              comercial@bscolombia.com.com
            </p>
          </div>
        </div>
      </div>

      {/* Sección de copyright */}
      <div className="bg-(--color-neutral-900) p-4 text-center dark:graydark">
        <span>Todos los Derechos Reservados a Business Support S.A.S: </span>
        <a
          className="font-semibold text-neutral-600 dark:text-neutral-400"
          href="https://bscolombia.com.co/web/"
          target="_blank"
          rel="noreferrer"
        >
          BS
        </a>
      </div>
    </footer>
  );
}
