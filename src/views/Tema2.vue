<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="zoom-in")
        span 2
      h1(data-aos="zoom-in") Herramientas para la valoración de riesgo 
      
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t2/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4(data-aos="zoom-in")
        p.mb-2 La valoración del riesgo asegura que el SGSI logre los efectos previstos, donde, con las mismas herramientas, se pueden prevenir o reducir efectos indeseados, logrando la mejora progresiva, integrando e implementando acciones en los procesos del sistema de gestión de la seguridad de la información.
        p Existen empresas en el mundo que ofrecen una gran cantidad de herramientas para la valoración del riesgo, como:
    
    .row.d-flex.justify-content-center(data-aos="zoom-in")
      .col-sm-12.col-md-6.col-lg-6.bg-gradient-cus.p-5
        .row.mb-4.d-flex.justify-content-center.align-items-center
          .col-sm-6.col-md-4.col-lg-4
            figure
              img(src="@/assets/curso/temas/t2/img2.png" data-aos="zoom-in-up")
          .col-sm-6.col-md-4.col-lg-4
            p.mt-2 spiraPlan de inflectra
        
        .row.mb-4.d-flex.justify-content-center.align-items-center
          .col-sm-6.col-md-4.col-lg-4
            figure
              img(src="@/assets/curso/temas/t2/img3.png" data-aos="zoom-in-up")
          .col-sm-6.col-md-4.col-lg-4
            p.mt-2 IsoMetriz

        .row.mb-4.d-flex.justify-content-center.align-items-center
          .col-sm-6.col-md-4.col-lg-4
            figure
              img(src="@/assets/curso/temas/t2/img4.png" data-aos="zoom-in-up")
          .col-sm-6.col-md-4.col-lg-4
            p.mt-2 Rastreador a 1
        
        .row.m-0.p-0
          .col-12.text-center.m-0.p-0
            p.m-0.p-0 Entre otras
    
    Separador

    #t_2_1.titulo-segundo.color-acento-contenido
      h2(data-aos="zoom-in") 2.1 Auditoría de activos   
    .row.mb-3(data-aos="zoom-in")
      .col-12
        p La auditoría de activos debe conocer cómo está conformada la infraestructura tecnológica, es decir, se deben saber los activos tecnológicos con los que cuenta la empresa al momento de iniciar, los cuales son:
    SlyderC.mb-5(:datos="datosSlyder")(data-aos="zoom-in")
    .row.mb-3(data-aos="zoom-in")
      .col-12
        p Ahora, los beneficios de una auditoría de activos son:
    
    .row(data-aos="zoom-in").m-0.p-0
      .col-12.m-0.p-0
        .titulo-sexto.color-acento-contenido
          h5 Figura 3.
          span Beneficios de una auditoría de activos
    .row(data-aos="zoom-in").m-0.p-0.bd-full-view
      .col-12.m-0.p-0.hcus-bg-img(:style="{'background-image': `url(${require('@/assets/curso/temas/t2/img27.svg')})`}").d-flex.justify-content-center.align-items-center
        .row.d-flex.justify-content-center.align-items-center
          .col-sm-12.col-md-12.col-lg-12
            figure
              img(src="@/assets/curso/temas/t2/img12.svg", alt="alt")
    Separador
    .row.bd-full-view-2.bg-gradient-cus(data-aos="zoom-in")
      .bg-shadow-cus-top
          figure
            img(src="@/assets/curso/temas/t1/img16.svg")
      .col-12.mr-cus-2.m-0.p-0
        #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-in")
          h2 2.2 Identificación de riesgos  
        .row.mb-3
          .col-11
            p En la identificación de riesgos, se debe recordar que la inseguridad se enuncia en procesos de la composición de los resultados de un suceso y la probabilidad de ocurrencia asociada.
            p.mt-1 Las fuentes de riesgos pueden ser:
        .row.d-flex.justify-content-center
          .col-sm-12.col-md-5.col-lg-5
            figure
              img(src="@/assets/curso/temas/t2/img13.png" data-aos="zoom-in-up")
          .col-sm-12.col-md-4.col-lg-4(data-aos="zoom-in").mt-sm-5
            ul.lista-ul--color
                li 
                  i.fas.fa-database
                  | Legales.
                li 
                  i.fas.fa-database
                  | Comportamiento humano (interno y externo).
                li 
                  i.fas.fa-database
                  | Comerciales.
                li 
                  i.fas.fa-database
                  | Economía y mercado.
                li 
                  i.fas.fa-database
                  | Circunstancias políticas.
                li 
                  i.fas.fa-database
                  | Tecnología.
                li 
                  i.fas.fa-database
                  | Eventos naturales.
                li 
                  i.fas.fa-database
                  | Organizacionales.
        .row.my-4
          .col-11
            p(data-aos="zoom-in") En la gestión del riesgo de Seguridad de la Información, se debe proteger la empresa ante posibles consecuencias, como:
        .row.d-flex.justify-content-center
          .col-sm-10.col-md-4.col-lg-4
            ul.lista-ul--color(data-aos="zoom-in")
                  li 
                    i.fas.fa-database
                    | Pérdidas de confidencialidad.
                  li 
                    i.fas.fa-database
                    | Integridad. 
                  li 
                    i.fas.fa-database
                    | Disponibilidad.
                  li 
                    i.fas.fa-database
                    | No-repudio.
                  li 
                    i.fas.fa-database
                    | Autenticidad.
                  li 
                    i.fas.fa-database
                    | Confiabilidad de los activos.
                  li 
                    i.fas.fa-database
                    | Incumplimiento de la legislación.
                  li 
                    i.fas.fa-database
                    | Pérdidas financieras.
                  li 
                    i.fas.fa-database
                    | Impacto del orden público.
                  li 
                    i.fas.fa-database
                    | Impacto del orden internacional.  
          .col-sm-10.col-md-5.col-lg-5
            figure
              img(src="@/assets/curso/temas/t2/img14.png" data-aos="zoom-in-up")
      .bg-shadow-cus-bottom(data-aos="zoom-in")
            figure
              img(src="@/assets/curso/temas/t1/img15.svg")
    .row.mb-5.mt-sm-5(data-aos="zoom-in")
      .col-12
        p Es así como se pueden relacionar el SGSI y la gestión del riesgo haciendo uso del diagrama PHVA, de la siguiente manera:

    .row(data-aos="zoom-in").m-0.p-0.d-flex.justify-content-center
      .col-sm-12.col-md-8.col-lg-8.tarjeta--gris.p-4.radius-20-cus.shadow-box
        .row(data-aos="zoom-in").m-0.p-0
          .col-12.m-0.p-0
            .titulo-sexto.color-acento-contenido
              h5 Figura 4.
              span El SGSI y la gestión del riesgo: Guía Icontec internacional educación
        .row(data-aos="zoom-in").d-flex.justify-content-center
          .col-sm-12.col-md-9.col-lg-9
            figure
              img(src="@/assets/curso/temas/t2/img15.svg", alt="alt") 
    .row.m-0.p-0.d-flex.justify-content-center.align-items-center.mt-4
      .col-sm-12.col-md-8.col-lg-8.tarjeta--gris.p-2.radius-20-cus.shadow-box
        .row.d-flex.align-items-center
          .col-12
            p.mt-3.px-3 Nota: Tomado de Guía de gestión de riesgos de seguridad de la información, 2021. https://www.icontec.org
    Separador



    #t_2_3.titulo-segundo.color-acento-contenido
      h2(data-aos="zoom-in") 2.3 Áreas de impacto  
    .row.mb-3
      .col-12(data-aos="zoom-in")
        p El impacto es la capacidad de saber el estado real de seguridad de un activo antes y después de materializar las amenazas. En un SGSI, al concretarse una amenaza, el activo cambia de estado, es decir, antes de producirse la amenaza, se tiene un valor del activo, y después que se efectúe la amenaza, se tiene la diferencia entre el estado anterior y el posterior a la amenaza.
        p.mt-1 Se clasifica, según el tipo de impacto, como:

    .row.mb-5.d-flex.justify-content-center
      .col-sm-12.col-md-3.mb-5.mb-lg-0.img-hover-cus(data-aos="zoom-in")
        .tarjeta-avatar
          img.img-width-cus(src='@/assets/curso/temas/t2/img16.png' alt='AvatarTop')
          .tarjeta.border-img-cus(:style="{'background-image': `url(${require('@/assets/curso/temas/t1/img5.svg')})`}")
            .p-3.text-center
              .h4.mt-4  Extremo
      .col-sm-12.col-md-3.mb-5.mb-lg-0.img-hover-cus(data-aos="zoom-in")
        .tarjeta-avatar
          img.img-width-cus(src='@/assets/curso/temas/t2/img17.png' alt='AvatarTop')
          .tarjeta.border-img-cus(:style="{'background-image': `url(${require('@/assets/curso/temas/t1/img5.svg')})`}")
            .p-3.text-center
              .h4.mt-4 Importante 
      .col-sm-12.col-md-3.mb-5.mb-lg-0.img-hover-cus(data-aos="zoom-in")
        .tarjeta-avatar
          img.img-width-cus(src='@/assets/curso/temas/t2/img18.png' alt='AvatarTop')
          .tarjeta.border-img-cus(:style="{'background-image': `url(${require('@/assets/curso/temas/t1/img5.svg')})`}")
            .p-3.text-center
              .h4.mt-4 Moderado 
    .row.mb-3.d-flex.justify-content-center(data-aos="zoom-in")
      .col-sm-12.col-md-3.mb-5.mb-lg-0.img-hover-cus
        .tarjeta-avatar
          img.img-width-cus(src='@/assets/curso/temas/t2/img19.png' alt='AvatarTop')
          .tarjeta.border-img-cus(:style="{'background-image': `url(${require('@/assets/curso/temas/t1/img5.svg')})`}")
            .p-3.text-center
              .h4.mt-4 Menor 
      .col-sm-12.col-md-3.mb-5.mb-lg-0.img-hover-cus
        .tarjeta-avatar
          img.img-width-cus(src='@/assets/curso/temas/t2/img20.png' alt='AvatarTop')
          .tarjeta.border-img-cus(:style="{'background-image': `url(${require('@/assets/curso/temas/t1/img5.svg')})`}")
            .p-3.text-center
              .h4.mt-4 Incidental 
    .row.mt-cus.mx-cus.d-flex.justify-content-center(data-aos="zoom-in")
      .col-sm-12.col-md-8.col-lg-8.p-0.text-center
        .row.d-flex.justify-content-center.bg-list
          .col-sm-12.col-md-3.my-5
              ul.lista-ul--color(data-aos="zoom-in")
                    li.mb-4
                      i.fas.fa-database
                      | Extremo. 
                    li.mb-4 
                      i.fas.fa-database
                      | Importante.
                    li.mb-4 
                      i.fas.fa-database
                      | Moderado.
                    li.mb-4 
                      i.fas.fa-database
                      | Menor.
                    li.mb-4 
                      i.fas.fa-database
                      | Incidental.
          .col-sm-2.col-md-5.my-5.d-none.d-lg-block(data-aos="zoom-in")
                figure
                  img(src="@/assets/curso/temas/t2/img21.png" data-aos="zoom-in-up")
    .row.my-5(data-aos="zoom-in")
      .col-12.text-center
        p Cada clasificación se puede crear o dar dependiendo del tamaño de la organización y el valor podría darse en un rango de 0 a 5.
    Separador


    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-in")
      h2(data-aos="zoom-in") 2.4 Marco normativo
    .row.mb-3(data-aos="zoom-in")
      .col-12
        p Colombia es unos de los países de Latinoamérica que tiene mejor regulación en temas de protección de seguridad de la información; actualmente, hace parte del convenio de cibercriminalidad de Budapest y ha puesto en marcha y práctica con las instituciones del Estado el CONPES 3701 de 2011 sobre los lineamientos de ciberdefensa y ciberseguridad con el ColCERT.
        p.mt-1 Dentro del marco normativo, están leyes como:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")(data-aos="zoom-in")
      .row.justify-content-center(titulo="Ley 527 de 1999")
        .col-lg-2.col-8
          figure.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/t2/img22.png', alt='Texto que describa la imagen')
        .col-lg-8.col-12
          p “Por medio de la cual se define y reglamenta el acceso y uso de los mensajes de datos, del comercio electrónico y de las firmas digitales, y se establecen las entidades de certificación y se dictan otras disposiciones”.
          p.mt-1 Con esta ley, se puede establecer la importancia y validez de los mensajes de datos frente a un ataque informático y qué se requiere para extraer evidencia digital.
      .row.justify-content-center(titulo="Ley 1273 de 2009")
        .col-lg-2.col-8
          figure.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/t2/img23.png', alt='Texto que describa la imagen')
        .col-lg-8.col-12
          p Conocida como la configuración y tipificación de los delitos informáticos en Colombia; puede aplicar la evidencia digital obtenida mediante la ley 527 de 1999.
      .row.justify-content-center(titulo="Norma ISO 27001")
        .col-lg-2.col-8
          figure.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/t2/img24.png', alt='Texto que describa la imagen')
        .col-lg-8.col-12
          p Norma internacional que admite la protección, confidencialidad e integridad de los datos y de la información.
      .row.justify-content-center(titulo="Norma ISO 27002")
        .col-lg-2.col-8
          figure.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/t2/img25.png', alt='Texto que describa la imagen')
        .col-lg-8.col-12
          p Establece directrices y principios generales para iniciar, implementar, mantener y mejorar la gestión de la seguridad de la información en una organización.


    .row.mb-3(data-aos="zoom-in")
      .col-12
        p En la siguiente figura, se muestran los artículos de la ley 1273 con ejemplos básicos de posibles conductas punibles que se pueden cometer por su desconocimiento.
        p.mt-1 Es importante recordar que el desconocimiento de la ley o los delitos no es causal para el ordenamiento procesal colombiano e internacional. Colombia, al contar con una legislación y procedimientos de primera, hace parte del convenio de Budapest, donde se convierten en delitos transnacionales.

    .row(data-aos="zoom-in").mb-5
      .col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 5.
          span Ley 1273 del ordenamiento procesal colombiano

        figure.mb-4
          img(src="@/assets/curso/temas/t2/img26.svg", alt="alt")
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t2/img26.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-1 En la era de la 4º Revolución Industrial, las organizaciones migraron al teletrabajo y home office, nacieron conceptos como nómadas digitales, donde un trabajador, desde cualquier parte del mundo, puede cumplir con sus obligaciones y funciones contractuales, por lo que es fundamental que la organización se blinde ante la fuga de información y frente a posibles ataques cibernéticos.
        p En Colombia, también se cuenta con ley de teletrabajo y CONPES de transformación digital, el país está bien preparado en normatividad y afín a las nuevas tecnologías, se encuentra catalogado como el mejor respondiente a incidentes informáticos en Latinoamérica. 
    
</template>

<script>
export default {
  name: 'Tema2',
  components: {},
  data: () => ({
    indicadorTarjetaFlip: true,
    mostrarIndicadorAudio: true,
    datosSlyder: [
      {
        titulo:
          '<h4>Inventario de todo el parque computacional existente.</h4>',
        texto: '',
        imagen: require('@/assets/curso/temas/t2/img5.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '<h4>Cantidad de servidores locales o de nube.</h4>',
        texto: '',
        imagen: require('@/assets/curso/temas/t2/img6.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '<h4>Topología de la RED.</h4>',
        texto: '',
        imagen: require('@/assets/curso/temas/t2/img7.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          '<h4>Inventario de <i>hardware</i> (discos extraíbles, impresoras), verificando si están conectados a la RED local de la empresa.</h4>',
        texto: '',
        imagen: require('@/assets/curso/temas/t2/img8.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '<h4><i>Intranet</i> en caso de existir.</h4>',
        texto: '',
        imagen: require('@/assets/curso/temas/t2/img9.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '<h4>Página web y los servicios que preste en directo.</h4>',
        texto: '',
        imagen: require('@/assets/curso/temas/t2/img10.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '<h4>Bases de datos existentes.</h4>',
        texto: '',
        imagen: require('@/assets/curso/temas/t2/img11.png'),
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
