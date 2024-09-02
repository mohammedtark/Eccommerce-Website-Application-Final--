"use strict";(self.webpackChunkFreshCart=self.webpackChunkFreshCart||[]).push([[288],{9288:(Q,_,a)=>{a.r(_),a.d(_,{RegisterComponent:()=>J});var d=a(6814),i=a(95),e=a(4769),c=a(9410),f=a(1120);function h(r,s){1&r&&(e.TgZ(0,"p",21),e._uU(1,"Name is Required"),e.qZA())}function Z(r,s){1&r&&(e.TgZ(0,"p",21),e._uU(1,"Name Min Length 3 "),e.qZA())}function x(r,s){1&r&&(e.TgZ(0,"p",21),e._uU(1," Name Max Length 20 "),e.qZA())}function w(r,s){if(1&r&&(e.TgZ(0,"div",19),e.YNc(1,h,2,0,"p",20),e.YNc(2,Z,2,0,"p",20),e.YNc(3,x,2,0,"p",20),e.qZA()),2&r){const o=e.oxw();let n,t,l;e.xp6(1),e.Q6J("ngIf",null==(n=o.registerForm.get("name"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=o.registerForm.get("name"))?null:t.getError("minlength")),e.xp6(1),e.Q6J("ngIf",null==(l=o.registerForm.get("name"))?null:l.getError("maxlength"))}}function T(r,s){1&r&&(e.TgZ(0,"p",21),e._uU(1,"Email is Required"),e.qZA())}function v(r,s){1&r&&(e.TgZ(0,"p",21),e._uU(1,"Email InValid Format"),e.qZA())}function I(r,s){if(1&r&&(e.TgZ(0,"div",19),e.YNc(1,T,2,0,"p",20),e.YNc(2,v,2,0,"p",20),e.qZA()),2&r){const o=e.oxw();let n,t;e.xp6(1),e.Q6J("ngIf",null==(n=o.registerForm.get("email"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=o.registerForm.get("email"))?null:t.getError("email"))}}function q(r,s){1&r&&(e.TgZ(0,"p",21),e._uU(1,"Password is Required"),e.qZA())}function A(r,s){1&r&&(e.TgZ(0,"p",21),e._uU(1,"Must be Least 6 Chars"),e.qZA())}function P(r,s){if(1&r&&(e.TgZ(0,"div",19),e.YNc(1,q,2,0,"p",20),e.YNc(2,A,2,0,"p",20),e.qZA()),2&r){const o=e.oxw();let n,t;e.xp6(1),e.Q6J("ngIf",null==(n=o.registerForm.get("password"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=o.registerForm.get("password"))?null:t.getError("pattern"))}}function R(r,s){1&r&&(e.TgZ(0,"p",21),e._uU(1,"RePassword is Required"),e.qZA())}function C(r,s){1&r&&(e.TgZ(0,"p",21),e._uU(1,"Password confirmation is incorrect"),e.qZA())}function N(r,s){if(1&r&&(e.TgZ(0,"div",19),e.YNc(1,R,2,0,"p",20),e.YNc(2,C,2,0,"p",20),e.qZA()),2&r){const o=e.oxw();let n,t;e.xp6(1),e.Q6J("ngIf",null==(n=o.registerForm.get("rePassword"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=o.registerForm.get("rePassword"))?null:t.getError("mismatch"))}}function F(r,s){1&r&&(e.TgZ(0,"p",21),e._uU(1,"Phone is Required"),e.qZA())}function E(r,s){1&r&&(e.TgZ(0,"p",21),e._uU(1,"Accept Only Egypt Phone Numbers"),e.qZA())}function b(r,s){if(1&r&&(e.TgZ(0,"div",19),e.YNc(1,F,2,0,"p",20),e.YNc(2,E,2,0,"p",20),e.qZA()),2&r){const o=e.oxw();let n,t;e.xp6(1),e.Q6J("ngIf",null==(n=o.registerForm.get("phone"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=o.registerForm.get("phone"))?null:t.getError("pattern"))}}function U(r,s){1&r&&(e.TgZ(0,"span"),e._UZ(1,"i",22),e.qZA())}function Y(r,s){if(1&r&&(e.TgZ(0,"p",23),e._uU(1),e.qZA()),2&r){const o=e.oxw();e.xp6(1),e.Oqu(o.errMsg)}}let J=(()=>{class r{constructor(o,n){this._AuthService=o,this._Router=n,this.errMsg="",this.isLoading=!1,this.registerForm=new i.cw({name:new i.NI("",[i.kI.required,i.kI.minLength(3),i.kI.maxLength(20)]),email:new i.NI("",[i.kI.required,i.kI.email]),password:new i.NI("",[i.kI.required,i.kI.pattern(/^[a-zA-Z0-9_@]{6,}$/)]),rePassword:new i.NI("",[i.kI.required]),phone:new i.NI("",[i.kI.required,i.kI.pattern(/^01[0125][0-9]{8}$/)])},{validators:this.confirmPasswordValidator()})}confirmPasswordValidator(){return o=>{const n=o.get("password"),t=o.get("rePassword");return t?""===t.value?(t.setErrors({required:!0}),{required:!0}):n&&n.value!==t.value?(t.setErrors({mismatch:!0}),{mismatch:!0}):(t.setErrors(null),null):null}}handleFrom(){const o=this.registerForm.value;this.isLoading=!0,1==this.registerForm.valid&&this._AuthService.register(o).subscribe({next:n=>{"success"==n.message&&(this.isLoading=!1,this._Router.navigate(["/login"]))},error:n=>{this.errMsg=n.error.message,this.isLoading=!1}})}static#e=this.\u0275fac=function(n){return new(n||r)(e.Y36(c.e),e.Y36(f.F0))};static#r=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-register"]],standalone:!0,features:[e.jDz],decls:35,vars:9,consts:[[1,"w-75","mx-auto","shadow","rounded","p-4","my-3","bg-main-light","section-bg"],[1,"my-3","text-white"],[3,"formGroup","ngSubmit"],[1,"form-item"],["for","name",1,"text-white","pb-2"],["formControlName","name","type","text","placeholder","Please Your Name","id","name",1,"form-control"],["class","alert alert-danger p-1 small w-50 mx-auto",4,"ngIf"],["for","email",1,"text-white","pb-2"],["formControlName","email","type","email","placeholder","Please Your Email","id","email",1,"form-control"],["for","password",1,"text-white","pb-2"],["formControlName","password","type","password","placeholder","Please Your Password","id","password",1,"form-control"],["for","rePassword",1,"text-white","pb-2"],["formControlName","rePassword","type","password","placeholder","Please Your RePassword","id","rePassword",1,"form-control"],["for","phone",1,"text-white","pb-2"],["formControlName","phone","type","tel","placeholder","Please Your Phone","id","phone",1,"form-control"],[1,"pt-3"],[1,"main-btn","mt-2",3,"disabled"],[4,"ngIf"],["class","alert alert-danger p-1 w-50 mx-auto mb-0 text-center fs-6",4,"ngIf"],[1,"alert","alert-danger","p-1","small","w-50","mx-auto"],["class","mb-0 text-center fs-6",4,"ngIf"],[1,"mb-0","text-center","fs-6"],[1,"fa","fa-spin","fa-spinner"],[1,"alert","alert-danger","p-1","w-50","mx-auto","mb-0","text-center","fs-6"]],template:function(n,t){if(1&n&&(e.TgZ(0,"section",0)(1,"h1",1),e._uU(2,"Register Now:"),e.qZA(),e.TgZ(3,"form",2),e.NdJ("ngSubmit",function(){return t.handleFrom()}),e.TgZ(4,"div",3)(5,"label",4),e._uU(6,"Name:"),e.qZA(),e._UZ(7,"input",5),e.YNc(8,w,4,3,"div",6),e.qZA(),e.TgZ(9,"div",3)(10,"label",7),e._uU(11,"Email:"),e.qZA(),e._UZ(12,"input",8),e.YNc(13,I,3,2,"div",6),e.qZA(),e.TgZ(14,"div",3)(15,"label",9),e._uU(16,"Password:"),e.qZA(),e._UZ(17,"input",10),e.YNc(18,P,3,2,"div",6),e.qZA(),e.TgZ(19,"div",3)(20,"label",11),e._uU(21,"RePassword:"),e.qZA(),e._UZ(22,"input",12),e.YNc(23,N,3,2,"div",6),e.qZA(),e.TgZ(24,"div",3)(25,"label",13),e._uU(26,"Phone:"),e.qZA(),e._UZ(27,"input",14),e.YNc(28,b,3,2,"div",6),e.qZA(),e.TgZ(29,"div",15)(30,"button",16),e._uU(31," Register "),e.TgZ(32,"span"),e.YNc(33,U,2,0,"span",17),e.qZA()()()(),e.YNc(34,Y,2,1,"p",18),e.qZA()),2&n){let l,p,m,g,u;e.xp6(3),e.Q6J("formGroup",t.registerForm),e.xp6(5),e.Q6J("ngIf",(null==(l=t.registerForm.get("name"))?null:l.errors)&&(null==(l=t.registerForm.get("name"))?null:l.touched)),e.xp6(5),e.Q6J("ngIf",(null==(p=t.registerForm.get("email"))?null:p.errors)&&(null==(p=t.registerForm.get("email"))?null:p.touched)),e.xp6(5),e.Q6J("ngIf",(null==(m=t.registerForm.get("password"))?null:m.errors)&&(null==(m=t.registerForm.get("password"))?null:m.touched)),e.xp6(5),e.Q6J("ngIf",(null==(g=t.registerForm.get("rePassword"))?null:g.errors)&&(null==(g=t.registerForm.get("rePassword"))?null:g.touched)),e.xp6(5),e.Q6J("ngIf",(null==(u=t.registerForm.get("phone"))?null:u.errors)&&(null==(u=t.registerForm.get("phone"))?null:u.touched)),e.xp6(2),e.Q6J("disabled",t.registerForm.invalid),e.xp6(3),e.Q6J("ngIf",t.isLoading),e.xp6(1),e.Q6J("ngIf",t.errMsg)}},dependencies:[d.ez,d.O5,i.UX,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u],styles:[".section-bg[_ngcontent-%COMP%]{background-image:url(IrF.e861cba5b443321f.gif);background-size:cover;background-position:center;background-repeat:no-repeat;border-radius:8px;padding:20px}"]})}return r})()}}]);