// src/components/Atoms/TextBlock.jsx
import React from 'react';

const TextBlock = ({
  subtitle,
  paragraphs,
  paragraph,
 
  marginX = "mx-6",
  marginB = "mb-6",
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
  const paraArray = paragraphs ?? (paragraph ? [paragraph] : []);

  return (
    <div className={`mt-2 ${marginB} ${marginX}`}>
      <p
        className={`
          ${subtitleAlign}
          ${subtitleWeight}
          ${subtitleSize}
          ${subtitleColor}
          ${subtitleClassName}
        `}
      >
        {subtitle}
      </p>

      {paraArray.map((para, idx) => (
        <p
          key={idx}
          className={`
            mt-4 xl:mt-2
            ${paragraphAlign}
            ${paragraphWeight}
            ${paragraphSize}
            ${paragraphColor}
            ${paragraphClassName}
          `}
        >
          {para}
        </p>
      ))}
    </div>
  );
};

export default TextBlock;
