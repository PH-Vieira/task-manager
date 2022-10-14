(function(){"use strict";var e={406:function(e,t,n){var a=n(963),o=n(252);function s(e,t,n,a,s,r){const i=(0,o.up)("MainView");return(0,o.wg)(),(0,o.j4)(i)}function r(e,t,n,a,s,r){const i=(0,o.up)("SideBar"),c=(0,o.up)("mainInfo");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(i),(0,o.Wm)(c),((0,o.wg)(),(0,o.j4)((0,o.LL)(s.component)))])}var i=n(577);const c={class:"sidenav"},u=["id"];function l(e,t,n,a,s,r){return(0,o.wg)(),(0,o.iD)("ul",c,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.botoes,((e,n)=>((0,o.wg)(),(0,o.iD)("li",{key:n},[(0,o._)("button",{onClick:t[0]||(t[0]=(...e)=>r.event&&r.event(...e)),class:"btn",id:e[0],style:(0,i.j5)({"background-image":"url("+e[1]+")"})},null,12,u)])))),128))])}var m=n(907),p={name:"SideBar",data(){return{}},computed:{...(0,m.Se)({botoes:"getBotoes"})},mounted(){this.$store.dispatch("fetchBotoes")},methods:{event(e){this.$store.dispatch("fetchCurrentComponent",e.target.id)}}},d=n(744);const h=(0,d.Z)(p,[["render",l],["__scopeId","data-v-054875f9"]]);var g=h;const f={class:"container"},v=(0,o._)("p",null,"placeHolder",-1),k=(0,o._)("p",null,"placeHolder",-1);function b(e,t,n,a,s,r){return(0,o.wg)(),(0,o.iD)("div",f,[v,(0,o.Uk)(" "+(0,i.zw)(s.currentDate)+" ",1),k])}var w={name:"mainInfo",data(){return{currentDate:null}},computed:{},methods:{getDate(){var e=(new Date).toJSON().slice(11,19);this.currentDate=e},async changeDate(){const e=e=>new Promise((t=>setTimeout(t,e)));do{this.getDate(),await e(1400)}while(1)}},mounted(){this.changeDate()}};const D=(0,d.Z)(w,[["render",b]]);var T=D;const _={class:"container"},C={class:"card"},y=(0,o._)("div",{class:"title"}," Adicionar nova task ",-1),M=(0,o._)("option",{disabled:"",value:"Selecione algum"},"Selecione algum",-1),O=(0,o._)("option",null,"1",-1),j=(0,o._)("option",null,"2",-1),B=(0,o._)("option",null,"3",-1),S=[M,O,j,B],U=(0,o._)("button",{class:"cardBtn"},"Adicionar",-1);function Z(e,t,n,s,r,i){const c=(0,o.up)("autoMessage");return(0,o.wg)(),(0,o.iD)("div",_,[(0,o._)("div",C,[y,(0,o._)("form",{class:"body",onSubmit:t[3]||(t[3]=(0,a.iM)(((...e)=>i.add&&i.add(...e)),["prevent"]))},[(0,o._)("div",null,[(0,o.Uk)("Nome "),(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>r.task.taskName=e),type:"text"},null,512),[[a.nr,r.task.taskName]])]),(0,o._)("div",null,[(0,o.Uk)("Descrição "),(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>r.task.taskDesc=e),type:"text"},null,512),[[a.nr,r.task.taskDesc]])]),(0,o._)("div",null,[(0,o.Uk)(" Nível "),(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":t[2]||(t[2]=e=>r.task.taskLevel=e)},S,512),[[a.bM,r.task.taskLevel]])]),U],32)]),(0,o.Wm)(c)])}var x={name:"autoMessage",computed:{...(0,m.Se)({message:"getMessage"})},watch:{message(){""!=this.message&&(console.log("message"),this.$swal.fire({text:this.message,toast:!0,position:"top-end",timer:3e3,showConfirmButton:!1}),setTimeout((()=>{this.$store.commit("setMessage","")}),3e3))}}};const L=x;var N=L,V={name:"createTaskTab",components:{autoMessage:N},data(){return{task:{taskName:null,taskDesc:null,taskLevel:null}}},computed:{...(0,m.Se)({taskData:"getTask"})},methods:{add(){console.log("this.task",this.task),this.$store.dispatch("fetchAddTask",this.task)}},watch:{taskData(){console.log("taskData: ",this.taskData)}}};const A=(0,d.Z)(V,[["render",Z]]);var $=A;const I={class:"container"},z=(0,o._)("h3",null,"settingsTabComponent",-1),H=[z];function P(e,t,n,a,s,r){return(0,o.wg)(),(0,o.iD)("div",I,H)}var W={name:"settingsTab"};const R=(0,d.Z)(W,[["render",P]]);var E=R;const F={class:"container"},J=(0,o._)("h3",null,"homeTabComponent",-1),K=[J];function Y(e,t,n,a,s,r){return(0,o.wg)(),(0,o.iD)("div",F,K)}var q={name:"homeTab"};const G=(0,d.Z)(q,[["render",Y]]);var Q=G;const X={class:"container"},ee=(0,o._)("h3",null,"listTasksTab",-1),te=[ee];function ne(e,t,n,a,s,r){return(0,o.wg)(),(0,o.iD)("div",X,te)}var ae={name:"listTasksTab"};const oe=(0,d.Z)(ae,[["render",ne]]);var se=oe;const re={class:"container"},ie=(0,o._)("h3",null,"graphsTab",-1),ce=[ie];function ue(e,t,n,a,s,r){return(0,o.wg)(),(0,o.iD)("div",re,ce)}var le={name:"graphsTab"};const me=(0,d.Z)(le,[["render",ue]]);var pe=me,de={name:"mainView",components:{SideBar:g,mainInfo:T,createTask:$,settingsTab:E,homeTab:Q,listTasksTab:se,graphsTab:pe},data(){return{component:$}},computed:{...(0,m.Se)({rawComponent:"getCurrentComponent"})},watch:{rawComponent(e,t){switch(e){case"plus":this.component=$;break;case"home":this.component=Q;break;case"list":this.component=se;break;case"graph":this.component=pe;break;case"gear":this.component=E;break;default:break}}}};const he=(0,d.Z)(de,[["render",r]]);var ge=he,fe={name:"App",components:{MainView:ge}};const ve=(0,d.Z)(fe,[["render",s]]);var ke=ve,be=n(669),we=n.n(be);const De=we().create({baseURL:"http://localhost/projeto%20organizacao/api/inserir.php"}),Te=we().create({baseURL:"http://localhost/projeto%20organizacao/api/botoes.php"});var _e=(0,m.MT)({state(){return{message:null,botoes:null,currentComponent:null}},getters:{getMessage(e){return e.message},getBotoes(e){return e.botoes},getCurrentComponent(e){return e.currentComponent}},mutations:{setMessage(e,t){e.message=t},setBotoes(e,t){e.botoes=t},setCurrentComponent(e,t){e.currentComponent=t}},actions:{async fetchAddTask({commit:e},t){const n=await De.post("",t);console.log("response.data.message ",n.data.message),e("setMessage",n.data.message)},async fetchBotoes({commit:e}){const t=await Te.get();e("setBotoes",t.data)},async fetchCurrentComponent({commit:e},t){e("setCurrentComponent",t)}}}),Ce=n(982),ye=n.n(Ce);(0,a.ri)(ke).use(_e).use(ye()).mount("#app")}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var s=t[a]={exports:{}};return e[a].call(s.exports,s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,s){if(!a){var r=1/0;for(l=0;l<e.length;l++){a=e[l][0],o=e[l][1],s=e[l][2];for(var i=!0,c=0;c<a.length;c++)(!1&s||r>=s)&&Object.keys(n.O).every((function(e){return n.O[e](a[c])}))?a.splice(c--,1):(i=!1,s<r&&(r=s));if(i){e.splice(l--,1);var u=o();void 0!==u&&(t=u)}}return t}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[a,o,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,s,r=a[0],i=a[1],c=a[2],u=0;if(r.some((function(t){return 0!==e[t]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(c)var l=c(n)}for(t&&t(a);u<r.length;u++)s=r[u],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(l)},a=self["webpackChunkapp"]=self["webpackChunkapp"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(406)}));a=n.O(a)})();
//# sourceMappingURL=app.57a296e1.js.map