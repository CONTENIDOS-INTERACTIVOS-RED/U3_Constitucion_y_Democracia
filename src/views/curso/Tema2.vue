<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Acción de tutela'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .row.mb-4
        .col-lg-4.d-none.d-sm-block
          figure
            img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in").mb-4.mb-lg-0

        .col-lg-8
          p(data-aos="fade-left").mb-4 La acción de tutela es un mecanismo jurídico clave introducido con la Constitución Política de 1991 en Colombia. Su propósito es garantizar la protección inmediata de los derechos fundamentales cuando estos se ven vulnerados o amenazados. Antes de su creación, las personas enfrentaban largos y complejos procedimientos judiciales, lo que dificultaba el acceso a la justicia en situaciones críticas.

          .bg-color-4.p-4(data-aos="fade-left").mb-4
            p.mb-0 Su diseño busca ser ágil y accesible, permitiendo que cualquier ciudadano reclame la protección de sus derechos fundamentales sin barreras administrativas. Según Arango (2018), este mecanismo no solo asegura la reparación de derechos vulnerados, sino que refuerza la idea de que la Constitución debe ser un instrumento práctico en la vida de las personas. Además, su carácter subsidiario garantiza que solo se utilice cuando no existan otros medios judiciales idóneos o suficientes para evitar daños irreparables.
          
      p(data-aos="fade-left").mb-5 La tutela ha transformado el acceso a la justicia y ha fomentado una cultura de respeto hacia los derechos fundamentales, consolidando la democracia participativa y el reconocimiento de la dignidad humana como eje central del sistema jurídico colombiano.

      h2(data-aos="flip-up").mb-4 Derechos protegidos y características principales

      p(data-aos="fade-left").mb-4 La acción de tutela está orientada exclusivamente a la protección de los derechos fundamentales reconocidos en la Constitución. Entre los derechos más comunes protegidos mediante este mecanismo se encuentran:

      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slider-1.png")
              .col-lg-7.order-lg-1
                h5 Derecho a la vida
                p Salvaguarda frente a riesgos inminentes, como falta de acceso a servicios médicos o amenazas físicas.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slider-2.png")
              .col-lg-7.order-lg-1
                h5 Derecho a la salud
                p Garantiza tratamientos médicos, medicamentos y servicios de salud en casos urgentes.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slider-3.png")
              .col-lg-7.order-lg-1
                h5 Derecho a la educación
                p Permite a los estudiantes exigir su permanencia en el sistema educativo frente a decisiones arbitrarias.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slider-4.png")
              .col-lg-7.order-lg-1
                h5 Derecho al debido proceso
                p Protege frente a decisiones judiciales o administrativas que violen principios de justicia y equidad.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slider-5.png")
              .col-lg-7.order-lg-1
                h5 Dignidad humana
                p Asegura condiciones de vida dignas frente a situaciones discriminatorias o inhumanas.

      p(data-aos="fade-left").mb-5 Las principales características de la acción de tutela son las siguientes:

      .bg-full-width-2.bg-fondo-2
        .px-4.px-md-5.pb-md-3
          .row.justify-content-center.align-items-stretch.mb-5
            .col-lg-4.mb-4(data-aos="zoom-in-up")
              .custom-image-card.h-100
                figure
                  img.custom-image-card__image(src="@/assets/curso/tema2/2.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Rapidez
                  p Soluciones inmediatas con un plazo máximo de 10 días hábiles para emitir un fallo.
            .col-lg-4.mb-4(data-aos="zoom-in-down")
              .custom-image-card.h-100
                figure
                  img.custom-image-card__image(src="@/assets/curso/tema2/3.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Eficacia
                  p Los fallos son de cumplimiento obligatorio, y su desacato puede generar sanciones legales.

            .col-lg-4.mb-4(data-aos="zoom-in-down")
              .custom-image-card.h-100
                figure
                  img.custom-image-card__image(src="@/assets/curso/tema2/4.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Accesibilidad
                  p Disponible para cualquier persona, sin requerir abogado, lo que facilita su uso en zonas rurales o urbanas.

      h3(data-aos="flip-up").mb-4 ¿Cuándo se debe presentar una tutela?
      p(data-aos="fade-left").mb-4 La tutela es pertinente en las siguientes circunstancias:

      .row.justify-content-center.align-items-stretch.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/5.png", alt="", data-aos="zoom-in")
        .col-lg-8
          .py-4.px-5.bg-color-6(data-aos="fade-right").h-100
            ul.lista-ul.mb-0
              li.mb-0
                i.lista-ul__vineta
                | Vulneración de derechos fundamentales: Afectación directa de derechos como la vida, la salud, la educación o el debido proceso.
              li.mb-0
                i.lista-ul__vineta
                | Falta de idoneidad de otros mecanismos judiciales: Cuando los recursos legales alternativos no son efectivos para proteger el derecho vulnerado.
              li.mb-0
                i.lista-ul__vineta
                | Urgencia para evitar un daño irreparable: Situaciones donde la demora podría generar consecuencias irreversibles, como la interrupción de un tratamiento médico vital.

      h3(data-aos="flip-up").mb-4 Elementos esenciales de una tutela
      p(data-aos="fade-left").mb-4 La acción de tutela debe incluir los siguientes componentes para ser válida:

      .titulo-figura.mb-4
        h5 Tabla 1. 
        span Elementos de una tutela

      .row.justify-content-center.align-items-center.mb-5
        .col-xl-10
          .tabla-a.mb-5
            table
              thead
                tr
                  th Elemento
                  th Descripción 
              tbody
                tr
                  td <strong>Identificación del solicitante</strong>
                  td Nombre completo, número de identificación y datos de contacto del afectado.
                tr
                  td <strong>Identificación del accionado</strong>
                  td Nombre de la entidad o persona responsable de la vulneración y su relación con el solicitante.
                tr
                  td <strong>Relación de los hechos</strong>
                  td Narración clara y cronológica de los eventos, con fechas y lugares específicos, vinculados al derecho vulnerado.
                tr
                  td <strong>Fundamentos legales</strong>
                  td Cita de normas constitucionales y jurisprudencia relevante que respalden la solicitud.
                tr
                  td <strong>Solicitud clara</strong>
                  td Medida específica que el juez debe ordenar para restablecer el derecho vulnerado.

      p(data-aos="fade-left").mb-5 Este diseño estructurado asegura que los jueces puedan entender el caso y responder de manera oportuna, cumpliendo el objetivo de proteger los derechos fundamentales.

      h3(data-aos="flip-up").mb-4 Paso a paso para elaborar una tutela

      p(data-aos="fade-left").mb-4 La acción de tutela se desarrolla siguiendo estos pasos, asegurando claridad y cumplimiento con los requisitos legales:

      .row.align-items-center.mb-5
        .col-lg-5
          figure
            img(src="@/assets/curso/tema2/6.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
        .col-lg-7
          LineaTiempoD.color-primario.large.bg-azul(data-aos="fade-left")
            p(numero="1" titulo="Identificar el derecho vulnerado") Determine cuál derecho fundamental ha sido afectado, relacionándolo con los derechos reconocidos en la Constitución. Ejemplo: la negación de un medicamento vital vulnera el derecho a la salud.
            p(numero="2" titulo="Recolectar pruebas") Reúna documentos que respalden los hechos, como correspondencia con la entidad accionada, historia médica (en casos de salud), resoluciones administrativas o testimonios de terceros.
            p(numero="3" titulo="Redactar la tutela") Escriba el documento de manera estructurada, incluyendo: encabezado, datos del solicitante y accionado, relación de los hechos, fundamentos de derecho, pretensiones y anexos con las pruebas.
            p(numero="4" titulo="Presentar la tutela") Entregue el documento en la oficina de reparto de tutelas correspondiente. En casos de salud, puede dirigirse al juez de turno para agilizar el proceso.
            p(numero="5" titulo="Seguimiento del proceso") Monitoree las notificaciones y cumpla con las solicitudes del juez. El fallo debe emitirse en un plazo máximo de 10 días hábiles.

      .bg-full-width.bg-color-3
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-7
              h2.mb-4(data-aos="flip-up") Ejemplo práctico de una tutela
              p.mb-4(data-aos="fade-right") Lo invitamos a explorar el Ejemplo práctico de una tutela, donde se detalla el caso de un paciente con lupus que enfrenta la negativa de su EPS para acceder a un medicamento de alto costo, vulnerando su derecho a la salud y la vida. Además, el análisis destaca los retos comunes en el proceso, como el desconocimiento del procedimiento y las demoras en la ejecución de fallos, resaltando la importancia de este mecanismo para garantizar derechos fundamentales y fortalecer el acceso equitativo a la justicia.

              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Ejemplo práctico de una tutela
            .col-lg-5
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/7.png', alt='')

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://www.personeriabogota.gov.co/images/libros/ABC_DE_LAS_ACCIONES_DE_TUTELA_DIGITAL-2.pdf" target="_blank" rel="noopener noreferrer") Personería de Bogotá. (2021). ABC de las acciones de tutela: Guía práctica para la defensa de los derechos fundamentales. Personería de Bogotá.  

              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=O2TyIT7TLtY" target="_blank" rel="noopener noreferrer") La Nota Jurídica. (2017, 6 de mayo). Acciones constitucionales: Acciones populares y acciones de grupo

            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
