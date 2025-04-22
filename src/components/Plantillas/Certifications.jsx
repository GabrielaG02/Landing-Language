import React from 'react'
import ImgItemBtn from '../Organismos/ImgItemBtn';

export default function Certifications() {
    return (
      <section className="px-10 md:px-20 py-20 bg-white">
        {/* Título y subtítulo */}
        <div className="max-w-full mx-auto mb-6">
          <h2 className="text-3xl lg:text-4xl font-semibold text-[var(--color-primary)] mb-6">
          Our Professional Certifications
          </h2>
          <p className="text-xl  font-medium text-(--color-secondary)">
          Every member of Latin Language Solutions holds the following leading U.S. accreditation credentials:          </p>
        </div>
  
        {/* Organismo que contiene la imagen + lista de ítems + botón */}
        <ImgItemBtn />
      </section>
    );
  }