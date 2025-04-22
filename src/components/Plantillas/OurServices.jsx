// src/components/organisms/Modalities.jsx
import React from 'react';
import ModalityItem from '../Moleculas/ItemIcon.jsx';
import Button from '../Atoms/Button.jsx';
import ChicaOurServices from '../../assets/ChicaOurServices.svg'
import Card from '../Moleculas/Card.jsx';
import DynamicExpander from '../Organismos/DynamicExpander.jsx'
import ImageCard1 from '../../assets/ImageCard1.svg'
import ImageCard2 from '../../assets/ImageCard2.svg'
import ImageCard3 from '../../assets/ImageCard3.svg'
import ImageCard4 from '../../assets/ImageCard4.svg'




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
      paragraph: 'Spanish and Portuguese translations and interpretations into English to facilitate immigration processes in the U.S.',
      paragraphExtended: `Acknowledgments: Verify signer identity and witness signatures on deeds, contracts, powers of attorney, and other documents
      Jurats: Administer oaths and affirmations for affidavits, sworn statements, and declarations
      Certified Copies: Certify true copies of original documents (birth certificates, transcripts, corporate records)
      Mobile Notary & Apostille Support: On‑site notarization by appointment plus guidance through apostille legalization
      Multilingual Assistance: Full service for Spanish and Portuguese clients, ensuring clarity and U.S. compliance`
    },
    {
      id: 2,
      imageSrc: ImageCard2,
      imageAlt: 'Legal Services',
      title: 'Legal Services',
      paragraph: 'Legal interpretations and translations from Spanish and Portuguese into English to ensure accuracy in legal contexts.',
      paragraphExtended: `Acknowledgments: Verify signer identity and witness signatures on deeds, contracts, powers of attorney, and other documents
      Jurats: Administer oaths and affirmations for affidavits, sworn statements, and declarations
      Certified Copies: Certify true copies of original documents (birth certificates, transcripts, corporate records)
      Mobile Notary & Apostille Support: On‑site notarization by appointment plus guidance through apostille legalization
      Multilingual Assistance: Full service for Spanish and Portuguese clients, ensuring clarity and U.S. compliance`
    },
    {
      id: 3,
      imageSrc: ImageCard3,
      imageAlt: 'Public Notary Services',
      title: 'Public Notary Services',
      paragraph: 'Certified notarial acts and document authentication for legal, business, and personal needs.',
      paragraphExtended: `Acknowledgments: Verify signer identity and witness signatures on deeds, contracts, powers of attorney, and other documents
      Jurats: Administer oaths and affirmations for affidavits, sworn statements, and declarations
      Certified Copies: Certify true copies of original documents (birth certificates, transcripts, corporate records)
      Mobile Notary & Apostille Support: On‑site notarization by appointment plus guidance through apostille legalization
      Multilingual Assistance: Full service for Spanish and Portuguese clients, ensuring clarity and U.S. compliance`
    },
    {
      id: 4,
      imageSrc: ImageCard4,
      imageAlt: 'Other Services',
      title: 'Other Services',
      paragraph: 'Spanish and Portuguese linguistic solutions into English for medical, business, and organizational needs.',
      paragraphExtended: `Acknowledgments: Verify signer identity and witness signatures on deeds, contracts, powers of attorney, and other documents
      Jurats: Administer oaths and affirmations for affidavits, sworn statements, and declarations
      Certified Copies: Certify true copies of original documents (birth certificates, transcripts, corporate records)
      Mobile Notary & Apostille Support: On‑site notarization by appointment plus guidance through apostille legalization
      Multilingual Assistance: Full service for Spanish and Portuguese clients, ensuring clarity and U.S. compliance`
    }
  ];

  const redirectWhatsApp = () => {
    // Redireccionar a WhatsApp; ajusta el número según necesites
    window.open("https://wa.me/573155381468?text=Hola,%20necesito%20informaci%C3%B3n%20sobre%20Cursos%20SAP", "_blank");
  };


  return (
    <section
    id='services' 
    className='scroll-mt-8 md:scroll-mt-20'>
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

      <DynamicExpander cards={topCards} />

    </section>
  );
}