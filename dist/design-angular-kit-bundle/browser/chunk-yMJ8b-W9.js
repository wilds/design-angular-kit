import{$ as MD,Br as wC,Cn as fa,Ct as TC,Fn as hb,Ft as VC,Hn as im,Mn as gm,Qn as mb,Ur as wm,Zt as Zi,cr as om,ct as Pg,g as DC,it as OT,jt as Tw,lt as Pm,or as nu,pn as cu,qr as xT,w as Fm}from"./chunk-BXp14hLr.js";import{E as Zt}from"./chunk-CtdKxuHA.js";import{Jt as ua,Mt as tP,Nt as tn,V as _Z,Wt as yf,f as Fx,g as JO,gt as nP,h as Ile}from"./main-JCJIXXB4.js";import{i as te,n as oe,r as q$1,t as $$1}from"./chunk-4-cg1OfJ.js";function X(e,Q){if(e&1&&(Zi(0,`it-steppers-item`,4)(1,`div`,5),hb(2),nu()()),e&2){let s=Q.$implicit,n=VC();om(`label`,s),MD(),wm(`text-white`,n.isDark),MD(),cu(` `,s,` `)}}var O=(()=>{class e{constructor(){this.activeStep=1,this.steps=[`Primo contenuto`,`Secondo contenuto`,`Terzo contenuto`],this.isDark=!1,this.isConfirmLoading=!1,this.isSaveLoading=!1}onForwardClick(s){s<this.steps.length-1&&this.activeStep++,this.isConfirmLoading=!1,this.isSaveLoading=!1}onBackClick(s){s>0&&this.activeStep--,this.isConfirmLoading=!1,this.isSaveLoading=!1}onConfirmClick(){this.isConfirmLoading=!0}onSaveClick(){this.isSaveLoading=!0}static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-steppers-dynamic-example`]],standalone:!1,decls:8,vars:9,consts:[[1,`bd-example`],[1,`mb-3`],[`label`,`Modalità dark`,3,`ngModelChange`,`ngModel`],[3,`backClick`,`forwardClick`,`confirmClick`,`saveClick`,`activeStep`,`dark`,`disableBackButton`,`showForwardButton`,`showSaveButton`,`showConfirmButton`,`confirmLoading`,`saveLoading`],[3,`label`],[1,`container`]],template:function(n,o){n&1&&(Zi(0,`h3`),hb(1,`Stepper`),nu(),Zi(2,`div`,0)(3,`div`,1)(4,`it-checkbox`,2),xT(),Fm(`ngModelChange`,function(c){return mb(o.isDark,c)||(o.isDark=c),c}),nu()(),Zi(5,`it-steppers-container`,3),gm(`backClick`,function(c){return o.onBackClick(c)})(`forwardClick`,function(c){return o.onForwardClick(c)})(`confirmClick`,function(){return o.onConfirmClick()})(`saveClick`,function(){return o.onSaveClick()}),TC(6,X,3,4,`it-steppers-item`,4,DC),nu()()),n&2&&(MD(4),Pm(`ngModel`,o.isDark),OT(),MD(),om(`activeStep`,o.activeStep)(`dark`,o.isDark)(`disableBackButton`,o.activeStep===0)(`showForwardButton`,o.activeStep<o.steps.length-1)(`showSaveButton`,o.activeStep===0)(`showConfirmButton`,o.activeStep===o.steps.length-1)(`confirmLoading`,o.isConfirmLoading)(`saveLoading`,o.isSaveLoading),MD(),wC(o.steps))},dependencies:[tP,JO,nP,tn,yf],encapsulation:2,changeDetection:1})}}return e})();var G=(()=>{class e{static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-steppers-header-example`]],standalone:!1,decls:23,vars:3,consts:[[1,`bd-example`],[`showBackButton`,`false`,`showForwardButton`,`false`,3,`activeStep`],[`label`,`Primo contenuto`],[`label`,`Secondo contenuto`],[`label`,`Terzo contenuto`],[`label`,`Primo contenuto`,`icon`,`calendar`,`iconTitle`,`Calendario`],[`label`,`Secondo contenuto`,`icon`,`locked`,`iconTitle`,`Lucchetto`],[`label`,`Terzo contenuto`,`icon`,`settings`,`iconTitle`,`Impostazioni`],[`steppersNumber`,`true`,`showBackButton`,`false`,`showForwardButton`,`false`,3,`activeStep`]],template:function(n,o){n&1&&(Zi(0,`h3`),hb(1,`Varianti intestazione`),nu(),Zi(2,`h4`),hb(3,`Solo testo`),nu(),Zi(4,`div`,0)(5,`it-steppers-container`,1),im(6,`it-steppers-item`,2)(7,`it-steppers-item`,3)(8,`it-steppers-item`,4),nu()(),Zi(9,`h4`),hb(10,`Testo e icone`),nu(),Zi(11,`div`,0)(12,`it-steppers-container`,1),im(13,`it-steppers-item`,5)(14,`it-steppers-item`,6)(15,`it-steppers-item`,7),nu()(),Zi(16,`h4`),hb(17,`Ordine degli step`),nu(),Zi(18,`div`,0)(19,`it-steppers-container`,8),im(20,`it-steppers-item`,2)(21,`it-steppers-item`,3)(22,`it-steppers-item`,4),nu()()),n&2&&(MD(5),om(`activeStep`,1),MD(7),om(`activeStep`,1),MD(7),om(`activeStep`,1))},dependencies:[tP,JO],encapsulation:2,changeDetection:1})}}return e})();var $=(()=>{class e{static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-steppers-mobile-example`]],standalone:!1,decls:30,vars:4,consts:[[1,`bd-example`,`mobile-examples`],[`showHeader`,`false`,`progressStyle`,`progress`,3,`activeStep`],[`label`,`Primo contenuto`],[`label`,`Secondo contenuto`],[`label`,`Terzo contenuto`],[`showHeader`,`false`,`progressStyle`,`dots`,3,`activeStep`],[1,`bd-example`],[`showHeader`,`false`,`showSaveButton`,`true`,3,`activeStep`],[`showHeader`,`false`,`showForwardButton`,`false`,`showConfirmButton`,`true`,3,`activeStep`]],template:function(n,o){n&1&&(Zi(0,`h3`),hb(1,`Varianti navigazione per mobile`),nu(),Zi(2,`h4`),hb(3,`Progress bar`),nu(),Zi(4,`div`,0)(5,`it-steppers-container`,1),im(6,`it-steppers-item`,2)(7,`it-steppers-item`,3)(8,`it-steppers-item`,4),nu()(),Zi(9,`h4`),hb(10,`Pallini`),nu(),Zi(11,`div`,0)(12,`it-steppers-container`,5),im(13,`it-steppers-item`,2)(14,`it-steppers-item`,3)(15,`it-steppers-item`,4),nu()(),Zi(16,`h4`),hb(17,`Pulsante salva`),nu(),Zi(18,`div`,6)(19,`it-steppers-container`,7),im(20,`it-steppers-item`,2)(21,`it-steppers-item`,3)(22,`it-steppers-item`,4),nu()(),Zi(23,`h4`),hb(24,`Pulsante conferma`),nu(),Zi(25,`div`,6)(26,`it-steppers-container`,8),im(27,`it-steppers-item`,2)(28,`it-steppers-item`,3)(29,`it-steppers-item`,4),nu()()),n&2&&(MD(5),om(`activeStep`,1),MD(7),om(`activeStep`,1),MD(7),om(`activeStep`,1),MD(7),om(`activeStep`,1))},dependencies:[tP,JO],styles:[`@media screen and (min-width:992px){.bd-example.mobile-examples .steppers-progress{display:block}.bd-example.mobile-examples .steppers-dots{display:flex}}
`],encapsulation:2,changeDetection:1})}}return e})();var q=(()=>{class e{constructor(){}static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-steppers-examples`]],standalone:!1,decls:6,vars:0,consts:[[`html`,`<h3>Stepper</h3>
<div class="bd-example">
  <div class="mb-3">
    <it-checkbox label="Modalit\xE0 dark" [(ngModel)]="isDark"></it-checkbox>
  </div>

  <it-steppers-container
    [activeStep]="activeStep"
    [dark]="isDark"
    [disableBackButton]="activeStep === 0"
    [showForwardButton]="activeStep < steps.length - 1"
    [showSaveButton]="activeStep === 0"
    [showConfirmButton]="activeStep === steps.length - 1"
    (backClick)="onBackClick($event)"
    (forwardClick)="onForwardClick($event)"
    (confirmClick)="onConfirmClick()"
    [confirmLoading]="isConfirmLoading"
    (saveClick)="onSaveClick()"
    [saveLoading]="isSaveLoading">
    @for (step of steps; track step) {
      <it-steppers-item [label]="step">
        <div class="container" [class.text-white]="isDark">
          /{/{ step /}/}
        </div>
      </it-steppers-item>
    }
  </it-steppers-container>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-steppers-dynamic-example',
  templateUrl: './steppers-dynamic-example.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class SteppersDynamicExampleComponent {
  /**
   * Step index
   */
  activeStep = 1;
  steps = ['Primo contenuto', 'Secondo contenuto', 'Terzo contenuto'];

  isDark = false;

  isConfirmLoading = false;
  isSaveLoading = false;

  onForwardClick(activeStep: number): void {
    if (activeStep < this.steps.length - 1) {
      this.activeStep++;
    }
    this.isConfirmLoading = false;
    this.isSaveLoading = false;
  }
  onBackClick(activeStep: number): void {
    if (activeStep > 0) {
      this.activeStep--;
    }
    this.isConfirmLoading = false;
    this.isSaveLoading = false;
  }

  onConfirmClick(): void {
    this.isConfirmLoading = true;
  }

  onSaveClick(): void {
    this.isSaveLoading = true;
  }
}`],[`html`,`<h3>Varianti intestazione</h3>
<h4>Solo testo</h4>
<div class="bd-example">
  <it-steppers-container [activeStep]="1" showBackButton="false" showForwardButton="false">
    <it-steppers-item label="Primo contenuto"></it-steppers-item>
    <it-steppers-item label="Secondo contenuto"></it-steppers-item>
    <it-steppers-item label="Terzo contenuto"></it-steppers-item>
  </it-steppers-container>
</div>

<h4>Testo e icone</h4>
<div class="bd-example">
  <it-steppers-container [activeStep]="1" showBackButton="false" showForwardButton="false">
    <it-steppers-item label="Primo contenuto" icon="calendar" iconTitle="Calendario"></it-steppers-item>
    <it-steppers-item label="Secondo contenuto" icon="locked" iconTitle="Lucchetto"></it-steppers-item>
    <it-steppers-item label="Terzo contenuto" icon="settings" iconTitle="Impostazioni"></it-steppers-item>
  </it-steppers-container>
</div>

<h4>Ordine degli step</h4>
<div class="bd-example">
  <it-steppers-container [activeStep]="1" steppersNumber="true" showBackButton="false" showForwardButton="false">
    <it-steppers-item label="Primo contenuto"></it-steppers-item>
    <it-steppers-item label="Secondo contenuto"></it-steppers-item>
    <it-steppers-item label="Terzo contenuto"></it-steppers-item>
  </it-steppers-container>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-steppers-header-example',
  templateUrl: './steppers-header-example.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class SteppersHeaderExampleComponent {}`],[`html`,`<h3>Varianti navigazione per mobile</h3>
<h4>Progress bar</h4>
<div class="bd-example mobile-examples">
  <it-steppers-container [activeStep]="1" showHeader="false" progressStyle="progress">
    <it-steppers-item label="Primo contenuto"></it-steppers-item>
    <it-steppers-item label="Secondo contenuto"></it-steppers-item>
    <it-steppers-item label="Terzo contenuto"></it-steppers-item>
  </it-steppers-container>
</div>

<h4>Pallini</h4>
<div class="bd-example mobile-examples">
  <it-steppers-container [activeStep]="1" showHeader="false" progressStyle="dots">
    <it-steppers-item label="Primo contenuto"></it-steppers-item>
    <it-steppers-item label="Secondo contenuto"></it-steppers-item>
    <it-steppers-item label="Terzo contenuto"></it-steppers-item>
  </it-steppers-container>
</div>

<h4>Pulsante salva</h4>
<div class="bd-example">
  <it-steppers-container [activeStep]="1" showHeader="false" showSaveButton="true">
    <it-steppers-item label="Primo contenuto"></it-steppers-item>
    <it-steppers-item label="Secondo contenuto"></it-steppers-item>
    <it-steppers-item label="Terzo contenuto"></it-steppers-item>
  </it-steppers-container>
</div>

<h4>Pulsante conferma</h4>
<div class="bd-example">
  <it-steppers-container [activeStep]="1" showHeader="false" showForwardButton="false" showConfirmButton="true">
    <it-steppers-item label="Primo contenuto"></it-steppers-item>
    <it-steppers-item label="Secondo contenuto"></it-steppers-item>
    <it-steppers-item label="Terzo contenuto"></it-steppers-item>
  </it-steppers-container>
</div>`,`typescript`,`import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-steppers-mobile-example',
  templateUrl: './steppers-mobile-example.component.html',
  styleUrls: ['steppers-mobile-example.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class SteppersMobileExampleComponent {}`]],template:function(n,o){n&1&&im(0,`it-steppers-dynamic-example`)(1,`it-source-display`,0)(2,`it-steppers-header-example`)(3,`it-source-display`,1)(4,`it-steppers-mobile-example`)(5,`it-source-display`,2)},dependencies:[q$1,O,G,$],encapsulation:2,changeDetection:1})}}return e})();var ne=[{path:``,component:(()=>{class e{constructor(){this.steppersContainer=oe.components.find(s=>s.name===`ItSteppersContainerComponent`),this.steppersItem=oe.components.find(s=>s.name===`ItSteppersItemComponent`)}static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-steppers-index`]],standalone:!1,decls:14,vars:2,consts:[[1,`bd-title`],[1,`bd-lead`],[`label`,`Esempi`,`active`,`true`,1,`pt-3`],[`label`,`API`,1,`pt-3`],[3,`component`]],template:function(n,o){n&1&&(Zi(0,`h1`,0),hb(1,`Steppers`),nu(),Zi(2,`p`,1),hb(3,` Gli \u201CStepper\u201D mostrano l\u2019avanzamento del progresso di una procedura a pi\xF9 passi attraverso la numerazione dei passi stessi.
`),nu(),Zi(4,`it-tab-container`)(5,`it-tab-item`,2),im(6,`it-steppers-examples`),nu(),Zi(7,`it-tab-item`,3)(8,`h2`),hb(9,`Steppers container`),nu(),im(10,`it-api-parameters`,4),Zi(11,`h2`),hb(12,`Steppers item`),nu(),im(13,`it-api-parameters`,4),nu()()),n&2&&(MD(10),om(`component`,o.steppersContainer),MD(3),om(`component`,o.steppersItem))},dependencies:[$$1,Ile,Fx,q],encapsulation:2,changeDetection:1})}}return e})()}];var K=(()=>{class e{static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵmod=Pg({type:e})}static{this.ɵinj=fa({imports:[ua.forChild(ne),ua]})}}return e})();var _e=(()=>{class e{static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵmod=Pg({type:e})}static{this.ɵinj=fa({imports:[Zt,te,_Z,K]})}}return e})();export{_e as SteppersModule};