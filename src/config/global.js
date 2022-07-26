export default {
  global: {
    componenteFormativo: 'Fundamentos y aplicaciones de políticas de SGSI',
    descripcionCurso:
      'Las políticas de auditoría de seguridad de la información son indispensables en cualquier entidad o empresa. Uno de los activos más valiosos en la organización es la información, es importante tener claridad que día a día se ven diferentes ciberataques y vulnerabilidades a las empresas.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/banner-principal-decorativo-5.svg'),
      },
    ],
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
        titulo:
          'Conceptos Sistema de Gestión de Seguridad de la Información (SGSI)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Conceptualización, identificación, conceptos de políticas de SGSI',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Introducción conceptos de SGSI',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Herramientas para la valoración de riesgos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Auditoría de activos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Identificación de riesgos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Áreas de impacto',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Políticas SGSI',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
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
  referencias: [
    {
      referencia:
        'Consejo de Europa. (2001). Convenio sobre la ciberdelincuencia. ',
      link: 'https://www.oas.org/juridico/english/cyb_pry_convenio.pdf',
    },
    {
      referencia:
        'Departamento Nacional de Planeación [DNP]. (2011). <i>Lineamientos de Política para Ciberseguridad y Ciberdefensa (Conpes 3701).</i> ',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Conpes/Econ%C3%B3micos/3701.pdf',
    },
    {
      referencia:
        'Departamento Nacional de Planeación [DNP]. (2016). <i>Política Nacional de Seguridad Digital (Conpes 3854).</i> ',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Conpes/Econ%C3%B3micos/3854.pdf',
    },
    {
      referencia:
        'Erb, M. (2005). 6.<i>Amenazas y vulnerabilidades</i>. Gestión de riesgo en la seguridad informática. ',
      link:
        'https://protejete.wordpress.com/gdr_principal/amenazas_vulnerabilidades/',
    },
    {
      referencia:
        'Fiscalía General de la Nación [FGN]. (2009). <i>Procedimientos Forenses de policía Judicial.</i>',
      link: '',
    },
    {
      referencia:
        'Gomez, A. (2006). <i>Enciclopedia de la Seguridad Informática</i>. RA-Ma.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación [ICONTEC]. (2006). <i>Tecnología de la información. Técnicas de seguridad. Sistemas de Gestión de la Seguridad de la Información (SGSI). Requisitos (NTC-ISO/IEC 27001).</i>',
      link: '',
    },
    {
      referencia:
        'Kissel, R. (2012). <i>Glossary of Key Information Security Terms. National Institute of Standards and Technology.</i>',
      link: '',
    },
    {
      referencia:
        'Mifsud, E. (2012). <i>Introducción a la seguridad informática.</i> Observatorio Tecnológico. ',
      link:
        'http://recursostic.educacion.es/observatorio/web/es/software/software-general/1040-introduccion-a-la-seguridad-informatica',
    },
    {
      referencia:
        'Oficina de Seguridad para las Redes Informáticas. (s. f.). <i>Metodología para la gestión de la Seguridad Informática.</i>',
      link:
        'https://instituciones.sld.cu/dnspminsap/files/2013/08/Metodologia-PSI-NUEVAProyecto.pdf',
    },
    {
      referencia: 'ORACLE. (s. f.). <i>Base de datos definida.</i> ',
      link: 'https://www.oracle.com/co/database/what-is-database/',
    },
  ],
  glosario: [
    {
      termino: 'Autenticación',
      significado:
        'es el acto de establecimiento o confirmación de algo como auténtico. La autenticación de un objeto puede significar la confirmación de su procedencia, mientras que la autenticación de una persona, a menudo, consiste en verificar su identidad. La autenticación depende de uno o varios factores.Desde el punto digital existen varios tipos de autenticación, como las contraseñas, biométricos, token y otros.',
    },
    {
      termino: 'Base de datos',
      significado:
        'de acuerdo con la empresa ORACLE, es una recopilación organizada de información o datos estructurados, que normalmente se almacena de forma electrónica en un sistema informático. Normalmente, una base de datos está controlada por un sistema de gestión de base de datos (DBMS). En un conjunto, los datos y el DBMS, junto con las aplicaciones asociadas a ellos, reciben el nombre de sistema de base de datos, abreviado normalmente a simplemente base de datos. ',
    },
    {
      termino: 'Evidencia digital',
      significado:
        'dentro de la guía de subproceso de policía judicial en Colombia, se encuentran definiciones de la unidad de delitos informáticos de la Fiscalía General de la Nación (FGN, 2009), también conocida como evidencia computacional única y conocida como: registros o archivos generados por computador u otro medio equivalente, registros o archivos no generados sino simplemente almacenados por o en computadores o medios equivalentes y registros o archivos híbridos que incluyen tanto registros generados por computador o medio equivalente como almacenados en los mismos. ',
    },
    {
      termino: '<i>LOG</i>',
      significado:
        'Dentro de la guía de subproceso policía judicial en Colombia, se encuentran definiciones de la unidad de delitos informáticos de la Fiscalía General de la Nación (FGN, 2009), un log es un registro oficial de eventos durante un periodo de tiempo en particular. Para los profesionales en seguridad informática, un log es usado para registrar datos o información sobre quién, qué, cuándo, dónde y por qué (who, what, when, where y why, W5) un evento ocurre para un dispositivo en particular o aplicación. La mayoría de los logs son almacenados o desplegados en el formato estándar, el cual es un conjunto de caracteres para dispositivos comunes y aplicaciones. De esta forma, cada log generado por un dispositivo en particular puede ser leído y desplegado en otro diferente. A su vez, la palabra log se relaciona con el término evidencia digital, un tipo de evidencia física construida de campos magnéticos y pulsos electrónicos que pueden ser recolectados y analizados con herramientas y técnicas especiales, lo que implica la lectura del log y deja al descubierto la actividad registrada en el mismo.',
    },
    {
      termino: 'Redes',
      significado:
        'Dentro de la guía de subproceso policía judicial en Colombia, se encuentran definiciones de la unidad de delitos informáticos de la Fiscalía General de la Nación (FGN, 2009), una red de computadoras (también llamada red de ordenadores o red informática) es un conjunto de equipos (computadoras y/o dispositivos) conectados, que comparten información (archivos), recursos (CD-ROM, impresoras, etc.) y servicios (acceso a Internet, e-mail, chat, juegos), etc. ',
    },
    {
      termino: 'Seguridad informática',
      significado:
        ' Gómez (2006) define la seguridad informática como cualquier medida que impida la ejecución de operaciones no autorizadas sobre un sistema o red informática cuyos efectos puedan conllevar daños sobre la información, equipo o software. Por su parte, Kissel (2012) la define como la protección de información y sistemas de información de acceso no autorizado. ',
    },
    {
      termino: 'Sistema de información',
      significado:
        'Dentro de la guía de subproceso policía judicial en Colombia, se encuentran definiciones de la unidad de delitos informáticos de la Fiscalía General de la Nación (FGN, 2009), es el conjunto de procesos que, operando sobre una colección de datos estructurada de acuerdo con una empresa o entidad, recopila, elabora y distribuye (parte de) la información necesaria para el buen funcionamiento de ella. Además, apoya actividades de dirección y control correspondientes, apoyando al menos en parte, la toma de decisiones necesarias de acuerdo con su estrategia. ',
    },
    {
      termino: 'Transmisión de datos',
      significado:
        'Movimiento de información codificada de un punto a otro/s punto/s. Estos datos se transmitirán mediante señales eléctricas, ópticas, radio o electromagnéticas (FGN, 2009).',
    },
  ],
  complementario: [
    {
      tema:
        'Conceptos Sistema de Gestión de Seguridad de la Información (SGSI)',
      referencia:
        'Oficina de Seguridad para las Redes Informáticas. (s. f.). <i>Metodología para la gestión de la Seguridad Informática</i>. https://instituciones.sld.cu/dnspminsap/files/2013/08/Metodologia-PSI-NUEVAProyecto.pdf',
      tipo: 'Artículo',
      link:
        'https://instituciones.sld.cu/dnspminsap/files/2013/08/Metodologia-PSI-NUEVAProyecto.pdf',
    },
    {
      tema: 'Herramientas para la valoración de riesgos',
      referencia:
        'Erb, M. (2009). <i>Amenazas y Vulnerabilidades</i>. Gestión de Riesgo en la Seguridad Informática. https://protejete.wordpress.com/gdr_principal/amenazas_vulnerabilidades',
      tipo: 'Artículo',
      link:
        'https://protejete.wordpress.com/gdr_principal/amenazas_vulnerabilidades',
    },
    {
      tema: 'Marco normativo',
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación [ICONTEC]. (2006). <i>Tecnología de la información. Técnicas de seguridad. Sistemas de Gestión de la Seguridad de la Información (SGSI). Requisitos (NTC-ISO/IEC 27001)</i>.',
      tipo: 'Norma',
      link: 'https://www.icontec.org/',
    },
    {
      tema: 'Marco normativo',
      referencia:
        'Ley 527 de 1999. Por medio de la cual se define y reglamenta el acceso y uso de los mensajes de datos, del comercio electrónico y de las firmas digitales, y se establecen las entidades de certificación y se dictan otras disposiciones. Agosto 18 de 1999. DO. Nº. 43.673. http://www.secretariasenado.gov.co/senado/basedoc/ley_0527_1999.html',
      tipo: 'PDF',
      link: 'downloads/Anexo3_CF001_Ley_527_de_1999.pdf',
    },
    {
      tema: 'Marco normativo',
      referencia:
        'Ley 1273 de 2009. Por medio de la cual se modifica el Código Penal, se crea un nuevo bien jurídico tutelado - denominado "de la protección de la información y de los datos" y se preservan integralmente los sistemas que utilicen las tecnologías de la información y las comunicaciones, entre otras disposiciones. Enero 5 de 2009. https://www.sic.gov.co/recursos_user/documentos/normatividad/Ley_1273_2009.pdf',
      tipo: 'PDF',
      link: 'downloads/Anexo4_CF001_Ley_1273_2009.pdf',
    },
    {
      tema: 'Marco normativo',
      referencia:
        'Ley 1581 de 2012. Por la cual se dictan disposiciones generales para la protección de datos personales. Octubre 17 de 2012. https://www.defensoria.gov.co/public/Normograma%202013_html/Normas/Ley_1581_2012.pdf',
      tipo: 'PDF',
      link: 'downloads/Anexo5_CF001_Ley_1581_2012.pdf',
    },
    {
      tema: 'Marco normativo',
      referencia:
        'Departamento Nacional de Planeación [DNP]. (2011). <i>Lineamientos de Política para Ciberseguridad y Ciberdefensa (Conpes 3701)</i>. https://colaboracion.dnp.gov.co/CDT/Conpes/Econ%C3%B3micos/3701.pdf',
      tipo: 'PDF',
      link: 'downloads/Anexo6_CF001_Conpes_3701.pdf',
    },
    {
      tema: 'Marco normativo',
      referencia:
        'Departamento Nacional de Planeación [DNP]. (2016). <i>Política Nacional de Seguridad Digital (Conpes 3854)</i>. https://colaboracion.dnp.gov.co/CDT/Conpes/Econ%C3%B3micos/3854.pdf',
      tipo: 'PDF',
      link: 'downloads/Anexo7_CF001_Conpes_3854.pdf',
    },
    {
      tema: 'Marco normativo',
      referencia:
        'Consejo de Europa. (2001). <i>Convenio sobre la ciberdelincuencia</i>. https://www.oas.org/juridico/english/cyb_pry_convenio.pdf',
      tipo: 'PDF',
      link: 'downloads/Anexo8_CF001_convenio_budapest.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable Equipo  Desarrollo Curricular',
        centro:
          'Centro Industrial del Diseño y la Manufactura-  Regional Santander',
      },
      {
        nombre: 'Cesar Antonio Villamizar Núñez',
        cargo: 'Experto temático',
        centro:
          'Centro de la industria, la empresa y los servicios -  Regional Norte de Santander',
      },
      {
        nombre: 'Gustavo Santis Mancipe',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Gestión Industrial -  Regional Distrito Capital ',
      },
      {
        nombre: 'Ana Catalina Córdoba',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología -  Regional Distrito Capital ',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Centro de Diseño y Metrología -  Regional Distrito Capital ',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura-  Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Diana Carolina Acevedo Barón',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura -  Regional Santander',
      },
      {
        nombre: 'Edgar Mauricio Cortés García',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura -  Regional Santander',
      },
      {
        nombre: '--',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura -  Regional Santander',
      },
      {
        nombre: '--',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura -  Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
