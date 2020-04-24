import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-message',
  templateUrl: './my-message.component.html',
  styleUrls: ['./my-message.component.scss'],
})
export class MyMessageComponent {
  @Input() message: any;
}
