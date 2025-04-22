import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../Atoms/Button.jsx';
import TextBlock from '../Atoms/TextBlock.jsx';
import img from '../../assets/imgAU2.svg'

export default function Mission() {

  const navigate = useNavigate();
  const location = useLocation();
  const handleContactClick = () => {
    if (location.pathname !== "/Home") {
      // Navega primero a la página correcta con un hash
      navigate("/Home#contact");
    } else {
      // Si ya estás en la página, sólo haz scroll
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="acerca"
      className="py-10 w-full  bg-neutral-500 mt-4 md:mt-0 md:px-0 md:flex md:py-16  "
    >
      {/* Bloque de texto y botón (en móvil se mostrará primero) */}
      <div className="order-1 space-y-4 justify-self-center  flex flex-col justify-center pb-10 px-[5vw] sm:px-16 sm:pr-22 md:w-60/100 md:order-1  md:pb-0 xl:pr-26 xl:pl-30 ">
        {/* Título principal */}
        <h2 className="text-3xl lg:text-4xl sm:text-left font-semibold text-(--color-primary) ">
        Mission
        </h2>

        <div className="space-y-4">
          <TextBlock

            paragraph="Our mission is for our clients to experience their target language as coherently and consistently as their native language. We ensure that the original meaning and tone are accurately conveyed in every translation, especially in our specialties of Spanish and Portuguese into English. We strive to serve each of our clients professionally with dignity, civility, and transparency."        
            subtitleSize = " xl:text-xl"
            subtitleWeight='font-medium'
            subtitleAlign ="text-left"
            paragraphAlign ="text-left"
            marginX="mx-0"
            paragraphSize="md:text-base xl:text-lg"

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
      <div className="order-2 md:order-2 justify-self-center pl-4 md:pl-0 md:pr-4 md:w-40/100 xl:w-35/100 flex flex-col md:justify-center">
        <img
          src={img}
          alt="Mission latin language solutions"
          className="w-full align-bottom relative z-10"
        />
      </div>
    </section>
  );
}
