// DynamicExpander.jsx
import React, { useState, useEffect } from 'react'
import Card from '../Moleculas/Card.jsx'

export default function DynamicExpander({ cards = [] }) {
  const [expandedId, setExpandedId] = useState(null)
  const [columns, setColumns] = useState(1)

  const cardHeightVh = 80

  // Determina el número de columnas según el ancho
  const updateColumns = () => {
    const w = window.innerWidth
    if (w >= 1024) setColumns(4)
    else if (w >= 768) setColumns(3)
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

  // *** Aquí usamos cards en lugar de initialItems ***
  const rows = Math.ceil(cards.length / columns)
  const containerHeightVh = rows * cardHeightVh

  return (
    <div
      className="relative lg:w-[80vw] mx-auto transition-all duration-500 ease-in-out"
      style={{ height: `${containerHeightVh}vh` }}
    >
      {cards.map((item, i) => {
        const isExpanded = item.id === expandedId
        const colIndex = i % columns
        const rowIndex = Math.floor(i / columns)
        const colWidth = 100 / columns
        const top = rowIndex * cardHeightVh

        return (
          <div
            key={item.id}
            onClick={() => handleClick(item.id)}
            className="absolute cursor-pointer transition-all duration-500 ease-in-out px-[1vw] pb-[2vh]"
            style={{
              left: isExpanded ? '0%' : `${colIndex * colWidth}%`,
              top: `${top}vh`,
              width: isExpanded ? '100%' : `${colWidth}%`,
              height: `${cardHeightVh}vh`,
              zIndex: isExpanded ? 10 : 1,
            }}
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
              /* unimos cualquier clase extra de item.span con la anulación de min-h y altura full */
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