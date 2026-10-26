import{i as w}from"./chunk-B9dn0NrW.js";import{$ as MD,Cn as fa,Dn as g,Fn as hb,Hn as im,Zt as Zi,cr as om,ct as Pg,jt as Tw,mt as Rb,o as Ab,or as nu,pn as cu}from"./chunk-BXp14hLr.js";import{E as Zt}from"./chunk-CtdKxuHA.js";import{Jt as ua,f as Fx,ft as lt,h as Ile,s as C1,ut as kr,yt as ot}from"./main-JCJIXXB4.js";import{i as te,n as oe,r as q,t as $}from"./chunk-4-cg1OfJ.js";var A=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-language-switcher-example`]],standalone:!1,decls:9,vars:3,consts:[[`href`,`https://github.com/italia/design-angular-kit/#supporto-i18n-localizzazione`],[1,`bd-example`],[1,`mt-5`]],template:function(t,p){t&1&&(Zi(0,`p`),hb(1,` Per configurzione predefinità verranno mostrate le lingue disponibili configurate tramite `),Zi(2,`a`,0),hb(3,`ngx-translate`),nu()(),Zi(4,`div`,1),im(5,`it-language-switcher`),Zi(6,`p`,2),hb(7),Ab(8,`translate`),nu()()),t&2&&(MD(7),cu(`Risultato: `,Rb(8,1,`it.utils.select-language`)))},dependencies:[C1,lt],encapsulation:2,changeDetection:1})}}return e})();var P=(()=>{class e{constructor(){this.translateService=g(kr),this.availableLanguages=this.translateService.getLangs().map(a=>w(w({code:a,label:a},a===`it`&&{label:`Italiano`}),a===`en`&&{label:`English`}))}static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-language-switcher-custom-example`]],standalone:!1,decls:10,vars:5,consts:[[3,`innerText`],[1,`bd-example`],[3,`availableLanguages`],[1,`mt-5`]],template:function(t,p){t&1&&(Zi(0,`h3`),hb(1,`Personalizzazione`),nu(),Zi(2,`p`),hb(3,`Puoi personalizzare le label delle lingue, passando un `),im(4,`code`,0),nu(),Zi(5,`div`,1),im(6,`it-language-switcher`,2),Zi(7,`p`,3),hb(8),Ab(9,`translate`),nu()()),t&2&&(MD(4),om(`innerText`,`Array<AvailableLanguage>`),MD(2),om(`availableLanguages`,p.availableLanguages),MD(2),cu(`Risultato: `,Rb(9,3,`it.utils.select-language`)))},dependencies:[C1,lt],encapsulation:2,changeDetection:1})}}return e})();var j=(()=>{class e{constructor(){this.typescriptAppModule=`export class AppModule {
  constructor(
    private readonly translateService: TranslateService
  ) {
    translateService.addLangs(['es']);
  }
}`}static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-language-switcher-examples`]],standalone:!1,decls:10,vars:1,consts:[[`html`,`<p>
  Per configurzione predefinit\xE0 verranno mostrate le lingue disponibili configurate tramite
  <a href="https://github.com/italia/design-angular-kit/#supporto-i18n-localizzazione">ngx-translate</a>
</p>

<div class="bd-example">
  <it-language-switcher></it-language-switcher>

  <p class="mt-5">Risultato: /{/{ 'it.utils.select-language' | translate /}/}</p>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-language-switcher-example',
  templateUrl: './language-switcher-example.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class LanguageSwitcherExampleComponent {}`],[1,`my-5`],[1,`text-muted`],[3,`typescript`],[`html`,`<h3>Personalizzazione</h3>
<p>Puoi personalizzare le label delle lingue, passando un <code [innerText]="'Array<AvailableLanguage>'"></code></p>

<div class="bd-example">
  <it-language-switcher [availableLanguages]="availableLanguages"></it-language-switcher>

  <p class="mt-5">Risultato: /{/{ 'it.utils.select-language' | translate /}/}</p>
</div>`,`typescript`,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { AvailableLanguage } from 'design-angular-kit/interfaces/utils';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'it-language-switcher-custom-example',
  templateUrl: './language-switcher-custom-example.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class LanguageSwitcherCustomExampleComponent {
  private readonly translateService = inject(TranslateService);

  availableLanguages?: Array<AvailableLanguage>;

  constructor() {
    this.availableLanguages = this.translateService.getLangs().map(lang => ({
      code: lang,
      label: lang,
      ...(lang === 'it' && { label: 'Italiano' }),
      ...(lang === 'en' && { label: 'English' }),
    }));
  }
}`]],template:function(t,p){t&1&&(im(0,`it-language-switcher-example`)(1,`it-source-display`,0),Zi(2,`div`,1)(3,`p`),hb(4,`Puoi aggiungere altre lingue aggiungendo nel tuo `),Zi(5,`span`,2),hb(6,`app.module.ts`),nu()(),im(7,`it-source-display`,3),nu(),im(8,`it-language-switcher-custom-example`)(9,`it-source-display`,4)),t&2&&(MD(7),om(`typescript`,p.typescriptAppModule))},dependencies:[q,A,P],encapsulation:2,changeDetection:1})}}return e})();var G=[{path:``,component:(()=>{class e{constructor(){this.component=oe.components.find(a=>a.name===`ItLanguageSwitcherComponent`)}static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-language-switcher-index`]],standalone:!1,decls:11,vars:1,consts:[[1,`bd-title`],[1,`bd-lead`],[`label`,`Esempi`,`active`,`true`,1,`pt-3`],[`label`,`API`,1,`pt-3`],[3,`component`]],template:function(t,p){t&1&&(Zi(0,`h1`,0),hb(1,`Language Switcher`),nu(),Zi(2,`p`,1),hb(3,`Per cambiare facilmente la lingua del tuo sito web`),nu(),Zi(4,`it-tab-container`)(5,`it-tab-item`,2),im(6,`it-language-switcher-examples`),nu(),Zi(7,`it-tab-item`,3)(8,`h3`),hb(9,`LanguageSwitcherComponent`),nu(),im(10,`it-api-parameters`,4),nu()()),t&2&&(MD(10),om(`component`,p.component))},dependencies:[$,Ile,Fx,j],encapsulation:2,changeDetection:1})}}return e})()}];var F=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵmod=Pg({type:e})}static{this.ɵinj=fa({imports:[ua.forChild(G),ua]})}}return e})();var de=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵmod=Pg({type:e})}static{this.ɵinj=fa({imports:[Zt,te,ot,F]})}}return e})();export{de as LanguageSwitcherModule};