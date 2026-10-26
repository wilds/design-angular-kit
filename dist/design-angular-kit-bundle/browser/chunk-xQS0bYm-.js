import{$ as MD,Br as wC,Cn as fa,Ct as TC,Fn as hb,Ft as VC,Hn as im,Kr as xC,O as Gd,Qn as mb,Zt as Zi,_r as qd,_t as Rm,cr as om,ct as Pg,g as DC,it as OT,jt as Tw,l as BI,lt as Pm,or as nu,qr as xT,w as Fm}from"./chunk-BXp14hLr.js";import{E as Zt}from"./chunk-CtdKxuHA.js";import{Bt as xo,Jt as ua,Nt as tn,Rt as x0,V as _Z,Wt as yf,d as FO,f as Fx,gt as nP,h as Ile,kt as sP}from"./main-JCJIXXB4.js";import{i as te,n as oe,r as q,t as $}from"./chunk-4-cg1OfJ.js";function Y(e,M){if(e&1){let a=xC();Zi(0,`it-radio-button`,16),xT(),Fm(`ngModelChange`,function(t){Gd(a);let c=VC();return mb(c.selectedColor,t)||(c.selectedColor=t),qd(t)}),nu()}if(e&2){let a=M.$implicit,n=M.$index,t=VC();om(`id`,`color-`+n)(`span`,a)(`value`,a)(`label`,a),Pm(`ngModel`,t.selectedColor),OT()}}var K=(()=>{class e{constructor(){this.colors=[`primary`,`secondary`,`danger`,`warning`,`success`],this.selectedColor=`primary`,this.badgeText=`New`,this.isRounded=!1}static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-badge-example`]],standalone:!1,decls:38,vars:10,consts:[[1,`bd-example`],[1,`row`],[1,`col-4`],[1,`example-section`],[1,`mt-4`],[`label`,`Testo badge`,3,`ngModelChange`,`ngModel`],[1,`col-6`],[`name`,`color`,3,`id`,`span`,`value`,`label`,`ngModel`],[`for`,`isRounded`],[`label`,`Rounded`,3,`ngModelChange`,`ngModel`],[1,`col-6`,`offset-2`],[1,`card-title`],[3,`itBadge`,`rounded`],[`href`,`#`,3,`itBadge`,`rounded`],[1,`mb-5`,3,`itButton`],[1,`visually-hidden`],[`name`,`color`,3,`ngModelChange`,`id`,`span`,`value`,`label`,`ngModel`]],template:function(n,t){n&1&&(Zi(0,`h3`),hb(1,`Configurazione badge`),nu(),Zi(2,`div`,0)(3,`div`,1)(4,`div`,2)(5,`div`,3)(6,`div`,4)(7,`it-input`,5),xT(),Fm(`ngModelChange`,function(m){return mb(t.badgeText,m)||(t.badgeText=m),m}),nu(),im(8,`hr`),nu(),Zi(9,`div`,1)(10,`div`,6)(11,`span`)(12,`strong`),hb(13,`Colore Badge`),nu()(),TC(14,Y,1,5,`it-radio-button`,7,DC),nu(),Zi(16,`div`,6)(17,`span`,8)(18,`strong`),hb(19,`Badge arrotondato`),nu()(),Zi(20,`it-checkbox`,9),xT(),Fm(`ngModelChange`,function(m){return mb(t.isRounded,m)||(t.isRounded=m),m}),nu()()()()(),Zi(21,`div`,10)(22,`h4`,11),hb(23,`Risultato badge`),nu(),Zi(24,`h5`),hb(25,` Testo di esempio `),Zi(26,`span`,12),hb(27),nu()(),Zi(28,`h5`),hb(29,`Link di esempio `),Zi(30,`a`,13),hb(31,`link`),nu()(),Zi(32,`button`,14),hb(33,` Profilo `),Zi(34,`span`,12),hb(35,`9`),nu(),Zi(36,`span`,15),hb(37,`Messaggi non letti`),nu()()()()()),n&2&&(MD(7),Pm(`ngModel`,t.badgeText),OT(),MD(7),wC(t.colors),MD(6),Pm(`ngModel`,t.isRounded),OT(),MD(6),om(`itBadge`,t.selectedColor)(`rounded`,t.isRounded),MD(),Rm(t.badgeText),MD(3),om(`itBadge`,t.selectedColor)(`rounded`,t.isRounded),MD(2),om(`itButton`,`primary`),MD(2),om(`itBadge`,t.selectedColor)(`rounded`,t.isRounded))},dependencies:[tn,yf,FO,xo,nP,x0,sP],encapsulation:2,changeDetection:1})}}return e})();var O=(()=>{class e{constructor(){}static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-badge-examples`]],standalone:!1,decls:2,vars:0,consts:[[`html`,`<h3>Configurazione badge</h3>
<div class="bd-example">
  <div class="row">
    <div class="col-4">
      <div class="example-section">
        <div class="mt-4">
          <it-input label="Testo badge" [(ngModel)]="badgeText"></it-input>
          <hr />
        </div>
        <div class="row">
          <div class="col-6">
            <span><strong>Colore Badge</strong></span>
            @for (color of colors; track color; let i = $index) {
              <it-radio-button
                [id]="'color-' + i"
                name="color"
                [span]="color"
                [value]="color"
                [label]="color"
                [(ngModel)]="selectedColor"></it-radio-button>
            }
          </div>
          <div class="col-6">
            <span for="isRounded"><strong>Badge arrotondato</strong></span>
            <it-checkbox [(ngModel)]="isRounded" label="Rounded"></it-checkbox>
          </div>
        </div>
      </div>
    </div>

    <div class="col-6 offset-2">
      <h4 class="card-title">Risultato badge</h4>

      <h5>
        Testo di esempio <span [itBadge]="selectedColor" [rounded]="isRounded">/{/{ badgeText /}/}</span>
      </h5>

      <h5>Link di esempio <a href="#" [itBadge]="selectedColor" [rounded]="isRounded">link</a></h5>
      <button class="mb-5" [itButton]="'primary'">
        Profilo <span [itBadge]="selectedColor" [rounded]="isRounded">9</span>
        <span class="visually-hidden">Messaggi non letti</span>
      </button>
    </div>
  </div>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BadgeColor } from 'design-angular-kit/interfaces/core';

@Component({
  selector: 'it-badge-example',
  templateUrl: './badge-example.component.html',
  styleUrls: ['./badge-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class BadgeExampleComponent {
  colors: Array<BadgeColor> = ['primary', 'secondary', 'danger', 'warning', 'success'];

  selectedColor: BadgeColor = 'primary';
  badgeText = 'New';

  isRounded = false;
}`]],template:function(n,t){n&1&&im(0,`it-badge-example`)(1,`it-source-display`,0)},dependencies:[q,K],encapsulation:2,changeDetection:1})}}return e})();var ee=[{path:``,component:(()=>{class e{constructor(){this.directive=oe.directives.find(a=>a.name===`ItBadgeDirective`)}static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-badge-index`]],standalone:!1,decls:10,vars:2,consts:[[1,`bd-title`],[1,`bd-lead`],[3,`innerHTML`],[`label`,`Esempi`,`active`,`true`,1,`pt-3`],[`label`,`API`,1,`pt-3`],[3,`component`]],template:function(n,t){n&1&&(Zi(0,`h1`,0),hb(1,`Badge`),nu(),Zi(2,`p`,1),hb(3,`Documentazione ed esempi del componente badge, utile per piccoli contatori ed etichette.`),nu(),im(4,`div`,2),Zi(5,`it-tab-container`)(6,`it-tab-item`,3),im(7,`it-badge-examples`),nu(),Zi(8,`it-tab-item`,4),im(9,`it-api-parameters`,5),nu()()),n&2&&(MD(4),om(`innerHTML`,t.directive.description,BI),MD(5),om(`component`,t.directive))},dependencies:[$,Ile,Fx,O],encapsulation:2,changeDetection:1})}}return e})()}];var X=(()=>{class e{static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵmod=Pg({type:e})}static{this.ɵinj=fa({imports:[ua.forChild(ee),ua]})}}return e})();var _e=(()=>{class e{static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵmod=Pg({type:e})}static{this.ɵinj=fa({imports:[Zt,_Z,te,X]})}}return e})();export{_e as BadgeModule};