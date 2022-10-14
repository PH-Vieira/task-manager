(function(){"use strict";var t={555:function(t,e,n){var a=n(963),s=n(252);function o(t,e,n,a,o,r){const i=(0,s.up)("MainView");return(0,s.wg)(),(0,s.j4)(i)}const r={class:"justToCenter"};function i(t,e,n,a,o,i){const c=(0,s.up)("SideBar"),l=(0,s.up)("mainInfo");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(c),(0,s.Wm)(l),(0,s._)("div",r,[((0,s.wg)(),(0,s.j4)((0,s.LL)(o.component)))])])}var c=n(577);const l={class:"sidenav"},u=["id"];function d(t,e,n,a,o,r){return(0,s.wg)(),(0,s.iD)("ul",l,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.botoes,((t,n)=>((0,s.wg)(),(0,s.iD)("li",{key:n},[(0,s._)("button",{onClick:e[0]||(e[0]=(...t)=>r.event&&r.event(...t)),class:"btn",id:t[0],style:(0,c.j5)({"background-image":"url("+t[1]+")"})},null,12,u)])))),128))])}var m=n(907),p={name:"SideBar",data(){return{}},computed:{...(0,m.Se)({botoes:"getBotoes"})},mounted(){this.$store.dispatch("fetchBotoes")},methods:{event(t){this.$store.dispatch("fetchCurrentComponent",t.target.id)}}},h=n(744);const g=(0,h.Z)(p,[["render",d],["__scopeId","data-v-054875f9"]]);var v=g;const f={class:"container"},k=(0,s._)("p",null,"placeHolder",-1),b=(0,s._)("p",null,"placeHolder",-1);function w(t,e,n,a,o,r){return(0,s.wg)(),(0,s.iD)("div",f,[k,(0,s.Uk)(" "+(0,c.zw)(o.currentDate)+" ",1),b])}var _={name:"mainInfo",data(){return{currentDate:null}},computed:{},methods:{getDate(){var t=(new Date).toJSON().slice(11,19);this.currentDate=t},async changeDate(){const t=t=>new Promise((e=>setTimeout(e,t)));do{this.getDate(),await t(1400)}while(1)}},mounted(){this.changeDate()}};const T=(0,h.Z)(_,[["render",w]]);var D=T;const y={class:"container"},C={class:"card"},L=(0,s._)("div",{class:"title"}," Adicionar nova task ",-1),M=(0,s._)("option",{disabled:"",value:"Selecione algum"},"Selecione algum",-1),j=(0,s._)("option",null,"1",-1),O=(0,s._)("option",null,"2",-1),S=(0,s._)("option",null,"3",-1),B=[M,j,O,S],U=(0,s._)("button",{class:"cardBtn"},"Adicionar",-1);function Z(t,e,n,o,r,i){const c=(0,s.up)("autoMessage");return(0,s.wg)(),(0,s.iD)("div",y,[(0,s._)("div",C,[L,(0,s._)("form",{class:"body",onSubmit:e[3]||(e[3]=(0,a.iM)(((...t)=>i.add&&i.add(...t)),["prevent"]))},[(0,s._)("div",null,[(0,s.Uk)("Nome "),(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>r.task.taskName=t),type:"text"},null,512),[[a.nr,r.task.taskName]])]),(0,s._)("div",null,[(0,s.Uk)("Descrição "),(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>r.task.taskDesc=t),type:"text"},null,512),[[a.nr,r.task.taskDesc]])]),(0,s._)("div",null,[(0,s.Uk)(" Nível "),(0,s.wy)((0,s._)("select",{"onUpdate:modelValue":e[2]||(e[2]=t=>r.task.taskLevel=t)},B,512),[[a.bM,r.task.taskLevel]])]),U],32)]),(0,s.Wm)(c)])}var x={name:"autoMessage",computed:{...(0,m.Se)({message:"getMessage"})},watch:{message(t,e){""!=this.message&&(console.log("message",this.message),this.$swal.fire({text:this.message,toast:!0,position:"top-end",timer:3e3,showConfirmButton:!1}),setTimeout((()=>{this.$store.commit("setMessage","")}),3e3))}}};const N=x;var z=N,V={name:"createTaskTab",components:{autoMessage:z},data(){return{task:{taskName:null,taskDesc:null,taskLevel:null}}},computed:{...(0,m.Se)({taskData:"getTask"})},methods:{add(){console.log("this.task",this.task),this.$store.dispatch("fetchAddTask",this.task)}},watch:{taskData(){console.log("taskData: ",this.taskData)}}};const $=(0,h.Z)(V,[["render",Z]]);var A=$;const H={class:"container"},I=(0,s._)("h3",null,"settingsTabComponent",-1),P=[I];function R(t,e,n,a,o,r){return(0,s.wg)(),(0,s.iD)("div",H,P)}var W={name:"settingsTab"};const K=(0,h.Z)(W,[["render",R]]);var Y=K;const E={class:"container"},F=(0,s._)("h3",null,"homeTabComponent",-1),J=[F];function q(t,e,n,a,o,r){return(0,s.wg)(),(0,s.iD)("div",E,J)}var G={name:"homeTab"};const Q=(0,h.Z)(G,[["render",q]]);var X=Q;const tt={class:"container"},et=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,"Nome"),(0,s._)("th",null,"Descrição"),(0,s._)("th",null,"Nível")])],-1);function nt(t,e,n,a,o,r){return(0,s.wg)(),(0,s.iD)("div",tt,[(0,s._)("table",null,[et,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.taskList,(e=>((0,s.wg)(),(0,s.iD)("tr",{key:t.key},[(0,s._)("td",null,(0,c.zw)(e["nome"]),1),(0,s._)("td",null,(0,c.zw)(e["descricao"]),1),(0,s._)("td",null,(0,c.zw)(e["descricao_nivel"]),1)])))),128))])])])}var at={name:"listTasksTab",computed:{...(0,m.Se)({taskList:"getTaskList"})},mounted(){this.$store.dispatch("fetchTaskList")}};const st=(0,h.Z)(at,[["render",nt]]);var ot=st;const rt={class:"container"},it=(0,s._)("h3",null,"graphsTab",-1),ct=[it];function lt(t,e,n,a,o,r){return(0,s.wg)(),(0,s.iD)("div",rt,ct)}var ut={name:"graphsTab"};const dt=(0,h.Z)(ut,[["render",lt]]);var mt=dt,pt={name:"mainView",components:{SideBar:v,mainInfo:D,createTask:A,settingsTab:Y,homeTab:X,listTasksTab:ot,graphsTab:mt},data(){return{component:A}},computed:{...(0,m.Se)({rawComponent:"getCurrentComponent"})},watch:{rawComponent(t,e){switch(t){case"plus":this.component=A;break;case"home":this.component=X;break;case"list":this.component=ot;break;case"graph":this.component=mt;break;case"gear":this.component=Y;break;default:break}}}};const ht=(0,h.Z)(pt,[["render",i]]);var gt=ht,vt={name:"App",components:{MainView:gt}};const ft=(0,h.Z)(vt,[["render",o]]);var kt=ft,bt=n(669),wt=n.n(bt);const _t=wt().create({baseURL:"http://localhost/projeto%20organizacao/api/inserir.php"}),Tt=wt().create({baseURL:"http://localhost/projeto%20organizacao/api/botoes.php"}),Dt=wt().create({baseURL:"http://localhost/projeto%20organizacao/api/listar.php"});var yt=(0,m.MT)({state(){return{message:null,botoes:null,currentComponent:null,taskList:null}},getters:{getMessage(t){return t.message},getBotoes(t){return t.botoes},getCurrentComponent(t){return t.currentComponent},getTaskList(t){return t.taskList}},mutations:{setMessage(t,e){t.message=e},setBotoes(t,e){t.botoes=e},setCurrentComponent(t,e){t.currentComponent=e},setTaskList(t,e){t.taskList=e}},actions:{async fetchAddTask({commit:t},e){const n=await _t.post("",e);console.log("response.data.message ",n.data.message),t("setMessage",n.data.message)},async fetchBotoes({commit:t}){const e=await Tt.get();t("setBotoes",e.data)},async fetchCurrentComponent({commit:t},e){t("setCurrentComponent",e)},async fetchTaskList({commit:t}){const e=await Dt.get();console.log("list: ",e.data),t("setTaskList",e.data)}}}),Ct=n(982),Lt=n.n(Ct);(0,a.ri)(kt).use(yt).use(Lt()).mount("#app")}},e={};function n(a){var s=e[a];if(void 0!==s)return s.exports;var o=e[a]={exports:{}};return t[a].call(o.exports,o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,a,s,o){if(!a){var r=1/0;for(u=0;u<t.length;u++){a=t[u][0],s=t[u][1],o=t[u][2];for(var i=!0,c=0;c<a.length;c++)(!1&o||r>=o)&&Object.keys(n.O).every((function(t){return n.O[t](a[c])}))?a.splice(c--,1):(i=!1,o<r&&(r=o));if(i){t.splice(u--,1);var l=s();void 0!==l&&(e=l)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[a,s,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var s,o,r=a[0],i=a[1],c=a[2],l=0;if(r.some((function(e){return 0!==t[e]}))){for(s in i)n.o(i,s)&&(n.m[s]=i[s]);if(c)var u=c(n)}for(e&&e(a);l<r.length;l++)o=r[l],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(u)},a=self["webpackChunkapp"]=self["webpackChunkapp"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(555)}));a=n.O(a)})();
//# sourceMappingURL=app.81a4d055.js.map