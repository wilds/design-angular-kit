import{$ as MD,Br as wC,Cn as fa,Ct as TC,Fn as hb,Hn as im,Mn as gm,Qn as mb,Zt as Zi,cr as om,ct as Pg,g as DC,it as OT,jt as Tw,l as BI,lt as Pm,or as nu,pn as cu,qr as xT,w as Fm}from"./chunk-BXp14hLr.js";import{E as Zt}from"./chunk-CtdKxuHA.js";import{Bt as xo,Jt as ua,M as TP,Nt as tn,V as _Z,Wt as yf,f as Fx,gt as nP,h as Ile,kt as sP,zt as xP}from"./main-JCJIXXB4.js";import{i as te,n as oe,r as q$1,t as $}from"./chunk-4-cg1OfJ.js";function Q(t,O){if(t&1&&(Zi(0,`it-breadcrumb-item`,2),hb(1),nu()),t&2){let i=O.$implicit;om(`href`,i.link)(`iconName`,i.icon)(`active`,i.active),MD(),cu(` `,i.label,` `)}}var q=(()=>{class t{constructor(){this._icon=`star-outline`,this.separator=`/`,this.isDark=!1,this.items=[{link:`https://www.aol.com`,label:`Crumb 1`,icon:this.icon,active:!1},{link:`https://www.yahoo.com`,label:`Crumb 2`,icon:this.icon,active:!1},{link:`https://www.bing.com`,label:`Crumb 3`,icon:this.icon,active:!0}],this.i=4}get icon(){return this._icon}set icon(i){this._icon=i,this.items.forEach(r=>r.icon=this._icon)}insert(){for(let i of this.items)i.active=!1;this.items.push({link:`https://www.google.com`,label:`Crumb ${this.i}`,icon:this.icon,active:!0}),this.i++}remove(){this.items.length&&(this.items.pop(),this.i--)}change(){this.separator=this.separator===`/`?`>`:`/`,this.items.forEach(i=>{i.icon=i.icon===`star-outline`?`locked`:`star-outline`})}toggle(){this.isDark=!this.isDark}static{this.ɵfac=function(r){return new(r||t)}}static{this.ɵcmp=Tw({type:t,selectors:[[`it-breadcrumb-example`]],standalone:!1,decls:30,vars:11,consts:[[1,`bd-example`],[3,`dark`,`separator`],[1,`me-1`,3,`href`,`iconName`,`active`],[1,`row`],[1,`form-check`,`col-6`],[`label`,`Sfondo scuro`,3,`ngModelChange`,`ngModel`],[1,`row`,`mt-4`],[1,`col-6`],[`itButton`,`primary`,`size`,`lg`,1,`mb-3`,3,`click`],[`itButton`,`primary`,`size`,`lg`,1,`mb-3`,3,`click`,`disabled`],[1,`form-check`,`col-3`],[`value`,`/`,`label`,`/`,`name`,`separator`,3,`ngModelChange`,`ngModel`],[`value`,`>`,`label`,`>`,`name`,`separator`,3,`ngModelChange`,`ngModel`],[`value`,`~`,`label`,`~`,`name`,`separator`,3,`ngModelChange`,`ngModel`],[`label`,`Nessuna`,`name`,`icon`,3,`ngModelChange`,`value`,`ngModel`],[`value`,`star-outline`,`label`,`it-star-outline`,`name`,`icon`,3,`ngModelChange`,`ngModel`],[`value`,`link`,`label`,`it-link`,`name`,`icon`,3,`ngModelChange`,`ngModel`]],template:function(r,e){r&1&&(Zi(0,`h3`),hb(1,`Esempio Breadcrumb`),nu(),Zi(2,`div`,0)(3,`it-breadcrumb`,1),TC(4,Q,2,4,`it-breadcrumb-item`,2,DC),nu(),Zi(6,`div`,3)(7,`div`,4)(8,`h4`),hb(9,`Azioni`),nu(),Zi(10,`it-checkbox`,5),xT(),Fm(`ngModelChange`,function(n){return mb(e.isDark,n)||(e.isDark=n),n}),nu(),Zi(11,`div`,6)(12,`div`,7)(13,`button`,8),gm(`click`,function(){return e.insert()}),hb(14,`Aggiungi breadcrumb`),nu()(),Zi(15,`div`,7)(16,`button`,9),gm(`click`,function(){return e.remove()}),hb(17,`Rimuovi breadcrumb`),nu()()()(),Zi(18,`div`,10)(19,`h5`),hb(20,`Separatore`),nu(),Zi(21,`it-radio-button`,11),xT(),Fm(`ngModelChange`,function(n){return mb(e.separator,n)||(e.separator=n),n}),nu(),Zi(22,`it-radio-button`,12),xT(),Fm(`ngModelChange`,function(n){return mb(e.separator,n)||(e.separator=n),n}),nu(),Zi(23,`it-radio-button`,13),xT(),Fm(`ngModelChange`,function(n){return mb(e.separator,n)||(e.separator=n),n}),nu()(),Zi(24,`div`,10)(25,`h5`),hb(26,`Icona`),nu(),Zi(27,`it-radio-button`,14),xT(),Fm(`ngModelChange`,function(n){return mb(e.icon,n)||(e.icon=n),n}),nu(),Zi(28,`it-radio-button`,15),xT(),Fm(`ngModelChange`,function(n){return mb(e.icon,n)||(e.icon=n),n}),nu(),Zi(29,`it-radio-button`,16),xT(),Fm(`ngModelChange`,function(n){return mb(e.icon,n)||(e.icon=n),n}),nu()()()()),r&2&&(MD(3),om(`dark`,e.isDark)(`separator`,e.separator),MD(),wC(e.items),MD(6),Pm(`ngModel`,e.isDark),OT(),MD(6),om(`disabled`,!e.items.length),MD(5),Pm(`ngModel`,e.separator),OT(),MD(),Pm(`ngModel`,e.separator),OT(),MD(),Pm(`ngModel`,e.separator),OT(),MD(4),om(`value`,void 0),Pm(`ngModel`,e.icon),OT(),MD(),Pm(`ngModel`,e.icon),OT(),MD(),Pm(`ngModel`,e.icon),OT())},dependencies:[tn,yf,xo,nP,sP,xP,TP],encapsulation:2,changeDetection:1})}}return t})();var G=(()=>{class t{constructor(){}static{this.ɵfac=function(r){return new(r||t)}}static{this.ɵcmp=Tw({type:t,selectors:[[`it-breadcrumb-examples`]],standalone:!1,decls:2,vars:0,consts:[[`html`,`<h3>Esempio Breadcrumb</h3>
<div class="bd-example">
  <it-breadcrumb [dark]="isDark" [separator]="separator">
    @for (item of items; track item) {
      <it-breadcrumb-item class="me-1" [href]="item.link" [iconName]="item.icon" [active]="item.active">
        /{/{ item.label /}/}
      </it-breadcrumb-item>
    }
  </it-breadcrumb>

  <div class="row">
    <div class="form-check col-6">
      <h4>Azioni</h4>
      <it-checkbox [(ngModel)]="isDark" label="Sfondo scuro"></it-checkbox>

      <div class="row mt-4">
        <div class="col-6">
          <button itButton="primary" size="lg" class="mb-3" (click)="insert()">Aggiungi breadcrumb</button>
        </div>
        <div class="col-6">
          <button itButton="primary" size="lg" class="mb-3" (click)="remove()" [disabled]="!items.length">Rimuovi breadcrumb</button>
        </div>
      </div>
    </div>

    <div class="form-check col-3">
      <h5>Separatore</h5>
      <it-radio-button value="/" label="/" [(ngModel)]="separator" name="separator"></it-radio-button>
      <it-radio-button value=">" label=">" [(ngModel)]="separator" name="separator"></it-radio-button>
      <it-radio-button value="~" label="~" [(ngModel)]="separator" name="separator"></it-radio-button>
    </div>
    <div class="form-check col-3">
      <h5>Icona</h5>
      <it-radio-button [value]="undefined" label="Nessuna" [(ngModel)]="icon" name="icon"></it-radio-button>
      <it-radio-button value="star-outline" label="it-star-outline" [(ngModel)]="icon" name="icon"></it-radio-button>
      <it-radio-button value="link" label="it-link" [(ngModel)]="icon" name="icon"></it-radio-button>
    </div>
  </div>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconName } from 'design-angular-kit/interfaces/icon';

@Component({
  selector: 'it-breadcrumb-example',
  templateUrl: './breadcrumb-example.component.html',
  styleUrls: ['./breadcrumb-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class BreadcrumbExampleComponent {
  get icon(): IconName {
    return this._icon;
  }
  set icon(value: IconName) {
    this._icon = value;
    this.items.forEach(item => (item.icon = this._icon));
  }
  private _icon: IconName = 'star-outline';

  separator = '/';
  isDark = false;
  items = [
    { link: 'https://www.aol.com', label: 'Crumb 1', icon: this.icon, active: false },
    { link: 'https://www.yahoo.com', label: 'Crumb 2', icon: this.icon, active: false },
    { link: 'https://www.bing.com', label: 'Crumb 3', icon: this.icon, active: true },
  ];

  i = 4;

  insert() {
    for (const item of this.items) {
      item.active = false;
    }
    this.items.push({ link: \`https://www.google.com\`, label: \`Crumb \${this.i}\`, icon: this.icon, active: true });
    this.i++;
  }

  remove() {
    if (this.items.length) {
      this.items.pop();
      this.i--;
    }
  }

  change() {
    this.separator = this.separator === '/' ? '>' : '/';
    this.items.forEach(item => {
      item.icon = item.icon === 'star-outline' ? 'locked' : 'star-outline';
    });
  }

  toggle() {
    this.isDark = !this.isDark;
  }
}`]],template:function(r,e){r&1&&im(0,`it-breadcrumb-example`)(1,`it-source-display`,0)},dependencies:[q$1,q],encapsulation:2,changeDetection:1})}}return t})();var Y=[{path:``,component:(()=>{class t{constructor(){this.component=oe.components.find(i=>i.name===`ItBreadcrumbComponent`),this.subcomponent=oe.components.find(i=>i.name===`ItBreadcrumbItemComponent`)}static{this.ɵfac=function(r){return new(r||t)}}static{this.ɵcmp=Tw({type:t,selectors:[[`it-breadcrumb-index`]],standalone:!1,decls:15,vars:3,consts:[[1,`bd-title`],[1,`bd-lead`],[3,`innerHTML`],[`label`,`Esempi`,`active`,`true`,1,`pt-3`],[`label`,`API`,1,`pt-3`],[3,`component`]],template:function(r,e){r&1&&(Zi(0,`h1`,0),hb(1,`Breadcrumb`),nu(),Zi(2,`p`,1),hb(3,`Il componente Breadcrumb utilizzabile per la navigazione`),nu(),im(4,`div`,2),Zi(5,`it-tab-container`)(6,`it-tab-item`,3),im(7,`it-breadcrumb-examples`),nu(),Zi(8,`it-tab-item`,4)(9,`h2`),hb(10,`Breadcrumb`),nu(),im(11,`it-api-parameters`,5),Zi(12,`h2`),hb(13,`Breadcrumb Item`),nu(),im(14,`it-api-parameters`,5),nu()()),r&2&&(MD(4),om(`innerHTML`,e.component.description,BI),MD(7),om(`component`,e.component),MD(3),om(`component`,e.subcomponent))},dependencies:[$,Ile,Fx,G],encapsulation:2,changeDetection:1})}}return t})()}];var K=(()=>{class t{static{this.ɵfac=function(r){return new(r||t)}}static{this.ɵmod=Pg({type:t})}static{this.ɵinj=fa({imports:[ua.forChild(Y),ua]})}}return t})();var we=(()=>{class t{static{this.ɵfac=function(r){return new(r||t)}}static{this.ɵmod=Pg({type:t})}static{this.ɵinj=fa({imports:[Zt,_Z,te,K]})}}return t})();export{we as BreadcrumbModule};