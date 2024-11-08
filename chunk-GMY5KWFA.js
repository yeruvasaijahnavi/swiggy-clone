import{a as V}from"./chunk-F23VNRGV.js";import{a as N}from"./chunk-7QKT2M3A.js";import{a as k}from"./chunk-PBY72EBU.js";import{$ as p,A as c,D as g,F as h,H as i,I as r,M as C,N as _,O as m,Q as y,R as o,S as d,U as I,_ as S,ba as u,ca as w,ha as E,ia as O,ka as T,la as F,p as b,ra as j,t as v,u as x,z as s}from"./chunk-6M7R3YRE.js";function P(n,f){if(n&1){let e=C();i(0,"div",14)(1,"div")(2,"h3",15),o(3),r(),i(4,"p",16),o(5),p(6,"currency"),r()(),i(7,"i",17),_("click",function(){let a=v(e).$implicit,l=m(2);return x(l.removeFromCart(a))}),r()()}if(n&2){let e=f.$implicit;s(3),d(e.name),s(2),I(" Price: ",u(6,3,e.price,"INR","symbol")," x ",e.quantity," ")}}function R(n,f){if(n&1){let e=C();i(0,"div",4),g(1,P,8,7,"div",5),i(2,"div",6)(3,"div",7)(4,"span",8),o(5,"Item Total"),r(),i(6,"span",9),o(7),p(8,"currency"),r()(),i(9,"div",7)(10,"span",10),o(11,"Platform Fee"),r(),i(12,"span"),o(13,"\u20B910"),r()(),i(14,"div",11)(15,"span"),o(16,"TO PAY"),r(),i(17,"span"),o(18),p(19,"currency"),r()(),i(20,"div",12)(21,"button",13),_("click",function(){v(e);let a=m();return x(a.onOrder())}),o(22," Place Order "),r()()()()}if(n&2){let e=m();s(),h("ngForOf",e.cartItems),s(6),d(u(8,3,e.totalCost,"INR","symbol")),s(11),d(u(19,7,e.totalCost+10,"INR","symbol"))}}function Y(n,f){n&1&&(i(0,"p",18),o(1,"Your cart is empty."),r())}var z=(()=>{class n{constructor(e,t,a,l){this.cartService=e,this.orderService=t,this.router=a,this.authService=l,this.cartItems=[],this.totalCost=0}ngOnInit(){this.cartItems=this.cartService.getCartItems(),this.calculateTotalCost()}calculateTotalCost(){this.totalCost=this.cartItems.reduce((e,t)=>e+t.price*t.quantity,0)}removeFromCart(e){this.cartService.removeFromCart(e.id),this.cartItems=this.cartService.getCartItems(),this.calculateTotalCost()}onOrder(){if(!this.authService.isLoggedIn()){alert("You need to login first before you can place an order."),this.router.navigate(["/login"]);return}if(this.cartItems.length===0){alert("Your cart is empty!");return}let e={items:this.cartItems,totalCost:this.totalCost};this.orderService.placeOrder(e).subscribe({next:t=>{console.log("Order placed successfully:",t),this.cartService.resetCart(),this.router.navigate(["/orders"])},error:t=>{console.error("Order failed:",t)},complete:()=>{console.log("Order process completed.")}})}static{this.\u0275fac=function(t){return new(t||n)(c(V),c(N),c(j),c(k))}}static{this.\u0275cmp=b({type:n,selectors:[["app-cart"]],standalone:!0,features:[S],decls:6,vars:2,consts:[["emptyCart",""],[1,"max-w-3xl","my-20","mx-auto","bg-white","shadow-md","rounded-md","p-4"],[1,"text-xl","font-semibold","mb-4"],["class","bg-white rounded-lg shadow-md p-4",4,"ngIf","ngIfElse"],[1,"bg-white","rounded-lg","shadow-md","p-4"],["class","flex justify-between items-center border-b py-2 last:border-b-0",4,"ngFor","ngForOf"],[1,"border-t","pt-4"],[1,"flex","justify-between","mb-2"],[1,"text-gray-800","font-semibold"],[1,"font-semibold"],[1,"text-gray-800"],[1,"flex","justify-between","font-semibold","text-lg"],[1,"mt-4"],[1,"w-full","py-2","bg-orange-500","text-white","rounded","hover:bg-blue-600",3,"click"],[1,"flex","justify-between","items-center","border-b","py-2","last:border-b-0"],[1,"text-lg","font-bold","text-gray-800"],[1,"text-gray-600"],[1,"fa-solid","fa-trash","text-red-500","rounded","px-3","py-1","hover:text-red-600","transition","duration-200",3,"click"],[1,"text-gray-500"]],template:function(t,a){if(t&1&&(i(0,"div",1)(1,"h2",2),o(2,"Your Cart"),r(),g(3,R,23,11,"div",3)(4,Y,2,0,"ng-template",null,0,w),r()),t&2){let l=y(5);s(3),h("ngIf",a.cartItems.length>0)("ngIfElse",l)}},dependencies:[F,E,O,T]})}}return n})();export{z as CartComponent};
