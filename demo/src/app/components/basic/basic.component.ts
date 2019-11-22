import {Component} from '@angular/core';

@Component({
  selector:    'basic-component',
  templateUrl: 'basic.component.html',
  styleUrls: [
    'basic.component.scss'
  ]
})
export class BasicComponent {
  public config:any = {
    'minHeight': '150px'
  };

  public text:string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  constructor() {

  }
}
