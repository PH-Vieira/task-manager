(function(){"use strict";var t={858:function(t,n,e){var o=e(963),r=e(252);function a(t,n,e,o,a,i){const u=(0,r.up)("MainView");return(0,r.wg)(),(0,r.j4)(u)}function i(t,n,e,o,a,i){const u=(0,r.up)("SideBar"),c=(0,r.up)("mainInfo");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(u),(0,r.Wm)(c),((0,r.wg)(),(0,r.j4)((0,r.LL)(a.component)))])}var u=e(577);const c={class:"sidenav"},s=["id"];function l(t,n,e,o,a,i){return(0,r.wg)(),(0,r.iD)("ul",c,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.botoes,((t,e)=>((0,r.wg)(),(0,r.iD)("li",{key:e},[(0,r._)("button",{onClick:n[0]||(n[0]=(...t)=>i.event&&i.event(...t)),class:"btn",id:t,style:(0,u.j5)({"background-image":"url("+t[1]+")"})},null,12,s)])))),128))])}var f=e(907),p={name:"SideBar",data(){return{}},computed:{...(0,f.Se)({botoes:"getBotoes"})},mounted(){this.$store.dispatch("fetchBotoes")},methods:{event(t){console.log(t.target.id)}}},d=e(744);const m=(0,d.Z)(p,[["render",l],["__scopeId","data-v-451af8c4"]]);var v=m;const h={class:"container"},g=(0,r._)("p",null,"nome",-1),w=(0,r._)("p",null,"sla qualquer outra coisa",-1);function b(t,n,e,o,a,i){return(0,r.wg)(),(0,r.iD)("div",h,[g,(0,r.Uk)(" "+(0,u.zw)(a.currentDate)+" ",1),w])}var y={name:"mainInfo",data(){return{currentDate:null}},computed:{},methods:{getDate(){var t=(new Date).toJSON().slice(11,19);this.currentDate=t},async changeDate(){const t=t=>new Promise((n=>setTimeout(n,t)));do{this.getDate(),console.log("sus"),await t(1400)}while(1)}},mounted(){this.changeDate()}};const C=(0,d.Z)(y,[["render",b]]);var D=C;const k=(0,r._)("h5",null,"creataskcomponent",-1),O=[k];function j(t,n,e,o,a,i){return(0,r.wg)(),(0,r.iD)("div",null,O)}var T={name:"createTask"};const B=(0,d.Z)(T,[["render",j]]);var _=B,S={name:"mainView",components:{SideBar:v,mainInfo:D,createTask:_},data(){return{component:null}}};const Z=(0,d.Z)(S,[["render",i]]);var x=Z,I={name:"App",components:{MainView:x}};const L=(0,d.Z)(I,[["render",a]]);var M=L,z=e(669),P=e.n(z);const U=P().create({baseURL:"http://localhost/projeto%20organizacao/api/inserir.php"}),V=P().create({baseURL:"http://localhost/projeto%20organizacao/api/botoes.php"});var q=(0,f.MT)({state(){return{tarefa:null,botoes:[{nome:null,url:null}],currentComponent:null}},getters:{getTarefa(t){return t.tarefa},getBotoes(t){return t.botoes},getCurrentComponent(t){return t.currentComponent}},mutations:{setTarefa(t,n){t.tarefa=n},setBotoes(t,n){t.botoes=n},setCurrentComponent(t,n){t.currentComponent=n}},actions:{async fetchAddTarefa({commit:t},n){const e=await U.post("",{nome:n.nome,tipo:n.tipo});t("setTarefa",e.data)},async fetchBotoes({commit:t}){const n=await V.get();console.log("response data: ",n.data),t("setBotoes",n.data)},async fetchCurrentComponent({commit:t},n){t("setCurrentComponent")}}});(0,o.ri)(M).use(q).mount("#app")}},n={};function e(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={exports:{}};return t[o](a,a.exports,e),a.exports}e.m=t,function(){var t=[];e.O=function(n,o,r,a){if(!o){var i=1/0;for(l=0;l<t.length;l++){o=t[l][0],r=t[l][1],a=t[l][2];for(var u=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(e.O).every((function(t){return e.O[t](o[c])}))?o.splice(c--,1):(u=!1,a<i&&(i=a));if(u){t.splice(l--,1);var s=r();void 0!==s&&(n=s)}}return n}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[o,r,a]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,o){var r,a,i=o[0],u=o[1],c=o[2],s=0;if(i.some((function(n){return 0!==t[n]}))){for(r in u)e.o(u,r)&&(e.m[r]=u[r]);if(c)var l=c(e)}for(n&&n(o);s<i.length;s++)a=i[s],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(l)},o=self["webpackChunkapp"]=self["webpackChunkapp"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(858)}));o=e.O(o)})();
//# sourceMappingURL=app.ce4816c5.js.map