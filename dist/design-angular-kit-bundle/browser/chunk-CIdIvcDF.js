import{$ as MD,Cn as fa,Dn as g,Fn as hb,Hn as im,Qn as mb,Zt as Zi,cr as om,ct as Pg,it as OT,jt as Tw,lt as Pm,or as nu,pn as cu,qr as xT,w as Fm}from"./chunk-BXp14hLr.js";import{E as Zt}from"./chunk-CtdKxuHA.js";import{G as bf,Jt as ua,N as Ti,Nt as tn,Ot as s3,V as _Z,Wt as yf,dt as lP,f as Fx,h as Ile,ht as mZ,rt as gZ,xt as pZ}from"./main-JCJIXXB4.js";import{i as te,n as oe,r as q$1,t as $}from"./chunk-4-cg1OfJ.js";var W=(()=>{class e{constructor(){this.formBuilder=g(gZ),this.rating=3,this.formGroup=this.formBuilder.group({rating:[0]})}static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-rating-example`]],standalone:!1,decls:19,vars:4,consts:[[1,`bd-example`],[1,`row`],[1,`col`],[3,`ngModelChange`,`label`,`ngModel`],[3,`formGroup`],[`formControlName`,`rating`],[1,`pt-5`],[1,`example-section`],[1,`example-selected-value`]],template:function(t,r){t&1&&(Zi(0,`h3`),hb(1,`Con Label`),nu(),Zi(2,`div`,0)(3,`div`,1)(4,`div`,2)(5,`h5`),hb(6,`NgModel`),nu(),Zi(7,`it-rating`,3),xT(),Fm(`ngModelChange`,function(f){return mb(r.rating,f)||(r.rating=f),f}),nu()(),Zi(8,`div`,2)(9,`h5`),hb(10,`FormGroup`),nu(),Zi(11,`form`,4)(12,`it-rating`,5),xT(),nu(),Zi(13,`div`,6)(14,`h4`),hb(15,`Risultato`),nu(),Zi(16,`div`,7)(17,`div`,8),hb(18),nu()()()()()()()),t&2&&(MD(7),om(`label`,r.rating+` stelle`),Pm(`ngModel`,r.rating),OT(),MD(4),om(`formGroup`,r.formGroup),MD(),OT(),MD(6),cu(`Valore selezionato: `,r.formGroup.get(`rating`)?.value))},dependencies:[lP,mZ,tn,pZ,yf,s3,bf],encapsulation:2,changeDetection:1})}}return e})();var A=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-rating-example-readonly`]],standalone:!1,decls:5,vars:1,consts:[[1,`bd-example`],[1,`container-fluid`,`pb-4`,`mb-4`],[`disabled`,`true`,3,`value`]],template:function(t,r){t&1&&(Zi(0,`h3`),hb(1,`Sola lettura`),nu(),Zi(2,`div`,0)(3,`div`,1),im(4,`it-rating`,2),nu()()),t&2&&(MD(4),om(`value`,4))},dependencies:[lP],encapsulation:2,changeDetection:1})}}return e})();var U=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-rating-examples`]],standalone:!1,decls:4,vars:0,consts:[[`html`,`<h3>Con Label</h3>
<div class="bd-example">
  <div class="row">
    <div class="col">
      <h5>NgModel</h5>
      <it-rating [label]="rating + ' stelle'" [(ngModel)]="rating"></it-rating>
    </div>
    <div class="col">
      <h5>FormGroup</h5>
      <form [formGroup]="formGroup">
        <it-rating formControlName="rating"></it-rating>

        <div class="pt-5">
          <h4>Risultato</h4>
          <div class="example-section">
            <div class="example-selected-value">Valore selezionato: /{/{ formGroup.get('rating')?.value /}/}</div>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>`,`typescript`,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'it-rating-example',
  templateUrl: './rating-example.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class RatingExampleComponent {
  private readonly formBuilder = inject(FormBuilder);

  rating: number = 3;

  formGroup: FormGroup;

  constructor() {
    this.formGroup = this.formBuilder.group({
      rating: [0],
    });
  }
}`],[`html`,`<h3>Sola lettura</h3>
<div class="bd-example">
  <div class="container-fluid pb-4 mb-4">
    <it-rating [value]="4" disabled="true"></it-rating>
  </div>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-rating-example-readonly',
  templateUrl: './rating-example-readonly.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class RatingExampleReadonlyComponent {}`]],template:function(t,r){t&1&&im(0,`it-rating-example`)(1,`it-source-display`,0)(2,`it-rating-example-readonly`)(3,`it-source-display`,1)},dependencies:[q$1,W,A],encapsulation:2,changeDetection:1})}}return e})();var Q=[{path:``,component:(()=>{class e{constructor(){this.component=oe.components.find(a=>a.name===`ItRatingComponent`)}static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-rating-index`]],standalone:!1,decls:11,vars:1,consts:[[1,`bd-title`],[1,`bd-lead`],[`label`,`Esempi`,`active`,`true`,1,`pt-3`],[`label`,`API`,1,`pt-3`],[3,`component`]],template:function(t,r){t&1&&(Zi(0,`h1`,0),hb(1,`Rating`),nu(),Zi(2,`p`,1),hb(3,`Per esprimere una valutazione su un contenuto.`),nu(),Zi(4,`it-tab-container`)(5,`it-tab-item`,2),im(6,`it-rating-examples`),nu(),Zi(7,`it-tab-item`,3)(8,`h3`),hb(9,`RatingComponent`),nu(),im(10,`it-api-parameters`,4),nu()()),t&2&&(MD(10),om(`component`,r.component))},dependencies:[$,Ile,Fx,U],encapsulation:2,changeDetection:1})}}return e})()}];var q=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵmod=Pg({type:e})}static{this.ɵinj=fa({imports:[ua.forChild(Q),ua]})}}return e})();var Me=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵmod=Pg({type:e})}static{this.ɵinj=fa({imports:[Zt,te,q,_Z,Ti]})}}return e})();export{Me as RatingModule};