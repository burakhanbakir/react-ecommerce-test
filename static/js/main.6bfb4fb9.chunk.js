(this.webpackJsonpintro=this.webpackJsonpintro||[]).push([[0],{21:function(e,t,a){e.exports=a(36)},36:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(12),o=a.n(c),l=a(6),u=a(7),i=a(9),s=a(8),m=a(37),h=a(48),g=a(49),d=a(38),p=a(39),y=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={categories:[{categoryId:1,categoryName:"Home",categoryDetail:"Biography web page with react"},{categoryId:2,categoryName:"About me",categoryDetail:"I am Burakhan."},{categoryId:3,categoryName:"Projects",categoryDetail:"Projects..."},{categoryId:4,categoryName:"Contact",categoryDetail:"E-Mail: burakhanbakir@gmail.com"}]},e.getCategories=function(){fetch("http://localhost:3000/categories").then((function(e){return e.json()})).then((function(t){return e.setState({categories:t})}))},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getCategories()}},{key:"render",value:function(){var e=this;return r.a.createElement(m.a,null,r.a.createElement("h3",null,"Categories"),r.a.createElement(d.a,null,this.state.categories.map((function(t){return r.a.createElement(p.a,{active:t.categoryName===e.props.currentCaregory,onClick:function(){return e.props.changeCategory(t)},key:t.categoryId},t.categoryName)}))),r.a.createElement("h3",null,this.props.currentCaregory))}}]),a}(n.Component),E=a(40),f=a(41),v=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(m.a,null,r.a.createElement("h3",null,"Products  -  ","Category Name: "+this.props.currentCategory),r.a.createElement(E.a,{bordered:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Product Name"),r.a.createElement("th",null,"Unit Price"),r.a.createElement("th",null,"Quantity Per Unit"),r.a.createElement("th",null,"Units in Stock"),r.a.createElement("th",null))),r.a.createElement("tbody",null,this.props.products.map((function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("th",{scope:"row"},t.id),r.a.createElement("td",null,t.productName),r.a.createElement("td",null,t.unitPrice),r.a.createElement("td",null,t.quantityPerUnit),r.a.createElement("td",null,t.unitsInStock),r.a.createElement("td",null,r.a.createElement(f.a,{onClick:function(){return e.props.addToCart(t)},color:"info"},"add")))})))))}}]),a}(n.Component),b=a(13),C=a(42),O=a(43),j=a(44),k=a(50),w=a(45),P=a(46),N=a(47),I=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).toggle=n.toggle.bind(Object(b.a)(n)),n.state={isOpen:!1},n}return Object(u.a)(a,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(C.a,{color:"light",light:!0,expand:"md"},r.a.createElement(O.a,{href:"/"},"React Test Page v1.0"),r.a.createElement(j.a,{onClick:this.toggle}),r.a.createElement(k.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(w.a,{className:"ml-auto",navbar:!0},r.a.createElement(P.a,null,r.a.createElement(N.a,null)),r.a.createElement(P.a,null,r.a.createElement(N.a,null)),r.a.createElement(P.a,null,r.a.createElement(N.a,{href:"https://github.com/reactstrap/reactstrap"},this.props.cart.length))))))}}]),a}(r.a.Component),S=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={currentCategory:"",products:[],cart:[]},e.changeCategory=function(t){e.setState({currentCategory:t.categoryName}),e.getProducts(t.id)},e.getProducts=function(t){var a="http://localhost:3000/products";t&&(a+="?categoryId="+t),fetch(a).then((function(e){return e.json()})).then((function(t){return e.setState({products:t})}))},e.addToCart=function(t){var a=e.state.cart;a.push({product:t,quantity:1}),e.setState({cart:a})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getProducts()}},{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement(I,{cart:this.state.cart}),r.a.createElement(h.a,null,r.a.createElement(g.a,{xs:"3"},r.a.createElement(y,{currentCategory:this.state.currentCategory,changeCategory:this.changeCategory})),r.a.createElement(g.a,{xs:"9"},r.a.createElement(v,{products:this.state.products,addToCart:this.addToCart,currentCategory:this.state.currentCategory}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(35);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.6bfb4fb9.chunk.js.map