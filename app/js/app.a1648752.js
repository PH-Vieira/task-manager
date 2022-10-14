(function(){"use strict";var t={966:function(t,e,n){var o=n(963),r=n(252);function a(t,e,n,o,a,i){const s=(0,r.up)("MainView");return(0,r.wg)(),(0,r.j4)(s)}function i(t,e,n,o,a,i){const s=(0,r.up)("SideBar"),u=(0,r.up)("mainInfo");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(s),(0,r.Wm)(u)])}var s=n(577);const u={class:"sidenav"};function c(t,e,n,o,a,i){return(0,r.wg)(),(0,r.iD)("ul",u,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.botoes,((t,e)=>((0,r.wg)(),(0,r.iD)("li",{key:e},[(0,r._)("button",{class:(0,s.C_)(["btn",{active:a.isActive}]),style:(0,s.j5)({"background-image":"url("+t+")"})},null,6)])))),128))])}var f=n(907),l={name:"SideBar",data(){return{isActive:!1}},computed:{...(0,f.Se)({botoes:"getBotoes"})},mounted(){this.$store.dispatch("fetchBotoes")},methods:{}},p=n(744);const d=(0,p.Z)(l,[["render",c],["__scopeId","data-v-d3869798"]]);var v=d;const m={class:"container"},h=(0,r._)("p",null,"nome",-1),g=(0,r._)("p",null,"sla qualquer outra coisa",-1);function b(t,e,n,o,a,i){return(0,r.wg)(),(0,r.iD)("div",m,[h,(0,r.Uk)(" "+(0,s.zw)(a.currentDate)+" ",1),g])}var w={name:"mainInfo",data(){return{currentDate:null}},computed:{},methods:{getDate(){var t=(new Date).toJSON().slice(11,19);this.currentDate=t},async changeDate(){const t=t=>new Promise((e=>setTimeout(e,t)));do{this.getDate(),console.log("sus"),await t(1400)}while(1)}},mounted(){this.changeDate()}};const y=(0,p.Z)(w,[["render",b]]);var D=y,O={name:"mainView",components:{SideBar:v,mainInfo:D}};const j=(0,p.Z)(O,[["render",i]]);var B=j,k={name:"App",components:{MainView:B}};const T=(0,p.Z)(k,[["render",a]]);var _=T,S=n(669),x=n.n(S);const A=x().create({baseURL:"http://localhost/projeto%20organizacao/api/inserir.php"}),I=x().create({baseURL:"http://localhost/projeto%20organizacao/api/botoes.php"});var M=(0,f.MT)({state(){return{tarefa:null,botoes:[]}},getters:{getTarefa(t){return t.tarefa},getBotoes(t){return t.botoes}},mutations:{setTarefa(t,e){t.tarefa=e},setBotoes(t,e){t.botoes=e}},actions:{async fetchAddTarefa({commit:t},e){const n=await A.post("",{nome:e.nome,tipo:e.tipo});t("setTarefa",n.data)},async fetchBotoes({commit:t}){const e=await I.get();console.log("response data: ",e.data),t("setBotoes",e.data)}},modules:{}});(0,o.ri)(_).use(M).mount("#app")}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={exports:{}};return t[o](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,a){if(!o){var i=1/0;for(f=0;f<t.length;f++){o=t[f][0],r=t[f][1],a=t[f][2];for(var s=!0,u=0;u<o.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](o[u])}))?o.splice(u--,1):(s=!1,a<i&&(i=a));if(s){t.splice(f--,1);var c=r();void 0!==c&&(e=c)}}return e}a=a||0;for(var f=t.length;f>0&&t[f-1][2]>a;f--)t[f]=t[f-1];t[f]=[o,r,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,a,i=o[0],s=o[1],u=o[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(u)var f=u(n)}for(e&&e(o);c<i.length;c++)a=i[c],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(f)},o=self["webpackChunkapp"]=self["webpackChunkapp"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(966)}));o=n.O(o)})();
//# sourceMappingURL=app.a1648752.js.map