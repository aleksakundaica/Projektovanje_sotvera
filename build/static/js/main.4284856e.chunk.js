(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{46:function(e,t,c){},47:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},66:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c(3),s=c.n(n),i=c(24),r=c.n(i),o=(c(46),c(36)),l=c(12),j=(c(47),c(37)),d=c.n(j),h=c(38),m=c.n(h),u=c(19),b=Object(n.createContext)(),O=function(e){var t=e.reducer,c=e.initialState,s=e.children;return Object(a.jsx)(b.Provider,{value:Object(n.useReducer)(t,c),children:s})},g=function(){return Object(n.useContext)(b)},_=c(30),p=(_.a.initializeApp({apiKey:"AIzaSyCL1i-Ox9m66B_EGKYGSxOJg_CEKJIDzPw",authDomain:"clone62-aa29d.firebaseapp.com",projectId:"clone62-aa29d",storageBucket:"clone62-aa29d.appspot.com",messagingSenderId:"104895500021",appId:"1:104895500021:web:dd8632c93c59906e2f7fbc"}).firestore(),_.a.auth());var x=function(){var e=g(),t=Object(l.a)(e,2),c=t[0],n=c.basket,s=c.user;return t[1],Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)(u.b,{to:"/",children:Object(a.jsx)("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png",alt:""})}),Object(a.jsxs)("div",{className:"header__search",children:[Object(a.jsx)("input",{type:"text",className:"header__searchInput"}),Object(a.jsx)(d.a,{className:"header__searchIcon"})]}),Object(a.jsxs)("div",{className:"header__nav",children:[Object(a.jsx)(u.b,{to:!s&&"/login",children:Object(a.jsxs)("div",{onClick:function(){s&&(p.signOut(),console.log("User is sign out: ",s.email))},className:"header__option",children:[Object(a.jsxs)("span",{className:"header__optionLineOne",children:["Hello ",s?s.email:"Guest"]}),Object(a.jsx)("span",{className:"header__optionLineTwo",children:s?"Sign Out":"Sign In"})]})}),Object(a.jsxs)("div",{className:"header__option",children:[Object(a.jsx)("span",{className:"header__optionLineOne",children:"Returns"}),Object(a.jsx)("span",{className:"header__optionLineTwo",children:"& Orders"})]}),Object(a.jsxs)("div",{className:"header__option",children:[Object(a.jsx)("span",{className:"header__optionLineOne",children:"Your"}),Object(a.jsx)("span",{className:"header__optionLineTwo",children:"Prime"})]}),Object(a.jsx)(u.b,{to:"/checkout",children:Object(a.jsxs)("div",{className:"header__optionBasket",children:[Object(a.jsx)(m.a,{}),Object(a.jsx)("span",{className:"header__optionLineTwo header__basketCount",children:null===n||void 0===n?void 0:n.length})]})})]})]})};c(59),c(60),c(61);var v=function(e){var t=e.id,c=e.title,n=e.image,s=e.price,i=e.rating,r=g(),o=Object(l.a)(r,2),j=(o[0].basket,o[1]);return Object(a.jsxs)("div",{className:"product",children:[Object(a.jsxs)("div",{className:"product__info",children:[Object(a.jsx)("p",{children:c}),Object(a.jsxs)("p",{className:"product__price",children:[Object(a.jsx)("small",{children:"$"}),Object(a.jsx)("strong",{children:s})]}),Object(a.jsx)("div",{className:"product__rating",children:Array(i).fill().map((function(e,t){return Object(a.jsx)("p",{children:"\u2b50"})}))})]}),Object(a.jsx)("img",{src:n,alt:""}),Object(a.jsx)("button",{onClick:function(){j({type:"ADD_TO_BASKET",item:{id:t,title:c,image:n,price:s,rating:i}})},children:"Add to basket"})]})};var f=function(){return Object(a.jsx)("div",{className:"home",children:Object(a.jsxs)("div",{className:"home__container",children:[Object(a.jsx)("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:""}),Object(a.jsxs)("div",{className:"home__row",children:[Object(a.jsx)(v,{id:"12321341",title:"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",price:11.96,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"}),Object(a.jsx)(v,{id:"49538094",title:"Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",price:239,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"})]}),Object(a.jsxs)("div",{className:"home__row",children:[Object(a.jsx)(v,{id:"4903850",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",price:199.99,rating:3,image:"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"}),Object(a.jsx)(v,{id:"23445930",title:"Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",price:98.99,rating:5,image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"}),Object(a.jsx)(v,{id:"3254354345",title:"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",price:598.99,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"})]}),Object(a.jsx)("div",{className:"home__row",children:Object(a.jsx)(v,{id:"90829332",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",price:1094.98,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"})})]})})},N=c(9);c(62),c(63);var S=function(e){var t=e.id,c=e.image,n=e.title,s=e.rating,i=e.price,r=(e.hideButton,g()),o=Object(l.a)(r,2),j=(o[0].basket,o[1]);return Object(a.jsxs)("div",{className:"checkoutItem",children:[Object(a.jsx)("img",{src:c,alt:"",className:"checkoutItem__image"}),Object(a.jsxs)("div",{className:"checkoutItem__info",children:[Object(a.jsx)("div",{className:"checkoutItem__title",children:n}),Object(a.jsxs)("p",{className:"checkoutItem__price",children:[Object(a.jsx)("small",{children:"$"}),Object(a.jsx)("strong",{children:i})]}),Object(a.jsx)("div",{className:"checkoutItem__rating",children:Array(s).fill().map((function(e,t){return Object(a.jsx)("p",{children:"\u2b50"})}))}),Object(a.jsx)("button",{onClick:function(){j({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove item"})]})]})},k=(c(64),c(39)),C=c.n(k),A=c(31),E=c(21),I=function(e){var t=0;return e.forEach((function(e){t+=e.price})),console.log("Vrednost",t),t},w=function(e,t){switch(t.type){case"ADD_TO_BASKET":return Object(E.a)(Object(E.a)({},e),{},{basket:[].concat(Object(A.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var c=e.basket.findIndex((function(e){return e.id===t.id}));console.log("Remove: ",t);var a=Object(A.a)(e.basket);return c>=0?a.splice(c,1):console.log("Cant remove produc (id: ".concat(t.id,"))")),Object(E.a)(Object(E.a)({},e),{},{basket:a});case"SET_USER":return Object(E.a)(Object(E.a)({},e),{},{user:t.user});default:return e}};var y=function(){var e=g(),t=Object(l.a)(e,2),c=t[0].basket;return t[1],console.log("Vrednost 2",I(c)),console.log(c),Object(a.jsxs)("div",{className:"subtotal",children:[Object(a.jsx)(C.a,{renderText:function(e){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("p",{children:["Subtotal (",c.length," items): ",Object(a.jsx)("strong",{children:e})]}),Object(a.jsxs)("small",{className:"subtotal__gift",children:[Object(a.jsx)("input",{type:"checkbox"})," This order contains a gift"]})]})},decimalScale:2,value:I(c),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(a.jsx)("button",{children:"Proceed to Checkout"})]})};var B=function(){var e=g(),t=Object(l.a)(e,2),c=t[0].basket;return t[1],Object(a.jsxs)("div",{className:"checkout",children:[Object(a.jsxs)("div",{className:"checkout__left",children:[Object(a.jsx)("img",{className:"checkout__ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),Object(a.jsx)("h2",{className:"checkout__title",children:"Your shopping Basket"}),c.map((function(e){return Object(a.jsx)(S,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]}),Object(a.jsx)("div",{className:"checkout__right",children:Object(a.jsx)(y,{})})]})};c(66);var L=function(){var e=Object(N.f)(),t=Object(n.useState)(""),c=Object(l.a)(t,2),s=c[0],i=c[1],r=Object(n.useState)(""),o=Object(l.a)(r,2),j=o[0],d=o[1];return Object(a.jsxs)("div",{className:"login",children:[Object(a.jsx)(u.b,{to:"/",children:Object(a.jsx)("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",alt:""})}),Object(a.jsxs)("div",{className:"login__container",children:[Object(a.jsx)("h1",{children:"Sign In"}),Object(a.jsxs)("form",{action:"",children:[Object(a.jsx)("h5",{children:"Email"}),Object(a.jsx)("input",{type:"text",value:s,onChange:function(e){return i(e.target.value)}}),Object(a.jsx)("h5",{children:"Password"}),Object(a.jsx)("input",{type:"password",value:j,onChange:function(e){return d(e.target.value)}}),Object(a.jsx)("button",{className:"login__signInButton",onClick:function(t){t.preventDefault(),p.signInWithEmailAndPassword(s,j).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},type:"submit",children:"Sign In"})]}),Object(a.jsx)("p",{children:"By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."}),Object(a.jsx)("button",{className:"login__registerButton",onClick:function(t){t.preventDefault(),p.createUserWithEmailAndPassword(s,j).then((function(t){console.log(t),t&&e.push("/")})).catch((function(e){return alert(e.message)}))},children:"Create Amazon accont"})]})]})};var T=function(){var e=g(),t=Object(l.a)(e,2);Object(o.a)(t[0]);var c=t[1];return Object(n.useEffect)((function(){p.onAuthStateChanged((function(e){c(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(a.jsx)(u.a,{children:Object(a.jsx)("div",{className:"app",children:Object(a.jsxs)(N.c,{children:[Object(a.jsx)(N.a,{path:"/login",children:Object(a.jsx)(L,{})}),Object(a.jsxs)(N.a,{path:"/checkout",children:[Object(a.jsx)(x,{}),Object(a.jsx)(B,{})]}),Object(a.jsxs)(N.a,{path:"/",children:[Object(a.jsx)(x,{}),Object(a.jsx)(f,{})]})]})})})},z=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,80)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(O,{initialState:{basket:[],user:null},reducer:w,children:Object(a.jsx)(T,{})})}),document.getElementById("root")),z()}},[[68,1,2]]]);
//# sourceMappingURL=main.4284856e.chunk.js.map