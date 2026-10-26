import{$ as MD,Cn as fa,Fn as hb,Hn as im,Mn as gm,Y as Ky,Zt as Zi,c as BE,cr as om,ct as Pg,d as Bg,jt as Tw,l as BI,or as nu}from"./chunk-BXp14hLr.js";import{E as Zt}from"./chunk-CtdKxuHA.js";import{Jt as ua,f as Fx,h as Ile,mt as mP}from"./main-JCJIXXB4.js";import{i as te,n as oe,r as q,t as $}from"./chunk-4-cg1OfJ.js";var S=(()=>{class e{constructor(){this._autoCompleteData=[{value:`Luisa Neri`,avatarSrcPath:`https://randomuser.me/api/portraits/women/44.jpg`,avatarAltText:`Luisa Neri`,label:`Profilo`},{value:`Cristian Borelli`,avatarSrcPath:`https://randomuser.me/api/portraits/men/1.jpg`,avatarAltText:`Cristian Borelli`,label:`Profilo`},{value:`Andrea Stagi`,avatarSrcPath:`https://randomuser.me/api/portraits/men/2.jpg`,avatarAltText:`Andrea Stagi`,label:`Profilo`},{value:`Comune di Firenze`,icon:`pa`,link:`https:www.comune.fi.it/`,label:`Comune`},{value:`Italia`,avatarSrcPath:`https:raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/it.svg`,avatarAltText:`Italia`}],this.searchUsers$=a=>a?Ky(this._autoCompleteData):Ky([])}onSearchSelected(a){console.log(a)}static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-search-search-example`]],standalone:!1,decls:4,vars:1,consts:[[1,`bd-example`],[`label`,`Cerca nel sito`,`placeholder`,`Testo da cercare`,3,`searchSelectedEvent`,`searchData`]],template:function(t,n){t&1&&(Zi(0,`h3`),hb(1,`Ricerca con autocompletamento e dati`),nu(),Zi(2,`div`,0)(3,`it-search`,1),gm(`searchSelectedEvent`,function(g){return n.onSearchSelected(g)}),nu()()),t&2&&(MD(3),om(`searchData`,n.searchUsers$))},dependencies:[mP],encapsulation:2,changeDetection:1})}}return e})();var w=(()=>{class e extends S{static{this.ɵfac=(()=>{let a;return function(n){return(a||(a=BE(e)))(n||e)}})()}static{this.ɵcmp=Tw({type:e,selectors:[[`it-search-big-search-example`]],standalone:!1,features:[Bg],decls:4,vars:1,consts:[[1,`bd-example`],[`label`,`Cerca nel sito`,`placeholder`,`Testo da cercare`,`big`,`true`,3,`searchSelectedEvent`,`searchData`]],template:function(t,n){t&1&&(Zi(0,`h3`),hb(1,`Ricerca con autocompletamento grande e dati`),nu(),Zi(2,`div`,0)(3,`it-search`,1),gm(`searchSelectedEvent`,function(g){return n.onSearchSelected(g)}),nu()()),t&2&&(MD(3),om(`searchData`,n.searchUsers$))},dependencies:[mP],encapsulation:2,changeDetection:1})}}return e})();var _=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-search-examples`]],standalone:!1,decls:4,vars:0,consts:[[`html`,`<h3>Ricerca con autocompletamento e dati</h3>

<div class="bd-example">
  <it-search
    label="Cerca nel sito"
    placeholder="Testo da cercare"
    [searchData]="searchUsers$"
    (searchSelectedEvent)="onSearchSelected($event)" />
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SearchItem } from 'design-angular-kit/interfaces/form';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'it-search-search-example',
  templateUrl: './search-search-example.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class SearchSearchExampleComponent {
  private _autoCompleteData: SearchItem[] = [
    {
      value: 'Luisa Neri',
      avatarSrcPath: 'https://randomuser.me/api/portraits/women/44.jpg',
      avatarAltText: 'Luisa Neri',
      label: 'Profilo',
    },
    {
      value: 'Cristian Borelli',
      avatarSrcPath: 'https://randomuser.me/api/portraits/men/1.jpg',
      avatarAltText: 'Cristian Borelli',
      label: 'Profilo',
    },
    {
      value: 'Andrea Stagi',
      avatarSrcPath: 'https://randomuser.me/api/portraits/men/2.jpg',
      avatarAltText: 'Andrea Stagi',
      label: 'Profilo',
    },
    {
      value: 'Comune di Firenze',
      icon: 'pa',
      link: 'https:www.comune.fi.it/',
      label: 'Comune',
    },
    {
      value: 'Italia',
      avatarSrcPath: 'https:raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/it.svg',
      avatarAltText: 'Italia',
    },
  ];

  /**
   * Dynamic SearchData (API) accepted by it-input
   * @param search the search input string
   */
  searchUsers$ = (search?: string): Observable<Array<SearchItem>> => {
    if (!search) {
      return of([]);
    }

    // API request for retrieve data, use \`search\` to filter data
    return of(this._autoCompleteData);
  };

  onSearchSelected(item: SearchItem): void {
    console.log(item);
  }
}`],[`html`,`<h3>Ricerca con autocompletamento grande e dati</h3>

<div class="bd-example">
  <it-search
    label="Cerca nel sito"
    placeholder="Testo da cercare"
    big="true"
    [searchData]="searchUsers$"
    (searchSelectedEvent)="onSearchSelected($event)" />
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SearchSearchExampleComponent } from '../search-search-example/search-search-example.component';

@Component({
  selector: 'it-search-big-search-example',
  templateUrl: './search-big-search-example.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class SearchBigSearchExampleComponent extends SearchSearchExampleComponent {}`]],template:function(t,n){t&1&&im(0,`it-search-search-example`)(1,`it-source-display`,0)(2,`it-search-big-search-example`)(3,`it-source-display`,1)},dependencies:[q,S,w],encapsulation:2,changeDetection:1})}}return e})();var L=[{path:``,component:(()=>{class e{constructor(){this.component=oe.components.find(a=>a.name===`ItSearchComponent`)}static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-search-index`]],standalone:!1,decls:10,vars:2,consts:[[1,`bd-title`],[1,`bd-lead`],[3,`innerHTML`],[`label`,`Esempi`,`active`,`true`,1,`pt-3`],[`label`,`API`,1,`pt-3`],[3,`component`]],template:function(t,n){t&1&&(Zi(0,`h1`,0),hb(1,`Ricerca con autocompletamento`),nu(),Zi(2,`p`,1),hb(3,`Elementi e stili per la creazione di input di ricerca con autocompletamento.`),nu(),im(4,`div`,2),Zi(5,`it-tab-container`)(6,`it-tab-item`,3),im(7,`it-search-examples`),nu(),Zi(8,`it-tab-item`,4),im(9,`it-api-parameters`,5),nu()()),t&2&&(MD(4),om(`innerHTML`,n.component.description,BI),MD(5),om(`component`,n.component))},dependencies:[Ile,Fx,$,_],encapsulation:2,changeDetection:1})}}return e})()}];var B=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵmod=Pg({type:e})}static{this.ɵinj=fa({imports:[ua.forChild(L),ua]})}}return e})();var me=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵmod=Pg({type:e})}static{this.ɵinj=fa({imports:[Zt,B,te]})}}return e})();export{me as SearchModule};