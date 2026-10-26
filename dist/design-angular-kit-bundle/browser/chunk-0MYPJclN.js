import{$ as MD,Cn as fa,Dn as g,Fn as hb,Hn as im,Qn as mb,Zt as Zi,cr as om,ct as Pg,it as OT,jt as Tw,lt as Pm,or as nu,pn as cu,qr as xT,w as Fm}from"./chunk-BXp14hLr.js";import{E as Zt}from"./chunk-CtdKxuHA.js";import{G as bf,Jt as ua,N as Ti,Nt as tn,Ot as s3,V as _Z,Wt as yf,f as Fx,h as Ile,ht as mZ,rt as gZ,vt as oP,xt as pZ}from"./main-JCJIXXB4.js";import{i as te,n as oe,r as q$1,t as $}from"./chunk-4-cg1OfJ.js";var A=(()=>{class e{constructor(){this.formBuilder=g(gZ),this.rangeValue=50,this.formGroup=this.formBuilder.group({range:[null]})}static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-range-example`]],standalone:!1,decls:9,vars:7,consts:[[1,`bd-example`],[1,`row`],[1,`col-sm-12`,`col-md-6`],[`label`,`Esempio ngModel`,3,`ngModelChange`,`ngModel`],[3,`formGroup`],[`label`,`Esempio FormGroup`,`formControlName`,`range`,3,`min`,`max`,`step`]],template:function(t,i){t&1&&(Zi(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`it-range`,3),xT(),Fm(`ngModelChange`,function(f){return mb(i.rangeValue,f)||(i.rangeValue=f),f}),hb(4),nu()(),Zi(5,`div`,2)(6,`form`,4)(7,`it-range`,5),xT(),hb(8),nu()()()()()),t&2&&(MD(3),Pm(`ngModel`,i.rangeValue),OT(),MD(),cu(` `,i.rangeValue,` % `),MD(2),om(`formGroup`,i.formGroup),MD(),om(`min`,0)(`max`,1e3)(`step`,2),OT(),MD(),cu(` Valore selezionato: `,i.formGroup.get(`range`)?.value,` `))},dependencies:[oP,mZ,tn,pZ,s3,bf,yf],encapsulation:2,changeDetection:1})}}return e})();var U=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-range-custom-colors`]],standalone:!1,decls:8,vars:0,consts:[[1,`bd-example`],[1,`row`],[1,`col-sm-12`,`col-md-6`],[`leftColor`,`var(--bs-primary)`,`rightColor`,`var(--bs-gray-300)`],[`leftColor`,`var(--bs-warning)`,`rightColor`,`#ffdc73`]],template:function(t,i){t&1&&(Zi(0,`h3`),hb(1,`Barra personalizzata`),nu(),Zi(2,`div`,0)(3,`div`,1)(4,`div`,2),im(5,`it-range`,3),nu(),Zi(6,`div`,2),im(7,`it-range`,4),nu()()())},dependencies:[oP],encapsulation:2,changeDetection:1})}}return e})();var L=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-range-examples`]],standalone:!1,decls:4,vars:0,consts:[[`html`,`<div class="bd-example">
  <div class="row">
    <div class="col-sm-12 col-md-6">
      <it-range label="Esempio ngModel" [(ngModel)]="rangeValue"> /{/{ rangeValue /}/} % </it-range>
    </div>
    <div class="col-sm-12 col-md-6">
      <form [formGroup]="formGroup">
        <it-range label="Esempio FormGroup" [min]="0" [max]="1000" [step]="2" formControlName="range">
          Valore selezionato: /{/{ formGroup.get('range')?.value /}/}
        </it-range>
      </form>
    </div>
  </div>
</div>`,`typescript`,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  changeDetection: ChangeDetectionStrategy.Eager,
  selector: 'it-range-example',
  templateUrl: './range-example.component.html',
  standalone: false,
})
export class RangeExampleComponent {
  private readonly formBuilder = inject(FormBuilder);

  rangeValue = 50;

  formGroup: FormGroup;

  constructor() {
    this.formGroup = this.formBuilder.group({
      range: [null],
    });
  }
}`],[`html`,`<h3>Barra personalizzata</h3>
<div class="bd-example">
  <div class="row">
    <div class="col-sm-12 col-md-6">
      <it-range leftColor="var(--bs-primary)" rightColor="var(--bs-gray-300)"></it-range>
    </div>

    <div class="col-sm-12 col-md-6">
      <it-range leftColor="var(--bs-warning)" rightColor="#ffdc73"></it-range>
    </div>
  </div>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-range-custom-colors',
  templateUrl: './range-custom-colors.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class RangeCustomColorsComponent {}`]],template:function(t,i){t&1&&im(0,`it-range-example`)(1,`it-source-display`,0)(2,`it-range-custom-colors`)(3,`it-source-display`,1)},dependencies:[q$1,A,U],encapsulation:2,changeDetection:1})}}return e})();var Q=[{path:``,component:(()=>{class e{constructor(){this.component=oe.components.find(r=>r.name===`ItRangeComponent`)}static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-range-index`]],standalone:!1,decls:11,vars:1,consts:[[1,`bd-title`],[1,`bd-lead`],[`label`,`Esempi`,`active`,`true`,1,`pt-3`],[`label`,`API`,1,`pt-3`],[3,`component`]],template:function(t,i){t&1&&(Zi(0,`h1`,0),hb(1,`Range`),nu(),Zi(2,`p`,1),hb(3,`Input di intervallo personalizzato per uno stile uniforme su tutti i browser e personalizzazione integrata.`),nu(),Zi(4,`it-tab-container`)(5,`it-tab-item`,2),im(6,`it-range-examples`),nu(),Zi(7,`it-tab-item`,3)(8,`h3`),hb(9,`ItRangeComponent`),nu(),im(10,`it-api-parameters`,4),nu()()),t&2&&(MD(10),om(`component`,i.component))},dependencies:[$,Ile,Fx,L],encapsulation:2,changeDetection:1})}}return e})()}];var q=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵmod=Pg({type:e})}static{this.ɵinj=fa({imports:[ua.forChild(Q),ua]})}}return e})();var Ee=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵmod=Pg({type:e})}static{this.ɵinj=fa({imports:[Zt,te,q,Ti,_Z]})}}return e})();export{Ee as RangeModule};