<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        .h3 1
      .h3.text-in Tipos de residuos de productos químicos

    figure.mb-4
      img(src='@/assets/curso/tema1/img17.svg', alt='')    

    #t_1_1.titulo-segundo
      .h4.text-in 1.1. Definición de los residuos de productos químicos

    .row.mb-4
      .col-6.d-flex.align-items-center
        figure.front.w-100.me-2
          img(src="@/assets/curso/tema1/img01.png", alt="Texto que describa la imagen")
      .col-6.d-flex.align-items-center
        div
          p.mb-4 En los procesos de producción, distribución, comercialización y manejo de los productos químicos resultan residuos de empaques, envases y pequeñas cantidades de materiales sobrantes de procesos de limpieza de equipos o de reacciones generadas con ellos que se requieren clasificar, almacenar temporalmente y disponer según su peligrosidad y características fisicoquímicas y microbiológicas, asegurando la protección de la salud de las personas que los manipulan, el medio ambiente y la seguridad de las áreas de trabajo y almacenamiento.
          p Es importante identificar esta temática como insumo para la caracterización de residuos. Teniendo en cuenta la información de consulta en  la Ficha de Datos de Seguridad (FDS), es necesario revisar la información de la sección 13, la cual presenta la forma de disponer, tratar y eliminar el residuo en el producto, y la sección 10, donde está la información de reactividad y estabilidad que se debe tener presente para establecer la compatibilidad con otros residuos de productos químicos y para la selección de los envases a utilizar como contenedores, productos químicos que pueden ser vencidos, saldos o no conforme a disponer.

    p.mb-4 En la sección 8 de la FDS se encuentra la información sobre los elementos de protección personal requeridos en el proceso de manipulación del producto químico y por ende de sus residuos. Estos elementos de protección personal deben ser considerados por los manipuladores y gestores de estos residuos, así como por el trabajador que los genera. 
    p.mb-4 Las siguientes definiciones son importantes para aclarar la terminología usada en el campo de los residuos químicos.

    .video.mb-4
        iframe(width="1255" height="706" src="https://www.youtube.com/embed/Vdl29ndr07g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)      

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
                p.mb-4 Son los restos de sustancias químicas y sus empaques, o cualquier otro residuo contaminado con estos, los cuales, dependiendo de su concentración y tiempo de exposición, tienen el potencial para causar la muerte, lesiones graves o efectos adversos a la salud y el medio ambiente. Dentro de estos se resaltan, de acuerdo con el marco normativo actual colombiano (Decreto 4741 de 2005):
                .row.d-flex
                  .col-6.d-flex
                    .tarjeta-Avatar
                      img.w-30.zoom(src='@/assets/curso/tema1/img06.svg' alt='AvatarTop')
                      .tarjeta.verde-claro.p-4
                        .h4.text-center Reactivos 
                        p Son aquellos que por sí solos y en condiciones normales, al mezclarse o al entrar en contacto con otros elementos, compuestos, sustancias o residuos, generan gases, vapores, humos tóxicos, explosión o reaccionan térmicamente colocando en riesgo la salud humana o el medio ambiente. Incluye líquidos de revelado y fijado, de laboratorios, medios de contraste, reactivos vencidos, sobrantes de reactivos.
                  .col-6.d-flex     
                    .tarjeta-Avatar
                      img.w-30.zoom(src='@/assets/curso/tema1/img07.svg' alt='AvatarTop')                   
                      .tarjeta.azul-claro.p-4
                        .h4.text-center Otros residuos 
                        p Elemento o restos de estos en desuso, contaminados o que contengan metales pesados, tales como, plomo, cromo, cadmio, antimonio, bario, níquel, estaño, vanadio, zinc o mercurio; este último, por rompimiento de termómetros y demás accidentes de trabajo en los que esté presente el mercurio.
              .col-1 
            br                            
      .col-1

    p.mb-4.text-center Para ampliación de este tema se recomiendan los siguientes videos:

    .row.mb-5
      .col-1
      .col-5
        a.anexo.mb-4.mb-lg-0.milink(href="https://www.youtube.com/watch?v=iXywqWL-kAY" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/tema1/icono-link.svg")
          .anexo__texto.milink
            strong.milink  Enlace web. 
            | Comité Ambiental ESIQUE (2019, febrero 12). Residuos peligrosos (Dejar hasta el minuto 1).
      .col-5
        a.anexo.mb-4.mb-lg-0.milink(href="https://www.youtube.com/watch?v=BSBWYQEouck" target="_blank")
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
              img.swing(src='@/assets/curso/tema1/img08.svg', alt='')     
          .col-6.d-flex.align-items-center
            .tabla-b.color-primario.tabla1.me-5
              .tabla-b__header
                .h6.mb-0 RESPONSABILIDAD Y GESTIÓN DE RIESGO
              .div.p-4                       
                    p.mb-4 La diferenciación radica en que:
                    p.color-acento-contenido 1- Se deben comunicar los peligros.
                    p.color-acento-contenido 2- Se debe hecer gestión del riesgo.
                    br
                    ul.lista-ul
                      li.m-0 
                        i.lista-ul__vineta
                        | Comunicación de los PELIGROS, inherentes a la característica intrínseca e intensiva del residuo.
                      li 
                        i.lista-ul__vineta
                        | Gestión del riesgo acorde a la exposición.

    #t_1_3.titulo-segundo
      .h4 1.3. Clasificación de los residuos
    
    p.mb-4 Los residuos químicos peligrosos, resultantes de los procesos industriales, presentan características diferentes que pueden ser líquidos o sólidos principalmente, y desde estos estados deben plantearse la primera separación de ellos. Posteriormente, se deben clasificar estos residuos según la posibilidad de recuperación, de reutilización o de reciclado, que para ciertos productos resulta muy aconsejable. 
    p.mb-4 Si se considera la peligrosidad se podría establecer la siguiente clasificación, según el Decreto 4741 de 2005:

    TabsA.color-acento-contenido.mb-5   
      .tarjeta.azul-claro.p-4(titulo="Clasificación I")
        h4 Residuos peligrosos
        p Son aquellos residuos producidos por el generador con alguna característica como, infecciosos, combustibles, inflamables, explosivos, reactivos, radiactivos, volátiles, corrosivos y/o tóxicos, los cuales pueden causar daño a la salud humana y/o al medio ambiente. Así mismo, se consideran peligrosos los envases, empaques y embalajes que hayan estado en contacto con ellos.
      .tarjeta.azul-claro.p-4(titulo="Clasificación II")
        h4 Residuos no peligrosos 
        p Estos residuos, considerando sus propiedades, pueden eliminarse mediante vertidos, directamente a las aguas residuales o a un vertedero, cumpliendo la legislación nacional. 
      .tarjeta.azul-claro.p-4(titulo="Clasificación III")
        h4 Residuos químicos peligrosos
        p En este apartado quedan incluidos residuos de diferentes tipologías como explosivos, corrosivos, inflamables, comburentes que presentan características especiales diferentes a un peligro radiactivo o biológico.
    
    p.mb-4.text-center Para más información sobre este tema, consulte el documento "Clasificación de los residuos".

    .row.mb-5
      .col-4
      .col-4
        a.anexo.mb-5.mb-lg-0.milink(:href="obtenerLink('/downloads/Anexo_1_Clasificacion_de_los_residuos.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/tema1/icono-link.svg")
          .anexo__texto.milink
            strong.milink  Anexo 1. 
            | Clasificación de los residuos.
      .col-4
    
    #t_1_4.titulo-segundo
      .h4 1.4. Selección de los empaques para los residuos

    p.mb-4 Después de identificar  los residuos químicos y clasificarlos es importante seleccionar el tipo de empaque donde se debe depositar temporal o definitivamente el residuo. Dentro de las limitaciones que se tienen para realizarlo, se deben tener en cuenta la cantidad de residuos que se posee, la peligrosidad que presenta, la reactividad y las características fisicoquímicas y microbiológicas especiales de estos; y a partir de esos conocimientos, identificar el empaque del producto: si es plástico, metálico, de vidrio u otros tipos disponibles para tal fin.
    .row.mb-0
      .col-2
      .col-8
        .tabla-b.color-primario.tabla2
          .tabla-b__header
            .h6.mb-0 Tipos de envases para residuos líquidos
          .row
            .col-4.py-5
              figure
                img(src='@/assets/curso/tema1/img09.svg', alt='')    
              p Bidones de dos bocas, 200 L, de plástico y metal. 
            .col-4.py-5
              figure
                img(src='@/assets/curso/tema1/img10.svg', alt='')
              p Garrafas de  boca estrecha, 25L y 10L
            .col-4.py-5
              figure
                img(src='@/assets/curso/tema1/img11.svg', alt='')  
              p GRG, 1,000 L. 
      .col-2
    .row.mb-5
      .col-2
      .col-8
        .tabla-b.color-primario.tabla2
          .tabla-b__header
            .h6.mb-0 Envases para residuos sólidos
          .row
            .col-4.py-5
              figure
                img(src='@/assets/curso/tema1/img12.svg', alt='')    
              p Bidones de boca ancha y cierre ballesta. 30 L, 60 L y 200 L
            .col-4.py-5
              figure
                img(src='@/assets/curso/tema1/img13.svg', alt='')
              p Sacas Big-Bag. 500 L y 1000 L.
            .col-4.py-5
              figure
                img(src='@/assets/curso/tema1/img14.svg', alt='')  
              p Garrafas de boca ancha. 5 L y 10 L. 
      .col-2

    #t_1_5.titulo-segundo
      .h4 1.5. Envasado de los residuos de productos químicos
    
    p.mb-4 Después de establecer el empaque para la disposición de los residuos de productos químicos, es importante verificar las condiciones de emergencia y locativas, donde se debe realizar el envasado de estos residuos. Previamente, se deben revisar las fichas de seguridad de esos productos químicos para establecer los peligros asociados a cada uno de ellos, las recomendaciones de almacenamiento sugeridas y los elementos de protección personal recomendados para su manipulación (gafas, máscaras respiratorias, uso de delantal, calzado, etc.).

    .row.mb-4
      .col-2
      .col-8
        .row.verde-claro
          .col-3.d-flex.align-items-center.justify-content-center
            figure.w-65.my-3
              img.zoom(src='@/assets/curso/tema1/img15.svg', alt='')   
          .col-9.d-flex.align-items-center
            p El envasado deberá realizarse en zonas suficientemente ventiladas, con los elementos de protección y tomando en cuenta las recomendaciones para el trasvase de productos químicos.
      .col-2
    
    p.mb-4 Cuando los residuos de diferentes productos químicos se dispongan en un mismo contenedor, se debe considerar que la disposición hecha sea compatible de acuerdo con lectura de las FDS de los productos químicos (sección 7 y 10) y las consideraciones de clasificación establecidas en los anexos 1, 2 y 3 del decreto colombiano 4741 de 2005. 
    p.text-center.mb-4
      strong Para ampliación de este tema se recomienda observar el siguiente video.
    .row.mb-5
      .col-4
      .col-4
       a.anexo.mb-4.mb-lg-0.milink(href="https://www.youtube.com/watch?v=Y19gix9jtpQ" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/tema1/icono-link.svg")
          .anexo__texto.milink
            strong.milink  Enlace web. 
            |  Gestión de residuos químicos . Envasados.
      .col-4

    #t_1_6.titulo-segundo
      .h4 1.6. Rotulado de los residuos
    .row.justify-content-center.align-items-center.mb-4
      .col-5
        p.mb-4 Los residuos de los productos químicos deben estar rotulados para minimizar y comunicar los peligros a las personas que estén cerca de ellos mientras se realiza la disposición final.
        p.mb-4 A continuación se presenta un ejemplo de un formato de rótulo de residuos líquidos peligrosos inflamables y carcinogénicos. 
        p.mb-4 Nótese que es importante considerar en el rotulado los marcos regulatorios que le corresponda para el transporte como residuo peligroso, Decreto 1609 de 2002 (etiquetado y marcado).
      .col-7.div-color-primario.p-3
        .row
          .col-12.texto-blanco
            h6.text-center Ejemplificación de rotulado para residuo líquido peligroso
          .col-12
            figure
              img.img-a.img-t(src='@/assets/curso/tema1/img16.jpeg', alt='')   
    
    

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
