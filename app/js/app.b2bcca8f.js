(function(){"use strict";var t={291:function(t,n,e){var o=e(963),r=e(252);function a(t,n,e,o,a,i){const c=(0,r.up)("MainView");return(0,r.wg)(),(0,r.j4)(c)}function i(t,n,e,o,a,i){const c=(0,r.up)("SideBar"),s=(0,r.up)("mainInfo");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(c),(0,r.Wm)(s)])}var c=e(577);const s={class:"sidenav"};function u(t,n,e,o,a,i){return(0,r.wg)(),(0,r.iD)("ul",s,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.botoes,((t,e)=>((0,r.wg)(),(0,r.iD)("li",{key:e},[(0,r._)("button",{onClick:n[0]||(n[0]=(...t)=>i.activate&&i.activate(...t)),class:"btn",style:(0,c.j5)({"background-image":"url("+t+")"})},null,4)])))),128))])}var f=e(907),l={name:"SideBar",data(){return{}},computed:{...(0,f.Se)({botoes:"getBotoes"})},mounted(){this.$store.dispatch("fetchBotoes")},methods:{activate(t){console.log("botao "+t.SelfComponent+" clicado!")}}},p=e(744);const d=(0,p.Z)(l,[["render",u],["__scopeId","data-v-cd7597ea"]]);var v=d;const m={class:"container"},h=(0,r._)("p",null,"nome",-1),b=(0,r._)("p",null,"data",-1),g=[h,b];function w(t,n,e,o,a,i){return(0,r.wg)(),(0,r.iD)("div",m,g)}var y={name:"mainInfo",data(){return{}},computed:{},methods:{}};const O=(0,p.Z)(y,[["render",w]]);var j=O,B={name:"mainView",components:{SideBar:v,mainInfo:j}};const k=(0,p.Z)(B,[["render",i]]);var T=k,_={name:"App",components:{MainView:T}};const D=(0,p.Z)(_,[["render",a]]);var S=D,x=e(669),C=e.n(x);const I=C().create({baseURL:"http://localhost/projeto%20organizacao/api/inserir.php"}),M=C().create({baseURL:"http://localhost/projeto%20organizacao/api/botoes.php"});var Z=(0,f.MT)({state(){return{tarefa:null,botoes:[]}},getters:{getTarefa(t){return t.tarefa},getBotoes(t){return t.botoes}},mutations:{setTarefa(t,n){t.tarefa=n},setBotoes(t,n){t.botoes=n}},actions:{async fetchAddTarefa({commit:t},n){const e=await I.post("",{nome:n.nome,tipo:n.tipo});t("setTarefa",e.data)},async fetchBotoes({commit:t}){const n=await M.get();console.log("response data: ",n.data),t("setBotoes",n.data)}},modules:{}});(0,o.ri)(S).use(Z).mount("#app")}},n={};function e(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={exports:{}};return t[o](a,a.exports,e),a.exports}e.m=t,function(){var t=[];e.O=function(n,o,r,a){if(!o){var i=1/0;for(f=0;f<t.length;f++){o=t[f][0],r=t[f][1],a=t[f][2];for(var c=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(e.O).every((function(t){return e.O[t](o[s])}))?o.splice(s--,1):(c=!1,a<i&&(i=a));if(c){t.splice(f--,1);var u=r();void 0!==u&&(n=u)}}return n}a=a||0;for(var f=t.length;f>0&&t[f-1][2]>a;f--)t[f]=t[f-1];t[f]=[o,r,a]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,o){var r,a,i=o[0],c=o[1],s=o[2],u=0;if(i.some((function(n){return 0!==t[n]}))){for(r in c)e.o(c,r)&&(e.m[r]=c[r]);if(s)var f=s(e)}for(n&&n(o);u<i.length;u++)a=i[u],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(f)},o=self["webpackChunkapp"]=self["webpackChunkapp"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(291)}));o=e.O(o)})();
//# sourceMappingURL=app.b2bcca8f.js.map