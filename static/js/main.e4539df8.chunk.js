(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{10:function(e,t,n){e.exports=n(16)},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(7),r=n.n(l),c=(n(15),n(9)),i=n(1),s=n(2),d=n(4),u=n(3),m={title:{display:"inline-block",minWidth:500,textAlign:"left"},completedStyle:{fontStyle:"italic",color:"#d35e0f",opacity:.4,textDecoration:"line-through",display:"inline-block"}},p=function(e){return o.a.createElement("li",{className:"todo-item "},o.a.createElement("input",{type:"checkbox",checked:e.completed,onChange:function(){return e.handleChange(e.id)},style:m.completedStyle,className:"input"}),o.a.createElement("p",{style:e.completed?m.completedStyle:m.title},e.title),o.a.createElement("button",{onClick:function(){return e.handleDelete(e.id)},className:"button"},"Del"))},h=function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"To Do App"),o.a.createElement("p",null,"Add, Edit or Delete a Todo Item."))},f=n(8),v=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={title:"",error:null},e.onChangeHandler=function(t){e.setState(Object(f.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){if(t.preventDefault(),""===e.state.title)return e.setState({error:"must not to be empty"});e.setState({error:null}),e.props.addTodo(e.state.title),e.setState({title:""})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state.error&&o.a.createElement("p",{style:{color:"red"}},this.state.error);return o.a.createElement(o.a.Fragment,null,e,o.a.createElement("form",{onSubmit:this.handleSubmit,className:"form"},o.a.createElement("input",{type:"text",name:"title",placeholder:"Add todo",onChange:this.onChangeHandler,value:this.state.title,className:"input-text"}),o.a.createElement("button",{type:"submit",className:"input-submit"},"hinzuf\xfcgen")))}}]),n}(a.Component),y=(n(6),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={todos:[{id:1,title:"React lernen",completed:!1},{id:2,title:"JavaScript auffrischen (Klassen, usw.)",completed:!1},{id:3,title:"Props verstehen",completed:!1}]},e.onChangeCheckBox=function(t){var n=e.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}));e.setState({todos:n})},e.onDelete=function(t){var n=e.state.todos.filter((function(e){return e.id!==t}));e.setState({todos:n})},e.handleAddTodo=function(t){var n=e.state.todos.length+1;console.log(n);var a={id:n,title:t,completed:!1};e.setState({todos:[].concat(Object(c.a)(e.state.todos),[a])})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"container"},o.a.createElement(h,null),o.a.createElement(v,{addTodo:this.handleAddTodo}),o.a.createElement("ul",{style:{padding:40}},this.state.todos.map((function(t){return o.a.createElement(p,{key:t.id,title:t.title,id:t.id,completed:t.completed,handleChange:e.onChangeCheckBox,handleDelete:e.onDelete})}))))}}]),n}(o.a.Component));var b=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(y,{text:"Mein Text kommt als property"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,n){}},[[10,1,2]]]);
//# sourceMappingURL=main.e4539df8.chunk.js.map