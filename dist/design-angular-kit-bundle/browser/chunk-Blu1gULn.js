import{$ as MD,Cn as fa,Fn as hb,Hn as im,Kr as xC,Mn as gm,O as Gd,Zt as Zi,_r as qd,cr as om,ct as Pg,gr as qC,jt as Tw,l as BI,or as nu,pn as cu}from"./chunk-BXp14hLr.js";import{E as Zt}from"./chunk-CtdKxuHA.js";import{Bt as xo,Jt as ua,V as _Z,f as Fx,h as Ile,j as T0}from"./main-JCJIXXB4.js";import{i as te,n as oe,r as q$1,t as $}from"./chunk-4-cg1OfJ.js";var F=(()=>{class e{constructor(){this.collapse=!0,this.showTime=``,this.shownTime=``,this.hideTime=``,this.hiddenTime=``}logShown(){this.shownTime=new Date().toISOString()}logHidden(){this.hiddenTime=new Date().toISOString()}static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-collapse-example`]],standalone:!1,decls:15,vars:2,consts:[[`itCollapse`,`itCollapse`],[1,`bd-example`],[1,`example-section`],[`itButton`,`primary`,3,`click`],[3,`showEvent`,`hiddenEvent`],[1,`py-3`],[1,`mt-4`]],template:function(t,a){if(t&1){let O=xC();Zi(0,`h3`),hb(1,`Esempio direttiva Collapse`),nu(),Zi(2,`div`,1)(3,`div`,2)(4,`button`,3),gm(`click`,function(){Gd(O);let B=qC(7);return qd(B.toggle())}),hb(5,`Apri/chiudi contenuto`),nu(),Zi(6,`it-collapse`,4,0),gm(`showEvent`,function(){return a.logShown()})(`hiddenEvent`,function(){return a.logHidden()}),Zi(8,`div`,5),hb(9,` Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. `),nu()()(),Zi(10,`div`,6)(11,`div`),hb(12),nu(),Zi(13,`div`),hb(14),nu()()()}t&2&&(MD(12),cu(`Ultima emissione dell'evento shown = `,a.shownTime),MD(2),cu(`Ultima emissione dell'evento hidden = `,a.hiddenTime))},dependencies:[xo,T0],encapsulation:2,changeDetection:1})}}return e})();var N=(()=>{class e{constructor(){}static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-collapse-examples`]],standalone:!1,decls:2,vars:0,consts:[[`html`,`<h3>Esempio direttiva Collapse</h3>
<div class="bd-example">
  <div class="example-section">
    <button itButton="primary" (click)="itCollapse.toggle()">Apri/chiudi contenuto</button>

    <it-collapse (showEvent)="logShown()" (hiddenEvent)="logHidden()" #itCollapse="itCollapse">
      <div class="py-3">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft
        beer labore wes anderson cred nesciunt sapiente ea proident.
      </div>
    </it-collapse>
  </div>

  <div class="mt-4">
    <div>Ultima emissione dell'evento shown = /{/{ shownTime /}/}</div>

    <div>Ultima emissione dell'evento hidden = /{/{ hiddenTime /}/}</div>
  </div>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-collapse-example',
  templateUrl: './collapse-example.component.html',
  styleUrls: ['./collapse-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class CollapseExampleComponent {
  collapse = true;

  showTime = '';
  shownTime = '';
  hideTime = '';
  hiddenTime = '';

  logShown() {
    this.shownTime = new Date().toISOString();
  }

  logHidden() {
    this.hiddenTime = new Date().toISOString();
  }
}`]],template:function(t,a){t&1&&im(0,`it-collapse-example`)(1,`it-source-display`,0)},dependencies:[q$1,F],encapsulation:2,changeDetection:1})}}return e})();var q=[{path:``,component:(()=>{class e{constructor(){this.collapseComponent=oe.components.find(l=>l.name===`ItCollapseComponent`)}static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-collapse-index`]],standalone:!1,decls:12,vars:2,consts:[[1,`bd-title`],[1,`bd-lead`],[3,`innerHTML`],[`label`,`Esempi`,`active`,`true`,1,`pt-3`],[`label`,`API`,1,`pt-3`],[3,`component`]],template:function(t,a){t&1&&(Zi(0,`h1`,0),hb(1,`Collapse`),nu(),Zi(2,`p`,1),hb(3,`Direttiva per l'interazione con elementi richiudibili`),nu(),im(4,`div`,2),Zi(5,`it-tab-container`)(6,`it-tab-item`,3),im(7,`it-collapse-examples`),nu(),Zi(8,`it-tab-item`,4)(9,`h2`),hb(10,`Collapse`),nu(),im(11,`it-api-parameters`,5),nu()()),t&2&&(MD(4),om(`innerHTML`,a.collapseComponent.description,BI),MD(7),om(`component`,a.collapseComponent))},dependencies:[$,Ile,Fx,N],encapsulation:2,changeDetection:1})}}return e})()}];var j=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵmod=Pg({type:e})}static{this.ɵinj=fa({imports:[ua.forChild(q),ua]})}}return e})();var me=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵmod=Pg({type:e})}static{this.ɵinj=fa({imports:[Zt,_Z,te,j]})}}return e})();export{me as CollapseModule};