<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Bloque de constitucionalidad'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      p(data-aos="fade-up") El concepto de bloque de constitucionalidad se establece como un mecanismo que incorpora normas y principios internacionales en el ordenamiento jurídico interno con rango constitucional. En el caso colombiano, este concepto se sustenta en el artículo 93 de la Constitución Política, que otorga prevalencia a los tratados y convenios internacionales en materia de derechos humanos sobre las leyes internas, garantizando su alineación con los principios constitucionales (Constitución Política de Colombia, 1991).

      p(data-aos="fade-up") Los componentes principales del bloque de constitucionalidad son:


      TabsC.color-acento-contenido.mb-5
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Fundamento normativo" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Fundamento normativo
              p Basado en el artículo 93 de la Constitución, integra tratados y convenios internacionales sobre derechos humanos al ordenamiento jurídico interno.
          
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/tab-1.png', alt='')

        .tabs-content.border.px-4.p-md-5.py-3(titulo="Construcción jurisprudencial" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Construcción jurisprudencial
              p Desarrollado por la Corte Constitucional, incluye normas internacionales ratificadas por Colombia y principios complementarios a la interpretación de derechos fundamentales.

            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/tab-2.png', alt='')

        .tabs-content.border.px-4.p-md-5.py-3(titulo="Objetivo " :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Objetivo 
              p Fortalecer la protección de derechos fundamentales y garantizar el cumplimiento de compromisos internacionales en materia de derechos humanos.

            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/tab-3.png', alt='')

        .tabs-content.border.px-4.p-md-5.py-3(titulo="Ejemplo práctico " :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Ejemplo práctico 
              p La Convención Americana sobre Derechos Humanos se ha utilizado para interpretar derechos como la igualdad, la dignidad humana y el acceso a la justicia.

            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/tab-4.png', alt='')

      h2(data-aos="fade-left") Rol del bloque de constitucionalidad en la participación ciudadana

      p(data-aos="fade-up") El bloque de constitucionalidad también desempeña un papel crucial en garantizar los derechos de participación ciudadana, consagrados en el #[b artículo 103 de la Constitución], los cuales incluyen mecanismos como:


      .bg-full-width.bg-color-info.mb-5
        .p-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-10
              ImagenInfografica.color-secundario
                  template(v-slot:imagen)
                    figure
                      img(src='@/assets/curso/tema3/info1.svg', alt='', style="max-width: 903px;").mx-auto

                  .bg-color-white.box-shadow.p-3(x="50%" y="62%" numero="+")
                    h5 Mecanismos principales de participación
                    p - Voto 
                    p - Referendo 
                    p - Plebiscito 
                    p - Consulta popular 
                    p - Iniciativa legislativa o normativa 
                    p - Revocatoria del mandato 
                    p - Cabildo abierto

                  .bg-color-white.box-shadow.p-3(x="18%" y="62%" numero="+")
                    h5 Herramientas complementarias
                    p - Acción de tutela 
                    p - Derecho de petición

                  .bg-color-white.box-shadow.p-3(x="82%" y="62%" numero="+")
                    h5 Estándares internacionales aplicados
                    p - Convenio 169 de la Organización Internacional del Trabajo: Protege los derechos colectivos de comunidades indígenas y afrodescendientes en consultas populares.

      h3(data-aos="fade-left") Mecanismos de Participación Ciudadana en Colombia

      p(data-aos="fade-up") Los mecanismos de participación ciudadana son pilares fundamentales para fortalecer la democracia y garantizar que los ciudadanos ejerzan sus derechos en Colombia. Desde el voto como base de la democracia representativa, hasta instrumentos como el referendo, el plebiscito y la consulta popular, estas herramientas permiten que la ciudadanía influya en decisiones políticas, legislativas y sociales.


      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/slider-1.png")
              .col-lg-7.order-lg-1
                h5 El voto
                p Es el mecanismo más fundamental de participación ciudadana y base de la democracia representativa. A través del sufragio, los ciudadanos eligen a sus gobernantes y fortalecen la legitimidad de las instituciones. Ejemplo: Las elecciones presidenciales de 2022 reafirmaron el compromiso democrático en Colombia.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/slider-2.png")
              .col-lg-7.order-lg-1
                h5 El referendo
                p Permite aprobar o rechazar leyes, actos legislativos o reformas constitucionales mediante el voto. Ejemplo: El referendo de 2003 abordó reformas políticas y administrativas, destacando la importancia de este instrumento en la democracia participativa.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/slider-3.png")
              .col-lg-7.order-lg-1
                h5 El plebiscito
                p Mecanismo consultivo que permite expresar la opinión ciudadana sobre decisiones políticas relevantes. Ejemplo: El plebiscito por la paz de 2016 midió la percepción ciudadana sobre los acuerdos de paz entre el gobierno y las FARC.


            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/slider-4.png")
              .col-lg-7.order-lg-1
                h5 La consulta popular
                p Instrumento para decidir sobre asuntos de interés nacional, departamental o local. Ejemplo: La consulta en Cajamarca, Tolima, rechazó la explotación minera, demostrando la relevancia de la participación comunitaria en decisiones ambientales.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/slider-5.png")
              .col-lg-7.order-lg-1
                h5 La iniciativa legislativa o normativa
                p Permite a los ciudadanos proponer proyectos de ley o normativas locales. Ejemplo: La Ley 1801 de 2016 (Código Nacional de Policía) surgió de una propuesta ciudadana para abordar problemas de convivencia.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/slider-6.png")
              .col-lg-7.order-lg-1
                h5 La revocatoria del mandato
                p Procedimiento para remover gobernantes elegidos por voto popular, garantizando la rendición de cuentas. Ejemplo: En 2021, la revocatoria del alcalde de Medellín, Daniel Quintero, puso en evidencia los retos de este mecanismo en Colombia.


            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/slider-7.png")
              .col-lg-7.order-lg-1
                h5 El cabildo abierto
                p Espacio de deliberación directa entre ciudadanos y autoridades locales. Ejemplo: En Pasto, se han debatido proyectos de infraestructura y políticas ambientales mediante cabildos abiertos.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/slider-8.png")
              .col-lg-7.order-lg-1
                h5 La acción de tutela
                p Herramienta para proteger derechos fundamentales consagrada en el artículo 86 de la Constitución. Ejemplo: Permite a los jueces recurrir al bloque de constitucionalidad para garantizar derechos, integrando principios internacionales en su resolución.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/slider-9.png")
              .col-lg-7.order-lg-1
                h5 El derecho de petición
                p Garantiza el acceso a información pública y respuesta por parte de las autoridades. Ejemplo: Ciudadanos han utilizado este mecanismo para obtener datos sobre proyectos de infraestructura y políticas ambientales, fortaleciendo la transparencia y la rendición de cuentas.


      .bg-full-width.bg-color-4.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Los mecanismos de participación ciudadana, junto con el bloque de constitucionalidad, fortalecen la democracia en Colombia al ofrecer diversas herramientas para que los ciudadanos ejerzan sus derechos, promuevan la transparencia y contribuyan a la construcción de un Estado más justo e incluyente.


      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://bibliotecadigital.udea.edu.co/bitstream/10495/12496/1/ArroyaveSebastian_2018_DimensionFiscalDescentralizacionTerritorial.pdf" target="_blank" rel="noopener noreferrer") Arroyave, S. (2018). La dimensión fiscal en la descentralización territorial en Colombia como limitante de la autonomía subnacional . Universidad de Antioquia.
  
                p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://repository.unimilitar.edu.co/bitstream/handle/10654/16530/CardonaGalvezLinaNathalia2017.PDF.pdf?sequence=1" target="_blank" rel="noopener noreferrer") Cardona Gálvez, LN (2017). Debilidades del modelo administrativo territorial al ineficiencia en la gestión pública municipal en Colombia. Universidad Militar Nueva Granada. 
  

            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              'La acción de tutela es un mecanismo para proteger los derechos fundamentales de los ciudadanos.',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              'El derecho de petición permite a los ciudadanos solicitar información o servicios a las autoridades.',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'El plebiscito es un mecanismo consultivo utilizado para que los ciudadanos expresen su opinión sobre decisiones políticas de gran relevancia.',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              'La consulta popular permite a los ciudadanos decidir sobre asuntos de interés nacional, departamental, municipal o distrital.',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              'La iniciativa legislativa permite a los ciudadanos presentar proyectos de ley o normativas locales para su discusión y aprobación.',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
