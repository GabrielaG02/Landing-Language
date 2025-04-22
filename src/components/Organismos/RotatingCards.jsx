// RotatingCards.jsx
import React, { useState, useRef, useLayoutEffect } from 'react'
import Card from '../Moleculas/Card'  // ajusta la ruta según tu estructura

export default function RotatingCards({ cards }) {
  // cards: el array que antes llamabas topCards
  const [items, setItems]       = useState(cards)
  const [expandedId, setExpandedId] = useState(null)
  const positionsRef            = useRef(null)
  const itemRefs                = useRef({})

  // FLIP: se dispara tanto al cambiar el orden (items) como al expandir/colapsar (expandedId)
  useLayoutEffect(() => {
    const prev = positionsRef.current
    if (!prev) return

    // “Last”
    const next = {}
    items.forEach(item => {
      next[item.id] = itemRefs.current[item.id].getBoundingClientRect()
    })

    // invert & play
    items.forEach(item => {
      const el = itemRefs.current[item.id]
      const dx = prev[item.id].left - next[item.id].left
      const dy = prev[item.id].top  - next[item.id].top

      // 1) invert + centering
      el.style.transition = 'transform 0s'
      el.style.transform  = `translate(${dx}px, ${dy}px) translate(-50%, -50%)`

      // 2) play → solo transform
      el.getBoundingClientRect()
      el.style.transition = 'transform 500ms ease-in-out'
      el.style.transform  = 'translate(-50%, -50%)'
    })

    positionsRef.current = null
  }, [items, expandedId])

  const handleClick = (idx) => {
    const clicked = items[idx]

    // 1) FIRST: guardamos posiciones
    const prev = {}
    items.forEach(item => {
      prev[item.id] = itemRefs.current[item.id].getBoundingClientRect()
    })
    positionsRef.current = prev

    // 2) si no era el primero, reordenamos
    if (idx !== 0) {
      setItems([ clicked, ...items.filter((_, i) => i !== idx) ])
    }

    // 3) toggle expand/collapse
    setExpandedId(expandedId === clicked.id ? null : clicked.id)
  }

  const handleClose = (e) => {
    e.stopPropagation()

    // FIRST para colapsar
    const prev = {}
    items.forEach(item => {
      prev[item.id] = itemRefs.current[item.id].getBoundingClientRect()
    })
    positionsRef.current = prev

    setExpandedId(null)
  }

  return (
    <div className="relative justify-self-center w-110/100 h-[70vh] overflow-hidden">
      {items.map((item, index) => {
        const isExpanded = item.id === expandedId
        const spacing    = 100 / (cards.length + 1)        // 25% para 3 elementos
        const leftPct    = isExpanded
          ? 50                                             // centro al expandir
          : (index + 1) * spacing                         // 25,50,75% en estado normal

        return (
          <div
            key={item.id}
            ref={el => itemRefs.current[item.id] = el}
            onClick={() => handleClick(index)}
            className="
              absolute top-1/2 cursor-pointer
              transition-transform duration-500 ease-in-out
            "
            style={{
              left:      `${leftPct}%`,
              transform: 'translate(-50%, -50%)',
              zIndex:    cards.length - index,
              height:    '80%',
            }}
          >
            <Card
              iconName={item.iconName}
              imageSrc={item.imageSrc}
              imageAlt={item.imageAlt}
              title={item.title}
              paragraph={item.paragraph}
              span={item.span}
              variant="principal"
              isExpanded={isExpanded}
              onLearnMore={() => handleClick(index)}
              onClose={handleClose}
              extraClasses={`
                transition-all duration-500 ease-in-out
                ${isExpanded ? 'w-[5vw]' : 'w-[22vw]'}
              `}
            />
          </div>
        )
      })}
    </div>
  )
}
