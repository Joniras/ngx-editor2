import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {PopoverModule} from 'ngx-bootstrap/popover';

import {NgxTextEditorComponent} from './ngx-text-editor/ngx-text-editor.component';
import {NgxGrippieComponent} from './ngx-grippie/ngx-grippie.component';
import {NgxTextEditorMessageComponent} from './ngx-text-editor-message/ngx-text-editor-message.component';
import {NgxTextEditorToolbarComponent} from './ngx-text-editor-toolbar/ngx-text-editor-toolbar.component';

import {MessageService} from './common/services/message.service';
import {CommandExecutorService} from './common/services/command-executor.service';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

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
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [
    CommandExecutorService,
    MessageService
  ]
})

export class NgxTextEditorModule { }
