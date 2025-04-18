// src/components/templates/Calendar.jsx
import React from 'react';
import GoogleCalendar from '../Atoms/GoogleCalendar';

export default function Calendar() {
  // URL pública de tu calendario (ejemplo ficticio)
  const calendarURL = "https://calendar.google.com/calendar/embed?src=b5960a5748bf22710f7ee2a5ed22d3d88504e47d0eea4160719b2ba65dc40d3f%40group.calendar.google.com&ctz=America%2FBogota";

  return (
    <section id="calendario" className="px-10 md:px-20 py-10  pt-18 bg-white">
      {/* Encabezado */}
      <div className="mx-auto mb-6">
        <h2 className="text-4xl font-bold text-[var(--color-primary)]">
          Programación SAP
        </h2>
        <p className="text-lg text-[var(--color-neutral-800)] mt-2">
          Conozca nuestra programación de capacitaciones SAP
        </p>
      </div>

      {/* Contenedor del calendario */}
      <div className="md:max-w-5xl max-w-[100%] mx-auto">
        <GoogleCalendar src={calendarURL} width="100%" height="550" />
      </div>
    </section>
  );
}
