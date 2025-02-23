<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Acciones Constitucionales, Acciones de Grupo y Acciones Populares.'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Las acciones constitucionales en Colombia representan herramientas esenciales para garantizar y proteger los derechos de los ciudadanos en un contexto democrático. Diseñadas bajo principios de justicia social y equidad, estas acciones buscan asegurar tanto los derechos individuales como los colectivos, ofreciendo a los ciudadanos acceso ágil y directo a la justicia en caso de vulneración de derechos.
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema1/1.png', alt='')


    h2(data-aos="flip-up") Tipos de acciones constitucionales
    p.mb-4(data-aos="fade-up") A continuación, se presenta un resumen de las principales acciones constitucionales y sus características:

    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Acción de tutela" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Acción de tutela
            p Se utiliza para proteger derechos fundamentales frente a una amenaza o vulneración inminente. Es un mecanismo rápido y sencillo, ideal para garantizar derechos básicos, como la salud, la educación o la vida.
        
          .col-md-6.col-lg-5.col-xl-4.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/tab-1.png', alt='')

      .tabs-content.border.px-4.p-md-5.py-3(titulo="Acciones populares" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Acciones populares
            p Orientadas a proteger derechos e intereses colectivos, como el medio ambiente, la seguridad pública o el acceso a servicios básicos. Permiten a las comunidades actuar frente a situaciones que afecten su bienestar común.

          .col-md-6.col-lg-5.col-xl-4.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/tab-2.png', alt='')

      .tabs-content.border.px-4.p-md-5.py-3(titulo="Acciones de grupo " :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Acciones de grupo 
            p Buscan proteger los derechos de un grupo de personas que hayan sido afectadas de manera similar por una acción u omisión de una entidad pública o privada. Son mecanismos fundamentales en casos de perjuicios colectivos significativos.

          .col-md-6.col-lg-5.col-xl-4.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/tab-3.png', alt='')



    h2(data-aos="flip-up") Impacto social y fortalecimiento democrático
    p.mb-4(data-aos="fade-up") Más allá de su marco jurídico, las acciones constitucionales promueven el ejercicio activo de la ciudadanía y el fortalecimiento de la democracia. Estos mecanismos fomentan la participación ciudadana, permitiendo que sectores vulnerables accedan a la protección de sus derechos. Por ejemplo, casos emblemáticos como la protección del Río Atrato evidencian cómo las acciones populares han sido clave para enfrentar intereses que amenazan derechos colectivos, como el medio ambiente.

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-7
        .py-4.px-5.bg-color-2(data-aos="fade-right").h-100
          p.mb-0 Conocer y comprender las acciones constitucionales es fundamental para ejercer un papel activo en la construcción de una sociedad más equitativa. Además de entender los derechos que garantizan, estas acciones también implican responsabilidades ciudadanas. Para profundizar en estos temas, se recomienda explorar los análisis disponibles en la página de la Corte Constitucional y el libro de Valencia Villa (2019), que ofrecen perspectivas claras sobre los derechos fundamentales en Colombia.
      .col-lg-5
        figure
          img(src="@/assets/curso/tema1/2.svg", alt="", data-aos="zoom-in")


    .bg-full-width.bg-color-6.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/3.png', alt='')
          .col-lg-7
            h2.mb-4(data-aos="flip-up") Concepto y propósito de las acciones constitucionales.
            p.mb-4(data-aos="fade-right") Le invitamos a conocer más sobre el Concepto y propósito de las acciones constitucionales. Estas herramientas jurídicas son primordiales para proteger y garantizar derechos fundamentales y colectivos en Colombia, asegurando acceso directo a la justicia sin importar la posición social o económica. Descubra los diferentes mecanismos como la acción de tutela, las acciones populares, y el habeas corpus, así como su impacto en la justicia social y la democracia participativa.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Concepto y propósito de las acciones constitucionales.


    h2(data-aos="flip-up") Clasificación en acciones individuales y colectivas
    p.mb-4(data-aos="fade-up") Las acciones constitucionales en Colombia se clasifican en dos categorías principales: #[b acciones individuales y acciones colectivas.] Esta clasificación responde a los diferentes objetivos y alcances que tienen estas herramientas dentro del marco del Estado Social de Derecho, garantizando tanto la protección de derechos fundamentales individuales como la defensa de intereses colectivos que afectan a la sociedad en general.

    h2(data-aos="flip-up") Acciones individuales
    p.mb-4(data-aos="fade-up") Las acciones constitucionales en Colombia se dividen en dos categorías principales: acciones individuales y acciones colectivas. Ambas buscan garantizar la protección de derechos, ya sea a nivel personal o colectivo, en el marco del Estado Social de Derecho. Estas acciones tienen como objetivo proteger derechos fundamentales específicos de una persona frente a una amenaza o vulneración. Las herramientas principales dentro de esta categoría son:


    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slider-1.png")
            .col-lg-7.order-lg-1
              h5 Acción de tutela
              ul.lista-ul.mb-3
                li 
                  i.lista-ul__vineta
                  | Diseñada para garantizar los derechos fundamentales de una persona en un plazo corto (10 días hábiles).
                li 
                  i.lista-ul__vineta
                  | Es accesible y no requiere asistencia legal especializada.
                li 
                  i.lista-ul__vineta
                  | Se utiliza en casos como la negación de servicios de salud o la obstrucción del acceso a la educación.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slider-2.png")
            .col-lg-7.order-lg-1
              h5 Habeas corpus
              ul.lista-ul.mb-3
                li 
                  i.lista-ul__vineta
                  | Enfocado en la protección de la libertad personal frente a detenciones arbitrarias o ilegales.
                li 
                  i.lista-ul__vineta
                  | Permite la liberación inmediata si se demuestra que la detención no cumple con los requisitos legales.
                li 
                  i.lista-ul__vineta
                  | Es especialmente relevante en casos de detenciones injustificadas durante protestas sociales o conflictos armados.

    p(data-aos="fade-up").mb-4 Estas herramientas garantizan el acceso a la justicia y refuerzan la protección de los derechos individuales.


    h2(data-aos="flip-up") Acciones colectivas
    p.mb-4(data-aos="fade-up") Tienen un enfoque más amplio y protegen intereses que afectan a grupos de personas o comunidades enteras. Se subdividen en:

    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Acciones populares" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Acciones populares
            ul.lista-ul.mb-3
              li 
                i.lista-ul__vineta
                | Protegen derechos colectivos como el medio ambiente, la salud pública y el espacio público.
              li 
                i.lista-ul__vineta
                | Tienen un carácter preventivo, pues no requieren que se haya producido un daño, sino que basta con demostrar una amenaza real.
              li 
                i.lista-ul__vineta
                | Ejemplo: la suspensión de proyectos mineros que afectan ecosistemas vitales.

        
          .col-md-6.col-lg-5.col-xl-4.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/tab-1-2.png', alt='')

      .tabs-content.border.px-4.p-md-5.py-3(titulo="Acciones de grupo" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Acciones de grupo
            ul.lista-ul.mb-3
              li 
                i.lista-ul__vineta
                | Enfocadas en proteger derechos individuales que afectan a un conjunto de personas con situaciones similares.
              li 
                i.lista-ul__vineta
                | Ejemplo: demandas colectivas por desastres ambientales que buscan reparaciones económicas o soluciones para todos los afectados.

          .col-md-6.col-lg-5.col-xl-4.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/tab-2-2.png', alt='')

    p(data-aos="fade-up").mb-4 Estas acciones son fundamentales para resolver problemas de impacto colectivo y promover la equidad.

    h2(data-aos="flip-up") Relación con los principios de la democracia participativa
    p.mb-4(data-aos="fade-up") Las acciones constitucionales no solo cumplen funciones jurídicas, sino que también fortalecen los principios de la democracia participativa, promoviendo la equidad, la justicia social y la transparencia. Sus contribuciones incluyen:

    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/3.png", alt="").mb-4.mb-lg-0
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Garantía de acceso a la justicia")
            p Democratizan el sistema judicial al permitir que cualquier ciudadano pueda presentar una acción sin necesidad de representación legal compleja.
            p #[b Ejemplo:] Comunidades marginadas exigen derechos al agua potable o condiciones de vida dignas mediante acciones populares.

          .div(titulo="Fortalecimiento del control social")
            p Permiten a los ciudadanos cuestionar decisiones o políticas que vulneren sus derechos, garantizando rendición de cuentas.
            p #[b Ejemplo:] Uso de la tutela para exigir atención en salud obliga a las entidades a cumplir sus deberes.

          .div(titulo="Promoción de la equidad y justicia social")
            p Reducen desigualdades estructurales al garantizar igualdad de oportunidades para defender derechos.
            p #[b Ejemplo:] Acciones de grupo permiten a comunidades vulnerables obtener reparaciones justas, como víctimas de desastres ambientales.

          .div(titulo="Construcción de una cultura democrática")
            p Promueven la educación cívica y el conocimiento sobre el sistema jurídico y los derechos constitucionales.
            p #[b Ejemplo:] El uso frecuente de estas acciones fomenta mayor conciencia sobre democracia participativa y derechos humanos.


    h2(data-aos="flip-up") Casos emblemáticos de aplicación
    p.mb-4(data-aos="fade-up") Las acciones constitucionales en Colombia han sido clave para resolver problemáticas diversas y garantizar derechos fundamentales y colectivos en diferentes contextos. A continuación, se presentan algunos casos destacados:


    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slider-1-2.png")
            .col-lg-7.order-lg-1
              h5 Protección del Páramo de Santurbán
              p A través de una acción popular, se suspendieron proyectos mineros que amenazaban este ecosistema. La Corte Constitucional ordenó reevaluar las licencias, garantizando el suministro de agua a comunidades cercanas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slider-2-2.png")
            .col-lg-7.order-lg-1
              h5 Garantías educativas
              p Mediante acciones de tutela, los padres lograron recursos esenciales como alimentación y transporte escolar para estudiantes en instituciones públicas, fortaleciendo el acceso a la educación.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slider-3-2.png")
            .col-lg-7.order-lg-1
              h5 Restitución de empleos
              p Trabajadores despedidos injustificadamente recuperaron sus empleos y obtuvieron indemnizaciones gracias a la acción de tutela, reforzando las garantías laborales.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slider-4-2.png")
            .col-lg-7.order-lg-1
              h5 Relleno sanitario en Ciudad Bolívar
              p Una acción de grupo permitió a los habitantes afectados obtener compensaciones económicas y medidas correctivas para el manejo de desechos, mejorando su calidad de vida.


              
    .bg-full-width-2.bg-fondo-1
      .p-4.p-md-5
        h2(data-aos="flip-up") Análisis de su efectividad en garantizar el acceso a la justicia
        p(data-aos="fade-up").mb-4 El impacto positivo de las acciones constitucionales radica en su capacidad para garantizar la justicia de forma accesible, especialmente para quienes enfrentan barreras económicas, sociales o geográficas. A continuación, se analizan sus principales características, beneficios y desafíos:

        div.row.justify-content-center.align-items-stretch
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/4.svg"
                alt=""
                style="width: 90px"
              )
              h5.text-center Rapidez y accesibilidad
              p.mb-0.text-center La acción de tutela es ágil, con tiempos de respuesta cortos, ideal para casos urgentes. Su diseño simplificado permite a cualquier ciudadano interponerla sin necesidad de abogado.
          
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/8.svg"
                alt=""
                style="width: 90px"
              )
              h5.text-center Prevención y protección
              p.mb-0.text-center Las acciones colectivas, como las populares, son efectivas para prevenir daños mayores. #[b Ejemplo:] en Antioquia, se suspendió la construcción de una planta industrial que incumplía normas ambientales.

          
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/6.svg"
                alt=""
                style="width: 90px"
              )
              h5.text-center Empoderamiento ciudadano
              p.mb-0.text-center Estas herramientas protegen derechos y educan a las comunidades sobre su importancia. #[b Ejemplo:] víctimas de desplazamiento forzado lograron reparaciones y reubicación de tierras en el Meta mediante acciones de grupo.


    h2(data-aos="flip-up") Desafíos y áreas de mejora
    p(data-aos="fade-up").mb-4 Los desafíos y áreas de mejora en el sistema judicial destacan la importancia de optimizar la ejecución de fallos y abordar la sobrecarga de casos.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bg-color-11.mb-3
          .row.justify-content-center.align-items-center
            .col-lg-auto.bg-color-1.px-4.py-5.w-200px
              h5.mb-0.text-center Ejecución de fallos
            .col-lg.px-5
              p.mb-0.text-center La implementación de sentencias puede ser lenta por falta de recursos o problemas administrativos, lo que afecta la efectividad de estas herramientas. 

        .bg-color-6.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-auto.bg-color-9.px-4.py-5.w-200px
              h5.mb-0.text-center Sobrecarga del sistema judicial
            .col-lg.px-5
              p.mb-0.text-center El aumento de tutelas y acciones colectivas ha evidenciado la necesidad de reforzar el sistema judicial con recursos humanos y tecnológicos para garantizar celeridad en los procesos.


    p(data-aos="fade-up").mb-4 Las acciones constitucionales no solo resuelven problemáticas individuales y colectivas, sino que también fortalecen la democracia participativa al garantizar el acceso equitativo a la justicia. Casos como el del páramo de Santurbán, el acceso educativo en zonas rurales y la restitución de derechos laborales reflejan su capacidad para transformar la sociedad colombiana. Sin embargo, es crucial fortalecer los mecanismos de supervisión y dotar de recursos al sistema judicial para que estas herramientas sigan siendo inclusivas y efectivas.

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.consejodeestado.gov.co/documentos/biblioteca/libros/2019pr/Tomo1/Vol1_ACCIONES_POPULARES_GRUPO.pdf" target="_blank" rel="noopener noreferrer") Consejo de Estado. (2019). Acciones populares y de grupo: Protección de los derechos colectivos en Colombia (Vol. 1). Consejo de Estado. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=RRmbsbi_WQk" target="_blank" rel="noopener noreferrer") Fundación Koikos. (2021, 29 de enero). La acción de tutela: Todo lo que necesitas saber 

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

<style lang="sass">
.w-200px
  width: 200px !important
</style>
