// DynamicExpander.jsx (actualizado)
import React, { useState, useEffect } from 'react'
import Card from '../Moleculas/Card.jsx'

export default function DynamicExpander({ cards = [] }) {
  const [expandedId, setExpandedId] = useState(null)
  const [columns, setColumns] = useState(1)
  const cardHeightVh = 570

  // Ajusta columnas según ancho
  const updateColumns = () => {
    const w = window.innerWidth
    if (w >= 768) setColumns(3)
    else if (w >= 640) setColumns(2)
    else setColumns(1)
  }

  useEffect(() => {
    updateColumns()
    window.addEventListener('resize', updateColumns)
    return () => window.removeEventListener('resize', updateColumns)
  }, [])

  const handleClick = (id) =>
    setExpandedId(prev => (prev === id ? null : id))

  // Cálculo de altura solo para columns > 1
  const rows = Math.ceil(cards.length / columns)
  const containerHeightVh = rows * cardHeightVh

  return (
    <div
      className={`
        lg:w-[80vw] mx-auto transition-all duration-500 ease-in-out
        ${columns === 1 ? '' : 'relative'}
      `}
      style={columns === 1 ? {} : { height: `${containerHeightVh}px` }}
    >
      {cards.map((item, i) => {
        const isExpanded = item.id === expandedId
        const colIndex = i % columns
        const rowIndex = Math.floor(i / columns)
        const colWidth = 100 / columns
        const top = rowIndex * cardHeightVh

        // Solo en desktop/tablet usamos posicionamiento absoluto
        const absoluteStyle = columns === 1 ? {} : {
          left: isExpanded ? '0%' : `${colIndex * colWidth}%`,
          top: `${top}px`,
          width: isExpanded ? '100%' : `${colWidth}%`,
          height: `${cardHeightVh}px`,
          zIndex: isExpanded ? 10 : 1,
        }

        return (
          <div
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={`
              cursor-pointer transition-all duration-500 ease-in-out
              px-[1vw] pb-[2vh]
              ${columns === 1 ? 'static h-auto' : 'absolute'}
            `}
            style={absoluteStyle}
          >
            <Card
              imageSrc={item.imageSrc}
              imageAlt={item.imageAlt}
              iconName={item.iconName}
              title={item.title}
              paragraph={item.paragraph}
              paragraphExtended={item.paragraphExtended}
              isExpanded={isExpanded}
              variant="principal"
              txtBtn={isExpanded ? 'Close' : 'Learn More'}
              span={`${item.span ?? ''} !min-h-0 h-full`}
            />
            {isExpanded && (
              <button
                onClick={e => { e.stopPropagation(); handleClick(item.id) }}
                className="absolute top-[2vh] right-[2vw] bg-white text-black rounded-full w-4 h-4 flex items-center justify-center z-1"
              >
                ×
              </button>
            )}
          </div>
        )
      })}
    </div>
  )
}
