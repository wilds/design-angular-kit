import{$ as MD,Cn as fa,Fn as hb,Hn as im,Mn as gm,Zt as Zi,cr as om,ct as Pg,jt as Tw,or as nu}from"./chunk-BXp14hLr.js";import{E as Zt}from"./chunk-CtdKxuHA.js";import{Jt as ua,f as Fx,h as Ile,pt as m1}from"./main-JCJIXXB4.js";import{i as te,n as oe,r as q,t as $}from"./chunk-4-cg1OfJ.js";var N=(()=>{class e{constructor(){this.leftCurrentPage=0,this.centerCurrentPage=25,this.rightCurrentPage=0}leftPageChange(t){this.leftCurrentPage=t}centerPageChange(t){this.centerCurrentPage=t}rightPageChange(t){this.rightCurrentPage=t}static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-pagination-example`]],standalone:!1,decls:10,vars:7,consts:[[1,`bd-example`],[1,`mb-4`],[3,`pageEvent`,`currentPage`,`pageNumbers`],[1,`my-4`],[`alignment`,`center`,3,`pageEvent`,`currentPage`,`pageNumbers`],[`alignment`,`end`,3,`pageEvent`,`currentPage`,`visiblePages`,`pageNumbers`]],template:function(n,o){n&1&&(Zi(0,`div`,0)(1,`h3`,1),hb(2,`Navigazione allineata a sinistra`),nu(),Zi(3,`it-pagination`,2),gm(`pageEvent`,function(p){return o.leftPageChange(p)}),nu(),Zi(4,`h3`,3),hb(5,`Navigazione centrata`),nu(),Zi(6,`it-pagination`,4),gm(`pageEvent`,function(p){return o.centerPageChange(p)}),nu(),Zi(7,`h3`,3),hb(8,`Navigazione allineata a destra`),nu(),Zi(9,`it-pagination`,5),gm(`pageEvent`,function(p){return o.rightPageChange(p)}),nu()()),n&2&&(MD(3),om(`currentPage`,o.leftCurrentPage)(`pageNumbers`,3),MD(3),om(`currentPage`,o.centerCurrentPage)(`pageNumbers`,50),MD(3),om(`currentPage`,o.rightCurrentPage)(`visiblePages`,3)(`pageNumbers`,50))},dependencies:[m1],encapsulation:2,changeDetection:1})}}return e})();var T=(()=>{class e{constructor(){this.currentPage=25,this.changerValue=10,this.changerValues=[10,25,50,100,250]}pageChange(t){this.currentPage=t}changerEvent(t){this.changerValue=t}static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-pagination-changer-example`]],standalone:!1,decls:6,vars:4,consts:[[1,`bd-example`],[3,`pageEvent`,`changerEvent`,`currentPage`,`pageNumbers`,`currentChanger`,`changerValues`]],template:function(n,o){n&1&&(Zi(0,`h3`),hb(1,`Changer`),nu(),Zi(2,`p`),hb(3,`La funzionalità di changer permette di scegliere da un dropdown la quantità di record da visualizzare in una pagina.`),nu(),Zi(4,`div`,0)(5,`it-pagination`,1),gm(`pageEvent`,function(p){return o.pageChange(p)})(`changerEvent`,function(p){return o.changerEvent(p)}),nu()()),n&2&&(MD(5),om(`currentPage`,o.currentPage)(`pageNumbers`,50)(`currentChanger`,o.changerValue)(`changerValues`,o.changerValues))},dependencies:[m1],encapsulation:2,changeDetection:1})}}return e})();var z=(()=>{class e{constructor(){this.currentPage=25}pageChange(t){this.currentPage=t}static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-pagination-jump-example`]],standalone:!1,decls:6,vars:2,consts:[[1,`bd-example`],[`showJumpToPage`,`true`,3,`pageEvent`,`currentPage`,`pageNumbers`]],template:function(n,o){n&1&&(Zi(0,`h3`),hb(1,`Jump to page`),nu(),Zi(2,`p`),hb(3,`Con l’elemento aggiuntivo “Jump to page” l’utente può specificare un numero di pagina concreto.`),nu(),Zi(4,`div`,0)(5,`it-pagination`,1),gm(`pageEvent`,function(p){return o.pageChange(p)}),nu()()),n&2&&(MD(5),om(`currentPage`,o.currentPage)(`pageNumbers`,50))},dependencies:[m1],encapsulation:2,changeDetection:1})}}return e})();var M=(()=>{class e{constructor(){this.currentPage=0}pageChange(t){this.currentPage=t}static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-pagination-simple-example`]],standalone:!1,decls:6,vars:2,consts:[[1,`bd-example`],[`simpleMode`,`true`,3,`pageEvent`,`currentPage`,`pageNumbers`]],template:function(n,o){n&1&&(Zi(0,`h3`),hb(1,`Simple mode`),nu(),Zi(2,`p`),hb(3,` La paginazione in versione \u201CSimple mode\u201D \xE8 ottimizzata per i dispositivi mobile. Pu\xF2 essere utilizzata anche su tablet e desktop quando il numero di pagine \xE8 ridotto.
`),nu(),Zi(4,`div`,0)(5,`it-pagination`,1),gm(`pageEvent`,function(p){return o.pageChange(p)}),nu()()),n&2&&(MD(5),om(`currentPage`,o.currentPage)(`pageNumbers`,5))},dependencies:[m1],encapsulation:2,changeDetection:1})}}return e})();var k=(()=>{class e{constructor(){this.currentPage=25}pageChange(t){this.currentPage=t}static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-pagination-text-links-example`]],standalone:!1,decls:6,vars:2,consts:[[1,`bd-example`],[`textLinks`,`true`,3,`pageEvent`,`currentPage`,`pageNumbers`]],template:function(n,o){n&1&&(Zi(0,`h3`),hb(1,`Link testuali`),nu(),Zi(2,`p`),hb(3,`Le icone chevron utilizzate come link di navigazione vengono sostituite da link testuali come “precedente” e “successiva”.`),nu(),Zi(4,`div`,0)(5,`it-pagination`,1),gm(`pageEvent`,function(p){return o.pageChange(p)}),nu()()),n&2&&(MD(5),om(`currentPage`,o.currentPage)(`pageNumbers`,50))},dependencies:[m1],encapsulation:2,changeDetection:1})}}return e})();var I=(()=>{class e{constructor(){this.currentPage=25}pageChange(t){this.currentPage=t}static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-pagination-total-number-example`]],standalone:!1,decls:5,vars:2,consts:[[1,`bd-example`],[3,`pageEvent`,`currentPage`,`pageNumbers`]],template:function(n,o){n&1&&(Zi(0,`h3`),hb(1,`Total number`),nu(),Zi(2,`div`,0)(3,`it-pagination`,1),gm(`pageEvent`,function(p){return o.pageChange(p)}),hb(4,` Totale 300 elementi `),nu()()),n&2&&(MD(3),om(`currentPage`,o.currentPage)(`pageNumbers`,50))},dependencies:[m1],encapsulation:2,changeDetection:1})}}return e})();var L=(()=>{class e{static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-pagination-examples`]],standalone:!1,decls:12,vars:0,consts:[[`html`,`<div class="bd-example">
  <h3 class="mb-4">Navigazione allineata a sinistra</h3>
  <it-pagination [currentPage]="leftCurrentPage" [pageNumbers]="3" (pageEvent)="leftPageChange($event)"></it-pagination>

  <h3 class="my-4">Navigazione centrata</h3>
  <it-pagination
    [currentPage]="centerCurrentPage"
    [pageNumbers]="50"
    alignment="center"
    (pageEvent)="centerPageChange($event)"></it-pagination>

  <h3 class="my-4">Navigazione allineata a destra</h3>
  <it-pagination
    [currentPage]="rightCurrentPage"
    [visiblePages]="3"
    [pageNumbers]="50"
    alignment="end"
    (pageEvent)="rightPageChange($event)"></it-pagination>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-pagination-example',
  templateUrl: './pagination-example.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class PaginationExampleComponent {
  leftCurrentPage = 0;
  centerCurrentPage = 25;
  rightCurrentPage = 0;

  leftPageChange(page: number): void {
    this.leftCurrentPage = page;
  }

  centerPageChange(page: number): void {
    this.centerCurrentPage = page;
  }

  rightPageChange(page: number): void {
    this.rightCurrentPage = page;
  }
}`],[`html`,`<h3>Changer</h3>
<p>La funzionalit\xE0 di changer permette di scegliere da un dropdown la quantit\xE0 di record da visualizzare in una pagina.</p>

<div class="bd-example">
  <it-pagination
    [currentPage]="currentPage"
    [pageNumbers]="50"
    [currentChanger]="changerValue"
    [changerValues]="changerValues"
    (pageEvent)="pageChange($event)"
    (changerEvent)="changerEvent($event)"></it-pagination>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-pagination-changer-example',
  templateUrl: './pagination-changer-example.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class PaginationChangerExampleComponent {
  currentPage: number = 25;

  changerValue: number = 10;

  /**
   * By default, the values are [10, 25, 50, 100]
   */
  changerValues: Array<number> = [10, 25, 50, 100, 250];

  pageChange(page: number): void {
    this.currentPage = page;
  }

  changerEvent(value: number): void {
    this.changerValue = value;
  }
}`],[`html`,`<h3>Jump to page</h3>
<p>Con l\u2019elemento aggiuntivo \u201CJump to page\u201D l\u2019utente pu\xF2 specificare un numero di pagina concreto.</p>

<div class="bd-example">
  <it-pagination [currentPage]="currentPage" [pageNumbers]="50" showJumpToPage="true" (pageEvent)="pageChange($event)"></it-pagination>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-pagination-jump-example',
  templateUrl: './pagination-jump-example.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class PaginationJumpExampleComponent {
  currentPage: number = 25;

  pageChange(page: number): void {
    this.currentPage = page;
  }
}`],[`html`,`<h3>Simple mode</h3>
<p>
  La paginazione in versione \u201CSimple mode\u201D \xE8 ottimizzata per i dispositivi mobile. Pu\xF2 essere utilizzata anche su tablet e desktop quando il
  numero di pagine \xE8 ridotto.
</p>

<div class="bd-example">
  <it-pagination [currentPage]="currentPage" [pageNumbers]="5" simpleMode="true" (pageEvent)="pageChange($event)"></it-pagination>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-pagination-simple-example',
  templateUrl: './pagination-simple-example.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class PaginationSimpleExampleComponent {
  currentPage: number = 0;

  pageChange(page: number): void {
    this.currentPage = page;
  }
}`],[`html`,`<h3>Link testuali</h3>
<p>Le icone chevron utilizzate come link di navigazione vengono sostituite da link testuali come \u201Cprecedente\u201D e \u201Csuccessiva\u201D.</p>

<div class="bd-example">
  <it-pagination [currentPage]="currentPage" [pageNumbers]="50" textLinks="true" (pageEvent)="pageChange($event)"></it-pagination>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-pagination-text-links-example',
  templateUrl: './pagination-text-links-example.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class PaginationTextLinksExampleComponent {
  currentPage: number = 25;

  pageChange(page: number): void {
    this.currentPage = page;
  }
}`],[`html`,`<h3>Total number</h3>

<div class="bd-example">
  <it-pagination [currentPage]="currentPage" [pageNumbers]="50" (pageEvent)="pageChange($event)"> Totale 300 elementi </it-pagination>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-pagination-total-number-example',
  templateUrl: './pagination-total-number-example.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class PaginationTotalNumberExampleComponent {
  currentPage: number = 25;

  pageChange(page: number): void {
    this.currentPage = page;
  }
}`]],template:function(n,o){n&1&&im(0,`it-pagination-example`)(1,`it-source-display`,0)(2,`it-pagination-changer-example`)(3,`it-source-display`,1)(4,`it-pagination-jump-example`)(5,`it-source-display`,2)(6,`it-pagination-simple-example`)(7,`it-source-display`,3)(8,`it-pagination-text-links-example`)(9,`it-source-display`,4)(10,`it-pagination-total-number-example`)(11,`it-source-display`,5)},dependencies:[q,N,T,z,M,k,I],encapsulation:2,changeDetection:1})}}return e})();var R=[{path:``,component:(()=>{class e{constructor(){this.component=oe.components.find(t=>t.name===`ItPaginationComponent`)}static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-pagination-index`]],standalone:!1,decls:11,vars:1,consts:[[1,`bd-title`],[1,`bd-lead`],[`label`,`Esempi`,`active`,`true`,1,`pt-3`],[`label`,`API`,1,`pt-3`],[3,`component`]],template:function(n,o){n&1&&(Zi(0,`h1`,0),hb(1,`Paginazione`),nu(),Zi(2,`p`,1),hb(3,`Utile per indicare una serie di contenuti correlati tra più pagine.`),nu(),Zi(4,`it-tab-container`)(5,`it-tab-item`,2),im(6,`it-pagination-examples`),nu(),Zi(7,`it-tab-item`,3)(8,`h3`),hb(9,`Pagination Component`),nu(),im(10,`it-api-parameters`,4),nu()()),n&2&&(MD(10),om(`component`,o.component))},dependencies:[$,Ile,Fx,L],encapsulation:2,changeDetection:1})}}return e})()}];var w=(()=>{class e{static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵmod=Pg({type:e})}static{this.ɵinj=fa({imports:[ua.forChild(R),ua]})}}return e})();var Pe=(()=>{class e{static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵmod=Pg({type:e})}static{this.ɵinj=fa({imports:[Zt,te,w]})}}return e})();export{Pe as PaginationModule};