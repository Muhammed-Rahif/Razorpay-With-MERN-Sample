(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(e,n,t){},25:function(e,n,t){},46:function(e,n,t){"use strict";t.r(n);var r=t(1),o=t.n(r),c=t(15),a=t.n(c),i=(t(23),t(6)),s=t(4),u=t.n(s),p=t(16),l=t(18),d=(t(25),t(17)),f=t(5),m=t.n(f),h=function(){return new Promise((function(e,n){m.a.get("/api/product").then((function(n){return e(n.data)})).catch((function(e){return console.error(e)}))}))},g=t(2);var y=function(){var e=Object(r.useState)([]),n=Object(l.a)(e,2),t=n[0],o=n[1];Object(r.useEffect)((function(){function e(){return(e=Object(p.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:n=e.sent,o(n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var c=function(e){(function(e){return new Promise((function(n,t){m.a.post("/api/payment/direct-checkout",e).then((function(e){return n(e.data)})).catch((function(e){return console.error(e)}))}))})(e).then((function(e){console.log({response:e}),a(e)}))},a=function(e){var n={key:"rzp_test_1EOPkPto7Fxrni",amount:100*e.amount,currency:"INR",name:"Muhammed Rahif",description:"Test Transaction with Razorpay payment gateway",image:"https://avatars.githubusercontent.com/u/73386156",order_id:e.id,handler:function(e){console.log(e.razorpay_payment_id),console.log(e.razorpay_order_id),console.log(e.razorpay_signature),alert("Payment success!")},notes:{address:"Razorpay Corporate Office"},theme:{color:"#61dafb"}},t=new window.Razorpay(n);t.on("payment.failed",(function(e){console.log(e.error.code),console.log(e.error.description),console.log(e.error.source),console.log(e.error.step),console.log(e.error.reason),console.log(e.error.metadata.order_id),console.log(e.error.metadata.payment_id),alert(e.error.description)})),t.open()};return Object(g.jsx)("div",{className:"App",children:t.map((function(e,n){return Object(r.createElement)(d.ProductCard,Object(i.a)(Object(i.a)({},e),{},{price:"Rs.".concat(e.price),key:n,onClick:function(n){"A"===n.target.tagName&&c(e)}}))}))})};a.a.render(Object(g.jsx)(o.a.StrictMode,{children:Object(g.jsx)(y,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.2f15c646.chunk.js.map