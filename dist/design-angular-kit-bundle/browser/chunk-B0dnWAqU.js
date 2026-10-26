import{$ as MD,Cn as fa,Dn as g,Fn as hb,Hn as im,Mn as gm,Qn as mb,Zt as Zi,cr as om,ct as Pg,it as OT,jt as Tw,lt as Pm,or as nu,qr as xT,w as Fm}from"./chunk-BXp14hLr.js";import{E as Zt}from"./chunk-CtdKxuHA.js";import{Bt as xo,Jt as ua,Nt as tn,Q as f1,Rt as x0,V as _Z,Wt as yf,_t as nr,f as Fx,gt as nP,h as Ile,kt as sP,m as HO,n as $O}from"./main-JCJIXXB4.js";import{i as te,n as oe,r as q$1,t as $}from"./chunk-4-cg1OfJ.js";var H=(()=>{class n{constructor(){this.notificationService=g(HO),this.withText=!0,this.type=nr.Standard,this.text=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...`}get NotificationPosition(){return $O}get NotificationType(){return nr}showNotification(){let g=this.withText?this.text:void 0;this.notificationService.addNotification({type:this.type,title:`Titolo Notifica`,message:g,dismissible:this.dismissible&&this.dismissible===`true`,position:this.position,duration:this.duration})}static{this.ɵfac=function(c){return new(c||n)}}static{this.ɵcmp=Tw({type:n,selectors:[[`it-notifications-example`]],standalone:!1,decls:35,vars:27,consts:[[1,`bd-example`],[`itButton`,`primary`,`size`,`sm`,3,`click`],[1,`row`,`mt-4`],[1,`form-check`,`col-3`],[`label`,`Con testo`,3,`ngModelChange`,`ngModel`],[`name`,`notification-dismissible`,`label`,`Eliminabile default`,3,`ngModelChange`,`value`,`ngModel`],[`name`,`notification-dismissible`,`value`,`true`,`label`,`Eliminabile`,3,`ngModelChange`,`ngModel`],[`name`,`notification-dismissible`,`value`,`false`,`label`,`Non eliminabile`,3,`ngModelChange`,`ngModel`],[`name`,`notification-type`,`label`,`Standard`,3,`ngModelChange`,`value`,`ngModel`],[`name`,`notification-type`,`label`,`Successo`,3,`ngModelChange`,`value`,`ngModel`],[`name`,`notification-type`,`label`,`Errore`,3,`ngModelChange`,`value`,`ngModel`],[`name`,`notification-type`,`label`,`Precauzione`,3,`ngModelChange`,`value`,`ngModel`],[`name`,`notification-type`,`label`,`Info`,3,`ngModelChange`,`value`,`ngModel`],[`name`,`notification-position`,`label`,`Default`,3,`ngModelChange`,`value`,`ngModel`],[`name`,`notification-position`,`label`,`Top`,3,`ngModelChange`,`value`,`ngModel`],[`name`,`notification-position`,`label`,`Bottom`,3,`ngModelChange`,`value`,`ngModel`],[`name`,`notification-position`,`label`,`Left`,3,`ngModelChange`,`value`,`ngModel`],[`name`,`notification-position`,`label`,`Right`,3,`ngModelChange`,`value`,`ngModel`],[`type`,`number`,`placeholder`,`Default`,3,`ngModelChange`,`min`,`ngModel`]],template:function(c,i){c&1&&(Zi(0,`h3`),hb(1,`Notifica con opzioni custom`),nu(),Zi(2,`div`,0)(3,`button`,1),gm(`click`,function(){return i.showNotification()}),hb(4,`Notifica`),nu(),Zi(5,`div`,2)(6,`div`,3)(7,`h5`),hb(8,`Opzioni`),nu(),Zi(9,`it-checkbox`,4),xT(),Fm(`ngModelChange`,function(t){return mb(i.withText,t)||(i.withText=t),t}),nu(),Zi(10,`it-radio-button`,5),xT(),Fm(`ngModelChange`,function(t){return mb(i.dismissible,t)||(i.dismissible=t),t}),nu(),Zi(11,`it-radio-button`,6),xT(),Fm(`ngModelChange`,function(t){return mb(i.dismissible,t)||(i.dismissible=t),t}),nu(),Zi(12,`it-radio-button`,7),xT(),Fm(`ngModelChange`,function(t){return mb(i.dismissible,t)||(i.dismissible=t),t}),nu()(),Zi(13,`div`,3)(14,`h5`),hb(15,`Tipo`),nu(),Zi(16,`it-radio-button`,8),xT(),Fm(`ngModelChange`,function(t){return mb(i.type,t)||(i.type=t),t}),nu(),Zi(17,`it-radio-button`,9),xT(),Fm(`ngModelChange`,function(t){return mb(i.type,t)||(i.type=t),t}),nu(),Zi(18,`it-radio-button`,10),xT(),Fm(`ngModelChange`,function(t){return mb(i.type,t)||(i.type=t),t}),nu(),Zi(19,`it-radio-button`,11),xT(),Fm(`ngModelChange`,function(t){return mb(i.type,t)||(i.type=t),t}),nu(),Zi(20,`it-radio-button`,12),xT(),Fm(`ngModelChange`,function(t){return mb(i.type,t)||(i.type=t),t}),nu()(),Zi(21,`div`,3)(22,`h5`),hb(23,`Posizione`),nu(),Zi(24,`it-radio-button`,13),xT(),Fm(`ngModelChange`,function(t){return mb(i.position,t)||(i.position=t),t}),nu(),Zi(25,`it-radio-button`,14),xT(),Fm(`ngModelChange`,function(t){return mb(i.position,t)||(i.position=t),t}),nu(),Zi(26,`it-radio-button`,15),xT(),Fm(`ngModelChange`,function(t){return mb(i.position,t)||(i.position=t),t}),nu(),Zi(27,`it-radio-button`,16),xT(),Fm(`ngModelChange`,function(t){return mb(i.position,t)||(i.position=t),t}),nu(),Zi(28,`it-radio-button`,17),xT(),Fm(`ngModelChange`,function(t){return mb(i.position,t)||(i.position=t),t}),nu()(),Zi(29,`div`,3)(30,`h5`),hb(31,`Durata `),Zi(32,`small`),hb(33,`(ms)`),nu()(),Zi(34,`it-input`,18),xT(),Fm(`ngModelChange`,function(t){return mb(i.duration,t)||(i.duration=t),t}),nu()()()()),c&2&&(MD(9),Pm(`ngModel`,i.withText),OT(),MD(),om(`value`,void 0),Pm(`ngModel`,i.dismissible),OT(),MD(),Pm(`ngModel`,i.dismissible),OT(),MD(),Pm(`ngModel`,i.dismissible),OT(),MD(4),om(`value`,i.NotificationType.Standard),Pm(`ngModel`,i.type),OT(),MD(),om(`value`,i.NotificationType.Success),Pm(`ngModel`,i.type),OT(),MD(),om(`value`,i.NotificationType.Error),Pm(`ngModel`,i.type),OT(),MD(),om(`value`,i.NotificationType.Warning),Pm(`ngModel`,i.type),OT(),MD(),om(`value`,i.NotificationType.Info),Pm(`ngModel`,i.type),OT(),MD(4),om(`value`,void 0),Pm(`ngModel`,i.position),OT(),MD(),om(`value`,i.NotificationPosition.Top),Pm(`ngModel`,i.position),OT(),MD(),om(`value`,i.NotificationPosition.Bottom),Pm(`ngModel`,i.position),OT(),MD(),om(`value`,i.NotificationPosition.Left),Pm(`ngModel`,i.position),OT(),MD(),om(`value`,i.NotificationPosition.Right),Pm(`ngModel`,i.position),OT(),MD(6),om(`min`,1e3),Pm(`ngModel`,i.duration),OT())},dependencies:[xo,nP,x0,sP,tn,yf],encapsulation:2,changeDetection:1})}}return n})();var Y=(()=>{class n{constructor(){this.notificationService=g(HO),this.duration=8e3,this.isDismissible=!0,this.notificationServiceExample=`constructor(
  private readonly notificationService: ItNotificationService
) {}

standardNotification(): void {
  this.notificationService.standard(
    'Notifica Standard', // Titolo
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...' // Messaggio
  );
}`,this.exampleOptionsHtml=`<it-notifications [duration]="duration >= 1000 ? duration : undefined"
                  [position]="position"
                  [dismissible]="isDismissible"></it-notifications>`,this.exampleOptionsTs=`duration = 8000;
isDismissible = true;
position?: NotificationPosition;
`}get NotificationPosition(){return $O}standardNotification(){this.notificationService.standard(`Notifica Standard`,`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...`)}static{this.ɵfac=function(c){return new(c||n)}}static{this.ɵcmp=Tw({type:n,selectors:[[`it-notifications-setup`]],standalone:!1,decls:40,vars:20,consts:[[3,`duration`,`position`,`dismissible`],[1,`bd-example`,`mb-4`],[1,`text-muted`,`fw-bold`],[3,`html`],[1,`mt-5`],[3,`typescript`],[1,`d-flex`,`justify-content-between`,`mt-5`,`mb-4`],[`itButton`,`primary`,`size`,`sm`,3,`click`],[3,`html`,`typescript`],[1,`row`,`mt-4`,`mx-1`],[1,`form-check`,`col-4`],[`label`,`Eliminabile`,3,`ngModelChange`,`ngModel`],[`name`,`notification-setup-position`,`label`,`Default`,3,`ngModelChange`,`value`,`ngModel`],[`name`,`notification-setup-position`,`label`,`Top`,3,`ngModelChange`,`value`,`ngModel`],[`name`,`notification-setup-position`,`label`,`Bottom`,3,`ngModelChange`,`value`,`ngModel`],[`name`,`notification-setup-position`,`label`,`Left`,3,`ngModelChange`,`value`,`ngModel`],[`name`,`notification-setup-position`,`label`,`Right`,3,`ngModelChange`,`value`,`ngModel`],[`type`,`number`,`placeholder`,`Default`,3,`ngModelChange`,`min`,`ngModel`]],template:function(c,i){c&1&&(Zi(0,`h3`),hb(1,`Setup notifiche`),nu(),im(2,`it-notifications`,0),Zi(3,`div`,1)(4,`p`),hb(5,`Importa il componente notifiche nel tuo `),Zi(6,`em`,2),hb(7,`app.component.html`),nu()(),im(8,`it-source-display`,3),Zi(9,`p`,4),hb(10,`Usa il `),Zi(11,`em`,2),hb(12,`ItNotificationService`),nu(),hb(13,` per mostrare una nuova notifica`),nu(),im(14,`it-source-display`,5),Zi(15,`div`,6)(16,`h4`),hb(17,`Opzioni usate di default per tutte le notifiche`),nu(),Zi(18,`button`,7),gm(`click`,function(){return i.standardNotification()}),hb(19,`Prova`),nu()(),im(20,`it-source-display`,8),Zi(21,`div`,9)(22,`div`,10)(23,`h5`),hb(24,`Opzioni`),nu(),Zi(25,`it-checkbox`,11),xT(),Fm(`ngModelChange`,function(t){return mb(i.isDismissible,t)||(i.isDismissible=t),t}),nu()(),Zi(26,`div`,10)(27,`h5`),hb(28,`Posizione`),nu(),Zi(29,`it-radio-button`,12),xT(),Fm(`ngModelChange`,function(t){return mb(i.position,t)||(i.position=t),t}),nu(),Zi(30,`it-radio-button`,13),xT(),Fm(`ngModelChange`,function(t){return mb(i.position,t)||(i.position=t),t}),nu(),Zi(31,`it-radio-button`,14),xT(),Fm(`ngModelChange`,function(t){return mb(i.position,t)||(i.position=t),t}),nu(),Zi(32,`it-radio-button`,15),xT(),Fm(`ngModelChange`,function(t){return mb(i.position,t)||(i.position=t),t}),nu(),Zi(33,`it-radio-button`,16),xT(),Fm(`ngModelChange`,function(t){return mb(i.position,t)||(i.position=t),t}),nu()(),Zi(34,`div`,10)(35,`h5`),hb(36,`Durata `),Zi(37,`small`),hb(38,`(ms)`),nu()(),Zi(39,`it-input`,17),xT(),Fm(`ngModelChange`,function(t){return mb(i.duration,t)||(i.duration=t),t}),nu()()()()),c&2&&(MD(2),om(`duration`,i.duration>=1e3?i.duration:void 0)(`position`,i.position)(`dismissible`,i.isDismissible),MD(6),om(`html`,`<it-notifications></it-notifications>`),MD(6),om(`typescript`,i.notificationServiceExample),MD(6),om(`html`,i.exampleOptionsHtml)(`typescript`,i.exampleOptionsTs),MD(5),Pm(`ngModel`,i.isDismissible),OT(),MD(4),om(`value`,void 0),Pm(`ngModel`,i.position),OT(),MD(),om(`value`,i.NotificationPosition.Top),Pm(`ngModel`,i.position),OT(),MD(),om(`value`,i.NotificationPosition.Bottom),Pm(`ngModel`,i.position),OT(),MD(),om(`value`,i.NotificationPosition.Left),Pm(`ngModel`,i.position),OT(),MD(),om(`value`,i.NotificationPosition.Right),Pm(`ngModel`,i.position),OT(),MD(6),om(`min`,1e3),Pm(`ngModel`,i.duration),OT())},dependencies:[q$1,xo,f1,nP,x0,sP,tn,yf],encapsulation:2,changeDetection:1})}}return n})();var q=(()=>{class n{constructor(){this.notificationService=g(HO),this.text=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...`}standardNotification(){this.notificationService.standard(`Notifica Standard`,this.text)}successNotification(){this.notificationService.success(`Notifica Successo`,this.text)}errorNotification(){this.notificationService.error(`Notifica Errore`,this.text)}warningNotification(){this.notificationService.warning(`Notifica Precauzione`,this.text)}infoNotification(){this.notificationService.info(`Notifica Info`,this.text)}static{this.ɵfac=function(c){return new(c||n)}}static{this.ɵcmp=Tw({type:n,selectors:[[`it-notifications-example-type`]],standalone:!1,decls:14,vars:1,consts:[[1,`bd-example`],[1,`d-flex`,`mb-2`],[`size`,`sm`,1,`btn-me`,3,`click`,`itButton`],[`itButton`,`success`,`size`,`sm`,1,`btn-me`,3,`click`],[`itButton`,`danger`,`size`,`sm`,1,`btn-me`,3,`click`],[`itButton`,`warning`,`size`,`sm`,1,`btn-me`,3,`click`],[`itButton`,`info`,`size`,`sm`,1,`btn-me`,3,`click`]],template:function(c,i){c&1&&(Zi(0,`h3`),hb(1,`Tipi di notifica`),nu(),Zi(2,`div`,0)(3,`div`,1)(4,`button`,2),gm(`click`,function(){return i.standardNotification()}),hb(5,`Notifica Standard`),nu(),Zi(6,`button`,3),gm(`click`,function(){return i.successNotification()}),hb(7,`Notifica Successo`),nu(),Zi(8,`button`,4),gm(`click`,function(){return i.errorNotification()}),hb(9,`Notifica Errore`),nu(),Zi(10,`button`,5),gm(`click`,function(){return i.warningNotification()}),hb(11,`Notifica Precauzione`),nu(),Zi(12,`button`,6),gm(`click`,function(){return i.infoNotification()}),hb(13,`Notifica Info`),nu()()()),c&2&&(MD(4),om(`itButton`,void 0))},dependencies:[xo],encapsulation:2,changeDetection:1})}}return n})();var G=(()=>{class n{static{this.ɵfac=function(c){return new(c||n)}}static{this.ɵcmp=Tw({type:n,selectors:[[`it-notifications-examples`]],standalone:!1,decls:5,vars:0,consts:[[`html`,`<h3>Tipi di notifica</h3>

<div class="bd-example">
  <div class="d-flex mb-2">
    <button class="btn-me" [itButton]="undefined" size="sm" (click)="standardNotification()">Notifica Standard</button>
    <button class="btn-me" itButton="success" size="sm" (click)="successNotification()">Notifica Successo</button>
    <button class="btn-me" itButton="danger" size="sm" (click)="errorNotification()">Notifica Errore</button>
    <button class="btn-me" itButton="warning" size="sm" (click)="warningNotification()">Notifica Precauzione</button>
    <button class="btn-me" itButton="info" size="sm" (click)="infoNotification()">Notifica Info</button>
  </div>
</div>`,`typescript`,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ItNotificationService } from 'design-angular-kit/services/notification/notification.service';

@Component({
  selector: 'it-notifications-example-type',
  templateUrl: './notifications-example-type.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class NotificationsExampleTypeComponent {
  private readonly notificationService = inject(ItNotificationService);

  private text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...';

  standardNotification(): void {
    this.notificationService.standard('Notifica Standard', this.text);
  }

  successNotification(): void {
    this.notificationService.success('Notifica Successo', this.text);
  }

  errorNotification(): void {
    this.notificationService.error('Notifica Errore', this.text);
  }

  warningNotification(): void {
    this.notificationService.warning('Notifica Precauzione', this.text);
  }

  infoNotification(): void {
    this.notificationService.info('Notifica Info', this.text);
  }
}`],[`html`,`<h3>Notifica con opzioni custom</h3>

<div class="bd-example">
  <button itButton="primary" size="sm" (click)="showNotification()">Notifica</button>

  <div class="row mt-4">
    <div class="form-check col-3">
      <h5>Opzioni</h5>
      <it-checkbox [(ngModel)]="withText" label="Con testo"></it-checkbox>
      <it-radio-button
        name="notification-dismissible"
        [value]="undefined"
        label="Eliminabile default"
        [(ngModel)]="dismissible"></it-radio-button>
      <it-radio-button name="notification-dismissible" value="true" label="Eliminabile" [(ngModel)]="dismissible"></it-radio-button>
      <it-radio-button name="notification-dismissible" value="false" label="Non eliminabile" [(ngModel)]="dismissible"></it-radio-button>
    </div>
    <div class="form-check col-3">
      <h5>Tipo</h5>
      <it-radio-button name="notification-type" [value]="NotificationType.Standard" label="Standard" [(ngModel)]="type"></it-radio-button>
      <it-radio-button name="notification-type" [value]="NotificationType.Success" label="Successo" [(ngModel)]="type"></it-radio-button>
      <it-radio-button name="notification-type" [value]="NotificationType.Error" label="Errore" [(ngModel)]="type"></it-radio-button>
      <it-radio-button name="notification-type" [value]="NotificationType.Warning" label="Precauzione" [(ngModel)]="type"></it-radio-button>
      <it-radio-button name="notification-type" [value]="NotificationType.Info" label="Info" [(ngModel)]="type"></it-radio-button>
    </div>
    <div class="form-check col-3">
      <h5>Posizione</h5>
      <it-radio-button name="notification-position" [value]="undefined" label="Default" [(ngModel)]="position"></it-radio-button>
      <it-radio-button name="notification-position" [value]="NotificationPosition.Top" label="Top" [(ngModel)]="position"></it-radio-button>
      <it-radio-button
        name="notification-position"
        [value]="NotificationPosition.Bottom"
        label="Bottom"
        [(ngModel)]="position"></it-radio-button>
      <it-radio-button
        name="notification-position"
        [value]="NotificationPosition.Left"
        label="Left"
        [(ngModel)]="position"></it-radio-button>
      <it-radio-button
        name="notification-position"
        [value]="NotificationPosition.Right"
        label="Right"
        [(ngModel)]="position"></it-radio-button>
    </div>
    <div class="form-check col-3">
      <h5>Durata <small>(ms)</small></h5>
      <it-input type="number" [min]="1000" placeholder="Default" [(ngModel)]="duration"></it-input>
    </div>
  </div>
</div>`,`typescript`,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ItNotificationService } from 'design-angular-kit/services/notification/notification.service';
import { NotificationPosition, NotificationType } from 'design-angular-kit/interfaces/core';

@Component({
  changeDetection: ChangeDetectionStrategy.Eager,
  selector: 'it-notifications-example',
  templateUrl: './notifications-example.component.html',
  standalone: false,
})
export class NotificationsExampleComponent {
  private readonly notificationService: ItNotificationService = inject(ItNotificationService);

  withText = true;
  type: NotificationType = NotificationType.Standard;
  duration?: number;
  dismissible?: 'true' | 'false';
  position?: NotificationPosition;

  get NotificationPosition(): typeof NotificationPosition {
    return NotificationPosition;
  }
  get NotificationType(): typeof NotificationType {
    return NotificationType;
  }

  private text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...';

  showNotification(): void {
    const message = this.withText ? this.text : undefined;
    this.notificationService.addNotification({
      type: this.type,
      title: 'Titolo Notifica',
      message: message,
      dismissible: this.dismissible && this.dismissible === 'true',
      position: this.position,
      duration: this.duration,
    });

    // You can also use helper methods \`standard\`, \`success\`, \`error\`, \`warning\`, \`info\`
    // this.notificationService.success(
    //   'Titolo Notifica',
    //   this.withText && this.text,
    //   this.dismissible,
    //   this.duration,
    //   this.position
    // );
  }
}`]],template:function(c,i){c&1&&im(0,`it-notifications-setup`)(1,`it-notifications-example-type`)(2,`it-source-display`,0)(3,`it-notifications-example`)(4,`it-source-display`,1)},dependencies:[q$1,H,Y,q],encapsulation:2,changeDetection:1})}}return n})();var ni=[{path:``,component:(()=>{class n{constructor(){this.component=oe.components.find(g=>g.name===`ItNotificationsComponent`),this.service=oe.injectables.find(g=>g.name===`ItNotificationService`)}static{this.ɵfac=function(c){return new(c||n)}}static{this.ɵcmp=Tw({type:n,selectors:[[`it-notifications-index`]],standalone:!1,decls:14,vars:2,consts:[[1,`bd-title`],[1,`bd-lead`],[`label`,`Esempi`,`active`,`true`,1,`pt-3`],[`label`,`API`,1,`pt-3`],[3,`component`],[3,`service`]],template:function(c,i){c&1&&(Zi(0,`h1`,0),hb(1,`Notifiche`),nu(),Zi(2,`p`,1),hb(3,`Per attirare l’attenzione su brevi messaggi di stato.`),nu(),Zi(4,`it-tab-container`)(5,`it-tab-item`,2),im(6,`it-notifications-examples`),nu(),Zi(7,`it-tab-item`,3)(8,`h3`),hb(9,`NotificationComponent`),nu(),im(10,`it-api-parameters`,4),Zi(11,`h3`),hb(12,`NotificationService`),nu(),im(13,`it-api-parameters`,5),nu()()),c&2&&(MD(10),om(`component`,i.component),MD(3),om(`service`,i.service))},dependencies:[$,Ile,Fx,G],encapsulation:2,changeDetection:1})}}return n})()}];var K=(()=>{class n{static{this.ɵfac=function(c){return new(c||n)}}static{this.ɵmod=Pg({type:n})}static{this.ɵinj=fa({imports:[ua.forChild(ni),ua]})}}return n})();var Ai=(()=>{class n{static{this.ɵfac=function(c){return new(c||n)}}static{this.ɵmod=Pg({type:n})}static{this.ɵinj=fa({imports:[Zt,te,K,_Z]})}}return n})();export{Ai as NotificationsModule};