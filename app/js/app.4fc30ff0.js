(function(){"use strict";var t={950:function(t,n,e){var o=e(963),r=e(252);function a(t,n,e,o,a,i){const s=(0,r.up)("MainView");return(0,r.wg)(),(0,r.j4)(s)}function i(t,n,e,o,a,i){const s=(0,r.up)("SideBar"),c=(0,r.up)("mainInfo");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(s),(0,r.Wm)(c)])}var s=e(577);const c={class:"sidenav"};function u(t,n,e,o,a,i){return(0,r.wg)(),(0,r.iD)("div",c,[(0,r._)("button",{class:(0,s.C_)(["plusBtn",{active:a.isActive}])},null,2)])}var f={name:"SideBar",data(){return{isActive:!1}},methods:{}},l=e(744);const p=(0,l.Z)(f,[["render",u],["__scopeId","data-v-5eedac30"]]);var d=p;const v={class:"container"},h=(0,r._)("p",null,"nome",-1),m=(0,r._)("p",null,"data",-1);function b(t,n,e,o,a,i){return(0,r.wg)(),(0,r.iD)("div",v,[h,m,(0,r._)("button",{onClick:n[0]||(n[0]=(...t)=>i.atualizaBotoes&&i.atualizaBotoes(...t))},"botao"),(0,r._)("pre",null,(0,s.zw)(a.botoes),1)])}var g=e(907),w={name:"mainInfo",data(){return{botoes:null}},computed:{...(0,g.Se)({botoes:"getBotoes"})},methods:{atualizaBotoes(){this.$store.dispatch("fetchBotoes"),this.botoes=botoes}}};const B=(0,l.Z)(w,[["render",b]]);var O=B,y={name:"mainView",components:{SideBar:d,mainInfo:O}};const _=(0,l.Z)(y,[["render",i]]);var j=_,T={name:"App",components:{MainView:j}};const k=(0,l.Z)(T,[["render",a]]);var z=k,x=e(669),A=e.n(x);const C=A().create({baseURL:"http://localhost/projeto%20organizacao/api/inserir.php"}),I=A().create({baseURL:"http://localhost/projeto%20organizacao/api/botoes.php"});var M=(0,g.MT)({state(){return{tarefa:null,botoes:"valor inicial"}},getters:{getTarefa(t){return t.tarefa},getBotoes(t){return t.tarefa}},mutations:{setTarefa(t,n){t.tarefa=n},setBotoes(t,n){t.botoes=n}},actions:{async fetchAddTarefa({commit:t},n){const e=await C.post("",{nome:n.nome,tipo:n.tipo});t("setTarefa",e.data)},async fetchBotoes({commit:t}){console.log("entrou fetch botoes!");const n=await I.get();console.log(n),t("setBotoes",n.data)}},modules:{}});(0,o.ri)(z).use(M).mount("#app")}},n={};function e(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={exports:{}};return t[o](a,a.exports,e),a.exports}e.m=t,function(){var t=[];e.O=function(n,o,r,a){if(!o){var i=1/0;for(f=0;f<t.length;f++){o=t[f][0],r=t[f][1],a=t[f][2];for(var s=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(e.O).every((function(t){return e.O[t](o[c])}))?o.splice(c--,1):(s=!1,a<i&&(i=a));if(s){t.splice(f--,1);var u=r();void 0!==u&&(n=u)}}return n}a=a||0;for(var f=t.length;f>0&&t[f-1][2]>a;f--)t[f]=t[f-1];t[f]=[o,r,a]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,o){var r,a,i=o[0],s=o[1],c=o[2],u=0;if(i.some((function(n){return 0!==t[n]}))){for(r in s)e.o(s,r)&&(e.m[r]=s[r]);if(c)var f=c(e)}for(n&&n(o);u<i.length;u++)a=i[u],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(f)},o=self["webpackChunkapp"]=self["webpackChunkapp"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(950)}));o=e.O(o)})();
//# sourceMappingURL=app.4fc30ff0.js.map