// src/components/Atoms/Input.jsx
import React from 'react';

/**
 * @param {string} placeholder - Texto que aparece cuando el campo está vacío.
 * @param {string} inputColor - Clase de Tailwind o variable CSS para color de fondo/borde.
 * @param {string} size - Clase de Tailwind para el tamaño (p. ej. "w-full", "w-1/2").
 * @param {string} type - Tipo de input ("text", "email", "tel", etc.).
 */
export default function Input({
    placeholder = "Escribe aquí...",
    inputColor = "bg-white",
    size = "w-full",
    type = "text",
    className = "",
    ...props
  }) {
    return (
      <input
        type={type}
        placeholder={placeholder}
        className={`${size} ${inputColor} border border-[var(--color-neutral-400)] rounded-sm py-2 px-3 text-[var(--color-neutral-900)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] placeholder:text-sm ${className}`}
        {...props}
      />
    );
  }
