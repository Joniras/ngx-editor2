import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxTextEditorComponent } from './ngx-text-editor.component';
import { NgxGrippieComponent } from '../ngx-grippie/ngx-grippie.component';
import { NgxTextEditorToolbarComponent } from '../ngx-text-editor-toolbar/ngx-text-editor-toolbar.component';
import { NgxTextEditorMessageComponent } from '../ngx-text-editor-message/ngx-text-editor-message.component';
import { PopoverModule } from 'ngx-bootstrap';
import { MessageService } from '../common/services/message.service';
import { CommandExecutorService } from '../common/services/command-executor.service';

describe('NgxTextEditorComponent', () => {
  let component: NgxTextEditorComponent;
  let fixture: ComponentFixture<NgxTextEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, PopoverModule.forRoot(), HttpClientModule],
      providers: [MessageService, CommandExecutorService],
      declarations: [NgxTextEditorComponent,
        NgxGrippieComponent,
        NgxTextEditorToolbarComponent,
        NgxTextEditorMessageComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTextEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
