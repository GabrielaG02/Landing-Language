// src/components/templates/TypesCap.jsx
import React from 'react';
import VerticaItem from '../Moleculas/VerticaItem';

export default function TypesCap() {
  // Datos para cada tipo de capacitación
  const items = [
    {
      id: 1,
      iconName: 'bi bi-building',  // Ícono de Bootstrap
      title: 'Presencial',
      paragraph: 'Capacitación en nuestro centro con expertos de SAP.'
    },
    {
      id: 2,
      iconName: 'bi bi-laptop',
      title: 'Virtual en Vivo',
      paragraph: 'Clases online con instructores y acceso a servidores SAP.'
    },
    {
      id: 3,
      iconName: 'bi bi-book',
      title: 'SAP Learning HUB',
      paragraph: 'Capacitación digital flexible en todas las soluciones SAP.'
    },
    {
      id: 4,
      iconName: 'bi bi-award',
      title: 'Certificación SAP',
      paragraph: 'Valida tu experiencia con exámenes online supervisados.'
    },
  ];

  return (
    <section className="px-10 md:px-20 py-10 bg-white">
        <h2 className=" text-4xl
                  font-bold
                  text-[var(--color-primary)] my-10">
          Tipos de Capacitación
        </h2>
      <div className="max-w-5xl mx-auto text-left">
        {/* Título principal */}
        
        
        {/* Grid de 4 columnas en pantallas grandes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-20">
          {items.map((item) => (
            <VerticaItem
              key={item.id}
              iconName={item.iconName}
              title={item.title}
              paragraph={item.paragraph}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
