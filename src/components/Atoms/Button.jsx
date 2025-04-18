// Button.jsx
import React from 'react';

const Button = ({ text, onClick, tipo = 'primario', iconName, disabled = false }) => {
  // Clases base
  const baseClasses =
    "font-semibold font-(family-name:--font-narrow) shadow-md focus:outline-none focus:ring-1 transition-colors duration-300 focus:border-[#FB91DB] focus:border-2 focus:bg-(--color-primary)";

  let colorClasses = "";
  if (tipo === 'primario') {
    colorClasses = "bg-(--color-primary) hover:bg-(--color-light-700) text-white rounded-sm px-8 py-2";
  } else if (tipo === 'secundario') {
    colorClasses =
      "  text-[var(--color-primary)] border-2 rounded-3xl px-6 py-2 hover:bg-[var(--color-light-300)] hover:border-[var(--color-light-700)] hover:text-[var(--color-light-700)] focus:border-[var(--color-primary)] focus:bg-[var(--color-light-400)]";
  } else if (tipo === 'navbar') {
    colorClasses = "bg-(--color-primary) hover:bg-(--color-light-700) rounded-sm text-white text-sm px-4 py-2";
  } else if (tipo === 'icon') {
    // Botón solo con ícono (flechas, etc.)
    colorClasses = "text-[var(--color-primary) border-2 text-xl rounded-full px-2 py-1 hover:bg-[var(--color-light-400)] hover:border-[var(--color-light-700)] hover:text-[var(--color-light-700)] focus:border-[var(--color-primary)] focus:bg-[var(--color-light-400)]"
    return (
      <button
        className={`${baseClasses} ${colorClasses} disabled:opacity-50 disabled:cursor-not-allowed`}
        onClick={onClick}
        disabled={disabled}
      >
        <i className={iconName}></i>
      </button>
    );
  }

  return (
    <button
      className={`${baseClasses} ${colorClasses} disabled:opacity-50 disabled:cursor-not-allowed`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
      {iconName && <i className={`${iconName} ml-2`}></i>}
    </button>
  );
};

export default Button;
