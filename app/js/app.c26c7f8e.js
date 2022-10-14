(function(){"use strict";var t={6:function(t,e,n){var a=n(963),s=n(252);function o(t,e,n,a,o,r){const i=(0,s.up)("MainView");return(0,s.wg)(),(0,s.j4)(i)}function r(t,e,n,a,o,r){const i=(0,s.up)("SideBar"),c=(0,s.up)("mainInfo");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(i),(0,s.Wm)(c),((0,s.wg)(),(0,s.j4)((0,s.LL)(o.component)))])}var i=n(577);const c={class:"sidenav"},l=["id"];function u(t,e,n,a,o,r){return(0,s.wg)(),(0,s.iD)("ul",c,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.botoes,((t,n)=>((0,s.wg)(),(0,s.iD)("li",{key:n},[(0,s._)("button",{onClick:e[0]||(e[0]=(...t)=>r.event&&r.event(...t)),class:"btn",id:t[0],style:(0,i.j5)({"background-image":"url("+t[1]+")"})},null,12,l)])))),128))])}var d=n(907),m={name:"SideBar",data(){return{}},computed:{...(0,d.Se)({botoes:"getBotoes"})},mounted(){this.$store.dispatch("fetchBotoes")},methods:{event(t){this.$store.dispatch("fetchCurrentComponent",t.target.id)}}},p=n(744);const h=(0,p.Z)(m,[["render",u],["__scopeId","data-v-054875f9"]]);var g=h;const f={class:"container"},v=(0,s._)("p",null,"placeHolder",-1),k=(0,s._)("p",null,"placeHolder",-1);function b(t,e,n,a,o,r){return(0,s.wg)(),(0,s.iD)("div",f,[v,(0,s.Uk)(" "+(0,i.zw)(o.currentDate)+" ",1),k])}var w={name:"mainInfo",data(){return{currentDate:null}},computed:{},methods:{getDate(){var t=(new Date).toJSON().slice(11,19);this.currentDate=t},async changeDate(){const t=t=>new Promise((e=>setTimeout(e,t)));do{this.getDate(),await t(1400)}while(1)}},mounted(){this.changeDate()}};const _=(0,p.Z)(w,[["render",b]]);var T=_;const D={class:"container"},y={class:"card"},C=(0,s._)("div",{class:"title"}," Adicionar nova task ",-1),L=(0,s._)("option",{disabled:"",value:"Selecione algum"},"Selecione algum",-1),M=(0,s._)("option",null,"1",-1),j=(0,s._)("option",null,"2",-1),O=(0,s._)("option",null,"3",-1),S=[L,M,j,O],B=(0,s._)("button",{class:"cardBtn"},"Adicionar",-1);function U(t,e,n,o,r,i){const c=(0,s.up)("autoMessage");return(0,s.wg)(),(0,s.iD)("div",D,[(0,s._)("div",y,[C,(0,s._)("form",{class:"body",onSubmit:e[3]||(e[3]=(0,a.iM)(((...t)=>i.add&&i.add(...t)),["prevent"]))},[(0,s._)("div",null,[(0,s.Uk)("Nome "),(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>r.task.taskName=t),type:"text"},null,512),[[a.nr,r.task.taskName]])]),(0,s._)("div",null,[(0,s.Uk)("Descrição "),(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>r.task.taskDesc=t),type:"text"},null,512),[[a.nr,r.task.taskDesc]])]),(0,s._)("div",null,[(0,s.Uk)(" Nível "),(0,s.wy)((0,s._)("select",{"onUpdate:modelValue":e[2]||(e[2]=t=>r.task.taskLevel=t)},S,512),[[a.bM,r.task.taskLevel]])]),B],32)]),(0,s.Wm)(c)])}var Z={name:"autoMessage",computed:{...(0,d.Se)({message:"getMessage"})},watch:{message(t,e){""!=this.message&&(console.log("message",this.message),this.$swal.fire({text:this.message,toast:!0,position:"top-end",timer:3e3,showConfirmButton:!1}),setTimeout((()=>{this.$store.commit("setMessage","")}),3e3))}}};const x=Z;var z=x,N={name:"createTaskTab",components:{autoMessage:z},data(){return{task:{taskName:null,taskDesc:null,taskLevel:null}}},computed:{...(0,d.Se)({taskData:"getTask"})},methods:{add(){console.log("this.task",this.task),this.$store.dispatch("fetchAddTask",this.task)}},watch:{taskData(){console.log("taskData: ",this.taskData)}}};const V=(0,p.Z)(N,[["render",U]]);var $=V;const A={class:"container"},H=(0,s._)("h3",null,"settingsTabComponent",-1),I=[H];function P(t,e,n,a,o,r){return(0,s.wg)(),(0,s.iD)("div",A,I)}var R={name:"settingsTab"};const W=(0,p.Z)(R,[["render",P]]);var K=W;const Y={class:"container"},E=(0,s._)("h3",null,"homeTabComponent",-1),F=[E];function J(t,e,n,a,o,r){return(0,s.wg)(),(0,s.iD)("div",Y,F)}var q={name:"homeTab"};const G=(0,p.Z)(q,[["render",J]]);var Q=G;const X={class:"container"},tt=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("td",null,"Nome"),(0,s._)("td",null,"Descrição"),(0,s._)("td",null,"Nível")])],-1),et=(0,s._)("td",null,"test",-1),nt=(0,s._)("td",null,"test",-1);function at(t,e,n,a,o,r){return(0,s.wg)(),(0,s.iD)("div",X,[(0,s._)("table",null,[tt,(0,s._)("tbody",null,[(0,s._)("tr",null,[et,(0,s._)("td",null,(0,i.zw)(t.taskList),1),nt]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.taskList,((t,e)=>((0,s.wg)(),(0,s.iD)("tr",{key:e},[(0,s._)("td",null,(0,i.zw)(t[e]["nome"]),1),(0,s._)("td",null,(0,i.zw)(t[e]["descricao"]),1),(0,s._)("td",null,(0,i.zw)(t[e]["nivel"]),1)])))),128))])])])}var st={name:"listTasksTab",computed:{...(0,d.Se)({taskList:"getTaskList"})},mounted(){this.$store.dispatch("fetchTaskList")}};const ot=(0,p.Z)(st,[["render",at]]);var rt=ot;const it={class:"container"},ct=(0,s._)("h3",null,"graphsTab",-1),lt=[ct];function ut(t,e,n,a,o,r){return(0,s.wg)(),(0,s.iD)("div",it,lt)}var dt={name:"graphsTab"};const mt=(0,p.Z)(dt,[["render",ut]]);var pt=mt,ht={name:"mainView",components:{SideBar:g,mainInfo:T,createTask:$,settingsTab:K,homeTab:Q,listTasksTab:rt,graphsTab:pt},data(){return{component:$}},computed:{...(0,d.Se)({rawComponent:"getCurrentComponent"})},watch:{rawComponent(t,e){switch(t){case"plus":this.component=$;break;case"home":this.component=Q;break;case"list":this.component=rt;break;case"graph":this.component=pt;break;case"gear":this.component=K;break;default:break}}}};const gt=(0,p.Z)(ht,[["render",r]]);var ft=gt,vt={name:"App",components:{MainView:ft}};const kt=(0,p.Z)(vt,[["render",o]]);var bt=kt,wt=n(669),_t=n.n(wt);const Tt=_t().create({baseURL:"http://localhost/projeto%20organizacao/api/inserir.php"}),Dt=_t().create({baseURL:"http://localhost/projeto%20organizacao/api/botoes.php"}),yt=_t().create({baseURL:"http://localhost/projeto%20organizacao/api/listar.php"});var Ct=(0,d.MT)({state(){return{message:null,botoes:null,currentComponent:null,taskList:null}},getters:{getMessage(t){return t.message},getBotoes(t){return t.botoes},getCurrentComponent(t){return t.currentComponent},getTaskList(t){return t.taskList}},mutations:{setMessage(t,e){t.message=e},setBotoes(t,e){t.botoes=e},setCurrentComponent(t,e){t.currentComponent=e},setTaskList(t,e){t.taskList=e}},actions:{async fetchAddTask({commit:t},e){const n=await Tt.post("",e);console.log("response.data.message ",n.data.message),t("setMessage",n.data.message)},async fetchBotoes({commit:t}){const e=await Dt.get();t("setBotoes",e.data)},async fetchCurrentComponent({commit:t},e){t("setCurrentComponent",e)},async fetchTaskList({commit:t}){const e=await yt.get();console.log("list: ",e.data),t("setTaskList",e.data)}}}),Lt=n(982),Mt=n.n(Lt);(0,a.ri)(bt).use(Ct).use(Mt()).mount("#app")}},e={};function n(a){var s=e[a];if(void 0!==s)return s.exports;var o=e[a]={exports:{}};return t[a].call(o.exports,o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,a,s,o){if(!a){var r=1/0;for(u=0;u<t.length;u++){a=t[u][0],s=t[u][1],o=t[u][2];for(var i=!0,c=0;c<a.length;c++)(!1&o||r>=o)&&Object.keys(n.O).every((function(t){return n.O[t](a[c])}))?a.splice(c--,1):(i=!1,o<r&&(r=o));if(i){t.splice(u--,1);var l=s();void 0!==l&&(e=l)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[a,s,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var s,o,r=a[0],i=a[1],c=a[2],l=0;if(r.some((function(e){return 0!==t[e]}))){for(s in i)n.o(i,s)&&(n.m[s]=i[s]);if(c)var u=c(n)}for(e&&e(a);l<r.length;l++)o=r[l],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(u)},a=self["webpackChunkapp"]=self["webpackChunkapp"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(6)}));a=n.O(a)})();
//# sourceMappingURL=app.c26c7f8e.js.map