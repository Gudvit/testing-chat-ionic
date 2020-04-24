import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  public chatMessages: any[] = [];
  public user: boolean;

  prepareObject(message) {
    if (this.user) {
      return {
        user: true,
        text: message,
        time: new Date()
      };
    } else {
      return {
        text: message
      };
    }
  }

  sendMessage(message) {
    this.chatMessages.push(this.prepareObject(message));
  }
}
