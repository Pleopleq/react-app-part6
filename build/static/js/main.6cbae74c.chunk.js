(this.webpackJsonppart6=this.webpackJsonppart6||[]).push([[0],{14:function(e,t,n){e.exports=n(37)},19:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),u=n.n(c),l=n(13),o=n.n(l),r=(n(19),n(3)),i=n.n(r),m="http://localhost:3001/persons",s=function(){return i.a.get(m)},f=function(e){return i.a.post(m,e)},d=function(e){return i.a.delete("".concat(m,"/").concat(e))},h=function(e,t){return i.a.put("".concat(m,"/").concat(e),t)},b=function(e){var t=e.contact,n=e.phone,a=e.index,c=e.onClick,l=e.id;return u.a.createElement("li",{key:a}," ",t," - ",n," ",u.a.createElement("button",{onClick:c,id:l},"Delete"))},v=function(e){var t=e.value,n=e.onChange;return u.a.createElement("div",null,u.a.createElement("label",null,"Filter by name:")," ",u.a.createElement("input",{value:t,onChange:n}))},p=function(e){var t=e.onSubmit,n=e.valueName,a=e.onChangeName,c=e.valueNumber,l=e.onChangeNum;return u.a.createElement("form",{onSubmit:t},u.a.createElement("div",null,"name: ",u.a.createElement("input",{value:n,onChange:a}),"phone: ",u.a.createElement("input",{value:c,onChange:l}),u.a.createElement("div",null,u.a.createElement("button",{type:"submit"},"Add"))))},E=function(e){var t=e.message,n=e.className;return null===t?null:u.a.createElement("div",{className:n},t)},g=function(){Object(c.useEffect)((function(){s().then((function(e){l(e.data)}))}),[]);var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],l=t[1],o=Object(c.useState)(""),r=Object(a.a)(o,2),i=r[0],m=r[1],g=Object(c.useState)(""),O=Object(a.a)(g,2),j=O[0],C=O[1],N=Object(c.useState)(""),w=Object(a.a)(N,2),k=w[0],y=w[1],S=Object(c.useState)(null),A=Object(a.a)(S,2),x=A[0],T=A[1],D=Object(c.useState)(null),J=Object(a.a)(D,2),B=J[0],F=J[1],I=n,P=i,U=P.charAt(0).toUpperCase()+P.substring(1),q=I.filter((function(e){return e.name.includes(U)}));I=q;var z=function(e){var t=e.target.id;window.confirm("Are you sure you want to delete this contact?")&&d(t).then((function(e){s().then((function(e){l(e.data)}))})).catch((function(e){console.log(e),F("\n                     This contact is already removed from the server\n                     "),s().then((function(e){l(e.data)})),setTimeout((function(){F(null)}),4e3)}))};return u.a.createElement("div",null,u.a.createElement("h1",null,"Phonebook"),u.a.createElement(E,{message:x,className:"success-alert"}),u.a.createElement(E,{message:B,className:"fail-alert"}),u.a.createElement(v,{value:i,onChange:function(e){m(e.target.value)}}),u.a.createElement("h2",null,"Add a new contact"),u.a.createElement(p,{valueName:j,onChangeName:function(e){C(e.target.value)},valueNumber:k,onChangeNum:function(e){y(e.target.value)},onSubmit:function(e){e.preventDefault();var t={name:j,number:k};if(n.map((function(e){return e.name})).indexOf(j)>-1){if(window.confirm("".concat(j," is already added to phonebook, replace the old number with a new one?"))){var a=n.filter((function(e){return e.name===j}));h(a[0].id,t).then((function(e){s().then((function(e){l(e.data),C(""),y("")}))}))}}else f(t).then((function(e){T("".concat(e.data.name," added to the contact list!")),setTimeout((function(){T(null)}),4e3),l(n.concat(e.data)),C(""),y("")}))}}),u.a.createElement("h2",null,"Numbers"),u.a.createElement("ul",null,I.map((function(e,t){return u.a.createElement(b,{contact:e.name,phone:e.number,onClick:z,key:t,id:e.id})}))))};o.a.render(u.a.createElement(g,null),document.getElementById("root"));t.default=g}},[[14,1,2]]]);
//# sourceMappingURL=main.6cbae74c.chunk.js.map