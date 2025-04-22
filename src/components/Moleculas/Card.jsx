// Card.jsx
import React from 'react'
import Icon from '../Atoms/Icon.jsx'
import TextBlock from '../Atoms/TextBlock.jsx'
import Button from '../Atoms/Button.jsx'

export default function Card({
  iconName,
  imageSrc,
  imageAlt = '',
  title,
  paragraph,
  paragraphExtended,   // <–– nuevo
  isExpanded = false,   // <–– nuevo, por defecto false
  span = '',
  variant = 'principal',      // <-- nuevo prop
}) {
  // clases comunes a todas las cards
  const baseClasses = `
    flex flex-col

    rounded-xl shadow-sm text-center overflow-hidden
  `

  // estilos por variante
  const variantClasses = {
    principal: `
      bg-[var(--color-white)]
          pb-10 
          min-h-[55vh] sm:min-h-[65vh]
          mx-auto
    `,
    comentarios: `
      bg-[var(--color-secondary-100)]
      border-2 border-(--color-secondary)
    `,
  }

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${span}`}>
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-1/2 object-cover mx-auto mb-4"
        />
      ) : (
        <Icon
          name={iconName}
          size="2rem"
          className="text-(--color-primary) mb-4"
        />
      )}

      <TextBlock
        subtitle={title}
        paragraph={paragraph}
        subtitleSize="text-lg"
        subtitleColor="text-(--color-black)"
        paragraphSize="text-base"
        paragraphColor="text-(--color-secondary)"
        subtitleClassName="font-semibold"
        subtitleAlign="text-left"
        paragraphAlign="text-left"
      />
      {isExpanded && paragraphExtended && (
        <div className="mt-4 text-left px-4">
          <h4 className="font-semibold text-base mb-1">Más información</h4>
          <p className="text-sm text-[var(--color-secondary)]">
            {paragraphExtended}
          </p>
        </div>
      )}

      {/* Solo en la variante principal mostramos el botón */}
      {variant === 'principal' && (
        <div className="w-fit mx-6 mt-auto">
          <Button
            text="Contact Us"
            tipo="primario"
          />
        </div>
      )}
    </div>
  )
}