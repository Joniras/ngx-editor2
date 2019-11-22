import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';

import {BasicComponent} from './basic.component';

import {NgxTextEditorModule} from 'ngx-text-editor';

@NgModule({
  declarations: [
    BasicComponent
  ],
  entryComponents: [
    BasicComponent
  ],
  exports: [
    BasicComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxTextEditorModule
  ]
})
export class BasicModule {}
