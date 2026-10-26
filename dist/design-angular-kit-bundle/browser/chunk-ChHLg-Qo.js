import{$ as MD,Br as wC,Cn as fa,Ct as TC,Dn as g,Fn as hb,Ft as VC,Hn as im,Kr as xC,Mr as su,O as Gd,Qn as mb,Zt as Zi,_r as qd,_t as Rm,cr as om,ct as Pg,g as DC,it as OT,jt as Tw,l as BI,lt as Pm,or as nu,pn as cu,qr as xT,sn as au,w as Fm}from"./chunk-BXp14hLr.js";import{E as Zt}from"./chunk-CtdKxuHA.js";import{G as bf,Jt as ua,N as Ti,Nt as tn,Ot as s3,V as _Z,Wt as yf,f as Fx,gt as nP,h as Ile,ht as mZ,kt as sP,rt as gZ,xt as pZ}from"./main-JCJIXXB4.js";import{i as te$1,n as oe,r as q,t as $}from"./chunk-4-cg1OfJ.js";function re(o,I){if(o&1){let d=xC();Zi(0,`it-radio-button`,15),xT(),Fm(`ngModelChange`,function(e){Gd(d);let g=VC();return mb(g.selectedColor,e)||(g.selectedColor=e),qd(e)}),nu()}if(o&2){let d=I.$implicit,i=I.$index,e=VC();om(`id`,`color-`+i),Pm(`ngModel`,e.selectedColor),om(`disabled`,e.disabled)(`value`,d)(`label`,d),OT()}}var ee=(()=>{class o{constructor(){this._fb=g(gZ),this.colors=[`Rosso`,`Blu`,`Giallo`],this.selectedColor=`Blu`,this.disabled=!1}ngOnInit(){this.genderFormGroup=this._fb.group({gender:[`MALE`]})}static{this.ɵfac=function(i){return new(i||o)}}static{this.ɵcmp=Tw({type:o,selectors:[[`it-radio-example`]],standalone:!1,decls:52,vars:7,consts:[[1,`bd-example`],[1,`example-section`],[`label`,`Disabilitato`,3,`ngModelChange`,`ngModel`],[3,`id`,`ngModel`,`disabled`,`value`,`label`],[1,`example-selected-value`],[`name`,`radio-link`,`value`,`bootstrap-italia`,3,`ngModelChange`,`ngModel`],[`label`,``],[`href`,`https://italia.github.io/bootstrap-italia/`],[`name`,`radio-link`,`value`,`radio-button`,3,`ngModelChange`,`ngModel`],[`href`,`https://italia.github.io/bootstrap-italia/docs/form/radio-button/`],[3,`formGroup`],[`formControlName`,`gender`,`value`,`MALE`,`label`,`Maschio`],[`formControlName`,`gender`,`value`,`FEMALE`,`label`,`Femmina`],[`formControlName`,`gender`,`value`,`OTHERS`,`label`,`Altro`],[`formControlName`,`gender`,`value`,`UNDEFINED`,`label`,`Preferisco non dirlo`],[3,`ngModelChange`,`id`,`ngModel`,`disabled`,`value`,`label`]],template:function(i,e){i&1&&(Zi(0,`h3`),hb(1,`Configurazione Radio button`),nu(),Zi(2,`div`,0)(3,`p`,1)(4,`it-checkbox`,2),xT(),Fm(`ngModelChange`,function(l){return mb(e.disabled,l)||(e.disabled=l),l}),nu()(),Zi(5,`h4`),hb(6,`Risultato`),nu(),Zi(7,`div`,1)(8,`fieldset`)(9,`legend`),hb(10,`Seleziona il tuo colore preferito`),nu(),TC(11,re,1,5,`it-radio-button`,3,DC),nu(),Zi(13,`div`,4),hb(14),nu()()(),Zi(15,`div`,0)(16,`h4`),hb(17,`Radio con link`),nu(),Zi(18,`fieldset`)(19,`legend`),hb(20,`Gruppo di radio`),nu(),Zi(21,`it-radio-button`,5),xT(),Fm(`ngModelChange`,function(l){return mb(e.link,l)||(e.link=l),l}),su(22,6),hb(23,`Label con `),Zi(24,`a`,7),hb(25,`link`),nu(),au(),nu(),Zi(26,`it-radio-button`,8),xT(),Fm(`ngModelChange`,function(l){return mb(e.link,l)||(e.link=l),l}),su(27,6),hb(28,`Altra label con `),Zi(29,`a`,9),hb(30,`link`),nu(),au(),nu()(),Zi(31,`div`,4),hb(32,` Link selezionato: `),Zi(33,`strong`),hb(34),nu()()(),Zi(35,`div`,0)(36,`h4`),hb(37,`Radio in Reactive Form`),nu(),Zi(38,`p`),hb(39,`Qual è il tuo sesso?`),nu(),Zi(40,`form`,10)(41,`fieldset`)(42,`legend`),hb(43,`Gruppo di radio`),nu(),Zi(44,`it-radio-button`,11),xT(),nu(),Zi(45,`it-radio-button`,12),xT(),nu(),Zi(46,`it-radio-button`,13),xT(),nu(),Zi(47,`it-radio-button`,14),xT(),nu()()(),Zi(48,`div`,4),hb(49,` Sesso selezionato: `),Zi(50,`strong`),hb(51),nu()()()),i&2&&(MD(4),Pm(`ngModel`,e.disabled),OT(),MD(7),wC(e.colors),MD(3),cu(`Colore selezionato: `,e.selectedColor),MD(7),Pm(`ngModel`,e.link),OT(),MD(5),Pm(`ngModel`,e.link),OT(),MD(8),Rm(e.link),MD(6),om(`formGroup`,e.genderFormGroup),MD(4),OT(),MD(),OT(),MD(),OT(),MD(),OT(),MD(4),Rm(e.genderFormGroup.value.gender))},dependencies:[mZ,tn,pZ,s3,bf,yf,nP,sP],encapsulation:2,changeDetection:1})}}return o})();var te=(()=>{class o{constructor(){this.selectedNation=`Italia`}static{this.ɵfac=function(i){return new(i||o)}}static{this.ɵcmp=Tw({type:o,selectors:[[`it-radio-checked-example`]],standalone:!1,decls:12,vars:4,consts:[[1,`bd-example`],[1,`example-section`],[`name`,`nation`,`value`,`USA`,`label`,`USA`,3,`ngModelChange`,`ngModel`],[`name`,`nation`,`value`,`Italia`,`label`,`Italia`,3,`ngModelChange`,`ngModel`],[`name`,`nation`,`value`,`Spagna`,`label`,`Spagna`,3,`ngModelChange`,`ngModel`],[1,`example-selected-value`]],template:function(i,e){i&1&&(Zi(0,`h3`),hb(1,`Radio checked`),nu(),Zi(2,`div`,0)(3,`div`,1)(4,`fieldset`)(5,`legend`),hb(6,`Seleziona la nazionalità`),nu(),Zi(7,`it-radio-button`,2),xT(),Fm(`ngModelChange`,function(l){return mb(e.selectedNation,l)||(e.selectedNation=l),l}),nu(),Zi(8,`it-radio-button`,3),xT(),Fm(`ngModelChange`,function(l){return mb(e.selectedNation,l)||(e.selectedNation=l),l}),nu(),Zi(9,`it-radio-button`,4),xT(),Fm(`ngModelChange`,function(l){return mb(e.selectedNation,l)||(e.selectedNation=l),l}),nu()()(),Zi(10,`div`,5),hb(11),nu()()),i&2&&(MD(7),Pm(`ngModel`,e.selectedNation),OT(),MD(),Pm(`ngModel`,e.selectedNation),OT(),MD(),Pm(`ngModel`,e.selectedNation),OT(),MD(2),cu(`Nazione selezionata: `,e.selectedNation))},dependencies:[tn,yf,sP],encapsulation:2,changeDetection:1})}}return o})();var ne=(()=>{class o{constructor(){}static{this.ɵfac=function(i){return new(i||o)}}static{this.ɵcmp=Tw({type:o,selectors:[[`it-radio-examples`]],standalone:!1,decls:4,vars:0,consts:[[`html`,`<h3>Configurazione Radio button</h3>
<div class="bd-example">
  <p class="example-section">
    <it-checkbox [(ngModel)]="disabled" label="Disabilitato"></it-checkbox>
  </p>

  <h4>Risultato</h4>

  <div class="example-section">
    <fieldset>
      <legend>Seleziona il tuo colore preferito</legend>
      @for (color of colors; track color; let i = $index) {
        <it-radio-button
          [id]="'color-' + i"
          [(ngModel)]="selectedColor"
          [disabled]="disabled"
          [value]="color"
          [label]="color"></it-radio-button>
      }
    </fieldset>
    <div class="example-selected-value">Colore selezionato: /{/{ selectedColor /}/}</div>
  </div>
</div>

<div class="bd-example">
  <h4>Radio con link</h4>
  <fieldset>
    <legend>Gruppo di radio</legend>
    <it-radio-button [(ngModel)]="link" name="radio-link" value="bootstrap-italia">
      <ng-container label>Label con <a href="https://italia.github.io/bootstrap-italia/">link</a></ng-container>
    </it-radio-button>
    <it-radio-button [(ngModel)]="link" name="radio-link" value="radio-button">
      <ng-container label
        >Altra label con <a href="https://italia.github.io/bootstrap-italia/docs/form/radio-button/">link</a></ng-container
      >
    </it-radio-button>
  </fieldset>

  <div class="example-selected-value">
    Link selezionato: <strong>/{/{ link /}/}</strong>
  </div>
</div>

<div class="bd-example">
  <h4>Radio in Reactive Form</h4>
  <p>Qual \xE8 il tuo sesso?</p>
  <form [formGroup]="genderFormGroup">
    <fieldset>
      <legend>Gruppo di radio</legend>
      <it-radio-button formControlName="gender" value="MALE" label="Maschio"></it-radio-button>
      <it-radio-button formControlName="gender" value="FEMALE" label="Femmina"></it-radio-button>
      <it-radio-button formControlName="gender" value="OTHERS" label="Altro"></it-radio-button>
      <it-radio-button formControlName="gender" value="UNDEFINED" label="Preferisco non dirlo"></it-radio-button>
    </fieldset>
  </form>

  <div class="example-selected-value">
    Sesso selezionato: <strong>/{/{ genderFormGroup.value.gender /}/}</strong>
  </div>
</div>`,`typescript`,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'it-radio-example',
  templateUrl: './radio-example.component.html',
  styleUrls: ['./radio-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class RadioExampleComponent implements OnInit {
  private _fb = inject(FormBuilder);

  colors = ['Rosso', 'Blu', 'Giallo'];

  selectedColor = 'Blu';

  disabled = false;

  link?: string;

  genderFormGroup!: FormGroup;

  ngOnInit(): void {
    this.genderFormGroup = this._fb.group({
      gender: ['MALE'],
    });
  }
}`],[`html`,`<h3>Radio checked</h3>
<div class="bd-example">
  <div class="example-section">
    <fieldset>
      <legend>Seleziona la nazionalit\xE0</legend>
      <it-radio-button name="nation" value="USA" label="USA" [(ngModel)]="selectedNation"></it-radio-button>

      <it-radio-button name="nation" value="Italia" label="Italia" [(ngModel)]="selectedNation"></it-radio-button>

      <it-radio-button name="nation" value="Spagna" label="Spagna" [(ngModel)]="selectedNation"></it-radio-button>
    </fieldset>
  </div>
  <div class="example-selected-value">Nazione selezionata: /{/{ selectedNation /}/}</div>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-radio-checked-example',
  templateUrl: './radio-checked-example.component.html',
  styleUrls: ['./radio-checked-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class RadioCheckedExampleComponent {
  selectedNation = 'Italia';
}`]],template:function(i,e){i&1&&im(0,`it-radio-example`)(1,`it-source-display`,0)(2,`it-radio-checked-example`)(3,`it-source-display`,1)},dependencies:[q,ee,te],encapsulation:2,changeDetection:1})}}return o})();var pe=[{path:``,component:(()=>{class o{constructor(){this.component=oe.components.find(d=>d.name===`ItRadioButtonComponent`)}static{this.ɵfac=function(i){return new(i||o)}}static{this.ɵcmp=Tw({type:o,selectors:[[`it-radio-index`]],standalone:!1,decls:10,vars:2,consts:[[1,`bd-title`],[1,`bd-lead`],[3,`innerHTML`],[`label`,`Esempi`,`active`,`true`,1,`pt-3`],[`label`,`API`,1,`pt-3`],[3,`component`]],template:function(i,e){i&1&&(Zi(0,`h1`,0),hb(1,`Radio Button`),nu(),Zi(2,`p`,1),hb(3,`Il componente Radio Button utilizzabile in un form`),nu(),im(4,`div`,2),Zi(5,`it-tab-container`)(6,`it-tab-item`,3),im(7,`it-radio-examples`),nu(),Zi(8,`it-tab-item`,4),im(9,`it-api-parameters`,5),nu()()),i&2&&(MD(4),om(`innerHTML`,e.component.description,BI),MD(5),om(`component`,e.component))},dependencies:[$,Ile,Fx,ne],encapsulation:2,changeDetection:1})}}return o})()}];var ie=(()=>{class o{static{this.ɵfac=function(i){return new(i||o)}}static{this.ɵmod=Pg({type:o})}static{this.ɵinj=fa({imports:[ua.forChild(pe),ua]})}}return o})();var Te=(()=>{class o{static{this.ɵfac=function(i){return new(i||o)}}static{this.ɵmod=Pg({type:o})}static{this.ɵinj=fa({imports:[Zt,Ti,_Z,te$1,ie]})}}return o})();export{Te as RadioModule};