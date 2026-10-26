import{$ as MD,Cn as fa,Dn as g,Fn as hb,Hn as im,Qn as mb,Zt as Zi,cr as om,ct as Pg,it as OT,jt as Tw,lt as Pm,or as nu,qr as xT,w as Fm}from"./chunk-BXp14hLr.js";import{E as Zt}from"./chunk-CtdKxuHA.js";import{G as bf,Jt as ua,N as Ti,Nt as tn,Ot as s3,V as _Z,Wt as yf,Y as dP,Z as dr,f as Fx,h as Ile,ht as mZ,rt as gZ,xt as pZ}from"./main-JCJIXXB4.js";import{i as te,n as oe,r as q,t as $}from"./chunk-4-cg1OfJ.js";var L=(()=>{class e{constructor(){this.formBuilder=g(gZ),this.formGroup=this.formBuilder.group({textarea:[null,dr.maxLength(50)]})}static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-textarea-example`]],standalone:!1,decls:11,vars:3,consts:[[1,`bd-example`],[1,`row`],[1,`col`],[1,`mb-5`],[`label`,`Esempio di area di testo`,`description`,`Esempio descrizione`,3,`ngModelChange`,`ngModel`],[3,`formGroup`],[`label`,`Esempio max 50 caratteri`,`placeholder`,`Esempio placeholder`,`formControlName`,`textarea`,3,`rows`]],template:function(t,i){t&1&&(Zi(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`h5`,3),hb(4,`NgModel`),nu(),Zi(5,`it-textarea`,4),xT(),Fm(`ngModelChange`,function(u){return mb(i.ngModelValue,u)||(i.ngModelValue=u),u}),nu()(),Zi(6,`div`,2)(7,`h5`,3),hb(8,`FormGroup`),nu(),Zi(9,`form`,5)(10,`it-textarea`,6),xT(),nu()()()()()),t&2&&(MD(5),Pm(`ngModel`,i.ngModelValue),OT(),MD(4),om(`formGroup`,i.formGroup),MD(),om(`rows`,5),OT())},dependencies:[dP,mZ,tn,pZ,yf,s3,bf],encapsulation:2,changeDetection:1})}}return e})();var W=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-textarea-examples`]],standalone:!1,decls:2,vars:0,consts:[[`html`,`<div class="bd-example">
  <div class="row">
    <div class="col">
      <h5 class="mb-5">NgModel</h5>
      <it-textarea label="Esempio di area di testo" description="Esempio descrizione" [(ngModel)]="ngModelValue"></it-textarea>
    </div>
    <div class="col">
      <h5 class="mb-5">FormGroup</h5>
      <form [formGroup]="formGroup">
        <it-textarea label="Esempio max 50 caratteri" placeholder="Esempio placeholder" [rows]="5" formControlName="textarea"></it-textarea>
      </form>
    </div>
  </div>
</div>`,`typescript`,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'it-textarea-example',
  templateUrl: './textarea-example.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class TextareaExampleComponent {
  private readonly formBuilder = inject(FormBuilder);

  ngModelValue?: string;

  formGroup: FormGroup;

  constructor() {
    this.formGroup = this.formBuilder.group({
      textarea: [null, Validators.maxLength(50)],
    });
  }
}`]],template:function(t,i){t&1&&im(0,`it-textarea-example`)(1,`it-source-display`,0)},dependencies:[q,L],encapsulation:2,changeDetection:1})}}return e})();var J=[{path:``,component:(()=>{class e{constructor(){this.component=oe.components.find(r=>r.name===`ItTextareaComponent`)}static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-textarea-index`]],standalone:!1,decls:11,vars:1,consts:[[1,`bd-title`],[1,`bd-lead`],[`label`,`Esempi`,`active`,`true`,1,`pt-3`],[`label`,`API`,1,`pt-3`],[3,`component`]],template:function(t,i){t&1&&(Zi(0,`h1`,0),hb(1,`Area di testo`),nu(),Zi(2,`p`,1),hb(3,`Per permettere agli utenti di inserire un testo esteso (ad esempio per lasciare commenti o informazioni).`),nu(),Zi(4,`it-tab-container`)(5,`it-tab-item`,2),im(6,`it-textarea-examples`),nu(),Zi(7,`it-tab-item`,3)(8,`h3`),hb(9,`TextareaComponent`),nu(),im(10,`it-api-parameters`,4),nu()()),t&2&&(MD(10),om(`component`,i.component))},dependencies:[$,Ile,Fx,W],encapsulation:2,changeDetection:1})}}return e})()}];var k=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵmod=Pg({type:e})}static{this.ɵinj=fa({imports:[ua.forChild(J),ua]})}}return e})();var Me=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵmod=Pg({type:e})}static{this.ɵinj=fa({imports:[Zt,te,k,_Z,Ti]})}}return e})();export{Me as TextareaModule};