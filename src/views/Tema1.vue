<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Conceptos Sistema de Gestión de Seguridad de la Información (SGSI)
      
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t1/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La seguridad de la información ha cobrado importancia en los últimos años; en el tema de calidad, se han estandarizado los procesos, y en la seguridad informática y de la información, se han implementado algunos controles y planes.  Con el advenimiento de la norma ISO 27000, aparecen los conceptos de Gestión en Sistemas de Seguridad Informática y de la Información (SGSI), aprovechando las nuevas tecnologías y los sistemas de información, y junto a ellos, se alinean otros estándares que hasta el momento habían sido aplicados al análisis de riesgos informáticos y que posteriormente han sido usados para la gestión de riesgos de seguridad de la información.
    Separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-in")
      h2 1.1  Conceptualización, identificación, conceptos de políticas de SGSI   
    .row.mb-5
      .col-12
        p.mb-4 El concepto clave de un SGSI es el diseño, implantación y mantenimiento de un conjunto de procesos para gestionar eficientemente la accesibilidad de la información, buscando asegurar los activos de información, el valor más importante en una organización, minimizando a la vez los riesgos de seguridad de la información:

    .row.mb-5
      .col-md-3.col-lg.mb-5.mb-lg-0.img-hover-cus
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/img2.png' alt='AvatarTop')
          .tarjeta.border-img-cus(:style="{'background-image': `url(${require('@/assets/curso/temas/t1/img5.svg')})`}")
            .p-3.text-center
              p #[strong  Integridad]
      .col-md-3.col-lg.mb-5.mb-lg-0.img-hover-cus
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/img3.png' alt='AvatarTop')
          .tarjeta.border-img-cus(:style="{'background-image': `url(${require('@/assets/curso/temas/t1/img5.svg')})`}")
            .p-3.text-center
              p #[strong Confidencialidad ]
      .col-md-3.col-lg.mb-5.mb-lg-0.img-hover-cus
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/img4.png' alt='AvatarTop')
          .tarjeta.border-img-cus(:style="{'background-image': `url(${require('@/assets/curso/temas/t1/img5.svg')})`}")
            .p-3.text-center
              p #[strong Disponibilidad ]


    .row.mb-5
      .col-12
        p.mb-4 En la actualidad, la mayor parte de la información reside en servidores, redes de información y almacenamientos como nube, discos extraíbles o <i>backups</i>, enmarcados dentro de lo que se conoce como sistemas de información. Estos sistemas de información están sujetos a vulnerabilidades, ataques informáticos, riesgos e inseguridades, tanto desde dentro de la propia organización como desde afuera. Los riesgos que se pueden presentar se dividen en:
            
  
    .row.mb-5.d-flex.justify-content-center
        .col-sm-10.col-lg-5.mb-4.mb-xl-0
          .tarjeta-numerada.color-primario.p-5.h-tarjeta-num-cus
            .tarjeta-numerada__numero
              .h2 1
            p.text-center 
              b Riesgos físicos
            p.text-center Accesos no autorizados a la información, catástrofes naturales, inundaciones, terremotos, incendios, vandalismo, entre otros.

        .col-sm-10.col-lg-5.mb-4.mb-xl-0
          .tarjeta-numerada.color-secundario.p-5.h-tarjeta-num-cus
            .tarjeta-numerada__numero
              .h2 2
            p.text-center 
              b Riesgos lógicos
            p.text-center Virus, ataques de denegación de servicio, entre otros.

    .row.mb-5
      .col-12
        p.mb-3 En definitiva, con un SGSI, la empresa conoce los riesgos a los que está sometida su información y los gestiona mediante una sistemática definida, documentada y conocida por todos, que se revisa y mejora constantemente.
        p.mb-4 El Sistema de Seguridad de la Información está basado en tres principios básicos que se explican a continuación:
    
    .row.mb-5.d-flex.justify-content-center
      .col-sm-10.col-lg-4
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/t1/img6.svg', alt='Texto que describa la imagen')

          .tarjeta.bg-img-infografica.p-3(x="10%" y="38%" numero="+")
            h5 Confidencialidad:
            p distintivo propio de la información empresarial, donde los datos privados, semiprivados y públicos, que constituyen parte del activo de una empresa, no se revelan ni se ponen a disposición de intermediarios, organizaciones o personal no autorizado. Son propiedad exclusiva y como tal deben preservarse cumpliendo con el habeas data, propiedad que determina que la información que está disponible no sea revelada a quien no esté autorizado 2.13 ISO 27000.

          .tarjeta.bg-img-infografica.p-3(x="88%" y="38%" numero="+")
            .h5.mb-2 Integridad: 
            p exactitud e inalterabilidad de la información, así como de sus métodos de proceso, es decir, que no deben alterarse ni cambiar bajo ningún fin, salvo que la propia empresa así lo decida y siempre y cuando haya motivos que justifiquen tal medida. Propiedad de salvaguardar la exactitud y el estado completo de los activos 2.36 ISO 27000.

          .tarjeta.bg-img-infografica.p-3(x="50%" y="105%" numero="+")
            .h5.mb-2 Disponibilidad: 
            p señala la posibilidad de que sujetos, entes o procesos autorizados tengan pleno acceso al manejo de la información que está en la base de datos de una empresa, así como los sistemas que la regulan. Este no es un principio que se contraponga a la confidencialidad, pues se trata del acceso a todos los empleados, internos o externos que tengan autorización. Propiedad que permite que la información sea accesible y utilizable por solicitud de los autorizados 2.10 ISO 27000.

    .row.mb-3
      .col-12
        p.mb-3 Un esquema que podría evaluar el nivel de impacto podría manejarse en la siguiente tabla:

    .row(data-aos="zoom-in")
      .col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Esquema para evaluar el nivel de impacto
    
        .tabla-a.color-acento-contenido.mb-5 
          table
            thead
              tr
                th Activo X
                th Confidencialidad
                th Integridad
                th Disponibilidad
            tbody
              tr
                td.text-center Impacto
                td.text-center 0 – No aplica
                td.text-center 3 – Moderado
                td.text-center 1– Importante
  
    .row.bd-full-view.bg-gradient-cus.m-0.p-0
      .bg-shadow-cus-top
          figure
            img(src="@/assets/curso/temas/t1/img16.svg")
      .col-12.p-5
        p.px-4 Es así como el auditor líder en las políticas de seguridad de la información tiene como funciones:
        .row
          .col-sm-12.col-lg-6.px-5
            ul.lista-ul--color
              li 
                i.fas.fa-database
                | Planear las auditorías y hacer uso adecuado de los recursos. 
              li 
                i.fas.fa-database
                | Equilibrar fortalezas y debilidades del equipo auditor.
              li 
                i.fas.fa-database
                | Buena comunicación entre el cliente de la auditoría y el auditor. 
              li 
                i.fas.fa-database
                | Liderar con orden al equipo auditor seleccionado.
              li 
                i.fas.fa-database
                | Desarrollar una armoniosa relación de trabajo entre los miembros del equipo de auditoría.
              li 
                i.fas.fa-database
                | Orientar y transferir conocimiento al departamento TI auditor en formación. 
              li 
                i.fas.fa-database
                | Liderar con el equipo las conclusiones de la auditoría. 
              li 
                i.fas.fa-database
                | Establecer planes de mejora. 
              li 
                i.fas.fa-database
                | Gestionar la perplejidad es el objetivo principal de la auditoría.
              li 
                i.fas.fa-database
                | Preparar y completar el informe de la auditoría.
          .col-sm-12.col-lg-4.mb-0.pb-0.d-none.d-lg-block
            figure
              img(src="@/assets/curso/temas/t1/img8.png" data-aos="zoom-in-up")
      .bg-shadow-cus-bottom
          figure
            img(src="@/assets/curso/temas/t1/img15.svg")


    .row.mt-5.mb-3
      .col-12
        p.mb-3 A continuación, se muestra un esquema donde se presentan las fases de una auditoría.

    .row(data-aos="zoom-in").mb-5
      .col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 1
          span Fases de una auditoría

        figure.mb-4.px-lg-5.mx-lg-5
          img(src="@/assets/curso/temas/t1/img9.svg", alt="alt")
    
    .row.mb-4
      .col-12
        p.mb-3 Teniendo clara la información anterior, es importante conocer los términos seguridad informática y seguridad de la información y la diferencia que existe entre ellos:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Seguridad informática")
        .col-sm-12.col-lg-6.mb-4.mb-md-0.px-5
          p #[strong 1.] Se enfoca en la protección de toda la infraestructura del parque computacional de la empresa, donde se implementan protocolos, herramientas y normatividad para minimizar los posibles riesgos. 
          p #[strong 2.] Enfoque defensivo.
          p #[strong 3.] Protege la información a través de la seguridad de redes y sistemas interconectados, evitando ataques informáticos.
          p #[strong 4.] Utiliza componentes de <i>hardware</i> que tienen controles de seguridad.
          p #[strong 5.] Se enfoca en las amenazas en línea.
          p #[strong 6.] “Enseña” a actuar como un <i>hacker</i>.
          p #[strong 7.] Analiza el <i>software</i> malicioso.
          p #[strong 8.] Es el primer respondiente ante el incidente cibernético.
        .col-sm-12.col-lg-5
          figure
            img(src='@/assets/curso/temas/t1/img10.png', alt='Texto que describa la imagen')
       

      .row(titulo="Seguridad de la información")
        .col-sm-12.col-lg-6.mb-4.mb-md-0.px-5
          p #[strong 1.] Se enfoca en las medidas preventivas y reactivas de las personas encargadas en la empresa, ya que permite amparar y proteger la información, a la vez que debe conservar su confidencialidad, integridad y disponibilidad.
          p #[strong 2.] Enfoque ofensivo. 
          p #[strong 3.] Protege la información de manera global.
          p #[strong 4.] Por medio de las políticas de seguridad, se pueden tener controles y monitoreos de los accesos.
          p #[strong 5.] Se blinda ante las amenazas en línea.
          p #[strong 6.] Trabaja en la protección de los datos ante cualquier amenaza.
          p #[strong 7.] Supervisa el acceso no autorizado.
          p #[strong 8.] Realiza estrategias para recuperarse de un ataque cibernético.
        .col-sm-12.col-lg-5
            figure
              img(src='@/assets/curso/temas/t1/img11.png', alt='Texto que describa la imagen')
      
    .row.mb-3
      .col-12
        p.mb-3 Recuerde que la seguridad informática y la seguridad de la información están encargadas de proteger los datos contra:   

    .row.bd-radius-cus.d-flex.justify-content-center
      .col-sm-12.col-lg-4.p-5.bg-color-card.bd-radius-cus-left
        ul.lista-ul--color
          li.mb-4.mt-4
            i.fas.fa-database
            | Robo de información. 
          li.mb-4
            i.fas.fa-database
            | Acceso no autorizado.
          li.mb-4
            i.fas.fa-database
            | Obstaculización al sistema informático.
          li 
            i.fas.fa-database
            | Manipulación y/o eliminación de datos.
      .col-sm-12.col-lg-3.bg-color-card.p-5.bd-radius-cus-right.d-none.d-lg-block
        figure
          img(src="@/assets/curso/temas/t1/img12.png" data-aos="zoom-in-up")
    Separador.mb-5
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-in")
      h2 1.2 Introducción conceptos de SGSI  
    
    .row.mb-5
      .col-12
        p.mb-3 Cuando se habla de procesos empresariales impulsados en la transformación digital con tecnología de punta, se entiende que están expuestos a diferentes vulnerabilidades, amenazas y ataques informáticos dirigidos a la seguridad y la privacidad de la información.
        p Mediante la norma ISO 27001, la implementación del SGSI sigue el modelo Planificar – Hacer – Verificar -Actuar, para la mejora continua de los procesos del SGSI:
    
    .row(data-aos="zoom-in").mb-5
       .col-sm-12.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span PHVA - Icontec

        figure.mb-4.px-lg-5.mx-lg-5
          img(src="@/assets/curso/temas/t1/img13.svg", alt="alt")
    
    .bd-full-view.bg-gradient-cus
      
        .bg-shadow-cus-top
            figure
              img(src="@/assets/curso/temas/t1/img16.svg")
        .row.mr-cus.d-flex.justify-content-center
          .col-md-4.d-none.d-lg-block
            figure
              img(src="@/assets/curso/temas/t1/img14.png" data-aos="zoom-in-up")
          .col-md-4
            p(data-aos="fade-in") Cuando una empresa está interesada en realizar un sistema exhaustivo de Gestión de Seguridad de la Información, debe iniciar documentando procesos y conociendo cómo opera la misma, también debe revisar el manual de funciones de cada empleado; esto es fundamental al empezar a aplicar el ciclo PHVA, en la acción, para planear, es necesario conocer los procesos digitales críticos en la organización, luego, detalladamente, se deben analizar para implementar controles que puedan proteger los procesos utilizados ante amenazas cibernéticas.
        
        .row.mr-cus.mt-5.d-flex.justify-content-center
          .col-8
            .cajon.color-secundario.p-4
              p Dentro del planear, se pueden detectar amenazas que no son externas, sino internas; las amenazas que están en Internet no son la causa de un ser humano con intenciones maliciosas, sino de los mismos empleados que, al no estar capacitados, descargan programas que vienen con troyanos o, sin intención maliciosa, pueden mover un directorio o archivo; también se deben revisar las políticas que tenga contempladas el departamento de TI de la organización.

        .bg-shadow-cus-bottom
            figure
              img(src="@/assets/curso/temas/t1/img15.svg")
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    indicadorTarjetaFlip: true,
    mostrarIndicadorAudio: true,
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
