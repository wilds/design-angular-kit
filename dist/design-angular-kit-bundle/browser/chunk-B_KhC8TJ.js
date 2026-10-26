import{$ as MD,Cn as fa,Dn as g,Fn as hb,Ft as VC,Hn as im,Mn as gm,Qn as mb,Yr as yC,Zt as Zi,cr as om,ct as Pg,it as OT,jt as Tw,l as BI,lt as Pm,or as nu,pn as cu,qr as xT,w as Fm,x as EC}from"./chunk-BXp14hLr.js";import{E as Zt}from"./chunk-CtdKxuHA.js";import{Bt as xo,G as bf,Jt as ua,N as Ti,Nt as tn,Ot as s3,V as _Z,Wt as yf,Z as dr,f as Fx,h as Ile,ht as mZ,q as cP,rt as gZ,x as Nx,xt as pZ,y as Lx}from"./main-JCJIXXB4.js";import{i as te$1,n as oe,r as q,t as $$1}from"./chunk-4-cg1OfJ.js";var Y=(()=>{class e{constructor(){this.selectOptions=[{selected:!0,value:``,text:`Scegli un'opzione`},{value:1,text:`Opzione 1`},{value:2,text:`Opzione 2`},{value:3,text:`Opzione 3`}]}static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-select-disabled-example`]],standalone:!1,decls:5,vars:1,consts:[[1,`bd-example`],[1,`example-section`],[`id`,`disabled-select`,`label`,`Etichetta`,`disabled`,`true`,3,`options`]],template:function(t,n){t&1&&(Zi(0,`h3`),hb(1,`Select disabilitata`),nu(),Zi(2,`div`,0)(3,`p`,1),im(4,`it-select`,2),nu()()),t&2&&(MD(4),om(`options`,n.selectOptions))},dependencies:[cP],encapsulation:2,changeDetection:1})}}return e})();var $=(()=>{class e{constructor(){this.selectedValue=``,this.selectOptions=[{selected:!0,value:``,text:`Scegli un'opzione`}],this.selectGroups=[{label:`Gruppo 1`,options:[{value:1,text:`Opzione 1`},{value:2,text:`Opzione 2`}]},{label:`Gruppo 2`,options:[{value:3,text:`Opzione 3`},{value:4,text:`Opzione 4`}]}]}static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-select-group-example`]],standalone:!1,decls:10,vars:4,consts:[[1,`bd-example`],[1,`example-section`],[`id`,`group-select`,`label`,`Etichetta`,3,`ngModelChange`,`ngModel`,`groups`,`options`],[1,`example-selected-value`]],template:function(t,n){t&1&&(Zi(0,`h3`),hb(1,`Select con gruppi`),nu(),Zi(2,`div`,0)(3,`p`,1)(4,`it-select`,2),xT(),Fm(`ngModelChange`,function(d){return mb(n.selectedValue,d)||(n.selectedValue=d),d}),nu()(),Zi(5,`h4`),hb(6,`Risultato`),nu(),Zi(7,`div`,1)(8,`div`,3),hb(9),nu()()()),t&2&&(MD(4),Pm(`ngModel`,n.selectedValue),om(`groups`,n.selectGroups)(`options`,n.selectOptions),OT(),MD(5),cu(`Valore selezionato: `,n.selectedValue))},dependencies:[tn,yf,cP],encapsulation:2,changeDetection:1})}}return e})();var ee=(()=>{class e{constructor(){this.selectedValue=0,this.selectOptions=[{value:2,text:`Opzione 2`},{value:3,text:`Opzione 3`}]}static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-select-example`]],standalone:!1,decls:12,vars:4,consts:[[1,`bd-example`],[1,`example-section`],[`id`,`default-select`,`label`,`Etichetta`,`defaultOption`,`Seleziona un elemento`,3,`ngModelChange`,`ngModel`,`options`],[3,`value`],[1,`example-selected-value`]],template:function(t,n){t&1&&(Zi(0,`h3`),hb(1,`Select`),nu(),Zi(2,`div`,0)(3,`p`,1)(4,`it-select`,2),xT(),Fm(`ngModelChange`,function(d){return mb(n.selectedValue,d)||(n.selectedValue=d),d}),Zi(5,`option`,3),hb(6,`Opzione 1`),nu()()(),Zi(7,`h4`),hb(8,`Risultato`),nu(),Zi(9,`div`,1)(10,`div`,4),hb(11),nu()()()),t&2&&(MD(4),Pm(`ngModel`,n.selectedValue),om(`options`,n.selectOptions),OT(),MD(),om(`value`,1),MD(6),cu(`Valore selezionato: `,n.selectedValue))},dependencies:[Lx,Nx,tn,yf,cP],encapsulation:2,changeDetection:1})}}return e})();function se(e,de){if(e&1&&(Zi(0,`div`,6),hb(1),nu()),e&2){let l=VC();MD(),cu("Salvato `",l.savedValue,"`")}}var te=(()=>{class e{constructor(){this._fb=g(gZ),this.options=[{value:null,text:`Seleziona un elemento`,selected:!0}],this.value=``,this.savedValue=void 0,this.myForm=this._fb.group({select:[null,dr.required]}),Array.from(Array(10).keys()).forEach(l=>{this.options.push({value:l,text:`Opzione ${l.toString()}`})})}save(l){this.savedValue=l.value.select}markAllAsTouched(){this.myForm.markAllAsTouched()}static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-select-formgroup-example`]],standalone:!1,decls:11,vars:4,consts:[[1,`bd-example`],[3,`formGroup`],[`formControlName`,`select`,3,`options`],[1,`d-flex`,`justify-content-between`],[`itButton`,`primary`,3,`click`,`disabled`],[`itButton`,`secondary`,`type`,`button`,3,`click`],[1,`mt-3`]],template:function(t,n){t&1&&(Zi(0,`h3`),hb(1,`Interazione con Select dotato di validazione Model Driven`),nu(),Zi(2,`div`,0)(3,`form`,1)(4,`it-select`,2),xT(),nu(),Zi(5,`div`,3)(6,`button`,4),gm(`click`,function(){return n.save(n.myForm)}),hb(7,`Salva`),nu(),Zi(8,`button`,5),gm(`click`,function(){return n.markAllAsTouched()}),hb(9,`Valida`),nu()(),yC(10,se,2,1,`div`,6),nu()()),t&2&&(MD(3),om(`formGroup`,n.myForm),MD(),om(`options`,n.options),OT(),MD(2),om(`disabled`,!n.myForm.valid),MD(4),EC(n.savedValue?10:-1))},dependencies:[mZ,tn,pZ,s3,bf,xo,cP],encapsulation:2,changeDetection:1})}}return e})();var ne=(()=>{class e{constructor(){}static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-select-examples`]],standalone:!1,decls:8,vars:0,consts:[[`html`,`<h3>Select</h3>
<div class="bd-example">
  <p class="example-section">
    <it-select
      id="default-select"
      label="Etichetta"
      [(ngModel)]="selectedValue"
      [options]="selectOptions"
      defaultOption="Seleziona un elemento">
      <!--Puoi inserire gli option da html o dall'attributo options-->
      <option [value]="1">Opzione 1</option>
    </it-select>
  </p>

  <h4>Risultato</h4>

  <div class="example-section">
    <div class="example-selected-value">Valore selezionato: /{/{ selectedValue /}/}</div>
  </div>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SelectControlOption } from 'projects/design-angular-kit/src/public_api';

@Component({
  changeDetection: ChangeDetectionStrategy.Eager,
  selector: 'it-select-example',
  templateUrl: './select-example.component.html',
  styleUrls: ['./select-example.component.scss'],
  standalone: false,
})
export class SelectExampleComponent {
  selectedValue: number = 0;
  selectOptions: Array<SelectControlOption> = [
    {
      value: 2,
      text: 'Opzione 2',
    },
    {
      value: 3,
      text: 'Opzione 3',
    },
  ];
}`],[`html`,`<h3>Select disabilitata</h3>
<div class="bd-example">
  <p class="example-section">
    <it-select id="disabled-select" label="Etichetta" disabled="true" [options]="selectOptions"> </it-select>
  </p>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SelectControlOption } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-select-disabled-example',
  templateUrl: './select-disabled-example.component.html',
  styleUrls: ['./select-disabled-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class SelectDisabledExampleComponent {
  selectOptions: Array<SelectControlOption> = [
    {
      selected: true,
      value: '',
      text: "Scegli un'opzione",
    },
    {
      value: 1,
      text: 'Opzione 1',
    },
    {
      value: 2,
      text: 'Opzione 2',
    },
    {
      value: 3,
      text: 'Opzione 3',
    },
  ];

  constructor() {}
}`],[`html`,`<h3>Select con gruppi</h3>
<div class="bd-example">
  <p class="example-section">
    <it-select id="group-select" label="Etichetta" [(ngModel)]="selectedValue" [groups]="selectGroups" [options]="selectOptions">
    </it-select>
  </p>

  <h4>Risultato</h4>

  <div class="example-section">
    <div class="example-selected-value">Valore selezionato: /{/{ selectedValue /}/}</div>
  </div>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SelectControlGroup, SelectControlOption } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-select-group-example',
  templateUrl: './select-group-example.component.html',
  styleUrls: ['./select-group-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class SelectGroupExampleComponent {
  selectedValue: number | string = '';
  selectOptions: Array<SelectControlOption> = [
    {
      selected: true,
      value: '',
      text: "Scegli un'opzione",
    },
  ];
  selectGroups: Array<SelectControlGroup> = [
    {
      label: 'Gruppo 1',
      options: [
        {
          value: 1,
          text: 'Opzione 1',
        },
        {
          value: 2,
          text: 'Opzione 2',
        },
      ],
    },
    {
      label: 'Gruppo 2',
      options: [
        {
          value: 3,
          text: 'Opzione 3',
        },
        {
          value: 4,
          text: 'Opzione 4',
        },
      ],
    },
  ];

  constructor() {}
}`],[`html`,`<h3>Interazione con Select dotato di validazione Model Driven</h3>

<div class="bd-example">
  <form [formGroup]="myForm">
    <it-select [options]="options" formControlName="select"></it-select>

    <div class="d-flex justify-content-between">
      <button itButton="primary" [disabled]="!myForm.valid" (click)="save(myForm)">Salva</button>
      <button itButton="secondary" type="button" (click)="markAllAsTouched()">Valida</button>
    </div>

    @if (savedValue) {
      <div class="mt-3">Salvato \`/{/{ savedValue /}/}\`</div>
    }
  </form>
</div>`,`typescript`,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { SelectControlOption } from 'design-angular-kit/interfaces/form';

@Component({
  selector: 'it-select-formgroup-example',
  templateUrl: './select-formgroup-example.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class SelectFormgroupExampleComponent {
  private _fb = inject(FormBuilder);

  myForm: FormGroup;

  options: Array<SelectControlOption> = [{ value: null, text: 'Seleziona un elemento', selected: true }];

  constructor() {
    this.myForm = this._fb.group({
      select: [null, Validators.required],
    });

    Array.from(Array(10).keys()).forEach(number => {
      this.options.push({ value: number, text: \`Opzione \${number.toString()}\` });
    });
  }

  value = '';
  savedValue = undefined;

  save(form: UntypedFormGroup) {
    this.savedValue = form.value.select;
  }

  markAllAsTouched() {
    this.myForm.markAllAsTouched();
  }
}`]],template:function(t,n){t&1&&im(0,`it-select-example`)(1,`it-source-display`,0)(2,`it-select-disabled-example`)(3,`it-source-display`,1)(4,`it-select-group-example`)(5,`it-source-display`,2)(6,`it-select-formgroup-example`)(7,`it-source-display`,3)},dependencies:[q,Y,$,ee,te],encapsulation:2,changeDetection:1})}}return e})();var me=[{path:``,component:(()=>{class e{constructor(){this.component=oe.components.find(l=>l.name===`ItSelectComponent`)}static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-select-index`]],standalone:!1,decls:10,vars:2,consts:[[1,`bd-title`],[1,`bd-lead`],[3,`innerHTML`],[`label`,`Esempi`,`active`,`true`,1,`pt-3`],[`label`,`API`,1,`pt-3`],[3,`component`]],template:function(t,n){t&1&&(Zi(0,`h1`,0),hb(1,`Select`),nu(),Zi(2,`p`,1),hb(3,`Il classico “menu a tendina”`),nu(),im(4,`div`,2),Zi(5,`it-tab-container`)(6,`it-tab-item`,3),im(7,`it-select-examples`),nu(),Zi(8,`it-tab-item`,4),im(9,`it-api-parameters`,5),nu()()),t&2&&(MD(4),om(`innerHTML`,n.component.description,BI),MD(5),om(`component`,n.component))},dependencies:[$$1,Ile,Fx,ne],encapsulation:2,changeDetection:1})}}return e})()}];var ie=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵmod=Pg({type:e})}static{this.ɵinj=fa({imports:[ua.forChild(me),ua]})}}return e})();var Pe=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵmod=Pg({type:e})}static{this.ɵinj=fa({imports:[Zt,Ti,_Z,te$1,ie]})}}return e})();export{Pe as SelectModule};