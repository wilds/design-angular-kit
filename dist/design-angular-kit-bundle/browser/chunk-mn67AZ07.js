import{$ as MD,An as gd,C as Em,Cn as fa,Dn as g,E as GC,En as fv,Fn as hb,Fr as ud,Gr as wv,Hn as im,In as hd,Mn as gm,N as He,Rt as WC,Y as Ky,Zt as Zi,_n as dv,br as qs,cr as om,ct as Pg,jt as Tw,l as BI,or as nu,u as Be,ut as Pt}from"./chunk-BXp14hLr.js";import{E as Zt,T as Yr,p as J}from"./chunk-CtdKxuHA.js";import{$ as fP,Jt as ua,V as _Z,f as Fx,h as Ile,ot as hP}from"./main-JCJIXXB4.js";import{i as te,n as oe,r as q,t as $}from"./chunk-4-cg1OfJ.js";var ee=[`uploadDragDropComponent`];var W=(()=>{class o{onDragUploadStart(){fv(1e3).pipe(Pt(100),Be(t=>(t+1)*10)).subscribe(t=>{this.uploadDragDropComponent.progress(t),t>=100&&setTimeout(()=>{this.uploadDragDropComponent.reset()},2e3)})}static{this.ɵfac=function(e){return new(e||o)}}static{this.ɵcmp=Tw({type:o,selectors:[[`it-upload-drag-drop-example`]],viewQuery:function(e,i){if(e&1&&Em(ee,5),e&2){let n;WC(n=GC())&&(i.uploadDragDropComponent=n.first)}},standalone:!1,decls:7,vars:0,consts:[[`uploadDragDropComponent`,``],[1,`bd-example`],[1,`row`,`my-2`],[1,`col`],[3,`fileStartUpload`]],template:function(e,i){e&1&&(Zi(0,`h3`),hb(1,`Upload Drag&drop`),nu(),Zi(2,`div`,1)(3,`div`,2)(4,`div`,3)(5,`it-upload-drag-drop`,4,0),gm(`fileStartUpload`,function(){return i.onDragUploadStart()}),nu()()()())},dependencies:[hP],encapsulation:2,changeDetection:1})}}return o})();var V=(()=>{class o{constructor(){this.httpClient=g(Yr),this.uploadedFileList=[{id:0,file:new File([],`nome-file-01.pdf`)},{id:1,file:new File([],`nome-file-02-nome-file-lungo-per-ellissi.doc`)},{id:2,file:new File([],`nome-file-03.png`),progress:43,removable:!0},{id:3,file:new File([],`nome-file-04.png`),error:!0,removable:!0}]}onUpdateFileList(t){let e=Array.from(t).map((i,n)=>({id:n+this.uploadedFileList.length,file:i,removable:!0}));this.uploadedFileList=[...this.uploadedFileList,...e]}onDeleteFileList(t){this.uploadedFileList=this.uploadedFileList.filter(e=>e.id!==t.id)}httpClientExample(){let t=this.uploadedFileList[0];t.progress=1,t.error=void 0,t.removable=!1,He(t.file.arrayBuffer()).pipe(hd(e=>{let i=[...new Uint8Array(e)];return this.httpClient.post(`url`,i,{reportProgress:!0,observe:`events`})}),gd(e=>{e.type===J.UploadProgress&&(t.progress=Math.round(e.loaded/(e.total||1)*100))}),wv(e=>e.type!==J.Response),Be(e=>e.body),gd(()=>{t.progress=100}),qs(e=>(t.progress=void 0,t.removable=!0,t.error=!0,t.tooltip=e.message,Ky(null))),ud(()=>{!t.error&&t.progress&&t.progress<100&&(t.progress=void 0,t.removable=!0,t.error=!0,t.tooltip=`Incomplete upload error`)}))}static{this.ɵfac=function(e){return new(e||o)}}static{this.ɵcmp=Tw({type:o,selectors:[[`it-upload-file-list-example`]],standalone:!1,decls:6,vars:1,consts:[[1,`bd-example`],[1,`row`,`my-2`],[1,`col`],[3,`uploadFiles`,`deleteItem`,`fileList`]],template:function(e,i){e&1&&(Zi(0,`h3`),hb(1,`Upload con lista di file`),nu(),Zi(2,`div`,0)(3,`div`,1)(4,`div`,2)(5,`it-upload-file-list`,3),gm(`uploadFiles`,function(r){return i.onUpdateFileList(r)})(`deleteItem`,function(r){return i.onDeleteFileList(r)}),nu()()()()),e&2&&(MD(5),om(`fileList`,i.uploadedFileList))},dependencies:[fP],encapsulation:2,changeDetection:1})}}return o})();var G=(()=>{class o{constructor(){this.httpClient=g(Yr),this.uploadedFileList=[{id:0,file:new File([],`nome-file-01.pdf`)},{id:1,file:new File([],`nome-file-02-nome-file-lungo-per-ellissi.doc`)},{id:2,file:new File([],`nome-file-03.png`),progress:43,removable:!0},{id:3,file:new File([],`nome-file-04.png`),error:!0,removable:!0}]}onUpdateFileList(t){let e=Array.from(t).map((i,n)=>({id:n+this.uploadedFileList.length,file:i,removable:!0}));this.uploadedFileList=[...this.uploadedFileList,...e]}onDeleteFileList(t){this.uploadedFileList=this.uploadedFileList.filter(e=>e.id!==t.id)}httpClientExample(){let t=this.uploadedFileList[0];t.progress=1,t.error=void 0,t.removable=!1,He(t.file.arrayBuffer()).pipe(hd(e=>{let i=[...new Uint8Array(e)];return this.httpClient.post(`url`,i,{reportProgress:!0,observe:`events`})}),gd(e=>{e.type===J.UploadProgress&&(t.progress=Math.round(e.loaded/(e.total||1)*100))}),wv(e=>e.type!==J.Response),Be(e=>e.body),gd(()=>{t.progress=100}),qs(e=>(t.progress=void 0,t.removable=!0,t.error=!0,t.tooltip=e.message,Ky(null))),ud(()=>{!t.error&&t.progress&&t.progress<100&&(t.progress=void 0,t.removable=!0,t.error=!0,t.tooltip=`Incomplete upload error`)}))}static{this.ɵfac=function(e){return new(e||o)}}static{this.ɵcmp=Tw({type:o,selectors:[[`it-upload-file-list-custom-label-example`]],standalone:!1,decls:6,vars:1,consts:[[1,`bd-example`],[1,`row`,`my-2`],[1,`col`],[`label`,`Carica`,3,`uploadFiles`,`deleteItem`,`fileList`]],template:function(e,i){e&1&&(Zi(0,`h3`),hb(1,`Upload con lista di file con label personalizzata`),nu(),Zi(2,`div`,0)(3,`div`,1)(4,`div`,2)(5,`it-upload-file-list`,3),gm(`uploadFiles`,function(r){return i.onUpdateFileList(r)})(`deleteItem`,function(r){return i.onDeleteFileList(r)}),nu()()()()),e&2&&(MD(5),om(`fileList`,i.uploadedFileList))},dependencies:[fP],encapsulation:2,changeDetection:1})}}return o})();var K=(()=>{class o{constructor(){this.httpClient=g(Yr),this.uploadedImageList=[]}ngOnInit(){let t=[`https://picsum.photos/40/40?image=1055`,`https://picsum.photos/80/40?image=1056`,`https://picsum.photos/40/40?image=1057`,`https://picsum.photos/120/200?image=1058`].map(e=>this.httpClient.get(e,{responseType:`blob`}));dv(t).subscribe(e=>{this.uploadedImageList=e.map((i,n)=>{let r=n===1?`nome-file-2-nome-file-lungo-per-ellissi.jpg`:`nome-file-${n+1}.jpg`;return{id:n,file:new File([i],r),removable:n>1,progress:n===2?45:void 0,error:n===3}})})}onUpdateImageList(t){let e=Array.from(t).map((i,n)=>({id:n+this.uploadedImageList.length,file:i,removable:!0}));this.uploadedImageList=[...this.uploadedImageList,...e]}onDeleteImageList(t){this.uploadedImageList=this.uploadedImageList.filter(e=>e.id!==t.id)}static{this.ɵfac=function(e){return new(e||o)}}static{this.ɵcmp=Tw({type:o,selectors:[[`it-upload-image-list-example`]],standalone:!1,decls:6,vars:1,consts:[[1,`bd-example`],[1,`row`,`my-2`],[1,`col`],[`images`,`true`,3,`uploadFiles`,`deleteItem`,`fileList`]],template:function(e,i){e&1&&(Zi(0,`h3`),hb(1,`Con anteprima delle immagini`),nu(),Zi(2,`div`,0)(3,`div`,1)(4,`div`,2)(5,`it-upload-file-list`,3),gm(`uploadFiles`,function(r){return i.onUpdateImageList(r)})(`deleteItem`,function(r){return i.onDeleteImageList(r)}),nu()()()()),e&2&&(MD(5),om(`fileList`,i.uploadedImageList))},dependencies:[fP],encapsulation:2,changeDetection:1})}}return o})();var X=(()=>{class o{static{this.ɵfac=function(e){return new(e||o)}}static{this.ɵcmp=Tw({type:o,selectors:[[`it-upload-examples`]],standalone:!1,decls:8,vars:0,consts:[[`html`,`<h3>Upload con lista di file</h3>
<div class="bd-example">
  <div class="row my-2">
    <div class="col">
      <it-upload-file-list
        [fileList]="uploadedFileList"
        (uploadFiles)="onUpdateFileList($event)"
        (deleteItem)="onDeleteFileList($event)"></it-upload-file-list>
    </div>
  </div>
</div>`,`typescript`,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { UploadFileListItem } from 'design-angular-kit/interfaces/form';
import { catchError, finalize, from, map, of, skipWhile, switchMap, tap } from 'rxjs';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'it-upload-file-list-example',
  templateUrl: './upload-file-list-example.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class UploadFileListExampleComponent {
  private readonly httpClient = inject(HttpClient);

  uploadedFileList: Array<UploadFileListItem> = [
    {
      id: 0,
      file: new File([], 'nome-file-01.pdf'),
    },
    {
      id: 1,
      file: new File([], 'nome-file-02-nome-file-lungo-per-ellissi.doc'),
    },
    {
      id: 2,
      file: new File([], 'nome-file-03.png'),
      progress: 43,
      removable: true,
    },
    {
      id: 3,
      file: new File([], 'nome-file-04.png'),
      error: true,
      removable: true,
    },
  ];

  onUpdateFileList(files: FileList): void {
    const newFiles: Array<UploadFileListItem> = Array.from(files).map((file, index) => ({
      id: index + this.uploadedFileList.length, // I set an id, useful when deleting
      file, // The uploaded file
      removable: true, // set new file as removable
    }));

    this.uploadedFileList = [...this.uploadedFileList, ...newFiles];
  }

  onDeleteFileList(item: UploadFileListItem): void {
    this.uploadedFileList = this.uploadedFileList.filter(i => i.id !== item.id);
  }

  /**
   * Example to upload file with HttpClient
   */
  httpClientExample(): void {
    const fileToUpload = this.uploadedFileList[0];
    fileToUpload.progress = 1;
    fileToUpload.error = undefined;
    fileToUpload.removable = false;

    from(fileToUpload.file.arrayBuffer()).pipe(
      // Converting the file to arrayBuffer
      switchMap(arrayBuffer => {
        const bytes = [...new Uint8Array(arrayBuffer)]; // Convert arrayBuffer to Array<number>

        // NOTE: File conversion depends on your server / API
        // If you want to transform the file to base64 you can use the helper function
        // import {FileUtils} from "design-angular-kit";
        // const base64 = FileUtils.fileToBase64(fileToUpload.file)

        return this.httpClient.post<any>('url', bytes, {
          reportProgress: true,
          observe: 'events',
        });
      }),
      tap(event => {
        // Update the progress request status
        if (event.type === HttpEventType.UploadProgress) {
          fileToUpload.progress = Math.round((event.loaded / (event.total || 1)) * 100);
        }
      }),
      skipWhile(event => event.type !== HttpEventType.Response), // skip while the request not is complete
      map(event => (event as HttpResponse<any>).body), // request is complete with body
      tap(() => {
        fileToUpload.progress = 100;
      }),
      catchError(error => {
        fileToUpload.progress = undefined;
        fileToUpload.removable = true;
        fileToUpload.error = true;
        fileToUpload.tooltip = error.message; // Show error message as tooltip
        return of(null); // File upload failed
      }),
      finalize(() => {
        if (!fileToUpload.error && fileToUpload.progress && fileToUpload.progress < 100) {
          // There are no errors but the file upload is not complete
          fileToUpload.progress = undefined;
          fileToUpload.removable = true;
          fileToUpload.error = true;
          fileToUpload.tooltip = 'Incomplete upload error'; // Show error message as tooltip
        }
      })
    );
  }
}`],[`html`,`<h3>Con anteprima delle immagini</h3>
<div class="bd-example">
  <div class="row my-2">
    <div class="col">
      <it-upload-file-list
        [fileList]="uploadedImageList"
        images="true"
        (uploadFiles)="onUpdateImageList($event)"
        (deleteItem)="onDeleteImageList($event)"></it-upload-file-list>
    </div>
  </div>
</div>`,`typescript`,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { UploadFileListItem } from 'design-angular-kit/interfaces/form';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'it-upload-image-list-example',
  templateUrl: './upload-image-list-example.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class UploadImageListExampleComponent implements OnInit {
  private readonly httpClient = inject(HttpClient);

  uploadedImageList: Array<UploadFileListItem> = [];

  ngOnInit() {
    const images$ = [
      'https://picsum.photos/40/40?image=1055',
      'https://picsum.photos/80/40?image=1056',
      'https://picsum.photos/40/40?image=1057',
      'https://picsum.photos/120/200?image=1058',
    ].map(url => this.httpClient.get(url, { responseType: 'blob' }));

    forkJoin(images$).subscribe(blobImages => {
      this.uploadedImageList = blobImages.map((blob, index) => {
        const fileName = index === 1 ? 'nome-file-2-nome-file-lungo-per-ellissi.jpg' : \`nome-file-\${index + 1}.jpg\`;
        return {
          id: index,
          file: new File([blob], fileName),
          removable: index > 1,
          progress: index === 2 ? 45 : undefined,
          error: index === 3,
        };
      });
    });
  }

  onUpdateImageList(files: FileList): void {
    const newFiles: Array<UploadFileListItem> = Array.from(files).map((file, index) => ({
      id: index + this.uploadedImageList.length, // I set an id, useful when deleting
      file, // The uploaded file
      removable: true, // set new file as removable
    }));

    this.uploadedImageList = [...this.uploadedImageList, ...newFiles];
  }

  onDeleteImageList(item: UploadFileListItem): void {
    this.uploadedImageList = this.uploadedImageList.filter(i => i.id !== item.id);
  }
}`],[`html`,`<h3>Upload Drag&drop</h3>
<div class="bd-example">
  <div class="row my-2">
    <div class="col">
      <it-upload-drag-drop (fileStartUpload)="onDragUploadStart()" #uploadDragDropComponent></it-upload-drag-drop>
    </div>
  </div>
</div>`,`typescript`,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { interval, map, take } from 'rxjs';
import { ItUploadDragDropComponent } from 'design-angular-kit/components/form/upload-drag-drop/upload-drag-drop.component';

@Component({
  selector: 'it-upload-drag-drop-example',
  templateUrl: './upload-drag-drop-example.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class UploadDragDropExampleComponent {
  @ViewChild('uploadDragDropComponent') uploadDragDropComponent!: ItUploadDragDropComponent;

  onDragUploadStart(): void {
    interval(1000)
      .pipe(
        // Simulate upload of single file
        take(100),
        map(x => (x + 1) * 10) // Start from 1, end 100
      )
      .subscribe(progress => {
        this.uploadDragDropComponent.progress(progress);
        if (progress >= 100) {
          setTimeout(() => {
            this.uploadDragDropComponent.reset();
          }, 2000);
        }
      });
  }
}`]],template:function(e,i){e&1&&im(0,`it-upload-file-list-example`)(1,`it-source-display`,0)(2,`it-upload-file-list-custom-label-example`)(3,`it-source-display`,0)(4,`it-upload-image-list-example`)(5,`it-source-display`,1)(6,`it-upload-drag-drop-example`)(7,`it-source-display`,2)},dependencies:[q,V,G,K,W],encapsulation:2,changeDetection:1})}}return o})();var ae=[{path:``,component:(()=>{class o{constructor(){this.fileListComponent=oe.components.find(t=>t.name===`ItUploadFileListComponent`),this.dragDropComponent=oe.components.find(t=>t.name===`ItUploadDragDropComponent`)}static{this.ɵfac=function(e){return new(e||o)}}static{this.ɵcmp=Tw({type:o,selectors:[[`it-upload-index`]],standalone:!1,decls:15,vars:3,consts:[[1,`bd-title`],[1,`bd-lead`],[3,`innerHTML`],[`label`,`Esempi`,`active`,`true`,1,`mt-3`],[`label`,`API`,1,`mt-3`],[3,`component`]],template:function(e,i){e&1&&(Zi(0,`h1`,0),hb(1,`Upload`),nu(),Zi(2,`p`,1),hb(3,`Elementi dei form dedicati al caricamento file.`),nu(),im(4,`div`,2),Zi(5,`it-tab-container`)(6,`it-tab-item`,3),im(7,`it-upload-examples`),nu(),Zi(8,`it-tab-item`,4)(9,`h2`),hb(10,`Upload con lista di file`),nu(),im(11,`it-api-parameters`,5),Zi(12,`h2`),hb(13,`Upload Drag&drop`),nu(),im(14,`it-api-parameters`,5),nu()()),e&2&&(MD(4),om(`innerHTML`,i.fileListComponent.description,BI),MD(7),om(`component`,i.fileListComponent),MD(3),om(`component`,i.dragDropComponent))},dependencies:[$,Ile,Fx,X],encapsulation:2,changeDetection:1})}}return o})()}];var Z=(()=>{class o{static{this.ɵfac=function(e){return new(e||o)}}static{this.ɵmod=Pg({type:o})}static{this.ɵinj=fa({imports:[ua.forChild(ae),ua]})}}return o})();var Ge=(()=>{class o{static{this.ɵfac=function(e){return new(e||o)}}static{this.ɵmod=Pg({type:o})}static{this.ɵinj=fa({imports:[Zt,te,_Z,Z]})}}return o})();export{Ge as UploadModule};