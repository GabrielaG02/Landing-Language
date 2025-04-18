import React from 'react';

/**
 * @param {string} name - Clase del ícono de Bootstrap (ej: "bi bi-alarm")
 * @param {string} size - Tamaño en px, rem, etc.
 * @param {string} className - Clases adicionales de Tailwind o personalizadas
 */
export default function Icon({ name = "bi bi-alarm", size = "1em", className = "" }) {
  return (
    <i
      className={`${name} ${className}`}
      style={{ fontSize: size }}
      aria-hidden="true"
    />
  );
}