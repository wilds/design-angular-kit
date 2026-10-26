import{$ as MD,Cn as fa,Fn as hb,Hn as im,Zt as Zi,cr as om,ct as Pg,jt as Tw,or as nu}from"./chunk-BXp14hLr.js";import{E as Zt}from"./chunk-CtdKxuHA.js";import{Bt as xo,Jt as ua,U as b1,f as Fx,h as Ile,qt}from"./main-JCJIXXB4.js";import{i as te,n as oe$1,r as q,t as $}from"./chunk-4-cg1OfJ.js";var z=(()=>{class e{constructor(){this.notFound=`import {ItErrorPageComponent} from 'design-angular-kit';

const routes: Routes = [
   { path: 'error/not-found', component: ItErrorPageComponent, data: { errorCode: 404 } },
   { path: '**', redirectTo: 'error/not-found'  }
]`,this.forbidden=`import {ItErrorPageComponent} from 'design-angular-kit';

const routes: Routes = [
   { path: 'error/forbidden', component: ItErrorPageComponent, data: { errorCode: 403 } },
]`,this.internalServerError=`import {ItErrorPageComponent} from 'design-angular-kit';

const routes: Routes = [
   { path: 'error/server-error', component: ItErrorPageComponent, data: { errorCode: 500 } },
]`,this.custom=`import {ItErrorPageComponent} from 'design-angular-kit';

const routes: Routes = [
   { 
     path: 'error/custom', 
     component: ItErrorPageComponent,
     data: {
       errorCode: 503, // Opzionale 
       showErrorCode: true, // Opzionale (utile per gli errori 404, 403, 500) 
       errorTitle: "Servizio non disponibile", // Opzionale (puoi usare anche chiavi i18n) 
       errorDescription: "Mi dispiace, momentaneamente questa risorsa non \xE8 disponibile", // Opzionale (puoi usare anche chiavi i18n) 
       showBackButton: true, // Opzionale 
       showHomeButton: false, // Opzionale 
     } 
   }
]`}static{this.ɵfac=function(o){return new(o||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-error-page-route-example`]],standalone:!1,decls:28,vars:4,consts:[[1,`bd-example`],[1,`d-flex`,`justify-content-between`,`mb-3`],[`itButton`,`primary`,`size`,`sm`,`routerLink`,`/error/not-found`],[3,`typescript`],[1,`d-flex`,`justify-content-between`,`mt-5`,`mb-3`],[`itButton`,`primary`,`size`,`sm`,`routerLink`,`/error/forbidden`],[`itButton`,`primary`,`size`,`sm`,`routerLink`,`/error/server-error`],[1,`mt-5`],[1,`mb-3`]],template:function(o,s){o&1&&(Zi(0,`h3`),hb(1,`Router Module`),nu(),Zi(2,`p`),hb(3,`Puoi utilizzare la pagina d'errore direttamente sul tuo RouterModule (ad esempio app-routing.module.ts)`),nu(),Zi(4,`div`,0)(5,`div`,1)(6,`h4`),hb(7,`404 - Not Found`),nu(),Zi(8,`a`,2),hb(9,`Prova`),nu()(),im(10,`it-source-display`,3),Zi(11,`div`,4)(12,`h4`),hb(13,`403 - Forbidden`),nu(),Zi(14,`a`,5),hb(15,`Prova`),nu()(),im(16,`it-source-display`,3),Zi(17,`div`,4)(18,`h4`),hb(19,`500 - Internal Server Error`),nu(),Zi(20,`a`,6),hb(21,`Prova`),nu()(),im(22,`it-source-display`,3),Zi(23,`h4`,7),hb(24,`Personalizzato`),nu(),Zi(25,`p`,8),hb(26,`Puoi passare nella route gli attributi per personalizzare la pagina`),nu(),im(27,`it-source-display`,3),nu()),o&2&&(MD(10),om(`typescript`,s.notFound),MD(6),om(`typescript`,s.forbidden),MD(6),om(`typescript`,s.internalServerError),MD(5),om(`typescript`,s.custom))},dependencies:[q,xo,qt],encapsulation:2,changeDetection:1})}}return e})();var D=(()=>{class e{static{this.ɵfac=function(o){return new(o||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-error-page-component-example`]],standalone:!1,decls:27,vars:4,consts:[[1,`bd-example`],[1,`row`],[1,`col-6`],[3,`errorCode`],[1,`row`,`mt-5`],[`showBackButton`,`true`,`showHomeButton`,`false`,`showErrorCode`,`true`,`errorTitle`,`Servizio non disponibile`,`errorDescription`,`Mi dispiace, momentaneamente questa risorsa non è disponibile`,3,`errorCode`]],template:function(o,s){o&1&&(Zi(0,`h3`),hb(1,`Componente`),nu(),Zi(2,`p`),hb(3,`Puoi utilizzare la pagina d'errore come un classico componente`),nu(),Zi(4,`div`,0)(5,`div`,1)(6,`div`,2)(7,`h4`),hb(8,`404 - Not Found`),nu(),im(9,`hr`)(10,`it-error-page`,3),nu(),Zi(11,`div`,2)(12,`h4`),hb(13,`403 - Forbidden`),nu(),im(14,`hr`)(15,`it-error-page`,3),nu()(),Zi(16,`div`,4)(17,`div`,2)(18,`h4`),hb(19,`500 - Internal Server Error`),nu(),im(20,`hr`)(21,`it-error-page`,3),nu(),Zi(22,`div`,2)(23,`h4`),hb(24,`Personalizzato`),nu(),im(25,`hr`)(26,`it-error-page`,5),nu()()()),o&2&&(MD(10),om(`errorCode`,404),MD(5),om(`errorCode`,403),MD(6),om(`errorCode`,500),MD(5),om(`errorCode`,503))},dependencies:[b1],encapsulation:2,changeDetection:1})}}return e})();var I=(()=>{class e{static{this.ɵfac=function(o){return new(o||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-error-page-examples`]],standalone:!1,decls:3,vars:0,consts:[[`html`,`<h3>Componente</h3>
<p>Puoi utilizzare la pagina d'errore come un classico componente</p>

<div class="bd-example">
  <div class="row">
    <div class="col-6">
      <h4>404 - Not Found</h4>
      <hr />
      <it-error-page [errorCode]="404"></it-error-page>
    </div>

    <div class="col-6">
      <h4>403 - Forbidden</h4>
      <hr />
      <it-error-page [errorCode]="403"></it-error-page>
    </div>
  </div>

  <div class="row mt-5">
    <div class="col-6">
      <h4>500 - Internal Server Error</h4>
      <hr />
      <it-error-page [errorCode]="500"></it-error-page>
    </div>

    <div class="col-6">
      <h4>Personalizzato</h4>
      <hr />
      <it-error-page
        showBackButton="true"
        showHomeButton="false"
        [errorCode]="503"
        showErrorCode="true"
        errorTitle="Servizio non disponibile"
        errorDescription="Mi dispiace, momentaneamente questa risorsa non \xE8 disponibile"></it-error-page>
    </div>
  </div>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-error-page-component-example',
  templateUrl: './error-page-component-example.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class ErrorPageComponentExampleComponent {}`]],template:function(o,s){o&1&&im(0,`it-error-page-route-example`)(1,`it-error-page-component-example`)(2,`it-source-display`,0)},dependencies:[q,z,D],encapsulation:2,changeDetection:1})}}return e})();var T=[{path:``,component:(()=>{class e{constructor(){this.component=oe$1.components.find(p=>p.name===`ItErrorPageComponent`)}static{this.ɵfac=function(o){return new(o||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-error-page-index`]],standalone:!1,decls:11,vars:1,consts:[[1,`bd-title`],[1,`bd-lead`],[`label`,`Esempi`,`active`,`true`,1,`pt-3`],[`label`,`API`,1,`pt-3`],[3,`component`]],template:function(o,s){o&1&&(Zi(0,`h1`,0),hb(1,`Error page`),nu(),Zi(2,`p`,1),hb(3,`Una semplice pagina di errore basata sullo status code della richiesta`),nu(),Zi(4,`it-tab-container`)(5,`it-tab-item`,2),im(6,`it-error-page-examples`),nu(),Zi(7,`it-tab-item`,3)(8,`h3`),hb(9,`ItErrorPageComponent`),nu(),im(10,`it-api-parameters`,4),nu()()),o&2&&(MD(10),om(`component`,s.component))},dependencies:[$,Ile,Fx,I],encapsulation:2,changeDetection:1})}}return e})()}];var w=(()=>{class e{static{this.ɵfac=function(o){return new(o||e)}}static{this.ɵmod=Pg({type:e})}static{this.ɵinj=fa({imports:[ua.forChild(T),ua]})}}return e})();var oe=(()=>{class e{static{this.ɵfac=function(o){return new(o||e)}}static{this.ɵmod=Pg({type:e})}static{this.ɵinj=fa({imports:[Zt,te,w]})}}return e})();export{oe as ErrorPageModule};