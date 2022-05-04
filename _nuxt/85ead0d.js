(window.webpackJsonp=window.webpackJsonp||[]).push([[8,3,4],{276:function(e,t,n){"use strict";n.r(t);var o={name:"inputText",props:["text"]},r=n(46),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("button",{staticClass:"\n    w-full\n    px-4 py-2\n    bg-bhumi-600\n    hover:bg-bhumi-700\n    rounded-md shadow-lg\n    text-sm\n    font-bold\n    text-white\n    transition\n    duration-200\n    mt-2\n  ",attrs:{value:e.text}},[e._v("      \n  "+e._s(e.text)+"\n ")])}),[],!1,null,null,null);t.default=component.exports},279:function(e,t,n){"use strict";n.r(t);var o={name:"inputText",props:["type","placeholder"]},r=n(46),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{staticClass:"w-full px-4 py-2 text-sm bg-bhumi-50 focus:outline-none border border-bhumi-200 rounded text-bhumi-600 mt-2",attrs:{type:e.type,placeholder:e.placeholder}})}),[],!1,null,null,null);t.default=component.exports},281:function(e,t,n){"use strict";n.r(t);var o=n(279),r=n(276),l=n(78),c=n.n(l),d={name:"LoginPage",data:function(){return{username:"admin",password:"pass",modalShow:!1,resetGood:!1}},methods:{cons:function(){console.log("putting data to console."),console.log(username,password)},check_creds:function(){console.log("checking creds..."),c.a.post(void 0+"accounts/login",{username:this.username,password:this.password}).then((function(e){console.log("success"+e.data),"success"==e.data.msg?window.location.href="/dashboard":alert("Incorrect username or password.")}))},resetPass:function(){this.modalShow=!0,this.username="",this.password=""},signIn:function(){this.modalShow=!1,this.username="",this.password="",c.a.post(void 0+"accounts/reset",{username:this.username}).then((function(e){console.log("success"+e.data)}))},shoot_mail:function(){console.log("reset button clicked",this.username),c.a.post(void 0+"accounts/reset",{username:this.username}).then((function(e){console.log("success"+e.data)})),this.resetGood=!0}},components:{InputText:o.default,PrimaryBtn:r.default}},m=n(46),component=Object(m.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"flex justify-center items-center h-screen bg-bhumi-200 dark:bg-black"},[n("div",{staticClass:"max-w-md w-full bg-white rounded p-6 space-y-4 dark:bg-gray-800"},[n("div",{staticClass:"mb-4"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.modalShow,expression:"modalShow"}],staticClass:"flex justify-between"},[n("div",{staticClass:"text-xl font-bold dark:text-gray-50"},[e._v("Password Reset")]),e._v(" "),n("div",{on:{click:e.signIn}},[n("svg",{staticClass:"w-6 h-6 dark:text-gray-50",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"}})])])]),e._v(" "),n("h2",{directives:[{name:"show",rawName:"v-show",value:!e.modalShow,expression:"!modalShow"}],staticClass:"text-xl font-bold dark:text-gray-50"},[e._v("\n        Sign in\n      ")])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.modalShow,expression:"modalShow"}]},[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"b-input",attrs:{type:"text"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),e._v(" "),n("div",{on:{click:e.shoot_mail}},[n("PrimaryBtn",{attrs:{text:"Reset"}})],1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.resetGood,expression:"resetGood"}],staticClass:"normal-alert"},[n("div",[e._v("\n          If this is a valid email id stored in out database, we will send a\n          password reset link, check your mail inbox.\n        ")]),e._v(" "),n("div",{staticClass:"p-2"},[n("nuxt-link",{staticClass:"px-4 py-2 border rounded-full font-semibold",attrs:{to:"/"}},[e._v("Go Back")])],1)])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.modalShow,expression:"!modalShow"}]},[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"b-input",attrs:{type:"text",placeholder:"Email / Username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),e._v(" "),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"b-input",attrs:{type:"text",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._v(" "),n("div",[n("button",{staticClass:"b-button",on:{click:e.check_creds}},[e._v("Sign in")])]),e._v(" "),n("div",{staticClass:"flex items-center justify-between mt-2"},[e._m(0),e._v(" "),n("div",[n("button",{staticClass:"text-sm text-blue-600 hover:underline",attrs:{href:"#"},on:{click:e.resetPass}},[e._v("\n            Forgot password?\n          ")])])])])])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-row items-center"},[n("input",{staticClass:"b-checkbox",attrs:{type:"checkbox"}}),e._v(" "),n("label",{staticClass:"ml-2 text-sm font-normal text-gray-600",attrs:{for:"comments"}},[e._v("Remember me")])])}],!1,null,null,null);t.default=component.exports}}]);