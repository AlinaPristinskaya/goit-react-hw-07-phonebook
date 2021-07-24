(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{18:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(10),s=n.n(c),o=(n(18),n(12)),i=n(2),u=n(6),l=n(4),b=n(3),m=n(21),d=n(11),h=n(5),p=n.n(h),j=n(0),f=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[],name:"",number:""},t.nameInputId=Object(m.a)(),t.numberInputId=Object(m.a)(),t.handelChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(d.a)({},a,r))},t.handelSubmit=function(e){t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({contacts:[],name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("form",{className:p.a.form,onSubmit:this.handelSubmit,children:[Object(j.jsx)("label",{htmlFor:this.nameInputId,children:" Name "}),Object(j.jsx)("input",{className:p.a.input,id:this.nameInputId,onChange:this.handelChange,value:this.state.name,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(j.jsx)("label",{htmlFor:this.numberInputId,children:" Number "}),Object(j.jsx)("input",{className:p.a.input,id:this.numberInputId,onChange:this.handelChange,value:this.state.number,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(j.jsx)("button",{className:p.a.button,type:"submit",children:"Add contact"})]})})}}]),n}(a.Component),O=n(7),v=n.n(O),g=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={persons:t.props.persons},t.render=function(){var e=t.props.persons;return Object(j.jsx)("div",{children:e.length?Object(j.jsx)("ul",{className:v.a.stats,children:e.map((function(e){return Object(j.jsxs)("li",{className:v.a.item,children:[e.name,":",e.number,Object(j.jsx)("button",{className:v.a.button,type:"button",onClick:function(){return t.props.onDeleteContacts(e.id)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},e.id)}))}):Object(j.jsx)("p",{children:"No entries in the phone book"})})},t}return n}(a.Component);g.defaultProps={persons:[]};var x=g,C=n(9),_=n.n(C),S=function(t){var e=t.value,n=t.onChange;return Object(j.jsxs)("label",{className:_.a.label,children:[Object(j.jsx)("b",{children:"\u0424\u0438\u043b\u044c\u0442\u0440 \u043f\u043e \u0438\u043c\u0435\u043d\u0438"}),Object(j.jsx)("input",{className:_.a.input,type:"Text",value:e,onChange:n})]})},y=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.nameListId=Object(m.a)(),t.formSubmitHandler=function(e){var n={id:t.nameListId,name:e.name,number:e.number},a=t.state.contacts.find((function(t){return t.name===n.name}));a?alert("".concat(a.name," is already on contacts")):t.setState((function(t){return{contacts:[n].concat(Object(o.a)(t.contacts))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,r=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(r)}))},t.deleteContacts=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);console.log(e),e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){t.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.getVisibleContacts();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(f,{onSubmit:this.formSubmitHandler}),Object(j.jsx)(S,{value:this.state.filter,onChange:this.changeFilter}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(x,{persons:t,onDeleteContacts:this.deleteContacts})]})}}]),n}(a.Component);y.defaultProps={contact:[],filter:""};var I=y;s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(I,{})}),document.getElementById("root"))},5:function(t,e,n){t.exports={form:"Form_form__3qIja",input:"Form_input__3FzoV",button:"Form_button__3nWLb"}},7:function(t,e,n){t.exports={stats:"PersoneEditor_stats__1u-RP",item:"PersoneEditor_item__1qTKN",button:"PersoneEditor_button__flMFS"}},9:function(t,e,n){t.exports={label:"Filter_label__1wKqn"}}},[[20,1,2]]]);
//# sourceMappingURL=main.3ee251b3.chunk.js.map