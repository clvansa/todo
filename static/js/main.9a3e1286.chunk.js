(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{17:function(e,t,n){},27:function(e,t,n){e.exports=n.p+"static/media/3227392.ffaeb2b9.jpg"},28:function(e,t,n){e.exports={Footer:"Footer_Footer__37hEc"}},30:function(e,t,n){e.exports=n(59)},35:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(2),l=n.n(i),r=(n(35),n(29)),s=n(7),c=n(8),d=n(10),u=n(9),m=n(4);var p=function(e){return o.a.createElement("select",{name:"Priority",className:"priority",defaultValue:"DEFAULT",onChange:function(t){return e.onChangeHandler(t.target.value)}},o.a.createElement("option",{value:"DEFAULT",disabled:!0},"select priority"),o.a.createElement("option",{value:"low"},"low"),o.a.createElement("option",{value:"middle"},"middle"),o.a.createElement("option",{value:"high"},"high"))},h={title:{display:"inline-block",minWidth:500,textAlign:"left"},completedStyle:{fontStyle:"italic",color:"#d35e0f",opacity:.4,textDecoration:"line-through",display:"flex",minWidth:500,flex:1}},g=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={active:!1,priority:"",titlePriotiry:{}},e.handleChange=function(t){return e.setState({priority:t}),"low"===t?e.setState({titlePriotiry:{opacity:.3}}):"middle"===t?e.setState({titlePriotiry:{opacity:1}}):"high"===t?e.setState({titlePriotiry:{opacity:1,fontWeight:700}}):void 0},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement(m.b,{key:this.props.index,draggableId:this.props.index+"",index:this.props.index},(function(t){return o.a.createElement("div",Object.assign({ref:t.innerRef},t.draggableProps,t.dragHandleProps),o.a.createElement("li",{className:e.state.active?"todo-item active":"todo-item",style:e.state.titlePriotiry,onTransitionEnd:function(){return e.props.handleDelete(e.props.id)}},o.a.createElement("input",{type:"checkbox",checked:e.props.completed,onChange:function(){return e.props.handleChange(e.props.id)},className:"input"}),o.a.createElement("p",{style:e.props.completed?h.completedStyle:h.title},"high"===e.state.priority&&o.a.createElement("span",{title:"important Todo",style:(e.state.titlePriotiry,{color:"red"})},"! "),e.props.title),o.a.createElement(p,{onChangeHandler:e.handleChange}),o.a.createElement("button",{onClick:function(){return e.setState({active:!0})},className:"button"},"del")))}))}}]),n}(a.Component),y=n(15),f=n(27),v=n.n(f),E=function(e){var t={h1:{textAlign:"center",color:"gray",marginBottom:e.timeGetBusy?10:20}};return o.a.createElement("div",null,o.a.createElement("img",{src:v.a,alt:"todoIcon",style:{width:250,margin:"auto",display:"block"}}),o.a.createElement("h1",{style:t.h1},"To Do App"),e.timeGetBusy&&o.a.createElement("h2",{style:Object(y.a)(Object(y.a)({},t.h1),{},{marginBottom:"30px"})},"Time to get busy!"),o.a.createElement("p",{style:{padding:"20px 0"}},"Add, Edit or Delete a Todo Item."))},b=n(14);var x=function(e){var t=Object(a.useState)(""),n=Object(b.a)(t,2),i=n[0],l=n[1],r=Object(a.useState)(null),s=Object(b.a)(r,2),c=s[0],d=s[1];return o.a.createElement("div",null,c&&o.a.createElement("p",{style:{color:"red",padding:"20px 0"}},c),o.a.createElement("form",{onSubmit:function(t){return t.preventDefault(),""===i?d("must not to be empty"):i.length>=25?d("must not to be more 25 Character"):i.includes("@")?d("Please don't use @ in your Todos"):(d(null),e.addTodo(i),void l(""))},className:"form"},o.a.createElement("input",{type:"text",name:"title",placeholder:"Dein ToDo muss zwischen 3 und 25 Zeichen lang sein!",onChange:function(e){l(e.target.value)},value:i,className:"input-text",minLength:"3",style:{outline:c&&"1px solid red",color:i.length<3||i.length>25?"red":"green"},disabled:e.timeGetBusy}),o.a.createElement("button",{type:"submit",className:"input-submit",disabled:e.timeGetBusy,style:e.timeGetBusy?{backgroundColor:"#eee"}:null},"hinzuf\xfcgen")))},B=(n(17),n(5)),S=n.n(B),k=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={todos:[{title:"test",completd:!1,_id:2}],isLoading:!1,timeGetBusy:!1},e.onChangeCheckBox=function(t){S.a.put("https://localhost:5000/todo/".concat(t));var n=e.state.todos.map((function(e){return e._id===t&&(e.completed=!e.completed),e}));e.setState({todos:n})},e.onDelete=function(t){S.a.delete("https://localhost:5000/todo/".concat(t)).then((function(){var n=e.state.todos.filter((function(e){return e._id!==t}));e.setState({todos:n})})).catch((function(e){console.log(e)}))},e.handleAddTodo=function(t){e.setState({isLoading:!0});var n=t;S.a.post("https://localhost:5000/todo",{title:n}).then((function(t){e.setState({todos:[].concat(Object(r.a)(e.state.todos),[t.data]),isLoading:!1})})).catch((function(e){console.log(e)}))},e.onDragEnd=function(t){var n=t.destination,a=t.source,o=t.reason;if(n&&"CANCEL"!==o&&(n.droppableId!==a.droppableId||n.index!==a.index)){var i=Object.assign([],e.state.todos),l=e.state.todos[a.index];i.splice(a.index,1),i.splice(n.index,0,l),e.setState({todos:i})}},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),S.a.get("https://localhost:5000/todo").then((function(t){e.setState({todos:t.data,isLoading:!1})})).catch((function(e){console.log(e)}))}},{key:"componentDidUpdate",value:function(){this.state.todos.length>=10&&!1===this.state.timeGetBusy?this.setState({timeGetBusy:!0}):this.state.todos.length<10&&!0===this.state.timeGetBusy&&this.setState({timeGetBusy:!1})}},{key:"componentWillUnmount",value:function(){console.log("deleted")}},{key:"render",value:function(){var e=this,t=this.state.todos.filter((function(e){return e.completed}));return o.a.createElement("div",{className:"container",style:this.state.isLoading?{opacity:"0.3"}:null},o.a.createElement(E,{timeGetBusy:this.state.timeGetBusy}),o.a.createElement(x,{addTodo:this.handleAddTodo,timeGetBusy:this.state.timeGetBusy}),this.state.isLoading?o.a.createElement("p",null,"Bitte Warten"):null,o.a.createElement("span",{style:{color:"green",fontSize:12}},"Todo completd: ",t.length),o.a.createElement(m.a,{onDragEnd:this.onDragEnd},o.a.createElement("ul",{style:{padding:40}},o.a.createElement(m.c,{droppableId:"dp1"},(function(t){return o.a.createElement("div",Object.assign({ref:t.innerRef},t.droppableProps),e.state.todos.map((function(t,n){return o.a.createElement(g,{key:t._id,title:t.title,id:t._id,index:n,completed:t.completed,handleChange:e.onChangeCheckBox,handleDelete:e.onDelete})})),t.placeholder)})))))}}]),n}(o.a.Component),C=n(28),j=n.n(C);var w=function(){return o.a.createElement("footer",{className:j.a.Footer},o.a.createElement("h3",null,"Bildernachweis"),o.a.createElement("a",{href:"https://google.com",target:"_blank"},"Data vector created by stories - www.google.com"))};var D=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(k,{text:"Mein Text kommt als property"}),o.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.9a3e1286.chunk.js.map