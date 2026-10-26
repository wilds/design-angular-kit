import{$ as MD,Cn as fa,Fn as hb,Hn as im,Zt as Zi,cr as om,ct as Pg,jt as Tw,l as BI,or as nu}from"./chunk-BXp14hLr.js";import"./chunk-CtdKxuHA.js";import{Jt as ua,f as Fx,h as Ile,qt}from"./main-JCJIXXB4.js";import{i as te,n as oe,r as q,t as $}from"./chunk-4-cg1OfJ.js";var y=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-navscroll-examples`]],standalone:!1,decls:6,vars:0,consts:[[`html`,`<it-navscroll [header]="header" [items]="items"></it-navscroll>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavscrollItems } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-navscroll-default-example',
  templateUrl: './navscroll-default-example.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class NavscrollDefaultExampleComponent {
  readonly header = 'Default example';
  readonly items = [
    {
      title: 'Prima Sezione',
      html: '<b>Testo prima sezione</b>',
      href: '#',
      childs: [
        {
          title: 'Sottosezione 1.1',
          text: 'Testo sottosezione 1.1',
          href: '#',
          childs: [
            {
              title: 'Sottosezione 1.1.1',
              text: 'Testo sottosezione 1.1.1',
              href: '#',
              childs: [
                {
                  title: 'Sottosezione 1.1.1.1',
                  text: 'Testo sottosezione 1.1.1.1',
                  href: '#',
                  childs: [],
                },
              ],
            },
            {
              title: 'Sottosezione 1.1.2',
              text: 'Testo sottosezione 1.1.2',
              href: '#',
              childs: [],
            },
          ],
        },
        {
          title: 'Sottosezione 1.2',
          text: 'Testo sottosezione 1.2',
          href: '#',
          childs: [],
        },
        {
          title: 'Sottosezione 1.3',
          text: 'Testo sottosezione 1.3',
          href: '#',
          childs: [],
        },
      ],
    },
    {
      title: 'Seconda Sezione',
      text: 'Testo seconda sezione',
      href: '#',
      childs: [
        {
          title: 'Sottosezione 2.1',
          text: 'Testo sottosezione 2.1',
          href: '#',
          childs: [],
        },
        {
          title: 'Sottosezione 2.2',
          text: 'Testo sottosezione 2.2',
          href: '#',
          childs: [],
        },
      ],
    },
  ] satisfies NavscrollItems;
}`],[`html`,`<ng-template #contentTemplate>
  <h1>This is a custom template</h1>
  <p>All the paragraphs will be displayed here</p>
</ng-template>

<it-navscroll [header]="header" [items]="items" [pageSectionsTemplate]="contentTemplate"></it-navscroll>`,`typescript`,`import { Component } from '@angular/core';
import { NavscrollItems } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-navscroll-custom-template-example',
  templateUrl: './navscroll-custom-template-example.component.html',
})
export class NavscrollCustomTemplateExampleComponent {
  readonly header = 'Custom template example';
  readonly items = [
    {
      title: 'Prima Sezione',
      html: '<b>Testo prima sezione</b>',
      href: '#',
      childs: [
        {
          title: 'Sottosezione 1.1',
          text: 'Testo sottosezione 1.1',
          href: '#',
          childs: [
            {
              title: 'Sottosezione 1.1.1',
              text: 'Testo sottosezione 1.1.1',
              href: '#',
              childs: [
                {
                  title: 'Sottosezione 1.1.1.1',
                  text: 'Testo sottosezione 1.1.1.1',
                  href: '#',
                  childs: [],
                },
              ],
            },
            {
              title: 'Sottosezione 1.1.2',
              text: 'Testo sottosezione 1.1.2',
              href: '#',
              childs: [],
            },
          ],
        },
        {
          title: 'Sottosezione 1.2',
          text: 'Testo sottosezione 1.2',
          href: '#',
          childs: [],
        },
        {
          title: 'Sottosezione 1.3',
          text: 'Testo sottosezione 1.3',
          href: '#',
          childs: [],
        },
      ],
    },
    {
      title: 'Seconda Sezione',
      text: 'Testo seconda sezione',
      href: '#',
      childs: [
        {
          title: 'Sottosezione 2.1',
          text: 'Testo sottosezione 2.1',
          href: '#',
          childs: [],
        },
        {
          title: 'Sottosezione 2.2',
          text: 'Testo sottosezione 2.2',
          href: '#',
          childs: [],
        },
      ],
    },
  ] satisfies NavscrollItems;
}`]],template:function(t,c){t&1&&(Zi(0,`h3`),hb(1,`Esempio di default`),nu(),im(2,`it-source-display`,0),Zi(3,`h3`),hb(4,`Esempio con template personalizzato`),nu(),im(5,`it-source-display`,1))},dependencies:[q],encapsulation:2,changeDetection:1})}}return e})();var b=[{path:``,component:(()=>{class e{constructor(){this.component=oe.components.find(i=>i.name===`ItNavscrollComponent`)}static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-navscroll-index`]],standalone:!1,decls:13,vars:2,consts:[[1,`bd-title`],[1,`bd-lead`],[3,`innerHTML`],[`routerLink`,`/esempi/navscroll`],[`label`,`Esempi`,`active`,`true`,1,`pt-3`],[`label`,`API`,1,`pt-3`],[3,`component`]],template:function(t,c){t&1&&(Zi(0,`h1`,0),hb(1,`Navscroll`),nu(),Zi(2,`p`,1),hb(3,`Componente che presenta liste di link con ancore a sezioni della pagina in cui è contenuto.`),nu(),im(4,`div`,2),Zi(5,`p`)(6,`a`,3),hb(7,`Esempio funzionante `),nu()(),Zi(8,`it-tab-container`)(9,`it-tab-item`,4),im(10,`it-navscroll-examples`),nu(),Zi(11,`it-tab-item`,5),im(12,`it-api-parameters`,6),nu()()),t&2&&(MD(4),om(`innerHTML`,c.component.description,BI),MD(8),om(`component`,c.component))},dependencies:[qt,$,Ile,Fx,y],encapsulation:2,changeDetection:1})}}return e})()}];var D=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵmod=Pg({type:e})}static{this.ɵinj=fa({imports:[ua.forChild(b),ua]})}}return e})();var V=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵmod=Pg({type:e})}static{this.ɵinj=fa({imports:[D,te]})}}return e})();export{V as NavscrollModule};