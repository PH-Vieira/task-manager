(function(){"use strict";var t={18:function(t,n,e){var o=e(963),r=e(252);function a(t,n,e,o,a,i){const u=(0,r.up)("MainView");return(0,r.wg)(),(0,r.j4)(u)}function i(t,n,e,o,a,i){const u=(0,r.up)("SideBar"),c=(0,r.up)("mainInfo");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(u),(0,r.Wm)(c)])}var u=e(577);const c={class:"sidenav"};function s(t,n,e,o,a,i){return(0,r.wg)(),(0,r.iD)("ul",c,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.botoes,((t,n)=>((0,r.wg)(),(0,r.iD)("li",{key:n},[(0,r._)("button",{class:"btn",style:(0,u.j5)({"background-image":"url("+t[n]["url"]+")"})},null,4)])))),128))])}var l=e(907),f={name:"SideBar",data(){return{}},computed:{...(0,l.Se)({botoes:"getBotoes"})},mounted(){this.$store.dispatch("fetchBotoes"),setTimeout((()=>{console.log(this.botoes)}),1e3)},watch:{}},p=e(744);const d=(0,p.Z)(f,[["render",s],["__scopeId","data-v-feb71ec8"]]);var m=d;const h={class:"container"},v=(0,r._)("p",null,"nome",-1),g=(0,r._)("p",null,"data",-1),b=[v,g];function w(t,n,e,o,a,i){return(0,r.wg)(),(0,r.iD)("div",h,b)}var y={name:"mainInfo",data(){return{}},computed:{},methods:{}};const j=(0,p.Z)(y,[["render",w]]);var O=j,B={name:"mainView",components:{SideBar:m,mainInfo:O}};const T=(0,p.Z)(B,[["render",i]]);var k=T,_={name:"App",components:{MainView:k}};const D=(0,p.Z)(_,[["render",a]]);var x=D,I=e(669),M=e.n(I);const S=M().create({baseURL:"http://localhost/projeto%20organizacao/api/inserir.php"}),Z=M().create({baseURL:"http://localhost/projeto%20organizacao/api/botoes.php"});var z=(0,l.MT)({state(){return{tarefa:null,botoes:[]}},getters:{getTarefa(t){return t.tarefa},getBotoes(t){return t.botoes}},mutations:{setTarefa(t,n){t.tarefa=n},setBotoes(t,n){t.botoes=n}},actions:{async fetchAddTarefa({commit:t},n){const e=await S.post("",{nome:n.nome,tipo:n.tipo});t("setTarefa",e.data)},async fetchBotoes({commit:t}){const n=await Z.get();let e=[{nome:null,url:null}];n.data.forEach((t=>{console.log(t),e[nome]=t["nome"],e[url]="http://localhost/projeto%20organizacao/app/src/assets/"+t["url"]})),console.log(e)}},modules:{}});(0,o.ri)(x).use(z).mount("#app")}},n={};function e(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={exports:{}};return t[o](a,a.exports,e),a.exports}e.m=t,function(){var t=[];e.O=function(n,o,r,a){if(!o){var i=1/0;for(l=0;l<t.length;l++){o=t[l][0],r=t[l][1],a=t[l][2];for(var u=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(e.O).every((function(t){return e.O[t](o[c])}))?o.splice(c--,1):(u=!1,a<i&&(i=a));if(u){t.splice(l--,1);var s=r();void 0!==s&&(n=s)}}return n}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[o,r,a]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,o){var r,a,i=o[0],u=o[1],c=o[2],s=0;if(i.some((function(n){return 0!==t[n]}))){for(r in u)e.o(u,r)&&(e.m[r]=u[r]);if(c)var l=c(e)}for(n&&n(o);s<i.length;s++)a=i[s],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(l)},o=self["webpackChunkapp"]=self["webpackChunkapp"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(18)}));o=e.O(o)})();
//# sourceMappingURL=app.e93b4f06.js.map