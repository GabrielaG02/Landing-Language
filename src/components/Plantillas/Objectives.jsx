import React from 'react';
import Button from '../Atoms/Button';
import TextBlock from '../Atoms/TextBlock.jsx';

export default function Objectives() {
  const redirectWhatsApp = () => {
    window.open("https://wa.me/573155381468?text=Hola,%20necesito%20informaci%C3%B3n%20sobre%20Cursos%20SAP", "_blank");
  };

  return (
    <section
      id="acerca"
      className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-10 bg-white"
    >
      {/* Bloque de texto y botón (en móvil se mostrará primero) */}
      <div className="order-1 md:order-2 md:w-1/2 mt-8 md:mt-0 md:pl-8 space-y-8">
        {/* Título principal */}
        <h2 className="text-4xl font-bold text-(--color-primary) xl:text-5xl">
          Objetivos de los cursos SAP
        </h2>

        <div className="space-y-4">
          <TextBlock
            subtitle="Inicia a tus equipos en el manejo experto de este software"
            paragraph="Abarcando la Gestión de Materiales, Gestión de la Calidad, Planificación de la Producción, Ventas y Distribución, Customer Service, Controlling, Finanzas, ¡y mucho más!"        
            subtitleSize = "xl:text-2xl"

          />

          <TextBlock
            subtitle="Maximice el rendimiento con capacitación especializada"
            paragraph="Con una capacitación especializada puede potenciar el rendimiento de su equipo para lograr mejores resultados y mayor competitividad."
            subtitleSize = "xl:text-2xl"

          />
        </div>

        {/* Botón */}
        <div className="mt-6">
          <Button
            text="Contactar un Asesor"
            onClick={redirectWhatsApp}
            tipo="secundario"
          />
        </div>
      </div>

      {/* Contenedor de la imagen (en móvil se mostrará después) */}
      <div className="order-2 md:order-1 md:w-1/2 md:mt-0 mt-6 flex justify-center relative">
        <img
          src="https://landingsapyaulas.blob.core.windows.net/imagesap/imgObj.webp"
          alt="Objetivos de los cursos SAP"
          className="w-auto h-auto relative z-10"
        />
      </div>
    </section>
  );
}
