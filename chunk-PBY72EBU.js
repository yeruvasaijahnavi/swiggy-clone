import{e as s,f as a,h as o,k as n,ma as c,n as l}from"./chunk-6M7R3YRE.js";var d=(()=>{class e{constructor(t){this.http=t,this.isAuthenticated=!1,this.apiUrl="https://6729a2e76d5fa4901b6dc28a.mockapi.io/api/v1/users"}signup(t,r,i){let p={name:t,email:r,password:i};return this.http.post(this.apiUrl,p).pipe(a(u=>!!u),o(()=>s(!1)))}login(t,r){return this.http.get(`${this.apiUrl}?email=${t}&password=${r}`).pipe(a(i=>i.length?(this.isAuthenticated=!0,localStorage.setItem("user",JSON.stringify(i[0])),!0):!1),o(()=>s(!1)))}logout(){this.isAuthenticated=!1,localStorage.removeItem("user")}isLoggedIn(){return this.isAuthenticated||!!localStorage.getItem("user")}getUserName(){let t=localStorage.getItem("user");return t?JSON.parse(t).name:""}static{this.\u0275fac=function(r){return new(r||e)(l(c))}}static{this.\u0275prov=n({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();export{d as a};
