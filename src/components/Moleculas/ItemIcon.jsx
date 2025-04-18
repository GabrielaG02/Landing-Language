// src/components/Molecules/ModalityItem.jsx
import React from 'react';
import Icon from '../Atoms/Icon.jsx';
import TextBlock from '../Atoms/TextBlock.jsx';

/**
 * @param {string} iconName  - Clase del ícono de Bootstrap (p.ej. "bi bi-alarm")
 * @param {string} title     - Título de la modalidad
 * @param {string} paragraph - Descripción breve de la modalidad
 */
export default function ModalityItem({ iconName, title, paragraph }) {
  return (
    <div className="flex items-center space-x-6">
      {/* Ícono de la modalidad */}
      <Icon
        name={iconName}
        size="2rem "
        className="text-[var(--color-primary)] " 
      />
      
      {/* Título y texto (reutilizando TextBlock) */}
      <TextBlock
        subtitle={title}
        paragraph={paragraph}
        subtitleSize="text-xl xl:text-2xl"
        subtitleColor="text-(--color-info)"
        paragraphSize="text-[var(--text-body-3)]"
        paragraphColor="text-[var(--color-neutral-700)]"
        subtitleClassName="font-bold"
      />
    </div>
  );
}
