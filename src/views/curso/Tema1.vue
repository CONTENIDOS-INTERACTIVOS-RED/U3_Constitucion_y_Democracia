<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Orden Legal en Colombia'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-2.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") El orden legal en Colombia se estructura en torno a la Constitución Política, que representa el eje central para la organización del Estado y regula las relaciones entre los ciudadanos y los poderes públicos. Este documento establece un acuerdo social fundamental para la convivencia pacífica y el desarrollo de una sociedad justa y equitativa.
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema1/1.png', alt='')

    h2(data-aos="flip-up") Evolución del concepto de Constitución

    p.mb-5(data-aos="fade-up") El concepto de constitución ha evolucionado históricamente, respondiendo a las necesidades de las sociedades en diferentes contextos:

    LineaTiempoE.color-primario.mb-5
      .row(titulo="Antigüedad" subtitulo="")
        .col-lg-6.mb-4.mb-lg-0
          p Surgen los primeros ordenamientos básicos en civilizaciones como Roma, con normas para la organización política y social.
        .col-lg-6
          figure
            img(src='@/assets/curso/tema1/2.png', alt='')

      .row(titulo="Edad Media" subtitulo="")
        .col-lg-6.mb-4.mb-lg-0
          p Predominio de monarquías absolutas, con concentración del poder en una figura central.
        .col-lg-6
          figure
            img(src='@/assets/curso/tema1/3.png', alt='')  

      .row(titulo="Revolución Francesa y EUA" subtitulo="")
        .col-lg-6.mb-4.mb-lg-0
          p Introducción de ideas modernas como la separación de poderes y la supremacía de la ley, limitando el poder estatal.
        .col-lg-6
          figure
            img(src='@/assets/curso/tema1/4.png', alt='')  


    h2(data-aos="flip-up") La Constitución como compendio de normas

    p.mb-4(data-aos="fade-up") La Constitución se divide en dos partes principales:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bg-color-5.p-4.px-lg-5.mb-3
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              .row.align-items-center
                .col-lg-4
                  h4.mb-0 Parte Dogmática
                .col-lg-8
                  p.mb-0 Establece derechos, libertades y principios filosóficos que inspiran el ordenamiento jurídico.
        
        .bg-color-5.p-4.px-lg-5
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/6.svg", style="max-width: 90px").mx-auto
            .col-lg
              .row.align-items-center
                .col-lg-4
                  h4.mb-0 Parte Orgánica
                .col-lg-8
                  p.mb-0 Define la estructura del estado, distribuye competencias entre órganos y regula procedimientos de ejercicio del poder.



    h2(data-aos="flip-up") Principios fundamentales

    p.mb-5(data-aos="fade-up") La Constitución refleja valores como justicia, igualdad, libertad y paz, orientando la labor de los gobernantes y sirviendo como base para interpretar las normas jurídicas. Las constituciones se clasifican según su forma y proceso de modificación:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slider-1.png")
            .col-lg-7.order-lg-1
              h5 Rígidas y flexibles
              p Las rígidas requieren procedimientos especiales para su modificación, mientras que las flexibles permiten cambios con procesos legislativos ordinarios.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slider-2.png")
            .col-lg-7.order-lg-1
              h5 Escritas y consuetudinarias
              p Escritas se plasman en un texto único; consuetudinarias derivan de prácticas y costumbres.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slider-3.png")
            .col-lg-7.order-lg-1
              h5 Originarias y derivadas
              p Las originarias crean un nuevo orden jurídico; las derivadas evolucionan de un sistema preexistente.


    h3(data-aos="flip-up") Objetivo de la Constitución

    p(data-aos="fade-up") El propósito principal es organizar el ejercicio del poder del Estado, garantizar derechos fundamentales y equilibrar poder y libertades individuales. Además, actúa como un "canal normativo" que transfiere el poder del Estado a los gobernantes bajo límites legales, asegurando la estabilidad institucional.

    .bg-full-width.bg-fondo-1
      .p-4.p-md-5
        h2(data-aos="flip-up") Jerarquía Normativa en Colombia
        p(data-aos="fade-up").mb-4 La #[strong jerarquía normativa] asegura coherencia y estabilidad en el sistema jurídico, con la Constitución Política de 1991 como base fundamental.

        div.row.justify-content-center.align-items-stretch
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/7.svg"
                alt=""
                style="width: 90px"
              )
              h5.text-center Constitución Política
              p.mb-0.text-center Nivel más alto, establece principios fundamentales, regula el sistema jurídico y protege derechos fundamentales.
          
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/8.svg"
                alt=""
                style="width: 90px"
              )
              h5.text-center Leyes
              p.mb-0.text-center Normas que desarrollan los principios constitucionales y regulan aspectos específicos.
          
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/9.svg"
                alt=""
                style="width: 90px"
              )
              h5.text-center Decretos y Reglamentos
              p.mb-0.text-center Instrumentos que detallan y complementan las leyes, sin contradecir la Constitución.


    h2(data-aos="flip-up") Supremacía de la Constitución

    p(data-aos="fade-up").mb-4 La Constitución garantiza que todas las normas sean coherentes con sus principios, regulando los derechos y estableciendo mecanismos como la acción de tutela para protegerlos ante vulneraciones.

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-10
        .bg-color-5.p-4.px-lg-5
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/10.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Esta estructura normativa permite que el sistema legal colombiano funcione de manera armónica y acorde con los valores democráticos. 
    

    h2(data-aos="flip-up") Clasificación de las leyes

    p.mb-4(data-aos="fade-up") El marco normativo en Colombia se organiza en diversas categorías de leyes que desempeñan funciones específicas dentro de la jerarquía constitucional.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/47vKOZoRGtw?si=a_LrQd3hjPOsvIv8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    h2(data-aos="flip-up") Reglamentos y Decretos

    p(data-aos="fade-up").mb-4 En el nivel inferior de la jerarquía normativa se encuentran los reglamentos y decretos, que son emitidos por el poder ejecutivo para desarrollar y aplicar las leyes. Estos instrumentos, según el Manual de Estructura del Estado Colombiano (Función Pública, s.f.), son esenciales para la implementación práctica de las disposiciones legales, aunque deben respetar los límites establecidos por las normas superiores.


    .bg-color-3.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema1/11.png', alt='')

        .col-lg
          .p-4
            h5.mb-3 Decretos reglamentarios
            ul.lista-ul.mb-3
              li 
                i.lista-ul__vineta
                | Desarrollan las leyes aprobadas por el congreso, especificando su aplicación en contextos específicos.
              li 
                i.lista-ul__vineta
                | Decreto 1072 de 2015 ( Disposiciones laborales).


    .bg-color-3.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4.ps-lg-5
            h5.mb-3 Resoluciones y circulares
            ul.lista-ul.mb-3
              li 
                i.lista-ul__vineta
                | Regulan situaciones especificas dentro de la competencia de las entidades administrativas, siempre conformes a las normas superiores.
              li 
                i.lista-ul__vineta
                | Resoluciones, internas de entidades gubernamentales.
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema1/12.png', alt='')

    p(data-aos="fade-up").mb-4 El control constitucional garantiza que todas las normas y actos administrativos sean compatibles con la Constitución. Por ejemplo, en la Sentencia C-588 de 2009, la Corte Constitucional declaró inconstitucional una ley que contradecía principios fundamentales como la igualdad y la equidad, asegurando la supremacía constitucional.


    .bg-full-width-2.bg-fondo-2
      .p-4.p-md-5.pb-0
        h2(data-aos="flip-up") Impacto en la vida cotidiana
        p(data-aos="fade-up").mb-5 El sistema normativo tiene un impacto directo en la vida diaria de los ciudadanos al garantizar derechos y promover el bienestar colectivo.

        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/13.svg"
                alt=""
                style="width: 90px"
              )
              h5.text-center Garantía de derechos
              p.mb-0.text-center La ley Estatutaria del Derecho de Petición permite a los ciudadanos exigir respuestas oportunas de las autoridades. 

          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/14.svg"
                alt=""
                style="width: 90px"
              )
              h5.text-center Promoción del bienestar
              p.mb-0.text-center Los decretos reglamentarios aseguran la aplicación efectiva de las leyes, fortaleciendo el bienestar colectivo.
          
        h2(data-aos="flip-up").mb-0 División del poder y concepto de soberanía

    p(data-aos="fade-up").mb-4 La organización del poder público en Colombia se basa en los principios de separación y equilibrio, diseñados para evitar abusos y garantizar el funcionamiento democrático del Estado. Inspirada en Montesquieu, la estructura tripartita incluye las ramas legislativa, ejecutiva y judicial, que trabajan de manera independiente pero coordinada.
    p(data-aos="fade-up").mb-4 Las ramas del poder público desempeñan funciones esenciales para garantizar el equilibrio y la eficacia del sistema democrático.


    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-4(data-aos="zoom-in-up")
        .custom-image-card.h-100
          figure
            img.custom-image-card__image(src="@/assets/curso/tema1/15b.png" alt="")
          .custom-image-card__text.p-4
            h5.mb-2.text-center Legislativa
            ul.lista-ul.mb-3
              li 
                i.lista-ul__vineta
                | Crear leyes, ejercer control político, proponer reformas constitucionales.
              li 
                i.lista-ul__vineta
                | Aprobación del presupuesto general de la nación.
      .col-lg-4.mb-4(data-aos="zoom-in-down")
        .custom-image-card.h-100
          figure
            img.custom-image-card__image(src="@/assets/curso/tema1/16b.png" alt="")
          .custom-image-card__text.p-4
            h5.mb-2.text-center Ejecutiva
            ul.lista-ul.mb-3
              li 
                i.lista-ul__vineta
                | Administrar el estado, ejecutar leyes, dirigir política exterior.
              li 
                i.lista-ul__vineta
                | Expedición de decretos reglamentarios.
      .col-lg-4.mb-4(data-aos="zoom-in-down")
        .custom-image-card.h-100
          figure
            img.custom-image-card__image(src="@/assets/curso/tema1/17b.png" alt="")
          .custom-image-card__text.p-4
            h5.mb-2.text-center Judicial
            ul.lista-ul.mb-3
              li 
                i.lista-ul__vineta
                | Interpretar y aplicar leyes, resolver conflictos, proteger derechos fundamentales. 

              li 
                i.lista-ul__vineta
                | Control previo sobre leyes estatutarias.

          

    h2(data-aos="flip-up") El Concepto de Soberanía

    p(data-aos="fade-up").mb-4 La soberanía, entendida como la facultad de ejercer el poder supremo dentro de un territorio, reside en el pueblo colombiano, según la Constitución Política de 1991. Esta se manifiesta a través de mecanismos democráticos como:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        .bg-color-6.p-4.px-lg-5
          h3.mb-1 01.
          p.mb-0 Elecciones generales

      .col-lg-4
        .bg-color-3.p-4.px-lg-5
          h3.mb-1 02.
          p.mb-0 Referendos y consultas populares.


    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-8
        .bg-color-4.p-4.px-lg-5.h-100
          h4.mb-1.mt-lg-4 Relación entre soberanía y división del poder
          p.mb-0 La soberanía popular garantiza que las decisiones estatales reflejen los intereses colectivos y no de una élite particular. Además, los ciudadanos pueden exigir rendición de cuentas mediante acciones como el control político del Congreso y las acciones legales impulsadas por la rama judicial.

      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/18.png", alt="")

    h2(data-aos="flip-up") Retos en la división del poder

    p(data-aos="fade-up").mb-4 La división del poder enfrenta diversos retos que pueden comprometer su eficacia y la confianza ciudadana.

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4
        .tarjeta.bg-color-7.h-100
          .bg-color-1.px-4.px-lg-5.py-3.rounded-top
            h4.mb-0.text-center Interferencia entre <br>ramas
          p.mb-0.p-4 Intereses particulares que buscan influir en decisiones públicas.

      .col-lg-4
        .tarjeta.bg-color-8.h-100
          .bg-color-9.px-4.px-lg-5.py-3.rounded-top
            h4.mb-0.text-center Corrupción <br>institucional
          p.mb-0.p-4 Debilita los mecanismos de control y la confianza ciudadana.

      .col-lg-4
        .tarjeta.bg-color-7.h-100
          .bg-color-1.px-4.px-lg-5.py-3.rounded-top
            h4.mb-0.text-center Adaptación al entorno globalizado
          p.mb-0.p-4 Equilibrar la soberanía nacional con la cooperación internacional.


    .bg-full-width.bg-color-4
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/19.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 La jerarquía normativa y la división del poder en Colombia garantizan el equilibrio institucional y la protección de los derechos fundamentales. Sin embargo, enfrentan retos significativos que demandan soluciones estructurales y participativas para fortalecer la confianza ciudadana y la eficacia del sistema democrático.

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://repository.javeriana.edu.co/bitstream/handle/10554/14916/HolguinRangelYadira2014.pdf" target="_blank" rel="noopener noreferrer") Holguín Rangel, Y. (2014). Autonomía fiscal de las entidades territoriales en Colombia . Pontificia Universidad Javeriana

              p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://repository.usta.edu.co/bitstream/handle/1163437873/2021ruthmoralesyedwinbarrera.pdf?sequence=1" target="_blank" rel="noopener noreferrer") Morales, R. y Barrera, E. (2021). Autonomía fiscal de los municipios en Colombia, los elementos del tributo y la reserva de ley . Universidad Santo Tomás. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/user/CorteConstitucional" target="_blank" rel="noopener noreferrer") Corte Constitucional de Colombia. (Dakota del Norte). El sistema jurídico colombiano explicado 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
