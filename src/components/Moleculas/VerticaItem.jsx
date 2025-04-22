// src/components/Molecules/TypeCapItem.jsx
import React from 'react';
import Icon from '../Atoms/Icon';

export default function VerticalItem({
  iconName,
  title,
  paragraph,
  // Props nuevos con valores por defecto
  iconColor    = 'text-[var(--color-primary)]',
  titleColor   = 'text-[var(--color-info)]',
  paragraphColor = 'text-[var(--color-neutral-900)]',
}) {
  return (
    <div className="flex flex-col items-center text-center space-y-0 md:space-y-3">
      {/* Ícono */}
      <Icon
        name={iconName}
        size="3rem"
        className={iconColor}
      />

      <div className="space-y-3 md:space-y-1 m-5 md:m-0">
        {/* Título, usando titleColor */}
        <h3
          className={`
            ${titleColor}
            font-semibold
            text-2xl md:text-xl
          `}
        >
          {title}
        </h3>

        {/* Párrafo, usando paragraphColor */}
        <p className={`
          ${paragraphColor}
          text-xl md:text-lg
        `}>
          {paragraph}
        </p>
      </div>
    </div>
  );
}
