// src/components/organisms/Modalities.jsx
import React from 'react';
import ModalityItem from '../Moleculas/ItemIcon.jsx';
import Button from '../Atoms/Button.jsx';
import ChicaOurServices from '../../assets/ChicaOurServices.svg'
import Card from '../Moleculas/Card.jsx';

import ImageCard1 from '../../assets/ImageCard1.svg'
import ImageCard2 from '../../assets/ImageCard2.svg'
import ImageCard3 from '../../assets/ImageCard3.svg'



export default function Modalities() {
  // Datos de las modalidades (podrías ajustarlo a tu gusto)
  const modalitiesData = [
    {
      id: 1,
      iconName: "bi bi-globe-americas",
      title: "Immigration Services",
    },
    {
      id: 2,
      iconName: "bi-briefcase",
      title: "Legal Services",
    },
    {
      id: 3,
      iconName: "bi-journals",
      title: "Other Services",
    },
  ];

  const topCards = [
    {
      id: 1,
      imageSrc: ImageCard1,
      imageAlt: 'Inmigration Services',
      title: 'Immigration Services',
      paragraph: 'Spanish and Portuguese translations and interpretations into English to facilitate immigration processes in the U.S.'
    },
    {
      id: 2,
      imageSrc: ImageCard2,
      imageAlt: 'Legal Services',
      title: 'Legal Services',
      paragraph: 'Legal interpretations and translations from Spanish and Portuguese into English to ensure accuracy in legal contexts.'
    },
    {
      id: 3,
      imageSrc: ImageCard3,
      imageAlt: 'Other Services',
      title: 'Other Services',
      paragraph: 'Spanish and Portuguese linguistic solutions into English for medical, business, and organizational needs.',
      span:'sm:col-span-2 mx-auto md:col-span-1'
    }
  ];

  const redirectWhatsApp = () => {
    // Redireccionar a WhatsApp; ajusta el número según necesites
    window.open("https://wa.me/573155381468?text=Hola,%20necesito%20informaci%C3%B3n%20sobre%20Cursos%20SAP", "_blank");
  };


  return (
    <section >
      <div className="flex flex-col md:flex-row items-center justify-between px-[8vw] lg:px-[15vw] py-10 pt-20 bg-white">



      {/* Columna Textos + Modalidades */}
      <div className="md:w-[55%] space-y-3 md:pr-8">

        {/* Título principal */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-primary)]">
          Our Services
        </h2>

        {/* Descripción inicial */}
        <p className="text-lg  font-medium text-(--color-secondary)">
          A wide range of linguistic services
        </p>
        <p className="text-lg  font-medium text-(--color-neutral-700)">
          Interactive cards with icons. Expanded descriptions on click.
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



        {/* Botón CTA */}
        <div className="mt-8">
          <Button
            text="Contact Us"
            onClick={redirectWhatsApp}
            tipo="primario"
            shadow
          />
        </div>
      </div>

      {/* Columna Derecha: Imagen */}
      <div className="md:w-[45%] mt-8 md:mt-0 flex justify-center">
        <img
          src={ChicaOurServices}
          alt="Modalidades de capacitación"
          className="max-w-full max-h-[35rem] h-auto"
        />
      </div>
      </div>

      <div className=" justify-self-center grid grid-cols-1  md:grid-cols-3 sm:grid-cols-2 gap-4 mb-6">
        {topCards.map(item => (
          <Card
            key={item.id}
            // Si el item lleva imagen, la usará; si no, caerá en el icono
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt}
            iconName={item.iconName}
            title={item.title}
            paragraph={item.paragraph}
            span={item.span}
          />
        ))}
      </div>

    </section>
  );
}
