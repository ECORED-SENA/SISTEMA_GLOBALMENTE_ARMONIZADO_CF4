<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        .h3
          i.fas.fa-info
      .h3.text-in Introducción
    
    .row
      .col-1
      .col-3      
        figure.mx-4.front.w-90
          img(src="@/assets/curso/introduccion/img01.svg", alt="Texto que describa la imagen")
      .col-7.d-flex.align-items-center
        .div
          p.mb-4 En las industrias, los residuos de productos químicos y de envases, que los contienen, es una situación de todos los días; por eso, el compromiso con el manejo responsable del ambiente debe ser identificado y aplicado por cada persona que entra en contacto con ellos.  Esto es un elemento fundamental de seguridad que exige la aplicación de unos conocimientos específicos para asegurar que los productos y las áreas no se vean sometidos a peligros por la manipulación inadecuada de estos residuos de químicos y empaques. 
          p.mb-4 Este componente busca realizar un recorrido sobre elementos, componentes y normativas importantes, que se deben tomar en cuenta en precauciones, recomendaciones y procedimientos, que a su vez se deben realizar con los diversos residuos, empaques y envases de productos químicos, según la tipología y peligros que cada uno presenta
      .col-1
    .row
      .col-1
      .col-10.div-color-primario.back   
        br
        br
        br       
      .col-1
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
