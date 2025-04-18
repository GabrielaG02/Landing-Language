// src/components/organisms/Modalities.jsx
import React from 'react';
import ModalityItem from '../Moleculas/ItemIcon.jsx';
import Button from '../Atoms/Button.jsx';

export default function Modalities() {
  // Datos de las modalidades (podrías ajustarlo a tu gusto)
  const modalitiesData = [
    {
      id: 1,
      iconName: "bi bi-people",
      title: "Presencial",
      paragraph: "Experimente una interacción directa y personalizada."
    },
    {
      id: 2,
      iconName: "bi bi-laptop",
      title: "Cursos Online",
      paragraph: "Flexibilidad para aprender a su ritmo desde cualquier lugar."
    },
    {
      id: 3,
      iconName: "bi bi-globe",
      title: "Virtual",
      paragraph: "Una experiencia inmersiva con la comodidad del entorno digital."
    },
    {
      id: 4,
      iconName: "bi bi-building",
      title: "Formación para Empresas",
      paragraph: "Programas a medida para potenciar el talento de su equipo."
    }
  ];

  const redirectWhatsApp = () => {
    // Redireccionar a WhatsApp; ajusta el número según necesites
    window.open("https://wa.me/573155381468?text=Hola,%20necesito%20informaci%C3%B3n%20sobre%20Cursos%20SAP", "_blank");
  };


  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-10 pt-20 bg-white">
      
      {/* Columna Textos + Modalidades */}
      <div className="md:w-[55%] space-y-6 md:pr-8">

        {/* Título principal */}
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)]">
          Modalidades
        </h2>
        
        {/* Descripción inicial */}
        <p className="text-lg  font-medium text-(--color-secondary)">
          Elija la modalidad que mejor se adapte a sus necesidades:
        </p>

        {/* Lista de 4 modalidades */}
        <div className="space-y-2 ">
          {modalitiesData.map((item) => (
            <ModalityItem
              key={item.id}
              iconName={item.iconName}
              title={item.title}
              paragraph={item.paragraph}
            />
          ))}
        </div>

        {/* Texto final (inspiracional) */}
        <p className="text-base font-medium text-(--color-info) mt-4">
          ¡Convierta la capacitación en su ventaja competitiva y dé el siguiente paso hacia el éxito!
        </p>

        {/* Botón CTA */}
        <div className="mt-4">
          <Button
            text="Contactar un Asesor"
            onClick={redirectWhatsApp}
            tipo="secundario"
            
          />
        </div>
      </div>



      {/* Columna Derecha: Imagen */}
      <div className="md:w-[45%] mt-8 md:mt-0 flex justify-center">
        <img
          src="https://landingsapyaulas.blob.core.windows.net/imagesap/imgModalities.webp"
          alt="Modalidades de capacitación"
          className="max-w-full max-h-[35rem] h-auto"
        />
      </div>
    </section>
  );
}
