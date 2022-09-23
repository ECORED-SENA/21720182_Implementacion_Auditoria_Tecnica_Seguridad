<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero(data-aos="zoom-in")
        span
          i.fas.fa-info
      h1(data-aos="zoom-in") Introducción
    
    
    
    p.mb-5(data-aos="zoom-in") ¿Qué es Seguridad de la Información? ¿Por qué se debe implementar? Son interrogantes que el siguiente video responde de forma general, como un abrebocas a la temática que se desarrollará en el componente formativo.
    figure.mb-5(data-aos="zoom-in")
      .video      
        iframe(width="1261" height="719" src="https://www.youtube.com/embed/4uCOeKUQtW4" title="Fundamentos normativos y estándares de las políticas de un SGSI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)      
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
