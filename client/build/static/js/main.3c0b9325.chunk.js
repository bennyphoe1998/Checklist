(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{25:function(t,e,n){},26:function(t,e,n){},36:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(1),s=n.n(a),r=n(16),o=n.n(r),i=(n(25),n(26),n(17)),d=n(3),l=n(2),u=n.n(l),j=n(5),b=n(6),h=n(37),p=function(t){var e=Object(a.useState)(t.currentState),n=Object(b.a)(e,2),s=n[0],r=n[1];Object(a.useEffect)((function(){console.log(t.currentState),console.log(s+"TEST"),console.log(t.did)}),[]);var o=function(){var t=Object(j.a)(u.a.mark((function t(e,n,c){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/checklist/activitydate/".concat(e,"&").concat(c,"&").concat(n),{method:"POST",headers:{"Content-Type":"application/json"}});case 3:t.sent,console.log("connected date and activity"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,n,c){return t.apply(this,arguments)}}(),i=function(){var t=Object(j.a)(u.a.mark((function t(e,n,c){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/checklist/activitydate/".concat(e,"&").concat(c,"&").concat(n),{method:"DELETE",headers:{"Content-Type":"application/json"}});case 3:t.sent,console.log("disconnected date and activity"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,n,c){return t.apply(this,arguments)}}();return Object(c.jsx)(a.Fragment,{children:Object(c.jsx)("input",{type:"checkbox",checked:s,onChange:function(){s?i(t.tid,t.did,t.aid):o(t.tid,t.did,t.aid),r(!s),console.log("CLICKED")}})})},x=function(t){var e=Object(a.useState)(""),n=Object(b.a)(e,2),s=n[0],r=n[1],o=function(){var e=Object(j.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={description:s},e.next=4,fetch("/checklist/activity/".concat(t.tid),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 4:e.sent,window.location="/topic",e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)(a.Fragment,{children:[Object(c.jsx)("button",{type:"button",className:"btn btn-success","data-toggle":"modal","data-target":"#myModal",style:{margin:"5px"},children:"Add Activity"}),Object(c.jsx)("div",{className:"modal",id:"myModal",children:Object(c.jsx)("div",{className:"modal-dialog",children:Object(c.jsxs)("div",{className:"modal-content",children:[Object(c.jsxs)("div",{className:"modal-header",children:[Object(c.jsx)("h4",{className:"modal-title",children:"New Activity"}),Object(c.jsx)("button",{type:"button",class:"close","data-dismiss":"modal",children:"\xd7"})]}),Object(c.jsx)("div",{className:"modal-body",children:Object(c.jsx)("input",{className:"form-control",type:"text",placeholder:"activity",value:s,onChange:function(t){return r(t.target.value)}})}),Object(c.jsxs)("div",{className:"modal-footer",children:[Object(c.jsx)("button",{type:"button",className:"btn btn-danger","data-dismiss":"modal",children:"Close"}),Object(c.jsx)("button",{type:"button",className:"btn btn-success","data-dismiss":"modal",onClick:o,children:"Add"})]})]})})})]})},m=function(t){var e=Object(a.useState)(""),n=Object(b.a)(e,2),s=n[0],r=n[1],o=function(){var e=Object(j.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={description:s},console.log(t.aid),e.next=5,fetch("/checklist/activity/".concat(t.tid,"&").concat(t.aid),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 5:e.sent,window.location="/topic",console.log("updated activity"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)(a.Fragment,{children:[console.log(t.aid+" TEST"),Object(c.jsx)("button",{type:"button",class:"btn btn-primary","data-toggle":"modal","data-target":"#id".concat(t.aid),children:"Edit"}),Object(c.jsx)("div",{class:"modal",id:"id".concat(t.aid),children:Object(c.jsx)("div",{class:"modal-dialog",children:Object(c.jsxs)("div",{class:"modal-content",children:[Object(c.jsxs)("div",{class:"modal-header",children:[Object(c.jsx)("h4",{class:"modal-title",children:"Edit Activity"}),Object(c.jsx)("button",{type:"button",class:"close","data-dismiss":"modal",children:"\xd7"})]}),Object(c.jsx)("div",{class:"modal-body",children:Object(c.jsx)("input",{className:"form-control",type:"text",placeholder:"",value:s,onChange:function(t){return r(t.target.value)}})}),Object(c.jsxs)("div",{class:"modal-footer",children:[Object(c.jsx)("button",{type:"button",class:"btn btn-danger","data-dismiss":"modal",children:"Close"}),Object(c.jsx)("button",{type:"button",class:"btn btn-success","data-dismiss":"modal",onClick:o,children:"Edit"})]})]})})})]})},O=function(t){var e=Object(a.useState)(new Date),n=Object(b.a)(e,2),s=n[0],r=n[1],o=function(){var e=Object(j.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={date:Object(h.a)(s,"yyyy-MM-dd")},console.log(n),e.next=5,fetch("/checklist/date/".concat(t.tid),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 5:e.sent,window.location="/topic",window.location="/topic",e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)(a.Fragment,{children:[Object(c.jsx)("button",{type:"button",class:"btn btn-success","data-toggle":"modal","data-target":"#myModal3",children:"Add Date"}),Object(c.jsx)("div",{class:"modal",id:"myModal3",children:Object(c.jsx)("div",{class:"modal-dialog",children:Object(c.jsxs)("div",{class:"modal-content",children:[Object(c.jsxs)("div",{class:"modal-header",children:[Object(c.jsx)("h4",{class:"modal-title",children:"New Date"}),Object(c.jsx)("button",{type:"button",class:"close","data-dismiss":"modal",children:"\xd7"})]}),Object(c.jsx)("div",{class:"modal-body",children:Object(c.jsx)("input",{className:"form-control",type:"date",value:Object(h.a)(s,"yyyy-MM-dd"),onChange:function(t){return r(new Date(t.target.value))}})}),Object(c.jsxs)("div",{class:"modal-footer",children:[Object(c.jsx)("button",{type:"button",class:"btn btn-danger","data-dismiss":"modal",children:"Close"}),Object(c.jsx)("button",{type:"button",class:"btn btn-success","data-dismiss":"modal",onClick:o,children:"Add"})]})]})})})]})},f=function(t){var e=t.location.state,n=e.name,s=e.tid,r=Object(a.useState)([]),o=Object(b.a)(r,2),i=o[0],d=o[1],l=Object(a.useState)([]),f=Object(b.a)(l,2),v=f[0],y=f[1],g=Object(a.useState)([]),k=Object(b.a)(g,2),w=k[0],C=k[1],T=function(){var t=Object(j.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/checklist/activity/".concat(s),{method:"GET",headers:{"Content-Type":"application/json"}});case 3:return e=t.sent,t.t0=d,t.next=7,e.json();case 7:t.t1=t.sent,(0,t.t0)(t.t1),t.next=14;break;case 11:t.prev=11,t.t2=t.catch(0),console.error(t.t2.message);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}(),N=function(){var t=Object(j.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/checklist/date/".concat(s),{method:"GET",headers:{"Content-Type":"application/json"}});case 3:return e=t.sent,t.t0=y,t.next=7,e.json();case 7:t.t1=t.sent,(0,t.t0)(t.t1),t.next=14;break;case 11:t.prev=11,t.t2=t.catch(0),console.error(t.t2.message);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}(),E=function(){var t=Object(j.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/checklist/activitydate/".concat(s),{method:"GET",headers:{"Content-Type":"application/json"}});case 3:return e=t.sent,t.t0=C,t.next=7,e.json();case 7:t.t1=t.sent,(0,t.t0)(t.t1),t.next=14;break;case 11:t.prev=11,t.t2=t.catch(0),console.error(t.t2.message);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}(),S=function(t,e){for(var n=0;n<w.length;n++)if(w[n].did===t&&w[n].aid===e)return!0;return!1},D=function(){var t=Object(j.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/checklist/activity/".concat(s,"&").concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}});case 3:t.sent,console.log("deleted activity"),d(i.filter((function(t){return t.aid!==e}))),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){E(),T(),N()}),[]),Object(c.jsxs)(a.Fragment,{children:[Object(c.jsx)("button",{className:"btn btn-primary",style:{position:"absolute",left:"0px"},onClick:function(){window.location="/"},children:"Back"}),Object(c.jsx)("h1",{children:n}),Object(c.jsx)(x,{tid:s}),Object(c.jsx)(O,{tid:s}),Object(c.jsxs)("table",{class:"table",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Activity"}),Object(c.jsx)("th",{children:"Edit"}),Object(c.jsx)("th",{children:"Delete"}),v.map((function(t){return Object(c.jsx)("th",{children:Object(h.a)(new Date(t.date),"dd.MM.yyyy")})}))]})}),Object(c.jsx)("tbody",{children:i.map((function(t){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t.description}),Object(c.jsx)("td",{children:Object(c.jsx)(m,{tid:s,aid:t.aid})}),Object(c.jsx)("td",{children:Object(c.jsx)("button",{className:"btn btn-danger",onClick:function(){return D(t.aid)},children:"Delete"})}),v.map((function(e){return Object(c.jsx)("td",{children:Object(c.jsx)(p,{tid:s,currentState:S(e.did,t.aid),did:e.did,aid:t.aid})})}))]},t.aid)}))})]})]})},v=function(t){var e=Object(a.useState)([]),n=Object(b.a)(e,2),s=n[0],r=n[1],o=Object(a.useState)(""),i=Object(b.a)(o,2),d=i[0],l=i[1],h=function(){var t=Object(j.a)(u.a.mark((function t(){var e,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/checklist",{method:"GET",headers:{"Content-Type":"application/json"}});case 3:return e=t.sent,t.next=6,e.json();case 6:n=t.sent,r(n),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.error(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}();Object(a.useEffect)((function(){h()}),[]);var p=function(){var t=Object(j.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e={name:d},t.next=4,fetch("/checklist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});case 4:t.sent,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),x=function(){var t=Object(j.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/checklist/".concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}});case 3:t.sent,r(s.filter((function(t){return t.tid!==e}))),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}();return Object(c.jsxs)(a.Fragment,{children:[Object(c.jsx)("h1",{children:"Check it to win it"}),Object(c.jsx)("div",{style:{position:"relative",width:"50%",margin:"0 auto",left:"170px"},children:Object(c.jsxs)("form",{className:"d-flex",children:[Object(c.jsx)("input",{className:"form-control",style:{width:"600px"},type:"text",placeholder:"new topic",value:d,onChange:function(t){return l(t.target.value)}}),Object(c.jsx)("button",{className:"btn btn-success",onClick:p,children:"Add"})]})}),Object(c.jsx)("h2",{children:"Your Topics: "}),Object(c.jsxs)("table",{className:"table",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Topic"}),Object(c.jsx)("th",{children:"Delete"})]})}),Object(c.jsx)("tbody",{children:s.map((function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:Object(c.jsx)("button",{className:"btn btn-success",onClick:function(){return function(e){t.history.push({pathname:"/topic",state:e})}(e)},children:e.name})}),Object(c.jsx)("td",{children:Object(c.jsx)("button",{className:"btn btn-danger",onClick:function(){return x(e.tid)},children:"Delete"})})]},e.tid)}))})]})]})};var y=function(){return Object(c.jsx)(i.a,{children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(d.a,{path:"/",component:v,exact:!0}),Object(c.jsx)(d.a,{path:"/topic",component:f})]})})};o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(y,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.3c0b9325.chunk.js.map