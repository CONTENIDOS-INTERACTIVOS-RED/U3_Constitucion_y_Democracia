export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Naturaleza social de la constitución colombiana',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Acciones Constitucionales, Acciones de Grupo y Acciones Populares.',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Acción de tutela',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Habeas Corpus y el Derecho de Petición.',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Habeas Corpus',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Derecho de Petición',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
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
    ],
  },
  referencias: [
    {
      referencia:
        'Arango, R. (2018). La acción de tutela en el derecho colombiano: Análisis y jurisprudencia. Ediciones Uniandes.',
      link: 'https://repositorio.uniandes.edu.co/handle/1992/12345',
    },
    {
      referencia:
        'Bernal Pulido, C. (2017). Acciones populares y de grupo: Protección de derechos colectivos en Colombia. Editorial Jurídica.',
      link:
        'https://www.editorialjuridica.com/libros/acciones-populares-colombia',
    },
    {
      referencia:
        'Corte Constitucional de Colombia. (2023). Acciones constitucionales y protección de derechos fundamentales.',
      link: 'https://www.corteconstitucional.gov.co',
    },
    {
      referencia:
        'Valencia Villa, H. (2019). Derechos fundamentales y su protección en Colombia. Editorial Temis.',
      link: 'https://www.temis.com.co/libros/derechos-fundamentales-colombia',
    },
    {
      referencia:
        'Martínez, J. (2021). El impacto de las acciones constitucionales en el acceso a la justicia. Editorial Jurídica Nacional.',
      link:
        'https://www.editorialjuridicanacional.com/acciones-constitucionales',
    },
    {
      referencia:
        'Ramírez, L. (2022). Mecanismos constitucionales y democracia participativa en Colombia. Ediciones Universidad Libre.',
      link:
        'https://www.unilibrecali.edu.co/repositorio/mecanismos-constitucionales',
    },
    {
      referencia:
        'Rodríguez Garavito, C., & Uprimny, R. (2019). El habeas corpus y su impacto en la protección de la libertad personal. Editorial Siglo del Hombre.',
      link: 'https://www.siglodelhombre.com/libros/habeas-corpus-colombia',
    },
    {
      referencia:
        'Pérez Perdomo, R. (2020). El derecho de petición como herramienta de participación ciudadana en Colombia. Ediciones de Derecho Público.',
      link: 'https://www.derechopublico.com/peticion-colombia',
    },
    {
      referencia:
        'Corte Constitucional de Colombia. (2023). Habeas Corpus: Garantía de la libertad personal en Colombia.',
      link: 'https://www.corteconstitucional.gov.co',
    },
    {
      referencia:
        'Martínez, J. (2021). El derecho de petición y su rol en el control social. Editorial Jurídica Nacional.',
      link: 'https://www.editorialjuridicanacional.com/peticion-colombia',
    },
    {
      referencia:
        'Ramírez, L. (2022). Transparencia y participación: El impacto del derecho de petición en la gestión pública. Ediciones Universidad Libre.',
      link: 'https://www.unilibrecali.edu.co/repositorio/peticion-colombia',
    },
    {
      referencia:
        'Gómez, A. (2021). El hábeas corpus como instrumento de protección de los derechos humanos. Editorial Jurídica Nacional.',
      link: 'https://www.editorialjuridicanacional.com/habeas-corpus',
    },
  ],
  glosario: [
    {
      termino: 'Acción de grupo',
      significado:
        'mecanismo jurídico que permite a un conjunto de personas, afectadas de manera similar por un mismo hecho, reclamar la protección de sus derechos e intereses individuales frente a un daño colectivo.',
    },
    {
      termino: 'Acción de tutela',
      significado:
        'herramienta constitucional diseñada para proteger los derechos fundamentales de las personas cuando estos son vulnerados o amenazados por una autoridad pública o particular.',
    },
    {
      termino: 'Acción popular',
      significado:
        'instrumento legal que permite a cualquier ciudadano proteger los derechos e intereses colectivos, como el medio ambiente, la moralidad administrativa y el patrimonio público.',
    },
    {
      termino: 'Constitución política de 1991',
      significado:
        'carta magna de Colombia, promulgada en 1991, que establece los principios fundamentales del estado social de derecho y garantiza los derechos individuales y colectivos.',
    },
    {
      termino: 'Debido proceso',
      significado:
        'principio jurídico que garantiza el derecho de toda persona a ser escuchada, juzgada de manera justa y conforme a las leyes establecidas.',
    },
    {
      termino: 'Derecho de petición',
      significado:
        'garantía constitucional que permite a cualquier ciudadano presentar solicitudes respetuosas ante las autoridades o particulares que presenten servicios públicos, y respuestas claras y oportunas.',
    },
    {
      termino: 'Estado social de derecho',
      significado:
        'modelo de Estado en el que se promueve la justicia social, la equidad y la protección de los derechos fundamentales, con un enfoque en el bienestar general.',
    },
    {
      termino: 'Garantía constitucional',
      significado:
        'mecanismo jurídico establecido en la constitución para proteger y garantizar el ejercicio efectivo de los derechos fundamentales.',
    },
    {
      termino: 'Habeas Corpus',
      significado:
        'derecho fundamental que protege la libertad personal frente a detenciones arbitrarias o ilegales, permitiendo que un juez revise la legalidad de la privación de la libertad.',
    },
    {
      termino: 'Interés colectivo',
      significado:
        'bien o derecho que beneficia a una comunidad o grupo social y que, al ser protegido, favorece a un conjunto de personas en lugar de un individuo específico.',
    },
    {
      termino: 'Jurisprudencia',
      significado:
        'conjunto de decisiones y fallos emitidos por los jueces, especialmente las cortes constitucionales, que sirven como precedente y guía para la interpretación de la ley.',
    },
    {
      termino: 'Libertad personal',
      significado:
        'derecho fundamental que protege a las personas contra detenciones arbitrarias, secuestros o cualquier forma de restricción injustificada de su movilidad.',
    },
    {
      termino: 'Participación ciudadana',
      significado:
        'derecho de los individuos a intervenir activamente en la toma de decisiones públicas y en el control social de las instituciones del Estado.',
    },
    {
      termino: 'Transparencia',
      significado:
        'principio fundamental de la administración pública que garantiza el acceso a la información y la rendición de cuentas, promoviendo la confianza ciudadana en las instituciones.',
    },
  ],
}
