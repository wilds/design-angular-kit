import{$ as MD,Cn as fa,Fn as hb,Ft as VC,Hn as im,Hr as wb,Kn as kb,Kr as xC,Mn as gm,O as Gd,Yr as yC,Zt as Zi,_r as qd,cr as om,ct as Pg,gr as qC,jt as Tw,l as BI,o as Ab,or as nu,pn as cu,x as EC}from"./chunk-BXp14hLr.js";import{E as Zt,w as Ui}from"./chunk-CtdKxuHA.js";import{Bt as xo,Jt as ua,O as S0,f as Fx,h as Ile}from"./main-JCJIXXB4.js";import{i as te,n as oe,r as q$1,t as $$1}from"./chunk-4-cg1OfJ.js";var N=(()=>{class t{static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵcmp=Tw({type:t,selectors:[[`it-tooltip-example`]],standalone:!1,decls:6,vars:0,consts:[[1,`bd-example`],[1,`example-section`],[`type`,`button`,`itTooltip`,`Tooltip di esempio`,`triggers`,`click`,1,`btn`,`btn-lg`,`btn-danger`]],template:function(e,a){e&1&&(Zi(0,`h3`),hb(1,`Esempio`),nu(),Zi(2,`div`,0)(3,`p`,1)(4,`button`,2),hb(5,` Clicca per attivare/disattivare il tooltip `),nu()()())},dependencies:[S0],encapsulation:2,changeDetection:1})}}return t})();var q=(()=>{class t{constructor(){this.currentPlacement=`right`}changeCurrentPlacement(){switch(this.currentPlacement){case`right`:this.currentPlacement=`top`;break;case`top`:this.currentPlacement=`left`;break;case`left`:this.currentPlacement=`bottom`;break;case`bottom`:this.currentPlacement=`right`}}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵcmp=Tw({type:t,selectors:[[`it-tooltip-placements-example`]],standalone:!1,decls:17,vars:1,consts:[[1,`bd-example`],[1,`example-section`,`mb-5`],[`type`,`button`,`itTooltip`,`Vivamus sagittis lacus vel augue laoreet rutrum faucibus.`,`tooltipPlacement`,`top`,1,`btn`,`btn-outline-secondary`,`me-2`],[`type`,`button`,`itTooltip`,`Vivamus sagittis lacus vel augue laoreet rutrum faucibus.`,`tooltipPlacement`,`right`,1,`btn`,`btn-outline-secondary`,`me-2`],[`type`,`button`,`itTooltip`,`Vivamus sagittis lacus vel augue laoreet rutrum faucibus.`,`tooltipPlacement`,`left`,1,`btn`,`btn-outline-secondary`,`me-2`],[`type`,`button`,`itTooltip`,`Vivamus sagittis lacus vel augue laoreet rutrum faucibus.`,`tooltipPlacement`,`bottom`,1,`btn`,`btn-outline-secondary`],[1,`example-section`],[`type`,`button`,`itTooltip`,`Tooltip di esempio`,`triggers`,`click`,1,`btn`,`btn-lg`,`btn-danger`,`me-4`,3,`tooltipPlacement`],[`type`,`button`,1,`btn`,`btn-lg`,`btn-primary`,3,`click`]],template:function(e,a){e&1&&(Zi(0,`h3`),hb(1,`Le quattro direzioni`),nu(),Zi(2,`div`,0)(3,`p`,1)(4,`button`,2),hb(5,` Tooltip in alto `),nu(),Zi(6,`button`,3),hb(7,` Tooltip a destra `),nu(),Zi(8,`button`,4),hb(9,` Tooltip a sinistra `),nu(),Zi(10,`button`,5),hb(11,` Tooltip in basso `),nu()(),Zi(12,`p`,6)(13,`button`,7),hb(14,` Clicca per il tooltip ricollocabile `),nu(),Zi(15,`button`,8),gm(`click`,function(){return a.changeCurrentPlacement()}),hb(16,`Cambia il collocamento della tooltip`),nu()()()),e&2&&(MD(13),om(`tooltipPlacement`,a.currentPlacement))},dependencies:[S0],encapsulation:2,changeDetection:1})}}return t})();function $(t,W){if(t&1&&(Zi(0,`div`),hb(1),Ab(2,`date`),nu()),t&2){let l=VC();MD(),cu(`Ultima emissione dell'evento shown = `,kb(2,1,l.shownTime,`long`))}}function tt(t,W){if(t&1&&(Zi(0,`div`),hb(1),Ab(2,`date`),nu()),t&2){let l=VC();MD(),cu(`Ultima emissione dell'evento hidden = `,kb(2,1,l.hiddenTime,`long`))}}var R=(()=>{class t{constructor(){this.showTime=``,this.shownTime=``,this.insertedTime=``,this.hideTime=``,this.hiddenTime=``}logShow(){this.showTime=new Date().toISOString()}logShown(){this.shownTime=new Date().toISOString()}logInserted(){this.insertedTime=new Date().toISOString()}logHide(){this.hideTime=new Date().toISOString()}logHidden(){this.hiddenTime=new Date().toISOString()}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵcmp=Tw({type:t,selectors:[[`it-tooltip-events-example`]],standalone:!1,decls:12,vars:2,consts:[[`destructibleTooltip`,`itTooltip`],[1,`bd-example`],[1,`example-section`],[`itButton`,`danger`,`size`,`lg`,`itTooltip`,`Tooltip di esempio`,1,`me-4`,3,`shownEvent`,`hiddenEvent`],[`itButton`,`primary`,`size`,`lg`,3,`click`],[1,`tooltip-events`,`mt-4`]],template:function(e,a){if(e&1){let D=xC();Zi(0,`h3`),hb(1,`Eventi tooltip`),nu(),Zi(2,`div`,1)(3,`p`,2)(4,`button`,3,0),gm(`shownEvent`,function(){return a.logShown()})(`hiddenEvent`,function(){return a.logHidden()}),hb(6,` Clicca per il tooltip distruttibile `),nu(),Zi(7,`button`,4),gm(`click`,function(){Gd(D);let X=qC(5);return qd(X.dispose())}),hb(8,`Distruggi il tooltip`),nu()(),Zi(9,`div`,5),yC(10,$,3,4,`div`),yC(11,tt,3,4,`div`),nu()()}e&2&&(MD(10),EC(a.shownTime?10:-1),MD(),EC(a.hiddenTime?11:-1))},dependencies:[xo,S0,Ui],encapsulation:2,changeDetection:1})}}return t})();var A=(()=>{class t{static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵcmp=Tw({type:t,selectors:[[`it-tooltip-disabled-example`]],standalone:!1,decls:11,vars:0,consts:[[1,`bd-example`],[1,`example-section`],[`itTooltip`,`Popover disabilitato`,1,`d-inline-block`],[`type`,`button`,`disabled`,``,1,`btn`,`btn-primary`]],template:function(e,a){e&1&&(Zi(0,`h3`),hb(1,`Elementi disabilitati`),nu(),Zi(2,`div`,0)(3,`p`,1)(4,`span`,2)(5,`button`,3),hb(6,`Elemento disabilitato con popover abilitato`),nu()()(),Zi(7,`p`,1)(8,`span`,2)(9,`button`,3),hb(10,`Elemento attivo con popover disabilitato`),nu()()()())},dependencies:[S0],encapsulation:2,changeDetection:1})}}return t})();var G=(()=>{class t{static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵcmp=Tw({type:t,selectors:[[`it-tooltip-config-example`]],standalone:!1,features:[wb([])],decls:6,vars:0,consts:[[1,`bd-example`],[1,`example-section`],[`type`,`button`,`itTooltip`,`Tooltip di esempio`,1,`btn`,`btn-lg`,`btn-danger`]],template:function(e,a){e&1&&(Zi(0,`h3`),hb(1,`Configurazione globale dei tooltip`),nu(),Zi(2,`div`,0)(3,`p`,1)(4,`button`,2),hb(5,` Clicca per attivare/disattivare il tooltip preconfigurato `),nu()()())},dependencies:[S0],encapsulation:2,changeDetection:1})}}return t})();var J=(()=>{class t{static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵcmp=Tw({type:t,selectors:[[`it-tooltip-examples`]],standalone:!1,decls:10,vars:0,consts:[[`html`,`<h3>Esempio</h3>
<div class="bd-example">
  <p class="example-section">
    <button type="button" class="btn btn-lg btn-danger" itTooltip="Tooltip di esempio" triggers="click">
      Clicca per attivare/disattivare il tooltip
    </button>
  </p>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-tooltip-example',
  templateUrl: './tooltip-example.component.html',
  styleUrls: ['./tooltip-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class TooltipExampleComponent {}`],[`html`,`<h3>Le quattro direzioni</h3>
<div class="bd-example">
  <p class="example-section mb-5">
    <button
      type="button"
      class="btn btn-outline-secondary me-2"
      itTooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
      tooltipPlacement="top">
      Tooltip in alto
    </button>

    <button
      type="button"
      class="btn btn-outline-secondary me-2"
      itTooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
      tooltipPlacement="right">
      Tooltip a destra
    </button>

    <button
      type="button"
      class="btn btn-outline-secondary me-2"
      itTooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
      tooltipPlacement="left">
      Tooltip a sinistra
    </button>

    <button
      type="button"
      class="btn btn-outline-secondary"
      itTooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
      tooltipPlacement="bottom">
      Tooltip in basso
    </button>
  </p>

  <p class="example-section">
    <button
      type="button"
      class="btn btn-lg btn-danger me-4"
      itTooltip="Tooltip di esempio"
      [tooltipPlacement]="currentPlacement"
      triggers="click">
      Clicca per il tooltip ricollocabile
    </button>

    <button type="button" class="btn btn-lg btn-primary" (click)="changeCurrentPlacement()">Cambia il collocamento della tooltip</button>
  </p>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ElementPlacement } from 'design-angular-kit/interfaces/core';

@Component({
  selector: 'it-tooltip-placements-example',
  templateUrl: './tooltip-placements-example.component.html',
  styleUrls: ['./tooltip-placements-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class TooltipPlacementsExampleComponent {
  currentPlacement: ElementPlacement = 'right';

  changeCurrentPlacement() {
    switch (this.currentPlacement) {
      case 'right':
        this.currentPlacement = 'top';
        break;
      case 'top':
        this.currentPlacement = 'left';
        break;
      case 'left':
        this.currentPlacement = 'bottom';
        break;
      case 'bottom':
        this.currentPlacement = 'right';
        break;
    }
  }
}`],[`html`,`<h3>Elementi disabilitati</h3>
<div class="bd-example">
  <p class="example-section">
    <span class="d-inline-block" itTooltip="Popover disabilitato">
      <button class="btn btn-primary" type="button" disabled>Elemento disabilitato con popover abilitato</button>
    </span>
  </p>

  <p class="example-section">
    <span class="d-inline-block" itTooltip="Popover disabilitato">
      <button class="btn btn-primary" type="button" disabled>Elemento attivo con popover disabilitato</button>
    </span>
  </p>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-tooltip-disabled-example',
  templateUrl: './tooltip-disabled-example.component.html',
  styleUrls: ['./tooltip-disabled-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class TooltipDisabledExampleComponent {}`],[`html`,`<h3>Eventi tooltip</h3>
<div class="bd-example">
  <p class="example-section">
    <button
      itButton="danger"
      size="lg"
      class="me-4"
      itTooltip="Tooltip di esempio"
      (shownEvent)="logShown()"
      (hiddenEvent)="logHidden()"
      #destructibleTooltip="itTooltip">
      Clicca per il tooltip distruttibile
    </button>

    <button itButton="primary" size="lg" (click)="destructibleTooltip.dispose()">Distruggi il tooltip</button>
  </p>

  <div class="tooltip-events mt-4">
    @if (shownTime) {
      <div>Ultima emissione dell'evento shown = /{/{ shownTime | date: 'long' /}/}</div>
    }

    @if (hiddenTime) {
      <div>Ultima emissione dell'evento hidden = /{/{ hiddenTime | date: 'long' /}/}</div>
    }
  </div>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-tooltip-events-example',
  templateUrl: './tooltip-events-example.component.html',
  styleUrls: ['./tooltip-events-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class TooltipEventsExampleComponent {
  showTime = '';
  shownTime = '';
  insertedTime = '';
  hideTime = '';
  hiddenTime = '';

  logShow() {
    this.showTime = new Date().toISOString();
  }

  logShown() {
    this.shownTime = new Date().toISOString();
  }

  logInserted() {
    this.insertedTime = new Date().toISOString();
  }

  logHide() {
    this.hideTime = new Date().toISOString();
  }

  logHidden() {
    this.hiddenTime = new Date().toISOString();
  }
}`],[`html`,`<h3>Configurazione globale dei tooltip</h3>
<div class="bd-example">
  <p class="example-section">
    <button type="button" class="btn btn-lg btn-danger" itTooltip="Tooltip di esempio">
      Clicca per attivare/disattivare il tooltip preconfigurato
    </button>
  </p>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-tooltip-config-example',
  templateUrl: './tooltip-config-example.component.html',
  styleUrls: ['./tooltip-config-example.component.scss'],
  providers: [],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class TooltipConfigExampleComponent {}`]],template:function(e,a){e&1&&im(0,`it-tooltip-example`)(1,`it-source-display`,0)(2,`it-tooltip-placements-example`)(3,`it-source-display`,1)(4,`it-tooltip-disabled-example`)(5,`it-source-display`,2)(6,`it-tooltip-events-example`)(7,`it-source-display`,3)(8,`it-tooltip-config-example`)(9,`it-source-display`,4)},dependencies:[q$1,N,q,R,A,G],encapsulation:2,changeDetection:1})}}return t})();var lt=[{path:``,component:(()=>{class t{constructor(){this.directive=oe.directives.find(l=>l.name===`ItTooltipDirective`)}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵcmp=Tw({type:t,selectors:[[`it-tooltip-index`]],standalone:!1,decls:10,vars:2,consts:[[1,`bd-title`],[1,`bd-lead`],[3,`innerHTML`],[`label`,`Esempi`,`active`,`true`,1,`pt-3`],[`label`,`API`,1,`pt-3`],[3,`component`]],template:function(e,a){e&1&&(Zi(0,`h1`,0),hb(1,`Tooltip`),nu(),Zi(2,`p`,1),hb(3,`La direttiva tooltip utilizzabile per aggiungere dei tooltip informativi a qualsiasi elemento del tuo sito`),nu(),im(4,`div`,2),Zi(5,`it-tab-container`)(6,`it-tab-item`,3),im(7,`it-tooltip-examples`),nu(),Zi(8,`it-tab-item`,4),im(9,`it-api-parameters`,5),nu()()),e&2&&(MD(4),om(`innerHTML`,a.directive.description,BI),MD(5),om(`component`,a.directive))},dependencies:[$$1,Ile,Fx,J],encapsulation:2,changeDetection:1})}}return t})()}];var Q=(()=>{class t{static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵmod=Pg({type:t})}static{this.ɵinj=fa({imports:[ua.forChild(lt),ua]})}}return t})();var Vt=(()=>{class t{static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵmod=Pg({type:t})}static{this.ɵinj=fa({imports:[Zt,te,Q]})}}return t})();export{Vt as TooltipModule};