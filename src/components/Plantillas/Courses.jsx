import React from 'react'
import ImgItemBtn from '../Organismos/ImgItemBtn';

export default function Courses() {
    return (
      <section className="px-10 md:px-20 py-10 bg-white">
        {/* Título y subtítulo */}
        <div className="max-w-full mx-auto mb-6">
          <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-6">
            Programas Y Cursos
          </h2>
          <p className="text-lg  font-medium text-(--color-secondary)">
            Descubre programas de formación diseñados para cada perfil:
          </p>
        </div>
  
        {/* Organismo que contiene la imagen + lista de ítems + botón */}
        <ImgItemBtn />
      </section>
    );
  }