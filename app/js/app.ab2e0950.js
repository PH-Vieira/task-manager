(function(){"use strict";var t={573:function(t,n,o){var e=o(963),r=o(252);function a(t,n,o,e,a,i){const s=(0,r.up)("MainView");return(0,r.wg)(),(0,r.j4)(s)}function i(t,n,o,e,a,i){const s=(0,r.up)("SideBar"),u=(0,r.up)("mainInfo");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(s),(0,r.Wm)(u)])}const s=t=>((0,r.dD)("data-v-03b55563"),t=t(),(0,r.Cn)(),t),u={class:"sidenav"},c=s((()=>(0,r._)("button",{style:{"background-image":"url({{ botao[key]['url'] }})"}},null,-1))),f=[c];function l(t,n,o,e,a,i){return(0,r.wg)(),(0,r.iD)("ul",u,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.botoes,(t=>((0,r.wg)(),(0,r.iD)("li",{key:t},f)))),128))])}var p=o(907),d={name:"SideBar",data(){return{isActive:!1}},computed:{...(0,p.Se)({botoes:"getBotoes"})},mounted(){this.$store.dispatch("fetchBotoes"),console.log(this.botoes),console.log(this.botoes["url"])},watch:{}},v=o(744);const h=(0,v.Z)(d,[["render",l],["__scopeId","data-v-03b55563"]]);var m=h;const b={class:"container"},g=(0,r._)("p",null,"nome",-1),w=(0,r._)("p",null,"data",-1),y=[g,w];function O(t,n,o,e,a,i){return(0,r.wg)(),(0,r.iD)("div",b,y)}var j={name:"mainInfo",data(){return{}},computed:{},methods:{}};const B=(0,v.Z)(j,[["render",O]]);var k=B,T={name:"mainView",components:{SideBar:m,mainInfo:k}};const _=(0,v.Z)(T,[["render",i]]);var D=_,x={name:"App",components:{MainView:D}};const I=(0,v.Z)(x,[["render",a]]);var M=I,S=o(669),Z=o.n(S);const A=Z().create({baseURL:"http://localhost/projeto%20organizacao/api/inserir.php"}),C=Z().create({baseURL:"http://localhost/projeto%20organizacao/api/botoes.php"});var V=(0,p.MT)({state(){return{tarefa:null,botoes:[]}},getters:{getTarefa(t){return t.tarefa},getBotoes(t){return t.botoes}},mutations:{setTarefa(t,n){t.tarefa=n},setBotoes(t,n){t.botoes=n}},actions:{async fetchAddTarefa({commit:t},n){const o=await A.post("",{nome:n.nome,tipo:n.tipo});t("setTarefa",o.data)},async fetchBotoes({commit:t}){console.log("entrou fetch botoes!");const n=await C.get();console.log(n.data),t("setBotoes",n.data)}},modules:{}});(0,e.ri)(M).use(V).mount("#app")}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,o),a.exports}o.m=t,function(){var t=[];o.O=function(n,e,r,a){if(!e){var i=1/0;for(f=0;f<t.length;f++){e=t[f][0],r=t[f][1],a=t[f][2];for(var s=!0,u=0;u<e.length;u++)(!1&a||i>=a)&&Object.keys(o.O).every((function(t){return o.O[t](e[u])}))?e.splice(u--,1):(s=!1,a<i&&(i=a));if(s){t.splice(f--,1);var c=r();void 0!==c&&(n=c)}}return n}a=a||0;for(var f=t.length;f>0&&t[f-1][2]>a;f--)t[f]=t[f-1];t[f]=[e,r,a]}}(),function(){o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,{a:n}),n}}(),function(){o.d=function(t,n){for(var e in n)o.o(n,e)&&!o.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};o.O.j=function(n){return 0===t[n]};var n=function(n,e){var r,a,i=e[0],s=e[1],u=e[2],c=0;if(i.some((function(n){return 0!==t[n]}))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(u)var f=u(o)}for(n&&n(e);c<i.length;c++)a=i[c],o.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return o.O(f)},e=self["webpackChunkapp"]=self["webpackChunkapp"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=o.O(void 0,[998],(function(){return o(573)}));e=o.O(e)})();
//# sourceMappingURL=app.ab2e0950.js.map