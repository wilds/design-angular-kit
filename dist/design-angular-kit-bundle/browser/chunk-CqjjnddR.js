import{$ as MD,Cn as fa,Fn as hb,Hn as im,Zt as Zi,cr as om,ct as Pg,jt as Tw,l as BI,or as nu}from"./chunk-BXp14hLr.js";import{E as Zt}from"./chunk-CtdKxuHA.js";import{Jt as ua,ct as iP,f as Fx,h as Ile}from"./main-JCJIXXB4.js";import{i as te,n as oe,r as q,t as $}from"./chunk-4-cg1OfJ.js";var L=(()=>{class e{constructor(){this.timelineElements=[{title:`LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT...`,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,signature:`di Federico De Paolis`,pin:{text:`MAGGIO 2024`,type:`evidence`},category:{title:`Categoria`,link:`#`},eventDate:new Date(2024,4,10)},{title:`LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR...`,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,pin:{text:`GIUGNO 2024`,type:`evidence`}},{title:`LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT...`,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,signature:`di Federico De Paolis`,pin:{text:`LUGLIO 2024`,type:`evidence`},category:{title:`Categoria`,link:`#`},eventDate:new Date(2024,6,10)},{title:`LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR...`,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,pin:{text:`AGOSTO 2024`,type:`now`}},{title:`LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT...`,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,signature:`di Federico De Paolis`,pin:{text:`SETTEMBRE 2024`},category:{title:`Categoria`,link:`#`},eventDate:new Date(2024,8,10)},{title:`LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR...`,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,pin:{text:`OTTOBRE 2024`}},{title:`LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT...`,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,signature:`di Federico De Paolis`,pin:{text:`NOVEMBRE 2024`},category:{title:`Categoria`,link:`#`},eventDate:new Date(2024,10,10)},{title:`LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR...`,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,pin:{text:`DICEMBRE 2024`}}],this.defaultDateFormat=`dd/MM/yyyy`}static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-timeline-default-example`]],standalone:!1,decls:5,vars:2,consts:[[1,`bd-example`],[1,`example-section`],[3,`timelineElements`,`dateFormat`]],template:function(t,m){t&1&&(Zi(0,`h3`),hb(1,`Esempi`),nu(),Zi(2,`div`,0)(3,`div`,1),im(4,`it-timeline`,2),nu()()),t&2&&(MD(4),om(`timelineElements`,m.timelineElements)(`dateFormat`,m.defaultDateFormat))},dependencies:[iP],encapsulation:2,changeDetection:1})}}return e})();var R=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-timeline-examples`]],standalone:!1,decls:2,vars:0,consts:[[`html`,`<h3>Esempi</h3>

<div class="bd-example">
  <div class="example-section">
    <it-timeline [timelineElements]="timelineElements" [dateFormat]="defaultDateFormat" />
  </div>
</div>`,`typescript`,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TimelineElement } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-timeline-default-example',
  templateUrl: './timeline-default-example.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class TimelineDefaultExampleComponent {
  timelineElements: TimelineElement[] = [
    {
      title: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT...',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      signature: 'di Federico De Paolis',
      pin: {
        text: 'MAGGIO 2024',
        type: 'evidence',
      },
      category: {
        title: 'Categoria',
        link: '#',
      },
      eventDate: new Date(2024, 4, 10),
    },
    {
      title: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR...',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      pin: {
        text: 'GIUGNO 2024',
        type: 'evidence',
      },
    },
    {
      title: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT...',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      signature: 'di Federico De Paolis',
      pin: {
        text: 'LUGLIO 2024',
        type: 'evidence',
      },
      category: {
        title: 'Categoria',
        link: '#',
      },
      eventDate: new Date(2024, 6, 10),
    },
    {
      title: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR...',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      pin: {
        text: 'AGOSTO 2024',
        type: 'now',
      },
    },
    {
      title: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT...',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      signature: 'di Federico De Paolis',
      pin: {
        text: 'SETTEMBRE 2024',
      },
      category: {
        title: 'Categoria',
        link: '#',
      },
      eventDate: new Date(2024, 8, 10),
    },
    {
      title: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR...',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      pin: {
        text: 'OTTOBRE 2024',
      },
    },
    {
      title: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT...',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      signature: 'di Federico De Paolis',
      pin: {
        text: 'NOVEMBRE 2024',
      },
      category: {
        title: 'Categoria',
        link: '#',
      },
      eventDate: new Date(2024, 10, 10),
    },
    {
      title: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR...',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      pin: {
        text: 'DICEMBRE 2024',
      },
    },
  ];
  defaultDateFormat: string = 'dd/MM/yyyy';
}`]],template:function(t,m){t&1&&im(0,`it-timeline-default-example`)(1,`it-source-display`,0)},dependencies:[q,L],encapsulation:2,changeDetection:1})}}return e})();var N=[{path:``,component:(()=>{class e{constructor(){this.component=oe.components.find(i=>i.name===`ItTimelineComponent`)}static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=Tw({type:e,selectors:[[`it-timeline-index`]],standalone:!1,decls:10,vars:2,consts:[[1,`bd-title`],[1,`bd-lead`],[3,`innerHTML`],[`label`,`Esempi`,`active`,`true`,1,`pt-3`],[`label`,`API`,1,`pt-3`],[3,`component`]],template:function(t,m){t&1&&(Zi(0,`h1`,0),hb(1,`Timeline`),nu(),Zi(2,`p`,1),hb(3,`Componente per la visualizzazione cronologica di eventi.`),nu(),im(4,`div`,2),Zi(5,`it-tab-container`)(6,`it-tab-item`,3),im(7,`it-timeline-examples`),nu(),Zi(8,`it-tab-item`,4),im(9,`it-api-parameters`,5),nu()()),t&2&&(MD(4),om(`innerHTML`,m.component.description,BI),MD(5),om(`component`,m.component))},dependencies:[$,Ile,Fx,R],encapsulation:2,changeDetection:1})}}return e})()}];var P=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵmod=Pg({type:e})}static{this.ɵinj=fa({imports:[ua.forChild(N),ua]})}}return e})();var Y=(()=>{class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵmod=Pg({type:e})}static{this.ɵinj=fa({imports:[Zt,te,P]})}}return e})();export{Y as TimelineModule};