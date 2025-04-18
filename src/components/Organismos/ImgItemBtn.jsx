import React from 'react';
import ItemIcon from '../Moleculas/ItemIcon';
import Button from '../Atoms/Button';

export default function ImgItemBtn() {
  // Datos de ejemplo para cada “perfil” o “programa”
  const itemsData = [
    {
      id: 1,
      iconName: 'bi bi-briefcase',
      title: 'Profesionales de TI y líderes de proyectos',
      paragraph: 'Dominen las herramientas esenciales para transformar sus iniciativas.'
    },
    {
      id: 2,
      iconName: 'bi bi-people',
      title: 'SAP Partners y usuarios de negocio',
      paragraph: 'Impulsan la eficiencia y la innovación en sus procesos.'
    },
    {
      id: 3,
      iconName: 'bi bi-mortarboard',
      title: 'Estudiantes universitarios',
      paragraph: 'Con la sinergia hacia un futuro exitoso en el mundo SAP.'
    }
  ];

  const handleContactClick = () => {
    // Busca el elemento con id "contact" y hace scroll hacia él
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <div className="flex flex-col md:flex-row items-center justify-between mt-6">
      {/* Columna Izquierda: Imagen */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="https://landingsapyaulas.blob.core.windows.net/imagesap/imgCourses.webp"
          alt="Personas estudiando"
          className="max-w-full h-[auto]"
        />
      </div>

      {/* Columna Derecha: Ítems + Botón */}
      <div className="md:w-1/2 mt-8 md:mt-0 md:pl-8 space-y-12 justify-items-center">
      <div className='space-y-6'>
        {/* Lista de ítems (ItemIcon) */}
        {itemsData.map(item => (
          <ItemIcon
            key={item.id}
            iconName={item.iconName}
            title={item.title}
            paragraph={item.paragraph}
            
          />
        ))}
      </div>


        {/* Botón de CTA */}
        <div className="mt-4">
          <Button
            text="Contáctanos"
            onClick={handleContactClick}
            tipo="primario"
          />
        </div>
      </div>
    </div>
  );
}