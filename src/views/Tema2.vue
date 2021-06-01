<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        .h3 2
      .h3 Disposición de los residuos de productos químicos

    figure.mb-4
      img(src="@/assets/curso/tema2/img04.png", alt="Texto que describa la imagen")
    
    #t_2_1.titulo-segundo
      .h4 2.1. Almacenamiento temporal de los residuos

    .row.mb-4
      .col-5.d-flex.align-items-center
        figure
          img(src="@/assets/curso/tema2/img01.png", alt="Texto que describa la imagen")
      .col-7.d-flex.align-items-center
        div
          p.mb-4 Los residuos de productos químicos peligrosos requieren ser almacenados temporalmente mientras se define su tratamiento o procesos para disposición final, por eso es importante en los lugares de almacenamiento llevar el control de fechas de ingreso y salida de estos residuos, segregación de acuerdo con su compatibilidad, pretratamiento realizado, peligrosidad y reactividad, para poder distribuir en la bodega, o sitio de almacenamiento, los espacios, de tal forma que este no se convierta en un riesgo para la empresa y el área donde está ubicado. Deberá contar con sitios de ventilación, iluminación acorde a los tipos de productos almacenados, techos, paredes, pisos en materiales que permitan su manipulación y un acceso restringido, sobre todo en lo que respecta a residuos tóxicos.
          p Para el almacenamiento de los residuos de productos químicos es necesario revisar la matriz de compatibilidad para cada tipo de producto y tenerla en cuenta para su ubicación en el sitio de almacenamiento.
    
    #t_2_2.titulo-segundo
      .h4 2.2. Rutas de recolección de los residuos
    
    p.mb-4 En una empresa, en una distribuidora o una comercializadora de productos químicos se generan muchos residuos de productos químicos, empaques y envases; por eso, se debe de disponer de medios para movilizar esos residuos desde los sitios de generación hasta donde serán almacenados temporalmente, convirtiéndose  en las rutas de recolección de los residuos de productos químicos. Para establecer estas rutas de recolección de residuos químicos es importante identificar las cantidades a transportar, la peligrosidad, la reactividad y los riesgos que estos productos presentan. De esta forma, se seleccionan los medios de transporte idóneos para realizarlo.

    .row
      .col-1
      .col-10
        figure.mb-4
          img(src="@/assets/curso/tema2/img03.svg", alt="Texto que describa la imagen")
      .col-1
    #t_2_3.titulo-segundo
      .h4 2.3. Protocolos de disposición final de los residuos
    
    p.mb-4 Los residuos de productos químicos peligrosos corresponden según la normatividad a residuos peligrosos y requieren contar con protocolos y políticas para la gestión, tratamiento y disposición de estos residuos, cumpliendo los requerimientos legales de las autoridades locales y nacionales ambientales, así como el correcto transporte para mercancía peligrosa y su disposición por gestores autorizados. 
    figure.mb-4
      img(src="@/assets/curso/tema2/img02.png", alt="Texto que describa la imagen")

    p.text-center.mb-4
      strong Para ampliación de este tema se recomienda observar el siguiente video.
    .row.mb-5
      .col-4
      .col-4
       a.anexo.mb-4.mb-lg-0.milink(href="https://www.youtube.com/watch?v=95vZYxZ5VzY" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/tema2/icono-link.svg")
          .anexo__texto.milink
            strong.milink  Enlace web. 
            |  Gestión de residuos químicos. Tratamientos.  (Dejar hasta el minuto 7).
      .col-4
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
