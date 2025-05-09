// src/components/organisms/Modalities.jsx
import React from 'react';
import ModalityItem from '../Moleculas/ItemIcon.jsx';
import Button from '../Atoms/Button.jsx';
import img from '../../assets/imgOS1.svg'
import DynamicExpander from '../Organismos/DynamicExpander.jsx'
import ImageCard1 from '../../assets/ImageCard1.svg'
import ImageCard2 from '../../assets/ImageCard2.svg'
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
      paragraphExtended: `Immigration Services for U.S. Citizens: Linguistic support for essential immigration procedures.
Permanent Residency Interviews: Expert interpretation for residency interviews.
Political Asylum: Specialized translations for asylum cases.
Asylum Preparation Interviews: Assistance in mock interviews for asylum applicants.
Unaccompanied Minors (UAC)/(SIJS): Sensitive interpretation for minors in immigration processes.
U-Visa Interviews: Linguistic support in interviews for U-Visa applicants.

`
    },
    {
      id: 2,
      imageSrc: ImageCard2,
      imageAlt: 'Legal Services',
      title: 'Legal Services',
      paragraph: 'Legal interpretations and translations from Spanish and Portuguese into English to ensure accuracy in legal contexts.',
      paragraphExtended: `Legal Translation and Client Interpretation: Translation of legal documents and professional interpretation.
USCIS Family Interviews: Interpretation for family interviews with USCIS.
Attorney-Client Meetings for Civil Cases: Support in legal meetings to ensure clear communication.
Consecutive and Simultaneous Interpretations: Real-time interpretation for hearings and legal meetings.
Escort Interpretation: Specialized linguistic accompaniment in legal situations.
Legal Document Translation: Certified translation of legal documents.
`
    },

    {
      id: 3,
      imageSrc: ImageCard4,
      imageAlt: 'Other Services',
      title: 'Other Services',
      paragraph: 'Spanish and Portuguese linguistic solutions into English for medical, business, and organizational needs.',
      paragraphExtended: `Translation and Interpretation for Medical and Business Needs: Support in healthcare and business settings for effective communication.
Document Translation for Various Industries: Accurate translation for different sectors and needs.
Psychological Evaluations: Professional interpretation in mental health assessments.
Employee Meetings - Human Resources: Linguistic support in corporate and HR meetings.
Interpretation for Business and Political Meetings: Facilitates communication in business and political environments.`
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
    <section
    id='services' 
    className='scroll-mt-8 md:scroll-mt-20'>
      <div className="flex flex-col md:flex-row items-center justify-between px-[8vw] lg:px-[8vw] py-10 pt-20 bg-white mb-16">



      {/* Columna Textos + Modalidades */}
      <div className="md:w-[55%] space-y-3 md:pr-8 ">

        {/* Título principal */}
        <h2 className="text-3xl lg:text-4xl font-semibold text-[var(--color-primary)]">
          Our Services
        </h2>

        {/* Descripción inicial */}
        <p className="text-lg md:text-xl font-medium text-(--color-secondary)">
          A wide range of linguistic services
        </p>


        {/* Lista de 4 modalidades */}
        <div >
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
            onClick={handleContactClick}
            tipo="primario"
            shadow
          />
        </div>
      </div>

      {/* Columna Derecha: Imagen */}
      <div className="md:w-[45%] mt-8 md:mt-0 flex justify-center">
        <img
          src={img}
          alt="Modalidades de capacitación"
          className="max-w-full max-h-[35rem] h-auto"
        />
      </div>
      </div>

      <DynamicExpander cards={topCards} />

    </section>
  );
}