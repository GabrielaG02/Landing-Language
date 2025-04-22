// src/components/Atoms/Input.jsx
import React from 'react';

export default function Input({
  placeholder = "Escribe aquí...",
  inputColor = "bg-white",
  size = "w-full",
  type = "text",
  className = "",
  ...props
}) {
  const baseClasses = `${size} ${inputColor} border border-[var(--color-neutral-400)] rounded-sm px-3 text-[var(--color-neutral-900)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] placeholder:text-sm ${className}`;

  if (type === 'textarea') {
    return (
      <textarea
        placeholder={placeholder}
        className={`${baseClasses} py-2 pt-3 resize-none leading-snug`}
        rows={5}
        {...props}
      />
    );
  }

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${baseClasses} py-2`}
      {...props}
    />
  );
}
