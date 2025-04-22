import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import ItemIcon from '../Moleculas/ItemIcon';
import Button from '../Atoms/Button';
import img from '../../assets/imgAU5.svg'

export default function ImgItemBtn() {
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
  // Datos de ejemplo para cada “perfil” o “programa”
  const itemsData = [
    {
      id: 1,
      title: 'American Translators Association (ATA):',
      paragraph: 'ATA‑certified translators, demonstrating our proficiency in accurate and reliable document translation.'
    },
    {
      id: 2,
      title: 'Certified Court Interpreters:',
      paragraph: 'Accredited court interpreters, ensuring professional support during hearings, trials, and other legal proceedings.'
    },
    {
      id: 3,
      title: 'National Board of Certification for Medical Interpreters (NBCMI–CMI):',
      paragraph: 'NBCMI‑certified medical interpreters, trained to handle clinical consultations, procedures, and healthcare environments with sensitivity and precision.'
    }
  ];




  return (
    <div className="flex flex-col md:flex-row items-center justify-between mt-14">
      {/* Columna Izquierda: Imagen */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={img}
          alt="Personas estudiando"
          className="max-w-full h-[auto]"
        />
      </div>

      {/* Columna Derecha: Ítems + Botón */}
      <div className="md:w-1/2 mt-8 md:mt-0 md:pl-8  justify-items-center">
      <div className='items-center '>
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
        <div className="mt-8 md:mt-1">
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