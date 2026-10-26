import{$ as MD,Cn as fa,Dn as g,Fn as hb,Hn as im,Zt as Zi,cr as om,ct as Pg,it as OT,jt as Tw,or as nu,qr as xT}from"./chunk-BXp14hLr.js";import{E as Zt}from"./chunk-CtdKxuHA.js";import{B as Za,G as bf,Jt as ua,N as Ti,Nt as tn,Ot as s3,Tt as rP,V as _Z,Wt as yf,a as Ax,f as Fx,h as Ile,ht as mZ,rt as gZ,xt as pZ}from"./main-JCJIXXB4.js";import{i as te,n as oe,r as q,t as $}from"./chunk-4-cg1OfJ.js";var L=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-password-input-example`]],standalone:!1,decls:4,vars:4,consts:[[1,`bd-example`],[`label`,`Password con label`,`validationMode`,`false`,3,`ngModel`],[`label`,`Password con label e testo di aiuto`,`validationMode`,`false`,3,`description`,`ngModel`],[`label`,`Password con strength meter`,`showStrengthMeter`,`true`,`validationMode`,`false`,3,`ngModel`]],template:function(t,m){t&1&&(Zi(0,`div`,0)(1,`it-password-input`,1),xT(),nu(),Zi(2,`it-password-input`,2),xT(),nu(),Zi(3,`it-password-input`,3),xT(),nu()()),t&2&&(MD(),om(`ngModel`,m.password),OT(),MD(),om(`description`,!0)(`ngModel`,m.passwordText),OT(),MD(),om(`ngModel`,m.passwordStrengthMeter),OT())},dependencies:[rP,tn,yf],encapsulation:2,changeDetection:1})}}return e})();var U=(()=>{class e{constructor(){this.formBuilder=g(gZ),this.formGroup=this.formBuilder.group({password:[null],confirmPassword:[null]},{validators:r=>Za.passwordMatch(r)})}static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-password-input-confirm-example`]],standalone:!1,decls:6,vars:2,consts:[[1,`bd-example`],[3,`formGroup`],[`label`,`Password`,`formControlName`,`password`],[`label`,`Conferma password`,`formControlName`,`confirmPassword`,3,`confirmPasswordField`]],template:function(t,m){t&1&&(Zi(0,`h3`),hb(1,`Conferma password`),nu(),Zi(2,`div`,0)(3,`form`,1)(4,`it-password-input`,2),xT(),nu(),Zi(5,`it-password-input`,3),xT(),nu()()()),t&2&&(MD(3),om(`formGroup`,m.formGroup),MD(),OT(),MD(),om(`confirmPasswordField`,!0),OT())},dependencies:[rP,mZ,tn,pZ,s3,bf],encapsulation:2,changeDetection:1})}}return e})();var A=(()=>{class e{constructor(){this.formBuilder=g(gZ),this.formGroup=this.formBuilder.group({password:[null],passwordCustom:[null],passwordStrengthMeter:[null]})}static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-password-input-validation-example`]],standalone:!1,decls:7,vars:7,consts:[[1,`bd-example`],[3,`formGroup`],[`label`,`Validazione default`,`formControlName`,`password`],[`label`,`Validazione custom`,`description`,`Inserisci almeno 8 caratteri e una lettera maiuscola`,`formControlName`,`passwordCustom`,3,`minLength`,`required`,`useNumber`,`useCapitalCase`,`useSmallCase`,`useSpecialCharacters`],[`label`,`Validazione default con strength meter`,`showStrengthMeter`,`true`,`formControlName`,`passwordStrengthMeter`]],template:function(t,m){t&1&&(Zi(0,`h3`),hb(1,`Validazione`),nu(),Zi(2,`div`,0)(3,`form`,1)(4,`it-password-input`,2),xT(),nu(),Zi(5,`it-password-input`,3),xT(),nu(),Zi(6,`it-password-input`,4),xT(),nu()()()),t&2&&(MD(3),om(`formGroup`,m.formGroup),MD(),OT(),MD(),om(`minLength`,8)(`required`,!1)(`useNumber`,!1)(`useCapitalCase`,!0)(`useSmallCase`,!0)(`useSpecialCharacters`,!1),OT(),MD(),OT())},dependencies:[rP,mZ,tn,pZ,Ax,s3,bf],encapsulation:2,changeDetection:1})}}return e})();var k=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-password-input-examples`]],standalone:!1,decls:6,vars:0,consts:[[`html`,`<div class="bd-example">
  <it-password-input label="Password con label" validationMode="false" [ngModel]="password"></it-password-input>

  <it-password-input
    label="Password con label e testo di aiuto"
    [description]="true"
    validationMode="false"
    [ngModel]="passwordText"></it-password-input>

  <it-password-input
    label="Password con strength meter"
    showStrengthMeter="true"
    validationMode="false"
    [ngModel]="passwordStrengthMeter"></it-password-input>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-password-input-example',
  templateUrl: './password-input-example.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class PasswordInputExampleComponent {
  password?: string;
  passwordText?: string;
  passwordStrengthMeter?: string;
}`],[`html`,`<h3>Validazione</h3>
<div class="bd-example">
  <form [formGroup]="formGroup">
    <it-password-input label="Validazione default" formControlName="password"></it-password-input>

    <it-password-input
      label="Validazione custom"
      [minLength]="8"
      [required]="false"
      [useNumber]="false"
      [useCapitalCase]="true"
      [useSmallCase]="true"
      [useSpecialCharacters]="false"
      description="Inserisci almeno 8 caratteri e una lettera maiuscola"
      formControlName="passwordCustom"></it-password-input>

    <it-password-input
      label="Validazione default con strength meter"
      showStrengthMeter="true"
      formControlName="passwordStrengthMeter"></it-password-input>
  </form>
</div>`,`typescript`,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'it-password-input-validation-example',
  templateUrl: './password-input-validation-example.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class PasswordInputValidationExampleComponent {
  private readonly formBuilder = inject(FormBuilder);

  formGroup: FormGroup;

  constructor() {
    this.formGroup = this.formBuilder.group({
      password: [null],
      passwordCustom: [null],
      passwordStrengthMeter: [null],
    });
  }
}`],[`html`,`<h3>Conferma password</h3>
<div class="bd-example">
  <form [formGroup]="formGroup">
    <it-password-input label="Password" formControlName="password"></it-password-input>

    <it-password-input label="Conferma password" [confirmPasswordField]="true" formControlName="confirmPassword"></it-password-input>
  </form>
</div>`,`typescript`,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ItValidators } from 'design-angular-kit/validators/it-validators';

@Component({
  selector: 'it-password-input-confirm-example',
  templateUrl: './password-input-confirm-example.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class PasswordInputConfirmExampleComponent {
  private readonly formBuilder = inject(FormBuilder);

  formGroup: FormGroup;

  constructor() {
    this.formGroup = this.formBuilder.group(
      {
        password: [null],
        confirmPassword: [null],
      },
      {
        validators: control => ItValidators.passwordMatch(control),
      }
    );
  }
}`]],template:function(t,m){t&1&&im(0,`it-password-input-example`)(1,`it-source-display`,0)(2,`it-password-input-validation-example`)(3,`it-source-display`,1)(4,`it-password-input-confirm-example`)(5,`it-source-display`,2)},dependencies:[q,L,U,A],encapsulation:2,changeDetection:1})}}return e})();var X=[{path:``,component:(()=>{class e{constructor(){this.component=oe.components.find(r=>r.name===`ItPasswordInputComponent`)}static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-password-input-index`]],standalone:!1,decls:11,vars:1,consts:[[1,`bd-title`],[1,`bd-lead`],[`label`,`Esempi`,`active`,`true`,1,`pt-3`],[`label`,`API`,1,`pt-3`],[3,`component`]],template:function(t,m){t&1&&(Zi(0,`h1`,0),hb(1,`Input password`),nu(),Zi(2,`p`,1),hb(3,` Per rendere pi\xF9 semplice l\u2019inserimento della password, l\u2019elemento \xE8 stato dotato di un visualizzatore dei caratteri digitati.
`),nu(),Zi(4,`it-tab-container`)(5,`it-tab-item`,2),im(6,`it-password-input-examples`),nu(),Zi(7,`it-tab-item`,3)(8,`h3`),hb(9,`PasswordInputComponent`),nu(),im(10,`it-api-parameters`,4),nu()()),t&2&&(MD(10),om(`component`,m.component))},dependencies:[$,Ile,Fx,k],encapsulation:2,changeDetection:1})}}return e})()}];var J=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵmod=Pg({type:e})}static{this.ɵinj=fa({imports:[ua.forChild(X),ua]})}}return e})();var De=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵmod=Pg({type:e})}static{this.ɵinj=fa({imports:[Zt,te,J,Ti,_Z]})}}return e})();export{De as PasswordInputModule};