import{$ as MD,Br as wC,Cn as fa,Ct as TC,Fn as hb,Hn as im,Mn as gm,Qn as mb,Zt as Zi,cr as om,ct as Pg,g as DC,it as OT,jt as Tw,l as BI,lt as Pm,or as nu,pn as cu,qr as xT,w as Fm}from"./chunk-BXp14hLr.js";import{E as Zt}from"./chunk-CtdKxuHA.js";import{Jt as ua,N as Ti,Nt as tn,V as _Z,Wt as yf,d as FO,f as Fx,gt as nP,h as Ile}from"./main-JCJIXXB4.js";import{i as te,n as oe,r as q$1,t as $}from"./chunk-4-cg1OfJ.js";function Q(e,x){if(e&1&&(Zi(0,`it-tab-item`,9),hb(1),nu()),e&2){let o=x.$implicit,n=x.$index;om(`label`,o.label)(`icon`,o.icon)(`active`,n===0),MD(),cu(` `,o.content,` `)}}var U=(()=>{class e{constructor(){this.isDarkTheme=!1,this.isDisabled=!1,this.isCard=!1,this.isVertical=!1,this.isInverted=!1,this.tabs=[{label:`tab1`,content:`content1`,icon:`file`},{label:`tab2`,content:`content2`,icon:`calendar`},{label:`tab3`,content:`content3`,icon:`comment`}]}static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-tabs-example`]],standalone:!1,decls:25,vars:10,consts:[[1,`bd-example`],[1,`example-section`],[`label`,`Tema scuro`,3,`ngModelChange`,`ngModel`],[`label`,`Disabilita tab custom`,3,`ngModelChange`,`ngModel`],[`label`,`Navigazione a card`,3,`ngModelChange`,`ngModel`],[`label`,`Navigazione verticale`,3,`ngModelChange`,`ngModel`],[`label`,`Posizione invertita`,3,`ngModelChange`,`ngModel`],[1,`mt-5`,`mb-4`],[3,`dark`,`cards`,`vertical`,`inverted`],[3,`label`,`icon`,`active`],[`label`,`custom`,`icon`,`settings`,3,`disabled`],[`itBadge`,`secondary`]],template:function(n,t){n&1&&(Zi(0,`h3`),hb(1,`Configurazione tabs`),nu(),Zi(2,`div`,0)(3,`p`,1)(4,`it-checkbox`,2),xT(),Fm(`ngModelChange`,function(r){return mb(t.isDarkTheme,r)||(t.isDarkTheme=r),r}),nu()(),Zi(5,`p`,1)(6,`it-checkbox`,3),xT(),Fm(`ngModelChange`,function(r){return mb(t.isDisabled,r)||(t.isDisabled=r),r}),nu()(),Zi(7,`p`,1)(8,`it-checkbox`,4),xT(),Fm(`ngModelChange`,function(r){return mb(t.isCard,r)||(t.isCard=r),r}),nu()(),Zi(9,`p`,1)(10,`it-checkbox`,5),xT(),Fm(`ngModelChange`,function(r){return mb(t.isVertical,r)||(t.isVertical=r),r}),nu()(),Zi(11,`p`,1)(12,`it-checkbox`,6),xT(),Fm(`ngModelChange`,function(r){return mb(t.isInverted,r)||(t.isInverted=r),r}),nu()(),Zi(13,`h4`,7),hb(14,`Risultato tabs`),nu(),Zi(15,`it-tab-container`,8),TC(16,Q,2,4,`it-tab-item`,9,DC),Zi(18,`it-tab-item`,10)(19,`h4`),hb(20,`Titolo`),nu(),Zi(21,`p`),hb(22,`Contenuto complesso `),Zi(23,`span`,11),hb(24,`badge`),nu()()()()()),n&2&&(MD(4),Pm(`ngModel`,t.isDarkTheme),OT(),MD(2),Pm(`ngModel`,t.isDisabled),OT(),MD(2),Pm(`ngModel`,t.isCard),OT(),MD(2),Pm(`ngModel`,t.isVertical),OT(),MD(2),Pm(`ngModel`,t.isInverted),OT(),MD(3),om(`dark`,t.isDarkTheme)(`cards`,t.isCard)(`vertical`,t.isVertical)(`inverted`,t.isInverted),MD(),wC(t.tabs),MD(2),om(`disabled`,t.isDisabled))},dependencies:[tn,yf,FO,Ile,Fx,nP],encapsulation:2,changeDetection:1})}}return e})();function Y(e,x){if(e&1&&(Zi(0,`it-tab-item`,3),hb(1),nu()),e&2){let o=x.$implicit,n=x.$index;om(`id`,`tab-`+n)(`label`,o)(`active`,n===0),MD(),cu(` contenuto del `,o,` tab `)}}var O=(()=>{class e{constructor(){this.tabs=[`Primo`,`Secondo`,`Terzo`]}addTab(){this.tabs.push(`Nuovo`)}removeTab(o){this.tabs.splice(o,1)}static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-tabs-dynamic-example`]],standalone:!1,decls:9,vars:2,consts:[[1,`bd-example`],[1,`mt-5`],[3,`tabClosed`,`tabAdded`,`cards`,`editable`],[3,`id`,`label`,`active`]],template:function(n,t){n&1&&(Zi(0,`h3`),hb(1,`Tabs Dinamiche`),nu(),Zi(2,`div`,0)(3,`div`,1)(4,`h4`),hb(5,`Risultato tabs`),nu(),Zi(6,`it-tab-container`,2),gm(`tabClosed`,function(r){return t.removeTab(r)})(`tabAdded`,function(){return t.addTab()}),TC(7,Y,2,4,`it-tab-item`,3,DC),nu()()()),n&2&&(MD(6),om(`cards`,!0)(`editable`,!0),MD(),wC(t.tabs))},dependencies:[Ile,Fx],encapsulation:2,changeDetection:1})}}return e})();var q=(()=>{class e{constructor(){}static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-tabs-examples`]],standalone:!1,decls:4,vars:0,consts:[[`html`,`<h3>Configurazione tabs</h3>
<div class="bd-example">
  <p class="example-section">
    <it-checkbox [(ngModel)]="isDarkTheme" label="Tema scuro"></it-checkbox>
  </p>
  <p class="example-section">
    <it-checkbox [(ngModel)]="isDisabled" label="Disabilita tab custom"></it-checkbox>
  </p>
  <p class="example-section">
    <it-checkbox [(ngModel)]="isCard" label="Navigazione a card"></it-checkbox>
  </p>
  <p class="example-section">
    <it-checkbox [(ngModel)]="isVertical" label="Navigazione verticale"></it-checkbox>
  </p>
  <p class="example-section">
    <it-checkbox [(ngModel)]="isInverted" label="Posizione invertita"></it-checkbox>
  </p>

  <h4 class="mt-5 mb-4">Risultato tabs</h4>
  <!--    TODO  [pill]="isPill"-->
  <it-tab-container [dark]="isDarkTheme" [cards]="isCard" [vertical]="isVertical" [inverted]="isInverted">
    @for (tab of tabs; track tab; let i = $index) {
      <it-tab-item [label]="tab.label" [icon]="tab.icon" [active]="i === 0">
        /{/{ tab.content /}/}
      </it-tab-item>
    }
    <it-tab-item label="custom" [disabled]="isDisabled" icon="settings">
      <h4>Titolo</h4>
      <p>Contenuto complesso <span itBadge="secondary">badge</span></p>
    </it-tab-item>
  </it-tab-container>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconName } from 'design-angular-kit/interfaces/icon';

@Component({
  selector: 'it-tabs-example',
  templateUrl: './tabs-example.component.html',
  styleUrls: ['./tabs-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class TabsExampleComponent {
  isDarkTheme = false;

  isDisabled = false;

  isCard = false;

  isVertical = false;

  isInverted = false;

  tabs: Array<{
    label: string;
    content: string;
    icon: IconName;
  }> = [
    {
      label: 'tab1',
      content: 'content1',
      icon: 'file',
    },
    {
      label: 'tab2',
      content: 'content2',
      icon: 'calendar',
    },
    {
      label: 'tab3',
      content: 'content3',
      icon: 'comment',
    },
  ];
}`],[`html`,`<h3>Tabs Dinamiche</h3>
<div class="bd-example">
  <div class="mt-5">
    <h4>Risultato tabs</h4>
    <it-tab-container [cards]="true" [editable]="true" (tabClosed)="removeTab($event)" (tabAdded)="addTab()">
      @for (tab of tabs; track tab; let index = $index) {
        <it-tab-item [id]="'tab-' + index" [label]="tab" [active]="index === 0"> contenuto del /{/{ tab /}/} tab </it-tab-item>
      }
    </it-tab-container>
  </div>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-tabs-dynamic-example',
  templateUrl: './tabs-dynamic-example.component.html',
  styleUrls: ['./tabs-dynamic-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class TabsDynamicExampleComponent {
  tabs = ['Primo', 'Secondo', 'Terzo'];

  addTab() {
    this.tabs.push('Nuovo');
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
}`]],template:function(n,t){n&1&&im(0,`it-tabs-example`)(1,`it-source-display`,0)(2,`it-tabs-dynamic-example`)(3,`it-source-display`,1)},dependencies:[q$1,U,O],encapsulation:2,changeDetection:1})}}return e})();var ee=[{path:``,component:(()=>{class e{constructor(){this.tabGroupComponent=oe.components.find(o=>o.name===`ItTabContainerComponent`),this.tabComponent=oe.components.find(o=>o.name===`ItTabItemComponent`)}static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-tabs-index`]],standalone:!1,decls:21,vars:4,consts:[[1,`bd-title`],[1,`bd-lead`],[`label`,`Descrizione`],[3,`innerHTML`],[`label`,`Esempi`,`active`,`true`,1,`pt-3`],[`label`,`API`,1,`pt-3`],[3,`component`]],template:function(n,t){n&1&&(Zi(0,`h1`,0),hb(1,`Tabs`),nu(),Zi(2,`p`,1),hb(3,`Il componente Tabs`),nu(),Zi(4,`div`,2)(5,`h3`),hb(6,`Tab Group`),nu(),im(7,`div`,3),Zi(8,`h3`),hb(9,`Tab`),nu(),im(10,`div`,3),nu(),Zi(11,`it-tab-container`)(12,`it-tab-item`,4),im(13,`it-tabs-examples`),nu(),Zi(14,`it-tab-item`,5)(15,`h2`),hb(16,`Tab Group`),nu(),im(17,`it-api-parameters`,6),Zi(18,`h2`),hb(19,`Tab`),nu(),im(20,`it-api-parameters`,6),nu()()),n&2&&(MD(7),om(`innerHTML`,t.tabGroupComponent.description,BI),MD(3),om(`innerHTML`,t.tabComponent.description,BI),MD(7),om(`component`,t.tabGroupComponent),MD(3),om(`component`,t.tabComponent))},dependencies:[$,Ile,Fx,q],encapsulation:2,changeDetection:1})}}return e})()}];var K=(()=>{class e{static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵmod=Pg({type:e})}static{this.ɵinj=fa({imports:[ua.forChild(ee),ua]})}}return e})();var De=(()=>{class e{static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵmod=Pg({type:e})}static{this.ɵinj=fa({imports:[Zt,_Z,Ti,te,K]})}}return e})();export{De as TabsModule};