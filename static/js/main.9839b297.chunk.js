(this.webpackJsonpalkemy=this.webpackJsonpalkemy||[]).push([[0],{120:function(e,t,c){},121:function(e,t,c){},122:function(e,t,c){},147:function(e,t,c){},148:function(e,t,c){},247:function(e,t,c){},248:function(e,t,c){},249:function(e,t,c){},251:function(e,t,c){},252:function(e,t,c){},253:function(e,t,c){},255:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(22),r=c.n(s),o=(c(120),c(121),c(17)),l=c(8),i=(c(122),c(1));var d=function(){return Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark navbar-color",children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)(o.b,{className:"navbar-brand",to:"/alkemy_react",children:"Alkemy Challenge"}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsx)("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarNavAltMarkup",children:Object(i.jsxs)("div",{className:"navbar-nav",children:[Object(i.jsx)(o.b,{className:"nav-link submenu","aria-current":"page",to:"/alkemy_react/",children:"Buscador"}),Object(i.jsx)(o.b,{className:"nav-link  submenu",to:"/alkemy_react/team",children:"Equipo"})]})})]})})},m=c(3),b=c(37),j=c.n(b),u=c(11),h=c(23),x=c(2),p=Object(n.createContext)(),g=p.Provider,O=function(e){var t=e.children,c=Object(n.useState)([]),a=Object(m.a)(c,2),s=a[0],r=a[1],o=Object(n.useState)({intelligence:0,strength:0,speed:0,durability:0,power:0,combat:0}),d=Object(m.a)(o,2),b=d[0],j=d[1],u=Object(n.useState)(""),p=Object(m.a)(u,2),O=p[0],f=p[1],v=Object(n.useState)(0),N=Object(m.a)(v,2),y=N[0],w=N[1],k=Object(n.useState)(0),S=Object(m.a)(k,2),C=S[0],A=S[1],B=Object(n.useState)(!1),E=Object(m.a)(B,2),q=E[0],I=E[1],_=Object(n.useState)(0),P=Object(m.a)(_,2),L=P[0],F=P[1];var z={equipoUno:s,setEquipoUno:r,stats:b,setStats:j,nueva:function(e,t){(e||t)&&(s.map((function(c){e.push(Number(c.powerstats["".concat(t)]))})),j((function(c){return Object(x.a)(Object(x.a)({},c),{},Object(h.a)({},t,e.reduce((function(e,t){return e+t}))))})))},bestStat:O,getBestStat:function(){var e={value:0,name:""};Object.keys(b).forEach((function(t){b[t]>e.value?(e={value:b[t],name:t},f(e.name)):b[t]===e.value&&f("No hay mejor superpoder")}))},getAvgHeightWeight:function(e,t){s.map((function(t){e.push(Number(t.appearance.height[1].slice(0,-2)))})),s.map((function(e){t.push(Number(e.appearance.weight[1].slice(0,-2)))})),A(t.reduce((function(e,t){return e+t}))),w(e.reduce((function(e,t){return e+t})))},height:y,weight:C,isLoggedIn:function(){if(!localStorage.getItem("token"))return console.log("xdd"),Object(i.jsx)(l.a,{to:"/alkemy_react/login"})},handleShow:function(e){F(L+1),e&&L%2===0?I(!0):I(!1)},show:q};return Object(i.jsx)(g,{value:z,children:t})},f=p,v=(c(145),c(25)),N=c.n(v);c(147);var y=function(e){var t=Object(n.useContext)(f),c=t.equipoUno,a=t.setEquipoUno,s=[];for(var r in e.detalles)s.push(r);function o(e){console.log(e),"good"===e?N()({position:"top-end",icon:"success",title:"Superheroe BUENO agregado correctamente",showConfirmButton:!1,timer:1500}):"bad"===e?N()({position:"top-end",icon:"success",title:"Superheroe MALO agregado correctamente",showConfirmButton:!1,timer:1500}):"limite_good"===e?N()({position:"top-end",icon:"error",title:"Ya hay 3 superheroes BUENOS en tu equipo !",showConfirmButton:!1,timer:1500}):"limite_bad"===e?N()({position:"top-end",icon:"error",title:"Ya hay 3 superheroes MALOS en tu equipo !",showConfirmButton:!1,timer:1500}):"team_completo"===e?N()({position:"top-end",icon:"warning",title:"Limite de personajes alcanzado (6)",showConfirmButton:!1,timer:1500}):N()({position:"top-end",icon:"warning",title:"No se admiten superheroes repetidos",showConfirmButton:!1,timer:1500})}function l(e,t,c){return e.filter((function(e){return e.biography.alignment===t})).length<3&&c.biography.alignment===t}return s.map((function(t){return Object(i.jsxs)("div",{className:"card-container col-xxl-2 col-xl-3 col-md-4 col-sm-6 col-12 m-3",children:[Object(i.jsxs)("h1",{className:"text-center",children:[e.detalles[t].name," - ",e.detalles[t].biography.alignment]}),Object(i.jsx)("img",{src:e.detalles[t].image.url,alt:e.detalles[t].name,style:{width:"200px",height:"260px"}}),Object(i.jsx)("button",{className:"btn btn-light m-2",onClick:function(){return n=e.detalles[t],void(c.length<6?c.find((function(e){return e.name===n.name}))?o():l(c,"bad",n)?(o("bad"),a([].concat(Object(u.a)(c),[n]))):l(c,"good",n)?(o("good"),a([].concat(Object(u.a)(c),[n]))):l(c,"good",n)||("good"===n.biography.alignment?o("limite_good"):o("limite_bad")):o("team_completo"));var n},children:" Agregar"})]})}))};c(148);var w=function(e){var t=Object(n.useState)([]),c=Object(m.a)(t,2),a=c[0],s=c[1],r=Object(n.useContext)(f).isLoggedIn,o="https://superheroapi.com/api/10226214009035042/search/".concat(e.nombre);return Object(n.useEffect)((function(){j.a.get(o).then((function(e){s(e.data)}))}),[o]),"success"===a.response?Object(i.jsxs)("div",{className:"row justify-content-center fondo-team",children:[r(),Object(i.jsx)(y,{detalles:a.results})]}):"character with given name not found"===a.error?Object(i.jsx)("div",{className:"neon",children:Object(i.jsx)("h3",{className:"text-center",children:"\ud83d\ude31 No se encontr\xf3 ning\xfan superhero con ese nombre \ud83d\ude31 "})}):Object(i.jsx)("div",{className:"d-flex align-items-center flex-column m-5",children:Object(i.jsx)("img",{src:"https://c.tenor.com/orJlgrtRxR4AAAAd/superheroes.gif",className:"rounded-circle",style:{width:"30%"}})})},k=c(7),S=c(35);c(247);var C=function(e){var t=Object(n.useState)(""),c=Object(m.a)(t,2),a=c[0],s=c[1],r=Object(n.useContext)(f).isLoggedIn,o=S.a().shape({hero:S.b().required("Ingrese el nombre de un heroe").min(3,"Ingrese almenos 3 letras").max(10,"Limite de letras alcanzado")});return Object(i.jsxs)("div",{children:[r(),Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{className:"text-center neon",children:"Buscador de superheroes"}),Object(i.jsx)("div",{className:"input-group mb-3 w-50 m-auto",children:Object(i.jsx)(k.c,{initialValues:{hero:""},onSubmit:function(e){s(e.hero)},validationSchema:o,children:function(e){return console.log(e),Object(i.jsxs)(k.b,{className:"d-flex w-100 flex-column",children:[Object(i.jsx)(k.a,{type:"text",className:"form-control",placeholder:"Ingresa el nombre del superheroe",id:"hero",name:"hero"}),Object(i.jsx)("small",{className:"text-uppercase text-danger text-end",children:e.errors.hero}),Object(i.jsx)("button",{className:"btn btn-danger m-2",type:"submit",id:"button-addon2",disabled:!e.isValid,children:"Buscar"})]})}})})]}),Object(i.jsx)(w,{nombre:a})]})},A=c(59),B=(c(248),c(258));c(249);var E=function(e){return Object(i.jsx)("div",{className:"background ",children:Object(i.jsxs)(B.a,Object(x.a)(Object(x.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,backdrop:"static",children:[Object(i.jsx)(B.a.Header,{children:Object(i.jsx)(B.a.Title,{id:"contained-modal-title-vcenter",className:"d-flex align-items-center flex-column",children:Object(i.jsx)("img",{src:"https://storage.googleapis.com/diariodemocracia/cache/50/1c/3aa5ff58dd4511e9a6e742010a8e0003.jpg",className:"image-style "})})}),Object(i.jsx)(B.a.Body,{className:"d-flex",children:Object(i.jsx)("h5",{className:"text-center",children:'Su equipo esta vac\xedo !! Para agregar superheroes haga click en el boton "Buscar heroes"'})}),Object(i.jsx)(B.a.Footer,{children:Object(i.jsx)(o.b,{onClick:e.onHide,to:"/alkemy_react/",className:"btn btn-warning",children:"Buscar heroes"})})]}))})};var q=function(e){var t=Object(n.useContext)(f),c=t.equipoUno,s=t.setEquipoUno,r=t.setStats,l=a.a.useState(!0),d=Object(m.a)(l,2),b=d[0],j=d[1],u=[];function h(e){return Object(k.d)(e/c.length)?0:(e/c.length).toFixed(1)}return c.length>0?Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{className:"text-center neon fs-1",children:"Equipo"}),Object(i.jsxs)("div",{className:"d-flex justify-content-center align-items-center m-3",children:[Object(i.jsx)("h1",{className:"neon fs-2 text-center",children:"El equipo se caracteriza por tener predominancia en el superpoder: "}),"intelligence"===e.bestStat&&Object(i.jsx)("h1",{className:"neon-team-intel mx-3",children:" Inteligencia"}),"strength"===e.bestStat&&Object(i.jsx)("h1",{className:"neon-team-fuerza mx-3",children:" Fuerza"}),"speed"===e.bestStat&&Object(i.jsx)("h1",{className:"neon-team-velocidad mx-3",children:" Velocidad"}),"power"===e.bestStat&&Object(i.jsx)("h1",{className:"neon-team-poder mx-3",children:" Poder"}),"durability"===e.bestStat&&Object(i.jsx)("h1",{className:"neon-team-dura mx-3",children:" Durabilidad"}),"combat"===e.bestStat&&Object(i.jsx)("h1",{className:"neon-team-combat mx-3",children:" Combate"})]}),Object(i.jsxs)("h1",{className:"neon fs-2",children:["Numero de superheroes: ",c.length]}),Object(i.jsxs)("div",{className:"row justify-content-center m-5 ",children:[Object(k.d)(e.intelligence)&&Object(i.jsx)("h2",{className:"col-xxl-2 col-xl-3 col-md-4 col-sm-6 col-12 text-center neon-team-intel",children:"Inteligencia: Alg\xfan superheroe tiene informaci\xf3n invalida"}),!Object(k.d)(e.intelligence)&&Object(i.jsxs)("h2",{className:"col-xxl-2 col-xl-3 col-md-4 col-sm-6 col-12 text-center neon-team-intel",children:["Inteligencia: ",e.intelligence]}),!Object(k.d)(e.strength)&&Object(i.jsxs)("h2",{className:"col-xxl-2 col-xl-3 col-md-4 col-sm-6 col-12 text-center neon-team-fuerza",children:["Fuerza: ",e.strength]}),Object(k.d)(e.strength)&&Object(i.jsx)("h2",{className:"col-xxl-2 col-xl-3 col-md-4 col-sm-6 col-12 text-center neon-team-fuerza",children:"Fuerza: Alg\xfan superheroe tiene informaci\xf3n invalida"}),!Object(k.d)(e.speed)&&Object(i.jsxs)("h2",{className:"col-xxl-2 col-xl-3 col-md-4 col-sm-6 col-12 text-center neon-team-velocidad",children:["Velocidad: ",e.speed]}),Object(k.d)(e.speed)&&Object(i.jsx)("h2",{className:"col-xxl-2 col-xl-3 col-md-4 col-sm-6 col-12 text-center neon-team-velocidad",children:"Velocidad: Alg\xfan superheroe tiene informaci\xf3n invalida"}),Object(k.d)(e.power)&&Object(i.jsx)("h2",{className:"col-xxl-2 col-xl-3 col-md-4 col-sm-6 col-12 text-center neon-team-poder",children:"Poder: Alg\xfan superheroe tiene informaci\xf3n invalida"}),!Object(k.d)(e.power)&&Object(i.jsxs)("h2",{className:"col-xxl-2 col-xl-3 col-md-4 col-sm-6 col-12 text-center neon-team-poder",children:["Poder: ",e.power]}),Object(k.d)(e.durability)&&Object(i.jsx)("h2",{className:"col-xxl-2 col-xl-3 col-md-4 col-sm-6 col-12 text-center neon-team-dura",children:"Durabilidad: Alg\xfan superheroe tiene informaci\xf3n invalida"}),!Object(k.d)(e.durability)&&Object(i.jsxs)("h2",{className:"col-xxl-2 col-xl-3 col-md-4 col-sm-6 col-12 text-center neon-team-dura",children:["Durabilidad: ",e.durability]}),Object(k.d)(e.combat)&&Object(i.jsx)("h2",{className:"col-xxl-2 col-xl-3 col-md-4 col-sm-6 col-12 text-center neon-team-combat",children:"Combate: Alg\xfan superheroe tiene informaci\xf3n invalida"}),!Object(k.d)(e.combat)&&Object(i.jsxs)("h2",{className:"col-xxl-2 col-xl-3 col-md-4 col-sm-6 col-12 text-center neon-team-combat",children:["Combate: ",e.combat]})]}),Object(i.jsxs)("h3",{className:"neon fs-3 text-center",children:["Promedio Altura: ",h(e.height)," CM"]}),Object(i.jsxs)("h3",{className:"neon fs-3 text-center",children:["Promedio Peso: ",h(e.weigth)," KG"]}),Object(i.jsx)("div",{className:"team-container",children:c.map((function(e){return u.push(e),Object(i.jsxs)("div",{className:"d-flex flex-column align-items-center border border-4 m-2 rounded justify-content-around card-container",style:{width:"280px",height:"470px"},children:[Object(i.jsx)("h1",{className:"text-center",children:e.name}),Object(i.jsx)("img",{src:e.image.url,style:{width:"150px",height:"170px"}}),Object(i.jsx)("button",{className:"btn btn-danger m-3",onClick:function(){return function(e){u=u.filter((function(t){return t.id!==e.id})),s(u),r({}),A.c.error("Heroe Eliminado",{autoClose:2e3,transition:A.a})}(e)},children:" ELIMINAR"}),Object(i.jsx)(o.b,{className:"btn btn-info m-3",to:"/alkemy_react/detalles/".concat(e.id),children:"Mostrar Detalles"})]})}))}),Object(i.jsx)(A.b,{})]}):Object(i.jsx)(E,{show:b,onHide:function(){return j(!1)}})};var I=function(e){var t=Object(n.useContext)(f),c=t.getBestStat,a=t.bestStat,s=t.getAvgHeightWeight,r=t.height,o=t.weight,l=t.isLoggedIn,d=t.nueva,m=t.stats,b=[0],j=[0],u=[0],h=[0],x=[0],p=[0],g=[0],O=[0];return Object(n.useEffect)((function(){d(b,"intelligence"),d(p,"combat"),d(h,"durability"),d(x,"power"),d(u,"speed"),d(j,"strength"),c(),s(g,O)}),[a,m.intelligence,m.strength,m.speed,m.power,m.combat,m.durability]),Object(i.jsxs)("div",{className:"fondo-team",children:[l(),Object(i.jsx)(q,{intelligence:m.intelligence,strength:m.strength,speed:m.speed,power:m.power,combat:m.combat,durability:m.durability,bestStat:a,weigth:o,height:r})]})},_=c(71),P=c.n(_),L=c(114);c(251),c(252);var F=function(e){var t=e.errors;return Object(i.jsx)("div",{children:Object(i.jsxs)(k.b,{className:"d-flex flex-column",children:[Object(i.jsx)("label",{htmlFor:"email",className:"neon fs-3",children:"Email"}),Object(i.jsxs)("div",{className:"input-group input-group-lg",children:[Object(i.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"@"}),Object(i.jsx)(k.a,{id:"email",name:"email",placeholder:"exmaple@acme.com",type:"email",className:"form-control","aria-label":"Username","aria-describedby":"basic-addon1"})]}),Object(i.jsx)("small",{className:"m-1 error",children:t.email}),Object(i.jsx)("label",{htmlFor:"password",className:"neon fs-3",children:"Password"}),Object(i.jsxs)("div",{className:"input-group input-group-lg",children:[Object(i.jsx)("span",{className:"input-group-text material-icons",id:"basic-addon1",children:"key"}),Object(i.jsx)(k.a,{id:"password",name:"password",type:"password",className:"form-control","aria-label":"Username"})]}),Object(i.jsx)("small",{className:"m-1 error",children:t.password}),Object(i.jsx)("button",{type:"submit",className:"m-3 btn btn-warning",children:"Entrar"})]})})};var z=function(){var e="http://challenge-react.alkemy.org/";function t(){return(t=Object(L.a)(P.a.mark((function t(c){var n;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(c),n={email:c.email,password:c.password},t.next=4,j.a.post(e,n).then((function(e){var t=e.data;localStorage.setItem("token",t.token),N()("A wild Pikachu appeared! What do you want to do?",{title:"Correcto",text:"Bienvenido al challenge de Alkemy ",icon:"success",buttons:{continuar:!0}}).then((function(e){window.location.replace("/alkemy_react/")}))})).catch((function(e){N()({title:e,text:"Email o contrase\xf1a incorrectas ",icon:"error",button:"Ok"})}));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var c=S.a().shape({email:S.b().required("Email es requerido"),password:S.b().required("Password es requerido")});return Object(i.jsxs)("div",{className:"form-container",children:[Object(i.jsx)("h1",{className:"neon",children:"Log In"}),Object(i.jsx)(k.c,{initialValues:{email:"",password:""},onSubmit:function(e){return function(e){return t.apply(this,arguments)}(e)},validationSchema:c,component:F})]})};c(253);var U=function(e){var t=e.detalles;return console.log(t),Object(i.jsxs)("div",{className:"d-flex align-items-center flex-column",children:[Object(i.jsx)("div",{className:"card mt-5 detalles-container ",children:Object(i.jsxs)("div",{className:"row g-0",children:[Object(i.jsx)("div",{className:"col-md-4",children:Object(i.jsx)("img",{src:t.image.url,className:"img-fluid rounded-start rounded-circle",alt:"..."})}),Object(i.jsx)("div",{className:"col-md-8",children:Object(i.jsxs)("div",{className:"card-body",children:[Object(i.jsxs)("h2",{children:["Nombre completo: ",t.biography["full-name"]]}),Object(i.jsxs)("h2",{children:["Alias: ",t.biography.aliases.map((function(e){return e+" - "}))]}),Object(i.jsxs)("h2",{children:["Lugar de trabajo: ",t.work.base]}),Object(i.jsxs)("h2",{children:["Color de ojos: ",t.appearance["eye-color"]]}),Object(i.jsxs)("h2",{children:["Color de cabello: ",t.appearance["hair-color"]]}),Object(i.jsxs)("h2",{children:["Peso: ",t.appearance.weight[1]]}),Object(i.jsxs)("h2",{children:["Altura: ",t.appearance.height[1]]})]})})]})}),Object(i.jsx)(o.b,{to:"/alkemy_react/team",className:"m-3 btn btn-dark fs-1 neon",style:{width:"40%"},children:"Volver a tu equipo"})]})};var M=function(){var e=Object(l.g)().id,t=Object(n.useState)([]),c=Object(m.a)(t,2),a=c[0],s=c[1],r="https://superheroapi.com/api/10226214009035042/".concat(e);return Object(n.useEffect)((function(){j.a.get(r).then((function(e){s(e.data)}))}),[e]),"success"===a.response?Object(i.jsx)("div",{children:Object(i.jsx)(U,{detalles:a})}):Object(i.jsxs)("div",{className:"d-flex align-items-center flex-column m-5",children:[Object(i.jsx)("img",{src:"https://media1.giphy.com/media/hSvIJlprJ8Ji/giphy.gif"}),Object(i.jsx)("h1",{className:"neon fs-1",children:"...Cargando"})]})};var V=function(){return Object(i.jsx)("div",{className:"fondo",children:Object(i.jsx)(O,{children:Object(i.jsxs)(o.a,{children:[Object(i.jsx)(d,{}),Object(i.jsxs)(l.d,{children:[Object(i.jsx)(l.b,{path:"/alkemy_react/",exact:!0,component:C}),Object(i.jsx)(l.b,{path:"/alkemy_react/team",exact:!0,component:I}),Object(i.jsx)(l.b,{path:"/alkemy_react/login",exact:!0,component:z}),Object(i.jsx)(l.b,{path:"/alkemy_react/detalles/:id",exact:!0,component:M})]})]})})})},H=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,259)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};c(254);r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(V,{})}),document.getElementById("root")),H()}},[[255,1,2]]]);
//# sourceMappingURL=main.9839b297.chunk.js.map