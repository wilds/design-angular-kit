import{$ as MD,Cn as fa,Fn as hb,Hn as im,Zt as Zi,cr as om,ct as Pg,jt as Tw,l as BI,or as nu}from"./chunk-BXp14hLr.js";import{E as Zt}from"./chunk-CtdKxuHA.js";import{Jt as ua,f as Fx,h as Ile,r as A0,v as LP}from"./main-JCJIXXB4.js";import{i as te,n as oe,r as q,t as $$1}from"./chunk-4-cg1OfJ.js";var D=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-skiplink-example`]],standalone:!1,decls:14,vars:0,consts:[[1,`bd-example`],[1,`example-section`],[`href`,`#`],[`nav`,``]],template:function(t,l){t&1&&(Zi(0,`h3`),hb(1,`Skiplink`),nu(),Zi(2,`div`,0)(3,`p`,1)(4,`it-skiplink`)(5,`it-skiplink-item`,2),hb(6,`Vai al menu`),nu(),Zi(7,`it-skiplink-item`,2),hb(8,`Vai al contenuto`),nu()(),Zi(9,`it-skiplink`,3)(10,`it-skiplink-item`,2),hb(11,`Vai al menu`),nu(),Zi(12,`it-skiplink-item`,2),hb(13,`Vai al contenuto`),nu()()()())},dependencies:[A0,LP],encapsulation:2,changeDetection:1})}}return e})();var I=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-skiplink-examples`]],standalone:!1,decls:2,vars:0,consts:[[`html`,`<h3>Skiplink</h3>
<div class="bd-example">
  <p class="example-section">
    <it-skiplink>
      <it-skiplink-item href="#">Vai al menu</it-skiplink-item>
      <it-skiplink-item href="#">Vai al contenuto</it-skiplink-item>
    </it-skiplink>

    <it-skiplink nav>
      <it-skiplink-item href="#">Vai al menu</it-skiplink-item>
      <it-skiplink-item href="#">Vai al contenuto</it-skiplink-item>
    </it-skiplink>
  </p>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-skiplink-example',
  templateUrl: './skiplink-example.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class SkiplinkExampleComponent {}`]],template:function(t,l){t&1&&im(0,`it-skiplink-example`)(1,`it-source-display`,0)},dependencies:[q,D],encapsulation:2,changeDetection:1})}}return e})();var F=[{path:``,component:(()=>{class e{constructor(){this.component=oe.components.find(p=>p.name===`ItSkiplinkComponent`)}static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-skiplink-index`]],standalone:!1,decls:12,vars:2,consts:[[1,`bd-title`],[1,`bd-lead`],[3,`innerHTML`],[`label`,`Esempi`,`active`,`true`,1,`mt-3`],[`label`,`API`,1,`mt-3`],[3,`component`]],template:function(t,l){t&1&&(Zi(0,`h1`,0),hb(1,`Skiplink`),nu(),Zi(2,`p`,1),hb(3,`Barra di navigazione laterale, include liste di link e liste di link annidate.`),nu(),im(4,`div`,2),Zi(5,`it-tab-container`)(6,`it-tab-item`,3),im(7,`it-skiplink-examples`),nu(),Zi(8,`it-tab-item`,4)(9,`h2`),hb(10,`Skiplink`),nu(),im(11,`it-api-parameters`,5),nu()()),t&2&&(MD(4),om(`innerHTML`,l.component.description,BI),MD(7),om(`component`,l.component))},dependencies:[$$1,Ile,Fx,I],encapsulation:2,changeDetection:1})}}return e})()}];var V=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵmod=Pg({type:e})}static{this.ɵinj=fa({imports:[ua.forChild(F),ua]})}}return e})();var $=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵmod=Pg({type:e})}static{this.ɵinj=fa({imports:[Zt,te,V]})}}return e})();export{$ as SkiplinkModule};