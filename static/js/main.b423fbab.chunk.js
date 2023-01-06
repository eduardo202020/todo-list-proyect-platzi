(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(48)},28:function(e,t,n){},30:function(e,t,n){},34:function(e,t,n){},36:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(17),c=n.n(r),l=(n(28),n(6)),i=n(0),u=n(3);n(30);function s(e){var t=o.a.useState(e.text),n=Object(u.a)(t,2),a=n[0],r=n[1],c=Object(i.l)();return o.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.submitEvent(a),c("/")}},o.a.createElement("label",null,e.label),o.a.createElement("textarea",{autoFocus:!0,value:a,onChange:function(e){r(e.target.value)},placeholder:"Type a todo"}),o.a.createElement("div",{className:"TodoForm-buttonContainer"},o.a.createElement("button",{type:"button",className:"TodoForm-button TodoForm-button--cancel",onClick:function(){c("/")}},"Cancelar"),o.a.createElement("button",{type:"submit",className:"TodoForm-button TodoForm-button--add"},e.submitText)))}var d=n(5),m=n(18),f=n(4),E=n(13);function p(e,t){var n=o.a.useReducer(h,g({initialValue:t})),a=Object(u.a)(n,2),r=a[0],c=a[1],l=r.sincronizedItem,i=r.loading,s=r.error,d=r.item,m=function(e){return c({type:T.error,payload:e})};o.a.useEffect(function(){setTimeout(function(){try{var n,a=localStorage.getItem(e);a?n=JSON.parse(a):(localStorage.setItem(e,JSON.stringify(t)),n=t),function(e){c({type:T.success,payload:e})}(n)}catch(s){m(s)}},1e3)},[l]);return{item:d,saveItem:function(t){try{var n=JSON.stringify(t);localStorage.setItem(e,n),function(e){c({type:T.save,payload:e})}(t)}catch(s){m(s)}},loading:i,error:s,sincronizeItem:function(){c({type:T.sincronize})}}}var g=function(e){return{sincronizedItem:!0,loading:!0,error:!1,item:e.initialValue}},T={error:"ERROR",success:"SUCCESS",save:"SAVE",sincronize:"SINCRONIZE"},h=function(e,t){return function(e,t){var n;return n={},Object(f.a)(n,T.error,Object(E.a)({},e,{error:!0})),Object(f.a)(n,T.success,Object(E.a)({},e,{error:!1,sincronizedItem:!0,loading:!1,item:t})),Object(f.a)(n,T.save,Object(E.a)({},e,{item:t})),Object(f.a)(n,T.sincronize,Object(E.a)({},e,{sincronizedItem:!1,loading:!0})),n}(e,t.payload)[t.type]||e};function b(){var e=p("TODOS_V1",[]),t=e.item,n=e.saveItem,a=e.sincronizeItem,r=e.loading,c=e.error,l=o.a.useState(""),i=Object(u.a)(l,2),s=i[0],f=i[1],E=t.filter(function(e){return!!e.completed}).length,g=t.length,T=[];T=!s.length>=1?t:t.filter(function(e){var t=e.text.toLowerCase(),n=s.toLowerCase();return t.includes(n)});return{state:{loading:r,error:c,totalTodos:g,completedTodos:E,searchValue:s,searchedTodos:T,getTodo:function(e){return t.find(function(t){return t.id===e})},todos:t},stateUpdaters:{setSearchValue:f,addTodo:function(e){var a=Object(m.v4)(),o=Object(d.a)(t);o.push({completed:!1,text:e,id:a}),n(o)},completeTodo:function(e){var a=t.findIndex(function(t){return t.id===e}),o=Object(d.a)(t);o[a].completed=!o[a].completed,n(o)},deleteTodo:function(e){var a=t.findIndex(function(t){return t.id===e}),o=Object(d.a)(t);o.splice(a,1),n(o)},sincronizeTodos:a,editTodo:function(e,a){var o=t.findIndex(function(t){return t.id===e});if(-1===o)console.log("Error: Todo not found"),console.log("id: "+e);else{var r=Object(d.a)(t);r[o].text=a,n(r)}}}}}function v(){var e,t=Object(i.j)(),n=Object(i.n)().id,a=b(),r=a.state,c=a.stateUpdaters,l=r.loading,u=r.getTodo,d=c.editTodo;if(t.state&&t.state.todo)e=t.state.todo.text;else{if(l)return o.a.createElement("p",null,"Cargando...");e=u(n).text}return o.a.createElement(s,{label:"Edita tu TODO",text:e,submitText:"Editar",submitEvent:function(e){return d(n,e)}})}n(34);function O(e){var t=e.completedTodos,n=e.totalTodos,a=e.loading;return o.a.createElement("h2",{className:"TodoCounter ".concat(a&&"TodoCounter--loading")},"Has completado ",t," de ",n," TODOs")}n(36);function y(e){var t=e.setSearchValue,n=e.searchValue,r=e.loading,c=e.searchedText,l=Object(i.l)(),u=function(e){"Enter"===e.key&&(""===e.target.value?l("/"):l("/?search=".concat(e.target.value)))};Object(a.useEffect)(function(){c&&t(c)},[c]);var s=function(e){t(e.target.value)};return r?o.a.createElement("input",{disabled:r,className:"TodoSearch",placeholder:"cargando ...",onChange:s,value:n,onKeyDown:u}):o.a.createElement("input",{autoFocus:!0,className:"TodoSearch",placeholder:"type a todo",onChange:s,value:n,onKeyDown:u})}n(38);function C(e){var t=e.children||e.render;return o.a.createElement("section",{className:"TodoList-container"},e.error&&e.onError(),e.loading&&e.onLoading(),!e.loading&&!e.totalTodos&&e.onEmptyTodos(),!!e.totalTodos&&!e.searchedTodos.length&&o.a.createElement("div",{className:"vacio "},e.onEmptySearchResults(e.searchText)),!e.loading&&!e.error&&e.searchedTodos.map(t))}n(40);function x(e){return o.a.createElement("li",{className:"TodoItem"},o.a.createElement("span",{className:"Icon Icon-check ".concat(e.completed&&"Icon-check--active"),onClick:e.onComplete},e.completed?o.a.createElement("span",{role:"img","aria-label":""},"\u2716\ufe0f"):o.a.createElement("span",{"aria-label":"",role:"img"},"\u2714\ufe0f")),o.a.createElement("p",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--complete")},e.text),o.a.createElement("span",{role:"img",className:"Icon Icon-edit","aria-label":"",onClick:function(){e.onEdit()}},"\u270f\ufe0f"),o.a.createElement("span",{className:"Icon Icon-delete",onClick:function(){e.onDelete()}},"X"))}n(42);function I(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{className:"CreateTodoButton",onClick:e.onClick},"+"))}n(44);function S(){return o.a.createElement("div",{className:"LoadingTodo-container"},o.a.createElement("span",{className:"LoadingTodo-completeIcon"}),o.a.createElement("p",{className:"LoadingTodo-text"},"Cargando TODOs..."),o.a.createElement("span",{className:"LoadingTodo-deleteIcon"}))}function j(e){var t=e.children,n=e.loading;return o.a.createElement("header",null,o.a.Children.toArray(t).map(function(e){return o.a.cloneElement(e,{loading:n})}))}function N(){return o.a.createElement("p",null,"Desesp\xe9rate, hubo un error...")}function w(){return o.a.createElement("p",null,"Crea tu primer todo")}n(46);function k(e){var t=function(e){var t=o.a.useState(!1),n=Object(u.a)(t,2),a=n[0],r=n[1];return window.addEventListener("storage",function(e){"TODOS_V1"===e.key&&(console.log("Hubo cambios en TODOS_V1"),r(!0))}),{show:a,toggleShow:function(){e(),r(!1)}}}(e.sincronize),n=t.show,a=t.toggleShow;return n?o.a.createElement("div",{className:"ChangeAlert-bg"},o.a.createElement("div",{className:"ChangeAlert-container"},o.a.createElement("p",null,"Parece que cambiaste tus TODOs en otra pesta\xf1a o ventana del navegador."),o.a.createElement("p",null,"\xbfQuieres sincronizar tus TODOs?"),o.a.createElement("button",{className:"TodoForm-button TodoForm-button--add",onClick:a},"Yes!"))):null}function D(){var e=Object(i.l)(),t=b(),n=t.state,a=t.stateUpdaters,r=Object(i.j)().search,c=new URLSearchParams(r).get("search"),l=n.error,u=n.loading,s=n.searchedTodos,d=n.totalTodos,m=n.completedTodos,f=n.searchValue,E=a.completeTodo,p=a.deleteTodo,g=a.setSearchValue,T=a.sincronizeTodos;return o.a.createElement(o.a.Fragment,null,o.a.createElement(j,{loading:u},o.a.createElement(O,{totalTodos:d,completedTodos:m}),o.a.createElement(y,{searchValue:f,setSearchValue:g,searchedText:c})),o.a.createElement(C,{error:l,loading:u,searchedTodos:s,totalTodos:d,searchValue:f,searchText:f,onError:function(){return o.a.createElement(N,null)},onLoading:function(){return o.a.createElement(S,null)},onEmptyTodos:function(){return o.a.createElement(w,null)},onEmptySearchResults:function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"No hay resultados para "),o.a.createElement("b",{style:{color:"red"}},'"',t,'"'),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){e("/new/",{state:{searchText:t}})}},"\xbfagregar?")))},render:function(t){return o.a.createElement(x,{key:t.text,text:t.text,completed:t.completed,onComplete:function(){return E(t.id)},onDelete:function(){return p(t.id)},onEdit:function(){e("/edit/"+t.id,{state:{todo:t}})}})}}),o.a.createElement(I,{onClick:function(){return e("/new")}}),o.a.createElement(k,{sincronize:T}))}function V(){var e,t=b().stateUpdaters,n=Object(i.j)();e=n.state&&n.state.searchText?n.state.searchText:"";var a=t.addTodo;return o.a.createElement(o.a.Fragment,null,o.a.createElement(s,{submitEvent:function(e){return a(e)},submitText:"Agregar",label:"Agrega tu TODO",text:e}))}function z(){return o.a.createElement(l.a,null,o.a.createElement(i.c,null,o.a.createElement(i.a,{path:"/",element:o.a.createElement(D,null)}),o.a.createElement(i.a,{path:"/:searchText",element:o.a.createElement(D,null)}),o.a.createElement(i.a,{path:"/new",element:o.a.createElement(V,null)}),o.a.createElement(i.a,{path:"/edit/:id",element:o.a.createElement(v,null)}),o.a.createElement(i.a,{path:"*",element:o.a.createElement("h1",null,"404: Not Found")})))}c.a.createRoot(document.getElementById("root")).render(o.a.createElement(z,null))}},[[19,2,1]]]);
//# sourceMappingURL=main.b423fbab.chunk.js.map