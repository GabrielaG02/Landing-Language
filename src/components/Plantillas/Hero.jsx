// Hero.jsx
import React from 'react';
import Button from '../Atoms/Button';
import sapLogo from '../../assets/logoSap.webp';

export default function Hero() {
  const handleContactClick = () => {
    // Busca el elemento con id "contact" y hace scroll hacia él
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const redirectSAP = () => {
    window.open("https://training.sap.com/training-locations/co/bogota-business-support", "_blank");
  };
  return (
    <section id='inicio' className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-10 bg-white sp">
      {/* Contenido Izquierdo */}
      <div className="md:w-1/2 space-y-6">
        {/* Etiqueta pequeña */}
        <span className="inline-block font-(family-name:--font-narrow) bg-(--color-neutral-500) text-base text-(--color-neutral-900) px-2 py-1 uppercase font-medium rounded">
          Business Support
        </span>

        {/* Título principal: FORMACIÓN + imagen SAP */}
        <h1 className="font-(family-name:--font-narrow) font-bold text-(--color-primary)  md:text-7xl text-5xl">
          FORMACIÓN{' '}
          <img
            src={sapLogo}
            alt="SAP"
            className="inline-block h-10  md:h-10 self-center"
          />
        </h1>

        {/* Subtítulo */}
        <p className="font-(family-name:--font-narrow) font-semibold text-(--color-secondary-700) md:text-4xl text-2xl ">
          Conozca nuestra programación de capacitaciones SAP
        </p>

        {/* Descripción */}
        <p className="text-(--color-neutral-900) text-base md:text-lg">
          Optimiza tu negocio con SAP ERP, el software líder en gestión empresarial.
          Potencia tu equipo con la capacitación de SAP Education.
        </p>

<div className=' space-x-4 space-y-5'>      
    {/* Botón de "Contáctanos"  */}
        <Button
          text="Contáctanos"
          onClick={handleContactClick}
          tipo="primario"
        />
                {/* Botón de "Membresia"  */}
          <Button
          text="Valida nuestra membresía"
          onClick={redirectSAP}
          tipo="secundario"
          iconName="bi bi-patch-check"
        /></div>

      </div>
      {/* Imagen Derecha (las 4 personas en una sola imagen) */}
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img
          src="https://landingsapyaulas.blob.core.windows.net/imagesap/imgHero.webp"
          alt="Personas"
          className="max-w-full h-auto"
        />
      </div>
    </section>
  );
}
