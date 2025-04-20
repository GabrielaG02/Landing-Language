import React from 'react';

/**
 * @param {string} name - Clase del ícono de Bootstrap (ej: "bi bi-alarm")
 * @param {string} size - Tamaño en px, rem, etc.
 * @param {string} className - Clases adicionales de Tailwind o personalizadas
 * @param {function} onClick - Handler para eventos click (opcional)
 * @param {object} rest - Otras props, como accesibilidad, data-*, etc.
 */
export default function Icon({ name, size = "1em", className = "", onClick, ...rest }) {
  return (
    <i
      className={`${name} ${className}`}
      style={{ fontSize: size, cursor: onClick ? 'pointer' : undefined }}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-hidden={onClick ? undefined : 'true'}
      {...rest}
    />
  );
}
