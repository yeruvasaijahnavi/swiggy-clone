import{a as T}from"./chunk-K4TMOYA6.js";import{a as w}from"./chunk-PBY72EBU.js";import{A as l,D as d,F as s,H as i,I as o,J as c,M as h,N as _,O as f,P as F,R as m,S,_ as I,ha as y,ia as C,la as b,p as g,ra as E,t as p,u,y as x,z as a}from"./chunk-6M7R3YRE.js";function k(t,v){t&1&&(i(0,"div",4),c(1,"img",5),i(2,"p",6),m(3," No favorite restaurants yet! "),o(),i(4,"p",7),m(5,"You can go to the home page to add favorites!"),o()())}function L(t,v){if(t&1){let e=h();i(0,"div",10),c(1,"img",11),i(2,"div",12)(3,"h3",13),m(4),o(),i(5,"button",14),_("click",function(){let n=p(e).$implicit,j=f(2);return u(j.removeFromFavorites(n))}),c(6,"i",15),o()()()}if(t&2){let e=v.$implicit;a(),F("alt",e.name),s("src",e.imageUrl,x),a(3),S(e.name)}}function O(t,v){if(t&1&&(i(0,"div",8),d(1,L,7,3,"div",9),o()),t&2){let e=f();a(),s("ngForOf",e.favorites)}}var U=(()=>{class t{constructor(e,r,n){this.favoritesService=e,this.authService=r,this.router=n,this.favorites=[],this.isLoggedIn=!1}ngOnInit(){this.isLoggedIn=this.authService.isLoggedIn(),this.isLoggedIn?this.favorites=this.favoritesService.getFavorites():(alert("You need to login first before you can view favorites."),this.router.navigate(["/login"]))}removeFromFavorites(e){this.favoritesService.removeFavorite(e),this.favorites=this.favoritesService.getFavorites()}static{this.\u0275fac=function(r){return new(r||t)(l(T),l(w),l(E))}}static{this.\u0275cmp=g({type:t,selectors:[["app-favorites"]],standalone:!0,features:[I],decls:5,vars:2,consts:[[1,"mx-24","min-h-[66vh]"],[1,"text-3xl","font-bold","my-8"],["class","text-center flex flex-col items-center",4,"ngIf"],["class","grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",4,"ngIf"],[1,"text-center","flex","flex-col","items-center"],["src","assets/images/empty.png","alt","Cooking",1,"mx-auto"],[1,"text-gray-500","font-semibold","text-xl"],[1,""],[1,"grid","grid-cols-1","md:grid-cols-2","lg:grid-cols-4","gap-4"],["class","rounded-lg p-4 text-center",4,"ngFor","ngForOf"],[1,"rounded-lg","p-4","text-center"],[1,"rounded-md","mb-2",3,"src","alt"],[1,"mx-3","flex","justify-between","items-center"],[1,"text-lg","font-semibold"],[1,"mt-2","text-orange-500","hover:text-orange-100",3,"click"],[1,"fas","fa-heart"]],template:function(r,n){r&1&&(i(0,"div",0)(1,"h2",1),m(2,"Your Favorite Restaurants"),o(),d(3,k,6,0,"div",2)(4,O,2,1,"div",3),o()),r&2&&(a(3),s("ngIf",n.favorites.length===0),a(),s("ngIf",n.favorites.length>0))},dependencies:[b,y,C]})}}return t})();export{U as FavoritesComponent};
