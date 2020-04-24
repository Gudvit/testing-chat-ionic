import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  public sendMessage$ = new BehaviorSubject( false);
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
    this.sendMessage$.next(true);
    this.chatMessages.push(this.prepareObject(message));
  }
}
