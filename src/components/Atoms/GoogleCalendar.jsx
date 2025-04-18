// src/components/Atoms/GoogleCalendar.jsx
import React from 'react';

/**
 * @param {string} src - Enlace público de Google Calendar (embed).
 * @param {number|string} width - Ancho del iframe (ej: "800" o "100%").
 * @param {number|string} height - Alto del iframe (ej: "600" o "600px").
 */
export default function GoogleCalendar({ src, width = "800", height = "600" }) {
  return (
    <div className="overflow-hidden w-full max-w-full  shadow-lg ">
      <iframe
        src={src}
        style={{ border: 0 }}
        width={width}
        height={height}

      ></iframe>
    </div>
  );
}
