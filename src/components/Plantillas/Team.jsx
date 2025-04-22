// src/components/organisms/Team.jsx
import React from 'react';
import Button from '../Atoms/Button.jsx';
import TextBlock from '../Atoms/TextBlock.jsx';
import Overlay from '../Atoms/Overlay.jsx';
import img from '../../assets/imgAU4.svg'


export default function Team() {


  return (
    <section className="relative h-full min-h-[50vh] lg:h-[60vh] flex justify-center items-center  px-10 md:px-[14vw]  bg-no-repeat bg-cover "
      style={{ backgroundImage: `url(${img})` }}
      >
      <Overlay className="z-10"/>
      {/* Bloque de texto */}
      <div className="w-full mt-0 md:w-70/100 lg:w-50/100 space-y-6 z-1">
        {/* Título principal */}
        <h2 className="text-3xl lg:text-4xl text-center font-semibold text-[var(--color-white)]">
        Team 
        </h2>
        <h4 className="text-base xl:text-lg   px-10 md:px-0 md:w-[40vw] justify-self-end text-center md:justify-self-center font-light text-[var(--color-white)]">
        Brief introduction of the team highlighting their experience and skills in translation and interpretation, with a special focus on Spanish and Portuguese into English.
        </h4>

        {/* Bloque 1: Subtítulo + 2 párrafos */}

      </div>

    </section>
  );
}