import{$ as MD,Cn as fa,Fn as hb,Hn as im,Mn as gm,Zt as Zi,cr as om,ct as Pg,jt as Tw,l as BI,or as nu}from"./chunk-BXp14hLr.js";import{E as Zt}from"./chunk-CtdKxuHA.js";import{Jt as ua,V as _Z,W as bP,f as Fx,h as Ile}from"./main-JCJIXXB4.js";import{i as te,n as oe,r as q,t as $}from"./chunk-4-cg1OfJ.js";var I=(()=>{class e{constructor(){this.source=[`Abruzzo`,`Basilicata`,`Calabria`,`Campania`,`Emilia Romagna`,`Friuli Venezia Giulia`,`Lazio`,`Liguria`,`Lombardia`,`Marche`,`Molise`,`Piemonte`,`Puglia`,`Sardegna`,`Sicilia`,`Toscana`,`Trentino Alto Adige`,`Umbria`,`Valle d’Aosta`,`Veneto`]}static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-autocomplete-example`]],standalone:!1,decls:5,vars:1,consts:[[1,`bd-example`],[1,`example-section`],[`id`,`regions`,`label`,`Regione`,3,`source`]],template:function(t,a){t&1&&(Zi(0,`h3`),hb(1,`Esempio Autocomplete`),nu(),Zi(2,`div`,0)(3,`div`,1),im(4,`it-autocomplete`,2),nu()()),t&2&&(MD(4),om(`source`,a.source))},dependencies:[bP],encapsulation:2,changeDetection:1})}}return e})();var R=(()=>{class e{constructor(){this.categories=[`Frutta`,`Verdura`],this.store={Frutta:[`Mela`,`Pera`,`Melone`,`Banana`],Verdura:[`Carota`,`Zucchina`,`Melanzana`,`Carciofo`]},this.selectedCategory=``,this.source=(o,t)=>{t((this.store[this.selectedCategory]??[]).filter(g=>g.toLowerCase().includes(o.toLowerCase())))}}changeCategory(o){this.selectedCategory=o}static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-autocomplete-double`]],standalone:!1,decls:6,vars:2,consts:[[1,`bd-example`],[1,`example-section`],[`id`,`categoria`,`label`,`Categoria`,3,`selected`,`source`],[`id`,`alimento`,`label`,`Alimento`,3,`source`]],template:function(t,a){t&1&&(Zi(0,`h3`),hb(1,`Cambiare i valori dinamicamente`),nu(),Zi(2,`div`,0)(3,`div`,1)(4,`it-autocomplete`,2),gm(`selected`,function(g){return a.changeCategory(g)}),nu(),im(5,`it-autocomplete`,3),nu()()),t&2&&(MD(4),om(`source`,a.categories),MD(),om(`source`,a.source))},dependencies:[bP],encapsulation:2,changeDetection:1})}}return e})();var T=(()=>{class e{constructor(){}static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-autocomplete-examples`]],standalone:!1,decls:4,vars:0,consts:[[`html`,`<h3>Esempio Autocomplete</h3>
<div class="bd-example">
  <div class="example-section">
    <it-autocomplete id="regions" label="Regione" [source]="source"></it-autocomplete>
  </div>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-autocomplete-example',
  templateUrl: './autocomplete-example.component.html',
  styleUrls: ['./autocomplete-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class AutocompleteExampleComponent {
  source = [
    'Abruzzo',
    'Basilicata',
    'Calabria',
    'Campania',
    'Emilia Romagna',
    'Friuli Venezia Giulia',
    'Lazio',
    'Liguria',
    'Lombardia',
    'Marche',
    'Molise',
    'Piemonte',
    'Puglia',
    'Sardegna',
    'Sicilia',
    'Toscana',
    'Trentino Alto Adige',
    'Umbria',
    'Valle d\u2019Aosta',
    'Veneto',
  ];
}`],[`html`,`<h3>Cambiare i valori dinamicamente</h3>
<div class="bd-example">
  <div class="example-section">
    <it-autocomplete id="categoria" [source]="categories" label="Categoria" (selected)="changeCategory($event)"></it-autocomplete>
    <it-autocomplete id="alimento" [source]="source" label="Alimento"></it-autocomplete>
  </div>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.Eager,
  selector: 'it-autocomplete-double',
  templateUrl: './autocomplete-double.component.html',
  styleUrls: ['./autocomplete-double.component.scss'],
  standalone: false,
})
export class AutocompleteDoubleComponent {
  categories = ['Frutta', 'Verdura'];

  store: Record<string, string[]> = {
    Frutta: ['Mela', 'Pera', 'Melone', 'Banana'],
    Verdura: ['Carota', 'Zucchina', 'Melanzana', 'Carciofo'],
  };

  selectedCategory: string = '';

  changeCategory(value: string) {
    this.selectedCategory = value;
  }

  source = (query: string, populateResults: (results: string[]) => void) => {
    const results = this.store[this.selectedCategory] ?? [];
    const filteredResults = results.filter((result: string) => result.toLowerCase().includes(query.toLowerCase()));
    populateResults(filteredResults);
  };
}`]],template:function(t,a){t&1&&im(0,`it-autocomplete-example`)(1,`it-source-display`,0)(2,`it-autocomplete-double`)(3,`it-source-display`,1)},dependencies:[q,I,R],encapsulation:2,changeDetection:1})}}return e})();var j=[{path:``,component:(()=>{class e{constructor(){this.autocompleteComponent=oe.components.find(o=>o.name===`ItAutocompleteComponent`)}static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-autocomplete-index`]],standalone:!1,decls:12,vars:2,consts:[[1,`bd-title`],[1,`bd-lead`],[3,`innerHTML`],[`label`,`Esempi`,`active`,`true`,1,`pt-3`],[`label`,`API`,1,`pt-3`],[3,`component`]],template:function(t,a){t&1&&(Zi(0,`h1`,0),hb(1,`Autocomplete`),nu(),Zi(2,`p`,1),hb(3,`Componente di autocompletamento`),nu(),im(4,`div`,2),Zi(5,`it-tab-container`)(6,`it-tab-item`,3),im(7,`it-autocomplete-examples`),nu(),Zi(8,`it-tab-item`,4)(9,`h2`),hb(10,`Autocomplete`),nu(),im(11,`it-api-parameters`,5),nu()()),t&2&&(MD(4),om(`innerHTML`,a.autocompleteComponent.description,BI),MD(7),om(`component`,a.autocompleteComponent))},dependencies:[$,Ile,Fx,T],encapsulation:2,changeDetection:1})}}return e})()}];var z=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵmod=Pg({type:e})}static{this.ɵinj=fa({imports:[ua.forChild(j),ua]})}}return e})();var ae=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵmod=Pg({type:e})}static{this.ɵinj=fa({imports:[Zt,_Z,te,z]})}}return e})();export{ae as AutocompleteModule};