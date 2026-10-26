import{$ as MD,Cn as fa,Fn as hb,Hn as im,Qn as mb,Zt as Zi,cr as om,ct as Pg,it as OT,jt as Tw,l as BI,lt as Pm,or as nu,qr as xT,w as Fm}from"./chunk-BXp14hLr.js";import{E as Zt}from"./chunk-CtdKxuHA.js";import{Jt as ua,Nt as tn,V as _Z,Wt as yf,c as CP,f as Fx,gt as nP,h as Ile}from"./main-JCJIXXB4.js";import{i as te,n as oe,r as q,t as $}from"./chunk-4-cg1OfJ.js";var F=(()=>{class e{constructor(){this.small=!1,this.shadow=!1,this.dark=!1}static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-back-to-top-button`]],standalone:!1,decls:13,vars:6,consts:[[1,`bd-example`],[3,`small`,`shadow`,`dark`],[1,`row`],[1,`form-check`,`col-2`],[`label`,`Small`,3,`ngModelChange`,`ngModel`],[`label`,`Shadow`,3,`ngModelChange`,`ngModel`],[`label`,`Dark`,3,`ngModelChange`,`ngModel`]],template:function(t,o){t&1&&(Zi(0,`h3`),hb(1,`Interazione con il componente Back to top`),nu(),Zi(2,`div`,0)(3,`p`),hb(4,`Per visualizzare il componente, scorrere la pagina.`),nu(),im(5,`it-back-to-top`,1),Zi(6,`div`,2)(7,`div`,3)(8,`h5`),hb(9,`Opzioni`),nu(),Zi(10,`it-checkbox`,4),xT(),Fm(`ngModelChange`,function(a){return mb(o.small,a)||(o.small=a),a}),nu(),Zi(11,`it-checkbox`,5),xT(),Fm(`ngModelChange`,function(a){return mb(o.shadow,a)||(o.shadow=a),a}),nu(),Zi(12,`it-checkbox`,6),xT(),Fm(`ngModelChange`,function(a){return mb(o.dark,a)||(o.dark=a),a}),nu()()()()),t&2&&(MD(5),om(`small`,o.small)(`shadow`,o.shadow)(`dark`,o.dark),MD(5),Pm(`ngModel`,o.small),OT(),MD(),Pm(`ngModel`,o.shadow),OT(),MD(),Pm(`ngModel`,o.dark),OT())},dependencies:[nP,CP,tn,yf],encapsulation:2,changeDetection:1})}}return e})();var N=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-back-to-top-examples`]],standalone:!1,decls:2,vars:0,consts:[[`html`,`<h3>Interazione con il componente Back to top</h3>

<div class="bd-example">
  <p>Per visualizzare il componente, scorrere la pagina.</p>
  <it-back-to-top [small]="small" [shadow]="shadow" [dark]="dark"> </it-back-to-top>

  <div class="row">
    <div class="form-check col-2">
      <h5>Opzioni</h5>
      <it-checkbox [(ngModel)]="small" label="Small"></it-checkbox>
      <it-checkbox [(ngModel)]="shadow" label="Shadow"></it-checkbox>
      <it-checkbox [(ngModel)]="dark" label="Dark"></it-checkbox>
    </div>
  </div>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-back-to-top-button',
  templateUrl: './back-to-top-button.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class BackToTopButtonComponent {
  small = false;

  shadow = false;

  dark = false;
}`]],template:function(t,o){t&1&&im(0,`it-back-to-top-button`)(1,`it-source-display`,0)},dependencies:[q,F],encapsulation:2,changeDetection:1})}}return e})();var A=[{path:``,component:(()=>{class e{constructor(){this.component=oe.components.find(r=>r.name===`ItBackToTopComponent`)}static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-go-to-top-index`]],standalone:!1,decls:10,vars:2,consts:[[1,`bd-title`],[1,`bd-lead`],[3,`innerHTML`],[`label`,`Esempi`,`active`,`true`,1,`mt-3`],[`label`,`API`,1,`mt-3`],[3,`component`]],template:function(t,o){t&1&&(Zi(0,`h1`,0),hb(1,`Back To Top`),nu(),Zi(2,`p`,1),hb(3,`Consente agli utenti di avere un pulsante con un'azione equivalente al "torna su" nella pagina.`),nu(),im(4,`div`,2),Zi(5,`it-tab-container`)(6,`it-tab-item`,3),im(7,`it-back-to-top-examples`),nu(),Zi(8,`it-tab-item`,4),im(9,`it-api-parameters`,5),nu()()),t&2&&(MD(4),om(`innerHTML`,o.component.description,BI),MD(5),om(`component`,o.component))},dependencies:[$,Ile,Fx,N],encapsulation:2,changeDetection:1})}}return e})()}];var j=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵmod=Pg({type:e})}static{this.ɵinj=fa({imports:[ua.forChild(A),ua]})}}return e})();var ce=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵmod=Pg({type:e})}static{this.ɵinj=fa({imports:[Zt,te,_Z,j]})}}return e})();export{ce as BackToTopModule};