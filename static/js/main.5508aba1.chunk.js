(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{23:function(e,t,a){e.exports={title:"TodoItem_title__2evFb",completedStyle:"TodoItem_completedStyle__2-pd7"}},30:function(e,t,a){},40:function(e,t,a){e.exports=a.p+"static/media/3227392.ffaeb2b9.jpg"},41:function(e,t,a){e.exports={Footer:"Footer_Footer__37hEc"}},43:function(e,t,a){e.exports=a(71)},48:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(9),i=a.n(l),r=(a(48),a(42)),c=a(18),s=a(19),d=a(21),u=a(20),m=a(13);var p=function(e){return o.a.createElement("select",{name:"Priority",className:"priority",defaultValue:"DEFAULT",onChange:function(t){return e.onChangeHandler(t.target.value)}},o.a.createElement("option",{value:"DEFAULT",disabled:!0},"select priority"),o.a.createElement("option",{value:"low"},"low"),o.a.createElement("option",{value:"middle"},"middle"),o.a.createElement("option",{value:"high"},"high"))},h=a(23),E=a.n(h),g=a(7),y=a(14);var f=function(e){var t={padding:20},a=Object(n.useState)({title:e.location.detailProps}),l=Object(y.a)(a,2),i=l[0];return l[1],i.title?o.a.createElement("div",{style:t},o.a.createElement("h3",null,e.location.detailProps),o.a.createElement("small",null,"du hast den todo mit id : ",e.match.params.id)):o.a.createElement("div",{style:t},o.a.createElement("h3",null,"keine todo zur Zeigen "))},v=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={active:!1,priority:"",titlePriotiry:{}},e.handleChange=function(t){return e.setState({priority:t}),"low"===t?e.setState({titlePriotiry:{opacity:.6}}):"middle"===t?e.setState({titlePriotiry:{opacity:1}}):"high"===t?e.setState({titlePriotiry:{opacity:1,fontWeight:700}}):void 0},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement(m.b,{key:this.props.index,draggableId:this.props.index+"",index:this.props.index},(function(t){return o.a.createElement("div",Object.assign({ref:t.innerRef},t.draggableProps,t.dragHandleProps),o.a.createElement("li",{className:e.state.active?"todo-item active":"todo-item",onTransitionEnd:function(){return e.props.handleDelete(e.props.id)}},o.a.createElement("input",{type:"checkbox",checked:e.props.completed,onChange:function(){return e.props.handleChange(e.props.id)},className:"input"}),o.a.createElement("p",{className:e.props.completed?E.a.completedStyle:E.a.title,style:e.state.titlePriotiry,onClick:e.handleClick},"high"===e.state.priority&&o.a.createElement("span",{title:"important Todo",style:(e.state.titlePriotiry,{color:"red"})},"! "),o.a.createElement(g.b,{to:{pathname:"/todo/".concat(e.props.id),detailProps:e.props.title},style:{textDecoration:"none",color:"inherit"}},e.props.title)),o.a.createElement(p,{onChangeHandler:e.handleChange}),o.a.createElement("button",{onClick:function(){return e.setState({active:!0})},className:"button"},"del")))}))}}]),a}(n.Component),b=a(27),x=a(40),j=a.n(x),k=function(e){var t={h1:{textAlign:"center",color:"gray",marginBottom:e.timeGetBusy?10:20}};return o.a.createElement("div",null,o.a.createElement("img",{src:j.a,alt:"todoIcon",style:{width:250,margin:"auto",display:"block"}}),o.a.createElement("h1",{style:t.h1},"To Do App"),e.timeGetBusy&&o.a.createElement("h2",{style:Object(b.a)(Object(b.a)({},t.h1),{},{marginBottom:"30px"})},"Time to get busy!"),o.a.createElement("p",{style:{padding:"20px 0"}},"Add, Edit or Delete a Todo Item."))};var C=function(e){var t=Object(n.useState)(""),a=Object(y.a)(t,2),l=a[0],i=a[1],r=Object(n.useState)(null),c=Object(y.a)(r,2),s=c[0],d=c[1];return o.a.createElement("div",null,s&&o.a.createElement("p",{style:{color:"red",padding:"20px 0"}},s),o.a.createElement("form",{onSubmit:function(t){return t.preventDefault(),""===l?d("must not to be empty"):l.length>=25?d("must not to be more 25 Character"):l.includes("@")?d("Please don't use @ in your Todos"):(d(null),e.addTodo(l),void i(""))},className:"form"},o.a.createElement("input",{type:"text",name:"title",placeholder:"Dein ToDo muss zwischen 3 und 25 Zeichen lang sein!",onChange:function(e){i(e.target.value)},value:l,className:"input-text",minLength:"3",style:{outline:s&&"1px solid red",color:l.length<3||l.length>25?"red":"green"},disabled:e.timeGetBusy}),o.a.createElement("button",{type:"submit",className:"input-submit",disabled:e.timeGetBusy,style:e.timeGetBusy?{backgroundColor:"#eee"}:null},"hinzuf\xfcgen")))},S=(a(30),a(15)),w=a.n(S),B=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={todos:[{title:"test",completd:!1,_id:2}],isLoading:!1,timeGetBusy:!1},e.onChangeCheckBox=function(t){w.a.put("https://majd-todo.herokuapp.com/todo/".concat(t));var a=e.state.todos.map((function(e){return e._id===t&&(e.completed=!e.completed),e}));e.setState({todos:a})},e.onDelete=function(t){w.a.delete("https://majd-todo.herokuapp.com/todo/".concat(t)).then((function(){var a=e.state.todos.filter((function(e){return e._id!==t}));e.setState({todos:a})})).catch((function(e){console.log(e)}))},e.handleAddTodo=function(t){e.setState({isLoading:!0});var a=t;w.a.post("https://majd-todo.herokuapp.com/todo",{title:a}).then((function(t){e.setState({todos:[].concat(Object(r.a)(e.state.todos),[t.data]),isLoading:!1})})).catch((function(e){console.log(e)}))},e.onDragEnd=function(t){var a=t.destination,n=t.source,o=t.reason;if(a&&"CANCEL"!==o&&(a.droppableId!==n.droppableId||a.index!==n.index)){var l=Object.assign([],e.state.todos),i=e.state.todos[n.index];l.splice(n.index,1),l.splice(a.index,0,i),e.setState({todos:l})}},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),w.a.get("https://majd-todo.herokuapp.com/todo").then((function(t){e.setState({todos:t.data,isLoading:!1})})).catch((function(e){console.log(e)}))}},{key:"componentDidUpdate",value:function(){this.state.todos.length>=10&&!1===this.state.timeGetBusy?this.setState({timeGetBusy:!0}):this.state.todos.length<10&&!0===this.state.timeGetBusy&&this.setState({timeGetBusy:!1})}},{key:"componentWillUnmount",value:function(){console.log("deleted")}},{key:"render",value:function(){var e=this,t=this.state.todos.filter((function(e){return e.completed}));return o.a.createElement("div",{className:"container",style:this.state.isLoading?{opacity:"0.3"}:null},o.a.createElement(k,{timeGetBusy:this.state.timeGetBusy}),o.a.createElement(C,{addTodo:this.handleAddTodo,timeGetBusy:this.state.timeGetBusy}),this.state.isLoading?o.a.createElement("p",null,"Bitte Warten"):null,o.a.createElement("span",{style:{color:"green",fontSize:12}},"Todo completd: ",t.length),o.a.createElement(m.a,{onDragEnd:this.onDragEnd},o.a.createElement("ul",{style:{padding:40}},o.a.createElement(m.c,{droppableId:"dp1"},(function(t){return o.a.createElement("div",Object.assign({ref:t.innerRef},t.droppableProps),e.state.todos.map((function(t,a){return o.a.createElement(v,{key:t._id,title:t.title,id:t._id,index:a,completed:t.completed,handleChange:e.onChangeCheckBox,handleDelete:e.onDelete})})),t.placeholder)})))))}}]),a}(o.a.Component),O=a(41),D=a.n(O);var T=function(e){return o.a.createElement("div",null,o.a.createElement("a",{href:e.website,target:"_blank"},"Data vector created by stories - ",e.website))};var _=function(){var e={margin:10};return o.a.createElement("footer",{className:D.a.Footer},o.a.createElement("h3",null,"Bildernachweis"),o.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},o.a.createElement(g.b,{to:"/",style:e},o.a.createElement("p",null,"Home")),o.a.createElement(g.b,{to:"/help",style:e},o.a.createElement("p",null,"Help")),o.a.createElement(g.b,{to:"google",style:e},o.a.createElement("p",null,"Impressum"))),o.a.createElement(T,{website:"www.google.com"}))},G=a(2);var N=function(){return o.a.createElement("ul",{className:"navbar"},o.a.createElement("h1",{className:"logo"},"Todo"),o.a.createElement(g.b,{to:"/"},o.a.createElement("li",null,"Home")),o.a.createElement(g.b,{to:"/help"},o.a.createElement("li",null,"Help")),o.a.createElement(g.b,{to:"/impressum"},o.a.createElement("li",null,"Impressum")))};var P=function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Help"),o.a.createElement("ul",null,o.a.createElement("li",null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, magni?"),o.a.createElement("li",null,"Dolores voluptate nam facere accusantium ipsum sapiente aliquid quae sint."),o.a.createElement("li",null,"Harum nostrum quaerat vero error voluptatem consectetur, adipisci deleniti molestias!")))};var A=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(g.a,null,o.a.createElement(N,null),o.a.createElement(G.a,{path:"/",exact:!0,component:B}),o.a.createElement(G.a,{path:"/help",component:P}),o.a.createElement(G.a,{path:"/todo/:id",component:f}),o.a.createElement(_,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.5508aba1.chunk.js.map