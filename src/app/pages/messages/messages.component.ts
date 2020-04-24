import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit, OnDestroy {
  @ViewChild(IonContent, {read: '', static: false}) content: IonContent;
  subscription: Subscription;

  public page: string;

  constructor(
    private router: Router,
    public messagesService: MessagesService
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.updateScroll();
    }, 300);
    if (this.router.url === '/messages') {
      this.page = 'אלון  דגן';
    }

    this.subscription = this.messagesService.sendMessage$.subscribe((res) => {
      this.updateScroll();
    });
  }

  updateScroll() {
    if (this.content) {
      this.content.scrollToBottom(1000).then();
    }
  }

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
  }
}
