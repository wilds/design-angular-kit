import{$ as MD,Cn as fa,Dn as g,Fn as hb,Hn as im,Mn as gm,Qn as mb,Zt as Zi,cr as om,ct as Pg,it as OT,jt as Tw,l as BI,lt as Pm,or as nu,qr as xT,w as Fm}from"./chunk-BXp14hLr.js";import{E as Zt}from"./chunk-CtdKxuHA.js";import{G as bf,Ht as yP,Jt as ua,N as Ti,Nt as tn,Ot as s3,V as _Z,Wt as yf,f as Fx,h as Ile,ht as mZ,rt as gZ,xt as pZ}from"./main-JCJIXXB4.js";import{i as te,n as oe,r as q$1,t as $}from"./chunk-4-cg1OfJ.js";var W=(()=>{class e{constructor(){this.options=[{text:`Item 1`,value:1},{text:`Item 2`,value:2}],this.selected=[{text:`Item 3`,value:3}]}transferChangesHandler(a){}static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-transfer-default-example`]],standalone:!1,decls:8,vars:2,consts:[[1,`bd-example`],[1,`row`],[1,`col`],[3,`transferChanges`,`options`,`selected`]],template:function(t,r){t&1&&(Zi(0,`h3`),hb(1,`Esempio senza form`),nu(),Zi(2,`div`,0)(3,`div`,1)(4,`div`,2)(5,`h5`),hb(6,`Esempio di default`),nu(),Zi(7,`it-transfer`,3),gm(`transferChanges`,function(d){return r.transferChangesHandler(d)}),nu()()()()),t&2&&(MD(7),om(`options`,r.options)(`selected`,r.selected))},dependencies:[yP],encapsulation:2,changeDetection:1})}}return e})();var A=(()=>{class e{constructor(){this.options=[{text:`Item 1`,value:1},{text:`Item 2`,value:2}],this.selected=[{text:`Item 3`,value:3}],this.transferModel=this.selected}static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-transfer-template-form-example`]],standalone:!1,decls:8,vars:2,consts:[[1,`bd-example`],[1,`row`],[1,`col`],[3,`ngModelChange`,`ngModel`,`options`]],template:function(t,r){t&1&&(Zi(0,`h3`),hb(1,`Esempio con Template Form`),nu(),Zi(2,`div`,0)(3,`div`,1)(4,`div`,2)(5,`h5`),hb(6,`NgModel`),nu(),Zi(7,`it-transfer`,3),xT(),Fm(`ngModelChange`,function(d){return mb(r.transferModel,d)||(r.transferModel=d),d}),nu()()()()),t&2&&(MD(7),Pm(`ngModel`,r.transferModel),om(`options`,r.options),OT())},dependencies:[yP,tn,yf],encapsulation:2,changeDetection:1})}}return e})();var V=(()=>{class e{constructor(){this.options=[{text:`Item 1`,value:1},{text:`Item 2`,value:2}],this.selected=[{text:`Item 3`,value:3}],this.formGroup=g(gZ).group({transfer:[this.selected]})}static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-transfer-reactive-form-example`]],standalone:!1,decls:9,vars:2,consts:[[1,`bd-example`],[1,`row`],[1,`col`],[3,`formGroup`],[`formControlName`,`transfer`,3,`options`]],template:function(t,r){t&1&&(Zi(0,`h3`),hb(1,`Esempio con Reactive Form`),nu(),Zi(2,`div`,0)(3,`div`,1)(4,`div`,2)(5,`h5`),hb(6,`FormGroup`),nu(),Zi(7,`form`,3)(8,`it-transfer`,4),xT(),nu()()()()()),t&2&&(MD(7),om(`formGroup`,r.formGroup),MD(),om(`options`,r.options),OT())},dependencies:[yP,mZ,tn,pZ,s3,bf],encapsulation:2,changeDetection:1})}}return e})();var q=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-transfer-examples`]],standalone:!1,decls:6,vars:0,consts:[[`html`,`<h3>Esempio senza form</h3>
<div class="bd-example">
  <div class="row">
    <div class="col">
      <h5>Esempio di default</h5>
      <it-transfer [options]="options" [selected]="selected" (transferChanges)="transferChangesHandler($event)"></it-transfer>
    </div>
  </div>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TransferItem } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-transfer-default-example',
  templateUrl: './transfer-default-example.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class TransferDefaultExampleComponent {
  readonly options: TransferItem<number>[] = [
    {
      text: 'Item 1',
      value: 1,
    },
    {
      text: 'Item 2',
      value: 2,
    },
  ];
  readonly selected: TransferItem<number>[] = [
    {
      text: 'Item 3',
      value: 3,
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  transferChangesHandler(_: TransferItem<number>[]) {
    // handle changing data
  }
}`],[`html`,`<h3>Esempio con Template Form</h3>
<div class="bd-example">
  <div class="row">
    <div class="col">
      <h5>NgModel</h5>
      <it-transfer [(ngModel)]="transferModel" [options]="options"></it-transfer>
    </div>
  </div>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TransferItem } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-transfer-template-form-example',
  templateUrl: './transfer-template-form-example.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class TransferTemplateFormExampleComponent {
  readonly options: TransferItem<number>[] = [
    {
      text: 'Item 1',
      value: 1,
    },
    {
      text: 'Item 2',
      value: 2,
    },
  ];
  readonly selected: TransferItem<number>[] = [
    {
      text: 'Item 3',
      value: 3,
    },
  ];

  transferModel = this.selected;
}`],[`html`,`<h3>Esempio con Reactive Form</h3>
<div class="bd-example">
  <div class="row">
    <div class="col">
      <h5>FormGroup</h5>
      <form [formGroup]="formGroup">
        <it-transfer formControlName="transfer" [options]="options"></it-transfer>
      </form>
    </div>
  </div>
</div>`,`typescript`,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TransferItem } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-transfer-reactive-form-example',
  templateUrl: './transfer-reactive-form-example.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class TransferReactiveFormExampleComponent {
  readonly options: TransferItem<number>[] = [
    {
      text: 'Item 1',
      value: 1,
    },
    {
      text: 'Item 2',
      value: 2,
    },
  ];
  readonly selected: TransferItem<number>[] = [
    {
      text: 'Item 3',
      value: 3,
    },
  ];

  readonly formGroup = inject(FormBuilder).group({
    transfer: [this.selected],
  });
}`]],template:function(t,r){t&1&&im(0,`it-transfer-default-example`)(1,`it-source-display`,0)(2,`it-transfer-template-form-example`)(3,`it-source-display`,1)(4,`it-transfer-reactive-form-example`)(5,`it-source-display`,2)},dependencies:[q$1,W,A,V],encapsulation:2,changeDetection:1})}}return e})();var ee=[{path:``,component:(()=>{class e{constructor(){this.component=oe.components.find(a=>a.name===`ItTransferComponent`)}static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-transfer-index`]],standalone:!1,decls:12,vars:2,consts:[[1,`bd-title`],[1,`bd-lead`],[3,`innerHTML`],[`label`,`Esempi`,`active`,`true`,1,`pt-3`],[`label`,`API`,1,`pt-3`],[3,`component`]],template:function(t,r){t&1&&(Zi(0,`h1`,0),hb(1,`Transfer`),nu(),Zi(2,`p`,1),hb(3,`Componente che consente la creazione di liste di checkbox`),nu(),im(4,`div`,2),Zi(5,`it-tab-container`)(6,`it-tab-item`,3),im(7,`it-transfer-examples`),nu(),Zi(8,`it-tab-item`,4)(9,`h3`),hb(10,`ItTransferComponent`),nu(),im(11,`it-api-parameters`,5),nu()()),t&2&&(MD(4),om(`innerHTML`,r.component.description,BI),MD(7),om(`component`,r.component))},dependencies:[$,Ile,Fx,q],encapsulation:2,changeDetection:1})}}return e})()}];var K=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵmod=Pg({type:e})}static{this.ɵinj=fa({imports:[ua.forChild(ee),ua]})}}return e})();var be=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵmod=Pg({type:e})}static{this.ɵinj=fa({imports:[K,te,_Z,Ti,Zt]})}}return e})();export{be as TransferModule};