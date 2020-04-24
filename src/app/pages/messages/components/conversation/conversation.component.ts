import { Component } from '@angular/core';
import { MessagesService } from '../../../../services/messages.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss'],
})
export class ConversationComponent {
  constructor(public messagesService: MessagesService) {}
}
