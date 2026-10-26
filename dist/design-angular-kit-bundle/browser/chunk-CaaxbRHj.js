import{$ as MD,Cn as fa,Fn as hb,Ft as VC,Hn as im,Mn as gm,Qn as mb,Ur as wm,Yr as yC,Zt as Zi,cr as om,ct as Pg,it as OT,jt as Tw,l as BI,lt as Pm,or as nu,pn as cu,qr as xT,w as Fm,x as EC}from"./chunk-BXp14hLr.js";import{E as Zt}from"./chunk-CtdKxuHA.js";import{Bt as xo,H as _t,Jt as ua,Nt as tn,V as _Z,Wt as yf,f as Fx,gt as nP,h as Ile,kt as sP}from"./main-JCJIXXB4.js";import{i as te,n as oe$1,r as q$1,t as $}from"./chunk-4-cg1OfJ.js";function ne(i,$){if(i&1&&im(0,`it-icon`,2),i&2){let g=VC();om(`name`,g.icon)(`color`,g.iconColor)}}function oe(i,$){if(i&1&&im(0,`it-icon`,3),i&2){let g=VC();om(`name`,g.icon)(`color`,g.iconColor)}}var G=(()=>{class i{constructor(){this.block=!1,this.outline=!1,this.disabled=!1,this.selectedColor=``,this.selectedSize=``,this.count=0,this.icon=`user`,this.iconColor=`white`,this.iconPosition=`start`,this.iconRounded=!0,this.iconRoundedColor=`white`}increaseCount(){this.count++}static{this.ɵfac=function(r){return new(r||i)}}static{this.ɵcmp=Tw({type:i,selectors:[[`it-button-example-icon`]],standalone:!1,decls:34,vars:15,consts:[[1,`bd-example`],[`itButton`,`primary`,1,`mb-5`],[1,`me-2`,3,`name`,`color`],[1,`ms-2`,3,`name`,`color`],[1,`row`],[1,`form-check`,`col-2`],[`value`,`user`,`label`,`it-user`,`name`,`icon`,3,`ngModelChange`,`ngModel`],[`value`,`check`,`label`,`it-check`,`name`,`icon`,3,`ngModelChange`,`ngModel`],[`value`,`start`,`label`,`Start`,`name`,`position`,3,`ngModelChange`,`ngModel`],[`value`,`end`,`label`,`End`,`name`,`position`,3,`ngModelChange`,`ngModel`],[1,`form-check`,`col-6`],[1,`form-check`,`col-5`],[`value`,`white`,`label`,`White`,`name`,`icon-color`,3,`ngModelChange`,`ngModel`],[`value`,`primary`,`label`,`Primary`,`name`,`icon-color`,3,`ngModelChange`,`ngModel`],[`value`,`secondary`,`label`,`Secondary`,`name`,`icon-color`,3,`ngModelChange`,`ngModel`],[1,`form-check`,`col-4`],[`value`,`success`,`label`,`Success`,`name`,`icon-color`,3,`ngModelChange`,`ngModel`],[`value`,`warning`,`label`,`Warning`,`name`,`icon-color`,3,`ngModelChange`,`ngModel`],[`value`,`danger`,`label`,`Danger`,`name`,`icon-color`,3,`ngModelChange`,`ngModel`],[1,`form-check`,`col-3`],[`value`,`info`,`label`,`Info`,`name`,`icon-color`,3,`ngModelChange`,`ngModel`],[`value`,`light`,`label`,`Light`,`name`,`icon-color`,3,`ngModelChange`,`ngModel`],[`value`,`dark`,`label`,`Dark`,`name`,`icon-color`,3,`ngModelChange`,`ngModel`]],template:function(r,t){r&1&&(Zi(0,`h3`),hb(1,`Bottone con icona`),nu(),Zi(2,`div`,0)(3,`button`,1),yC(4,ne,1,2,`it-icon`,2),hb(5,` Login `),yC(6,oe,1,2,`it-icon`,3),nu(),Zi(7,`div`,4)(8,`div`,5)(9,`h5`),hb(10,`Icona`),nu(),Zi(11,`it-radio-button`,6),xT(),Fm(`ngModelChange`,function(e){return mb(t.icon,e)||(t.icon=e),e}),nu(),Zi(12,`it-radio-button`,7),xT(),Fm(`ngModelChange`,function(e){return mb(t.icon,e)||(t.icon=e),e}),nu()(),Zi(13,`div`,5)(14,`h5`),hb(15,`Posizione`),nu(),Zi(16,`it-radio-button`,8),xT(),Fm(`ngModelChange`,function(e){return mb(t.iconPosition,e)||(t.iconPosition=e),e}),nu(),Zi(17,`it-radio-button`,9),xT(),Fm(`ngModelChange`,function(e){return mb(t.iconPosition,e)||(t.iconPosition=e),e}),nu()(),Zi(18,`div`,10)(19,`h5`),hb(20,`Colorazione Icona`),nu(),Zi(21,`div`,4)(22,`div`,11)(23,`it-radio-button`,12),xT(),Fm(`ngModelChange`,function(e){return mb(t.iconColor,e)||(t.iconColor=e),e}),nu(),Zi(24,`it-radio-button`,13),xT(),Fm(`ngModelChange`,function(e){return mb(t.iconColor,e)||(t.iconColor=e),e}),nu(),Zi(25,`it-radio-button`,14),xT(),Fm(`ngModelChange`,function(e){return mb(t.iconColor,e)||(t.iconColor=e),e}),nu()(),Zi(26,`div`,15)(27,`it-radio-button`,16),xT(),Fm(`ngModelChange`,function(e){return mb(t.iconColor,e)||(t.iconColor=e),e}),nu(),Zi(28,`it-radio-button`,17),xT(),Fm(`ngModelChange`,function(e){return mb(t.iconColor,e)||(t.iconColor=e),e}),nu(),Zi(29,`it-radio-button`,18),xT(),Fm(`ngModelChange`,function(e){return mb(t.iconColor,e)||(t.iconColor=e),e}),nu()(),Zi(30,`div`,19)(31,`it-radio-button`,20),xT(),Fm(`ngModelChange`,function(e){return mb(t.iconColor,e)||(t.iconColor=e),e}),nu(),Zi(32,`it-radio-button`,21),xT(),Fm(`ngModelChange`,function(e){return mb(t.iconColor,e)||(t.iconColor=e),e}),nu(),Zi(33,`it-radio-button`,22),xT(),Fm(`ngModelChange`,function(e){return mb(t.iconColor,e)||(t.iconColor=e),e}),nu()()()()()()),r&2&&(MD(4),EC(t.iconPosition===`start`?4:-1),MD(2),EC(t.iconPosition===`end`?6:-1),MD(5),Pm(`ngModel`,t.icon),OT(),MD(),Pm(`ngModel`,t.icon),OT(),MD(4),Pm(`ngModel`,t.iconPosition),OT(),MD(),Pm(`ngModel`,t.iconPosition),OT(),MD(6),Pm(`ngModel`,t.iconColor),OT(),MD(),Pm(`ngModel`,t.iconColor),OT(),MD(),Pm(`ngModel`,t.iconColor),OT(),MD(2),Pm(`ngModel`,t.iconColor),OT(),MD(),Pm(`ngModel`,t.iconColor),OT(),MD(),Pm(`ngModel`,t.iconColor),OT(),MD(2),Pm(`ngModel`,t.iconColor),OT(),MD(),Pm(`ngModel`,t.iconColor),OT(),MD(),Pm(`ngModel`,t.iconColor),OT())},dependencies:[xo,sP,_t,tn,yf],encapsulation:2,changeDetection:1})}}return i})();var X=(()=>{class i{static{this.ɵfac=function(r){return new(r||i)}}static{this.ɵcmp=Tw({type:i,selectors:[[`it-button-example-color-dark`]],standalone:!1,decls:18,vars:0,consts:[[1,`bd-example`],[1,`bg-dark`,`ps-3`,`py-3`],[1,`card-text`,`example-section`],[`itButton`,`primary`,1,`me-2`],[`itButton`,`outline-primary`,1,`me-2`],[`itButton`,`primary`,`disabled`,`true`],[`itButton`,`secondary`,1,`me-2`],[`itButton`,`outline-secondary`,1,`me-2`],[`itButton`,`secondary`,`disabled`,`true`]],template:function(r,t){r&1&&(Zi(0,`h3`),hb(1,`Su sfondo scuro`),nu(),Zi(2,`div`,0)(3,`div`,1)(4,`p`,2)(5,`button`,3),hb(6,`Primary`),nu(),Zi(7,`button`,4),hb(8,`Primary outline`),nu(),Zi(9,`button`,5),hb(10,`Primary disabled`),nu()(),Zi(11,`p`,2)(12,`button`,6),hb(13,`Secondary`),nu(),Zi(14,`button`,7),hb(15,`Secondary outline`),nu(),Zi(16,`button`,8),hb(17,`Secondary disabled`),nu()()()())},dependencies:[xo],styles:[`button[_ngcontent-%COMP%]{margin:4px 8px;width:200px}`],changeDetection:1})}}return i})();var H=(()=>{class i{constructor(){this.color=`primary`,this.disabled=!1,this.isOutlined=!1,this.size=`lg`,this.isBlock=!1}static{this.ɵfac=function(r){return new(r||i)}}static{this.ɵcmp=Tw({type:i,selectors:[[`it-button-example`]],standalone:!1,decls:10,vars:0,consts:[[1,`bd-example`],[1,`row`,`w-50`],[1,`col-4`],[`itButton`,`primary`],[`itButton`,`primary`,`disabled`,`true`]],template:function(r,t){r&1&&(Zi(0,`h3`),hb(1,`Configurazione bottone`),nu(),Zi(2,`div`,0)(3,`div`,1)(4,`div`,2)(5,`button`,3),hb(6,`Abilitato`),nu()(),Zi(7,`div`,2)(8,`button`,4),hb(9,`Disabilitato`),nu()()()())},dependencies:[xo],encapsulation:2,changeDetection:1})}}return i})();var q=(()=>{class i{static{this.ɵfac=function(r){return new(r||i)}}static{this.ɵcmp=Tw({type:i,selectors:[[`it-button-example-color`]],standalone:!1,decls:18,vars:0,consts:[[1,`bd-example`],[1,`py-1`],[1,`card-text`,`example-section`],[`itButton`,`primary`,1,`me-2`],[`itButton`,`outline-primary`,1,`me-2`],[`itButton`,`primary`,`disabled`,`true`],[`itButton`,`secondary`,1,`me-2`],[`itButton`,`outline-secondary`,1,`me-2`],[`itButton`,`secondary`,`disabled`,`true`]],template:function(r,t){r&1&&(Zi(0,`h3`),hb(1,`Varianti di colore con sfondo chiaro`),nu(),Zi(2,`div`,0)(3,`div`,1)(4,`p`,2)(5,`button`,3),hb(6,`Primary`),nu(),Zi(7,`button`,4),hb(8,`Primary outline`),nu(),Zi(9,`button`,5),hb(10,`Primary disabled`),nu()(),Zi(11,`p`,2)(12,`button`,6),hb(13,`Secondary`),nu(),Zi(14,`button`,7),hb(15,`Secondary outline`),nu(),Zi(16,`button`,8),hb(17,`Secondary disabled`),nu()()()())},dependencies:[xo],styles:[`button[_ngcontent-%COMP%]{margin:4px 8px;width:200px}`],changeDetection:1})}}return i})();var J=(()=>{class i{static{this.ɵfac=function(r){return new(r||i)}}static{this.ɵcmp=Tw({type:i,selectors:[[`it-button-example-size`]],standalone:!1,decls:18,vars:0,consts:[[1,`bd-example`],[1,`example-section`],[`size`,`xs`,`itButton`,`primary`,1,`me-2`],[`size`,`xs`,`itButton`,`secondary`],[`size`,`sm`,`itButton`,`primary`,1,`me-2`],[`size`,`sm`,`itButton`,`secondary`],[`size`,`lg`,`itButton`,`primary`,1,`me-2`],[`size`,`lg`,`itButton`,`secondary`]],template:function(r,t){r&1&&(Zi(0,`h3`),hb(1,`Varianti di dimensione`),nu(),Zi(2,`div`,0)(3,`p`,1)(4,`button`,2),hb(5,`Button XS`),nu(),Zi(6,`button`,3),hb(7,`Button XS`),nu()(),Zi(8,`p`,1)(9,`button`,4),hb(10,`Button SM`),nu(),Zi(11,`button`,5),hb(12,`Button SM`),nu()(),Zi(13,`p`,1)(14,`button`,6),hb(15,`Button LG`),nu(),Zi(16,`button`,7),hb(17,`Button LG`),nu()()())},dependencies:[xo],styles:[`button[_ngcontent-%COMP%]{margin:4px 8px;width:200px}`],changeDetection:1})}}return i})();var K=(()=>{class i{constructor(){this.disabled=!1,this.outline=!1,this.block=!1,this.selectedColor=`primary`,this.count=0}get buttonColor(){if(this.selectedColor)return this.outline?`outline-${this.selectedColor}`:this.selectedColor}increaseCount(){this.count++}static{this.ɵfac=function(r){return new(r||i)}}static{this.ɵcmp=Tw({type:i,selectors:[[`it-button-example-interactive`]],standalone:!1,decls:35,vars:24,consts:[[1,`bd-example`],[1,`mb-5`,3,`click`,`itButton`,`size`,`disabled`],[1,`row`],[1,`form-check`,`col-2`],[`label`,`Disabled`,3,`ngModelChange`,`ngModel`],[`label`,`Block`,3,`ngModelChange`,`ngModel`],[`label`,`Outline`,3,`ngModelChange`,`ngModel`],[`name`,`size`,`label`,`None`,3,`ngModelChange`,`value`,`ngModel`],[`value`,`lg`,`name`,`size`,`label`,`lg`,3,`ngModelChange`,`ngModel`],[`value`,`sm`,`name`,`size`,`label`,`sm`,3,`ngModelChange`,`ngModel`],[`value`,`xs`,`name`,`size`,`label`,`xs`,3,`ngModelChange`,`ngModel`],[1,`form-check`,`col-6`],[1,`form-check`,`col-5`],[`name`,`selectedColor`,`label`,`None`,3,`ngModelChange`,`ngModel`,`value`],[`name`,`selectedColor`,`value`,`primary`,`label`,`Primary`,3,`ngModelChange`,`ngModel`],[`name`,`selectedColor`,`value`,`secondary`,`label`,`Secondary`,3,`ngModelChange`,`ngModel`],[1,`form-check`,`col-4`],[`name`,`selectedColor`,`value`,`success`,`label`,`Success`,3,`ngModelChange`,`ngModel`],[`name`,`selectedColor`,`value`,`warning`,`label`,`Warning`,3,`ngModelChange`,`ngModel`],[`name`,`selectedColor`,`value`,`danger`,`label`,`Danger`,3,`ngModelChange`,`ngModel`],[1,`form-check`,`col-3`],[`name`,`selectedColor`,`value`,`info`,`label`,`Info`,3,`ngModelChange`,`ngModel`],[`name`,`selectedColor`,`value`,`light`,`label`,`Light`,3,`ngModelChange`,`ngModel`],[`name`,`selectedColor`,`value`,`dark`,`label`,`Dark`,3,`ngModelChange`,`ngModel`]],template:function(r,t){r&1&&(Zi(0,`h3`),hb(1,`Interazione con bottone`),nu(),Zi(2,`div`,0)(3,`button`,1),gm(`click`,function(){return t.increaseCount()}),hb(4),nu(),Zi(5,`div`,2)(6,`div`,3)(7,`h5`),hb(8,`Opzioni`),nu(),Zi(9,`it-checkbox`,4),xT(),Fm(`ngModelChange`,function(e){return mb(t.disabled,e)||(t.disabled=e),e}),nu(),Zi(10,`it-checkbox`,5),xT(),Fm(`ngModelChange`,function(e){return mb(t.block,e)||(t.block=e),e}),nu(),Zi(11,`it-checkbox`,6),xT(),Fm(`ngModelChange`,function(e){return mb(t.outline,e)||(t.outline=e),e}),nu()(),Zi(12,`div`,3)(13,`h5`),hb(14,`Dimensione`),nu(),Zi(15,`it-radio-button`,7),xT(),Fm(`ngModelChange`,function(e){return mb(t.selectedSize,e)||(t.selectedSize=e),e}),nu(),Zi(16,`it-radio-button`,8),xT(),Fm(`ngModelChange`,function(e){return mb(t.selectedSize,e)||(t.selectedSize=e),e}),nu(),Zi(17,`it-radio-button`,9),xT(),Fm(`ngModelChange`,function(e){return mb(t.selectedSize,e)||(t.selectedSize=e),e}),nu(),Zi(18,`it-radio-button`,10),xT(),Fm(`ngModelChange`,function(e){return mb(t.selectedSize,e)||(t.selectedSize=e),e}),nu()(),Zi(19,`div`,11)(20,`h5`),hb(21,`Colorazione`),nu(),Zi(22,`div`,2)(23,`div`,12)(24,`it-radio-button`,13),xT(),Fm(`ngModelChange`,function(e){return mb(t.selectedColor,e)||(t.selectedColor=e),e}),nu(),Zi(25,`it-radio-button`,14),xT(),Fm(`ngModelChange`,function(e){return mb(t.selectedColor,e)||(t.selectedColor=e),e}),nu(),Zi(26,`it-radio-button`,15),xT(),Fm(`ngModelChange`,function(e){return mb(t.selectedColor,e)||(t.selectedColor=e),e}),nu()(),Zi(27,`div`,16)(28,`it-radio-button`,17),xT(),Fm(`ngModelChange`,function(e){return mb(t.selectedColor,e)||(t.selectedColor=e),e}),nu(),Zi(29,`it-radio-button`,18),xT(),Fm(`ngModelChange`,function(e){return mb(t.selectedColor,e)||(t.selectedColor=e),e}),nu(),Zi(30,`it-radio-button`,19),xT(),Fm(`ngModelChange`,function(e){return mb(t.selectedColor,e)||(t.selectedColor=e),e}),nu()(),Zi(31,`div`,20)(32,`it-radio-button`,21),xT(),Fm(`ngModelChange`,function(e){return mb(t.selectedColor,e)||(t.selectedColor=e),e}),nu(),Zi(33,`it-radio-button`,22),xT(),Fm(`ngModelChange`,function(e){return mb(t.selectedColor,e)||(t.selectedColor=e),e}),nu(),Zi(34,`it-radio-button`,23),xT(),Fm(`ngModelChange`,function(e){return mb(t.selectedColor,e)||(t.selectedColor=e),e}),nu()()()()()()),r&2&&(MD(2),wm(`d-grid`,t.block),MD(),om(`itButton`,t.buttonColor)(`size`,t.selectedSize)(`disabled`,t.disabled),MD(),cu(` Numero click eseguiti: `,t.count,` `),MD(5),Pm(`ngModel`,t.disabled),OT(),MD(),Pm(`ngModel`,t.block),OT(),MD(),Pm(`ngModel`,t.outline),OT(),MD(4),om(`value`,void 0),Pm(`ngModel`,t.selectedSize),OT(),MD(),Pm(`ngModel`,t.selectedSize),OT(),MD(),Pm(`ngModel`,t.selectedSize),OT(),MD(),Pm(`ngModel`,t.selectedSize),OT(),MD(6),Pm(`ngModel`,t.selectedColor),om(`value`,void 0),OT(),MD(),Pm(`ngModel`,t.selectedColor),OT(),MD(),Pm(`ngModel`,t.selectedColor),OT(),MD(2),Pm(`ngModel`,t.selectedColor),OT(),MD(),Pm(`ngModel`,t.selectedColor),OT(),MD(),Pm(`ngModel`,t.selectedColor),OT(),MD(2),Pm(`ngModel`,t.selectedColor),OT(),MD(),Pm(`ngModel`,t.selectedColor),OT(),MD(),Pm(`ngModel`,t.selectedColor),OT())},dependencies:[xo,nP,sP,tn,yf],encapsulation:2,changeDetection:1})}}return i})();var Q=(()=>{class i{static{this.ɵfac=function(r){return new(r||i)}}static{this.ɵcmp=Tw({type:i,selectors:[[`it-button-examples`]],standalone:!1,decls:12,vars:0,consts:[[`html`,`<h3>Interazione con bottone</h3>

<div class="bd-example" [class.d-grid]="block">
  <button class="mb-5" [itButton]="buttonColor" [size]="selectedSize" [disabled]="disabled" (click)="increaseCount()">
    Numero click eseguiti: /{/{ count /}/}
  </button>

  <div class="row">
    <div class="form-check col-2">
      <h5>Opzioni</h5>
      <it-checkbox [(ngModel)]="disabled" label="Disabled"></it-checkbox>
      <it-checkbox [(ngModel)]="block" label="Block"></it-checkbox>
      <it-checkbox [(ngModel)]="outline" label="Outline"></it-checkbox>
    </div>
    <div class="form-check col-2">
      <h5>Dimensione</h5>
      <it-radio-button [value]="undefined" name="size" label="None" [(ngModel)]="selectedSize"></it-radio-button>
      <it-radio-button value="lg" name="size" label="lg" [(ngModel)]="selectedSize"></it-radio-button>
      <it-radio-button value="sm" name="size" label="sm" [(ngModel)]="selectedSize"></it-radio-button>
      <it-radio-button value="xs" name="size" label="xs" [(ngModel)]="selectedSize"></it-radio-button>
    </div>

    <div class="form-check col-6">
      <h5>Colorazione</h5>
      <div class="row">
        <div class="form-check col-5">
          <it-radio-button [(ngModel)]="selectedColor" name="selectedColor" [value]="undefined" label="None"></it-radio-button>
          <it-radio-button [(ngModel)]="selectedColor" name="selectedColor" value="primary" label="Primary"></it-radio-button>
          <it-radio-button [(ngModel)]="selectedColor" name="selectedColor" value="secondary" label="Secondary"></it-radio-button>
        </div>
        <div class="form-check col-4">
          <it-radio-button [(ngModel)]="selectedColor" name="selectedColor" value="success" label="Success"></it-radio-button>
          <it-radio-button [(ngModel)]="selectedColor" name="selectedColor" value="warning" label="Warning"></it-radio-button>
          <it-radio-button [(ngModel)]="selectedColor" name="selectedColor" value="danger" label="Danger"></it-radio-button>
        </div>
        <div class="form-check col-3">
          <it-radio-button [(ngModel)]="selectedColor" name="selectedColor" value="info" label="Info"></it-radio-button>
          <it-radio-button [(ngModel)]="selectedColor" name="selectedColor" value="light" label="Light"></it-radio-button>
          <it-radio-button [(ngModel)]="selectedColor" name="selectedColor" value="dark" label="Dark"></it-radio-button>
        </div>
      </div>
    </div>
  </div>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ButtonColor, ButtonSize } from 'design-angular-kit/interfaces/core';

@Component({
  selector: 'it-button-example-interactive',
  templateUrl: './button-example-interactive.component.html',
  styleUrls: ['./button-example-interactive.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class ButtonExampleInteractiveComponent {
  disabled = false;

  outline = false;

  block = false;

  selectedColor?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' = 'primary';
  selectedSize?: ButtonSize;
  count = 0;

  get buttonColor(): ButtonColor | undefined {
    if (!this.selectedColor) {
      return undefined;
    }
    return this.outline ? \`outline-\${this.selectedColor}\` : this.selectedColor;
  }

  increaseCount() {
    this.count++;
  }
}`],[`html`,`<h3>Bottone con icona</h3>

<div class="bd-example">
  <button itButton="primary" class="mb-5">
    @if (iconPosition === 'start') {
      <it-icon [name]="icon" [color]="iconColor" class="me-2"></it-icon>
    }
    Login
    @if (iconPosition === 'end') {
      <it-icon [name]="icon" [color]="iconColor" class="ms-2"></it-icon>
    }
  </button>

  <div class="row">
    <div class="form-check col-2">
      <h5>Icona</h5>
      <it-radio-button value="user" label="it-user" name="icon" [(ngModel)]="icon"></it-radio-button>
      <it-radio-button value="check" label="it-check" name="icon" [(ngModel)]="icon"></it-radio-button>
    </div>

    <div class="form-check col-2">
      <h5>Posizione</h5>
      <it-radio-button value="start" label="Start" name="position" [(ngModel)]="iconPosition"></it-radio-button>
      <it-radio-button value="end" label="End" name="position" [(ngModel)]="iconPosition"></it-radio-button>
    </div>

    <div class="form-check col-6">
      <h5>Colorazione Icona</h5>
      <div class="row">
        <div class="form-check col-5">
          <it-radio-button value="white" label="White" name="icon-color" [(ngModel)]="iconColor"></it-radio-button>
          <it-radio-button value="primary" label="Primary" name="icon-color" [(ngModel)]="iconColor"></it-radio-button>
          <it-radio-button value="secondary" label="Secondary" name="icon-color" [(ngModel)]="iconColor"></it-radio-button>
        </div>
        <div class="form-check col-4">
          <it-radio-button value="success" label="Success" name="icon-color" [(ngModel)]="iconColor"></it-radio-button>
          <it-radio-button value="warning" label="Warning" name="icon-color" [(ngModel)]="iconColor"></it-radio-button>
          <it-radio-button value="danger" label="Danger" name="icon-color" [(ngModel)]="iconColor"></it-radio-button>
        </div>
        <div class="form-check col-3">
          <it-radio-button value="info" label="Info" name="icon-color" [(ngModel)]="iconColor"></it-radio-button>
          <it-radio-button value="light" label="Light" name="icon-color" [(ngModel)]="iconColor"></it-radio-button>
          <it-radio-button value="dark" label="Dark" name="icon-color" [(ngModel)]="iconColor"></it-radio-button>
        </div>
      </div>
    </div>
  </div>
  <!--  <div class="row mt-4">-->
  <!--    <div class="form-check col-4">-->
  <!--      <h5>Icona Cerchiata</h5>-->
  <!--      <it-checkbox [(ngModel)]="iconRounded" label="Rounded"></it-checkbox>-->
  <!--    </div>-->
  <!--    <div class="form-check col-7" *ngIf = "iconRounded">-->
  <!--      <h5>Colorazione Sfondo Icona</h5>-->
  <!--      <it-radio-group [(ngModel)]="iconRoundedColor">-->
  <!--        <div class="row">-->
  <!--          <div class="form-check col-5">-->
  <!--            <it-radio-button showValidation="false" name="radio-icon-rounded-white" value="white" label="White"></it-radio-button>-->
  <!--            <it-radio-button showValidation="false" name="radio-icon-rounded-primary" value="primary" label="Primary"></it-radio-button>-->
  <!--            <it-radio-button showValidation="false" name="radio-icon-rounded-secondary" value="secondary" label="Secondary"></it-radio-button>-->
  <!--          </div>-->
  <!--          <div class="form-check col-4">-->
  <!--            <it-radio-button showValidation="false" name="radio-icon-rounded-success" value="success" label="Success"></it-radio-button>-->
  <!--            <it-radio-button showValidation="false" name="radio-icon-rounded-warning" value="warning" label="Warning"></it-radio-button>-->
  <!--            <it-radio-button showValidation="false" name="radio-icon-rounded-danger" value="danger" label="Danger"></it-radio-button>-->
  <!--          </div>-->
  <!--          <div class="form-check col-3">-->
  <!--            <it-radio-button showValidation="false" name="radio-icon-rounded-info" value="info" label="Info"></it-radio-button>-->
  <!--            <it-radio-button showValidation="false" name="radio-icon-rounded-light" value="light" label="Light"></it-radio-button>-->
  <!--            <it-radio-button showValidation="false" name="radio-icon-rounded-dark" value="dark" label="Dark"></it-radio-button>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--      </it-radio-group>-->
  <!--    </div>-->
  <!--  </div>-->
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconColor, IconName } from 'design-angular-kit/interfaces/icon';

@Component({
  selector: 'it-button-example-icon',
  templateUrl: './button-example-icon.component.html',
  styleUrls: ['./button-example-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class ButtonExampleIconComponent {
  block = false;
  outline = false;
  disabled = false;
  selectedColor = '';
  selectedSize = '';
  count = 0;

  icon: IconName = 'user';
  iconColor: IconColor = 'white';
  iconPosition: 'start' | 'end' = 'start';
  iconRounded: boolean = true;
  iconRoundedColor: IconColor = 'white';

  increaseCount() {
    this.count++;
  }
}`],[`html`,`<h3>Configurazione bottone</h3>
<div class="bd-example">
  <div class="row w-50">
    <div class="col-4">
      <button itButton="primary">Abilitato</button>
    </div>
    <div class="col-4">
      <button itButton="primary" disabled="true">Disabilitato</button>
    </div>
  </div>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-button-example',
  templateUrl: './button-example.component.html',
  styleUrls: ['./button-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class ButtonExampleComponent {
  color = 'primary';
  disabled = false;
  isOutlined = false;
  size = 'lg';
  isBlock = false;
}`],[`html`,`<h3>Varianti di colore con sfondo chiaro</h3>
<div class="bd-example">
  <div class="py-1">
    <p class="card-text example-section">
      <button itButton="primary" class="me-2">Primary</button>
      <button itButton="outline-primary" class="me-2">Primary outline</button>
      <button itButton="primary" disabled="true">Primary disabled</button>
    </p>
    <p class="card-text example-section">
      <button itButton="secondary" class="me-2">Secondary</button>
      <button itButton="outline-secondary" class="me-2">Secondary outline</button>
      <button itButton="secondary" disabled="true">Secondary disabled</button>
    </p>
  </div>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-button-example-color',
  templateUrl: './button-example-color.component.html',
  styleUrls: ['./button-example-color.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class ButtonExampleColorComponent {}`],[`html`,`<h3>Su sfondo scuro</h3>
<div class="bd-example">
  <div class="bg-dark ps-3 py-3">
    <p class="card-text example-section">
      <button itButton="primary" class="me-2">Primary</button>
      <button itButton="outline-primary" class="me-2">Primary outline</button>
      <button itButton="primary" disabled="true">Primary disabled</button>
    </p>
    <p class="card-text example-section">
      <button itButton="secondary" class="me-2">Secondary</button>
      <button itButton="outline-secondary" class="me-2">Secondary outline</button>
      <button itButton="secondary" disabled="true">Secondary disabled</button>
    </p>
  </div>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-button-example-color-dark',
  templateUrl: './button-example-color-dark.component.html',
  styleUrls: ['./button-example-color-dark.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class ButtonExampleColorDarkComponent {}`],[`html`,`<h3>Varianti di dimensione</h3>
<div class="bd-example">
  <p class="example-section">
    <button size="xs" itButton="primary" class="me-2">Button XS</button>

    <button size="xs" itButton="secondary">Button XS</button>
  </p>

  <p class="example-section">
    <button size="sm" itButton="primary" class="me-2">Button SM</button>

    <button size="sm" itButton="secondary">Button SM</button>
  </p>

  <p class="example-section">
    <button size="lg" itButton="primary" class="me-2">Button LG</button>

    <button size="lg" itButton="secondary">Button LG</button>
  </p>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-button-example-size',
  templateUrl: './button-example-size.component.html',
  styleUrls: ['./button-example-size.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class ButtonExampleSizeComponent {}`]],template:function(r,t){r&1&&im(0,`it-button-example-interactive`)(1,`it-source-display`,0)(2,`it-button-example-icon`)(3,`it-source-display`,1)(4,`it-button-example`)(5,`it-source-display`,2)(6,`it-button-example-color`)(7,`it-source-display`,3)(8,`it-button-example-color-dark`)(9,`it-source-display`,4)(10,`it-button-example-size`)(11,`it-source-display`,5)},dependencies:[q$1,G,X,H,q,J,K],styles:[`button[_ngcontent-%COMP%]{margin:4px 8px;width:200px}`],changeDetection:1})}}return i})();var me=[{path:``,component:(()=>{class i{constructor(){this.component=oe$1.directives.find(g=>g.name===`ItButtonDirective`)}static{this.ɵfac=function(r){return new(r||i)}}static{this.ɵcmp=Tw({type:i,selectors:[[`it-button-index`]],standalone:!1,decls:10,vars:2,consts:[[1,`bd-title`],[1,`bd-lead`],[3,`innerHTML`],[`label`,`Esempi`,`active`,`true`,1,`pt-3`],[`label`,`API`,1,`pt-3`],[3,`component`]],template:function(r,t){r&1&&(Zi(0,`h1`,0),hb(1,`Button`),nu(),Zi(2,`p`,1),hb(3,`Il componente per l'uso di bottoni`),nu(),im(4,`div`,2),Zi(5,`it-tab-container`)(6,`it-tab-item`,3),im(7,`it-button-examples`),nu(),Zi(8,`it-tab-item`,4),im(9,`it-api-parameters`,5),nu()()),r&2&&(MD(4),om(`innerHTML`,t.component.description,BI),MD(5),om(`component`,t.component))},dependencies:[$,Ile,Fx,Q],encapsulation:2,changeDetection:1})}}return i})()}];var Z=(()=>{class i{static{this.ɵfac=function(r){return new(r||i)}}static{this.ɵmod=Pg({type:i})}static{this.ɵinj=fa({imports:[ua.forChild(me),ua]})}}return i})();var Ae=(()=>{class i{static{this.ɵfac=function(r){return new(r||i)}}static{this.ɵmod=Pg({type:i})}static{this.ɵinj=fa({imports:[Zt,te,_Z,Z]})}}return i})();export{Ae as ButtonModule};