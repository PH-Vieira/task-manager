(function(){"use strict";var t={728:function(t,n,e){var o=e(963),r=e(252);function a(t,n,e,o,a,i){const u=(0,r.up)("MainView");return(0,r.wg)(),(0,r.j4)(u)}function i(t,n,e,o,a,i){const u=(0,r.up)("SideBar"),c=(0,r.up)("mainInfo");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(u),(0,r.Wm)(c)])}const u=t=>((0,r.dD)("data-v-2ea33418"),t=t(),(0,r.Cn)(),t),c={class:"sidenav"},s=u((()=>(0,r._)("button",{style:{"background-image":"url({{ botao[key]['url'] }})"}},null,-1))),f=[s];function l(t,n,e,o,a,i){return(0,r.wg)(),(0,r.iD)("ul",c,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.botoes,(t=>((0,r.wg)(),(0,r.iD)("li",{key:t},f)))),128))])}var p=e(907),d={name:"SideBar",data(){return{isActive:!1}},computed:{...(0,p.Se)({botoes:"getBotoes"})},mounted(){this.$store.dispatch("fetchBotoes")},watch:{}},v=e(744);const m=(0,v.Z)(d,[["render",l],["__scopeId","data-v-2ea33418"]]);var h=m;const b={class:"container"},g=(0,r._)("p",null,"nome",-1),w=(0,r._)("p",null,"data",-1),y=[g,w];function O(t,n,e,o,a,i){return(0,r.wg)(),(0,r.iD)("div",b,y)}var j={name:"mainInfo",data(){return{}},computed:{},methods:{}};const B=(0,v.Z)(j,[["render",O]]);var k=B,T={name:"mainView",components:{SideBar:h,mainInfo:k}};const _=(0,v.Z)(T,[["render",i]]);var D=_,x={name:"App",components:{MainView:D}};const I=(0,v.Z)(x,[["render",a]]);var M=I,S=e(669),Z=e.n(S);const A=Z().create({baseURL:"http://localhost/projeto%20organizacao/api/inserir.php"}),C=Z().create({baseURL:"http://localhost/projeto%20organizacao/api/botoes.php"});var V=(0,p.MT)({state(){return{tarefa:null,botoes:[]}},getters:{getTarefa(t){return t.tarefa},getBotoes(t){return t.botoes}},mutations:{setTarefa(t,n){t.tarefa=n},setBotoes(t,n){t.botoes=n}},actions:{async fetchAddTarefa({commit:t},n){const e=await A.post("",{nome:n.nome,tipo:n.tipo});t("setTarefa",e.data)},async fetchBotoes({commit:t}){console.log("entrou fetch botoes!");const n=await C.get();console.log(n.data),t("setBotoes",n.data)}},modules:{}});(0,o.ri)(M).use(V).mount("#app")}},n={};function e(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={exports:{}};return t[o](a,a.exports,e),a.exports}e.m=t,function(){var t=[];e.O=function(n,o,r,a){if(!o){var i=1/0;for(f=0;f<t.length;f++){o=t[f][0],r=t[f][1],a=t[f][2];for(var u=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(e.O).every((function(t){return e.O[t](o[c])}))?o.splice(c--,1):(u=!1,a<i&&(i=a));if(u){t.splice(f--,1);var s=r();void 0!==s&&(n=s)}}return n}a=a||0;for(var f=t.length;f>0&&t[f-1][2]>a;f--)t[f]=t[f-1];t[f]=[o,r,a]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,o){var r,a,i=o[0],u=o[1],c=o[2],s=0;if(i.some((function(n){return 0!==t[n]}))){for(r in u)e.o(u,r)&&(e.m[r]=u[r]);if(c)var f=c(e)}for(n&&n(o);s<i.length;s++)a=i[s],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(f)},o=self["webpackChunkapp"]=self["webpackChunkapp"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(728)}));o=e.O(o)})();
//# sourceMappingURL=app.a65f92ae.js.map