(function(){"use strict";var t={253:function(t,e,n){var s=n(963),a=n(252);function o(t,e,n,s,o,r){const i=(0,a.up)("MainView");return(0,a.wg)(),(0,a.j4)(i)}function r(t,e,n,s,o,r){const i=(0,a.up)("SideBar"),c=(0,a.up)("mainInfo");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(i),(0,a.Wm)(c),((0,a.wg)(),(0,a.j4)((0,a.LL)(o.component)))])}var i=n(577);const c={class:"sidenav"},u=["id"];function l(t,e,n,s,o,r){return(0,a.wg)(),(0,a.iD)("ul",c,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.botoes,((t,n)=>((0,a.wg)(),(0,a.iD)("li",{key:n},[(0,a._)("button",{onClick:e[0]||(e[0]=(...t)=>r.event&&r.event(...t)),class:"btn",id:t[0],style:(0,i.j5)({"background-image":"url("+t[1]+")"})},null,12,u)])))),128))])}var m=n(907),d={name:"SideBar",data(){return{}},computed:{...(0,m.Se)({botoes:"getBotoes"})},mounted(){this.$store.dispatch("fetchBotoes")},methods:{event(t){this.$store.dispatch("fetchCurrentComponent",t.target.id)}}},p=n(744);const h=(0,p.Z)(d,[["render",l],["__scopeId","data-v-054875f9"]]);var g=h;const v={class:"container"};function f(t,e,n,s,o,r){return(0,a.wg)(),(0,a.iD)("div",v,(0,i.zw)(o.currentDate),1)}var k={name:"mainInfo",data(){return{currentDate:null}},computed:{},methods:{getDate(){var t=(new Date).toJSON().slice(11,19);this.currentDate=t},async changeDate(){const t=t=>new Promise((e=>setTimeout(e,t)));do{this.getDate(),await t(1400)}while(1)}},mounted(){this.changeDate()}};const w=(0,p.Z)(k,[["render",f]]);var b=w;const D={class:"container"},T={class:"card"},_=(0,a._)("div",{class:"title"}," Adicionar nova task ",-1),y=(0,a._)("button",{class:"cardBtn"},"Adicionar",-1);function C(t,e,n,o,r,c){const u=(0,a.up)("autoMessage");return(0,a.wg)(),(0,a.iD)("div",D,[(0,a._)("div",T,[_,(0,a._)("form",{class:"body",onSubmit:e[3]||(e[3]=(0,s.iM)(((...t)=>c.add&&c.add(...t)),["prevent"]))},[(0,a._)("div",null,[(0,a.Uk)("Nome "),(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>r.task.taskName=t),type:"text"},null,512),[[s.nr,r.task.taskName]])]),(0,a._)("div",null,[(0,a.Uk)("Descrição "),(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>r.task.taskDesc=t),type:"text"},null,512),[[s.nr,r.task.taskDesc]])]),(0,a._)("div",null,[(0,a.Uk)(" Nível "),(0,a.wy)((0,a._)("select",{"onUpdate:modelValue":e[2]||(e[2]=t=>r.task.taskLevel=t)},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.niveis,((t,e)=>((0,a.wg)(),(0,a.iD)("option",{key:e},(0,i.zw)(t),1)))),128))],512),[[s.bM,r.task.taskLevel]])]),y],32)]),(0,a.Wm)(u)])}var L={name:"autoMessage",computed:{...(0,m.Se)({message:"getMessage"})},watch:{message(t,e){""!=this.message&&(console.log("message",this.message),this.$swal.fire({text:this.message,toast:!0,position:"top-end",timer:3e3,showConfirmButton:!1}),setTimeout((()=>{this.$store.commit("setMessage","")}),3e3))}}};const M=L;var j=M,O={name:"createTaskTab",components:{autoMessage:j},data(){return{task:{taskName:null,taskDesc:null,taskLevel:null}}},computed:{...(0,m.Se)({taskData:"getTask",niveis:"getNiveis"})},methods:{add(){console.log("this.task",this.task),this.$store.dispatch("fetchAddTask",this.task)}},watch:{taskData(){console.log("taskData: ",this.taskData)}}};const B=(0,p.Z)(O,[["render",C]]);var N=B;const S={class:"container"},U=(0,a._)("h3",null,"settingsTabComponent",-1),Z=[U];function x(t,e,n,s,o,r){return(0,a.wg)(),(0,a.iD)("div",S,Z)}var z={name:"settingsTab"};const V=(0,p.Z)(z,[["render",x]]);var $=V;const A={class:"container"},I=(0,a._)("h3",null,"homeTabComponent",-1),H=[I];function K(t,e,n,s,o,r){return(0,a.wg)(),(0,a.iD)("div",A,H)}var P={name:"homeTab"};const R=(0,p.Z)(P,[["render",K]]);var W=R;const Y={class:"container"},E=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,"Nome"),(0,a._)("th",null,"Descrição"),(0,a._)("th",null,"Nível")])],-1);function F(t,e,n,s,o,r){return(0,a.wg)(),(0,a.iD)("div",Y,[(0,a._)("table",null,[E,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.taskList,(e=>((0,a.wg)(),(0,a.iD)("tr",{key:t.key},[(0,a._)("td",null,(0,i.zw)(e["nome"]),1),(0,a._)("td",null,(0,i.zw)(e["descricao"]),1),(0,a._)("td",null,(0,i.zw)(e["descricao_nivel"]),1)])))),128))])])])}var J={name:"listTasksTab",computed:{...(0,m.Se)({taskList:"getTaskList"})},mounted(){this.$store.dispatch("fetchTaskList")}};const q=(0,p.Z)(J,[["render",F]]);var G=q;const Q={class:"container"},X=(0,a._)("h3",null,"graphsTab",-1),tt=[X];function et(t,e,n,s,o,r){return(0,a.wg)(),(0,a.iD)("div",Q,tt)}var nt={name:"graphsTab"};const st=(0,p.Z)(nt,[["render",et]]);var at=st,ot={name:"mainView",components:{SideBar:g,mainInfo:b,createTask:N,settingsTab:$,homeTab:W,listTasksTab:G,graphsTab:at},data(){return{component:N}},computed:{...(0,m.Se)({rawComponent:"getCurrentComponent"})},watch:{rawComponent(t,e){switch(t){case"plus":this.component=N;break;case"home":this.component=W;break;case"list":this.component=G;break;case"graph":this.component=at;break;case"gear":this.component=$;break;default:break}}}};const rt=(0,p.Z)(ot,[["render",r]]);var it=rt,ct={name:"App",components:{MainView:it}};const ut=(0,p.Z)(ct,[["render",o]]);var lt=ut,mt=n(669),dt=n.n(mt);const pt=dt().create({baseURL:"http://localhost/projeto%20organizacao/api/inserir.php"}),ht=dt().create({baseURL:"http://localhost/projeto%20organizacao/api/botoes.php"}),gt=dt().create({baseURL:"http://localhost/projeto%20organizacao/api/listar.php"});var vt=(0,m.MT)({state(){return{message:null,botoes:null,currentComponent:null,taskList:null,niveis:{1:"sus",3:"amogus"}}},getters:{getMessage(t){return t.message},getBotoes(t){return t.botoes},getCurrentComponent(t){return t.currentComponent},getTaskList(t){return t.taskList},getNiveis(t){return t.niveis}},mutations:{setMessage(t,e){t.message=e},setBotoes(t,e){t.botoes=e},setCurrentComponent(t,e){t.currentComponent=e},setTaskList(t,e){t.taskList=e},setNiveis(t,e){t.niveis=e}},actions:{async fetchAddTask({commit:t},e){const n=await pt.post("",e);console.log("response.data.message ",n.data.message),t("setMessage",n.data.message)},async fetchBotoes({commit:t}){const e=await ht.get();t("setBotoes",e.data)},async fetchCurrentComponent({commit:t},e){t("setCurrentComponent",e)},async fetchTaskList({commit:t}){const e=await gt.get();console.log("list: ",e.data),t("setTaskList",e.data)}}}),ft=n(982),kt=n.n(ft);(0,s.ri)(lt).use(vt).use(kt()).mount("#app")}},e={};function n(s){var a=e[s];if(void 0!==a)return a.exports;var o=e[s]={exports:{}};return t[s].call(o.exports,o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,s,a,o){if(!s){var r=1/0;for(l=0;l<t.length;l++){s=t[l][0],a=t[l][1],o=t[l][2];for(var i=!0,c=0;c<s.length;c++)(!1&o||r>=o)&&Object.keys(n.O).every((function(t){return n.O[t](s[c])}))?s.splice(c--,1):(i=!1,o<r&&(r=o));if(i){t.splice(l--,1);var u=a();void 0!==u&&(e=u)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[s,a,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,s){var a,o,r=s[0],i=s[1],c=s[2],u=0;if(r.some((function(e){return 0!==t[e]}))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(c)var l=c(n)}for(e&&e(s);u<r.length;u++)o=r[u],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(l)},s=self["webpackChunkapp"]=self["webpackChunkapp"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(253)}));s=n.O(s)})();
//# sourceMappingURL=app.637a194b.js.map