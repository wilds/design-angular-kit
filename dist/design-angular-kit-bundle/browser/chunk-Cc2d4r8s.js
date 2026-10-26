import{$ as MD,Cn as fa,Fn as hb,Hn as im,Zt as Zi,cr as om,ct as Pg,jt as Tw,l as BI,or as nu}from"./chunk-BXp14hLr.js";import{E as Zt}from"./chunk-CtdKxuHA.js";import{Bt as xo,Et as ra,H as _t,Jt as ua,L as Xl,f as Fx,h as Ile}from"./main-JCJIXXB4.js";import{i as te,n as oe,r as q$1,t as $}from"./chunk-4-cg1OfJ.js";var I=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-progress-bar-example`]],standalone:!1,decls:5,vars:1,consts:[[1,`bd-example`],[1,`example-section`],[3,`value`]],template:function(t,l){t&1&&(Zi(0,`h3`),hb(1,`Esempio barra di avanzamento`),nu(),Zi(2,`div`,0)(3,`p`,1),im(4,`it-progress-bar`,2),nu()()),t&2&&(MD(4),om(`value`,50))},dependencies:[ra],styles:[`.example-section[_ngcontent-%COMP%]{align-content:center;align-items:center}`],changeDetection:1})}}return e})();var w=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-progress-bar-label`]],standalone:!1,decls:5,vars:1,consts:[[1,`bd-example`],[1,`example-section`],[`showLabel`,`true`,3,`value`]],template:function(t,l){t&1&&(Zi(0,`h3`),hb(1,`Esempio con etichette`),nu(),Zi(2,`div`,0)(3,`p`,1),im(4,`it-progress-bar`,2),nu()()),t&2&&(MD(4),om(`value`,25))},dependencies:[ra],encapsulation:2,changeDetection:1})}}return e})();var L=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-progress-bar-indeterminate`]],standalone:!1,decls:5,vars:1,consts:[[1,`bd-example`],[1,`example-section`],[`indeterminate`,`true`,3,`value`]],template:function(t,l){t&1&&(Zi(0,`h3`),hb(1,`Progresso indeterminato`),nu(),Zi(2,`div`,0)(3,`p`,1),im(4,`it-progress-bar`,2),nu()()),t&2&&(MD(4),om(`value`,0))},dependencies:[ra],encapsulation:2,changeDetection:1})}}return e})();var T=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-progress-bar-bg`]],standalone:!1,decls:11,vars:4,consts:[[1,`bd-example`],[1,`example-section`],[`color`,`info`,3,`value`],[`color`,`success`,3,`value`],[`color`,`warning`,3,`value`],[`color`,`danger`,3,`value`]],template:function(t,l){t&1&&(Zi(0,`h3`),hb(1,`Esempio con sfondi supportati`),nu(),Zi(2,`div`,0)(3,`p`,1),im(4,`it-progress-bar`,2),nu(),Zi(5,`p`,1),im(6,`it-progress-bar`,3),nu(),Zi(7,`p`,1),im(8,`it-progress-bar`,4),nu(),Zi(9,`p`,1),im(10,`it-progress-bar`,5),nu()()),t&2&&(MD(4),om(`value`,25),MD(2),om(`value`,50),MD(2),om(`value`,75),MD(2),om(`value`,100))},dependencies:[ra],encapsulation:2,changeDetection:1})}}return e})();var U=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-progress-bar-button`]],standalone:!1,decls:18,vars:1,consts:[[1,`bd-example`],[1,`row`],[1,`col-12`,`col-sm-6`],[`itButton`,`primary`,`progress`,`true`,`disabled`,`true`],[`name`,`github`,`color`,`white`,1,`ms-2`],[`itButton`,`secondary`,`disabled`,`true`,3,`progress`]],template:function(t,l){t&1&&(Zi(0,`h3`),hb(1,`Pulsante con Progress Bar`),nu(),Zi(2,`div`,0)(3,`div`,1)(4,`div`,2)(5,`p`)(6,`strong`),hb(7,`Pulsante primario`),nu()(),Zi(8,`button`,3),hb(9,` Label pulsante `),im(10,`it-icon`,4),nu()(),Zi(11,`div`,2)(12,`p`)(13,`strong`),hb(14,`Pulsante secondario`),nu()(),Zi(15,`button`,5),hb(16,` Completo al 70% `),im(17,`it-icon`,4),nu()()()()),t&2&&(MD(15),om(`progress`,70))},dependencies:[xo,Xl,_t],encapsulation:2,changeDetection:1})}}return e})();var F=(()=>{class e{constructor(){}static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-progress-bar-examples`]],standalone:!1,decls:10,vars:0,consts:[[`html`,`<h3>Progresso indeterminato</h3>
<div class="bd-example">
  <p class="example-section">
    <it-progress-bar [value]="0" indeterminate="true"></it-progress-bar>
  </p>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-progress-bar-indeterminate',
  templateUrl: './progress-bar-indeterminate.component.html',
  styleUrls: ['./progress-bar-indeterminate.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class ProgressBarIndeterminateComponent {}`],[`html`,`<h3>Pulsante con Progress Bar</h3>

<div class="bd-example">
  <div class="row">
    <div class="col-12 col-sm-6">
      <p><strong>Pulsante primario</strong></p>
      <button itButton="primary" progress="true" disabled="true">
        Label pulsante
        <it-icon name="github" color="white" class="ms-2"></it-icon>
      </button>
    </div>
    <div class="col-12 col-sm-6">
      <p><strong>Pulsante secondario</strong></p>
      <button itButton="secondary" [progress]="70" disabled="true">
        Completo al 70%
        <it-icon name="github" color="white" class="ms-2"></it-icon>
      </button>
    </div>
  </div>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-progress-bar-button',
  templateUrl: './progress-bar-button.component.html',
  styleUrls: ['./progress-bar-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class ProgressBarButtonComponent {}`],[`html`,`<h3>Esempio barra di avanzamento</h3>

<div class="bd-example">
  <p class="example-section">
    <it-progress-bar [value]="50"></it-progress-bar>
  </p>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-progress-bar-example',
  templateUrl: './progress-bar-example.component.html',
  styleUrls: ['./progress-bar-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class ProgressBarExampleComponent {}`],[`html`,`<h3>Esempio con etichette</h3>
<div class="bd-example">
  <p class="example-section">
    <it-progress-bar [value]="25" showLabel="true"></it-progress-bar>
  </p>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-progress-bar-label',
  templateUrl: './progress-bar-label.component.html',
  styleUrls: ['./progress-bar-label.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class ProgressBarLabelComponent {}`],[`html`,`<h3>Esempio con sfondi supportati</h3>
<div class="bd-example">
  <p class="example-section">
    <it-progress-bar [value]="25" color="info"></it-progress-bar>
  </p>

  <p class="example-section">
    <it-progress-bar [value]="50" color="success"></it-progress-bar>
  </p>

  <p class="example-section">
    <it-progress-bar [value]="75" color="warning"></it-progress-bar>
  </p>

  <p class="example-section">
    <it-progress-bar [value]="100" color="danger"></it-progress-bar>
  </p>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-progress-bar-bg',
  templateUrl: './progress-bar-bg.component.html',
  styleUrls: ['./progress-bar-bg.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class ProgressBarBgComponent {}`]],template:function(t,l){t&1&&im(0,`it-progress-bar-indeterminate`)(1,`it-source-display`,0)(2,`it-progress-bar-button`)(3,`it-source-display`,1)(4,`it-progress-bar-example`)(5,`it-source-display`,2)(6,`it-progress-bar-label`)(7,`it-source-display`,3)(8,`it-progress-bar-bg`)(9,`it-source-display`,4)},dependencies:[q$1,I,w,L,T,U],encapsulation:2,changeDetection:1})}}return e})();var q=[{path:``,component:(()=>{class e{constructor(){this.component=oe.components.find(i=>i.name===`ItProgressBarComponent`)}static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-progress-bar-index`]],standalone:!1,decls:10,vars:2,consts:[[1,`bd-title`],[1,`bd-lead`],[3,`innerHTML`],[`label`,`Esempi`,`active`,`true`,1,`pt-3`],[`label`,`API`,1,`pt-3`],[3,`component`]],template:function(t,l){t&1&&(Zi(0,`h1`,0),hb(1,`Barra di avanzamento`),nu(),Zi(2,`p`,1),hb(3,`Il componente Barra di avanzamento utilizzabile per mostrare dei progressi`),nu(),im(4,`div`,2),Zi(5,`it-tab-container`)(6,`it-tab-item`,3),im(7,`it-progress-bar-examples`),nu(),Zi(8,`it-tab-item`,4),im(9,`it-api-parameters`,5),nu()()),t&2&&(MD(4),om(`innerHTML`,l.component.description,BI),MD(5),om(`component`,l.component))},dependencies:[$,Ile,Fx,F],encapsulation:2,changeDetection:1})}}return e})()}];var j=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵmod=Pg({type:e})}static{this.ɵinj=fa({imports:[ua.forChild(q),ua]})}}return e})();var ve=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵmod=Pg({type:e})}static{this.ɵinj=fa({imports:[Zt,te,j]})}}return e})();export{ve as ProgressBarModule};