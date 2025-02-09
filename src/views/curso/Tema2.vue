<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Tratados internacionales vigentes en Colombia'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .bg-color-10.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg
              .p-4
                p.mb-0(data-aos="fade-up") Un tratado internacional es un acuerdo formal celebrado entre sujetos de derecho internacional, como Estados u organizaciones internacionales, destinado a regular aspectos específicos de interés común. La Convención de Viena sobre el Derecho de los Tratados (1969) define a los tratados como acuerdos internacionales celebrados por escrito entre Estados y regidos por el derecho internacional.
            .col-lg-auto
              figure
                img(src='@/assets/curso/tema2/1.png', alt='')

      p(data-aos="fade-up") En el caso colombiano, los tratados internacionales complementan el marco normativo nacional, adaptando al país a los estándares globales en áreas como derechos humanos, medio ambiente, comercio y cooperación internacional. Este enfoque asegura la alineación de las disposiciones nacionales con principios universales como la justicia, la igualdad y el respeto por la dignidad humana.

      p(data-aos="fade-up").mb-4 #[b El proceso de incorporación de tratados internacionales en Colombia es:]

      .row.align-items-center.mb-5
        .col-lg-5
          figure
            img(src="@/assets/curso/tema2/2.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0

        .col-lg-7

          LineaTiempoD.color-primario.large.bg-azul(data-aos="fade-left")
            p(numero="1" titulo="Negociación y firma") Representantes del Ejecutivo, generalmente a través del Ministerio de Relaciones Exteriores, negocian los términos del tratado. La firma del tratado simboliza el compromiso de las partes, aunque no implica su entrada en vigor. Esta etapa asegura que los intereses nacionales estén bien representados.
            p(numero="2" titulo="Aprobación legislativa") El tratado es presentado al Congreso para su aprobación mediante una ley, conforme al artículo 150 de la Constitución. Este paso garantiza la coherencia del tratado con los principios del Estado y asegura un enfoque democrático en su incorporación.
            p(numero="3" titulo="Control constitucional") La Corte Constitucional evalúa la compatibilidad del tratado con la Constitución, analizando tanto la ley aprobatoria como las disposiciones del tratado. Si se detectan inconsistencias, el tratado no puede ser ratificado hasta que se ajusten dichas incompatibilidades.

      .row.align-items-center.mb-5
        .col-lg-5.order-lg-2
          figure
            img(src="@/assets/curso/tema2/3.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0

        .col-lg-7.order-lg-1

          LineaTiempoD.color-primario.large.bg-azul(data-aos="fade-left")
            p(numero="4" titulo="Ratificación") Una vez superado el control constitucional, el Presidente ratifica el tratado mediante un acto formal. Este paso confirma el compromiso del Estado con las obligaciones establecidas y habilita la aplicación del tratado en los ámbitos interno e internacional.
            p(numero="5" titulo="Promulgación") El tratado se publica en el Diario Oficial, garantizando su transparencia, conocimiento público e integración al ordenamiento jurídico interno.



      h2(data-aos="flip-up") Impacto de los tratados internacionales en Colombia

      p.mb-5(data-aos="fade-up") Los tratados internacionales influyen significativamente en la legislación y la política pública colombiana. Algunos de los aspectos más relevantes incluyen:

      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slider-1.png")
              .col-lg-7.order-lg-1
                h5 Complemento a las leyes nacionales
                p Establecen estándares internacionales que fortalecen áreas como derechos humanos, medio ambiente y comercio.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slider-2.png")
              .col-lg-7.order-lg-1
                h5 Prevalencia de los derechos humanos
                p Según el artículo 93 de la Constitución, los tratados que reconocen derechos humanos prevalecen sobre las normas internas y deben interpretarse conforme al principio pro persona, aplicando la norma que garantice mayor protección a los derechos humanos.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slider-3.png")
              .col-lg-7.order-lg-1
                h5 Fortalecimiento de la jurisprudencia
                p Tratados como la Convención Americana sobre Derechos Humanos y la Convención contra la Tortura han reforzado la protección de derechos fundamentales en Colombia.


      p(data-aos="fade-up").mb-4 Esta estructura clarifica el proceso y el impacto de los tratados internacionales, permitiendo una comprensión integral de su importancia en el contexto colombiano.

      .bg-full-width.bg-color-6.mb-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-7
              h2.mb-4(data-aos="flip-up") Tratados destacados en el contexto colombiano
              p.mb-4(data-aos="fade-right") Lo invitamos a leer el documento Tratados destacados en el contexto colombiano, donde se analiza el impacto de tratados internacionales clave en el fortalecimiento del marco normativo nacional y la garantía de derechos fundamentales.

              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Tratados destacados en el contexto colombiano
            .col-lg-5
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/4.png', alt='')

      h3(data-aos="flip-up") Control constitucional de tratados para garantizar su compatibilidad con la Constitución

      p(data-aos="fade-up").mb-4 La Constitución colombiana establece que la Corte Constitucional es responsable de revisar la constitucionalidad de los tratados internacionales y de las leyes que los aprueban. Este control, realizado antes de la ratificación del tratado, asegura que no se vulneren los derechos fundamentales, la soberanía nacional o los principios rectores del Estado social de derecho.

      p(data-aos="fade-up").mb-4 Las etapas del control constitucional de tratados internacionales son: 

      .row.align-items-center.mb-5
        .col-lg-5
          figure
            img(src="@/assets/curso/tema2/2.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0

        .col-lg-7

          LineaTiempoD.color-primario.large.bg-azul(data-aos="fade-left")
            p(numero="1" titulo="Remisión a la Corte Constitucional") El Presidente remite el tratado aprobado por el Congreso para su revisión constitucional antes de la ratificación.
            p(numero="2" titulo="Examen de constitucionalidad") La Corte analiza la compatibilidad con: derechos fundamentales, principios constitucionales y compromisos internacionales previos.
            p(numero="3" titulo="Decisión de la Corte") Emisión de una sentencia que declara la compatibilidad o incompatibilidad del tratado con la Constitución. En caso de incompatibilidad, el tratado no puede ser ratificado.
            p(numero="4" titulo="Publicación de la sentencia") La decisión es publicada en el Diario Oficial, proporcionando seguridad jurídica.


      h3(data-aos="flip-up") Impacto del control constitucional en la implementación de tratados internacionales

      p(data-aos="fade-up").mb-4 El control constitucional de los tratados garantiza que los compromisos internacionales adquiridos por Colombia sean plenamente compatibles con su ordenamiento jurídico interno. Este procedimiento tiene un impacto significativo en varias áreas:

      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slider-1-2.png")
              .col-lg-7.order-lg-1
                h5 Protección de los derechos fundamentales
                p El control previo evita que se introduzcan disposiciones que puedan afectar negativamente los derechos de los ciudadanos, revisando tratados relacionados con derechos humanos, comercio y medio ambiente para reforzar el marco normativo nacional.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slider-2-2.png")
              .col-lg-7.order-lg-1
                h5 Fortalecimiento de la soberanía nacional
                p Garantiza la coherencia entre los tratados y la Constitución, protegiendo la autonomía del Estado frente a posibles imposiciones externas que comprometan sus intereses nacionales.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slider-3-2.png")
              .col-lg-7.order-lg-1
                h5 Cumplimiento de los compromisos internacionales
                p Refuerza la credibilidad de Colombia en la comunidad internacional, asegurando que los tratados ratificados sean implementados de manera efectiva y en conformidad con el derecho interno.


                p(data-aos="fade-up") En el caso colombiano, los tratados internacionales complementan el marco normativo nacional, adaptando al país a los estándares globales en áreas como derechos humanos, medio ambiente, comercio y cooperación internacional. Este enfoque asegura la alineación de las disposiciones nacionales con principios universales como la justicia, la igualdad y el respeto por la dignidad humana.

      h3(data-aos="flip-up") Casos emblemáticos de control constitucional de tratados en Colombia

      p(data-aos="fade-up").mb-4 A lo largo de los años, la Corte Constitucional ha revisado numerosos tratados internacionales, estableciendo precedentes importantes sobre su compatibilidad con la Constitución. Algunos casos destacados incluyen:

      .row.align-items-center.mb-5
        .col-lg-5
          figure
            img(src="@/assets/curso/tema2/6.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0

        .col-lg-7

          LineaTiempoD.color-primario.large.bg-azul(data-aos="fade-left")
            p(numero="1" titulo="Tratado de Libre Comercio entre Colombia y Estados Unidos") La Corte analizó su impacto en derechos laborales, medio ambiente y soberanía alimentaria, concluyendo que era compatible con la Constitución, pero resaltando la necesidad de medidas complementarias para proteger a los sectores vulnerables.
            p(numero="2" titulo="Acuerdo de Escazú") Este tratado, enfocado en el acceso a la información, participación pública y justicia en asuntos ambientales, fue considerado coherente con los derechos constitucionales y clave para fortalecer la democracia ambiental en Colombia.
            p(numero="3" titulo="Estatuto de Roma de la Corte Penal Internacional") La revisión concluyó que el Estatuto complementa el sistema judicial nacional, reafirmando el compromiso de Colombia con la justicia internacional sin comprometer la autonomía del sistema judicial interno.
            p(numero="4" titulo="Convenio 169 de la OIT sobre Pueblos Indígenas y Tribales") La Corte destacó el principio de consulta previa establecido en el convenio, asegurando que su implementación respete los derechos colectivos de las comunidades indígenas y afrodescendientes en Colombia.

      .row.mb-5
        .col-lg-8
          h3(data-aos="flip-up").mb-4 Desafíos y perspectivas
          p(data-aos="fade-left").mb-4 El control constitucional enfrenta desafíos como equilibrar compromisos internacionales e intereses nacionales y gestionar la creciente complejidad de los tratados modernos. Es crucial fortalecer las capacidades de análisis de la Corte Constitucional y promover la cooperación interinstitucional.

          .bg-color-3.p-4(data-aos="fade-left").mb-4
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/8.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Este mecanismo es un pilar esencial del sistema jurídico colombiano, asegurando la coherencia entre los tratados internacionales y la Constitución, mientras protege derechos fundamentales y fortalece la soberanía nacional.

        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/7.png", data-aos="zoom-in")

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://www.repository.fedesarrollo.org.co/bitstream/handle/11445/260/Co_Eco_Sem1_2013_Parra-Pena_Ordonez_y_Acosta.pdf?sequence=2" target="_blank" rel="noopener noreferrer") Parra-Peña, R., Ordóñez, L., & Acosta, P. (2013). Pobreza, brechas y ruralidad en Colombia . Coyuntura Económica , 43(1), 151-183. 
  
                p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://revistas.lasalle.edu.co/index.php/ruls/article/view/1955" target="_blank" rel="noopener noreferrer") Gómez, S. (2017). Brechas urbano-rurales: Las desigualdades rurales en Colombia . Revista de la Universidad de La Salle , (73), 123-140. 
  
  
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
