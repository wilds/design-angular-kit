import{$ as MD,Cn as fa,Fn as hb,Hn as im,Kr as xC,Mn as gm,Mr as su,O as Gd,Zt as Zi,_r as qd,cr as om,ct as Pg,gr as qC,jt as Tw,l as BI,or as nu,pn as cu,sn as au}from"./chunk-BXp14hLr.js";import{E as Zt}from"./chunk-CtdKxuHA.js";import{Bt as xo,Jt as ua,K as c1,f as Fx,h as Ile}from"./main-JCJIXXB4.js";import{i as te,n as oe,r as q$1,t as $}from"./chunk-4-cg1OfJ.js";var q=(()=>{class t{static{this.ɵfac=function(o){return new(o||t)}}static{this.ɵcmp=Tw({type:t,selectors:[[`it-alert-color-example`]],standalone:!1,decls:36,vars:0,consts:[[1,`bd-example`],[1,`example-section`],[`color`,`primary`],[`color`,`success`],[`color`,`warning`],[`color`,`danger`],[1,`mt-5`],[`href`,`#`,1,`alert-link`]],template:function(o,l){o&1&&(Zi(0,`h3`),hb(1,`Esempi`),nu(),Zi(2,`div`,0)(3,`div`,1)(4,`it-alert`,2),hb(5,` Questo è un alert di tipo "`),Zi(6,`b`),hb(7,`primary`),nu(),hb(8,`". `),nu(),Zi(9,`it-alert`),hb(10,` Questo è un alert di tipo "`),Zi(11,`b`),hb(12,`info`),nu(),hb(13,`". `),nu(),Zi(14,`it-alert`,3),hb(15,` Questo è un alert di tipo "`),Zi(16,`b`),hb(17,`success`),nu(),hb(18,`". `),nu(),Zi(19,`it-alert`,4),hb(20,` Questo è un alert di tipo "`),Zi(21,`b`),hb(22,`warning`),nu(),hb(23,`". `),nu(),Zi(24,`it-alert`,5),hb(25,` Questo è un alert di tipo "`),Zi(26,`b`),hb(27,`danger`),nu(),hb(28,`". `),nu(),Zi(29,`h3`,6),hb(30,`Link evidenziato`),nu(),Zi(31,`it-alert`,5),hb(32,` Questo è un alert con un esempio di `),Zi(33,`a`,7),hb(34,`link`),nu(),hb(35,` evidenziato. `),nu()()())},dependencies:[c1],encapsulation:2,changeDetection:1})}}return t})();var j=(()=>{class t{static{this.ɵfac=function(o){return new(o||t)}}static{this.ɵcmp=Tw({type:t,selectors:[[`it-alert-additional-content-example`]],standalone:!1,decls:12,vars:0,consts:[[1,`bd-example`],[1,`example-section`],[`color`,`success`],[`heading`,``],[1,`mb-0`]],template:function(o,l){o&1&&(Zi(0,`h3`),hb(1,`Contenuto aggiuntivo`),nu(),Zi(2,`div`,0)(3,`div`,1)(4,`it-alert`,2),su(5,3),hb(6,`Avviso di successo!`),au(),Zi(7,`p`),hb(8,` Stai leggendo questo importante messaggio di avviso di successo. Questo testo di esempio sarà più lungo in modo da poter vedere come funzioni la spaziatura all'interno di un avviso con questo tipo di contenuto. `),nu(),im(9,`hr`),Zi(10,`p`,4),hb(11,`Quando necessario, assicurarti di inserire le utilità di margine per mantenere gli spazi equilibrati.`),nu()()()())},dependencies:[c1],encapsulation:2,changeDetection:1})}}return t})();var L=(()=>{class t{onClose(){this.closeTime=new Date().toISOString()}onClosed(){this.closedTime=new Date().toISOString()}static{this.ɵfac=function(o){return new(o||t)}}static{this.ɵcmp=Tw({type:t,selectors:[[`it-alert-closing-example`]],standalone:!1,decls:22,vars:2,consts:[[`alert`,`itAlert`],[1,`bd-example`],[1,`example-section`],[`color`,`warning`,`dismissible`,`true`,3,`closeEvent`,`closedEvent`],[1,`my-4`],[`color`,`warning`],[`itButton`,`primary`,`type`,`button`,3,`click`]],template:function(o,l){if(o&1){let H=xC();Zi(0,`h3`),hb(1,`Chiusura`),nu(),Zi(2,`div`,1)(3,`div`,2)(4,`it-alert`,3),gm(`closeEvent`,function(){return l.onClose()})(`closedEvent`,function(){return l.onClosed()}),Zi(5,`strong`),hb(6,`Attenzione`),nu(),hb(7,` Alcuni campi inseriti sono da controllare. `),nu(),Zi(8,`div`,4)(9,`div`),hb(10),nu(),Zi(11,`div`),hb(12),nu()(),Zi(13,`h3`),hb(14,`Chiusura manuale`),nu(),Zi(15,`it-alert`,5,0)(17,`strong`),hb(18,`Attenzione`),nu(),hb(19,` Alcuni campi inseriti sono da controllare. `),nu(),Zi(20,`button`,6),gm(`click`,function(){Gd(H);let P=qC(16);return qd(P.close())}),hb(21,`Chiudi alert`),nu()()()}o&2&&(MD(10),cu(`Emissione dell'evento close = `,l.closeTime),MD(2),cu(`Emissione dell'evento closed = `,l.closedTime))},dependencies:[c1,xo],encapsulation:2,changeDetection:1})}}return t})();var N=(()=>{class t{static{this.ɵfac=function(o){return new(o||t)}}static{this.ɵcmp=Tw({type:t,selectors:[[`it-alert-examples`]],standalone:!1,decls:6,vars:0,consts:[[`html`,`<h3>Esempi</h3>

<div class="bd-example">
  <div class="example-section">
    <it-alert color="primary"> Questo \xE8 un alert di tipo "<b>primary</b>". </it-alert>

    <it-alert> Questo \xE8 un alert di tipo "<b>info</b>". </it-alert>

    <it-alert color="success"> Questo \xE8 un alert di tipo "<b>success</b>". </it-alert>

    <it-alert color="warning"> Questo \xE8 un alert di tipo "<b>warning</b>". </it-alert>

    <it-alert color="danger"> Questo \xE8 un alert di tipo "<b>danger</b>". </it-alert>

    <h3 class="mt-5">Link evidenziato</h3>

    <it-alert color="danger"> Questo \xE8 un alert con un esempio di <a href="#" class="alert-link">link</a> evidenziato. </it-alert>
  </div>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.Eager,
  selector: 'it-alert-color-example',
  templateUrl: './alert-color-example.component.html',
  standalone: false,
})
export class AlertColorExampleComponent {}`],[`html`,`<h3>Contenuto aggiuntivo</h3>

<div class="bd-example">
  <div class="example-section">
    <it-alert color="success">
      <ng-container heading>Avviso di successo!</ng-container>

      <p>
        Stai leggendo questo importante messaggio di avviso di successo. Questo testo di esempio sar\xE0 pi\xF9 lungo in modo da poter vedere come
        funzioni la spaziatura all'interno di un avviso con questo tipo di contenuto.
      </p>
      <hr />
      <p class="mb-0">Quando necessario, assicurarti di inserire le utilit\xE0 di margine per mantenere gli spazi equilibrati.</p>
    </it-alert>
  </div>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.Eager,
  selector: 'it-alert-additional-content-example',
  templateUrl: './alert-additional-content-example.component.html',
  standalone: false,
})
export class AlertAdditionalContentExampleComponent {}`],[`html`,`<h3>Chiusura</h3>

<div class="bd-example">
  <div class="example-section">
    <it-alert color="warning" dismissible="true" (closeEvent)="onClose()" (closedEvent)="onClosed()">
      <strong>Attenzione</strong> Alcuni campi inseriti sono da controllare.
    </it-alert>

    <div class="my-4">
      <div>Emissione dell'evento close = /{/{ closeTime /}/}</div>

      <div>Emissione dell'evento closed = /{/{ closedTime /}/}</div>
    </div>

    <h3>Chiusura manuale</h3>

    <it-alert color="warning" #alert="itAlert"> <strong>Attenzione</strong> Alcuni campi inseriti sono da controllare. </it-alert>

    <button itButton="primary" type="button" (click)="alert.close()">Chiudi alert</button>
  </div>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.Eager,
  selector: 'it-alert-closing-example',
  templateUrl: './alert-closing-example.component.html',
  standalone: false,
})
export class AlertClosingExampleComponent {
  closeTime?: string;
  closedTime?: string;

  onClose(): void {
    this.closeTime = new Date().toISOString();
  }

  onClosed(): void {
    this.closedTime = new Date().toISOString();
  }
}`]],template:function(o,l){o&1&&im(0,`it-alert-color-example`)(1,`it-source-display`,0)(2,`it-alert-additional-content-example`)(3,`it-source-display`,1)(4,`it-alert-closing-example`)(5,`it-source-display`,2)},dependencies:[q$1,q,j,L],encapsulation:2,changeDetection:1})}}return t})();var J=[{path:``,component:(()=>{class t{constructor(){this.component=oe.components.find(r=>r.name===`ItAlertComponent`)}static{this.ɵfac=function(o){return new(o||t)}}static{this.ɵcmp=Tw({type:t,selectors:[[`it-alert-index`]],standalone:!1,decls:10,vars:2,consts:[[1,`bd-title`],[1,`bd-lead`],[3,`innerHTML`],[`label`,`Esempi`,`active`,`true`,1,`pt-3`],[`label`,`API`,1,`pt-3`],[3,`component`]],template:function(o,l){o&1&&(Zi(0,`h1`,0),hb(1,`Alert`),nu(),Zi(2,`p`,1),hb(3,`Puoi fornire dei feedback all’utente tramite messaggi di avviso.`),nu(),im(4,`div`,2),Zi(5,`it-tab-container`)(6,`it-tab-item`,3),im(7,`it-alert-examples`),nu(),Zi(8,`it-tab-item`,4),im(9,`it-api-parameters`,5),nu()()),o&2&&(MD(4),om(`innerHTML`,l.component.description,BI),MD(5),om(`component`,l.component))},dependencies:[$,Ile,Fx,N],encapsulation:2,changeDetection:1})}}return t})()}];var B=(()=>{class t{static{this.ɵfac=function(o){return new(o||t)}}static{this.ɵmod=Pg({type:t})}static{this.ɵinj=fa({imports:[ua.forChild(J),ua]})}}return t})();var xe=(()=>{class t{static{this.ɵfac=function(o){return new(o||t)}}static{this.ɵmod=Pg({type:t})}static{this.ɵinj=fa({imports:[Zt,te,B]})}}return t})();export{xe as AlertModule};