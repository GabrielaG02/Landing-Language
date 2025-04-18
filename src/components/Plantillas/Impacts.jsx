import React from 'react'
import Card from '../Moleculas/Card.jsx';

export default function Impacts() {
  // Array con las primeras 4 tarjetas (texto más corto)
  const topCards = [
    {
      id: 1,
      iconName: "bi bi-piggy-bank",
      title: "Inversión que rinde frutos",
      paragraph: "Descubre el ROI del 15% al 20% al invertir en capacitación."
    },
    {
      id: 2,
      iconName: "bi bi-lightbulb",
      title: "Productividad multiplicada",
      paragraph: "Cada paso en habilidades de TI incrementa un 15% la productividad."
    },
    {
      id: 3,
      iconName: "bi bi-shield-lock",
      title: "Solución a brechas críticas",
      paragraph: "El 60% de los líderes de TI señalan la escasez de personal calificado."
    },
    {
      id: 4,
      iconName: "bi bi-lightning",
      title: "Inversión inteligente",
      paragraph: "En solo 3-6 meses se recupera la inversión con personal capacitado."
    }
  ];

  // Array con las últimas 3 tarjetas (texto más largo)
  const bottomCards = [
    {
      id: 5,
      iconName: "bi bi-binoculars",
      title: "Visión de líderes",
      paragraph: "El 70% de los directivos prioriza la capacitación para elevar la competitividad y asegurar el crecimiento sostenido de la empresa."
    },
    {
      id: 6,
      iconName: "bi bi-check2-circle",
      title: "Cumplimiento de plazos",
      paragraph: "Los proyectos de TI concluyen 30% más rápido con un equipo entrenado, reduciendo costos de retraso y mejorando la satisfacción del cliente."
    },
    {
      id: 7,
      iconName: "bi bi-award",
      title: "Éxito comprobado",
      paragraph: "Empresas que capacitan ven un incremento de 40% en eficiencia y 30% en rentabilidad, posicionándose mejor en el mercado."
    }
  ];

  return (
    <section className="px-10 md:px-20 py-10 bg-white">
      <div className="max-w-full mx-auto">
        <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4">
          Hechos que dan confianza
        </h2>
        <p className="text-xl text-[var(--color-secondary)] font-medium mb-8">
          Descubra el impacto transformador de invertir en capacitación para sus proyectos de TI
        </p>

        {/* Fila superior: 4 columnas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {topCards.map(item => (
            <Card
              key={item.id}
              iconName={item.iconName}
              title={item.title}
              paragraph={item.paragraph}
            />
          ))}
        </div>

        {/* Fila inferior centrada con 3 columnas */}
        <div className="flex justify-center px-0  md:px-28 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {bottomCards.map(item => (
              <Card
                key={item.id}
                iconName={item.iconName}
                title={item.title}
                paragraph={item.paragraph}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
