import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../Atoms/Button.jsx';
import TextBlock from '../Atoms/TextBlock.jsx';
import img from '../../assets/imgAU1.svg';

export default function Objectives() {

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
      className="

        w-full bg-white mt-[22%] sm:mt-[6%]   xl:mt-[4.5%]
        /* Móvil: columna; MD+: fila con items estirados */
        flex flex-col sm:flex-row sm:items-stretch

      "
    >
      {/* Bloque de texto: móvil arriba, desktop derecha */}
      <div
        className="
          order-1 md:order-2
          w-full md:w-1/2
          flex flex-col justify-center
          px-[5vw] sm:px-16 py-10 sm:py-24 md:py-18 xl:py-50
        "
      >
        <h2 className="text-3xl lg:text-6xl font-semibold text-(--color-primary) sm:mx-0">
          Get to Know Latin Language Solutions
        </h2>

        <div className="mt-6 space-y-4">
          <TextBlock
            subtitle="Over 6 years providing linguistic solutions for legal, medical, and business needs."
            paragraph="Since our founding, our goal has been to provide high-quality translations and interpretations that facilitate communication in critical moments. We stand out for our consultative approach and customer-focused service. We specialize in Spanish and Portuguese translations into English, ensuring accuracy, confidentiality, and an unwavering commitment to quality."
            subtitleSize="xl:text-xl"
            subtitleWeight="font-medium"
            subtitleAlign="text-left"
            paragraphAlign="text-left"
            marginX="mx-0"
          />
        </div>

        <div className="mt-6 flex justify-center sm:justify-start">
          <Button
            text="Contact Us"
            onClick={handleContactClick}
            tipo="primario"
            shadow
          />
        </div>
      </div>

      {/* Contenedor de imagen: móvil abajo con altura fija, desktop izquierda full */}
      <div
        className="
          order-2 md:order-1
          w-full md:w-1/2
          /* Muy importante: altura para móvil, y en MD quita la altura fija */
          h-108 md:h-auto
          relative
        "
      >
        <img
          src={img}
          alt="Get to know illustration"
          className="
            absolute inset-0
            w-full h-full
            
            object-cover
          "
        />
      </div>
    </section>
  );
}
