<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="zoom-in")
        span 3
      h1(data-aos="zoom-in") Políticas SGSI
    
    .row.mb-5(data-aos="zoom-in")
      .col-12
        p Para establecer las políticas del SGSI, se debe:

    SlyderB.mb-5(:datos="datosSlyder")(data-aos="zoom-in")

    .row.mb-5(data-aos="zoom-in")
      .col-12
        p Dentro de las generalidades y aplicaciones, está la capacidad de identificar las maneras de tratamiento de riesgos, los tipos de control existentes y su integración dentro de las políticas y procedimientos para la estructuración del SGSI; esta es importante porque con ella se pueden establecer los controles existentes y planear, puede ser el punto de partida de las mejoras a implementar. Dentro de la ISO 27000, la estructura de alto nivel está contemplada en los requisitos del 4 al 10 y los controles técnicos van del 5 al 18, contemporáneos con el código de práctica de la ISO 27002.

    .row.mb-3(data-aos="zoom-in")
      .col-sm-10.col-lg-12
        p.h3.title-cus.py-2.pr-cus.pl-cus Tipos de técnicas de implementación de políticas SGSI
    .row.mb-3(data-aos="zoom-in")
      .col-12
        p Una política de seguridad es un lineamiento para la toma de una decisión sobre algún aspecto de la seguridad de la información; por ejemplo, se autoriza el acceso a la información a un científico de datos, pero no el análisis del <i>marketing</i> empresarial sobre la medición de ventas (toda vez que es para el cumplimiento de las funciones asignadas).
        p.mt-1 Otros tipos de controles podrían ser de tipo:

    .row.mb-5(data-aos="zoom-in")
        .col-sm-10.col-lg-3.mb-4.mb-xl-0
          .tarjeta-numerada.color-adicional-3.p-5.h-tarjeta-num-cus
            .tarjeta-numerada__numero
              .h2 1
            p.text-center.h4 Disuasivos
            p.text-center Informan a la amenaza que se tomarán acciones hacia ella.
        
        .col-sm-10.col-lg-3.mb-4.mb-xl-0
          .tarjeta-numerada.color-primario.p-5.h-tarjeta-num-cus
            .tarjeta-numerada__numero
              .h2 2
            p.text-center.h4 Detectivos
            p.text-center Identifica las acciones que realiza la amenaza.

        .col-sm-10.col-lg-3.mb-4.mb-xl-0
          .tarjeta-numerada.color-acento-contenido.p-5.h-tarjeta-num-cus
            .tarjeta-numerada__numero
              .h2 3
            p.text-center.h4 Preventivos
            p.text-center Reducen la posibilidad de que la amenaza afecte el objetivo.
        .col-sm-10.col-lg-3.mb-4.mb-xl-0
          .tarjeta-numerada.color-secundario.p-5.h-tarjeta-num-cus
            .tarjeta-numerada__numero
              .h2 4
            p.text-center Correctivos
            p.text-center Reparan los daños provocados por la amenaza.

    .row.mb-3.mt-5(data-aos="zoom-in")
      .col-12
        p.h3.title-cus.py-2.pr-cus.pl-cus Casos prácticos
    .row.mb-5(data-aos="zoom-in")
      .col-12
        p Para implementar políticas de seguridad de la información, se requiere de leyes y normas, requisitos de seguridad y tener claras las metas y objetivos de la seguridad. Con base en ello, se definen los requisitos para establecer las políticas de seguridad de la información, las mismas se documentan en la política institucional de seguridad, donde se especifican e implementan con procedimientos, estándares y controles.
        p.mt-1 Dentro de posibles casos, se pueden identificar los grupos de controles o requisitos de la norma ISO 27001. Por ejemplo:

    SlyderA(tipo="b")(data-aos="zoom-in").bg-gradient-cus.px-4.py-2.radius-20-cus
      .row
        .col-md-6.mb-4.mb-md-0
          p.h4  Ejemplo
          p.mt-4  Una organización que no tiene lineamientos para la toma de decisiones, es decir, que cada empleado toma decisiones según sus criterios profesionales y personales, por ello, se tiene una gran cantidad de razonamientos que conducen la empresa al caos organizacional, por lo que, si se implementan políticas de seguridad, se puede establecer una cultura organizacional para la toma decisiones.
          p.mt-1 Casos como este se deben analizar para realizar e implementar en una práctica real empresarial.
      
        .col-md-6
          figure
            img(src='@/assets/curso/temas/t3/img4.png', alt='Texto que describa la imagen')
      .row
        .col-md-6.mb-4.mb-md-0
          p.h4 Caso de estudio
          p.mt-4 En un <i>call center</i> con un movimiento de 1000 personas aproximadamente, se tienen cámaras de vigilancia permanente que guardan la información en un servidor de video para CCTV; este servidor se encuentra separado del datacenter ubicado en el cuarto de vigilancia que está a la entrada de la empresa, junto a la recepción.
          p.mt-1 Al observar la situación, el visitante puede darse cuenta de que hay ciertos momentos del día en que las recepcionistas se levantan a realizar cualquier diligencia y el personal de vigilancia hace sus rondas.
          p.mt-1 En conclusión, hay espacios del día, entre las 11:30 y las 12:00 m., que la recepción queda sola; el argumento de las recepcionistas es que se están preparando para la hora más complicada, en cuanto entrada y salida de personal, el medio día, y aunque hay una puerta con llave, no hay más protecciones.
          p.mt-1 A los pocos días, se presentó un robo en la empresa y no fue posible recuperar la información de las cámaras de seguridad.
      
        .col-md-6
          figure
            img(src='@/assets/curso/temas/t3/img5.png', alt='Texto que describa la imagen')
</template>

<script>
export default {
  name: 'Tema3',
  components: {},
  data: () => ({
    indicadorTarjetaFlip: true,
    mostrarIndicadorAudio: true,
    datosSlyder: [
      {
        titulo: '<h4> SGSI - Política 1 </h4>',
        texto:
          'Determinar el tratamiento que se le dará a cada uno de los riesgos identificados en la empresa, donde se puede tomar la decisión de aceptarlos, transferirlos o ejercer controles apropiados de acuerdo con el nivel de riesgo.',
        imagen: require('@/assets/curso/temas/t3/img1.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '<h4> SGSI - Política 2</h4>',
        texto:
          'Determinar qué controles se pueden ejercer una vez determinada la causa que los origina. De acuerdo con lo anterior, los controles pueden ser de tipo preventivo, detectivo y correctivo, que, en su conjunto, buscarán mitigar los riesgos de mayor impacto y posibilidad de ocurrencia.',
        imagen: require('@/assets/curso/temas/t3/img2.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '<h4> SGSI - Política 3</h4>',
        texto:
          'Integrar estos controles dentro de las políticas y procedimientos empresariales para configurar un sistema de control denominado el Sistema de Gestión de Seguridad de la Información. ',
        imagen: require('@/assets/curso/temas/t3/img3.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
