import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../../../services/messages.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public message: string;

  constructor(
    public messagesService: MessagesService
  ) {}

  ngOnInit() {
    this.clearMessage();
  }

  sendMessage() {
    this.message = this.message.trim();
    if (this.message.length) {
      this.messagesService.sendMessage(this.message);
    }
    this.clearMessage();
  }

  clearMessage() {
    this.message = '';
  }
}
