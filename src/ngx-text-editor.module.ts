import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {PopoverModule} from 'ngx-bootstrap';

import {NgxTextEditorComponent} from './ngx-text-editor/ngx-text-editor.component';
import {NgxGrippieComponent} from './ngx-grippie/ngx-grippie.component';
import {NgxTextEditorMessageComponent} from './ngx-text-editor-message/ngx-text-editor-message.component';
import {NgxTextEditorToolbarComponent} from './ngx-text-editor-toolbar/ngx-text-editor-toolbar.component';

import {MessageService} from './common/services/message.service';
import {CommandExecutorService} from './common/services/command-executor.service';

@NgModule({
  declarations: [
    NgxTextEditorComponent,
    NgxGrippieComponent,
    NgxTextEditorMessageComponent,
    NgxTextEditorToolbarComponent
  ],
  exports: [
    NgxTextEditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PopoverModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [
    CommandExecutorService,
    MessageService
  ]
})

export class NgxTextEditorModule { }
