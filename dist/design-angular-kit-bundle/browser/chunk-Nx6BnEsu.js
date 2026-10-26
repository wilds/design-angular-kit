import{$ as MD,Cn as fa,Fn as hb,Hn as im,Qn as mb,Zt as Zi,cr as om,ct as Pg,it as OT,jt as Tw,l as BI,lt as Pm,or as nu,qr as xT,w as Fm}from"./chunk-BXp14hLr.js";import{E as Zt}from"./chunk-CtdKxuHA.js";import{Jt as ua,Nt as tn,V as _Z,Wt as yf,f as Fx,gt as nP,h as Ile}from"./main-JCJIXXB4.js";import{i as te,n as oe,r as q,t as $}from"./chunk-4-cg1OfJ.js";var N=(()=>{class e{constructor(){this.checked=!0,this.label=`Sono una toggle`,this.disabled=!1}static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-toggle-example`]],standalone:!1,decls:13,vars:5,consts:[[1,`bd-example`],[`label`,`Spuntato`,`toggle`,`true`,3,`ngModelChange`,`ngModel`],[`label`,`Disabilitato`,`toggle`,`true`,3,`ngModelChange`,`ngModel`],[1,`example-section`],[`toggle`,`true`,3,`ngModelChange`,`ngModel`,`label`,`disabled`]],template:function(t,o){t&1&&(Zi(0,`h3`),hb(1,`Configurazione toggle`),nu(),Zi(2,`div`,0)(3,`fieldset`)(4,`legend`),hb(5,`Seleziona le caratteristiche`),nu(),Zi(6,`it-checkbox`,1),xT(),Fm(`ngModelChange`,function(l){return mb(o.checked,l)||(o.checked=l),l}),nu(),Zi(7,`it-checkbox`,2),xT(),Fm(`ngModelChange`,function(l){return mb(o.disabled,l)||(o.disabled=l),l}),nu()(),im(8,`hr`),Zi(9,`h4`),hb(10,`Risultato`),nu(),Zi(11,`p`,3)(12,`it-checkbox`,4),xT(),Fm(`ngModelChange`,function(l){return mb(o.checked,l)||(o.checked=l),l}),nu()()()),t&2&&(MD(6),Pm(`ngModel`,o.checked),OT(),MD(),Pm(`ngModel`,o.disabled),OT(),MD(5),Pm(`ngModel`,o.checked),om(`label`,o.label)(`disabled`,o.disabled),OT())},dependencies:[tn,yf,nP],styles:[`.example-section[_ngcontent-%COMP%]{display:flex;align-content:center;align-items:center;height:60px}`],changeDetection:1})}}return e})();var P=(()=>{class e{constructor(){}static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-toggle-examples`]],standalone:!1,decls:2,vars:0,consts:[[`html`,`<h3>Configurazione toggle</h3>
<div class="bd-example">
  <fieldset>
    <legend>Seleziona le caratteristiche</legend>
    <it-checkbox [(ngModel)]="checked" label="Spuntato" toggle="true"></it-checkbox>
    <it-checkbox [(ngModel)]="disabled" label="Disabilitato" toggle="true"></it-checkbox>
  </fieldset>
  <hr />
  <h4>Risultato</h4>
  <p class="example-section">
    <it-checkbox [(ngModel)]="checked" [label]="label" [disabled]="disabled" toggle="true"></it-checkbox>
  </p>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-toggle-example',
  templateUrl: './toggle-example.component.html',
  styleUrls: ['./toggle-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class ToggleExampleComponent {
  checked = true;
  label = 'Sono una toggle';
  disabled = false;

  constructor() {}
}`]],template:function(t,o){t&1&&im(0,`it-toggle-example`)(1,`it-source-display`,0)},dependencies:[q,N],encapsulation:2,changeDetection:1})}}return e})();var H=[{path:``,component:(()=>{class e{constructor(){this.component=oe.components.find(a=>a.name===`ItCheckboxComponent`)}static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-toggle-index`]],standalone:!1,decls:10,vars:2,consts:[[1,`bd-title`],[1,`bd-lead`],[3,`innerHTML`],[`label`,`Esempi`,`active`,`true`,1,`pt-3`],[`label`,`API`,1,`pt-3`],[3,`component`]],template:function(t,o){t&1&&(Zi(0,`h1`,0),hb(1,`Toggle`),nu(),Zi(2,`p`,1),hb(3,`Il componente Toggle utilizzabile in un form`),nu(),im(4,`div`,2),Zi(5,`it-tab-container`)(6,`it-tab-item`,3),im(7,`it-toggle-examples`),nu(),Zi(8,`it-tab-item`,4),im(9,`it-api-parameters`,5),nu()()),t&2&&(MD(4),om(`innerHTML`,o.component.description,BI),MD(5),om(`component`,o.component))},dependencies:[$,Ile,Fx,P],encapsulation:2,changeDetection:1})}}return e})()}];var R=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵmod=Pg({type:e})}static{this.ɵinj=fa({imports:[ua.forChild(H),ua]})}}return e})();var me=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵmod=Pg({type:e})}static{this.ɵinj=fa({imports:[Zt,_Z,te,R]})}}return e})();export{me as ToggleModule};