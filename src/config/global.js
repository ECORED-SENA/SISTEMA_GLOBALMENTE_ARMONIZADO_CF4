export default {
  global: {
    componenteFormativo:
      'Residuos de productos químicos                                  ',
    descripcionCurso:
      'En las industrias, los residuos de productos químicos y de envases, que los contienen, es una situación de todos los días; por eso, el compromiso con el manejo responsable del ambiente debe ser identificado y aplicado por cada persona que entra en contacto con ellos.  Esto es un elemento fundamental de seguridad que exige la aplicación de unos conocimientos específicos para asegurar que los productos y las áreas no se vean sometidos a peligros por la manipulación inadecuada de estos residuos de químicos y empaques.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Tipos de residuos de productos químicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Definición de los residuos de productos químicos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tipología de los residuos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Clasificación de los residuos',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Selección de los empaques para los residuos',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Envasado de los residuos de productos químicos',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Rotulado de los residuos',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Disposición de los residuos de productos químicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Almacenamiento temporal de los residuos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Rutas de recolección de los residuos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Protocolos de disposición final de los residuos',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Marta Lucía Hernández',
        cargo: 'Instructora',
        centro: 'Centro Textil y de Gestión Industrial',
      },
      {
        nombre: 'Luis Eugenio Ramírez Duarte',
        cargo: 'Experto técnico',
        centro: 'ONUDI',
      },
      {
        nombre: 'Sergio Arturo Medina Castillo',
        cargo: 'Diseñador Instruccional ',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisión metodológica y pedagógica',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro: 'Centro para la Industria de la Comunicación Gráfica ',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Miroslava González Hernández',
        cargo: 'Diseñador y evaluador instruccional',
        centro: 'Centro de Gestión Industrial',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
      },
      {
        nombre: 'Oscar Ivan Uribe Ortiz',
        cargo: 'Diseño web',
      },
      {
        nombre: [
          'Gilberto Junior Rodríguez Rodríguez',
          'Jose Tang',
          'Oleg Litvin',
          'Victor Cardenas',
          'Wilson Andrés Arenales Cáceres',
          'Zuleidy Maria Ruiz Torres',
        ],
        cargo: 'Producción audiovisual',
      },
      {
        nombre: 'Edgar Mauricio Cortes García',
        cargo: 'Desarrollo front-end',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo front-end',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
      },
      {
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculacion en plataforma LMS',
        centro: 'Centro de Comercio y Servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Agencia Presidencial de Cooperación Internacional de Colombia. (2015). Manual de gestión de los residuos o desechos peligrosos: ',
      link:
        'https://www.apccolombia.gov.co/sites/default/files/archivos_usuario/2016/a-ot-013manualgestionresiduosdesechospeligrososv3.pdf',
    },
    {
      referencia:
        'Benítez, R., Ruiz, D. V., Obando, M., Miranda, C. & Gil M, J. C. (2013). Gestión integral de residuos químicos generados en los laboratorios de docencia en química de la Universidad del Cauca. Ciencia en Desarrollo, 4(2), 63-72: ',
      link:
        'https://revistas.uptc.edu.co/index.php/ciencia_en_desarrollo/article/view/2640',
    },
    {
      referencia: 'Cgb Consultores. (2018). Etiqueta de RPs: ',
      link:
        'https://cgbconsultores.com/consejero-de-seguridad-clasificacion-de-residuos-peligrosos-cgb-consultores-informa/etiqueta-de-rps/',
    },
    {
      referencia:
        'Comité Ambiental ESIQUE, (2019, febrero 12). Residuos peligrosos [Archivo de video]. YouTube: ',
      link: 'https://www.youtube.com/watch?v=iXywqWL-kAY',
    },
    {
      referencia:
        'Consejo Colombiano de Seguridad. (2000). Almacenamiento de sustancias químicas peligrosas y residuos peligrosos. Secretaria Distrital de Ambiente: ',
      link:
        'http://www.ambientebogota.gov.co/documents/24732/3987253/Almnto%20de%20Sust.%20Qu%C3%ADmicas.pdf',
    },
    {
      referencia:
        'Decreto 1609 de 2002. [Ministerio de Transporte]. Por el cual se reglamenta el manejo y transporte terrestre automotor de mercancías peligrosas por carretera. Colombia. 31 de Julio de 2002. ',
    },
    {
      referencia:
        'Decreto 4741 de 2005. [Presidencia de la República]. Por el cual se reglamenta parcialmente la prevención y el manejo de los residuos o desechos peligrosos generados en el marco de la gestión integral. Colombia. Diciembre del 2005.',
    },
    {
      referencia:
        'Gadea Carrera, E. & Guardino Solá, X. (1974). NTP 276: Eliminación de residuos en el laboratorio: procedimientos generales. INSST: ',
      link:
        'https://www.insst.es/documents/94886/327166/ntp_276.pdf/99241f92-8c26-400b-9cc6-909f6e19aece',
    },
    {
      referencia:
        'Instituto Nacional de Salud. (2013). Guía Práctica para la Elaboración e Implementación de los Planes de Gestión Integral de Residuos en el Laboratorio. Ministerio de Salud: ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/IA/INS/guia-implementacion-planes-gestion-integral-residuos-laboratorio.pdf',
    },
    {
      referencia:
        'Meyer, R. (2018). Manejo de Desechos Químicos para Laboratorios. Instituto Nacional de Metrología. Cooperación alemana: ',
      link:
        'https://www.ptb.de/cms/fileadmin/internet/fachabteilungen/abteilung_9/9.3_internationale_zusammenarbeit/publikationen/Get_an_Insight_into_Our_Instruments/PTB_Info_Chemical-Waste-Management_SP.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente de Colombia, (2005). Enfoque estratégico para la gestión de productos químicos a nivel internacional: ',
      link:
        'https://www.minambiente.gov.co/images/AsuntosambientalesySectorialyUrbana/pdf/sustancias_qu%C3%ADmicas_y_residuos_peligrosos/Enfoque_Estrategico_Productos_Quimicos.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente de Colombia, (2005). Guías para manejo seguro y gestión ambiental de 25 sustancias químicas: ',
      link:
        'https://www.minambiente.gov.co/images/AsuntosambientalesySectorialyUrbana/pdf/sustancias_qu%C3%ADmicas_y_residuos_peligrosos/guia_25_sustancias.pdf',
    },
    {
      referencia:
        'Ministerio del Ambiente de Colombia. (2017). Informe nacional de residuos o desechos peligrosos en colombia 2016: ',
      link:
        'http://documentacion.ideam.gov.co/openbiblio/bvirtual/023766/RESPEL_2016.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2005). Guías ambientales de almacenamiento y transporte por carretera de sustancias químicas peligrosas y residuos peligrosos: ',
      link:
        'https://www.minambiente.gov.co/images/AsuntosambientalesySectorialyUrbana/pdf/sustancias_qu%C3%ADmicas_y_residuos_peligrosos/guias_ambientales_almacenam_transp_x_carretera_sust_quim_res_pelig.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente, Vivienda y Desarrollo Territorial. (2007). Gestión integral de residuos o desechos peligrosos. Bases conceptuales: ',
      link:
        'https://www.minambiente.gov.co/images/AsuntosambientalesySectorialyUrbana/pdf/sustancias_qu%C3%ADmicas_y_residuos_peligrosos/gestion_integral_respel_bases_conceptuales.pdf',
    },
    {
      referencia:
        'ONUDI Colombia. (2020, julio 07). Webinar- marco regulatorio sobre residuos peligrosos en Colombia. [Archivo de Video]. YouTube: ',
      link: 'https://www.youtube.com/watch?v=UOXObtt4flo',
    },
    {
      referencia:
        'Pérez Montaña, E. (2011). Procedimiento para la gestión y disposición de residuos sólidos y peligrosos. Departamento Médico y de Salud Ocupacional, Universidad de los Andes: ',
      link:
        'https://gerenciacampus.uniandes.edu.co/content/download/2304/11870/file/5.%20Disposicion%20de%20Residuos.pdf',
    },
    {
      referencia:
        'PQS (2015). Ficha de Datos de Seguridad Según Reglamento (CE) 1907/2006 y (UE) 453/2010. ',
    },
    {
      referencia:
        'SURA. (2002). Centro de Información de Sustancias Químicas, Emergencias y Medio Ambiente – CISTEMA.',
    },
    {
      referencia:
        'SURA. (2015). Almacenamiento seguro de sustancias químicas. CISTEMA: ',
      link:
        'https://www.arlsura.com/files/almacenamiento_sustancias_quimicas.pdf',
    },
    {
      referencia:
        'Universidad de Concepción. (1998). Reglamento de manejo de residuos peligrosos. Proyecto Fondef D97F1066: ',
      link: 'http://www2.udec.cl/sqrt/reglamento/reglresiduos.html',
    },
    {
      referencia:
        'Universidad Industrial de Santander. (2012). Protocolo de Seguridad Química: Manipulación segura de Sustancias Químicas: ',
      link:
        'https://www.uis.edu.co/intranet/calidad/documentos/gestion_ambiental/protocolos/TTH.01.pdf',
    },
    {
      referencia:
        'Universidad del País Vasco. [UPV/EHU].  (2018). Módulo 7: Consideraciones residuos peligrosos de origen químico. [Archivo de video]: ',
      link: 'https://www.youtube.com/watch?v=BSBWYQEouck',
    },
    {
      referencia:
        'Universidad del País Vasco. [UPV/EHU].  (2018, abril 25). Módulo 7: Gestión de residuos químicos (3) envasado. [Archivo de video]: ',
      link: 'https://www.youtube.com/watch?v=Y19gix9jtpQ',
    },
    {
      referencia:
        'Universidad del País Vasco. [UPV/EHU]. (2018, abril 30). Módulo 7: Gestión de residuos químicos (5) tratamiento. [Archivo de video]: ',
      link: 'https://www.youtube.com/watch?v=95vZYxZ5VzY',
    },
    {
      referencia: 'UPNA. (2010). Manual de usos de productos químicos: ',
      link:
        'http://www.unavarra.es/digitalAssets/146/146686_100000Manual-de-uso-de-productos-quimicos.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Desactivación',
      significado:
        'Método, técnica o proceso utilizado como pretratamiento para volver inertes los residuos peligrosos y similares, de manera que se puedan transportar y almacenar previamente a la incineración o envío al relleno sanitario.',
    },
    {
      termino: 'Envase',
      significado:
        'Recipiente destinado a contener productos hasta su consumo final.',
    },
    {
      termino: 'Generador',
      significado:
        'Es la persona natural o jurídica que produce residuos en el desarrollo de las actividades, manejo e instalaciones relacionadas con la prestación de servicios.',
    },
    {
      termino: 'Grupo de compatibilidad',
      significado:
        'Conjunto de mercancías de la clase 1 “Explosivos” que se consideran “compatibles” cuando se pueden estibar o transportar varios al mismo tiempo en condiciones de seguridad, sin aumentar de manera apreciable la probabilidad de accidente o la magnitud de los efectos de tal mismo, respecto a una cantidad determinada.',
    },
    {
      termino: 'Residuo químico',
      significado:
        'Los residuos químicos peligrosos comprenden todos aquellos materiales que por sus características corrosivas, reactivas, explosivas, tóxicas e inflamables, representan un peligro para la salud humana y el ambiente, cuando son manejados o dispuestos en forma inadecuada.',
    },
    {
      termino: 'Tóxico',
      significado:
        'Sustancias que pueden causar la muerte o lesiones graves o que pueden ser nocivas para la salud humana, si se ingieren o inhalan o entran en contacto con la piel.',
    },
    {
      termino: 'Tratamiento',
      significado:
        'Es el proceso de transformación física, química o biológica utilizado para modificar sus características, con el propósito de disponerlos. La selección del sistema de tratamiento o procesos de eliminación especializada radica en las condiciones de los residuos.',
    },
  ],
  complementario: [
    {
      texto:
        'Comité Ambiental ESIQUE, (2019, febrero 12). Residuos peligrosos. [Archivo de video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=iXywqWL-kAY',
    },
    {
      texto:
        'Universidad del País Vasco. [UPV/EHU]. (2018). Módulo 7: Consideraciones residuos peligrosos de origen químico. [Archivo de video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=BSBWYQEouck',
    },
    {
      texto:
        'Universidad del País Vasco. [UPV/EHU]. (2018, abril 25). Módulo 7: Gestión de residuos químicos (3) envasado. [Archivo de video].',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Y19gix9jtpQ',
    },
    {
      texto:
        'Universidad del País Vasco. [UPV/EHU].  (2018, abril 30). Módulo 7: Gestión de residuos químicos (5) tratamiento. [Archivo de video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=95vZYxZ5VzY',
    },
  ],
}
