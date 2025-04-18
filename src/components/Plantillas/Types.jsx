import React, { useState, useEffect } from 'react';
import SlideExpand from '../Organismos/SlideExpand';

const slidesData = [
  {
    id: 1,
    title: "SAP ABAP ",
    subtitle: "¿Para qué sirve el módulo SAP ABAP? ",
    shortText: "Crear nuevas transacciones que no existen en el estándar de SAP, pero también sirve para ampliar transacciones que ya existen en el estándar cuando la funcionalidad que proveen es insuficiente para su negocio. SAP FI engloba finanzas y contaduría, llevando un control detallado de cuentas por cobrar, cuentas por pagar, activos fijos, etc.",
    fullText: [
      "Crear nuevas transacciones que no existen en el estándar de SAP, pero también sirve para ampliar transacciones que ya existen en el estándar cuando la funcionalidad que proveen es insuficiente para su negocio.",
      "¿Para qué sirve el módulo SAP ABAP? ",
      "SAP FI engloba finanzas y contaduría, llevando un control detallado de cuentas por cobrar, cuentas por pagar, activos fijos, etc.",
      "Dirigido a:  ",
      "- Cualquier persona que no tenga conocimientos previos de SAP. ",
      "- Para aquellos que están dando sus primeros pasos y desean incorporarse al mundo SAP. ", 
      "- Orientado a personas con conocimientos en TI, logísticos y funcionales. - Si desea iniciarse en el mundo SAP, este curso es un excelente punto de partida porque le permitirá obtener un completo panorama global del sistema a nivel de usuario final. ",
      "- Si ya está involucrado en SAP a nivel Técnico o Funcional, este curso elevará sus conocimientos de SAP a un nivel global del producto.",
      "Beneficios: ",
      "Mejor visibilidad financiera, informes en tiempo real y automatización de procesos contables."
    ]
  },
  {
    id: 2,
    title: "SAP MM  ",
    subtitle: "SOURCING AND PROCUREMENT",
    shortText: "Este módulo centrado en el área de logística, permite controlar el stock y los procesos de entrada de materiales y productos en una empresa. Las MM hacen referencia a Materials Management, e incluye la planificación de compras, verificación de facturas o distribución de mercancías. ",
    fullText: [
      "Este módulo centrado en el área de logística, permite controlar el stock y los procesos de entrada de materiales y productos en una empresa. Las MM hacen referencia a Materials Management, e incluye la planificación de compras, verificación de facturas o distribución de mercancías.",
      "¿Por qué sirve el módulo SAP MM?",
      "El módulo SAP MM permite manejar todos los procesos asociados a la adquisición de bienes y contratación de servicios que realiza una empresa. Por ejemplo, gestiona el stock, verifica facturas o controla la entrada de mercancías, entre otras muchas cosas.",
      "Por otro lado, SAP MM también permite procesar una solicitud de pedido, recibirla, convertirla en pedidos a proveedores y registrar su factura. Las diferentes tareas y procesos que se realizan con este software de gestión empresarial reciben comúnmente el nombre de transacciones. En concreto, algunas de las que permite realizar SAP MM son: ",
      "Manejo de solicitud de pedidos",
      "Gestión de cotizaciones",
      "Comparación de dichas cotizaciones",
      "Realización de pedidos de compra",
      "Tramitación de facturas ",
      "Para realizar cualquiera de estas u otras operaciones en SAP MM es necesario definir ciertos datos maestros. ¿Cuáles son estos datos? Pues aquellos apuntes generales de un material o proveedor, tales como su dirección, número de teléfono o información bancaria.",
      "Dirigido a:", 
      "Cualquier persona que no tenga conocimientos previos de SAP.",
      "Para aquellos que están dando sus primeros pasos y desean incorporarse al mundo SAP.",
      "Orientado a personas con conocimientos en TI, logísticos y funcionales.",
      "Si desea iniciarse en el mundo SAP, este curso es un excelente punto de partida porque le permitirá obtener un completo panorama global del sistema a nivel de usuario final." ,
      "Si ya está involucrado en SAP a nivel Técnico o Funcional, este curso elevará sus conocimientos de SAP a un nivel global del producto."
    ]
  },
  {
    id: 3,
    title: "SAP FI",
    subtitle: "FINANCIAL ACCOUNTING ",
    shortText: "El módulo SAP FI permite controlar los procesos financieros y contables, gestionar las cuentas o definir los planes para realizar cálculos y estimacionesEl módulo SAP FI permite controlar los procesos financieros y contables, gestionar las cuentas o definir los planes para realizar cálculos y estimaciones. ",
    fullText: [
      "El módulo SAP FI permite controlar los procesos financieros y contables, gestionar las cuentas o definir los planes para realizar cálculos y estimacionesEl módulo SAP FI permite controlar los procesos financieros y contables, gestionar las cuentas o definir los planes para realizar cálculos y estimaciones.",
      "¿Para qué sirve el módulo SAP FI? ",
      "SAP FI englobaba las finanzas y la contaduría de las empresas, luego con el tiempo cada área creció demasiado dentro del Sistema SAP y fue imperioso separarlos, por ello ahora tenemos SAP FI por un lado y SAP CO por otro. ",
      "El objetivo del módulo FI de SAP es ofrecer en tiempo real la situación real financiera de la empresa. Algo imprescindible cuando el negocio alcanza cierto volumen y complejidad. Esta visión de la empresa permite planificar y tomar mejores decisiones.",
      "Dirigido a:",
      "- Cualquier persona que no tenga conocimientos previos de SAP",
      "- Para aquellos que están dando sus primeros pasos y desean incorporarse al mundo SAP",
      "- Orientado a personas con conocimientos en TI, logísticos y funcionales.",
      "- Si desea iniciarse en el mundo SAP, este curso es un excelente punto de partida porque le permitirá obtener un completo panorama global del sistema a nivel de usuario final.",
      "- Si ya está involucrado en SAP a nivel Técnico o Funcional, este curso elevará sus conocimientos de SAP a un nivel global del producto. ",
    ]
  },
  {
    id: 4,
    title: "SAP SD",
    subtitle: "SALES AND DISTRIBUTION ",
    shortText: "El nombre de SAP SD procede de Sales and Distribution (Ventas y Distribución). Se trata del módulo de SAP destinado a gestionar todas aquellas tareas que involucran ventas y distribución de productos y/o servicios. El módulo SD enfocado en ventas y distribución es uno de los más empleados dentro del programa SAP.",
    fullText: [
      "¿Para qué sirve el módulo SAP SD? ",
      "El módulo SD enfocado en ventas y distribución es uno de los más empleados dentro del programa SAP, puesto que facilita una gestión más efectiva y optimizada para la comercialización y ventas de servicios o productos. ",
      "A raíz de esto, es factible tomar decisiones inteligentes en cuanto a la operatividad de los ciclos de ventas o las estrategias de mercadeo para la marca o empresa, ya sea para potenciar mejores ofertas, acelerar las entregas de los productos o afianzar la relación entre el cliente y empresa. ",
      "Sin olvidar que cada una de estas acciones está completamente respaldada en una base de datos con la información correspondiente, garantizando así la disminución de errores dentro y fuera de las ventas o distribución.",
      "Además, el módulo SD de SAP se comunica directamente con los otros módulos pertenecientes al programa SAP, pues sólo así será posible compaginar todos los elementos de una empresa, desde sus precios, estado de cuenta, disponibilidad en stock y otros aspectos.",
      "Dirigido a:",
      "- Cualquier persona que no tenga conocimientos previos de SAP.",
      "- Para aquellos que están dando sus primeros pasos y desean incorporarse al mundo SAP.",
      "- Orientado a personas con conocimientos en TI, logísticos y funcionales.",
      "- Si desea iniciarse en el mundo SAP, este curso es un excelente punto de partida porque le permitirá obtener un completo panorama global del sistema a nivel de usuario final",
      "- Si ya está involucrado en SAP a nivel Técnico o Funcional, este curso elevará sus conocimientos de SAP a un nivel global del producto."
    ]
  },
  {
    id: 5,
    title: "SAP HCM",
    subtitle: "HUMAN CAPITAL MANAGEMENT",
    shortText: "Es el módulo de gestión del capital humano SAP, cuenta con todas las funcionalidades necesarias para una adecuada gestión del capital humano de cualquier organización en los relacionado a administración de personal, nómina, desarrollo de personal, reclutamiento y selección.",
    fullText: [
      "Es el módulo de gestión del capital humano SAP, cuenta con todas las funcionalidades necesarias para una adecuada gestión del capital humano de cualquier organización en los relacionado a administración de personal, nómina, desarrollo de personal, reclutamiento y selección.",
      "¿Para qué sirve el módulo SAP HCM? ",
      "Como todo módulo de SAP se integra a todos los demás módulos de este sistema ERP (Enterprise Resource Planning, planificación de recursos empresariales), lo que le permite vincularse estrechamente a la estructura organizativa de la empresa, permitiéndole automatizar todos los procesos relacionados con la gestión de capital humano.  ",
      "Como toda solución SAP, el módulo SP HCM está diseñado para dar una solución efectiva a las necesidades específicas del área de recursos humanos de cada empresa, permitiendo optimizar los procesos para hacerlos más eficientes, e integrarlos a los demás procesos de la empresa, esta solución se adapta a empresas de todos los tamaños y sectores. ",
      "Una de las ventajas de SAP HCM es que permite impulsar un cambio radical en la forma como se administra el talento humano de la empresa, desarrollando procesos funcionales que ayudan a mejorar la relación con la fuerza laboral e impulsan el nivel de productividad, todo ello en función de los objetivos de la empresa.",
      "Dirigido a:",
      "- Cualquier persona que no tenga conocimientos previos de SAP.",
      "- Para aquellos que están dando sus primeros pasos y desean incorporarse al mundo SAP",
      "- Orientado a personas con conocimientos en TI, logísticos y funcionales.",
      "- Si desea iniciarse en el mundo SAP, este curso es un excelente punto de partida porque le permitirá obtener un completo panorama global del sistema a nivel de usuario final.",
      "- Si ya está involucrado en SAP a nivel Técnico o Funcional, este curso elevará sus conocimientos de SAP a un nivel global del producto.",
    ]
  },
  {
    id: 6,
    title: "SAP PM",
    subtitle: "PLANT MAINTENANCE",
    shortText: "Es el módulo del Sistema SAP encargado de gestionar Mantenimiento de Plantas Industriales, sus siglas provienen de “Plant Maintenance. El módulo de Mantenimiento de Plantas del programa SAP incluye las medidas de control que establecen las condiciones de trabajo de un sistema técnico o maquinaria.",
    fullText: [
      "Es el módulo del Sistema SAP encargado de gestionar Mantenimiento de Plantas Industriales, sus siglas provienen de “Plant Maintenance” ",
      "Introducción ",
      "El módulo de Mantenimiento de Plantas del programa SAP incluye las medidas de control que establecen las condiciones de trabajo de un sistema técnico o maquinaria. El módulo también incluye medidas de mantenimiento preventivo y medidas de reparación, que se ponen en su lugar para mantener la condición ideal de cada máquina y restaurarlas a su estado ideal si han sufrido daños.",
      "¿Para qué sirve el módulo SAP PM? ",
      "- Racionalizar la gestión de averías ",
      "- Obtener datos de vida útil de los componentes, para poder dimensionar un stock de repuesto ",
      "- Para aquellos que están dando sus primeros pasos y desean incorporarse al mundo SAP",
      "- Desarrollar el flujo de mantenimiento planificados y no planificados en el sistema",
      "- Conocer la carga real de trabajo del departamento de mantenimiento para poder priorizar los trabajos",
      "- Disponer de informes estadísticos que faciliten la toma de decisiones ",
      "Dirigido a: ",
      "Cualquier persona que no tenga conocimientos previos de SAP. ",
      "Para aquellos que están dando sus primeros pasos y desean incorporarse al mundo SAP.",
      "Orientado a personas con conocimientos en TI, logísticos y funcionales. ",
      "Si desea iniciarse en el mundo SAP, este curso es un excelente punto de partida porque le permitirá obtener un completo panorama global del sistema a nivel de usuario final. ",
      "Si ya está involucrado en SAP a nivel Técnico o Funcional, este curso elevará sus conocimientos de SAP a un nivel global del producto. "
    ]
  },
  {
    id: 6,
    title: "SAP PS",
    subtitle: "PROJECT SYSTEMS",
    shortText: "La herramienta de gestión de proyectos SAP Project System (SAP PS) facilita dirigir los recursos en cada etapa del proyecto con el fin de controlar y garantizar su entrega puntual. SAP PS contiene funciones para planificar, controlar y organizar todas las actividades durante todo el recorrido de un proyecto.",
    fullText: [
      "La herramienta de gestión de proyectos SAP Project System (SAP PS) facilita dirigir los recursos en cada etapa del proyecto con el fin de controlar y garantizar su entrega puntual. ",
      "¿Para qué sirve el módulo SAP PS?",
      "SAP PS contiene funciones para planificar, controlar y organizar todas las actividades durante todo el recorrido de un proyecto. SAP PS ayuda al administrador del proyecto a contar con informaciones de estructura, fechas, costos y recursos a través de todas las etapas por donde pasa un proyecto.",
      "Por tanto, la mayoría de los objetos de SAP PS (Elementos PEP, Centros de Trabajo, actividades, elementos de actividades) se tratan Objetos de Coste similares a los Centros de Coste de SAP CO, mientras que los Centros de Trabajo tienen una planificación y una funcionalidad de gestión de recursos muy similar a la de PP.",
      "¿Qué habilidades puedes desarrollar?",
      "- Configura los perfiles de cada proyecto. ",
      "- Costruye una estructura de proyecto. ",
      "- Tareas del proyecto en sus diferentes fases de forma óptima.",
      "- Integración con los módulos SAP SD, SAP MM, SAP CO Y SAP IM/AM",
      "Dirigido a:",
      "- Cualquier persona que no tenga conocimientos previos de SAP.",
      "- Para aquellos que están dando sus primeros pasos y desean incorporarse al mundo SAP.",
      "- Orientado a personas con conocimientos en TI, logísticos y funcionales. ",
      "- Si desea iniciarse en el mundo SAP, este curso es un excelente punto de partida porque le permitirá obtener un completo panorama global del sistema a nivel de usuario final. ",
      "- Si ya está involucrado en SAP a nivel Técnico o Funcional, este curso elevará sus conocimientos de SAP a un nivel global del producto. "
    ]
  },
  {
    id: 7,
    title: "SAP BASIS",
    shortText: "SAP Basis se refiere a la base técnica de las aplicaciones SAP y a los cimientos de las mismas. La mejor forma de empezar a hablar sobre SAP BASIS, es mediante el análisis de las interrogantes básicas que definen a Basis y al ambiente laboral de las personas que se desarrollan en él. Cuando hablamos de SAP Basis, hacemos referencia a la base técnica de las aplicaciones SAP y a los cimientos de las mismas.",
    fullText: [
      "Introducción",
      "La mejor forma de empezar a hablar sobre SAP BASIS, es mediante el análisis de las interrogantes básicas que definen a Basis y al ambiente laboral de las personas que se desarrollan en él. Cuando hablamos de SAP Basis, hacemos referencia a la base técnica de las aplicaciones SAP y a los cimientos de las mismas. SAP BASIS es la forma “clásica” de referenciar a la Administración de la plataforma operativa del sistema. Esta plataforma es llamada actualmente plataforma SAP NETWEAVER ",
      "Son las personas que se encargan de la Administración de la plataforma operativa SAP Netweaver, para que la misma funcione correctamente y de una manera óptima siempre.",
      "Son los responsables de la integridad del sistema, debiendo instalar, mantener y actualizar el sistema incluyendo tareas como backup de los datos para respaldar la información de todo el modelo empresario implementado.",
      "¿Cuáles son las tareas principales de SAP BASIS?",
      "Configuración y posterior mantenimiento del “Sistema de Transporte”, con el cual aseguramos la integridad de los cambios en los “ambientes de desarrollo, testing y productivo”. ",
      "- Administración de usuarios y permisos.",
      "- Análisis de procesos del sistema.",
      "- Dumps de aplicaciones.",
      "- Logs en general.",
      "- Mantenimiento de estrategias de backup.",
      "- Administración de alertas.",
      "Es por ello que las empresas que utilizan SAP deben tener en cuenta la importancia de contar con un área técnica SAP BASIS, ya que ellos, serán los responsables de analizar el rendimiento, disponibilidad, seguridad y performance entre otras cosas ",
    ]
  },
  {
    id: 8,
    title: "SAP WM",
    subtitle: "WAREHOUSE MANAGEMENT",
    shortText: "SAP WM es la funcionalidad que SAP ofrece para la gestión de inventario en ubicaciones. Gestiona y controla todo tipo de almacenes: manuales y automáticos, con o sin radiofrecuencia y mixtos, llevando la supervisión, planificación y control de los mismos. ",
    fullText: [
      "SAP WM permite subdividir los Almacenes de Gestión de Inventario de SAP en diferentes ubicaciones específicas y al mismo tiempo ofrece toda la funcionalidad relacionada con la entrada y salida de mercancías de los mismos. Contiene también diferentes funcionalidades de integración con el resto de los módulos logísticos (SAP PP, SAP SD, SAP QM, etc). en la Gestión de Stocks, Expediciones y Producción. ",
      "Dirigido a:",
      "- Cualquier persona que no tenga conocimientos previos de SAP.",
      "- Para aquellos que están dando sus primeros pasos y desean incorporarse al mundo SAP.",
      "- Orientado a personas con conocimientos en TI, logísticos y funcionales. ",
      "- Si desea iniciarse en el mundo SAP, este curso es un excelente punto de partida porque le permitirá obtener un completo panorama global del sistema a nivel de usuario final.",
      "- Si ya está involucrado en SAP a nivel Técnico o Funcional, este curso elevará sus conocimientos de SAP a un nivel global del producto. "
    ]
  },
  {
    id: 9,
    title: "SAP PP",
    subtitle: "PRODUCTION PLANNING",
    shortText: "SAP PP (gestión de la producción) es el módulo destinado a la planificación y control diaria de las plantas de producción de una empresa. En cualquier compañía de perfil productivo, cuando hablamos de fabricación, tenemos que alinear y gestionar diferentes recursos y procesos. ",
    fullText: [
      "Introducción ",
      "En cualquier compañía de perfil productivo, cuando hablamos de fabricación, tenemos que alinear y gestionar diferentes recursos y procesos. La naturaleza y limitaciones de estos recursos están determinadas por las decisiones estratégicas que toma la estructura directiva de la compañía. Dentro de SAP ERP el día a día de la gestión de las plantas de producción se enmarca dentro del módulo de Control y Planificación de la Producción de SAP (SAP PP). El objetivo de SAP PP es asegurar que la producción se lleva a cabo de forma efectiva, alineando los procesos de producción con los tiempos de entrega prometidos a los clientes.",
      "Respecto a las Órdenes de Fabricación, el módulo PP da la suficiente flexibilidad como para confirmar las órdenes con y sin retroactividad. Los materiales pueden ser llevados del almacén a la planta de fabricación después de lanzar la orden. La parte de contabilidad asociada a la producción puede ser calculada automáticamente a través de la integración con el componente de Contabilidad de Costes. ",
      "Siguiendo esta línea, la integración con otros módulos como Gestión de Materiales (MM), Finanzas (FI), Gestión de Recursos Humanos (HCM), Ventas y Distribución (SD) etc dota de fiabilidad al sistema de planificación de la producción en SAP R/3. Todo ello en tiempo real. Los posibles cambios en la parte de la demanda (órdenes de venta canceladas o añadidas a última hora) y de aprovisionamiento (devoluciones, retrasos, averías en las instalaciones…) son reflejados en tiempo real. Evidentemente, las personas encargadas del control de la producción pueden reaccionar antes ante posibles cambios o incidencias de última hora. ",
      "Vemos pues la conveniencia del módulo de Planificación y Control de la Producción en cualquier empresa que cuente con procesos de tipo productivo o industrial. Este módulo se complementa con el de Mantenimiento de Planta (Plant Maintenance PM)",
      "PP consta de varios sub-módulos que a su vez se integran con otros componentes de SAP. Destacamos los siguientes: ",
      "Datos Maestros: ",
      "Incluye maestros de materiales, centros de trabajo, hojas de ruta y facturación de materiales. ",
      "DRP Planificación de Recursos de Distribución: ",
      "Permite planificar la demanda de los centros de distribución.",
      "Planificación de la Producción:",
      "Incluye previsión de materiales, gestión de la demanda, planificación a largo plazo y plan maestro de producción (MPS). ",
      "MRP Planificación de Requerimientos de Materiales: ",
      "Relaciona los elementos de demanda y aprovisionamiento con los algoritmos de cálculo de la producción para calcular los requerimientos netos de materiales para la producción programada.",
      "Control de Planta (Shop Floor Control):",
      "Incluye el procesado de órdenes de producción, movimientos de bienes, confirmaciones y herramientas de reporte para la producción.",
      "Planificador de Capacidad (Capacity Planning):",
      "Evalúa la capacidad de producción utilizada basándose en la capacidad disponible de los diferentes centros de trabajo y pools de capacidad. ",
      "Fabricación Repetitiva (Repetitive Manufacturing): ",
      "Con el modelo de fabricación repetitiva, el proceso de fabricación es generalmente más simple ya que los mismos artículos son producidos durante un largo periodo de tiempo. Este módulo provee las transacciones y procesos de negocio para compañías cuya producción sigue el modelo de fabricación repetitiva. ",
      "KANBAN:",
      "Se refiere al proceso de reabastecimiento basado en el sistema de etiquetas Kanban (link)."
    ]
  },
  {
    id: 10,
    title: "SAP BI",
    subtitle: "ANALYTICS ",
    shortText: "Con SAP BI, su negocio pueden unificar enormes cantidades de información de diferentes fuentes y proporcionar informes y análisis centrados en la toma de decisiones. SAP BI pone a su disposición de una solución capaz de llegar al último empleado de su empresa y poner a su disposición dashboards que se pueden integrar incluso con Excel",
    fullText: [
      "Con SAP BI, su negocio pueden unificar enormes cantidades de información de diferentes fuentes y proporcionar informes y análisis centrados en la toma de decisiones.",
      "SAP BI pone a su disposición de una solución capaz de llegar al último empleado de su empresa y poner a su disposición dashboards que se pueden integrar incluso con Excel",
      "Dirigido a:",
      "- Cualquier persona que no tenga conocimientos previos de SAP.",
      "- Para aquellos que están dando sus primeros pasos y desean incorporarse al mundo SAP.",
      "- Orientado a personas con conocimientos en TI, logísticos y funcionales. ",
      "- Si desea iniciarse en el mundo SAP, este curso es un excelente punto de partida porque le permitirá obtener un completo panorama global del sistema a nivel de usuario final.",
      "- Si ya está involucrado en SAP a nivel Técnico o Funcional, este curso elevará sus conocimientos de SAP a un nivel global del producto. "
    ]
  },
  {
    id: 11,
    title: "SAP CO",
    subtitle: "CONTROLLING",
    shortText: "SAP CO posibilita la gestión y configuración de datos maestros que cubren los estados de costes y beneficios, órdenes internas y demás elementos asociados a los costes y áreas funcionales de la empresa. En sus inicios, el módulo CO no constituía un módulo independiente si no que se encontraba integrado en el Módulo de Finanzas (FI) bajo la denominación FICO .",
    fullText: [
      "SAP CO posibilita la gestión y configuración de datos maestros que cubren los estados de costes y beneficios, órdenes internas y demás elementos asociados a los costes y áreas funcionales de la empresa. ",
      "Introducción",
      "En sus inicios, el módulo CO no constituía un módulo independiente si no que se encontraba integrado en el Módulo de Finanzas (FI) bajo la denominación FICO sin embargo su rápido crecimiento hizo necesaria su independencia de tal forma que ahora nos encontramos ante dos módulos diferenciados: CO o Control de Gestión por un lado, y FI o Finanzas por el otro. ",
      "¿Para qué sirve el módulo SAP CO?",
      "Como has podido ver, el módulo SAP CO es un producto utilizado en el área contable de una empresa. Sirve para que estas puedan gestionar su estructura de costos y tomar decisiones en base a ellos.",
      "Por ejemplo, permite documentos los procesos financieros en tiempo real, estimar costos de producción o analizar los flujos de pérdidas y beneficios. ",
      "Los diferentes procesos y tareas que permite realizar el módulo SAP CO hace que se divida en diferentes submódulos, que son: ",
      "Dirigido a:",
      "- Cualquier persona que no tenga conocimientos previos de SAP.",
      "- Para aquellos que están dando sus primeros pasos y desean incorporarse al mundo SAP.",
      "- Orientado a personas con conocimientos en TI, logísticos y funcionales. ",
      "- Si desea iniciarse en el mundo SAP, este curso es un excelente punto de partida porque le permitirá obtener un completo panorama global del sistema a nivel de usuario final.",
      "- Si ya está involucrado en SAP a nivel Técnico o Funcional, este curso elevará sus conocimientos de SAP a un nivel global del producto. "    ]
  },
  {
    id: 12,
    title: "SAP HANA",
    shortText: "SAP HANA se refiere a una plataforma de datos en memoria que se puede implementar como un dispositivo, ya sea en local o en el Cloud. SAP HANA es una solución moderna y madura usada por decenas de miles de clientes en todo el mundo. Pero SAP HANA es mucho más que solo una base de datos.  ",
    fullText: [
      "¿Para qué sirve el módulo SAP HANA?",
      "SAP HANA es una solución moderna y madura usada por decenas de miles de clientes en todo el mundo. Pero SAP HANA es mucho más que solo una base de datos. Además de actuar como servidor de base de datos, de almacenar y de recuperar datos solicitados por las aplicaciones, SAP HANA ofrece capacidades avanzadas de búsqueda, analíticas e integración de datos para todos los tipos de datos –estructurados y no estructurados–. También funciona como un servidor de aplicaciones y ayuda a las empresas a desarrollar aplicaciones inteligentes impulsadas por información estratégica y basadas en datos en tiempo real, computación in-memory y tecnología de machine learning. Estas capacidades están disponibles tanto en la nube como on-premise.",
      "Completo: incluye servicios de base de datos, procesamiento analítico avanzado, desarrollo de aplicaciones e integración de datos",
      "Rápido: responde a las consultas en menos de un segundo en aplicaciones con mucha producción ",
      "Versátil: brinda soporte a procesamiento híbrido transaccional y analítico y a muchos tipos de datos",
      "Eficiente: brinda una huella de datos más pequeña sin duplicación de datos, con compresión avanzada y reducción de silos de datos",
      "Potente: consulta rápidamente grandes datasets con una base de datos de procesamiento paralelo masivo (MPP)",
      "Escalable: escala fácilmente según el volumen de datos y los usuarios concurrentes de un entorno distribuido ",
      "Flexible: se implementa en una nube pública o privada, en múltiples nubes, on-premise o en un escenario híbrido ",
      "Simple: brinda una única puerta de acceso a todos sus datos con virtualización de datos avanzada ",
      "Inteligente: aumenta las aplicaciones y analíticas con machine learning (ML) incorporado",
      "Seguro: Ofrece seguridad integral de datos y aplicaciones, configuración segura, y más.",
      "Dirigido a:",
      "- Cualquier persona que no tenga conocimientos previos de SAP.",
      "- Para aquellos que están dando sus primeros pasos y desean incorporarse al mundo SAP.",
      "- Orientado a personas con conocimientos en TI, logísticos y funcionales. ",
      "- Si desea iniciarse en el mundo SAP, este curso es un excelente punto de partida porque le permitirá obtener un completo panorama global del sistema a nivel de usuario final.",
      "- Si ya está involucrado en SAP a nivel Técnico o Funcional, este curso elevará sus conocimientos de SAP a un nivel global del producto. "    ]

  },
  {
    id: 13,
    title: "INTRODUCCIÓN SAP",
    subtitle: "INTRODUCCIÓN",
    shortText: "Ofrecemos un curso sobre el sistema de gestión de recursos empresariales más utilizado por las empresas líderes nacionales e internacionales, este curso se diseñó para que pueda formarse sobre SAP de una manera sólida, así pueda después de este curso teniendo en cuenta su perfil profesional avanzar al próximo nivel.",
    fullText: [
      "Ofrecemos un curso sobre el sistema de gestión de recursos empresariales más utilizado por las empresas líderes nacionales e internacionales, este curso se diseñó para que pueda formarse sobre SAP de una manera sólida, así pueda después de este curso teniendo en cuenta su perfil profesional avanzar al próximo nivel.",
      "Módulos de SAP ",
      "",
      "1. SAP MM – El módulo SAP para la administración:",
      "- Proceso de aprovisionamiento “Compras”",
      "- Creación solicitudes de pedido con y sin referencia",
      "- Listado de solicitudes de pedido ( Reporting )",
      "- Gestión de pedidos de compra",
      "- Generalidades del documento",
      "- Creación de pedidos de compra con y sin referencia ",
      "- Gestión de materiales ",
      "-  Ingreso de materiales",
      "- Ingresos totales, parciales y anulación ",
      "- Tipos de movimientos de mercancía",
      "- Listado de materiales",
      "- Informes",
      "",
      "2. SAP SD – El módulo SAP encargado de la gestión de Ventas y Distribución :",
      "- Proceso de ventas",
      "- Crear un pedido de cliente",
      "- Visualizar un pedido de cliente ",
      "- Lista de pedidos de cliente ",
      "- Crear entrega para cliente ",
      "- Visualizar entregas",
      "- Proceso de facturación",
      "- Crear factura",
      "- Modificar factura",
      "- Visualizar facturas",
      "- Lista de facturas",
      "- Crear nota crédito y débito ",
      "- Flujo de documentos",
      "",
      "3. SAP FI – El módulo SAP para la Gestión Financiera:",
      "- Creación de cuentas",
      "- Creación grupos de cuentas ",
      "- Creación deudor y acreedor",
      "- Clases de documentos y claves de contabilización",
      "- Apertura y cierre de períodos",
      "- Contabilización de documentos GL",
      "- Informes de Sap Fi",
      "Dirigido a:",
      "- Cualquier persona que no tenga conocimientos previos de SAP.",
      "- Para aquellos que están dando sus primeros pasos y desean incorporarse al mundo SAP.",
      "- Orientado a personas con conocimientos en TI, logísticos y funcionales. ",
      "- Si desea iniciarse en el mundo SAP, este curso es un excelente punto de partida porque le permitirá obtener un completo panorama global del sistema a nivel de usuario final.",
      "- Si ya está involucrado en SAP a nivel Técnico o Funcional, este curso elevará sus conocimientos de SAP a un nivel global del producto. "    ,
      "",
      "4. SAP GUI y los servicios del sistema SAP: ",
      "- Ventanas de diálogo, Ayudas de búsqueda, opciones técnicas ",
      "- Ambientes en SAP ",
      "- Mandantes en SAP ",
      "- Gestión de usuarios y autorizaciones "

    ]

  },
];

export default function Types() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expanded, setExpanded] = useState(false);

  // Auto-rotación de slides (solo si no está expandido)
  useEffect(() => {
    if (!expanded) {
      const intervalId = setInterval(() => {
        handleNext();
      }, 5000);
      return () => clearInterval(intervalId);
    }
  }, [currentSlide, expanded]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const slide = slidesData[currentSlide];


  return (
    <section className={`flex ${expanded ? 'flex-col' : 'flex-col md:flex-row'} items-stretch justify-between`}>
      {/* Columna Izquierda: Imagen (solo se muestra si no está expandido) */}
      {!expanded && (
        <div className="md:w-[45%] bg-white flex">
          <img
            src="https://landingsapyaulas.blob.core.windows.net/imagesap/imgTypes1.webp"
            alt="Imagen de fondo"
            className="w-full h-full  object-cover"
          />
        </div>
      )}

      {/* Columna Derecha: Contenido */}
      <div className={`${expanded ? 'w-full' : 'md:w-[55%]'} bg-[var(--color-neutral-500)] px-6 md:px-20 py-10 `}>
        <SlideExpand
          slide={slide}
          expanded={expanded}
          toggleExpand={toggleExpand}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />
      </div>
    </section>
  );
}