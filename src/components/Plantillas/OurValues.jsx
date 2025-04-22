// src/components/templates/OurProducts.jsx
import React from 'react';
import VerticaItem from '../Moleculas/VerticaItem';

export default function OurValues() {
  // Datos para cada tipo de capacitación
  const items = [
    {
      id: 1,
      iconName: 'bi bi-shield-check',
      title: 'Integrity',
      paragraph: 'Honesty and virtue as the foundation of our business.',
    },
    {
      id: 2,
      iconName: 'bi bi-people',
      title: 'Equity',
      paragraph: 'Personalized attention and explicit confidentiality.',
    },
    {
      id: 3,
      iconName: 'bi bi-star',
      title: 'Quality',
      paragraph: 'Excellence standard in all our services.',
    },
    {
      id: 4,
      iconName: 'bi bi-person-gear',
      title: 'Service',
      paragraph: 'Customer satisfaction based on our knowledge and expertise.',
    },
  ];

  return (
    <section className="px-10 md:px-20 py-16 bg-neutral-500">
        <h2 className=" text-3xl lg:text-4xl
                  font-bold
                  text-(--color-primary) my-4 text-center">
          Our Values
        </h2>
      <div className="max-w-5xl mx-auto ">
        {/* Título principal */}
        
        
        {/* Grid de 4 columnas en pantallas grandes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-16 gap-10 md:gap-20 ">
          {items.map((item) => (
            <VerticaItem
              key={item.id}
              iconName={item.iconName}
              title={item.title}
              paragraph={item.paragraph}
              titleColor="txt-black"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
