(function(e){function a(a){for(var i,n,s=a[0],c=a[1],d=a[2],l=0,u=[];l<s.length;l++)n=s[l],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&u.push(r[n][0]),r[n]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);m&&m(a);while(u.length)u.shift()();return t.push.apply(t,d||[]),o()}function o(){for(var e,a=0;a<t.length;a++){for(var o=t[a],i=!0,n=1;n<o.length;n++){var s=o[n];0!==r[s]&&(i=!1)}i&&(t.splice(a--,1),e=c(c.s=o[0]))}return e}var i={},n={app:0},r={app:0},t=[];function s(e){return c.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"c3ac4789","chunk-0206bfa0":"21195c5f","chunk-0cfca828":"ce8c708e","chunk-13303073":"19cc9e2d","chunk-1479a341":"99c0e958","chunk-1fb07a61":"0f84c4f1","chunk-2c06842c":"dff137eb","chunk-2d0dad62":"a3870da0","chunk-2d208d90":"b8a993e0","chunk-2d21d0e2":"fd68b0f4","chunk-2d22c123":"e4159e4d","chunk-2e80bb9a":"1cc43244","chunk-515a8379":"7ef60585","chunk-522cec8c":"0b1c7e5d","chunk-59974754":"4a7a1bb1","chunk-5a6377df":"b826fb29","chunk-7432e4d4":"307b28da","chunk-766a929b":"19e1dd5f","chunk-c796899c":"e00fd4a5",comple:"6908f009",creditos:"e5acef34",glosario:"4f8e6230",intro:"43ee2dda",referencias:"f4b84d9b",tema1:"f2e7fe93",tema2:"1349437d",tema3:"f9273a8d"}[e]+".js"}function c(a){if(i[a])return i[a].exports;var o=i[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(e){var a=[],o={"chunk-0cfca828":1,"chunk-13303073":1,"chunk-1479a341":1,"chunk-1fb07a61":1,"chunk-515a8379":1,"chunk-522cec8c":1,"chunk-59974754":1,"chunk-5a6377df":1,"chunk-7432e4d4":1,"chunk-766a929b":1,comple:1,creditos:1,glosario:1,intro:1,referencias:1};n[e]?a.push(n[e]):0!==n[e]&&o[e]&&a.push(n[e]=new Promise((function(a,o){for(var i="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0cfca828":"99a35118","chunk-13303073":"99a35118","chunk-1479a341":"99a35118","chunk-1fb07a61":"99a35118","chunk-2c06842c":"31d6cfe0","chunk-2d0dad62":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-515a8379":"54d789c7","chunk-522cec8c":"99a35118","chunk-59974754":"70ade3f9","chunk-5a6377df":"eecfadba","chunk-7432e4d4":"99a35118","chunk-766a929b":"37f0c8d3","chunk-c796899c":"31d6cfe0",comple:"1487a140",creditos:"54d789c7",glosario:"02d55402",intro:"0e433876",referencias:"dd16a102",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0"}[e]+".css",r=c.p+i,t=document.getElementsByTagName("link"),s=0;s<t.length;s++){var d=t[s],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===i||l===r))return a()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){d=u[s],l=d.getAttribute("data-href");if(l===i||l===r)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var i=a&&a.target&&a.target.src||r,t=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=i,delete n[e],m.parentNode.removeChild(m),o(t)},m.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){n[e]=0})));var i=r[e];if(0!==i)if(i)a.push(i[2]);else{var t=new Promise((function(a,o){i=r[e]=[a,o]}));a.push(i[2]=t);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var u=new Error;d=function(a){l.onerror=l.onload=null,clearTimeout(m);var o=r[e];if(0!==o){if(o){var i=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+n+")",u.name="ChunkLoadError",u.type=i,u.request=n,o[1](u)}r[e]=void 0}};var m=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(a)},c.m=e,c.c=i,c.d=function(e,a,o){c.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,a){if(1&a&&(e=c(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var i in e)c.d(o,i,function(a){return e[a]}.bind(null,i));return o},c.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(a,"a",a),a},c.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},c.p="",c.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=a,d=d.slice();for(var u=0;u<d.length;u++)a(d[u]);var m=l;t.push([0,"chunk-vendors"]),o()})({0:function(e,a,o){e.exports=o("56d7")},"52e5":function(e,a,o){e.exports=o.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,o){"use strict";o.r(a);o("e260"),o("e6cf"),o("cca6"),o("a79d");var i=o("2b0e"),n=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"app",attrs:{id:"app"}},[o("Header"),o("div",{staticClass:"contenedor-principal"},[o("AsideMenu"),o("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[o("router-view"),o("footer")],1)],1),o("BarraAvance")],1)},r=[],t={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}}},s=t,c=(o("cf25"),o("2877")),d=Object(c["a"])(s,n,r,!1,null,null,null),l=d.exports,u=(o("d3b7"),o("3ca3"),o("ddb0"),o("b0c0"),o("8c4f")),m=o("ae58"),p=o("7e58");i["a"].use(u["a"]);var f=new u["a"]({routes:[{path:"/",name:"inicio",component:m["a"]},{path:"/introduccion",name:"introduccion",component:function(){return o.e("intro").then(o.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return o.e("tema1").then(o.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return o.e("tema2").then(o.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return o.e("tema3").then(o.bind(null,"eb46"))}}]},{path:"/actividad",name:"actividad",component:function(){return o.e("actividad").then(o.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return o.e("glosario").then(o.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return o.e("comple").then(o.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return o.e("referencias").then(o.bind(null,"64ef"))}},{path:"/creditos",name:"creditos",component:function(){return o.e("creditos").then(o.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var o={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?o:new Promise((function(e){setTimeout((function(){e(o)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),b=f,g=o("1c2c"),h=(o("becf"),o("7b17"),o("ab8b"),o("a3a0"),o("4bc7"),o("78df"),{global:{componenteFormativo:"Residuos de productos químicos                                  ",descripcionCurso:"En las industrias, los residuos de productos químicos y de envases, que los contienen, es una situación de todos los días; por eso, el compromiso con el manejo responsable del ambiente debe ser identificado y aplicado por cada persona que entra en contacto con ellos.  Esto es un elemento fundamental de seguridad que exige la aplicación de unos conocimientos específicos para asegurar que los productos y las áreas no se vean sometidos a peligros por la manipulación inadecuada de estos residuos de químicos y empaques.",imagenBannerPrincipal:o("ae0a"),fondoBannerPrincipal:o("e6b0")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Tipos de residuos de productos químicos",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Definición de los residuos de productos químicos",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Tipología de los residuos",hash:"t_1_2"},{icono:"far fa-file-alt",numero:"1.3",titulo:"Clasificación de los residuos",hash:"t_1_3"},{icono:"far fa-file-alt",numero:"1.4",titulo:"Selección de los empaques para los residuos",hash:"t_1_4"},{icono:"far fa-file-alt",numero:"1.5",titulo:"Envasado de los residuos de productos químicos",hash:"t_1_5"},{icono:"far fa-file-alt",numero:"1.6",titulo:"Rotulado de los residuos",hash:"t_1_6"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Disposición de los residuos de productos químicos",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Almacenamiento temporal de los residuos",hash:"t_2_1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Rutas de recolección de los residuos",hash:"t_2_2"},{icono:"far fa-file-alt",numero:"2.3",titulo:"Protocolos de disposición final de los residuos",hash:"t_2_3"}]}],subMenu:[{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},creditos:{liderEquipo:{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo"},contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura",regional:"Regional Santander"},{nombre:"Marta Lucía Hernández",cargo:"Instructora",centro:"Centro Textil y de Gestión Industrial"},{nombre:"Luis Eugenio Ramírez Duarte",cargo:"Experto técnico",centro:"ONUDI"},{nombre:"Sergio Arturo Medina Castillo",cargo:"Diseñador Instruccional ",centro:"Centro para la Industria de la Comunicación Gráfica"},{nombre:"Ana Catalina Córdoba Sus",cargo:"Revisión metodológica y pedagógica",centro:"Centro para la Industria de la Comunicación Gráfica",regional:"Regional Distrito Capital"},{nombre:"Julia Isabel Roberto",cargo:"Diseñadora y evaluadora instruccional",centro:"Centro para la Industria de la Comunicación Gráfica ",regional:"Regional Distrito Capital"},{nombre:"Miroslava González Hernández",cargo:"Diseñador y evaluador instruccional",centro:"Centro de Gestión Industrial"},{nombre:"José Gabriel Ortiz Abella",cargo:"Corrector de estilo",centro:"Centro para la Industria de la Comunicación Gráfica",regional:"Regional Distrito Capital"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional"},{nombre:"Oscar Ivan Uribe Ortiz",cargo:"Diseño web"},{nombre:["Gilberto Junior Rodríguez Rodríguez","Jose Tang","Oleg Litvin","Victor Cardenas","Wilson Andrés Arenales Cáceres","Zuleidy Maria Ruiz Torres"],cargo:"Producción audiovisual"},{nombre:"Edgar Mauricio Cortes García",cargo:"Desarrollo front-end"},{nombre:"Edward Leonardo Pico Cabra",cargo:"Desarrollo front-end"},{nombre:"Yuli Marcela Gómez Tarazona",cargo:"Validación de diseño y contenido"},{centro:"Centro Industrial del Diseño y la Manufactura",regional:"Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculacion en plataforma LMS",centro:"Centro de Comercio y Servicios",regional:"Regional Tolima"}]},referencias:[{referencia:"Agencia Presidencial de Cooperación Internacional de Colombia. (2015). Manual de gestión de los residuos o desechos peligrosos: ",link:"https://www.apccolombia.gov.co/sites/default/files/archivos_usuario/2016/a-ot-013manualgestionresiduosdesechospeligrososv3.pdf"},{referencia:"Benítez, R., Ruiz, D. V., Obando, M., Miranda, C. & Gil M, J. C. (2013). Gestión integral de residuos químicos generados en los laboratorios de docencia en química de la Universidad del Cauca. Ciencia en Desarrollo, 4(2), 63-72: ",link:"https://revistas.uptc.edu.co/index.php/ciencia_en_desarrollo/article/view/2640"},{referencia:"Cgb Consultores. (2018). Etiqueta de RPs: ",link:"https://cgbconsultores.com/consejero-de-seguridad-clasificacion-de-residuos-peligrosos-cgb-consultores-informa/etiqueta-de-rps/"},{referencia:"Comité Ambiental ESIQUE, (2019, febrero 12). Residuos peligrosos [Archivo de video]. YouTube: ",link:"https://www.youtube.com/watch?v=iXywqWL-kAY"},{referencia:"Consejo Colombiano de Seguridad. (2000). Almacenamiento de sustancias químicas peligrosas y residuos peligrosos. Secretaria Distrital de Ambiente: ",link:"http://www.ambientebogota.gov.co/documents/24732/3987253/Almnto%20de%20Sust.%20Qu%C3%ADmicas.pdf"},{referencia:"Decreto 1609 de 2002. [Ministerio de Transporte]. Por el cual se reglamenta el manejo y transporte terrestre automotor de mercancías peligrosas por carretera. Colombia. 31 de Julio de 2002. "},{referencia:"Decreto 4741 de 2005. [Presidencia de la República]. Por el cual se reglamenta parcialmente la prevención y el manejo de los residuos o desechos peligrosos generados en el marco de la gestión integral. Colombia. Diciembre del 2005."},{referencia:"Gadea Carrera, E. & Guardino Solá, X. (1974). NTP 276: Eliminación de residuos en el laboratorio: procedimientos generales. INSST: ",link:"https://www.insst.es/documents/94886/327166/ntp_276.pdf/99241f92-8c26-400b-9cc6-909f6e19aece"},{referencia:"Instituto Nacional de Salud. (2013). Guía Práctica para la Elaboración e Implementación de los Planes de Gestión Integral de Residuos en el Laboratorio. Ministerio de Salud: ",link:"https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/IA/INS/guia-implementacion-planes-gestion-integral-residuos-laboratorio.pdf"},{referencia:"Meyer, R. (2018). Manejo de Desechos Químicos para Laboratorios. Instituto Nacional de Metrología. Cooperación alemana: ",link:"https://www.ptb.de/cms/fileadmin/internet/fachabteilungen/abteilung_9/9.3_internationale_zusammenarbeit/publikationen/Get_an_Insight_into_Our_Instruments/PTB_Info_Chemical-Waste-Management_SP.pdf"},{referencia:"Ministerio de Ambiente de Colombia, (2005). Enfoque estratégico para la gestión de productos químicos a nivel internacional: ",link:"https://www.minambiente.gov.co/images/AsuntosambientalesySectorialyUrbana/pdf/sustancias_qu%C3%ADmicas_y_residuos_peligrosos/Enfoque_Estrategico_Productos_Quimicos.pdf"},{referencia:"Ministerio de Ambiente de Colombia, (2005). Guías para manejo seguro y gestión ambiental de 25 sustancias químicas: ",link:"https://www.minambiente.gov.co/images/AsuntosambientalesySectorialyUrbana/pdf/sustancias_qu%C3%ADmicas_y_residuos_peligrosos/guia_25_sustancias.pdf"},{referencia:"Ministerio del Ambiente de Colombia. (2017). Informe nacional de residuos o desechos peligrosos en colombia 2016: ",link:"http://documentacion.ideam.gov.co/openbiblio/bvirtual/023766/RESPEL_2016.pdf"},{referencia:"Ministerio de Ambiente y Desarrollo Sostenible. (2005). Guías ambientales de almacenamiento y transporte por carretera de sustancias químicas peligrosas y residuos peligrosos: ",link:"https://www.minambiente.gov.co/images/AsuntosambientalesySectorialyUrbana/pdf/sustancias_qu%C3%ADmicas_y_residuos_peligrosos/guias_ambientales_almacenam_transp_x_carretera_sust_quim_res_pelig.pdf"},{referencia:"Ministerio de Ambiente, Vivienda y Desarrollo Territorial. (2007). Gestión integral de residuos o desechos peligrosos. Bases conceptuales: ",link:"https://www.minambiente.gov.co/images/AsuntosambientalesySectorialyUrbana/pdf/sustancias_qu%C3%ADmicas_y_residuos_peligrosos/gestion_integral_respel_bases_conceptuales.pdf"},{referencia:"ONUDI Colombia. (2020, julio 07). Webinar- marco regulatorio sobre residuos peligrosos en Colombia. [Archivo de Video]. YouTube: ",link:"https://www.youtube.com/watch?v=UOXObtt4flo"},{referencia:"Pérez Montaña, E. (2011). Procedimiento para la gestión y disposición de residuos sólidos y peligrosos. Departamento Médico y de Salud Ocupacional, Universidad de los Andes: ",link:"https://gerenciacampus.uniandes.edu.co/content/download/2304/11870/file/5.%20Disposicion%20de%20Residuos.pdf"},{referencia:"PQS (2015). Ficha de Datos de Seguridad Según Reglamento (CE) 1907/2006 y (UE) 453/2010. "},{referencia:"SURA. (2002). Centro de Información de Sustancias Químicas, Emergencias y Medio Ambiente – CISTEMA."},{referencia:"SURA. (2015). Almacenamiento seguro de sustancias químicas. CISTEMA: ",link:"https://www.arlsura.com/files/almacenamiento_sustancias_quimicas.pdf"},{referencia:"Universidad de Concepción. (1998). Reglamento de manejo de residuos peligrosos. Proyecto Fondef D97F1066: ",link:"http://www2.udec.cl/sqrt/reglamento/reglresiduos.html"},{referencia:"Universidad Industrial de Santander. (2012). Protocolo de Seguridad Química: Manipulación segura de Sustancias Químicas: ",link:"https://www.uis.edu.co/intranet/calidad/documentos/gestion_ambiental/protocolos/TTH.01.pdf"},{referencia:"Universidad del País Vasco. [UPV/EHU].  (2018). Módulo 7: Consideraciones residuos peligrosos de origen químico. [Archivo de video]: ",link:"https://www.youtube.com/watch?v=BSBWYQEouck"},{referencia:"Universidad del País Vasco. [UPV/EHU].  (2018, abril 25). Módulo 7: Gestión de residuos químicos (3) envasado. [Archivo de video]: ",link:"https://www.youtube.com/watch?v=Y19gix9jtpQ"},{referencia:"Universidad del País Vasco. [UPV/EHU]. (2018, abril 30). Módulo 7: Gestión de residuos químicos (5) tratamiento. [Archivo de video]: ",link:"https://www.youtube.com/watch?v=95vZYxZ5VzY"},{referencia:"UPNA. (2010). Manual de usos de productos químicos: ",link:"http://www.unavarra.es/digitalAssets/146/146686_100000Manual-de-uso-de-productos-quimicos.pdf"}],glosario:[{termino:"Desactivación",significado:"Método, técnica o proceso utilizado como pretratamiento para volver inertes los residuos peligrosos y similares, de manera que se puedan transportar y almacenar previamente a la incineración o envío al relleno sanitario."},{termino:"Envase",significado:"Recipiente destinado a contener productos hasta su consumo final."},{termino:"Generador",significado:"Es la persona natural o jurídica que produce residuos en el desarrollo de las actividades, manejo e instalaciones relacionadas con la prestación de servicios."},{termino:"Grupo de compatibilidad",significado:"Conjunto de mercancías de la clase 1 “Explosivos” que se consideran “compatibles” cuando se pueden estibar o transportar varios al mismo tiempo en condiciones de seguridad, sin aumentar de manera apreciable la probabilidad de accidente o la magnitud de los efectos de tal mismo, respecto a una cantidad determinada."},{termino:"Residuo químico",significado:"Los residuos químicos peligrosos comprenden todos aquellos materiales que por sus características corrosivas, reactivas, explosivas, tóxicas e inflamables, representan un peligro para la salud humana y el ambiente, cuando son manejados o dispuestos en forma inadecuada."},{termino:"Tóxico",significado:"Sustancias que pueden causar la muerte o lesiones graves o que pueden ser nocivas para la salud humana, si se ingieren o inhalan o entran en contacto con la piel."},{termino:"Tratamiento",significado:"Es el proceso de transformación física, química o biológica utilizado para modificar sus características, con el propósito de disponerlos. La selección del sistema de tratamiento o procesos de eliminación especializada radica en las condiciones de los residuos."}],complementario:[{texto:"Comité Ambiental ESIQUE, (2019, febrero 12). Residuos peligrosos. [Archivo de video]. YouTube.",tipo:"Video",link:"https://www.youtube.com/watch?v=iXywqWL-kAY"},{texto:"Universidad del País Vasco. [UPV/EHU]. (2018). Módulo 7: Consideraciones residuos peligrosos de origen químico. [Archivo de video]. YouTube.",tipo:"Video",link:"https://www.youtube.com/watch?v=BSBWYQEouck"},{texto:"Universidad del País Vasco. [UPV/EHU]. (2018, abril 25). Módulo 7: Gestión de residuos químicos (3) envasado. [Archivo de video].",tipo:"Video",link:"https://www.youtube.com/watch?v=Y19gix9jtpQ"},{texto:"Universidad del País Vasco. [UPV/EHU].  (2018, abril 30). Módulo 7: Gestión de residuos químicos (5) tratamiento. [Archivo de video]. YouTube.",tipo:"Video",link:"https://www.youtube.com/watch?v=95vZYxZ5VzY"}]});i["a"].prototype.$config=h;var v=o("9224");i["a"].prototype.$package=v,i["a"].config.productionTip=!1,new i["a"]({router:b,store:g["a"],render:function(e){return e(l)}}).$mount("#app")},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"3.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"@fortawesome/fontawesome-free":"^5.15.3","@popperjs/core":"^2.9.1","bootstrap":"^5.0.0-beta3","core-js":"^3.6.5","ecored-base-pkg":"2.0.0","vue":"^2.6.11","vue-router":"^3.2.0","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.12","@vue/cli-plugin-eslint":"^4.5.12","@vue/cli-plugin-router":"^4.5.12","@vue/cli-plugin-vuex":"^4.5.12","@vue/cli-service":"^4.5.12","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.1.3","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.11"}}')},a3a0:function(e,a,o){},ae0a:function(e,a,o){e.exports=o.p+"img/banner-princiapal.ed9ff7a1.svg"},cf25:function(e,a,o){"use strict";o("fea6")},e6b0:function(e,a,o){e.exports=o.p+"img/fondo-banner-principal.64876993.png"},fea6:function(e,a,o){}});
//# sourceMappingURL=app.ec6c2b8c.js.map