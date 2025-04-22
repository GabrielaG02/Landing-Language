// src/components/organisms/Benefits.jsx
import React from 'react';
import Button from '../Atoms/Button.jsx';
import TextBlock from '../Atoms/TextBlock.jsx';
import Overlay from '../Atoms/Overlay.jsx';
import img from '../../assets/imgHome3.svg'

export default function Benefits() {
  const handleContactClick = () => {
    // Busca el elemento con id "contact" y hace scroll hacia él
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id='get' className="relative h-full min-h-[90vh] lg:h-[80vh] flex justify-center sm:justify-end items-center  px-10 md:px-[14vw]  bg-no-repeat bg-cover "
      style={{ backgroundImage: `url(${img})` }}
      >
      <Overlay className="z-10"/>
      {/* Bloque de texto */}
      <div className="w-full mt-20 lg:mt-[35vh] md:w-70/100 lg:w-50/100 space-y-6 z-1">
        {/* Título principal */}
        <h2 className="text-3xl lg:text-4xl text-center md:text-right font-semibold text-[var(--color-white)]">
        Get to Know Latin Language Solutions
        </h2>
        <h4 className="text-lg lg:text-xl px-10 md:px-0 md:w-[32vw] justify-self-end text-center md:text-right font-light text-[var(--color-white)]">
        Over 6 years providing linguistic solutions for legal, medical, and business needs.
        </h4>

        {/* Bloque 1: Subtítulo + 2 párrafos */}

        {/* Botón de CTA */}
        <div className="mt-15 mb-15 lg:mt-10 justify-self-center md:justify-self-end">
          <Button
            text="Learn More"
            onClick={handleContactClick}
            tipo="primario"
            iconName="bi bi-plus-circle"
          />
        </div>
      </div>




      {/* Imagen a la derecha */}
    </section>
  );
}