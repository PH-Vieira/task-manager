(function(){"use strict";var t={277:function(t,e,n){var o=n(963),a=n(252);function r(t,e,n,o,r,s){const i=(0,a.up)("MainView");return(0,a.wg)(),(0,a.j4)(i)}function s(t,e,n,o,r,s){const i=(0,a.up)("SideBar"),c=(0,a.up)("mainInfo");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(i),(0,a.Wm)(c),((0,a.wg)(),(0,a.j4)((0,a.LL)(r.component)))])}var i=n(577);const c={class:"sidenav"},u=["id"];function l(t,e,n,o,r,s){return(0,a.wg)(),(0,a.iD)("ul",c,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.botoes,((t,n)=>((0,a.wg)(),(0,a.iD)("li",{key:n},[(0,a._)("button",{onClick:e[0]||(e[0]=(...t)=>s.event&&s.event(...t)),class:"btn",id:t[0],style:(0,i.j5)({"background-image":"url("+t[1]+")"})},null,12,u)])))),128))])}var d=n(907),p={name:"SideBar",data(){return{}},computed:{...(0,d.Se)({botoes:"getBotoes"})},mounted(){this.$store.dispatch("fetchBotoes")},methods:{event(t){this.$store.dispatch("fetchCurrentComponent",t.target.id)}}},m=n(744);const h=(0,m.Z)(p,[["render",l],["__scopeId","data-v-054875f9"]]);var v=h;const f={class:"container"},k=(0,a._)("p",null,"placeHolder",-1),g=(0,a._)("p",null,"placeHolder",-1);function b(t,e,n,o,r,s){return(0,a.wg)(),(0,a.iD)("div",f,[k,(0,a.Uk)(" "+(0,i.zw)(r.currentDate)+" ",1),g])}var w={name:"mainInfo",data(){return{currentDate:null}},computed:{},methods:{getDate(){var t=(new Date).toJSON().slice(11,19);this.currentDate=t},async changeDate(){const t=t=>new Promise((e=>setTimeout(e,t)));do{this.getDate(),await t(1400)}while(1)}},mounted(){this.changeDate()}};const T=(0,m.Z)(w,[["render",b]]);var _=T;const D={class:"container"},C={class:"card"},y=(0,a._)("div",{class:"title"}," Adicionar nova task ",-1),O=(0,a._)("option",{disabled:"",value:"Selecione algum"},"Selecione algum",-1),j=(0,a._)("option",null,"1",-1),B=(0,a._)("option",null,"2",-1),S=(0,a._)("option",null,"3",-1),U=[O,j,B,S],Z=(0,a._)("button",{class:"cardBtn"},"Adicionar",-1);function L(t,e,n,r,s,i){return(0,a.wg)(),(0,a.iD)("div",D,[(0,a._)("div",C,[y,(0,a._)("form",{class:"body",onSubmit:e[3]||(e[3]=(0,o.iM)(((...t)=>i.add&&i.add(...t)),["prevent"]))},[(0,a._)("div",null,[(0,a.Uk)("Nome "),(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>s.task.taskName=t),type:"text"},null,512),[[o.nr,s.task.taskName]])]),(0,a._)("div",null,[(0,a.Uk)("Descrição "),(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>s.task.taskDesc=t),type:"text"},null,512),[[o.nr,s.task.taskDesc]])]),(0,a._)("div",null,[(0,a.Uk)(" Nível "),(0,a.wy)((0,a._)("select",{"onUpdate:modelValue":e[2]||(e[2]=t=>s.task.taskLevel=t)},U,512),[[o.bM,s.task.taskLevel]])]),Z],32)])])}var x={name:"createTaskTab",data(){return{task:{taskName:null,taskDesc:null,taskLevel:null}}},computed:{...(0,d.Se)({taskData:"getTask"})},methods:{add(){console.log("botao clicado ",this.task),this.$store.dispatch("fetchAddTask",this.task)}},watch:{taskData(t,e){console.log(e,t)}}};const M=(0,m.Z)(x,[["render",L]]);var N=M;const V={class:"container"},A=(0,a._)("h3",null,"settingsTabComponent",-1),I=[A];function z(t,e,n,o,r,s){return(0,a.wg)(),(0,a.iD)("div",V,I)}var H={name:"settingsTab"};const P=(0,m.Z)(H,[["render",z]]);var $=P;const R={class:"container"},W=(0,a._)("h3",null,"homeTabComponent",-1),E=[W];function F(t,e,n,o,r,s){return(0,a.wg)(),(0,a.iD)("div",R,E)}var J={name:"homeTab"};const K=(0,m.Z)(J,[["render",F]]);var Y=K;const q={class:"container"},G=(0,a._)("h3",null,"listTasksTab",-1),Q=[G];function X(t,e,n,o,r,s){return(0,a.wg)(),(0,a.iD)("div",q,Q)}var tt={name:"listTasksTab"};const et=(0,m.Z)(tt,[["render",X]]);var nt=et;const ot={class:"container"},at=(0,a._)("h3",null,"graphsTab",-1),rt=[at];function st(t,e,n,o,r,s){return(0,a.wg)(),(0,a.iD)("div",ot,rt)}var it={name:"graphsTab"};const ct=(0,m.Z)(it,[["render",st]]);var ut=ct,lt={name:"mainView",components:{SideBar:v,mainInfo:_,createTask:N,settingsTab:$,homeTab:Y,listTasksTab:nt,graphsTab:ut},data(){return{component:N}},computed:{...(0,d.Se)({rawComponent:"getCurrentComponent"})},watch:{rawComponent(t,e){switch(t){case"plus":this.component=N;break;case"home":this.component=Y;break;case"list":this.component=nt;break;case"graph":this.component=ut;break;case"gear":this.component=$;break;default:break}}}};const dt=(0,m.Z)(lt,[["render",s]]);var pt=dt,mt={name:"App",components:{MainView:pt}};const ht=(0,m.Z)(mt,[["render",r]]);var vt=ht,ft=n(669),kt=n.n(ft);const gt=kt().create({baseURL:"http://localhost/projeto%20organizacao/api/inserir.php"}),bt=kt().create({baseURL:"http://localhost/projeto%20organizacao/api/botoes.php"});var wt=(0,d.MT)({state(){return{task:null,botoes:null,currentComponent:null}},getters:{getTask(t){return t.task},getBotoes(t){return t.botoes},getCurrentComponent(t){return t.currentComponent}},mutations:{setTask(t,e){t.task=e},setBotoes(t,e){t.botoes=e},setCurrentComponent(t,e){t.currentComponent=e}},actions:{async fetchAddTask({commit:t},e){console.log("entrou add task");const n=await gt.get(e);console.log(n.data),t("setTask",n.data)},async fetchBotoes({commit:t}){const e=await bt.get();t("setBotoes",e.data)},async fetchCurrentComponent({commit:t},e){t("setCurrentComponent",e)}}});(0,o.ri)(vt).use(wt).mount("#app")}},e={};function n(o){var a=e[o];if(void 0!==a)return a.exports;var r=e[o]={exports:{}};return t[o](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,o,a,r){if(!o){var s=1/0;for(l=0;l<t.length;l++){o=t[l][0],a=t[l][1],r=t[l][2];for(var i=!0,c=0;c<o.length;c++)(!1&r||s>=r)&&Object.keys(n.O).every((function(t){return n.O[t](o[c])}))?o.splice(c--,1):(i=!1,r<s&&(s=r));if(i){t.splice(l--,1);var u=a();void 0!==u&&(e=u)}}return e}r=r||0;for(var l=t.length;l>0&&t[l-1][2]>r;l--)t[l]=t[l-1];t[l]=[o,a,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var a,r,s=o[0],i=o[1],c=o[2],u=0;if(s.some((function(e){return 0!==t[e]}))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(c)var l=c(n)}for(e&&e(o);u<s.length;u++)r=s[u],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(l)},o=self["webpackChunkapp"]=self["webpackChunkapp"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(277)}));o=n.O(o)})();
//# sourceMappingURL=app.c1da901f.js.map