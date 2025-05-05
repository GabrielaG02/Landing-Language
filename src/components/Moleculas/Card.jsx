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
  txtBtn='Learn More',
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
          className="w-full sm:h-28/100 md:h-4/10 object-cover mx-auto mb-4"
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
        paragraphWeight="font-semibold"
        subtitleSize="text-lg"
        subtitleColor="text-(--color-black)"
        paragraphSize="text-sm"
        paragraphColor="text-(--color-secondary)"
        subtitleClassName="font-semibold"
        subtitleAlign="text-left"
        paragraphAlign="text-left"
        marginX="mx-6"
        marginB="mb-2"

      />
      {isExpanded && paragraphExtended && (
        <div className="text-left px-6">
          <ul className="list-disc list-inside text-sm text-[var(--color-secondary)]">
            {paragraphExtended
              .split(/\r?\n/)               // 1. Separa por cada salto de línea
              .map(line => line.trim())     // 2. Limpia espacios al inicio/fin
              .filter(line => line !== '')  // 3. Elimina líneas vacías
              .map((item, idx) => (         // 4. Mapea cada línea a un <li>
                <li key={idx}>{item}</li>
              ))
            }
          </ul>
        </div>
      )}

      {/* Solo en la variante principal mostramos el botón */}
      {variant === 'principal' && (
        <div className="w-fit mx-6 mt-3">
          <Button
            text={txtBtn}
            tipo="navbar"
          />
        </div>
      )}
    </div>
  )
}