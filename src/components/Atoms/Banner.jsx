// src/components/Atoms/Banner.jsx
import React, { useState, useEffect } from 'react';
import Icon from './Icon'; // Ajusta la ruta según corresponda

export default function Banner() {
  const [expanded, setExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-timer: se activa solo cuando NO se está haciendo hover
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setExpanded(prev => !prev);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  // Al hacer hover, expandir inmediatamente
  const handleMouseEnter = () => {
    setIsHovered(true);
    setExpanded(true);
  };

  // Al salir del hover, dejar que el timer continúe
  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  const redirectWhatsApp = () => {
    window.open(" https://wa.me/14157244998?text=Hello,%20I%20would%20like%20to%20get%20information%20about%20the%20services%20offered%20by%20Latin%20Language%20Solutions", "_blank");
    setExpanded(prev => !prev);
  };
  return (
    <div className="fixed bottom-5 right-0 z-50">
      <a
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={redirectWhatsApp}
        className={`
          group
          flex items-center
          ${expanded ? 'w-[12rem]' : 'w-18 h-16'}
          rounded-l-full
          bg-(--color-secondary)
          text-white
          overflow-hidden
          transition-all duration-300
          cursor-pointer
          ps-6
        `}
      >
        <Icon
          name="bi bi-whatsapp"
          size="2rem"
          className="text-(--color-light-700) flex-shrink-0"
        />
        <div
          className={`
            ml-2 transition-opacity duration-300 flex flex-col w-full
            ${expanded ? 'opacity-100' : 'opacity-0'}
          `}
        >
          <span className="text-(--color-light-500) font-bold text-base leading-tight">
          Talk to us
          </span>
          <span className="text-sm leading-tight">
          on WhatsApp
          </span>
        </div>
      </a>
    </div>
  );
}
