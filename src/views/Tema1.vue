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

    .video.mb-4
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)      

    .row.mb-4
      .col-1
      .col-10
        p Según el Ministerio de Ambiente (MAVDT, 2007) y el Decreto 4741 de 2005 del MinAmbiente se define:

    .row.mb-4
      .col-1
      .col-10
        TabsB.color-acento-contenido.mb-4
          .py-4.py-md-5(titulo="Residuo o desecho" :icono="require('@/assets/curso/tema1/img01.svg')")
            .row
              .col-1
              .col-10
                .h4 Residuo o desecho
                p.mb-4 Cualquier objeto, material, sustancia, elemento o producto que se encuentre en estado sólido o semisólido, o líquido o gas contenido en recipientes o depósitos, cuyo generador descarta, rechaza o entrega porque sus propiedades no permiten usarlo nuevamente en la actividad que lo generó, o porque la legislación o la normatividad vigente así lo estipula.
                figure
                  img(src='@/assets/curso/tema1/img04.png', alt='')              
              .col-1            
          .py-4.py-md-5(titulo="Residuos peligrosos" :icono="require('@/assets/curso/tema1/img02.svg')")
            .row
              .col-1
              .col-10
                .h4 Residuos peligrosos
                p.mb-4 Son aquellos residuos producidos por el generador con alguna característica como, infecciosos, combustibles, inflamables, explosivos, reactivos, radiactivos, volátiles, corrosivos y/o tóxicos, los cuales pueden causar daño a la salud humana y/o al medio ambiente. Así mismo, se consideran peligrosos los envases, empaques y embalajes que hayan estado en contacto con ellos.             
                figure
                  img(src='@/assets/curso/tema1/img05.png', alt='')     
              .col-1         

          .py-4.py-md-5(titulo="Residuos químicos peligrosos" :icono="require('@/assets/curso/tema1/img03.svg')")
            .row
              .col-1
              .col-10
                .h4 Residuos químicos peligrosos
                p.mb-4 son los restos de sustancias químicas y sus empaques, o cualquier otro residuo contaminado con estos, los cuales, dependiendo de su concentración y tiempo de exposición, tienen el potencial para causar la muerte, lesiones graves o efectos adversos a la salud y el medio ambiente. Dentro de estos se resaltan, de acuerdo con el marco normativo actual colombiano (Decreto 4741 de 2005):
                .row.d-flex
                  .col-6.d-flex
                    .tarjeta-Avatar
                      img.w-30(src='@/assets/curso/tema1/img06.svg' alt='AvatarTop')
                      .tarjeta.verde-claro.p-4
                        .h4.text-center Reactivos 
                        p Son aquellos que por sí solos y en condiciones normales, al mezclarse o al entrar en contacto con otros elementos, compuestos, sustancias o residuos, generan gases, vapores, humos tóxicos, explosión o reaccionan térmicamente colocando en riesgo la salud humana o el medio ambiente. Incluye líquidos de revelado y fijado, de laboratorios, medios de contraste, reactivos vencidos, sobrantes de reactivos.
                  .col-6.d-flex     
                    .tarjeta-Avatar
                      img.w-30(src='@/assets/curso/tema1/img07.svg' alt='AvatarTop')                   
                      .tarjeta.azul-claro.p-4
                        .h4.text-center Reactivos 
                        p Son aquellos que por sí solos y en condiciones normales, al mezclarse o al entrar en contacto con otros elementos, compuestos, sustancias o residuos, generan gases, vapores, humos tóxicos, explosión o reaccionan térmicamente colocando en riesgo la salud humana o el medio ambiente. Incluye líquidos de revelado y fijado, de laboratorios, medios de contraste, reactivos vencidos, sobrantes de reactivos.
              .col-1 
            br                            
      .col-1

    p.mb-4.text-center Si desea profundizar en este tema se recomienda los siguientes videos:

    .row.mb-5
      .col-1
      .col-5
        a.anexo.mb-4.mb-lg-0.milink(href="http://quimicabiologianutricional.blogspot.com/2016/10/usos-y-aplicaciones-de-las-soluciones.html" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/tema1/icono-link.svg")
          .anexo__texto.milink
            strong.milink  Enlace web. 
            | Comité Ambiental ESIQUE (2019, febrero 12). Residuos peligrosos (Dejar hasta el minuto 1).
      .col-5
        a.anexo.mb-4.mb-lg-0.milink(href="http://quimicabiologianutricional.blogspot.com/2016/10/usos-y-aplicaciones-de-las-soluciones.html" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/tema1/icono-link.svg")
          .anexo__texto.milink
            strong.milink  Enlace web. 
            | Universidad del País Vasco. [UPV/EHU]. (2018, abril 25). Módulo 7: Consideraciones residuos peligrosos de origen químico 
      .col-1

    #t_1_2.titulo-segundo
      .h4 1.2. Tipología de los residuos
    
    .row.mb-5
      .col-4.d-flex.align-items-center
        p En los procesos industriales se generan residuos de empaques, productos químicos, procesos de lavado, que llevan a requerir realizar la identificación por tipología de ellos (peligrosos y no peligrosos) para poder establecer el procedimiento que se deberá seguir.  En algunos casos, estos residuos pueden ser aprovechados en los procesos industriales; en otras ocasiones, y según estén mezclados o sean los productos originales, se presenta también una limitación para el marcado, su reutilización y disposición final.
      .col-8
        .row
          .col-6.d-flex.align-items-center
            figure
              img(src='@/assets/curso/tema1/img08.svg', alt='')     
          .col-6.d-flex.align-items-center
            .tabla-b.color-primario.tabla1.me-5
              .tabla-b__header
                .h6.mb-0 RESPONSABILIDAD Y GESTION DE RIESGO
              .div.p-4                       
                    p.mb-4 La diferenciación radica en que:
                    p.color-acento-contenido 1- Se deben comunicar los peligros.
                    p.color-acento-contenido 2- Se debe hecer gestión del riesgo.
                    br
                    ul.lista-ul
                      li.m-0 
                        i.lista-ul__vineta
                        | Comunicación de los peligros, inherentes a la característica intrínseca e intensiva del residuo.
                      li 
                        i.lista-ul__vineta
                        | Gestión del riesgo acorde a la exposición.
        
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
