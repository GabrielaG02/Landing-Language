// Hero.jsx
import React from 'react';
import Button from '../Atoms/Button';
// import sapLogo from '../../assets/logoSap.webp';
import heroBackground from '../../assets/hero-background.svg'

export default function Hero() {
  const handleContactClick = () => {
    // Busca el elemento con id "contact" y hace scroll hacia él
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  // const redirectSAP = () => {
  //   window.open("https://training.sap.com/training-locations/co/bogota-business-support", "_blank");
  // };
  return (
    <section id='inicio' className="h-[100vh] flex justify-center sm:justify-start items-center  px-10 md:px-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className='absolute inset-0 bg-black/40 h-full'></div>
      {/* Contenido Izquierdo */}
      <div className="w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] sm:ml-[2vw] xl:ml-[4vw] space-y-6 z-1 backdrop-blur-[3px] rounded-xl p-10 mt-15 shadow-[0px_10px_15px_-2px_var(--color-neutral-700)] sm:shadow-[12px_12px_15px_-1px_var(--color-neutral-700)]">
      {/* Etiqueta pequeña */}
        <span className="inline-block bg-(--color-neutral-900) text-base text-(--color-white) px-2 py-1 font-normal rounded">
        Latin Language Solutions
        </span>

        {/* Título principal: FORMACIÓN + imagen SAP */}
        <h1 className=" font-semibold text-(--color-white) text-4xl sm:text-5xl md:text-5xl xl:text-6xl">
          Certified Translations & Interpretations{' '}
        </h1>

        {/* Descripción */}
        <p className="text-(--color-white) text-base  md:text-lg w-75/100">
          Expert Spanish & Portuguese to English services for legal, medical & business needs.
        </p>

        <div className=' space-x-4 space-y-5'>
          {/* Botón de "Contáctanos"  */}
          <Button
            text="Learn More"
            onClick={handleContactClick}
            tipo="primario"
          />

        </div>

      </div>
    </section>
  );
}
