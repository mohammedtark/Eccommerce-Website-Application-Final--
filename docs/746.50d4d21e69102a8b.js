"use strict";(self.webpackChunkFreshCart=self.webpackChunkFreshCart||[]).push([[746],{5746:(P,p,o)=>{o.r(p),o.d(p,{ProductsComponent:()=>L});var _=o(6814),u=o(1120),C=o(8129),a=o(6472),l=o(530),s=o(95),t=o(4769),d=o(0),f=o(6286),m=o(2425),M=o(6968);function O(r,g){if(1&r){const n=t.EpF();t.TgZ(0,"i",25),t.NdJ("click",function(){t.CHM(n);const i=t.oxw().$implicit,c=t.oxw(2);return t.KtG(c.addFav(i._id))}),t.qZA()}}function x(r,g){if(1&r){const n=t.EpF();t.TgZ(0,"i",26),t.NdJ("click",function(){t.CHM(n);const i=t.oxw().$implicit,c=t.oxw(2);return t.KtG(c.removeFAV(i._id))}),t.qZA()}}function v(r,g){if(1&r&&t._UZ(0,"i",27),2&r){const n=g.$implicit,e=t.oxw().$implicit;t.ekj("rating-color",e.ratingsAverage>=n)}}const b=function(r){return["/productdeteils",r]},E=function(){return[1,2,3,4,5]};function T(r,g){if(1&r){const n=t.EpF();t.TgZ(0,"div",9)(1,"div",10),t.YNc(2,O,1,0,"i",11),t.YNc(3,x,1,0,"i",12),t.TgZ(4,"header",13),t._UZ(5,"img",14),t.TgZ(6,"h3",15),t._uU(7),t.ALo(8,"cuttext"),t.qZA(),t.TgZ(9,"h4",16),t._uU(10),t.qZA(),t.TgZ(11,"div",17)(12,"span",18),t._uU(13),t.qZA(),t.TgZ(14,"span")(15,"p",19),t.YNc(16,v,1,2,"i",20),t.TgZ(17,"span",21),t._uU(18),t.qZA()()()()(),t.TgZ(19,"footer",22)(20,"button",23,24),t.NdJ("click",function(){const c=t.CHM(n).$implicit,h=t.MAs(21),U=t.oxw(2);return t.KtG(U.addProduct(c._id,h))}),t._uU(22,"+Add"),t.qZA()()()()}if(2&r){const n=g.$implicit,e=t.oxw(2);t.xp6(2),t.Q6J("ngIf",!e.wishListData.includes(n._id)),t.xp6(1),t.Q6J("ngIf",e.wishListData.includes(n._id)),t.xp6(1),t.Q6J("routerLink",t.VKq(14,b,n._id)),t.xp6(1),t.Q6J("src",n.imageCover,t.LSH)("title",n.title)("alt",n.title),t.xp6(2),t.Oqu(t.xi3(8,11,n.title,2)),t.xp6(3),t.Oqu(n.category.name),t.xp6(3),t.hij("",n.price," EGP"),t.xp6(3),t.Q6J("ngForOf",t.DdM(16,E)),t.xp6(2),t.Oqu(n.ratingsAverage)}}const A=function(r,g,n){return{id:"productPaginate",itemsPerPage:r,currentPage:g,totalItems:n}};function D(r,g){if(1&r){const n=t.EpF();t.TgZ(0,"section",1)(1,"h2",2),t._uU(2,"All Products"),t.qZA(),t.TgZ(3,"div",3)(4,"input",4),t.NdJ("ngModelChange",function(i){t.CHM(n);const c=t.oxw();return t.KtG(c.term=i)}),t.qZA()(),t.TgZ(5,"div",5),t.YNc(6,T,23,17,"div",6),t.ALo(7,"paginate"),t.ALo(8,"search"),t.qZA(),t.TgZ(9,"div",7)(10,"pagination-controls",8),t.NdJ("pageChange",function(i){t.CHM(n);const c=t.oxw();return t.KtG(c.pageChanged(i))})("pageBoundsCorrection",function(i){t.CHM(n);const c=t.oxw();return t.KtG(c.pageChanged(i))}),t.qZA()()()}if(2&r){const n=t.oxw();t.xp6(4),t.Q6J("ngModel",n.term),t.xp6(2),t.Q6J("ngForOf",t.xi3(7,6,t.xi3(8,9,n.products,n.term),t.kEZ(12,A,n.pageSize,n.currentPage,n.total))),t.xp6(4),t.Q6J("maxSize",9)("directionLinks",!0)("autoHide",!0)("responsive",!0)}}let L=(()=>{class r{constructor(n,e,i,c,h){this._ProductService=n,this._Renderer2=e,this._CartService=i,this._ToastrService=c,this._WhishlistService=h,this.products=[],this.wishListData=[],this.term="",this.pageSize=0,this.currentPage=1,this.total=0}ngOnInit(){this._ProductService.getProducts().subscribe({next:n=>{console.log("Product",n.data),this.products=n.data,this.pageSize=n.metadata.limit,this.currentPage=n.metadata.currentPage,this.total=n.results}})}addProduct(n,e){this._Renderer2.setAttribute(e,"disabled","true"),this._CartService.AddToCart(n).subscribe({next:i=>{console.log("hi"),console.log(i.message),this._ToastrService.success("It has been successfully added. \u{1f6fa}"),this._Renderer2.removeAttribute(e,"disabled"),this._CartService.cartNumber.next(i.numOfCartItems)},error:i=>{this._Renderer2.removeAttribute(e,"disabled")}})}pageChanged(n){this._ProductService.getProducts(n).subscribe({next:e=>{console.log("Product",e.data),this.products=e.data,this.pageSize=e.metadata.limit,this.currentPage=e.metadata.currentPage,this.total=e.results}})}addFav(n){this._WhishlistService.addToWhishlist(n).subscribe({next:e=>{this._ToastrService.success(e.message),this.wishListData=e.data}})}removeFAV(n){this._WhishlistService.RemoveWhishlist(n).subscribe({next:e=>{this._ToastrService.success(e.message),this.wishListData=e.data}})}static#t=this.\u0275fac=function(e){return new(e||r)(t.Y36(d.M),t.Y36(t.Qsj),t.Y36(f.N),t.Y36(m._W),t.Y36(M.m))};static#n=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-products"]],standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","py-4",4,"ngIf"],[1,"py-4"],[1,"text-main","text-center","pb-3","fw-bold"],[1,"pb-4"],["type","text","placeholder","Search...",1,"form-control","w-50","mx-auto","form-control-sm","my-3",3,"ngModel","ngModelChange"],[1,"row","g-4","justify-content-center"],["class","col-sm-6 col-md-4 col-lg-3 col-xl-2",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-center","mt-4"],["id","productPaginate","previousLabel","Previous","nextLabel","Next","screenReaderPaginationLabel","Pagination","screenReaderPageLabel","page","screenReaderCurrentLabel","You're on page",3,"maxSize","directionLinks","autoHide","responsive","pageChange","pageBoundsCorrection"],[1,"col-sm-6","col-md-4","col-lg-3","col-xl-2"],[1,"product","h-100","rounded"],["class","fa-regular fa-heart heart",3,"click",4,"ngIf"],["class","fa-solid fa-heart heart",3,"click",4,"ngIf"],["role","button",3,"routerLink"],[1,"w-100",3,"src","title","alt"],[1,"small","main","fasa3"],[1,"h6","text-main1","fasa"],[1,"d-flex","align-items-center","justify-content-between","small"],[1,"fasa3"],[1,"mb-0"],["class","fas fa-star",3,"rating-color",4,"ngFor","ngForOf"],[1,"text-muted"],[1,"text-center","p-4"],[1,"main-btn","w-100","py-2",3,"click"],["btnAdd",""],[1,"fa-regular","fa-heart","heart",3,"click"],[1,"fa-solid","fa-heart","heart",3,"click"],[1,"fas","fa-star"]],template:function(e,i){1&e&&t.YNc(0,D,11,16,"section",0),2&e&&t.Q6J("ngIf",i.products.length>0)},dependencies:[_.ez,_.sg,_.O5,u.rH,C.r,a.JX,a._s,a.LS,l.C,s.u5,s.Fj,s.JJ,s.On],styles:[".product[_ngcontent-%COMP%]{overflow:hidden}.product[_ngcontent-%COMP%]:hover   .main-btn[_ngcontent-%COMP%]{transform:translateY(0);opacity:1}.product[_ngcontent-%COMP%]   .main-btn[_ngcontent-%COMP%]{transform:translateY(150%);opacity:0;transition:.4s}.product[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{color:#4fa74f}.product[_ngcontent-%COMP%]:hover{box-shadow:0 0 10px #11bd11e6}.fasa[_ngcontent-%COMP%]{font-size:1rem;font-weight:600}.fasa3[_ngcontent-%COMP%]{font-weight:600}.test[_ngcontent-%COMP%]{color:#212529;color:RGB(33,37,41);font-size:20px;font-weight:600}.pb-4[_ngcontent-%COMP%]{display:flex;justify-content:center;padding-bottom:1rem}.pb-4[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{width:50%;margin:1rem auto;padding:.5rem 1rem;border:1px solid #ccc;border-radius:4px;transition:all .3s ease}.pb-4[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus{border-color:#007bff;box-shadow:0 0 8px #007bff33;outline:none}.pb-4[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder{color:#999}.pb-4[_ngcontent-%COMP%]{background-color:#f0f4f8;padding:1rem 0;display:flex;justify-content:center;align-items:center}.pb-4[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:75%;padding:.5rem;font-size:.9rem;color:#333;background-color:#fff;border:1px solid #ddd;border-radius:4px;transition:background-color .3s,border-color .3s}.pb-4[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border-color:#c4c4c4;outline:none}.pb-4[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover{background-color:#e0e7ef}.pb-4[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:#666}.d-flex[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:1rem}pagination-controls[_ngcontent-%COMP%]   .ngx-pagination[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]{display:flex;padding:0;list-style:none;border-radius:.5rem;background-color:#fff}pagination-controls[_ngcontent-%COMP%]   .ngx-pagination[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   li.current[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background-color:#ff6f61;color:#fff;border-color:#ff6f61;font-weight:700}pagination-controls[_ngcontent-%COMP%]   .ngx-pagination[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;padding:.5rem .75rem;margin:0 .125rem;border:1px solid #ddd;border-radius:.5rem;color:#343a40;text-decoration:none;background-color:#f1f1f1;transition:background-color .3s ease,color .3s ease,transform .2s}pagination-controls[_ngcontent-%COMP%]   .ngx-pagination[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#6c757d;color:#fff;border-color:#6c757d;transform:translateY(-2px)}pagination-controls[_ngcontent-%COMP%]   .ngx-pagination[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-previous[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], pagination-controls[_ngcontent-%COMP%]   .ngx-pagination[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-next[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#343a40}pagination-controls[_ngcontent-%COMP%]   .ngx-pagination[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-previous[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, pagination-controls[_ngcontent-%COMP%]   .ngx-pagination[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-next[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff;background-color:#007bff;border-color:#007bff}"]})}return r})()},6286:(P,p,o)=>{o.d(p,{N:()=>a});var _=o(5619),u=o(4769),C=o(9862);let a=(()=>{class l{constructor(t){this._HttpClient=t,this.baseUrl="https://ecommerce.routemisr.com/api/v1/",this.cartNumber=new _.X(0)}AddToCart(t){return this._HttpClient.post(this.baseUrl+"cart",{productId:t})}getCartUser(){return this._HttpClient.get(this.baseUrl+"cart")}UpdataCartProductQuantity(t,d){return this._HttpClient.put(this.baseUrl+`cart/${t}`,{count:d})}removeItem(t){return this._HttpClient.delete(this.baseUrl+`cart/${t}`)}ClearCart(){return this._HttpClient.delete(this.baseUrl+"cart")}CheckOut(t,d){return this._HttpClient.post(this.baseUrl+`orders/checkout-session/${t}?url=http://localhost:4200`,{shippingAddress:d})}static#t=this.\u0275fac=function(d){return new(d||l)(u.LFG(C.eN))};static#n=this.\u0275prov=u.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})()},0:(P,p,o)=>{o.d(p,{M:()=>C});var _=o(4769),u=o(9862);let C=(()=>{class a{constructor(s){this._HttpClient=s,this.baseUrl="https://ecommerce.routemisr.com/api/v1/"}getProducts(s=1){return this._HttpClient.get(this.baseUrl+`products?page=${s}`)}getCategories(){return this._HttpClient.get(this.baseUrl+"categories")}getProductDeteils(s){return this._HttpClient.get(this.baseUrl+`products/${s}`)}static#t=this.\u0275fac=function(t){return new(t||a)(_.LFG(u.eN))};static#n=this.\u0275prov=_.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})()}}]);