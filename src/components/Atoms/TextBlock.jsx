// src/components/Atoms/TextBlock.jsx
import React from 'react';

const TextBlock = ({
  subtitle,
  paragraphs, // puede ser un array
  paragraph,  // o un único string
  // Props de estilo con valores default
  subtitleSize = "text-xl",
  paragraphSize = "text-md",
  subtitleColor = "text-[var(--color-neutral-800)]",
  paragraphColor = "text-[var(--color-neutral-700)]",
  subtitleClassName = "",
  paragraphClassName = "",
  subtitleWeight = "",
  paragraphWeight = "",
  subtitleAlign = "text-center",
  paragraphAlign = "text-center",
}) => {
  // Si no se proporciona 'paragraphs' pero sí 'paragraph', lo envolvemos en un array.
  const paraArray = paragraphs ? paragraphs : (paragraph ? [paragraph] : []);

  return (
    <div className="mt-2 mb-6 mx-6">
      <p className={`${subtitleAlign} ${subtitleWeight} ${subtitleSize} ${subtitleColor} ${subtitleClassName}`}>
        {subtitle}
      </p>
      {paraArray.map((para, idx) => (
        <p key={idx} className={`mt-4 xl:mt-2 ${paragraphAlign} ${paragraphWeight} ${paragraphSize} ${paragraphColor} ${paragraphClassName}`}>
          {para}
        </p>
      ))}
    </div>
  );
};

export default TextBlock;
