import{$ as MD,Br as wC,Cn as fa,Ct as TC,Fn as hb,Hn as im,Mn as gm,Mr as su,Qn as mb,Yr as yC,Zt as Zi,_t as Rm,cr as om,ct as Pg,g as DC,it as OT,jt as Tw,l as BI,lt as Pm,or as nu,pn as cu,qr as xT,sn as au,w as Fm,x as EC}from"./chunk-BXp14hLr.js";import{E as Zt}from"./chunk-CtdKxuHA.js";import{Jt as ua,Nt as tn,T as Qa,V as _Z,Wt as yf,f as Fx,gt as nP,h as Ile,kt as sP,wt as qc}from"./main-JCJIXXB4.js";import{i as te,n as oe,r as q,t as $$1}from"./chunk-4-cg1OfJ.js";function ae(a,_){a&1&&(Zi(0,`span`,4),hb(1,`Intestazione Menu`),nu())}function le(a,_){a&1&&im(0,`it-dropdown-item`,6)}function re(a,_){if(a&1&&(Zi(0,`it-dropdown-item`,7),hb(1),nu()),a&2){let c=_.$implicit;om(`href`,c.link)(`active`,c.active)(`disabled`,c.disabled)(`large`,c.large)(`iconName`,c.icon)(`iconPosition`,c.iconPosition),MD(),cu(` `,c.text,` `)}}var X=(()=>{class a{constructor(){this.label=`Click me`,this.isDark=!1,this.isFullWidth=!1,this.withHeading=!0,this.items=[{link:`https://www.google.com`,active:!1,disabled:!1,large:!0,icon:`star-outline`,iconPosition:`right`,text:`Item 1`},{link:`https://www.google.com`,active:!1,disabled:!0,large:!1,icon:`link`,iconPosition:`right`,text:`Item 2`},{link:`https://www.google.com`,active:!0,disabled:!1,large:!0,icon:void 0,iconPosition:`right`,text:`Item 3`}],this.openTime=``,this.closeTime=``}onOpenEvent(){this.openTime=new Date().toISOString()}onCloseEvent(){this.closeTime=new Date().toISOString()}static{this.ɵfac=function(u){return new(u||a)}}static{this.ɵcmp=Tw({type:a,selectors:[[`it-dropdown-example`]],standalone:!1,decls:51,vars:30,consts:[[1,`bd-example`],[1,`example-section`],[3,`showEvent`,`hideEvent`,`color`,`dark`,`direction`,`fullWidth`],[`button`,``],[`listHeading`,``],[`list`,``],[`divider`,`true`],[`externalLink`,`true`,3,`href`,`active`,`disabled`,`large`,`iconName`,`iconPosition`],[1,`row`],[1,`form-check`,`col-3`],[`label`,`Disposizione orizzontale`,3,`ngModelChange`,`ngModel`],[`label`,`Sfondo scuro`,3,`ngModelChange`,`ngModel`],[`label`,`Con intestazione`,3,`ngModelChange`,`ngModel`],[1,`form-check`,`col-2`],[`name`,`default`,`label`,`Default`,3,`ngModelChange`,`ngModel`,`value`],[`name`,`dropup`,`value`,`dropup`,`label`,`Dropup`,3,`ngModelChange`,`ngModel`],[`name`,`dropstart`,`value`,`dropstart`,`label`,`Dropstart`,3,`ngModelChange`,`ngModel`],[`name`,`dropend`,`value`,`dropend`,`label`,`Dropend`,3,`ngModelChange`,`ngModel`],[`name`,`clickMe`,`value`,`Click me`,`label`,`Click me`,3,`ngModelChange`,`ngModel`],[`name`,`check`,`value`,`Check`,`label`,`Check`,3,`ngModelChange`,`ngModel`],[`name`,`hello`,`value`,`Hello world!`,`label`,`Hello world!`,3,`ngModelChange`,`ngModel`],[1,`form-check`,`col-5`],[1,`form-check`,`col-4`],[`name`,`none`,`label`,`None`,3,`ngModelChange`,`ngModel`,`value`],[`name`,`primary`,`value`,`primary`,`label`,`Primary`,3,`ngModelChange`,`ngModel`],[`name`,`secondary`,`value`,`secondary`,`label`,`Secondary`,3,`ngModelChange`,`ngModel`],[`name`,`success`,`value`,`success`,`label`,`Success`,3,`ngModelChange`,`ngModel`],[`name`,`warning`,`value`,`warning`,`label`,`Warning`,3,`ngModelChange`,`ngModel`],[`name`,`danger`,`value`,`danger`,`label`,`Danger`,3,`ngModelChange`,`ngModel`],[`name`,`info`,`value`,`info`,`label`,`Info`,3,`ngModelChange`,`ngModel`],[`name`,`light`,`value`,`light`,`label`,`Light`,3,`ngModelChange`,`ngModel`],[`name`,`dark`,`value`,`dark`,`label`,`Dark`,3,`ngModelChange`,`ngModel`]],template:function(u,n){u&1&&(Zi(0,`h3`),hb(1,`Esempio Dropdown`),nu(),Zi(2,`div`,0)(3,`p`,1)(4,`it-dropdown`,2),gm(`showEvent`,function(){return n.onOpenEvent()})(`hideEvent`,function(){return n.onCloseEvent()}),Zi(5,`span`,3),hb(6),nu(),yC(7,ae,2,0,`span`,4),su(8,5),yC(9,le,1,0,`it-dropdown-item`,6),TC(10,re,2,7,`it-dropdown-item`,7,DC),au(),nu()(),Zi(12,`p`,1),hb(13),nu(),Zi(14,`p`,1),hb(15),nu(),Zi(16,`div`,8)(17,`div`,9)(18,`h5`),hb(19,`Opzioni`),nu(),Zi(20,`it-checkbox`,10),xT(),Fm(`ngModelChange`,function(e){return mb(n.isFullWidth,e)||(n.isFullWidth=e),e}),nu(),Zi(21,`it-checkbox`,11),xT(),Fm(`ngModelChange`,function(e){return mb(n.isDark,e)||(n.isDark=e),e}),nu(),Zi(22,`it-checkbox`,12),xT(),Fm(`ngModelChange`,function(e){return mb(n.withHeading,e)||(n.withHeading=e),e}),nu()(),Zi(23,`div`,13)(24,`h5`),hb(25,`Posizione menu`),nu(),Zi(26,`it-radio-button`,14),xT(),Fm(`ngModelChange`,function(e){return mb(n.menuPlacement,e)||(n.menuPlacement=e),e}),nu(),Zi(27,`it-radio-button`,15),xT(),Fm(`ngModelChange`,function(e){return mb(n.menuPlacement,e)||(n.menuPlacement=e),e}),nu(),Zi(28,`it-radio-button`,16),xT(),Fm(`ngModelChange`,function(e){return mb(n.menuPlacement,e)||(n.menuPlacement=e),e}),nu(),Zi(29,`it-radio-button`,17),xT(),Fm(`ngModelChange`,function(e){return mb(n.menuPlacement,e)||(n.menuPlacement=e),e}),nu()(),Zi(30,`div`,13)(31,`h5`),hb(32,`Testo`),nu(),Zi(33,`it-radio-button`,18),xT(),Fm(`ngModelChange`,function(e){return mb(n.label,e)||(n.label=e),e}),nu(),Zi(34,`it-radio-button`,19),xT(),Fm(`ngModelChange`,function(e){return mb(n.label,e)||(n.label=e),e}),nu(),Zi(35,`it-radio-button`,20),xT(),Fm(`ngModelChange`,function(e){return mb(n.label,e)||(n.label=e),e}),nu()(),Zi(36,`div`,21)(37,`h5`),hb(38,`Colorazione`),nu(),Zi(39,`div`,8)(40,`div`,22)(41,`it-radio-button`,23),xT(),Fm(`ngModelChange`,function(e){return mb(n.color,e)||(n.color=e),e}),nu(),Zi(42,`it-radio-button`,24),xT(),Fm(`ngModelChange`,function(e){return mb(n.color,e)||(n.color=e),e}),nu(),Zi(43,`it-radio-button`,25),xT(),Fm(`ngModelChange`,function(e){return mb(n.color,e)||(n.color=e),e}),nu(),Zi(44,`it-radio-button`,26),xT(),Fm(`ngModelChange`,function(e){return mb(n.color,e)||(n.color=e),e}),nu(),Zi(45,`it-radio-button`,27),xT(),Fm(`ngModelChange`,function(e){return mb(n.color,e)||(n.color=e),e}),nu()(),Zi(46,`div`,21)(47,`it-radio-button`,28),xT(),Fm(`ngModelChange`,function(e){return mb(n.color,e)||(n.color=e),e}),nu(),Zi(48,`it-radio-button`,29),xT(),Fm(`ngModelChange`,function(e){return mb(n.color,e)||(n.color=e),e}),nu(),Zi(49,`it-radio-button`,30),xT(),Fm(`ngModelChange`,function(e){return mb(n.color,e)||(n.color=e),e}),nu(),Zi(50,`it-radio-button`,31),xT(),Fm(`ngModelChange`,function(e){return mb(n.color,e)||(n.color=e),e}),nu()()()()()()),u&2&&(MD(4),om(`color`,n.color)(`dark`,n.isDark)(`direction`,n.menuPlacement)(`fullWidth`,n.isFullWidth),MD(2),Rm(n.label),MD(),EC(n.withHeading?7:-1),MD(2),EC(n.withHeading?9:-1),MD(),wC(n.items),MD(3),cu(`Open: `,n.openTime),MD(2),cu(`Close: `,n.closeTime),MD(5),Pm(`ngModel`,n.isFullWidth),OT(),MD(),Pm(`ngModel`,n.isDark),OT(),MD(),Pm(`ngModel`,n.withHeading),OT(),MD(4),Pm(`ngModel`,n.menuPlacement),om(`value`,void 0),OT(),MD(),Pm(`ngModel`,n.menuPlacement),OT(),MD(),Pm(`ngModel`,n.menuPlacement),OT(),MD(),Pm(`ngModel`,n.menuPlacement),OT(),MD(4),Pm(`ngModel`,n.label),OT(),MD(),Pm(`ngModel`,n.label),OT(),MD(),Pm(`ngModel`,n.label),OT(),MD(6),Pm(`ngModel`,n.color),om(`value`,void 0),OT(),MD(),Pm(`ngModel`,n.color),OT(),MD(),Pm(`ngModel`,n.color),OT(),MD(),Pm(`ngModel`,n.color),OT(),MD(),Pm(`ngModel`,n.color),OT(),MD(2),Pm(`ngModel`,n.color),OT(),MD(),Pm(`ngModel`,n.color),OT(),MD(),Pm(`ngModel`,n.color),OT(),MD(),Pm(`ngModel`,n.color),OT())},dependencies:[qc,Qa,nP,sP,tn,yf],encapsulation:2,changeDetection:1})}}return a})();function me(a,_){if(a&1&&(Zi(0,`it-dropdown-item`,5),hb(1),nu()),a&2){let c=_.$implicit;om(`href`,c.link)(`active`,c.active)(`disabled`,c.disabled)(`large`,c.large)(`iconName`,c.icon)(`iconPosition`,c.iconPosition),MD(),cu(` `,c.text,` `)}}var Y=(()=>{class a{constructor(){this.items=[{link:`https://www.google.com`,active:!1,disabled:!1,large:!0,icon:`star-outline`,iconPosition:`right`,text:`Item 1`},{link:`https://www.google.com`,active:!1,disabled:!0,large:!1,icon:`link`,iconPosition:`right`,text:`Item 2`},{link:`https://www.google.com`,active:!0,disabled:!1,large:!0,icon:void 0,iconPosition:`right`,text:`Item 3`}],this.openTime=``,this.closeTime=``}onOpenEvent(){this.openTime=new Date().toISOString()}onCloseEvent(){this.closeTime=new Date().toISOString()}static{this.ɵfac=function(u){return new(u||a)}}static{this.ɵcmp=Tw({type:a,selectors:[[`it-dropdown-link-example`]],standalone:!1,decls:14,vars:2,consts:[[1,`bd-example`],[1,`example-section`],[`mode`,`link`,3,`showEvent`,`hideEvent`],[`button`,``],[`list`,``],[`externalLink`,`true`,3,`href`,`active`,`disabled`,`large`,`iconName`,`iconPosition`]],template:function(u,n){u&1&&(Zi(0,`h3`),hb(1,`Dropdown link`),nu(),Zi(2,`div`,0)(3,`p`,1)(4,`it-dropdown`,2),gm(`showEvent`,function(){return n.onOpenEvent()})(`hideEvent`,function(){return n.onCloseEvent()}),Zi(5,`span`,3),hb(6,`Apri dropdown`),nu(),su(7,4),TC(8,me,2,7,`it-dropdown-item`,5,DC),au(),nu()(),Zi(10,`p`,1),hb(11),nu(),Zi(12,`p`,1),hb(13),nu()()),u&2&&(MD(8),wC(n.items),MD(3),cu(`Open: `,n.openTime),MD(2),cu(`Close: `,n.closeTime))},dependencies:[qc,Qa],encapsulation:2,changeDetection:1})}}return a})();function se(a,_){a&1&&(Zi(0,`span`,4),hb(1,`Intestazione Menu`),nu())}function ce(a,_){a&1&&im(0,`li`,6)}function ge(a,_){if(a&1&&(Zi(0,`li`,7),hb(1),nu()),a&2){let c=_.$implicit;om(`href`,c.link)(`active`,c.active)(`disabled`,c.disabled)(`large`,c.large)(`iconName`,c.icon)(`iconPosition`,c.iconPosition),MD(),cu(` `,c.text,` `)}}var Z=(()=>{class a{constructor(){this.label=`Click me`,this.isDark=!1,this.isFullWidth=!1,this.withHeading=!0,this.items=[{link:`https://www.google.com`,active:!1,disabled:!1,large:!0,icon:`star-outline`,iconPosition:`right`,text:`Item 1`},{link:`https://www.google.com`,active:!1,disabled:!0,large:!1,icon:`link`,iconPosition:`right`,text:`Item 2`},{link:`https://www.google.com`,active:!0,disabled:!1,large:!0,icon:void 0,iconPosition:`right`,text:`Item 3`}],this.openTime=``,this.closeTime=``}onOpenEvent(){this.openTime=new Date().toISOString()}onCloseEvent(){this.closeTime=new Date().toISOString()}static{this.ɵfac=function(u){return new(u||a)}}static{this.ɵcmp=Tw({type:a,selectors:[[`it-dropdown-host-attribute`]],standalone:!1,decls:53,vars:30,consts:[[1,`bd-example`],[1,`example-section`],[3,`showEvent`,`hideEvent`,`color`,`dark`,`direction`,`fullWidth`],[`button`,``],[`listHeading`,``],[`list`,``],[`itDropdownItem`,``,`divider`,`true`],[`itDropdownItem`,``,`externalLink`,`true`,3,`href`,`active`,`disabled`,`large`,`iconName`,`iconPosition`],[1,`row`],[1,`form-check`,`col-3`],[`label`,`Disposizione orizzontale`,3,`ngModelChange`,`ngModel`],[`label`,`Sfondo scuro`,3,`ngModelChange`,`ngModel`],[`label`,`Con intestazione`,3,`ngModelChange`,`ngModel`],[1,`form-check`,`col-2`],[`name`,`default`,`label`,`Default`,3,`ngModelChange`,`ngModel`,`value`],[`name`,`dropup`,`value`,`dropup`,`label`,`Dropup`,3,`ngModelChange`,`ngModel`],[`name`,`dropstart`,`value`,`dropstart`,`label`,`Dropstart`,3,`ngModelChange`,`ngModel`],[`name`,`dropend`,`value`,`dropend`,`label`,`Dropend`,3,`ngModelChange`,`ngModel`],[`name`,`clickMe`,`value`,`Click me`,`label`,`Click me`,3,`ngModelChange`,`ngModel`],[`name`,`check`,`value`,`Check`,`label`,`Check`,3,`ngModelChange`,`ngModel`],[`name`,`hello`,`value`,`Hello world!`,`label`,`Hello world!`,3,`ngModelChange`,`ngModel`],[1,`form-check`,`col-5`],[1,`form-check`,`col-4`],[`name`,`none`,`label`,`None`,3,`ngModelChange`,`ngModel`,`value`],[`name`,`primary`,`value`,`primary`,`label`,`Primary`,3,`ngModelChange`,`ngModel`],[`name`,`secondary`,`value`,`secondary`,`label`,`Secondary`,3,`ngModelChange`,`ngModel`],[`name`,`success`,`value`,`success`,`label`,`Success`,3,`ngModelChange`,`ngModel`],[`name`,`warning`,`value`,`warning`,`label`,`Warning`,3,`ngModelChange`,`ngModel`],[`name`,`danger`,`value`,`danger`,`label`,`Danger`,3,`ngModelChange`,`ngModel`],[`name`,`info`,`value`,`info`,`label`,`Info`,3,`ngModelChange`,`ngModel`],[`name`,`light`,`value`,`light`,`label`,`Light`,3,`ngModelChange`,`ngModel`],[`name`,`dark`,`value`,`dark`,`label`,`Dark`,3,`ngModelChange`,`ngModel`]],template:function(u,n){u&1&&(Zi(0,`h3`),hb(1,`Dropdown accessibile`),nu(),Zi(2,`p`),hb(3,`Dropdown che sfrutta host attribute`),nu(),Zi(4,`div`,0)(5,`p`,1)(6,`it-dropdown`,2),gm(`showEvent`,function(){return n.onOpenEvent()})(`hideEvent`,function(){return n.onCloseEvent()}),Zi(7,`span`,3),hb(8),nu(),yC(9,se,2,0,`span`,4),su(10,5),yC(11,ce,1,0,`li`,6),TC(12,ge,2,7,`li`,7,DC),au(),nu()(),Zi(14,`p`,1),hb(15),nu(),Zi(16,`p`,1),hb(17),nu(),Zi(18,`div`,8)(19,`div`,9)(20,`h5`),hb(21,`Opzioni`),nu(),Zi(22,`it-checkbox`,10),xT(),Fm(`ngModelChange`,function(e){return mb(n.isFullWidth,e)||(n.isFullWidth=e),e}),nu(),Zi(23,`it-checkbox`,11),xT(),Fm(`ngModelChange`,function(e){return mb(n.isDark,e)||(n.isDark=e),e}),nu(),Zi(24,`it-checkbox`,12),xT(),Fm(`ngModelChange`,function(e){return mb(n.withHeading,e)||(n.withHeading=e),e}),nu()(),Zi(25,`div`,13)(26,`h5`),hb(27,`Posizione menu`),nu(),Zi(28,`it-radio-button`,14),xT(),Fm(`ngModelChange`,function(e){return mb(n.menuPlacement,e)||(n.menuPlacement=e),e}),nu(),Zi(29,`it-radio-button`,15),xT(),Fm(`ngModelChange`,function(e){return mb(n.menuPlacement,e)||(n.menuPlacement=e),e}),nu(),Zi(30,`it-radio-button`,16),xT(),Fm(`ngModelChange`,function(e){return mb(n.menuPlacement,e)||(n.menuPlacement=e),e}),nu(),Zi(31,`it-radio-button`,17),xT(),Fm(`ngModelChange`,function(e){return mb(n.menuPlacement,e)||(n.menuPlacement=e),e}),nu()(),Zi(32,`div`,13)(33,`h5`),hb(34,`Testo`),nu(),Zi(35,`it-radio-button`,18),xT(),Fm(`ngModelChange`,function(e){return mb(n.label,e)||(n.label=e),e}),nu(),Zi(36,`it-radio-button`,19),xT(),Fm(`ngModelChange`,function(e){return mb(n.label,e)||(n.label=e),e}),nu(),Zi(37,`it-radio-button`,20),xT(),Fm(`ngModelChange`,function(e){return mb(n.label,e)||(n.label=e),e}),nu()(),Zi(38,`div`,21)(39,`h5`),hb(40,`Colorazione`),nu(),Zi(41,`div`,8)(42,`div`,22)(43,`it-radio-button`,23),xT(),Fm(`ngModelChange`,function(e){return mb(n.color,e)||(n.color=e),e}),nu(),Zi(44,`it-radio-button`,24),xT(),Fm(`ngModelChange`,function(e){return mb(n.color,e)||(n.color=e),e}),nu(),Zi(45,`it-radio-button`,25),xT(),Fm(`ngModelChange`,function(e){return mb(n.color,e)||(n.color=e),e}),nu(),Zi(46,`it-radio-button`,26),xT(),Fm(`ngModelChange`,function(e){return mb(n.color,e)||(n.color=e),e}),nu(),Zi(47,`it-radio-button`,27),xT(),Fm(`ngModelChange`,function(e){return mb(n.color,e)||(n.color=e),e}),nu()(),Zi(48,`div`,21)(49,`it-radio-button`,28),xT(),Fm(`ngModelChange`,function(e){return mb(n.color,e)||(n.color=e),e}),nu(),Zi(50,`it-radio-button`,29),xT(),Fm(`ngModelChange`,function(e){return mb(n.color,e)||(n.color=e),e}),nu(),Zi(51,`it-radio-button`,30),xT(),Fm(`ngModelChange`,function(e){return mb(n.color,e)||(n.color=e),e}),nu(),Zi(52,`it-radio-button`,31),xT(),Fm(`ngModelChange`,function(e){return mb(n.color,e)||(n.color=e),e}),nu()()()()()()),u&2&&(MD(6),om(`color`,n.color)(`dark`,n.isDark)(`direction`,n.menuPlacement)(`fullWidth`,n.isFullWidth),MD(2),Rm(n.label),MD(),EC(n.withHeading?9:-1),MD(2),EC(n.withHeading?11:-1),MD(),wC(n.items),MD(3),cu(`Open: `,n.openTime),MD(2),cu(`Close: `,n.closeTime),MD(5),Pm(`ngModel`,n.isFullWidth),OT(),MD(),Pm(`ngModel`,n.isDark),OT(),MD(),Pm(`ngModel`,n.withHeading),OT(),MD(4),Pm(`ngModel`,n.menuPlacement),om(`value`,void 0),OT(),MD(),Pm(`ngModel`,n.menuPlacement),OT(),MD(),Pm(`ngModel`,n.menuPlacement),OT(),MD(),Pm(`ngModel`,n.menuPlacement),OT(),MD(4),Pm(`ngModel`,n.label),OT(),MD(),Pm(`ngModel`,n.label),OT(),MD(),Pm(`ngModel`,n.label),OT(),MD(6),Pm(`ngModel`,n.color),om(`value`,void 0),OT(),MD(),Pm(`ngModel`,n.color),OT(),MD(),Pm(`ngModel`,n.color),OT(),MD(),Pm(`ngModel`,n.color),OT(),MD(),Pm(`ngModel`,n.color),OT(),MD(2),Pm(`ngModel`,n.color),OT(),MD(),Pm(`ngModel`,n.color),OT(),MD(),Pm(`ngModel`,n.color),OT(),MD(),Pm(`ngModel`,n.color),OT())},dependencies:[qc,Qa,nP,sP,tn,yf],encapsulation:2,changeDetection:1})}}return a})();var $=(()=>{class a{constructor(){}static{this.ɵfac=function(u){return new(u||a)}}static{this.ɵcmp=Tw({type:a,selectors:[[`it-dropdown-examples`]],standalone:!1,decls:6,vars:0,consts:[[`html`,`<h3>Esempio Dropdown</h3>
<div class="bd-example">
  <p class="example-section">
    <it-dropdown
      [color]="color"
      [dark]="isDark"
      [direction]="menuPlacement"
      [fullWidth]="isFullWidth"
      (showEvent)="onOpenEvent()"
      (hideEvent)="onCloseEvent()">
      <span button>/{/{ label /}/}</span>
      @if (withHeading) {
        <span listHeading>Intestazione Menu</span>
      }

      <ng-container list>
        @if (withHeading) {
          <it-dropdown-item divider="true"></it-dropdown-item>
        }

        @for (item of items; track item) {
          <it-dropdown-item
            [href]="item.link"
            externalLink="true"
            [active]="item.active"
            [disabled]="item.disabled"
            [large]="item.large"
            [iconName]="item.icon"
            [iconPosition]="item.iconPosition">
            /{/{ item.text /}/}
          </it-dropdown-item>
        }
      </ng-container>
    </it-dropdown>
  </p>

  <p class="example-section">Open: /{/{ openTime /}/}</p>

  <p class="example-section">Close: /{/{ closeTime /}/}</p>

  <div class="row">
    <div class="form-check col-3">
      <h5>Opzioni</h5>
      <it-checkbox [(ngModel)]="isFullWidth" label="Disposizione orizzontale"></it-checkbox>
      <it-checkbox [(ngModel)]="isDark" label="Sfondo scuro"></it-checkbox>
      <it-checkbox [(ngModel)]="withHeading" label="Con intestazione"></it-checkbox>
    </div>
    <div class="form-check col-2">
      <h5>Posizione menu</h5>
      <it-radio-button name="default" [(ngModel)]="menuPlacement" [value]="undefined" label="Default"></it-radio-button>
      <it-radio-button name="dropup" [(ngModel)]="menuPlacement" value="dropup" label="Dropup"></it-radio-button>
      <it-radio-button name="dropstart" [(ngModel)]="menuPlacement" value="dropstart" label="Dropstart"></it-radio-button>
      <it-radio-button name="dropend" [(ngModel)]="menuPlacement" value="dropend" label="Dropend"></it-radio-button>
    </div>

    <div class="form-check col-2">
      <h5>Testo</h5>
      <it-radio-button name="clickMe" [(ngModel)]="label" value="Click me" label="Click me"></it-radio-button>
      <it-radio-button name="check" [(ngModel)]="label" value="Check" label="Check"></it-radio-button>
      <it-radio-button name="hello" [(ngModel)]="label" value="Hello world!" label="Hello world!"></it-radio-button>
    </div>

    <div class="form-check col-5">
      <h5>Colorazione</h5>
      <div class="row">
        <div class="form-check col-4">
          <it-radio-button name="none" [(ngModel)]="color" [value]="undefined" label="None"></it-radio-button>
          <it-radio-button name="primary" [(ngModel)]="color" value="primary" label="Primary"></it-radio-button>
          <it-radio-button name="secondary" [(ngModel)]="color" value="secondary" label="Secondary"></it-radio-button>
          <it-radio-button name="success" [(ngModel)]="color" value="success" label="Success"></it-radio-button>
          <it-radio-button name="warning" [(ngModel)]="color" value="warning" label="Warning"></it-radio-button>
        </div>
        <div class="form-check col-5">
          <it-radio-button name="danger" [(ngModel)]="color" value="danger" label="Danger"></it-radio-button>
          <it-radio-button name="info" [(ngModel)]="color" value="info" label="Info"></it-radio-button>
          <it-radio-button name="light" [(ngModel)]="color" value="light" label="Light"></it-radio-button>
          <it-radio-button name="dark" [(ngModel)]="color" value="dark" label="Dark"></it-radio-button>
        </div>
      </div>
    </div>
  </div>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ButtonColor, DropdownDirection } from 'design-angular-kit/interfaces/core';

@Component({
  selector: 'it-dropdown-example',
  templateUrl: './dropdown-example.component.html',
  styleUrls: ['./dropdown-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class DropdownExampleComponent {
  color?: ButtonColor;
  label = 'Click me';
  isDark = false;
  isFullWidth = false;
  withHeading = true;

  menuPlacement?: DropdownDirection;

  items = [
    {
      link: 'https://www.google.com',
      active: false,
      disabled: false,
      large: true,
      icon: 'star-outline',
      iconPosition: 'right',
      text: 'Item 1',
    },
    {
      link: 'https://www.google.com',
      active: false,
      disabled: true,
      large: false,
      icon: 'link',
      iconPosition: 'right',
      text: 'Item 2',
    },
    {
      link: 'https://www.google.com',
      active: true,
      disabled: false,
      large: true,
      icon: undefined,
      iconPosition: 'right',
      text: 'Item 3',
    },
  ];

  openTime = '';
  closeTime = '';

  onOpenEvent() {
    this.openTime = new Date().toISOString();
  }

  onCloseEvent() {
    this.closeTime = new Date().toISOString();
  }
}`],[`html`,`<h3>Dropdown link</h3>
<div class="bd-example">
  <p class="example-section">
    <it-dropdown mode="link" (showEvent)="onOpenEvent()" (hideEvent)="onCloseEvent()">
      <span button>Apri dropdown</span>
      <ng-container list>
        @for (item of items; track item) {
          <it-dropdown-item
            [href]="item.link"
            externalLink="true"
            [active]="item.active"
            [disabled]="item.disabled"
            [large]="item.large"
            [iconName]="item.icon"
            [iconPosition]="item.iconPosition">
            /{/{ item.text /}/}
          </it-dropdown-item>
        }
      </ng-container>
    </it-dropdown>
  </p>

  <p class="example-section">Open: /{/{ openTime /}/}</p>

  <p class="example-section">Close: /{/{ closeTime /}/}</p>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-dropdown-link-example',
  templateUrl: './dropdown-link-example.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class DropdownLinkExampleComponent {
  items = [
    {
      link: 'https://www.google.com',
      active: false,
      disabled: false,
      large: true,
      icon: 'star-outline',
      iconPosition: 'right',
      text: 'Item 1',
    },
    {
      link: 'https://www.google.com',
      active: false,
      disabled: true,
      large: false,
      icon: 'link',
      iconPosition: 'right',
      text: 'Item 2',
    },
    {
      link: 'https://www.google.com',
      active: true,
      disabled: false,
      large: true,
      icon: undefined,
      iconPosition: 'right',
      text: 'Item 3',
    },
  ];

  openTime = '';
  closeTime = '';

  onOpenEvent() {
    this.openTime = new Date().toISOString();
  }

  onCloseEvent() {
    this.closeTime = new Date().toISOString();
  }
}`],[`html`,`<h3>Dropdown accessibile</h3>
<p>Dropdown che sfrutta host attribute</p>
<div class="bd-example">
  <p class="example-section">
    <it-dropdown
      [color]="color"
      [dark]="isDark"
      [direction]="menuPlacement"
      [fullWidth]="isFullWidth"
      (showEvent)="onOpenEvent()"
      (hideEvent)="onCloseEvent()">
      <span button>/{/{ label /}/}</span>
      @if (withHeading) {
        <span listHeading>Intestazione Menu</span>
      }

      <ng-container list>
        @if (withHeading) {
          <li itDropdownItem divider="true"></li>
        }

        @for (item of items; track item) {
          <li
            itDropdownItem
            [href]="item.link"
            externalLink="true"
            [active]="item.active"
            [disabled]="item.disabled"
            [large]="item.large"
            [iconName]="item.icon"
            [iconPosition]="item.iconPosition">
            /{/{ item.text /}/}
          </li>
        }
      </ng-container>
    </it-dropdown>
  </p>

  <p class="example-section">Open: /{/{ openTime /}/}</p>

  <p class="example-section">Close: /{/{ closeTime /}/}</p>

  <div class="row">
    <div class="form-check col-3">
      <h5>Opzioni</h5>
      <it-checkbox [(ngModel)]="isFullWidth" label="Disposizione orizzontale"></it-checkbox>
      <it-checkbox [(ngModel)]="isDark" label="Sfondo scuro"></it-checkbox>
      <it-checkbox [(ngModel)]="withHeading" label="Con intestazione"></it-checkbox>
    </div>
    <div class="form-check col-2">
      <h5>Posizione menu</h5>
      <it-radio-button name="default" [(ngModel)]="menuPlacement" [value]="undefined" label="Default"></it-radio-button>
      <it-radio-button name="dropup" [(ngModel)]="menuPlacement" value="dropup" label="Dropup"></it-radio-button>
      <it-radio-button name="dropstart" [(ngModel)]="menuPlacement" value="dropstart" label="Dropstart"></it-radio-button>
      <it-radio-button name="dropend" [(ngModel)]="menuPlacement" value="dropend" label="Dropend"></it-radio-button>
    </div>

    <div class="form-check col-2">
      <h5>Testo</h5>
      <it-radio-button name="clickMe" [(ngModel)]="label" value="Click me" label="Click me"></it-radio-button>
      <it-radio-button name="check" [(ngModel)]="label" value="Check" label="Check"></it-radio-button>
      <it-radio-button name="hello" [(ngModel)]="label" value="Hello world!" label="Hello world!"></it-radio-button>
    </div>

    <div class="form-check col-5">
      <h5>Colorazione</h5>
      <div class="row">
        <div class="form-check col-4">
          <it-radio-button name="none" [(ngModel)]="color" [value]="undefined" label="None"></it-radio-button>
          <it-radio-button name="primary" [(ngModel)]="color" value="primary" label="Primary"></it-radio-button>
          <it-radio-button name="secondary" [(ngModel)]="color" value="secondary" label="Secondary"></it-radio-button>
          <it-radio-button name="success" [(ngModel)]="color" value="success" label="Success"></it-radio-button>
          <it-radio-button name="warning" [(ngModel)]="color" value="warning" label="Warning"></it-radio-button>
        </div>
        <div class="form-check col-5">
          <it-radio-button name="danger" [(ngModel)]="color" value="danger" label="Danger"></it-radio-button>
          <it-radio-button name="info" [(ngModel)]="color" value="info" label="Info"></it-radio-button>
          <it-radio-button name="light" [(ngModel)]="color" value="light" label="Light"></it-radio-button>
          <it-radio-button name="dark" [(ngModel)]="color" value="dark" label="Dark"></it-radio-button>
        </div>
      </div>
    </div>
  </div>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ButtonColor, DropdownDirection } from 'design-angular-kit/interfaces/core';

@Component({
  selector: 'it-dropdown-host-attribute',
  templateUrl: './dropdown-host-attribute.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class DropdownHostAttributeComponent {
  color?: ButtonColor;
  label = 'Click me';
  isDark = false;
  isFullWidth = false;
  withHeading = true;

  menuPlacement?: DropdownDirection;

  items = [
    {
      link: 'https://www.google.com',
      active: false,
      disabled: false,
      large: true,
      icon: 'star-outline',
      iconPosition: 'right',
      text: 'Item 1',
    },
    {
      link: 'https://www.google.com',
      active: false,
      disabled: true,
      large: false,
      icon: 'link',
      iconPosition: 'right',
      text: 'Item 2',
    },
    {
      link: 'https://www.google.com',
      active: true,
      disabled: false,
      large: true,
      icon: undefined,
      iconPosition: 'right',
      text: 'Item 3',
    },
  ];

  openTime = '';
  closeTime = '';

  onOpenEvent() {
    this.openTime = new Date().toISOString();
  }

  onCloseEvent() {
    this.closeTime = new Date().toISOString();
  }
}`]],template:function(u,n){u&1&&im(0,`it-dropdown-example`)(1,`it-source-display`,0)(2,`it-dropdown-link-example`)(3,`it-source-display`,1)(4,`it-dropdown-host-attribute`)(5,`it-source-display`,2)},dependencies:[q,X,Y,Z],encapsulation:2,changeDetection:1})}}return a})();var we=[{path:``,component:(()=>{class a{constructor(){this.component=oe.components.find(c=>c.name===`ItDropdownComponent`),this.subcomponent=oe.components.find(c=>c.name===`ItDropdownItemComponent`)}static{this.ɵfac=function(u){return new(u||a)}}static{this.ɵcmp=Tw({type:a,selectors:[[`it-dropdown-index`]],standalone:!1,decls:15,vars:3,consts:[[1,`bd-title`],[1,`bd-lead`],[3,`innerHTML`],[`label`,`Esempi`,`active`,`true`,1,`pt-3`],[`label`,`API`,1,`pt-3`],[3,`component`]],template:function(u,n){u&1&&(Zi(0,`h1`,0),hb(1,`Dropdown`),nu(),Zi(2,`p`,1),hb(3,`Il componente Dropdown per menù a tendina contestuali`),nu(),im(4,`div`,2),Zi(5,`it-tab-container`)(6,`it-tab-item`,3),im(7,`it-dropdown-examples`),nu(),Zi(8,`it-tab-item`,4)(9,`h2`),hb(10,`Dropdown`),nu(),im(11,`it-api-parameters`,5),Zi(12,`h2`),hb(13,`Dropdown Item`),nu(),im(14,`it-api-parameters`,5),nu()()),u&2&&(MD(4),om(`innerHTML`,n.component.description,BI),MD(7),om(`component`,n.component),MD(3),om(`component`,n.subcomponent))},dependencies:[$$1,Ile,Fx,$],encapsulation:2,changeDetection:1})}}return a})()}];var ne=(()=>{class a{static{this.ɵfac=function(u){return new(u||a)}}static{this.ɵmod=Pg({type:a})}static{this.ɵinj=fa({imports:[ua.forChild(we),ua]})}}return a})();var Ne=(()=>{class a{static{this.ɵfac=function(u){return new(u||a)}}static{this.ɵmod=Pg({type:a})}static{this.ɵinj=fa({imports:[Zt,ne,te,_Z]})}}return a})();export{Ne as DropdownModule};