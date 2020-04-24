import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  public page: string;

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
    if (this.router.url === '/messages') {
      this.page = 'אלון  דגן';
    }
  }
}
