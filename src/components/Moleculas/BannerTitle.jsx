// src/components/Atoms/BannerTitle.jsx
import React from 'react';
import Icon from '../Atoms/Icon';

export default function BannerTitle({ title, subtitle, iconName, iconLink }) {
  return (
    <div className="bg-(--color-neutral-500)">
      <div className="px-10 md:px-20 py-10">
        {/* Encabezado con opcional ícono */}
        <h2 className="text-4xl md:text-4xl font-bold text-(--color-secondary) flex items-center space-x-2">
          <span>{title}</span>
          {/* Renderiza el ícono si existen iconName y iconLink */}
          {iconName && iconLink && (
            <a 
              href={iconLink} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Icon 
                name={iconName} 
                size="1.2em" 
                className="text-green-500" // Cambia a otro color si lo prefieres
              />
            </a>
          )}
        </h2>

        {/* Subtítulo */}
        <p className="text-xl text-(--color-neutral-700) mt-2">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
