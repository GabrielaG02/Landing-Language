import React from 'react';
import Info from '../Plantillas/InfoBlog';
import img1 from '../../assets/imgHome2.svg';
import img2 from '../../assets/imgAU2.svg';
import img3 from '../../assets/imgAU3.svg';
import img4 from '../../assets/imgAU5.svg';



function BlogPage() {
  const infoBlogData = [
    {
      id: 'uscis-012025',
      title: 'Actualización de formularios USCIS',
      subtitle:'(ed. 01/20/25)',
      paragraph: `
        El 20 de enero de 2025 entraron en vigor las nuevas ediciones (01/20/25) de los formularios 
        I-360, I-800A, I-800, I-526E, I-526, I-601A, I-601, I-698 y I-829. 
        A partir del 28 de mayo de 2025, solo se aceptarán estas versiones; hasta entonces puedes usar 
        las ediciones anteriores (04/01/24 para la mayoría y 10/17/24 para I-800A e I-800). 
        Revisa siempre la fecha al pie de página de cada formulario y sus instrucciones antes de enviar.
      `,
      linkUrl: 'https://www.uscis.gov/forms/all-forms',
      image: img1,
      imageAlt: 'Formularios USCIS actualizados',
      
    },
    {
      id: 'tps-venezuela',
      title: 'Extensión del TPS para Venezuela',
      subtitle:'(abr. 2025 – oct. 2026)',
      paragraph: `
        El DHS prorrogó el TPS para Venezuela por 18 meses, desde el 3 de abril de 2025 hasta el 2 de octubre de 2026. 
        La reinscripción para beneficiarios actuales está abierta del 17 de enero al 10 de septiembre de 2025. 
        Las solicitudes I-821 e I-765 presentadas antes del 17 de enero de 2025 seguirán procesándose sin 
        tener que volver a presentarlas; de aprobarse, recibirás TPS y EAD hasta el 2 de octubre de 2026.
      `,
      linkUrl: 'https://www.dhs.gov/archive/news/2025/01/10/dhs-extend-temporary-protected-status-venezuela',
      image: img2,
      imageAlt: 'TPS Venezuela'
    },
    {
      id: 'tps-sudan',
      title: 'Extensión del TPS para Sudán ',
      subtitle:'(20 abr. 2025 – 19 oct. 2026)',
      paragraph: `
        El DHS extendió el TPS para Sudán por 18 meses, desde el 20 de abril de 2025 hasta el 19 de octubre de 2026. 
        La reinscripción está abierta del 17 de enero al 18 de marzo de 2025 para los ≈1,900 beneficiarios elegibles. 
        Las autorizaciones de empleo (categorías A12 y C19) con vencimiento hasta el 19 de abril de 2026 se 
        extienden automáticamente. Las I-821 e I-765 presentadas antes del 17 de enero de 2025 seguirán su trámite 
        sin necesidad de volver a aplicarlas.
      `,
      linkUrl: 'https://www.dhs.gov/archive/news/2025/01/10/dhs-extend-temporary-protected-status-sudan',
      image: img3,
      imageAlt: 'TPS Sudán'
    },
    {
      id: 'modernizacion-h',
      title: 'Modernización de H-1B y H-2 e I-129 (ed. 01/17/25)',
      subtitle:'(ed. 01/17/25)',
      paragraph: `
        Desde el 17 de enero de 2025 entraron en vigor las nuevas reglas H-1B y H-2, que agilizan procesos 
        y refuerzan protecciones laborales. Ese mismo día se volvió obligatoria la edición 01/17/25 del 
        Formulario I-129; las versiones 04/01/24 recibidas a partir de esa fecha serán rechazadas. 
        No hay período de gracia: planifica tu presentación con la versión correcta.
      `,
      linkUrl: 'https://www.federalregister.gov/documents/2024/12/18/2024-29354/modernizing-h-1b-requirements-providing-flexibility-in-the-f-1-program-and-program-improvements',
      image: img4,
      imageAlt: 'Modernización H-1B y H-2'
    }
  ];

  return (
    <div>
      <Info items={infoBlogData} />
    </div>
  );
}
export default BlogPage