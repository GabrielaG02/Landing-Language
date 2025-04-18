import React from 'react';
import Button from '../Atoms/Button';
import TextBlock from '../Atoms/TextBlock';

const SlideExpand = ({ slide, expanded, toggleExpand, handlePrev, handleNext }) => {
    return (
        <div className={`${expanded ? 'w-full' : 'md:w-full'} mt-8  md:mt-0 space-y-10 relative `}>
            {/* Mostrar flechas sólo si no está expandido */}
            <div className='space-x-3'>
            {!expanded &&  (
                <>
                    <Button
                        tipo="icon"
                        iconName="bi bi-chevron-compact-left"
                        onClick={handlePrev}
                    />
                    <Button
                        tipo="icon"
                        iconName="bi bi-chevron-compact-right"
                        onClick={handleNext}
                    />
                </>
            )}

            </div>

            <div className='space-y-2'>

<div>
<h2 className="text-5xl font-semibold text-(--color-secondary)">
                {slide.title}
            </h2>
            <p className="text-3xl text-(--color-neutral-900) font-semibold uppercase tracking-wide">
                {slide.subtitle}
            </p>

</div>


            {/* Contenido: Versión contraída o expandida */}
            {expanded ? (
                // Versión expandida: varios párrafos (fullText)
                <div className="mt-4 space-y-2 text-xl  text-[var(--color-neutral-800)]">
                    {slide.fullText.map((p, idx) => (
                        <p key={idx}>{p}</p>
                    ))}
                </div>
            ) : (
                // Versión contraída: texto corto (shortText)
                <p className="mt-6 text-lg text-[var(--color-neutral-800)]">
                    {slide.shortText}
                </p>
            )}

            </div>
            {/* Título y subtítulo */}

            {/* Botones: "Leer más / Leer menos" y flechas */}
            <div className="flex items-center space-x-4 mt-4">
                <Button
                    text={expanded ? "Leer menos -" : "Leer más +"}
                    onClick={toggleExpand}
                    tipo="primario"
                />


            </div>
        </div>
    );
};

export default SlideExpand;