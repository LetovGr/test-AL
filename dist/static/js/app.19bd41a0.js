(function(t){function e(e){for(var a,i,s=e[0],l=e[1],c=e[2],m=0,p=[];m<s.length;m++)i=s[m],r[i]&&p.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0cab":function(t,e,n){"use strict";var a=n("9a38"),r=n.n(a);r.a},1162:function(t,e,n){"use strict";var a=n("d49c"),r=n.n(a);r.a},"190e":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("SideBar")],1)]),n("router-view")],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar sticky-top navbar-dark bg-dark shadow"},[n("b-dropdown",{staticClass:"m-md-2",attrs:{id:"ddown1",text:"Рога и Копыта"}},t._l(t.links,function(e){return n("router-link",{attrs:{tag:"b-dropdown-item",size:"lg",to:e.path,exact:"","active-class":"active"}},[t._v(t._s(e.title))])}),1),n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control mr-sm-2 col-sm",attrs:{type:"search",placeholder:"Search","aria-label":"Search"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),n("router-view")],1)},s=[],l=(n("386d"),{data:function(){return{links:[{title:"Клиенты",path:"/clients/"},{title:"Компании",path:"/companies/"}]}},computed:{search:{get:function(){return this.$store.state.search},set:function(t){this.$store.commit("searchUpdate",t)}}}}),c=l,u=(n("79c2"),n("2877")),m=Object(u["a"])(c,i,s,!1,null,"61e67ac8",null);m.options.__file="Header.vue";var p=m.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},f=[],v={data:function(){return{}}},h=v,b=(n("0cab"),Object(u["a"])(h,d,f,!1,null,"7db6b866",null));b.options.__file="SideBar.vue";var _=b.exports,g={name:"app",components:{Header:p,SideBar:_}},C=g,w=(n("5c0b"),Object(u["a"])(C,r,o,!1,null,null,null));w.options.__file="App.vue";var y=w.exports,N=n("8c4f"),F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},k=[],x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._m(0),n("h3",[t._v("Installed CLI Plugins")]),t._m(1),n("h3",[t._v("Essential Links")]),t._m(2),n("h3",[t._v("Ecosystem")]),t._m(3)])},j=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n    For a guide and recipes on how to configure / customize this project,"),n("br"),t._v("\n    check out the\n    "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(".\n  ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[t._v("eslint")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],L={name:"HelloWorld",props:{msg:String}},$=L,O=(n("a5e2"),Object(u["a"])($,x,j,!1,null,"536251f0",null));O.options.__file="HelloWorld.vue";var S=O.exports,A={name:"home",components:{HelloWorld:S}},E=A,P=(n("1162"),Object(u["a"])(E,F,k,!1,null,"74756000",null));P.options.__file="Home.vue";var H=P.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"col-md-9 ml-sm-auto col-lg-10 px-4",attrs:{role:"main"}},[n("div",{staticClass:"row"},t._l(t.clientsShow,function(e,a){return n("ClientCard",{key:a,attrs:{client:e}},[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.showAddClientForm}},[t._v("+")]),t.isAddFormShow?n("AddClient",{attrs:{hide:t.hideAddClientForm}}):t._e()],1)}),1)])},W=[],q=(n("3b2b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-sm-3 border-bottom border-warning m-3 wrapper"},[t.staticF?n("div",{staticClass:"name__f"},[t._v(t._s(t.client.firstName)),n("button",{staticClass:"m-1 float-left btn btn-dark btn-sm",attrs:{type:"button"},on:{click:t.toggleFName}},[t._v("✎")])]):t._e(),t.staticF?t._e():n("div",{staticClass:"name__f"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newFirstName,expression:"newFirstName"}],domProps:{value:t.newFirstName},on:{input:function(e){e.target.composing||(t.newFirstName=e.target.value)}}}),n("button",{staticClass:"m-1 float-left btn btn-primary",attrs:{type:"button"},on:{click:t.sendF}},[t._v("Submit")])]),t.staticL?n("div",{staticClass:"name__l"},[t._v(t._s(t.client.lastName)),n("button",{staticClass:"m-1 float-left btn btn-dark btn-sm",attrs:{type:"button"},on:{click:t.toggleLName}},[t._v("✎")])]):t._e(),t.staticL?t._e():n("div",{staticClass:"name__l"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newLastName,expression:"newLastName"}],domProps:{value:t.newLastName},on:{input:function(e){e.target.composing||(t.newLastName=e.target.value)}}}),n("button",{staticClass:"m-1 float-left btn btn-primary",attrs:{type:"button"},on:{click:t.sendL}},[t._v("Submit")])]),n("div",{staticClass:"id"},[t._v("ID "+t._s(t.client.id))]),n("div",{staticClass:"date-create"},[t._v("Дата создания "+t._s(t.client.createdAt))]),t.staticC?n("div",{staticClass:"c-id"},[t._v(t._s(t.client.companyId)),n("button",{staticClass:"m-1 float-left btn btn-dark btn-sm",attrs:{type:"button"},on:{click:t.toggleCName}},[t._v("✎")])]):t._e(),t.staticC?t._e():n("div",{staticClass:"c-id"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newCompanyName,expression:"newCompanyName"}],domProps:{value:t.newCompanyName},on:{input:function(e){e.target.composing||(t.newCompanyName=e.target.value)}}}),n("button",{staticClass:"m-1 float-left btn btn-primary",attrs:{type:"button"},on:{click:t.sendC}},[t._v("Submit")])])])}),B=[],M=n("f499"),T=n.n(M),R={data:function(){return{staticF:!0,staticL:!0,staticC:!0,newFirstName:"",newLastName:"",newCompanyName:""}},props:{client:Object},methods:{toggleFName:function(){this.staticF=!this.staticF,this.newFirstName=this.staticFirstName},toggleLName:function(){this.staticL=!this.staticL,this.newLastName=this.staticLastName},toggleCName:function(){this.staticC=!this.staticC,this.newCompanyName=this.staticCompanyName},sendF:function(){console.log(T()({newFName:this.newFirstName})),this.staticF=!this.staticF},sendL:function(){console.log(T()({newLName:this.newLastName})),this.staticL=!this.staticL},sendC:function(){console.log(T()({newCName:this.newCompanyName})),this.staticC=!this.staticC}},computed:{staticFirstName:function(){return this.client.firstName},staticLastName:function(){return this.client.lastName},staticCompanyName:function(){return this.client.companyId}}},z=R,D=(n("f521"),Object(u["a"])(z,q,B,!1,null,"06c51709",null));D.options.__file="ClientCard.vue";var J=D.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"client-add-form"},[n("b-card-group",{staticClass:"mx-auto col-sm-5",attrs:{deck:""}},[n("b-card",{attrs:{header:"Рога и Копыта","header-tag":"header",title:"Добавление нового клиента","border-variant":"warning"}},[t.show?n("b-form",[n("b-form-group",{attrs:{"label-for":"firstname-input"}},[n("b-form-input",{attrs:{type:"text",required:"",placeholder:"Имя"},model:{value:t.clientForm.firstName,callback:function(e){t.$set(t.clientForm,"firstName",e)},expression:"clientForm.firstName"}})],1),n("b-form-group",{attrs:{"label-for":"lastname-input"}},[n("b-form-input",{attrs:{type:"text",required:"",placeholder:"Фамилия"},model:{value:t.clientForm.lastName,callback:function(e){t.$set(t.clientForm,"lastName",e)},expression:"clientForm.lastName"}})],1),n("b-form-group",{attrs:{"label-for":"id-input"}},[n("b-form-input",{attrs:{type:"number",required:"",placeholder:"Id"},model:{value:t.clientForm.id,callback:function(e){t.$set(t.clientForm,"id",e)},expression:"clientForm.id"}})],1),n("b-form-group",{attrs:{"label-for":"date-input"}},[n("b-form-input",{attrs:{type:"date",required:"",placeholder:"Дата Регистрации"},model:{value:t.clientForm.createdAt,callback:function(e){t.$set(t.clientForm,"createdAt",e)},expression:"clientForm.createdAt"}})],1),n("b-form-group",{attrs:{"label-for":"company-input"}},[n("b-form-input",{attrs:{type:"text",required:"",placeholder:"Компания"},model:{value:t.clientForm.companyName,callback:function(e){t.$set(t.clientForm,"companyName",e)},expression:"clientForm.companyName"}})],1),n("div",{staticClass:"btn-group float-left",attrs:{role:"group","aria-label":"Basic example"}},[n("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{variant:"primary",type:"button",title:"Данные о клиенте будут добавлены в базу(Вывод в console)"},on:{click:t.addClient}},[t._v("Добавить")]),n("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{variant:"warning",type:"button",title:"Очистить все заполненные поля"},on:{click:t.onReset}},[t._v("Стереть поля")]),n("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{variant:"danger",type:"button",title:"Закрыть меню добавления клиента"},on:{click:t.close}},[t._v("Закрыть")])],1)],1):t._e()],1)],1)],1)},G=[],K={data:function(){return{clientForm:{firstName:"",lastName:"",id:"",createdAt:null,companyName:""},show:!0}},props:["hide"],methods:{addClient:function(){this.hide(),console.log(T()({newClients:this.clientForm}))},onReset:function(t){this.clientForm.firstName="",this.clientForm.lastName="",this.clientForm.id="",this.clientForm.createdAt=null,this.clientForm.companyName=""},close:function(){this.hide()}}},Q=K,V=Object(u["a"])(Q,U,G,!1,null,"3f7c8930",null);V.options.__file="AddClient.vue";var X=V.exports,Y=(n("2ef0"),{name:"clients",components:{ClientCard:J,AddClient:X},data:function(){return{clients:[],isAddFormShow:!1}},mounted:function(){var t=this;this.axios.get("/static/clients.json").then(function(e){t.clients=e.data})},methods:{showAddClientForm:function(){this.isAddFormShow=!0},hideAddClientForm:function(){this.isAddFormShow=!1}},computed:{searchWord:function(){return this.$store.state.search},clientsShow:function(){var t=this,e=function(e){return new RegExp(t.searchWord,"gi").test(e)},n=this.clients.filter(function(t){return e(t.firstName)||e(t.lastName)});return n}}}),Z=Y,tt=Object(u["a"])(Z,I,W,!1,null,"44899384",null);tt.options.__file="Workers.vue";var et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"col-md-9 ml-sm-auto col-lg-10 px-4",attrs:{role:"main"}},[n("div",{staticClass:"row"},t._l(t.companies,function(t,e){return n("CompanyCard",{key:e,attrs:{company:t}})}),1)])},at=[],rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-sm-3 border-bottom border-warning m-3 wrapper"},[n("div",{staticClass:"id"},[t._v(t._s(t.company.id))]),n("div",{staticClass:"date-create"},[t._v(t._s(t.company.createdAt))]),n("div",{staticClass:"name"},[t._v(t._s(t.company.name))])])},ot=[],it={data:function(){return{}},props:{company:Object}},st=it,lt=(n("6a04"),Object(u["a"])(st,rt,ot,!1,null,"311668b4",null));lt.options.__file="CompanyCard.vue";var ct=lt.exports,ut={name:"companies",components:{CompanyCard:ct},data:function(){return{companies:!1}},mounted:function(){var t=this;this.axios.get("/static/companies.json").then(function(e){t.companies=e.data}).catch(function(t){console.log(t)})}},mt=ut,pt=Object(u["a"])(mt,nt,at,!1,null,"a6d6618a",null);pt.options.__file="Companies.vue";var dt=pt.exports;a["a"].use(N["a"]);var ft=new N["a"]({routes:[{path:"/",name:"home",component:H},{path:"/clients",name:"clients",component:et},{path:"/companies",name:"companies",component:dt}]}),vt=n("2f62");a["a"].use(vt["a"]);var ht=new vt["a"].Store({state:{search:""},mutations:{searchUpdate:function(t,e){t.search=e}},actions:{}}),bt=n("9f7b"),_t=n("bc3a"),gt=n.n(_t),Ct=n("a7fe"),wt=n.n(Ct);n("f9e3"),n("2dd8");a["a"].use(bt["a"]),a["a"].use(wt.a,gt.a),a["a"].config.productionTip=!1,new a["a"]({router:ft,store:ht,render:function(t){return t(y)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("5e27"),r=n.n(a);r.a},"5e27":function(t,e,n){},"60c8":function(t,e,n){},"6a04":function(t,e,n){"use strict";var a=n("d080"),r=n.n(a);r.a},"79c2":function(t,e,n){"use strict";var a=n("190e"),r=n.n(a);r.a},"9a38":function(t,e,n){},a5e2:function(t,e,n){"use strict";var a=n("fc3d"),r=n.n(a);r.a},d080:function(t,e,n){},d49c:function(t,e,n){},f521:function(t,e,n){"use strict";var a=n("60c8"),r=n.n(a);r.a},fc3d:function(t,e,n){}});
//# sourceMappingURL=app.19bd41a0.js.map