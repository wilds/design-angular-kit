import{$ as MD,Cn as fa,Fn as hb,Hn as im,Zt as Zi,cr as om,ct as Pg,jt as Tw,l as BI,or as nu}from"./chunk-BXp14hLr.js";import{E as Zt}from"./chunk-CtdKxuHA.js";import{Jt as ua,Lt as wp,V as _Z,f as Fx,h as Ile}from"./main-JCJIXXB4.js";import{i as te,n as oe,r as q,t as $}from"./chunk-4-cg1OfJ.js";var I=(()=>{class t{static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵcmp=Tw({type:t,selectors:[[`it-back-button-link`]],standalone:!1,decls:9,vars:0,consts:[[1,`bd-example`],[1,`row`,`my-2`],[1,`col`],[`buttonStyle`,`link`],[`buttonStyle`,`link`,`direction`,`up`]],template:function(e,m){e&1&&(Zi(0,`h3`),hb(1,`Link`),nu(),Zi(2,`div`,0)(3,`div`,1)(4,`div`,2),im(5,`it-back-button`,3),nu()(),Zi(6,`div`,1)(7,`div`,2),im(8,`it-back-button`,4),nu()()())},dependencies:[wp],encapsulation:2,changeDetection:1})}}return t})();var M=(()=>{class t{static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵcmp=Tw({type:t,selectors:[[`it-back-button-button`]],standalone:!1,decls:9,vars:0,consts:[[1,`bd-example`],[1,`row`,`my-2`],[1,`col`],[`direction`,`up`]],template:function(e,m){e&1&&(Zi(0,`h3`),hb(1,`Pulsanti`),nu(),Zi(2,`div`,0)(3,`div`,1)(4,`div`,2),im(5,`it-back-button`),nu()(),Zi(6,`div`,1)(7,`div`,2),im(8,`it-back-button`,3),nu()()())},dependencies:[wp],encapsulation:2,changeDetection:1})}}return t})();var w=(()=>{class t{constructor(){this.typeTornaIndietro=`tornaIndietro`,this.typeLivelloSuperiore=`livelloSuperiore`}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵcmp=Tw({type:t,selectors:[[`it-back-button-only-icon`]],standalone:!1,decls:8,vars:2,consts:[[1,`bd-example`],[1,`row`,`my-2`],[1,`col-auto`],[3,`showText`],[`direction`,`up`,3,`showText`]],template:function(e,m){e&1&&(Zi(0,`h3`),hb(1,`Pulsanti con sola icona`),nu(),Zi(2,`div`,0)(3,`div`,1)(4,`div`,2),im(5,`it-back-button`,3),nu(),Zi(6,`div`,2),im(7,`it-back-button`,4),nu()()()),e&2&&(MD(5),om(`showText`,!1),MD(2),om(`showText`,!1))},dependencies:[wp],encapsulation:2,changeDetection:1})}}return t})();var E=(()=>{class t{static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵcmp=Tw({type:t,selectors:[[`it-back-button-examples`]],standalone:!1,decls:6,vars:0,consts:[[`html`,`<h3>Link</h3>
<div class="bd-example">
  <div class="row my-2">
    <div class="col">
      <it-back-button buttonStyle="link"></it-back-button>
    </div>
  </div>
  <div class="row my-2">
    <div class="col">
      <it-back-button buttonStyle="link" direction="up"></it-back-button>
    </div>
  </div>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-back-button-link',
  templateUrl: './back-button-link.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class BackButtonLinkComponent {}`],[`html`,`<h3>Pulsanti</h3>
<div class="bd-example">
  <div class="row my-2">
    <div class="col">
      <it-back-button></it-back-button>
    </div>
  </div>
  <div class="row my-2">
    <div class="col">
      <it-back-button direction="up"></it-back-button>
    </div>
  </div>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-back-button-button',
  templateUrl: './back-button-button.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class BackButtonButtonComponent {}`],[`html`,`<h3>Pulsanti con sola icona</h3>
<div class="bd-example">
  <div class="row my-2">
    <div class="col-auto">
      <it-back-button [showText]="false"></it-back-button>
    </div>
    <div class="col-auto">
      <it-back-button [showText]="false" direction="up"></it-back-button>
    </div>
  </div>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-back-button-only-icon',
  templateUrl: './back-button-only-icon.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class BackButtonOnlyIconComponent {
  typeTornaIndietro: 'tornaIndietro' | 'livelloSuperiore' = 'tornaIndietro';
  typeLivelloSuperiore: 'tornaIndietro' | 'livelloSuperiore' = 'livelloSuperiore';
}`]],template:function(e,m){e&1&&im(0,`it-back-button-link`)(1,`it-source-display`,0)(2,`it-back-button-button`)(3,`it-source-display`,1)(4,`it-back-button-only-icon`)(5,`it-source-display`,2)},dependencies:[q,I,M,w],encapsulation:2,changeDetection:1})}}return t})();var N=[{path:``,component:(()=>{class t{constructor(){this.component=oe.components.find(a=>a.name===`ItBackButtonComponent`)}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵcmp=Tw({type:t,selectors:[[`it-go-back-index`]],standalone:!1,decls:10,vars:2,consts:[[1,`bd-title`],[1,`bd-lead`],[3,`innerHTML`],[`label`,`Esempi`,`active`,`true`,1,`mt-3`],[`label`,`API`,1,`mt-3`],[3,`component`]],template:function(e,m){e&1&&(Zi(0,`h1`,0),hb(1,`BackButton`),nu(),Zi(2,`p`,1),hb(3,`Consente agli utenti di avere un link o pulsante con un'azione equivalente al "torna indietro" del browser.`),nu(),im(4,`div`,2),Zi(5,`it-tab-container`)(6,`it-tab-item`,3),im(7,`it-back-button-examples`),nu(),Zi(8,`it-tab-item`,4),im(9,`it-api-parameters`,5),nu()()),e&2&&(MD(4),om(`innerHTML`,m.component.description,BI),MD(5),om(`component`,m.component))},dependencies:[$,Ile,Fx,E],encapsulation:2,changeDetection:1})}}return t})()}];var L=(()=>{class t{static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵmod=Pg({type:t})}static{this.ɵinj=fa({imports:[ua.forChild(N),ua]})}}return t})();var ct=(()=>{class t{static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵmod=Pg({type:t})}static{this.ɵinj=fa({imports:[Zt,te,_Z,L]})}}return t})();export{ct as BackButtonModule};