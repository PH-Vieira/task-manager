(function(){"use strict";var t={492:function(t,e,n){var a=n(963),o=n(252);function s(t,e,n,a,s,r){const i=(0,o.up)("MainView");return(0,o.wg)(),(0,o.j4)(i)}function r(t,e,n,a,s,r){const i=(0,o.up)("SideBar"),c=(0,o.up)("mainInfo");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(i),(0,o.Wm)(c),((0,o.wg)(),(0,o.j4)((0,o.LL)(s.component)))])}var i=n(577);const c={class:"sidenav"},u=["id"];function l(t,e,n,a,s,r){return(0,o.wg)(),(0,o.iD)("ul",c,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.botoes,((t,n)=>((0,o.wg)(),(0,o.iD)("li",{key:n},[(0,o._)("button",{onClick:e[0]||(e[0]=(...t)=>r.event&&r.event(...t)),class:"btn",id:t[0],style:(0,i.j5)({"background-image":"url("+t[1]+")"})},null,12,u)])))),128))])}var p=n(907),d={name:"SideBar",data(){return{}},computed:{...(0,p.Se)({botoes:"getBotoes"})},mounted(){this.$store.dispatch("fetchBotoes")},methods:{event(t){this.$store.dispatch("fetchCurrentComponent",t.target.id)}}},m=n(744);const h=(0,m.Z)(d,[["render",l],["__scopeId","data-v-054875f9"]]);var f=h;const g={class:"container"},v=(0,o._)("p",null,"placeHolder",-1),k=(0,o._)("p",null,"placeHolder",-1);function b(t,e,n,a,s,r){return(0,o.wg)(),(0,o.iD)("div",g,[v,(0,o.Uk)(" "+(0,i.zw)(s.currentDate)+" ",1),k])}var w={name:"mainInfo",data(){return{currentDate:null}},computed:{},methods:{getDate(){var t=(new Date).toJSON().slice(11,19);this.currentDate=t},async changeDate(){const t=t=>new Promise((e=>setTimeout(e,t)));do{this.getDate(),await t(1400)}while(1)}},mounted(){this.changeDate()}};const D=(0,m.Z)(w,[["render",b]]);var T=D;const _={class:"container"},C={class:"card"},y=(0,o._)("div",{class:"title"}," Adicionar nova task ",-1),M=(0,o._)("option",{disabled:"",value:"Selecione algum"},"Selecione algum",-1),B=(0,o._)("option",null,"1",-1),O=(0,o._)("option",null,"2",-1),j=(0,o._)("option",null,"3",-1),S=[M,B,O,j],x=(0,o._)("button",{class:"cardBtn"},"Adicionar",-1);function U(t,e,n,s,r,i){return(0,o.wg)(),(0,o.iD)("div",_,[(0,o._)("div",C,[y,(0,o._)("form",{class:"body",onSubmit:e[3]||(e[3]=(0,a.iM)(((...t)=>i.add&&i.add(...t)),["prevent"]))},[(0,o._)("div",null,[(0,o.Uk)("Nome "),(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>r.task.taskName=t),type:"text"},null,512),[[a.nr,r.task.taskName]])]),(0,o._)("div",null,[(0,o.Uk)("Descrição "),(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>r.task.taskDesc=t),type:"text"},null,512),[[a.nr,r.task.taskDesc]])]),(0,o._)("div",null,[(0,o.Uk)(" Nível "),(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":e[2]||(e[2]=t=>r.task.taskLevel=t)},S,512),[[a.bM,r.task.taskLevel]])]),x],32)])])}var Z={name:"autoMessage",computed:{...(0,p.Se)({message:"getMessage"})},watch:{message(){this.$swal.fire({text:this.message,toast:!0,position:"top-end",timer:3e3,showConfirmButton:!1}),setTimeout((()=>{this.$store.commit("setMessage","")}),3e3)}}};const L=Z;var N=L,A={name:"createTaskTab",components:{autoMessage:N},data(){return{task:{taskName:null,taskDesc:null,taskLevel:null}}},computed:{...(0,p.Se)({taskData:"getTask"})},methods:{add(){this.$swal.fire({text:"Adicionando "+this.task["taskName"],toast:!0,position:"top-end",timer:3e3,showConfirmButton:!1}),console.log("this.task",this.task),this.$store.dispatch("fetchAddTask",this.task)}},watch:{taskData(){console.log("taskData: ",this.taskData)}}};const V=(0,m.Z)(A,[["render",U]]);var $=V;const I={class:"container"},z=(0,o._)("h3",null,"settingsTabComponent",-1),H=[z];function P(t,e,n,a,s,r){return(0,o.wg)(),(0,o.iD)("div",I,H)}var R={name:"settingsTab"};const W=(0,m.Z)(R,[["render",P]]);var E=W;const F={class:"container"},J=(0,o._)("h3",null,"homeTabComponent",-1),K=[J];function Y(t,e,n,a,s,r){return(0,o.wg)(),(0,o.iD)("div",F,K)}var q={name:"homeTab"};const G=(0,m.Z)(q,[["render",Y]]);var Q=G;const X={class:"container"},tt=(0,o._)("h3",null,"listTasksTab",-1),et=[tt];function nt(t,e,n,a,s,r){return(0,o.wg)(),(0,o.iD)("div",X,et)}var at={name:"listTasksTab"};const ot=(0,m.Z)(at,[["render",nt]]);var st=ot;const rt={class:"container"},it=(0,o._)("h3",null,"graphsTab",-1),ct=[it];function ut(t,e,n,a,s,r){return(0,o.wg)(),(0,o.iD)("div",rt,ct)}var lt={name:"graphsTab"};const pt=(0,m.Z)(lt,[["render",ut]]);var dt=pt,mt={name:"mainView",components:{SideBar:f,mainInfo:T,createTask:$,settingsTab:E,homeTab:Q,listTasksTab:st,graphsTab:dt},data(){return{component:$}},computed:{...(0,p.Se)({rawComponent:"getCurrentComponent"})},watch:{rawComponent(t,e){switch(t){case"plus":this.component=$;break;case"home":this.component=Q;break;case"list":this.component=st;break;case"graph":this.component=dt;break;case"gear":this.component=E;break;default:break}}}};const ht=(0,m.Z)(mt,[["render",r]]);var ft=ht,gt={name:"App",components:{MainView:ft}};const vt=(0,m.Z)(gt,[["render",s]]);var kt=vt,bt=n(669),wt=n.n(bt);const Dt=wt().create({baseURL:"http://localhost/projeto%20organizacao/api/inserir.php"}),Tt=wt().create({baseURL:"http://localhost/projeto%20organizacao/api/botoes.php"});var _t=(0,p.MT)({state(){return{message:null,botoes:null,currentComponent:null}},getters:{getMessage(t){return t.message},getBotoes(t){return t.botoes},getCurrentComponent(t){return t.currentComponent}},mutations:{setMessage(t,e){t.message=e},setBotoes(t,e){t.botoes=e},setCurrentComponent(t,e){t.currentComponent=e}},actions:{async fetchAddTask({commit:t},e){const n=await Dt.post("",e);t("setMessage",n.data.message)},async fetchBotoes({commit:t}){const e=await Tt.get();t("setBotoes",e.data)},async fetchCurrentComponent({commit:t},e){t("setCurrentComponent",e)}}}),Ct=n(982),yt=n.n(Ct);(0,a.ri)(kt).use(_t).use(yt()).mount("#app")}},e={};function n(a){var o=e[a];if(void 0!==o)return o.exports;var s=e[a]={exports:{}};return t[a].call(s.exports,s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,a,o,s){if(!a){var r=1/0;for(l=0;l<t.length;l++){a=t[l][0],o=t[l][1],s=t[l][2];for(var i=!0,c=0;c<a.length;c++)(!1&s||r>=s)&&Object.keys(n.O).every((function(t){return n.O[t](a[c])}))?a.splice(c--,1):(i=!1,s<r&&(r=s));if(i){t.splice(l--,1);var u=o();void 0!==u&&(e=u)}}return e}s=s||0;for(var l=t.length;l>0&&t[l-1][2]>s;l--)t[l]=t[l-1];t[l]=[a,o,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var o,s,r=a[0],i=a[1],c=a[2],u=0;if(r.some((function(e){return 0!==t[e]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(c)var l=c(n)}for(e&&e(a);u<r.length;u++)s=r[u],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(l)},a=self["webpackChunkapp"]=self["webpackChunkapp"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(492)}));a=n.O(a)})();
//# sourceMappingURL=app.0e7210e0.js.map