(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(9),o=n.n(c),s=(n(16),n(10)),i=n(2),u=n(19),l=n(4),b=n.n(l),j=n(0);var m=function(e){var t=e.onSubmit,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],o=r[1],s=Object(a.useState)(""),l=Object(i.a)(s,2),m=l[0],d=l[1],O=Object(u.a)(),h=Object(u.a)(),f=function(){o(""),d("")};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("form",{className:b.a.form,onSubmit:function(e){t({name:c,number:m}),f()},children:[Object(j.jsx)("label",{htmlFor:O,children:" Name "}),Object(j.jsx)("input",{className:b.a.input,id:O,onChange:function(e){var t=e.currentTarget.value;o(t)},value:c,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(j.jsx)("label",{htmlFor:h,children:" Number "}),Object(j.jsx)("input",{className:b.a.input,id:h,onChange:function(e){console.log(e);var t=e.currentTarget.value;d(t)},value:m,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(j.jsx)("button",{className:b.a.button,type:"submit",children:"Add contact"})]})})},d=n(6),O=n.n(d);var h=function(e){var t=e.persons,n=e.onDeleteContacts;return Object(j.jsx)("div",{children:t.length?Object(j.jsx)("ul",{className:O.a.stats,children:t.map((function(e){return Object(j.jsxs)("li",{className:O.a.item,children:[e.name,":",e.number,Object(j.jsx)("button",{className:O.a.button,type:"button",onClick:function(){return n(e.id)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},e.id)}))}):Object(j.jsx)("p",{children:"No entries in the phone book"})})},f=n(8),p=n.n(f),x=function(e){var t=e.value,n=e.onChange;return Object(j.jsxs)("label",{className:p.a.label,children:[Object(j.jsx)("b",{children:"\u0424\u0438\u043b\u044c\u0442\u0440 \u043f\u043e \u0438\u043c\u0435\u043d\u0438"}),Object(j.jsx)("input",{className:p.a.input,type:"Text",value:t,onChange:n})]})};var v=function(){var e=Object(a.useState)((function(){var e;return null!==(e=JSON.parse(localStorage.getItem("contacts")))&&void 0!==e?e:[]})),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),o=Object(i.a)(c,2),l=o[0],b=o[1];Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var d=Object(u.a)(),O=function(){var e=l.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(e)}))}();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(m,{onSubmit:function(e){var t={id:d,name:e.name,number:e.number},a=n.find((function(e){return e.name===t.name}));a?alert("".concat(a.name," is already on contacts")):r((function(e){return[t].concat(Object(s.a)(e))}))}}),Object(j.jsx)(x,{value:l,onChange:function(e){b(e.currentTarget.value)}}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(h,{persons:O,onDeleteContacts:function(e){r((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})};o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root"))},4:function(e,t,n){e.exports={form:"Form_form__1rzQP",input:"Form_input__1SsCq",button:"Form_button__2vBSw"}},6:function(e,t,n){e.exports={stats:"PersoneEditor_stats__2-912",item:"PersoneEditor_item__3KpS4",button:"PersoneEditor_button__okw1i"}},8:function(e,t,n){e.exports={label:"Filter_label__3XIsX"}}},[[18,1,2]]]);
//# sourceMappingURL=main.e403f209.chunk.js.map