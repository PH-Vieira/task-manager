(function(){"use strict";var t={87:function(t,e,n){var a=n(963),o=n(252);function r(t,e,n,a,r,s){const i=(0,o.up)("MainView");return(0,o.wg)(),(0,o.j4)(i)}function s(t,e,n,a,r,s){const i=(0,o.up)("SideBar"),c=(0,o.up)("mainInfo");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(i),(0,o.Wm)(c),((0,o.wg)(),(0,o.j4)((0,o.LL)(r.component)))])}var i=n(577);const c={class:"sidenav"},u=["id"];function l(t,e,n,a,r,s){return(0,o.wg)(),(0,o.iD)("ul",c,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.botoes,((t,n)=>((0,o.wg)(),(0,o.iD)("li",{key:n},[(0,o._)("button",{onClick:e[0]||(e[0]=(...t)=>s.event&&s.event(...t)),class:"btn",id:t[0],style:(0,i.j5)({"background-image":"url("+t[1]+")"})},null,12,u)])))),128))])}var d=n(907),p={name:"SideBar",data(){return{}},computed:{...(0,d.Se)({botoes:"getBotoes"})},mounted(){this.$store.dispatch("fetchBotoes")},methods:{event(t){this.$store.dispatch("fetchCurrentComponent",t.target.id)}}},m=n(744);const h=(0,m.Z)(p,[["render",l],["__scopeId","data-v-054875f9"]]);var v=h;const f={class:"container"},k=(0,o._)("p",null,"placeHolder",-1),b=(0,o._)("p",null,"placeHolder",-1);function g(t,e,n,a,r,s){return(0,o.wg)(),(0,o.iD)("div",f,[k,(0,o.Uk)(" "+(0,i.zw)(r.currentDate)+" ",1),b])}var w={name:"mainInfo",data(){return{currentDate:null}},computed:{},methods:{getDate(){var t=(new Date).toJSON().slice(11,19);this.currentDate=t},async changeDate(){const t=t=>new Promise((e=>setTimeout(e,t)));do{this.getDate(),await t(1400)}while(1)}},mounted(){this.changeDate()}};const T=(0,m.Z)(w,[["render",g]]);var _=T;const D={class:"container"},C={class:"card"},y=(0,o._)("div",{class:"title"}," Adicionar nova task ",-1),O=(0,o._)("option",{disabled:"",value:"Selecione algum"},"Selecione algum",-1),j=(0,o._)("option",null,"1",-1),B=(0,o._)("option",null,"2",-1),S=(0,o._)("option",null,"3",-1),U=[O,j,B,S],Z=(0,o._)("button",{class:"cardBtn"},"Adicionar",-1);function x(t,e,n,r,s,i){return(0,o.wg)(),(0,o.iD)("div",D,[(0,o._)("div",C,[y,(0,o._)("form",{class:"body",onSubmit:e[3]||(e[3]=(0,a.iM)(((...t)=>i.add&&i.add(...t)),["prevent"]))},[(0,o._)("div",null,[(0,o.Uk)("Nome "),(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>s.task.taskName=t),type:"text"},null,512),[[a.nr,s.task.taskName]])]),(0,o._)("div",null,[(0,o.Uk)("Descrição "),(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>s.task.taskDesc=t),type:"text"},null,512),[[a.nr,s.task.taskDesc]])]),(0,o._)("div",null,[(0,o.Uk)(" Nível "),(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":e[2]||(e[2]=t=>s.task.taskLevel=t)},U,512),[[a.bM,s.task.taskLevel]])]),Z],32)])])}var L={name:"createTaskTab",data(){return{task:{taskName:null,taskDesc:null,taskLevel:null}}},computed:{...(0,d.Se)({taskData:"getTask"})},methods:{add(){this.$swal("hello vue!"),this.$store.dispatch("fetchAddTask",this.task)}}};const M=(0,m.Z)(L,[["render",x]]);var N=M;const V={class:"container"},A=(0,o._)("h3",null,"settingsTabComponent",-1),I=[A];function $(t,e,n,a,r,s){return(0,o.wg)(),(0,o.iD)("div",V,I)}var z={name:"settingsTab"};const H=(0,m.Z)(z,[["render",$]]);var P=H;const R={class:"container"},W=(0,o._)("h3",null,"homeTabComponent",-1),E=[W];function F(t,e,n,a,r,s){return(0,o.wg)(),(0,o.iD)("div",R,E)}var J={name:"homeTab"};const K=(0,m.Z)(J,[["render",F]]);var Y=K;const q={class:"container"},G=(0,o._)("h3",null,"listTasksTab",-1),Q=[G];function X(t,e,n,a,r,s){return(0,o.wg)(),(0,o.iD)("div",q,Q)}var tt={name:"listTasksTab"};const et=(0,m.Z)(tt,[["render",X]]);var nt=et;const at={class:"container"},ot=(0,o._)("h3",null,"graphsTab",-1),rt=[ot];function st(t,e,n,a,r,s){return(0,o.wg)(),(0,o.iD)("div",at,rt)}var it={name:"graphsTab"};const ct=(0,m.Z)(it,[["render",st]]);var ut=ct,lt={name:"mainView",components:{SideBar:v,mainInfo:_,createTask:N,settingsTab:P,homeTab:Y,listTasksTab:nt,graphsTab:ut},data(){return{component:N}},computed:{...(0,d.Se)({rawComponent:"getCurrentComponent"})},watch:{rawComponent(t,e){switch(t){case"plus":this.component=N;break;case"home":this.component=Y;break;case"list":this.component=nt;break;case"graph":this.component=ut;break;case"gear":this.component=P;break;default:break}}}};const dt=(0,m.Z)(lt,[["render",s]]);var pt=dt,mt={name:"App",components:{MainView:pt}};const ht=(0,m.Z)(mt,[["render",r]]);var vt=ht,ft=n(669),kt=n.n(ft);const bt=kt().create({baseURL:"http://localhost/projeto%20organizacao/api/inserir.php"}),gt=kt().create({baseURL:"http://localhost/projeto%20organizacao/api/botoes.php"});var wt=(0,d.MT)({state(){return{task:null,botoes:null,currentComponent:null}},getters:{getTask(t){return t.task},getBotoes(t){return t.botoes},getCurrentComponent(t){return t.currentComponent}},mutations:{setTask(t,e){t.task=e},setBotoes(t,e){t.botoes=e},setCurrentComponent(t,e){t.currentComponent=e}},actions:{async fetchAddTask({commit:t},e){const n=await bt.get();t("setTask",n.data)},async fetchBotoes({commit:t}){const e=await gt.get();t("setBotoes",e.data)},async fetchCurrentComponent({commit:t},e){t("setCurrentComponent",e)}}});n(455);(0,a.ri)(vt).use(wt).mount("#app")}},e={};function n(a){var o=e[a];if(void 0!==o)return o.exports;var r=e[a]={exports:{}};return t[a].call(r.exports,r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,a,o,r){if(!a){var s=1/0;for(l=0;l<t.length;l++){a=t[l][0],o=t[l][1],r=t[l][2];for(var i=!0,c=0;c<a.length;c++)(!1&r||s>=r)&&Object.keys(n.O).every((function(t){return n.O[t](a[c])}))?a.splice(c--,1):(i=!1,r<s&&(s=r));if(i){t.splice(l--,1);var u=o();void 0!==u&&(e=u)}}return e}r=r||0;for(var l=t.length;l>0&&t[l-1][2]>r;l--)t[l]=t[l-1];t[l]=[a,o,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var o,r,s=a[0],i=a[1],c=a[2],u=0;if(s.some((function(e){return 0!==t[e]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(c)var l=c(n)}for(e&&e(a);u<s.length;u++)r=s[u],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(l)},a=self["webpackChunkapp"]=self["webpackChunkapp"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(87)}));a=n.O(a)})();
//# sourceMappingURL=app.028d575e.js.map