import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTextEditorMessageComponent } from './ngx-text-editor-message.component';
import { MessageService } from '../common/services/message.service';

describe('NgxTextEditorMessageComponent', () => {
  let component: NgxTextEditorMessageComponent;
  let fixture: ComponentFixture<NgxTextEditorMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [MessageService],
      declarations: [NgxTextEditorMessageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTextEditorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
