// src/components/organisms/Benefits.jsx
import React from 'react';
import Button from '../Atoms/Button';
import TextBlock from '../Atoms/TextBlock.jsx';

export default function Benefits() {
  const handleContactClick = () => {
    // Busca el elemento con id "contact" y hace scroll hacia él
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

    return (
      <section className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-15 space-x-8 bg-white">


        {/* Bloque de texto */}
        <div className="md:w-1/2 space-y-6">



          {/* Título principal */}
          <h2 className="text-4xl font-bold text-[var(--color-primary)]">
            Beneficios de la capacitación SAP
          </h2>
  
          {/* Bloque 1: Subtítulo + 2 párrafos */}
          <TextBlock
            subtitle="¿Necesita un equipo experto en SAP?"
            paragraphs={[
              "Con SAP Education, su empresa obtiene capacitación flexible y especializada para maximizar la productividad y acelerar el retorno de inversión.",
              "Impulsa el éxito de tus proyectos con un equipo certificado y altamente capacitado.",
            ]}
            // Puedes pasarle props si quieres ajustar el tamaño o color, por ejemplo:
            // subtitleColor="text-red-500"
          />
  
          {/* Bloque 2: Otro subtítulo + 2 párrafos */}
          <TextBlock
            subtitle="¡Transforma la capacitación en el motor de tu crecimiento!"
            subtitleSize = "text-(--text-h1)"
          />
  
          {/* Botón de CTA */}
          <div className="mt-4">
            <Button
              text="Contáctanos"
              onClick={handleContactClick}
              tipo="primario"
            />
          </div>
        </div>
  



        {/* Imagen a la derecha */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 md:pl-8">
          <img
            src="https://landingsapyaulas.blob.core.windows.net/imagesap/imgBenefits.webp"
            alt="Beneficios de la capacitación SAP"
            className="w-auto h-auto max-h-[37rem]"
          />
        </div>
      </section>
    );
  }