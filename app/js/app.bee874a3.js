(function(){"use strict";var t={886:function(t,e,n){var a=n(963),s=n(252);function o(t,e,n,a,o,i){const r=(0,s.up)("MainView");return(0,s.wg)(),(0,s.j4)(r)}function i(t,e,n,a,o,i){const r=(0,s.up)("SideBar"),c=(0,s.up)("mainInfo");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(r),(0,s.Wm)(c),((0,s.wg)(),(0,s.j4)((0,s.LL)(o.component)))])}var r=n(577);const c={class:"sidenav"},l=["id"];function u(t,e,n,a,o,i){return(0,s.wg)(),(0,s.iD)("ul",c,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.botoes,((t,n)=>((0,s.wg)(),(0,s.iD)("li",{key:n},[(0,s._)("button",{onClick:e[0]||(e[0]=(...t)=>i.event&&i.event(...t)),class:"btn",id:t[0],style:(0,r.j5)({"background-image":"url("+t[1]+")"})},null,12,l)])))),128))])}var d=n(907),p={name:"SideBar",data(){return{}},computed:{...(0,d.Se)({botoes:"getBotoes"})},mounted(){this.$store.dispatch("fetchBotoes")},methods:{event(t){this.$store.dispatch("fetchCurrentComponent",t.target.id)}}},m=n(744);const h=(0,m.Z)(p,[["render",u],["__scopeId","data-v-054875f9"]]);var g=h;const v={class:"container"};function f(t,e,n,a,o,i){return(0,s.wg)(),(0,s.iD)("div",v,(0,r.zw)(o.currentDate),1)}var k={name:"mainInfo",data(){return{currentDate:null}},computed:{},methods:{getDate(){var t=(new Date).toJSON().slice(11,19);this.currentDate=t},async changeDate(){const t=t=>new Promise((e=>setTimeout(e,t)));do{this.getDate(),await t(1400)}while(1)}},mounted(){this.changeDate()}};const b=(0,m.Z)(k,[["render",f]]);var w=b;const _={class:"container"},T={class:"card"},D=(0,s._)("div",{class:"title"}," Adicionar nova task ",-1),y=["value"],C=(0,s._)("button",{class:"cardBtn"},"Adicionar",-1);function L(t,e,n,o,i,c){const l=(0,s.up)("autoMessage");return(0,s.wg)(),(0,s.iD)("div",_,[(0,s._)("div",T,[D,(0,s._)("form",{class:"body",onSubmit:e[3]||(e[3]=(0,a.iM)(((...t)=>c.add&&c.add(...t)),["prevent"]))},[(0,s._)("div",null,[(0,s.Uk)("Nome "),(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>i.task.taskName=t),type:"text"},null,512),[[a.nr,i.task.taskName]])]),(0,s._)("div",null,[(0,s.Uk)("Descrição "),(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>i.task.taskDesc=t),type:"text"},null,512),[[a.nr,i.task.taskDesc]])]),(0,s._)("div",null,[(0,s.Uk)(" Nível "),(0,s.wy)((0,s._)("select",{"onUpdate:modelValue":e[2]||(e[2]=t=>i.task.taskLevel=t)},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.niveis,((t,e)=>((0,s.wg)(),(0,s.iD)("option",{value:e,key:e},(0,r.zw)(t["descricao_nivel"]),9,y)))),128))],512),[[a.bM,i.task.taskLevel]])]),C],32)]),(0,s.Wm)(l)])}var j={name:"autoMessage",computed:{...(0,d.Se)({message:"getMessage"})},watch:{message(t,e){""!=this.message&&(console.log("message",this.message),this.$swal.fire({text:this.message,toast:!0,position:"top-end",timer:3e3,showConfirmButton:!1}),setTimeout((()=>{this.$store.commit("setMessage","")}),3e3))}}};const M=j;var N=M,O={name:"createTaskTab",components:{autoMessage:N},data(){return{task:{taskName:null,taskDesc:null,taskLevel:null}}},computed:{...(0,d.Se)({taskData:"getTask",niveis:"getNiveis"})},mounted(){this.$store.dispatch("fetchNiveis")},methods:{add(){console.log("this.task",this.task),this.$store.dispatch("fetchAddTask",this.task)}},watch:{taskData(){console.log("taskData: ",this.taskData)}}};const x=(0,m.Z)(O,[["render",L]]);var B=x;const U={class:"container"},z=(0,s._)("h3",null,"settingsTabComponent",-1),S=[z];function Z(t,e,n,a,o,i){return(0,s.wg)(),(0,s.iD)("div",U,S)}var $={name:"settingsTab"};const V=(0,m.Z)($,[["render",Z]]);var A=V;const R={class:"container"},I=(0,s._)("h3",null,"homeTabComponent",-1),E=[I];function H(t,e,n,a,o,i){return(0,s.wg)(),(0,s.iD)("div",R,E)}var K={name:"homeTab"};const P=(0,m.Z)(K,[["render",H]]);var W=P,Y=n.p+"img/pencil-square.c7603a56.svg",q=n.p+"img/x-circle.4daa6bc7.svg";const F={class:"container"},J=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,"Nome"),(0,s._)("th",null,"Descrição"),(0,s._)("th",null,"Nível"),(0,s._)("th",null,"Opções")])],-1),G=(0,s._)("button",null,[(0,s._)("img",{src:Y,alt:""})],-1),Q=["onClick"],X=(0,s._)("img",{src:q,alt:""},null,-1),tt=[X];function et(t,e,n,a,o,i){return(0,s.wg)(),(0,s.iD)("div",F,[(0,s._)("table",null,[J,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.taskList,(e=>((0,s.wg)(),(0,s.iD)("tr",{key:t.key},[(0,s._)("td",null,(0,r.zw)(e["nome"]),1),(0,s._)("td",null,(0,r.zw)(e["descricao"]),1),(0,s._)("td",null,(0,r.zw)(e["descricao_nivel"]),1),(0,s._)("td",null,[G,(0,s._)("button",{onClick:t=>i.aaa(e["nome"])},tt,8,Q)])])))),128))])])])}var nt={name:"listTasksTab",computed:{...(0,d.Se)({taskList:"getTaskList"})},mounted(){this.$store.dispatch("fetchTaskList")},methods:{aaa(t){console.log("sending: ",t),this.$store.dispatch("fetchExcluirTask",t)}}};const at=(0,m.Z)(nt,[["render",et]]);var st=at;const ot={class:"container"},it=(0,s._)("h3",null,"graphsTab",-1),rt=[it];function ct(t,e,n,a,o,i){return(0,s.wg)(),(0,s.iD)("div",ot,rt)}var lt={name:"graphsTab"};const ut=(0,m.Z)(lt,[["render",ct]]);var dt=ut,pt={name:"mainView",components:{SideBar:g,mainInfo:w,createTask:B,settingsTab:A,homeTab:W,listTasksTab:st,graphsTab:dt},data(){return{component:B}},computed:{...(0,d.Se)({rawComponent:"getCurrentComponent"})},watch:{rawComponent(t,e){switch(t){case"plus":this.component=B;break;case"home":this.component=W;break;case"list":this.component=st;break;case"graph":this.component=dt;break;case"gear":this.component=A;break;default:break}}}};const mt=(0,m.Z)(pt,[["render",i]]);var ht=mt,gt={name:"App",components:{MainView:ht}};const vt=(0,m.Z)(gt,[["render",o]]);var ft=vt,kt=n(669),bt=n.n(kt);const wt=bt().create({baseURL:"http://localhost/projeto%20organizacao/api/inserir.php"}),_t=bt().create({baseURL:"http://localhost/projeto%20organizacao/api/botoes.php"}),Tt=bt().create({baseURL:"http://localhost/projeto%20organizacao/api/listar.php"}),Dt=bt().create({baseURL:"http://localhost/projeto%20organizacao/api/niveis_de_relevancia.php"}),yt=bt().create({baseURL:"http://localhost/projeto%20organizacao/api/excluir.php"});var Ct=(0,d.MT)({state(){return{message:null,botoes:null,currentComponent:null,taskList:null,niveis:null}},getters:{getMessage(t){return t.message},getBotoes(t){return t.botoes},getCurrentComponent(t){return t.currentComponent},getTaskList(t){return t.taskList},getNiveis(t){return t.niveis}},mutations:{setMessage(t,e){t.message=e},setBotoes(t,e){t.botoes=e},setCurrentComponent(t,e){t.currentComponent=e},setTaskList(t,e){t.taskList=e},setNiveis(t,e){t.niveis=e}},actions:{async fetchAddTask({commit:t},e){const n=await wt.post("",e);console.log("response.data.message ",n.data.message),t("setMessage",n.data.message)},async fetchBotoes({commit:t}){const e=await _t.get();t("setBotoes",e.data)},async fetchCurrentComponent({commit:t},e){t("setCurrentComponent",e)},async fetchTaskList({commit:t}){const e=await Tt.get();console.log("list: ",e.data),t("setTaskList",e.data)},async fetchNiveis({commit:t}){const e=await Dt.get();console.log("niveis: ",e.data),t("setNiveis",e.data)},async fetchExcluirTask(t){console.log("payload received: ",t);const e=await yt.post("","teste");console.log("getting: ",e.data)}}}),Lt=n(982),jt=n.n(Lt);(0,a.ri)(ft).use(Ct).use(jt()).mount("#app")}},e={};function n(a){var s=e[a];if(void 0!==s)return s.exports;var o=e[a]={exports:{}};return t[a].call(o.exports,o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,a,s,o){if(!a){var i=1/0;for(u=0;u<t.length;u++){a=t[u][0],s=t[u][1],o=t[u][2];for(var r=!0,c=0;c<a.length;c++)(!1&o||i>=o)&&Object.keys(n.O).every((function(t){return n.O[t](a[c])}))?a.splice(c--,1):(r=!1,o<i&&(i=o));if(r){t.splice(u--,1);var l=s();void 0!==l&&(e=l)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[a,s,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p=""}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var s,o,i=a[0],r=a[1],c=a[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(s in r)n.o(r,s)&&(n.m[s]=r[s]);if(c)var u=c(n)}for(e&&e(a);l<i.length;l++)o=i[l],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(u)},a=self["webpackChunkapp"]=self["webpackChunkapp"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(886)}));a=n.O(a)})();
//# sourceMappingURL=app.bee874a3.js.map