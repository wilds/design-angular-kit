import{$ as MD,Cn as fa,Dn as g,Fn as hb,Ft as VC,Hn as im,Kr as xC,Mn as gm,Mr as su,O as Gd,Qn as mb,Yr as yC,Zt as Zi,_r as qd,cr as om,ct as Pg,gr as qC,it as OT,jt as Tw,l as BI,lt as Pm,or as nu,pn as cu,qr as xT,sn as au,w as Fm,x as EC}from"./chunk-BXp14hLr.js";import{E as Zt}from"./chunk-CtdKxuHA.js";import{B as Za,Bt as xo,Ct as qM,G as bf,H as _t,Jt as ua,N as Ti,Nt as tn,Ot as s3,P as UM,Rt as x0,Tt as rP,V as _Z,W as bP,Wt as yf,Z as dr,a as Ax,f as Fx,gt as nP,h as Ile,ht as mZ,jt as t3,kt as sP,rt as gZ,t as $M,xt as pZ}from"./main-JCJIXXB4.js";import{i as te,n as oe,r as q,t as $}from"./chunk-4-cg1OfJ.js";function Se(i,M){if(i&1){let l=xC();Zi(0,`it-input`,22),xT(),Fm(`ngModelChange`,function(e){Gd(l);let p=VC();return mb(p.value,e)||(p.value=e),qd(e)}),nu()}if(i&2){let l=VC();om(`label`,l.label)(`placeholder`,l.placeholder)(`disabled`,l.disabled)(`readonly`,l.readOnly)(`type`,l.type!==`password`?l.type:`text`),Pm(`ngModel`,l.value),om(`description`,l.note),OT()}}function we(i,M){if(i&1){let l=xC();Zi(0,`it-password-input`,23),xT(),Fm(`ngModelChange`,function(e){Gd(l);let p=VC();return mb(p.value,e)||(p.value=e),qd(e)}),nu()}if(i&2){let l=VC();om(`label`,l.label)(`placeholder`,l.placeholder)(`disabled`,l.disabled),Pm(`ngModel`,l.value),om(`validationMode`,!1),OT()}}var ve=(()=>{class i{constructor(){this.i=0,this.readOnly=!1,this.disabled=!1,this.type=`text`,this.icon=`pencil`,this.value=`myNgModel`,this.hasPlaceholder=!0,this.hasLabel=!0,this.hasNote=!1}get placeholder(){return this.hasPlaceholder?`Testo di esempio`:``}get label(){return this.hasLabel?`Label dell'input`:``}get note(){return this.hasNote?`non condivideremo mai i tuoi dati`:``}static{this.ɵfac=function(r){return new(r||i)}}static{this.ɵcmp=Tw({type:i,selectors:[[`it-form-input-example`]],standalone:!1,decls:36,vars:16,consts:[[1,`bd-example`],[1,`row`],[1,`col-8`],[3,`label`,`placeholder`,`disabled`,`readonly`,`type`,`ngModel`,`description`],[`showStrengthMeter`,`true`,3,`label`,`placeholder`,`disabled`,`ngModel`,`validationMode`],[1,`form-check`,`col-6`],[1,`col-4`],[`label`,`Disabled`,3,`ngModelChange`,`ngModel`],[`label`,`Readonly`,3,`ngModelChange`,`ngModel`],[`label`,`Label`,3,`ngModelChange`,`ngModel`],[1,`col-auto`],[`label`,`Placeholder`,3,`ngModelChange`,`ngModel`],[`label`,`Note`,3,`ngModelChange`,`ngModel`],[`name`,`text`,`value`,`text`,`label`,`text`,3,`ngModelChange`,`ngModel`],[`name`,`number`,`value`,`number`,`label`,`number`,3,`ngModelChange`,`ngModel`],[`name`,`email`,`value`,`email`,`label`,`email`,3,`ngModelChange`,`ngModel`],[`name`,`password`,`value`,`password`,`label`,`password`,3,`ngModelChange`,`ngModel`],[`name`,`time`,`value`,`time`,`label`,`time`,3,`ngModelChange`,`ngModel`],[`name`,`date`,`value`,`date`,`label`,`date`,3,`ngModelChange`,`ngModel`],[`name`,`tel`,`value`,`tel`,`label`,`tel`,3,`ngModelChange`,`ngModel`],[`name`,`color`,`value`,`color`,`label`,`color`,3,`ngModelChange`,`ngModel`],[`name`,`url`,`value`,`url`,`label`,`url`,3,`ngModelChange`,`ngModel`],[3,`ngModelChange`,`label`,`placeholder`,`disabled`,`readonly`,`type`,`ngModel`,`description`],[`showStrengthMeter`,`true`,3,`ngModelChange`,`label`,`placeholder`,`disabled`,`ngModel`,`validationMode`]],template:function(r,e){r&1&&(Zi(0,`h3`),hb(1,`Interazione con Form Input`),nu(),Zi(2,`p`),hb(3,`Elementi e stili per la creazione di input accessibili e responsivi.`),nu(),Zi(4,`div`,0)(5,`div`,1)(6,`div`,2),yC(7,Se,1,7,`it-input`,3),yC(8,we,1,5,`it-password-input`,4),nu()(),Zi(9,`div`,1)(10,`div`,5)(11,`h5`),hb(12,`Opzioni`),nu(),Zi(13,`div`,1)(14,`div`,6)(15,`it-checkbox`,7),xT(),Fm(`ngModelChange`,function(o){return mb(e.disabled,o)||(e.disabled=o),o}),nu(),Zi(16,`it-checkbox`,8),xT(),Fm(`ngModelChange`,function(o){return mb(e.readOnly,o)||(e.readOnly=o),o}),nu(),Zi(17,`it-checkbox`,9),xT(),Fm(`ngModelChange`,function(o){return mb(e.hasLabel,o)||(e.hasLabel=o),o}),nu()(),Zi(18,`div`,10)(19,`it-checkbox`,11),xT(),Fm(`ngModelChange`,function(o){return mb(e.hasPlaceholder,o)||(e.hasPlaceholder=o),o}),nu(),Zi(20,`it-checkbox`,12),xT(),Fm(`ngModelChange`,function(o){return mb(e.hasNote,o)||(e.hasNote=o),o}),nu()()()(),Zi(21,`div`,5)(22,`h5`),hb(23,`Tipo Input`),nu(),Zi(24,`div`,1)(25,`div`,6)(26,`it-radio-button`,13),xT(),Fm(`ngModelChange`,function(o){return mb(e.type,o)||(e.type=o),o}),nu(),Zi(27,`it-radio-button`,14),xT(),Fm(`ngModelChange`,function(o){return mb(e.type,o)||(e.type=o),o}),nu(),Zi(28,`it-radio-button`,15),xT(),Fm(`ngModelChange`,function(o){return mb(e.type,o)||(e.type=o),o}),nu(),Zi(29,`it-radio-button`,16),xT(),Fm(`ngModelChange`,function(o){return mb(e.type,o)||(e.type=o),o}),nu()(),Zi(30,`div`,10)(31,`it-radio-button`,17),xT(),Fm(`ngModelChange`,function(o){return mb(e.type,o)||(e.type=o),o}),nu(),Zi(32,`it-radio-button`,18),xT(),Fm(`ngModelChange`,function(o){return mb(e.type,o)||(e.type=o),o}),nu(),Zi(33,`it-radio-button`,19),xT(),Fm(`ngModelChange`,function(o){return mb(e.type,o)||(e.type=o),o}),nu(),Zi(34,`it-radio-button`,20),xT(),Fm(`ngModelChange`,function(o){return mb(e.type,o)||(e.type=o),o}),nu(),Zi(35,`it-radio-button`,21),xT(),Fm(`ngModelChange`,function(o){return mb(e.type,o)||(e.type=o),o}),nu()()()()()()),r&2&&(MD(7),EC(e.type!==`password`?7:-1),MD(),EC(e.type===`password`?8:-1),MD(7),Pm(`ngModel`,e.disabled),OT(),MD(),Pm(`ngModel`,e.readOnly),OT(),MD(),Pm(`ngModel`,e.hasLabel),OT(),MD(2),Pm(`ngModel`,e.hasPlaceholder),OT(),MD(),Pm(`ngModel`,e.hasNote),OT(),MD(6),Pm(`ngModel`,e.type),OT(),MD(),Pm(`ngModel`,e.type),OT(),MD(),Pm(`ngModel`,e.type),OT(),MD(),Pm(`ngModel`,e.type),OT(),MD(2),Pm(`ngModel`,e.type),OT(),MD(),Pm(`ngModel`,e.type),OT(),MD(),Pm(`ngModel`,e.type),OT(),MD(),Pm(`ngModel`,e.type),OT(),MD(),Pm(`ngModel`,e.type),OT())},dependencies:[tn,yf,nP,x0,rP,sP],encapsulation:2})}}return i})();function De(i,M){if(i&1&&im(0,`it-icon`,4),i&2){let l=VC();om(`name`,l.icon)}}function Ve(i,M){if(i&1&&im(0,`it-icon`,5),i&2){let l=VC();om(`name`,l.icon)}}function Te(i,M){if(i&1&&im(0,`it-icon`,4),i&2){let l=VC();om(`name`,l.icon)}}var Ce=(()=>{class i{constructor(){this.i=0,this.type=`text`,this.icon=`pencil`,this.value=``,this.label=`Etichetta di esempio`}static{this.ɵfac=function(r){return new(r||i)}}static{this.ɵcmp=Tw({type:i,selectors:[[`it-form-input-icon-example`]],standalone:!1,decls:20,vars:11,consts:[[1,`bd-example`],[1,`row`],[1,`col-5`],[3,`label`],[`size`,`sm`,`color`,`primary`,`prependText`,``,3,`name`],[`size`,`sm`,`color`,`primary`,`appendText`,``,3,`name`],[`itButton`,`primary`,`append`,``],[1,`form-check`,`col-auto`,`offset-1`],[`name`,`none`,`label`,`Nessuna`,3,`ngModelChange`,`ngModel`,`value`],[`name`,`it-pencil`,`value`,`pencil`,`label`,`it-pencil`,3,`ngModelChange`,`ngModel`],[`name`,`it-link`,`value`,`link`,`label`,`it-link`,3,`ngModelChange`,`ngModel`],[`name`,`it-star-outline`,`value`,`star-outline`,`label`,`it-star-outline`,3,`ngModelChange`,`ngModel`]],template:function(r,e){r&1&&(Zi(0,`h3`),hb(1,`Input con icona o pulsanti`),nu(),Zi(2,`div`,0)(3,`div`,1)(4,`div`,2)(5,`it-input`,3),yC(6,De,1,1,`it-icon`,4),nu(),Zi(7,`it-input`,3),yC(8,Ve,1,1,`it-icon`,5),nu(),Zi(9,`it-input`,3),yC(10,Te,1,1,`it-icon`,4),Zi(11,`button`,6),hb(12,`Invia`),nu()()(),Zi(13,`div`,7)(14,`h5`),hb(15,`Icona`),nu(),Zi(16,`it-radio-button`,8),xT(),Fm(`ngModelChange`,function(o){return mb(e.icon,o)||(e.icon=o),o}),nu(),Zi(17,`it-radio-button`,9),xT(),Fm(`ngModelChange`,function(o){return mb(e.icon,o)||(e.icon=o),o}),nu(),Zi(18,`it-radio-button`,10),xT(),Fm(`ngModelChange`,function(o){return mb(e.icon,o)||(e.icon=o),o}),nu(),Zi(19,`it-radio-button`,11),xT(),Fm(`ngModelChange`,function(o){return mb(e.icon,o)||(e.icon=o),o}),nu()()()()),r&2&&(MD(5),om(`label`,e.label),MD(),EC(e.icon?6:-1),MD(),om(`label`,e.label),MD(),EC(e.icon?8:-1),MD(),om(`label`,e.label),MD(),EC(e.icon?10:-1),MD(6),Pm(`ngModel`,e.icon),om(`value`,void 0),OT(),MD(),Pm(`ngModel`,e.icon),OT(),MD(),Pm(`ngModel`,e.icon),OT(),MD(),Pm(`ngModel`,e.icon),OT())},dependencies:[tn,yf,xo,x0,sP,_t],encapsulation:2,changeDetection:1})}}return i})();function We(i,M){if(i&1&&(Zi(0,`div`),hb(1),nu()),i&2){let l=VC();MD(),cu("Salvato `",l.savedValue,"`")}}var be=(()=>{class i{constructor(){this.value=``,this.savedValue=void 0}save(l){this.savedValue=l.value.myInput}static{this.ɵfac=function(r){return new(r||i)}}static{this.ɵcmp=Tw({type:i,selectors:[[`it-template-driven-validation-example`]],standalone:!1,decls:9,vars:3,consts:[[`myForm`,`ngForm`],[1,`bd-example`],[`name`,`myInput`,`minlength`,`3`,`maxlength`,`10`,`pattern`,`[ab]+`,`required`,``,3,`ngModelChange`,`ngModel`],[`itButton`,`primary`,3,`click`,`disabled`]],template:function(r,e){if(r&1){let p=xC();Zi(0,`h3`),hb(1,`Interazione con Form Input dotato di validazione Template Driven`),nu(),Zi(2,`div`,1)(3,`form`,null,0)(5,`it-input`,2),xT(),Fm(`ngModelChange`,function(V){return Gd(p),mb(e.value,V)||(e.value=V),qd(V)}),nu(),Zi(6,`button`,3),gm(`click`,function(){Gd(p);let V=qC(4);return qd(e.save(V))}),hb(7,`Salva`),nu(),yC(8,We,2,1,`div`),nu()()}if(r&2){let p=qC(4);MD(5),Pm(`ngModel`,e.value),OT(),MD(),om(`disabled`,!p.valid),MD(2),EC(e.savedValue?8:-1)}},dependencies:[mZ,tn,pZ,Ax,UM,$M,qM,yf,t3,xo,x0],encapsulation:2,changeDetection:1})}}return i})();function Le(i,M){i&1&&(Zi(0,`div`),hb(1,`Il campo è obbligatorio`),nu())}function Pe(i,M){i&1&&(Zi(0,`div`),hb(1,`Deve essere almeno di lunghezza 3`),nu())}function ze(i,M){i&1&&(Zi(0,`div`),hb(1,`Deve essere massimo di lunghezza 10`),nu())}function Be(i,M){i&1&&(Zi(0,`div`),hb(1,`Non corrisponde al pattern [ab]+`),nu())}function Ae(i,M){if(i&1&&(Zi(0,`div`),hb(1),nu()),i&2){let l=VC();MD(),cu("Salvato `",l.savedValue,"`")}}var ye=(()=>{class i{constructor(){this._fb=g(gZ),this.regions=[],this.value=``,this.savedValue=void 0,this.regions=[`Abruzzo`,`Basilicata`,`Calabria`,`Campania`,`Emilia Romagna`,`Friuli Venezia Giulia`,`Lazio`,`Liguria`,`Lombardia`,`Marche`,`Molise`,`Piemonte`,`Puglia`,`Sardegna`,`Sicilia`,`Toscana`,`Trentino Alto Adige`,`Umbria`,`Valle d'Aosta`,`Veneto`];let l=[dr.required,dr.minLength(3),dr.maxLength(10),dr.pattern(`[ab]+`)];this.myForm=this._fb.group({taxCode:[null,Za.taxCode],vat:[null,Za.vatNumber],cap:[null,Za.cap],email:[null],url:[null],phone:[null],region:[null,Za.includes(this.regions)],iban:[null,Za.iban],myInput:[``,l]})}save(l){this.savedValue=l.value.myInput}markAllAsTouched(){this.myForm.markAllAsTouched()}static{this.ɵfac=function(r){return new(r||i)}}static{this.ɵcmp=Tw({type:i,selectors:[[`it-model-driven-validation-example`]],standalone:!1,decls:38,vars:8,consts:[[`myInput`,``],[1,`bd-example`],[3,`formGroup`],[1,`row`],[1,`col-6`],[`label`,`Custom`,`formControlName`,`myInput`],[`error`,``],[`label`,`Codice fiscale`,`formControlName`,`taxCode`,`required`,``],[1,`col-4`],[`label`,`IBAN`,`formControlName`,`iban`],[`label`,`Partita IVA`,`formControlName`,`vat`,`required`,``],[`label`,`Cap`,`formControlName`,`cap`,`required`,``],[`type`,`email`,`label`,`Email`,`formControlName`,`email`,`required`,``],[`type`,`url`,`label`,`Url`,`formControlName`,`url`,`required`,``],[`type`,`tel`,`label`,`Telefono`,`formControlName`,`phone`,`required`,``],[`label`,`Regione`,`formControlName`,`region`,`required`,``,3,`source`],[1,`d-flex`,`justify-content-between`],[`itButton`,`primary`,3,`click`,`disabled`],[`itButton`,`secondary`,`type`,`button`,3,`click`]],template:function(r,e){if(r&1&&(Zi(0,`h3`),hb(1,`Interazione con Form Input dotato di validazione Model Driven`),nu(),Zi(2,`div`,1)(3,`form`,2)(4,`div`,3)(5,`div`,4)(6,`it-input`,5,0),xT(),su(8,6),yC(9,Le,2,0,`div`),yC(10,Pe,2,0,`div`),yC(11,ze,2,0,`div`),yC(12,Be,2,0,`div`),au(),nu()(),Zi(13,`div`,4)(14,`it-input`,7),xT(),nu()()(),Zi(15,`div`,3)(16,`div`,8)(17,`it-input`,9),xT(),nu()(),Zi(18,`div`,8)(19,`it-input`,10),xT(),nu()(),Zi(20,`div`,8)(21,`it-input`,11),xT(),nu()()(),Zi(22,`div`,3)(23,`div`,8)(24,`it-input`,12),xT(),nu()(),Zi(25,`div`,8)(26,`it-input`,13),xT(),nu()(),Zi(27,`div`,8)(28,`it-input`,14),xT(),nu()()(),Zi(29,`div`,3)(30,`div`,8)(31,`it-autocomplete`,15),xT(),nu()()(),Zi(32,`div`,16)(33,`button`,17),gm(`click`,function(){return e.save(e.myForm)}),hb(34,`Salva`),nu(),Zi(35,`button`,18),gm(`click`,function(){return e.markAllAsTouched()}),hb(36,`Valida`),nu()(),yC(37,Ae,2,1,`div`),nu()()),r&2){let p=qC(7);MD(3),om(`formGroup`,e.myForm),MD(3),OT(),MD(3),EC(p.hasError(`required`)?9:-1),MD(),EC(p.hasError(`minlength`)?10:-1),MD(),EC(p.hasError(`maxlength`)?11:-1),MD(),EC(p.hasError(`pattern`)?12:-1),MD(2),OT(),MD(3),OT(),MD(2),OT(),MD(2),OT(),MD(3),OT(),MD(2),OT(),MD(2),OT(),MD(3),om(`source`,e.regions),OT(),MD(2),om(`disabled`,!e.myForm.valid),MD(4),EC(e.savedValue?37:-1)}},dependencies:[mZ,tn,pZ,Ax,xo,bP,x0,s3,bf],encapsulation:2,changeDetection:1})}}return i})();var fe=(()=>{class i{constructor(){this.adaptiveInputValue=99999}static{this.ɵfac=function(r){return new(r||i)}}static{this.ɵcmp=Tw({type:i,selectors:[[`it-form-input-number-example`]],standalone:!1,decls:23,vars:4,consts:[[1,`bd-example`],[1,`mb-5`],[`type`,`number`,`label`,`Min, Max & Step`,3,`min`,`max`,`step`],[`type`,`number`,`label`,`Currency`,`currency`,`true`,`symbol`,`$`],[`type`,`number`,`label`,`Percentage`,`percentage`,`true`,`symbol`,`%`],[`type`,`number`,`label`,`Adattivo`,`adaptive`,`true`,3,`ngModelChange`,`ngModel`]],template:function(r,e){r&1&&(Zi(0,`h3`),hb(1,`Input Numerico`),nu(),Zi(2,`div`,0)(3,`h5`),hb(4,`Limiti e Step`),nu(),Zi(5,`p`,1),hb(6,` Aggiungendo le proprietà "min", "max" e "step" all’input è possibile limitare il valore minimo e massimo del campo e decidere di quanto varierà a ogni click sui pulsanti. `),nu(),im(7,`it-input`,2),Zi(8,`h5`),hb(9,`Valuta`),nu(),Zi(10,`p`,1),hb(11,`Per anteporre il simbolo della valuta in Euro, aggiungere la proprietà "currency"`),nu(),im(12,`it-input`,3),Zi(13,`h5`),hb(14,`Percentuale`),nu(),Zi(15,`p`,1),hb(16,`Per anteporre il simbolo della percentuale in Euro, aggiungere la proprietà "percentage"`),nu(),im(17,`it-input`,4),Zi(18,`h5`),hb(19,`Ridimensionamento`),nu(),Zi(20,`p`,1),hb(21,` È possibile far sì che il campo numerico si ridimensioni automaticamente a seconda del valore contenuto in esso. Basta aggiungere la proprietà "adaptive" `),nu(),Zi(22,`it-input`,5),xT(),Fm(`ngModelChange`,function(o){return mb(e.adaptiveInputValue,o)||(e.adaptiveInputValue=o),o}),nu()()),r&2&&(MD(7),om(`min`,10)(`max`,100)(`step`,5),MD(15),Pm(`ngModel`,e.adaptiveInputValue),OT())},dependencies:[tn,yf,x0],encapsulation:2,changeDetection:1})}}return i})();var _e=(()=>{class i{static{this.ɵfac=function(r){return new(r||i)}}static{this.ɵcmp=Tw({type:i,selectors:[[`it-form-input-calendar-example`]],standalone:!1,decls:17,vars:0,consts:[[1,`bd-example`],[1,`mb-5`],[`type`,`date`,`label`,`Datepicker`],[`type`,`date`,`label`,`Min, Max`,`minDate`,`2020-05-07`,`maxDate`,`2025-05-07`]],template:function(r,e){r&1&&(Zi(0,`h3`),hb(1,`Input Calendario`),nu(),Zi(2,`p`)(3,`strong`),hb(4,`Attenzione:`),nu(),hb(5,` i valori delle date devono essere in formato YYYY-MM-DD.`),nu(),Zi(6,`div`,0)(7,`h5`),hb(8,`Datepicker`),nu(),Zi(9,`p`,1),hb(10,`Clicca sull’icona a destra per visualizzare il datepicker.`),nu(),im(11,`it-input`,2),Zi(12,`h5`),hb(13,`Limiti`),nu(),Zi(14,`p`,1),hb(15,`Aggiungendo le propriet\xE0 "min" e "max" all'input \xE8 possibile limitare la data minima e massima del campo`),nu(),im(16,`it-input`,3),nu())},dependencies:[x0],encapsulation:2,changeDetection:1})}}return i})();var Me=(()=>{class i{static{this.ɵfac=function(r){return new(r||i)}}static{this.ɵcmp=Tw({type:i,selectors:[[`it-form-input-examples`]],standalone:!1,decls:12,vars:0,consts:[[`html`,`<h3>Interazione con Form Input</h3>
<p>Elementi e stili per la creazione di input accessibili e responsivi.</p>

<div class="bd-example">
  <div class="row">
    <div class="col-8">
      @if (type !== 'password') {
        <it-input
          [label]="label"
          [placeholder]="placeholder"
          [disabled]="disabled"
          [readonly]="readOnly"
          [type]="type !== 'password' ? type : 'text'"
          [(ngModel)]="value"
          [description]="note"></it-input>
      }
      @if (type === 'password') {
        <it-password-input
          [label]="label"
          [placeholder]="placeholder"
          [disabled]="disabled"
          [(ngModel)]="value"
          showStrengthMeter="true"
          [validationMode]="false"></it-password-input>
      }
    </div>
  </div>

  <div class="row">
    <div class="form-check col-6">
      <h5>Opzioni</h5>
      <div class="row">
        <div class="col-4">
          <it-checkbox [(ngModel)]="disabled" label="Disabled"></it-checkbox>
          <it-checkbox [(ngModel)]="readOnly" label="Readonly"></it-checkbox>
          <it-checkbox [(ngModel)]="hasLabel" label="Label"></it-checkbox>
        </div>
        <div class="col-auto">
          <it-checkbox [(ngModel)]="hasPlaceholder" label="Placeholder"></it-checkbox>
          <it-checkbox [(ngModel)]="hasNote" label="Note"></it-checkbox>
        </div>
      </div>
    </div>

    <div class="form-check col-6">
      <h5>Tipo Input</h5>
      <div class="row">
        <div class="col-4">
          <it-radio-button name="text" [(ngModel)]="type" value="text" label="text"></it-radio-button>
          <it-radio-button name="number" [(ngModel)]="type" value="number" label="number"></it-radio-button>
          <it-radio-button name="email" [(ngModel)]="type" value="email" label="email"></it-radio-button>
          <it-radio-button name="password" [(ngModel)]="type" value="password" label="password"></it-radio-button>
        </div>
        <div class="col-auto">
          <it-radio-button name="time" [(ngModel)]="type" value="time" label="time"></it-radio-button>
          <it-radio-button name="date" [(ngModel)]="type" value="date" label="date"></it-radio-button>
          <it-radio-button name="tel" [(ngModel)]="type" value="tel" label="tel"></it-radio-button>
          <it-radio-button name="color" [(ngModel)]="type" value="color" label="color"></it-radio-button>
          <it-radio-button name="url" [(ngModel)]="type" value="url" label="url"></it-radio-button>
        </div>
      </div>
    </div>
  </div>
</div>`,`typescript`,`import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputControlType } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-form-input-example',
  templateUrl: './form-input-example.component.html',
  styleUrls: ['./form-input-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class FormInputExampleComponent {
  i = 0;
  readOnly = false;
  disabled = false;
  type: InputControlType | 'password' = 'text';
  icon = 'pencil';
  value = 'myNgModel';

  get placeholder() {
    return this.hasPlaceholder ? 'Testo di esempio' : '';
  }

  get label() {
    return this.hasLabel ? "Label dell'input" : '';
  }

  get note() {
    return this.hasNote ? 'non condivideremo mai i tuoi dati' : '';
  }

  hasPlaceholder = true;

  hasLabel = true;

  hasNote = false;
}`],[`html`,`<h3>Input Numerico</h3>
<div class="bd-example">
  <h5>Limiti e Step</h5>
  <p class="mb-5">
    Aggiungendo le propriet\xE0 "min", "max" e "step" all\u2019input \xE8 possibile limitare il valore minimo e massimo del campo e decidere di quanto
    varier\xE0 a ogni click sui pulsanti.
  </p>

  <!-- Input numerico con min, max e step -->
  <it-input type="number" label="Min, Max & Step" [min]="10" [max]="100" [step]="5"></it-input>

  <h5>Valuta</h5>
  <p class="mb-5">Per anteporre il simbolo della valuta in Euro, aggiungere la propriet\xE0 "currency"</p>

  <!-- Input numerico con valuta -->
  <it-input type="number" label="Currency" currency="true" symbol="$"></it-input>

  <h5>Percentuale</h5>
  <p class="mb-5">Per anteporre il simbolo della percentuale in Euro, aggiungere la propriet\xE0 "percentage"</p>

  <!-- Input numerico con percentuale -->
  <it-input type="number" label="Percentage" percentage="true" symbol="%"></it-input>

  <h5>Ridimensionamento</h5>
  <p class="mb-5">
    \xC8 possibile far s\xEC che il campo numerico si ridimensioni automaticamente a seconda del valore contenuto in esso. Basta aggiungere la
    propriet\xE0 "adaptive"
  </p>

  <!-- Input numerico con ridimensionamento automatico -->
  <it-input type="number" label="Adattivo" adaptive="true" [(ngModel)]="adaptiveInputValue"></it-input>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-form-input-number-example',
  templateUrl: './form-input-number.component.html',
  styleUrls: ['./form-input-number.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class FormInputNumberExampleComponent {
  adaptiveInputValue: number = 99999;
}`],[`html`,`<h3>Input Calendario</h3>
<p><strong>Attenzione:</strong> i valori delle date devono essere in formato YYYY-MM-DD.</p>
<div class="bd-example">
  <h5>Datepicker</h5>
  <p class="mb-5">Clicca sull\u2019icona a destra per visualizzare il datepicker.</p>

  <it-input type="date" label="Datepicker"></it-input>

  <h5>Limiti</h5>
  <p class="mb-5">Aggiungendo le propriet\xE0 "min" e "max" all'input \xE8 possibile limitare la data minima e massima del campo</p>

  <!-- Input date con min, max e step -->
  <it-input type="date" label="Min, Max" minDate="2020-05-07" maxDate="2025-05-07"></it-input>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-form-input-calendar-example',
  templateUrl: './form-input-calendar.component.html',
  styleUrls: ['./form-input-calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class FormInputCalendarExampleComponent {}`],[`html`,`<h3>Input con icona o pulsanti</h3>
<div class="bd-example">
  <div class="row">
    <div class="col-5">
      <!-- Input con icona a sinistra tramite attributo -->
      <it-input [label]="label">
        @if (icon) {
          <it-icon [name]="icon" size="sm" color="primary" prependText></it-icon>
        }
      </it-input>

      <!-- Input con icona a sinistra tramite direttiva itTextSuffix -->
      <it-input [label]="label">
        @if (icon) {
          <it-icon [name]="icon" size="sm" color="primary" appendText></it-icon>
        }
      </it-input>

      <!-- Input con icona a sinistra tramite direttiva itTextSuffix e bottone a destra tramite direttiva itSuffix-->
      <it-input [label]="label">
        @if (icon) {
          <it-icon [name]="icon" size="sm" color="primary" prependText></it-icon>
        }
        <button itButton="primary" append>Invia</button>
      </it-input>
    </div>

    <div class="form-check col-auto offset-1">
      <h5>Icona</h5>
      <it-radio-button name="none" [(ngModel)]="icon" [value]="undefined" label="Nessuna"></it-radio-button>
      <it-radio-button name="it-pencil" [(ngModel)]="icon" value="pencil" label="it-pencil"></it-radio-button>
      <it-radio-button name="it-link" [(ngModel)]="icon" value="link" label="it-link"></it-radio-button>
      <it-radio-button name="it-star-outline" [(ngModel)]="icon" value="star-outline" label="it-star-outline"></it-radio-button>
    </div>
  </div>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconName } from 'design-angular-kit/interfaces/icon';

@Component({
  selector: 'it-form-input-icon-example',
  templateUrl: './form-input-icon.component.html',
  styleUrls: ['./form-input-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class FormInputIconExampleComponent {
  i = 0;
  type = 'text';
  icon: IconName = 'pencil';
  value = '';
  label = 'Etichetta di esempio';
}`],[`html`,`<h3>Interazione con Form Input dotato di validazione Template Driven</h3>

<div class="bd-example">
  <form #myForm="ngForm">
    <it-input [(ngModel)]="value" name="myInput" minlength="3" maxlength="10" pattern="[ab]+" required>
      <!-- Default errors-->
    </it-input>

    <button itButton="primary" [disabled]="!myForm.valid" (click)="save(myForm)">Salva</button>

    @if (savedValue) {
      <div>Salvato \`/{/{ savedValue /}/}\`</div>
    }
  </form>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'it-template-driven-validation-example',
  templateUrl: './template-driven-validation-example.component.html',
  styleUrls: ['./template-driven-validation-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class TemplateDrivenValidationExampleComponent {
  value = '';
  savedValue = undefined;

  save(ngForm: NgForm) {
    this.savedValue = ngForm.value.myInput;
  }
}`],[`html`,`<h3>Interazione con Form Input dotato di validazione Model Driven</h3>

<div class="bd-example">
  <form [formGroup]="myForm">
    <div class="row">
      <div class="col-6">
        <it-input label="Custom" formControlName="myInput" #myInput>
          <ng-container error>
            <!-- Custom errors-->
            @if (myInput.hasError('required')) {
              <div>Il campo \xE8 obbligatorio</div>
            }
            @if (myInput.hasError('minlength')) {
              <div>Deve essere almeno di lunghezza 3</div>
            }
            @if (myInput.hasError('maxlength')) {
              <div>Deve essere massimo di lunghezza 10</div>
            }
            @if (myInput.hasError('pattern')) {
              <div>Non corrisponde al pattern [ab]+</div>
            }
          </ng-container>
        </it-input>
      </div>
      <div class="col-6">
        <it-input label="Codice fiscale" formControlName="taxCode" required>
          <!-- Default errors-->
        </it-input>
      </div>
    </div>

    <div class="row">
      <div class="col-4">
        <it-input label="IBAN" formControlName="iban"></it-input>
      </div>
      <div class="col-4">
        <it-input label="Partita IVA" formControlName="vat" required></it-input>
      </div>
      <div class="col-4">
        <it-input label="Cap" formControlName="cap" required></it-input>
      </div>
    </div>

    <div class="row">
      <div class="col-4">
        <it-input type="email" label="Email" formControlName="email" required></it-input>
      </div>
      <div class="col-4">
        <it-input type="url" label="Url" formControlName="url" required></it-input>
      </div>
      <div class="col-4">
        <it-input type="tel" label="Telefono" formControlName="phone" required></it-input>
      </div>
    </div>
    <div class="row">
      <div class="col-4">
        <it-autocomplete label="Regione" formControlName="region" [source]="regions" required></it-autocomplete>
      </div>
    </div>

    <div class="d-flex justify-content-between">
      <button itButton="primary" [disabled]="!myForm.valid" (click)="save(myForm)">Salva</button>
      <button itButton="secondary" type="button" (click)="markAllAsTouched()">Valida</button>
    </div>

    @if (savedValue) {
      <div>Salvato \`/{/{ savedValue /}/}\`</div>
    }
  </form>
</div>`,`typescript`,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { ItValidators } from 'design-angular-kit/validators/it-validators';

@Component({
  selector: 'it-model-driven-validation-example',
  templateUrl: './model-driven-validation-example.component.html',
  styleUrls: ['./model-driven-validation-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class ModelDrivenValidationExampleComponent {
  private _fb = inject(FormBuilder);

  myForm: FormGroup;
  regions: string[] = [];

  constructor() {
    this.regions = [
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
      "Valle d'Aosta",
      'Veneto',
    ];
    const validators = [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern('[ab]+')];
    this.myForm = this._fb.group({
      taxCode: [null, ItValidators.taxCode],
      vat: [null, ItValidators.vatNumber],
      cap: [null, ItValidators.cap],
      email: [null],
      url: [null],
      phone: [null],
      region: [null, ItValidators.includes(this.regions)],
      iban: [null, ItValidators.iban],
      myInput: ['', validators],
    });
  }

  value = '';
  savedValue = undefined;

  save(form: UntypedFormGroup) {
    this.savedValue = form.value.myInput;
  }

  markAllAsTouched() {
    this.myForm.markAllAsTouched();
  }
}`]],template:function(r,e){r&1&&im(0,`it-form-input-example`)(1,`it-source-display`,0)(2,`it-form-input-number-example`)(3,`it-source-display`,1)(4,`it-form-input-calendar-example`)(5,`it-source-display`,2)(6,`it-form-input-icon-example`)(7,`it-source-display`,3)(8,`it-template-driven-validation-example`)(9,`it-source-display`,4)(10,`it-model-driven-validation-example`)(11,`it-source-display`,5)},dependencies:[q,ve,Ce,be,ye,fe,_e],encapsulation:2,changeDetection:1})}}return i})();var Oe=[{path:``,component:(()=>{class i{constructor(){this.component=oe.components.find(l=>l.name===`ItInputComponent`)}static{this.ɵfac=function(r){return new(r||i)}}static{this.ɵcmp=Tw({type:i,selectors:[[`it-form-input-index`]],standalone:!1,decls:10,vars:2,consts:[[1,`bd-title`],[1,`bd-lead`],[3,`innerHTML`],[`label`,`Esempi`,`active`,`true`,1,`pt-3`],[`label`,`API`,1,`pt-3`],[3,`component`]],template:function(r,e){r&1&&(Zi(0,`h1`,0),hb(1,`Form Input`),nu(),Zi(2,`p`,1),hb(3,`Il componente Form Input utilizzabile in un form`),nu(),im(4,`div`,2),Zi(5,`it-tab-container`)(6,`it-tab-item`,3),im(7,`it-form-input-examples`),nu(),Zi(8,`it-tab-item`,4),im(9,`it-api-parameters`,5),nu()()),r&2&&(MD(4),om(`innerHTML`,e.component.description,BI),MD(5),om(`component`,e.component))},dependencies:[$,Ile,Fx,Me],encapsulation:2,changeDetection:1})}}return i})()}];var Ee=(()=>{class i{static{this.ɵfac=function(r){return new(r||i)}}static{this.ɵmod=Pg({type:i})}static{this.ɵinj=fa({imports:[ua.forChild(Oe),ua]})}}return i})();var Vn=(()=>{class i{static{this.ɵfac=function(r){return new(r||i)}}static{this.ɵmod=Pg({type:i})}static{this.ɵinj=fa({imports:[Zt,_Z,te,Ee,Ti]})}}return i})();export{Vn as FormInputModule};