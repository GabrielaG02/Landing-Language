// src/components/Molecules/TypeCapItem.jsx
import React from 'react';
import Icon from '../Atoms/Icon';

/**
 * Molécula que muestra:
 * - Ícono de Bootstrap
 * - Título en color principal
 * - Descripción breve
 */
export default function VerticalItem({ iconName, title, paragraph }) {
  return (
    <div className="flex flex-col items-center text-center space-y-0 md:space-y-3">
      {/* Ícono en la parte superior */}
      <Icon
        name={iconName}
        size="3rem"
        className="text-(--color-primary)"
      />

<div  className='space-y-3 md:space-y-1  m-5 md:m-0'>
      {/* Título */}
      <h3 className="text-(--color-info) font-semibold text-2xl md:text-xl">
        {title}
      </h3>

      {/* Descripción */}
      <p className="text-[var(--color-neutral-900)] text-xl md:text-lg">
        {paragraph}
      </p>


</div>
    </div>
  );
}
