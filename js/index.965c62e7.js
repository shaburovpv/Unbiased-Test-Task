(function(e){function r(r){for(var o,i,l=r[0],s=r[1],u=r[2],c=0,d=[];c<l.length;c++)i=l[c],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);m&&m(r);while(d.length)d.shift()();return n.push.apply(n,u||[]),t()}function t(){for(var e,r=0;r<n.length;r++){for(var t=n[r],o=!0,l=1;l<t.length;l++){var s=t[l];0!==a[s]&&(o=!1)}o&&(n.splice(r--,1),e=i(i.s=t[0]))}return e}var o={},a={index:0},n=[];function i(r){if(o[r])return o[r].exports;var t=o[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=o,i.d=function(e,r,t){i.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,r){if(1&r&&(e=i(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)i.d(t,o,function(r){return e[r]}.bind(null,o));return t},i.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(r,"a",r),r},i.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},i.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=r,l=l.slice();for(var u=0;u<l.length;u++)r(l[u]);var m=s;n.push([0,"chunk-vendors"]),t()})({0:function(e,r,t){e.exports=t("56d7")},"56d7":function(e,r,t){"use strict";t.r(r);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("2b0e"),a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{attrs:{id:"app"}},[t("MainPage")],1)},n=[],i=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("div",{staticClass:"container"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-6 offset-md-3"},[t("HireTaxiForm",{on:{formSubmit:e.onFormSubmit}})],1)])]),t("SuccessModal",{attrs:{isShow:e.modalShow},on:{closeModal:e.onCloseModal}})],1)},l=[],s=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"hire-taxi-form"},[t("h1",{staticClass:"hire-taxi-head"},[e._v("Form To Hire A Taxi")]),t("form",{on:{submit:function(r){return r.preventDefault(),e.onSubmit(r)}}},[t("div",{staticClass:"form-group form-group-required"},[t("label",{staticClass:"control-label",attrs:{for:"name"}},[e._v("Your full name")]),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.name,expression:"form.name",modifiers:{trim:!0}}],staticClass:"form-control",class:{"is-invalid":e.$v.form.name.$error},attrs:{type:"text",id:"name",disabled:e.loading},domProps:{value:e.form.name},on:{input:[function(r){r.target.composing||e.$set(e.form,"name",r.target.value.trim())},function(r){return e.$v.form.name.$touch()}],blur:function(r){return e.$forceUpdate()}}}),t("FormControlError",{attrs:{formField:e.$v.form.name}})],1),t("div",{staticClass:"form-group form-group-required"},[t("label",{staticClass:"control-label",attrs:{for:"phone"}},[e._v("Your mobile phone")]),t("TheMask",{staticClass:"form-control",class:{"is-invalid":e.$v.form.phone.$error},attrs:{type:"tel",id:"phone",mask:"+44###########",masked:!0,placeholder:"+44XXXXXXXXXXX",disabled:e.loading},on:{input:function(r){return e.$v.form.phone.$touch()}},model:{value:e.form.phone,callback:function(r){e.$set(e.form,"phone",r)},expression:"form.phone"}}),t("FormControlError",{attrs:{formField:e.$v.form.phone,errorMessage:e.$v.form.phone.isValidPhone?"":"Phone number is not valid"}}),t("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[e._v(" Use phone number in international UK format. e.g. +4402012341234 ")])],1),t("div",{staticClass:"form-group form-group-required"},[t("label",{staticClass:"control-label",attrs:{for:"date"}},[e._v("Date of arrival")]),t("TheMask",{staticClass:"form-control",class:{"is-invalid":e.$v.form.date.$error},attrs:{type:"text",id:"date",inputmode:"numeric",mask:"##/##/####",masked:!0,placeholder:"dd/mm/yyyy",disabled:e.loading},on:{input:function(r){return e.$v.form.date.$touch()}},model:{value:e.form.date,callback:function(r){e.$set(e.form,"date",r)},expression:"form.date"}}),t("FormControlError",{attrs:{formField:e.$v.form.date,errorMessage:e.$v.form.date.isDateValid?e.$v.form.flightNumber.isDateFromFuture?"":"Date cannot be less than today":"Date is not valid"}})],1),t("div",{staticClass:"form-row"},[t("div",{staticClass:"form-group form-group-required col-md-6"},[t("label",{staticClass:"control-label",attrs:{for:"airport"}},[e._v("Airport")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.form.airport,expression:"form.airport"}],staticClass:"form-control",class:{"is-invalid":e.$v.form.airport.$error},attrs:{id:"airport",disabled:e.loading},on:{change:[function(r){var t=Array.prototype.filter.call(r.target.options,(function(e){return e.selected})).map((function(e){var r="_value"in e?e._value:e.value;return r}));e.$set(e.form,"airport",r.target.multiple?t:t[0])},function(r){return e.$v.form.airport.$touch()}]}},[t("option"),e._l(e.airportOptions,(function(r){return t("option",{key:r.value,domProps:{value:r.value}},[e._v(" "+e._s(r.label)+" ")])}))],2),t("FormControlError",{attrs:{formField:e.$v.form.airport}})],1),"heathrow"===e.form.airport?t("div",{staticClass:"form-group col-md-6"},[t("label",{staticClass:"control-label",attrs:{for:"terminal"}},[e._v("Terminal")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.form.terminal,expression:"form.terminal"}],staticClass:"form-control",attrs:{id:"terminal",disabled:e.loading},on:{change:[function(r){var t=Array.prototype.filter.call(r.target.options,(function(e){return e.selected})).map((function(e){var r="_value"in e?e._value:e.value;return r}));e.$set(e.form,"terminal",r.target.multiple?t:t[0])},function(r){return e.$v.form.terminal.$touch()}]}},e._l(e.terminalOptions,(function(r){return t("option",{key:r.value,domProps:{value:r.value}},[e._v(" "+e._s(r.label)+" ")])})),0)]):e._e()]),t("div",{staticClass:"form-group form-group-required"},[t("label",{staticClass:"control-label",attrs:{for:"flight-number"}},[e._v(" Airflight number ")]),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.flightNumber,expression:"form.flightNumber",modifiers:{trim:!0}}],staticClass:"form-control",class:{"is-invalid":e.$v.form.flightNumber.$error},attrs:{type:"text",id:"flight-number",disabled:e.loading},domProps:{value:e.form.flightNumber},on:{input:[function(r){r.target.composing||e.$set(e.form,"flightNumber",r.target.value.trim())},function(r){return e.$v.form.flightNumber.$touch()}],blur:function(r){return e.$forceUpdate()}}}),t("FormControlError",{attrs:{formField:e.$v.form.flightNumber,errorMessage:e.$v.form.flightNumber.isFlightNumberValid?"":"Flight number is not valid"}})],1),t("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:e.loading}},[e.loading?t("span",[e._v("Loading...")]):t("span",[e._v("Confirm booking")])])])])},u=[],m=(t("96cf"),t("1da1")),c=t("1dce"),d=t("b5ae"),f=function(){var e=this,r=e.$createElement,t=e._self._c||r;return!1===e.formField.required?t("div",{staticClass:"invalid-feedback"},[e._v(" Required ")]):e.errorMessage?t("div",{staticClass:"invalid-feedback"},[e._v(" "+e._s(e.errorMessage)+" ")]):e._e()},p=[],v={name:"FormControlError",props:{formField:Object,errorMessage:String}},b=v,h=t("2877"),g=Object(h["a"])(b,f,p,!1,null,null,null),$=g.exports,C=(t("4d63"),t("ac1f"),t("25f0"),t("5319"),t("397a")),x=function(e){var r=Object(C["a"])(e);return!(!r||!r.isValid())},_=function(e){var r=new RegExp(/(\d{2})\/(\d{2})\/(\d{4})/),t=e.replace(r,"$2/$1/$3");return Date.parse(t)},y=function(e){if(10!==e.length)return!1;var r=_(e);return!isNaN(r)},w=function(e){var r=_(e),t=new Date;return t.setHours(0,0,0,0),y(e)&&r>=t},S=function(e){var r=new RegExp(/^[A-Z\d]{2}[A-Z]?\d{1,4}[A-Z]?$/);return r.test(e)},k=t("3a60"),F="hireTaxiForm",O={name:"HireTaxiForm",mixins:[c["validationMixin"]],components:{FormControlError:$,TheMask:k["TheMask"]},data:function(){return{loading:!1,form:{name:"",phone:"",date:"",airport:"",terminal:"1",flightNumber:""},airportOptions:[{value:"heathrow",label:"Heathrow"},{value:"gatwick",label:"Gatwick"}],terminalOptions:[{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"},{value:"4",label:"4"},{value:"not-sure",label:"not sure"}]}},validations:{form:{name:{required:d["required"]},phone:{required:d["required"],isValidPhone:x},date:{required:d["required"],isDateValid:y,isDateFromFuture:w},airport:{required:d["required"]},flightNumber:{required:d["required"],isFlightNumberValid:S}}},mounted:function(){},methods:{onSubmit:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(console.log({formData:e.form}),e.$v.form.$touch(),e.$v.form.$error){r.next=11;break}return e.loading=!0,r.next=6,e.$api.hireTaxiService.bookTaxi(e.form);case 6:t=r.sent,console.log({result:t}),e.loading=!1,e.setFormDataToStorage(),e.$emit("formSubmit");case 11:case"end":return r.stop()}}),r)})))()},setFormDataToStorage:function(){var e=JSON.stringify(this.form);localStorage.setItem(F,e)}}},M=O,N=(t("f80b"),Object(h["a"])(M,s,u,!1,null,"2d64d02f",null)),T=N.exports,q=function(){var e=this,r=e.$createElement,t=e._self._c||r;return e.isShow?t("div",[t("div",{staticClass:"modal fade show",attrs:{tabindex:"-1","aria-labelledby":"exampleModalLiveLabel","aria-modal":"true",role:"dialog"}},[t("div",{staticClass:"modal-dialog"},[t("div",{staticClass:"modal-content"},[t("div",{staticClass:"modal-header"},[t("h3",{staticClass:"modal-title",attrs:{id:"exampleModalLiveLabel"}},[e._v(" Booking completed ")]),t("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:e.onClose}},[t("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])]),e._m(0),t("div",{staticClass:"modal-footer"},[t("a",{staticClass:"btn btn-primary",attrs:{href:"https://www.unbiased.co.uk/",target:"_blank"},on:{click:e.onClose}},[e._v(" Ok ")])])])])]),t("div",{staticClass:"modal-backdrop fade show"})]):e._e()},j=[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"modal-body"},[t("p",[e._v("Taxi will wait you next to airport")])])}],P={name:"SuccessModal",props:{isShow:{type:Boolean,default:!1}},methods:{onClose:function(){this.$emit("closeModal")}}},E=P,D=(t("fead"),Object(h["a"])(E,q,j,!1,null,"82ad8fd4",null)),X=D.exports,A={name:"MainPage",components:{HireTaxiForm:T,SuccessModal:X},data:function(){return{modalShow:!1}},methods:{onFormSubmit:function(){this.modalShow=!0},onCloseModal:function(){this.modalShow=!1}}},H=A,R=Object(h["a"])(H,i,l,!1,null,null,null),V=R.exports,L={name:"App",components:{MainPage:V}},J=L,U=Object(h["a"])(J,a,n,!1,null,null,null),Z=U.exports,B=(t("fb98"),t("d3b7"),{request:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"POST";return fetch("https://desolate-river-23256.herokuapp.com/graphql",{headers:{"content-type":"application/json"},method:r,body:JSON.stringify(e)})},responseHandler:function(e,r){return Object(m["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.then((function(e){return e.json()}));case 3:return t.abrupt("return",t.sent);case 6:if(t.prev=6,t.t0=t["catch"](0),!r){t.next=12;break}return t.abrupt("return",r);case 12:console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,6]])})))()}}),Y=B,G=function(e){return{bookTaxi:function(r){var t={query:"\n          mutation createTaxiOrder(\n            $name: String!,\n            $phone: String!,\n            $date: String!,\n            $airport: String!,\n            $terminal: String,\n            $flightNumber: String!,\n          ) {\n            createTaxiOrder(\n              name: $name,\n              phone: $phone,\n              date: $date,\n              airport: $airport,\n              terminal: $terminal,\n              flightNumber: $flightNumber,\n            ) {\n              name\n            }\n          }",variables:r};return e.responseHandler(e.request(t))}}},I={hireTaxiService:G(Y)},K={install:function(e){e.prototype.$api=I}};o["a"].use(K),new o["a"]({render:function(e){return e(Z)}}).$mount("#app")},5847:function(e,r,t){},"85b3":function(e,r,t){},f80b:function(e,r,t){"use strict";t("5847")},fb98:function(e,r,t){},fead:function(e,r,t){"use strict";t("85b3")}});
//# sourceMappingURL=index.965c62e7.js.map