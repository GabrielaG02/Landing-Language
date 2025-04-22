import React from 'react';
import Button from '../Atoms/Button.jsx';
import TextBlock from '../Atoms/TextBlock.jsx';
import img from '../../assets/imgHome2.svg'

export default function Objectives() {
  const handleContactClick = () => {
    // Busca el elemento con id "contact" y hace scroll hacia él
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <section
      id="acerca"
      className="md:flex w-full py-10 bg-white mt-[8vw] scroll-mt-22 md:scroll-mt-32"
    >
      {/* Bloque de texto y botón (en móvil se mostrará primero) */}
      <div className="order-1 md:order-2 space-y-8 justify-self-center px-[5vw] sm:px-16 pb-10 md:pb-0 xl:px-0 xl:pl-45 md:w-60/100 flex flex-col justify-center">
        {/* Título principal */}
        <h2 className="text-3xl lg:text-4xl mx-0  sm:text-left font-semibold text-(--color-primary) ">
        Why Choose Latin Language Solutions?
        </h2>

        <div className="space-y-2">
          <TextBlock
            subtitle="Unwavering commitment to accuracy and customer service."
            paragraph="At Latin Language Solutions, we understand how crucial it is to have precise and professional translations in legal, medical, and business situations. With over 450 satisfied clients and more than 2,500 completed translations, we are the reliable choice for your needs. We specialize in Spanish and Portuguese translations and interpretations into English, focusing on cultural accuracy and timely delivery, integrating cutting-edge technology to enhance efficiency."        
            subtitleSize = "xl:text-xl"
            subtitleWeight='font-medium'
            subtitleAlign ="text-left"
            paragraphAlign ="text-left"
            marginX="mx-0"

          />
        </div>

        {/* Botón */}
        <div className="mt-0 flex justify-center sm:justify-start">
          <Button
            text="Contact Us"
            onClick={handleContactClick}
            tipo="primario"
            shadow
          />
        </div>
      </div>

      {/* Contenedor de la imagen (en móvil se mostrará después) */}
      <div className="order-2 md:order-1 justify-self-center pl-4 md:pl-0 md:w-40/100 xl:w-35/100 flex flex-col md:justify-center">
        <img
          src={img}
          alt="Image Why Choose Latin Language Solutions?"
          className="w-full align-bottom relative z-10"
        />
      </div>
    </section>
  );
}
