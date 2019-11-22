import { Component } from '@angular/core';

import { MessageService } from '../common/services/message.service';

@Component({
  selector:    'ngx-text-editor-message',
  templateUrl: './ngx-text-editor-message.component.html',
  styleUrls: [
    './ngx-text-editor-message.component.scss'
  ]
})

export class NgxTextEditorMessageComponent {
  /** property that holds the message to be displayed on the editor */
  ngxMessage = undefined;

  /**
   * @param _messageService service to send message to the editor
   */
  constructor(private _messageService: MessageService) {
    this._messageService.getMessage().subscribe((message: string) => this.ngxMessage = message);
  }

  /**
   * clears editor message
   */
  clearMessage(): void {
    this.ngxMessage = undefined;
  }
}
