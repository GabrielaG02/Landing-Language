import React from 'react'
import Icon from '../Atoms/Icon.jsx';
import TextBlock from '../Atoms/TextBlock.jsx';

export default function Card({ iconName, title, paragraph }) {
  return (
<div className="bg-[var(--color-white)] p-4 rounded-xl shadow-sm text">
      {/* Ícono de Bootstrap con color y tamaño ajustables */}
      <Icon
        name={iconName}
        size="2rem"
        className="text-(--color-primary) mb-2"
      />

      {/* Bloque de texto para el título y el párrafo */}
      <TextBlock
        subtitle={title}
        paragraph={paragraph}
        /* Ajusta estilos si quieres tamaños/colores distintos */
        subtitleSize="text-lg"
        subtitleColor="text-(--color-primary)"
        paragraphSize="text-base"
        paragraphColor="text-(--color-secondary)"
        subtitleClassName="font-semibold"
      />
    </div>
  )
}
