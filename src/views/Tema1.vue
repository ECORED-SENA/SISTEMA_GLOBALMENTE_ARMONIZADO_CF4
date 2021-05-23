<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        .h3 1
      .h3 Tipos de residuos de productos químicos
    
    #t_1_1.titulo-segundo
      .h4 1.1. Definición de los residuos de productos químicos

    .row.mb-4
      .col-6.d-flex.align-items-center
        figure.front.w-100.me-2
          img(src="@/assets/curso/tema1/img01.png", alt="Texto que describa la imagen")
      .col-6.d-flex.align-items-center
        div
          p.mb-4 En los procesos de producción, distribución, comercialización y manejo de los productos químicos resultan residuos de empaques, envases y pequeñas cantidades de materiales sobrantes de procesos de limpieza de equipos o de reacciones generadas con ellos que se requieren clasificar, almacenar temporalmente y disponer según su peligrosidad y características fisicoquímicas y microbiológicas, asegurando la protección de la salud de las personas que los manipulan, el medio ambiente y la seguridad de las áreas de trabajo y almacenamiento.
          p Es importante identificar que esta temática va unida al Sistema Globalmente Armonizado (SGA) como insumo para la caracterización de residuos. Teniendo en cuenta la información de consulta en  la Ficha de Datos de Seguridad (FDS), es necesario revisar la información de la sección 13, la cual presenta la forma de disponer, tratar y eliminar el residuo en el producto, y la sección 10, donde está la información de reactividad y estabilidad que se debe tener presente para establecer la compatibilidad con otros residuos de productos químicos y para la selección de los envases a utilizar como contenedores, productos químicos que pueden ser vencidos, saldos o no conforme a disponer.

    p.mb-4 En la sección 8 de la FDS se encuentra la información sobre los elementos de protección personal requeridos en el proceso de manipulación del producto químico y por ende de sus residuos. Estos elementos de protección personal deben ser considerados por los manipuladores y gestores de estos residuos, así como por el trabajador que los genera. 
    p.mb-4 Las siguientes definiciones son importantes para aclarar la terminología usada en el campo de los residuos químicos.

    .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)      





</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
