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
          w-[75vw] h-fit pb-10 min-h-[55vh]
          sm:w-[45vw] sm:min-h-full
          md:w-[28vw] lg:w-[25vw]
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
