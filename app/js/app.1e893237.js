(function(){"use strict";var t={648:function(t,e,n){var a=n(963),s=n(252);function o(t,e,n,a,o,r){const i=(0,s.up)("MainView");return(0,s.wg)(),(0,s.j4)(i)}function r(t,e,n,a,o,r){const i=(0,s.up)("SideBar"),c=(0,s.up)("mainInfo");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(i),(0,s.Wm)(c),((0,s.wg)(),(0,s.j4)((0,s.LL)(o.component)))])}var i=n(577);const c={class:"sidenav"},u=["id"];function l(t,e,n,a,o,r){return(0,s.wg)(),(0,s.iD)("ul",c,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.botoes,((t,n)=>((0,s.wg)(),(0,s.iD)("li",{key:n},[(0,s._)("button",{onClick:e[0]||(e[0]=(...t)=>r.event&&r.event(...t)),class:"btn",id:t[0],style:(0,i.j5)({"background-image":"url("+t[1]+")"})},null,12,u)])))),128))])}var d=n(907),m={name:"SideBar",data(){return{}},computed:{...(0,d.Se)({botoes:"getBotoes"})},mounted(){this.$store.dispatch("fetchBotoes")},methods:{event(t){this.$store.dispatch("fetchCurrentComponent",t.target.id)}}},p=n(744);const h=(0,p.Z)(m,[["render",l],["__scopeId","data-v-054875f9"]]);var g=h;const v={class:"container"};function f(t,e,n,a,o,r){return(0,s.wg)(),(0,s.iD)("div",v,(0,i.zw)(o.currentDate),1)}var k={name:"mainInfo",data(){return{currentDate:null}},computed:{},methods:{getDate(){var t=(new Date).toJSON().slice(11,19);this.currentDate=t},async changeDate(){const t=t=>new Promise((e=>setTimeout(e,t)));do{this.getDate(),await t(1400)}while(1)}},mounted(){this.changeDate()}};const w=(0,p.Z)(k,[["render",f]]);var b=w;const _={class:"container"},D={class:"card"},T=(0,s._)("div",{class:"title"}," Adicionar nova task ",-1),y=(0,s._)("button",{class:"cardBtn"},"Adicionar",-1);function C(t,e,n,o,r,c){const u=(0,s.up)("autoMessage");return(0,s.wg)(),(0,s.iD)("div",_,[(0,s._)("div",D,[T,(0,s._)("form",{class:"body",onSubmit:e[3]||(e[3]=(0,a.iM)(((...t)=>c.add&&c.add(...t)),["prevent"]))},[(0,s._)("div",null,[(0,s.Uk)("Nome "),(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>r.task.taskName=t),type:"text"},null,512),[[a.nr,r.task.taskName]])]),(0,s._)("div",null,[(0,s.Uk)("Descrição "),(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>r.task.taskDesc=t),type:"text"},null,512),[[a.nr,r.task.taskDesc]])]),(0,s._)("div",null,[(0,s.Uk)(" Nível "),(0,s.wy)((0,s._)("select",{"onUpdate:modelValue":e[2]||(e[2]=t=>r.task.taskLevel=t)},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.niveis,((t,e)=>((0,s.wg)(),(0,s.iD)("option",{key:e},(0,i.zw)(t["descricao_nivel"]),1)))),128))],512),[[a.bM,r.task.taskLevel]])]),y],32)]),(0,s.Wm)(u)])}var L={name:"autoMessage",computed:{...(0,d.Se)({message:"getMessage"})},watch:{message(t,e){""!=this.message&&(console.log("message",this.message),this.$swal.fire({text:this.message,toast:!0,position:"top-end",timer:3e3,showConfirmButton:!1}),setTimeout((()=>{this.$store.commit("setMessage","")}),3e3))}}};const M=L;var N=M,j={name:"createTaskTab",components:{autoMessage:N},data(){return{task:{taskName:null,taskDesc:null,taskLevel:null}}},computed:{...(0,d.Se)({taskData:"getTask",niveis:"getNiveis"})},mounted(){this.$store.dispatch("fetchNiveis")},methods:{add(){console.log("this.task",this.task),this.$store.dispatch("fetchAddTask",this.task)}},watch:{taskData(){console.log("taskData: ",this.taskData)}}};const O=(0,p.Z)(j,[["render",C]]);var B=O;const S={class:"container"},U=(0,s._)("h3",null,"settingsTabComponent",-1),z=[U];function Z(t,e,n,a,o,r){return(0,s.wg)(),(0,s.iD)("div",S,z)}var x={name:"settingsTab"};const $=(0,p.Z)(x,[["render",Z]]);var V=$;const A={class:"container"},I=(0,s._)("h3",null,"homeTabComponent",-1),R=[I];function H(t,e,n,a,o,r){return(0,s.wg)(),(0,s.iD)("div",A,R)}var K={name:"homeTab"};const P=(0,p.Z)(K,[["render",H]]);var W=P;const Y={class:"container"},E=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,"Nome"),(0,s._)("th",null,"Descrição"),(0,s._)("th",null,"Nível")])],-1);function F(t,e,n,a,o,r){return(0,s.wg)(),(0,s.iD)("div",Y,[(0,s._)("table",null,[E,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.taskList,(e=>((0,s.wg)(),(0,s.iD)("tr",{key:t.key},[(0,s._)("td",null,(0,i.zw)(e["nome"]),1),(0,s._)("td",null,(0,i.zw)(e["descricao"]),1),(0,s._)("td",null,(0,i.zw)(e["descricao_nivel"]),1)])))),128))])])])}var J={name:"listTasksTab",computed:{...(0,d.Se)({taskList:"getTaskList"})},mounted(){this.$store.dispatch("fetchTaskList")}};const q=(0,p.Z)(J,[["render",F]]);var G=q;const Q={class:"container"},X=(0,s._)("h3",null,"graphsTab",-1),tt=[X];function et(t,e,n,a,o,r){return(0,s.wg)(),(0,s.iD)("div",Q,tt)}var nt={name:"graphsTab"};const at=(0,p.Z)(nt,[["render",et]]);var st=at,ot={name:"mainView",components:{SideBar:g,mainInfo:b,createTask:B,settingsTab:V,homeTab:W,listTasksTab:G,graphsTab:st},data(){return{component:B}},computed:{...(0,d.Se)({rawComponent:"getCurrentComponent"})},watch:{rawComponent(t,e){switch(t){case"plus":this.component=B;break;case"home":this.component=W;break;case"list":this.component=G;break;case"graph":this.component=st;break;case"gear":this.component=V;break;default:break}}}};const rt=(0,p.Z)(ot,[["render",r]]);var it=rt,ct={name:"App",components:{MainView:it}};const ut=(0,p.Z)(ct,[["render",o]]);var lt=ut,dt=n(669),mt=n.n(dt);const pt=mt().create({baseURL:"http://localhost/projeto%20organizacao/api/inserir.php"}),ht=mt().create({baseURL:"http://localhost/projeto%20organizacao/api/botoes.php"}),gt=mt().create({baseURL:"http://localhost/projeto%20organizacao/api/listar.php"}),vt=mt().create({baseURL:"http://localhost/projeto%20organizacao/api/niveis_de_relevancia.php"});var ft=(0,d.MT)({state(){return{message:null,botoes:null,currentComponent:null,taskList:null,niveis:{1:"sus",3:"amogus"}}},getters:{getMessage(t){return t.message},getBotoes(t){return t.botoes},getCurrentComponent(t){return t.currentComponent},getTaskList(t){return t.taskList},getNiveis(t){return t.niveis}},mutations:{setMessage(t,e){t.message=e},setBotoes(t,e){t.botoes=e},setCurrentComponent(t,e){t.currentComponent=e},setTaskList(t,e){t.taskList=e},setNiveis(t,e){t.niveis=e}},actions:{async fetchAddTask({commit:t},e){e.taskLevel.forEach((t=>{console.log(t)}));const n=await pt.post("",e);console.log("response.data.message ",n.data.message),t("setMessage",n.data.message)},async fetchBotoes({commit:t}){const e=await ht.get();t("setBotoes",e.data)},async fetchCurrentComponent({commit:t},e){t("setCurrentComponent",e)},async fetchTaskList({commit:t}){const e=await gt.get();console.log("list: ",e.data),t("setTaskList",e.data)},async fetchNiveis({commit:t}){const e=await vt.get();console.log("niveis: ",e.data),t("setNiveis",e.data)}}}),kt=n(982),wt=n.n(kt);(0,a.ri)(lt).use(ft).use(wt()).mount("#app")}},e={};function n(a){var s=e[a];if(void 0!==s)return s.exports;var o=e[a]={exports:{}};return t[a].call(o.exports,o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,a,s,o){if(!a){var r=1/0;for(l=0;l<t.length;l++){a=t[l][0],s=t[l][1],o=t[l][2];for(var i=!0,c=0;c<a.length;c++)(!1&o||r>=o)&&Object.keys(n.O).every((function(t){return n.O[t](a[c])}))?a.splice(c--,1):(i=!1,o<r&&(r=o));if(i){t.splice(l--,1);var u=s();void 0!==u&&(e=u)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[a,s,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var s,o,r=a[0],i=a[1],c=a[2],u=0;if(r.some((function(e){return 0!==t[e]}))){for(s in i)n.o(i,s)&&(n.m[s]=i[s]);if(c)var l=c(n)}for(e&&e(a);u<r.length;u++)o=r[u],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(l)},a=self["webpackChunkapp"]=self["webpackChunkapp"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(648)}));a=n.O(a)})();
//# sourceMappingURL=app.1e893237.js.map