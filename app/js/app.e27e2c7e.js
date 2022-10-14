(function(){"use strict";var t={714:function(t,n,e){var o=e(963),r=e(252);function a(t,n,e,o,a,i){const c=(0,r.up)("MainView");return(0,r.wg)(),(0,r.j4)(c)}function i(t,n,e,o,a,i){const c=(0,r.up)("SideBar"),s=(0,r.up)("mainInfo");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(c),(0,r.Wm)(s)])}var c=e(577);const s={class:"sidenav"};function u(t,n,e,o,a,i){return(0,r.wg)(),(0,r.iD)("ul",s,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.botoes,((t,n)=>((0,r.wg)(),(0,r.iD)("li",{key:n},(0,c.zw)(t),1)))),128))])}var f=e(907),p={name:"SideBar",data(){return{}},computed:{...(0,f.Se)({botoes:"getBotoes"})},mounted(){this.$store.dispatch("fetchBotoes")},watch:{}},l=e(744);const d=(0,l.Z)(p,[["render",u],["__scopeId","data-v-05f07904"]]);var v=d;const m={class:"container"},h=(0,r._)("p",null,"nome",-1),g=(0,r._)("p",null,"data",-1),b=[h,g];function w(t,n,e,o,a,i){return(0,r.wg)(),(0,r.iD)("div",m,b)}var y={name:"mainInfo",data(){return{}},computed:{},methods:{}};const O=(0,l.Z)(y,[["render",w]]);var j=O,B={name:"mainView",components:{SideBar:v,mainInfo:j}};const T=(0,l.Z)(B,[["render",i]]);var k=T,_={name:"App",components:{MainView:k}};const D=(0,l.Z)(_,[["render",a]]);var x=D,I=e(669),M=e.n(I);const S=M().create({baseURL:"http://localhost/projeto%20organizacao/api/inserir.php"}),Z=M().create({baseURL:"http://localhost/projeto%20organizacao/api/botoes.php"});var z=(0,f.MT)({state(){return{tarefa:null,botoes:[]}},getters:{getTarefa(t){return t.tarefa},getBotoes(t){return t.botoes}},mutations:{setTarefa(t,n){t.tarefa=n},setBotoes(t,n){t.botoes=n}},actions:{async fetchAddTarefa({commit:t},n){const e=await S.post("",{nome:n.nome,tipo:n.tipo});t("setTarefa",e.data)},async fetchBotoes({commit:t}){const n=await Z.get();console.log("response data: ",n.data),n.forEach((t=>{console.log(t)})),t("setBotoes",n.data)}},modules:{}});(0,o.ri)(x).use(z).mount("#app")}},n={};function e(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={exports:{}};return t[o](a,a.exports,e),a.exports}e.m=t,function(){var t=[];e.O=function(n,o,r,a){if(!o){var i=1/0;for(f=0;f<t.length;f++){o=t[f][0],r=t[f][1],a=t[f][2];for(var c=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(e.O).every((function(t){return e.O[t](o[s])}))?o.splice(s--,1):(c=!1,a<i&&(i=a));if(c){t.splice(f--,1);var u=r();void 0!==u&&(n=u)}}return n}a=a||0;for(var f=t.length;f>0&&t[f-1][2]>a;f--)t[f]=t[f-1];t[f]=[o,r,a]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,o){var r,a,i=o[0],c=o[1],s=o[2],u=0;if(i.some((function(n){return 0!==t[n]}))){for(r in c)e.o(c,r)&&(e.m[r]=c[r]);if(s)var f=s(e)}for(n&&n(o);u<i.length;u++)a=i[u],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(f)},o=self["webpackChunkapp"]=self["webpackChunkapp"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(714)}));o=e.O(o)})();
//# sourceMappingURL=app.e27e2c7e.js.map