import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {

  constructor(
    private router: Router,
    public messagesService: MessagesService
  ) {}

  ngOnInit() {}

  goTo(account) {
    this.messagesService.user = account === '2';
    this.router.navigate([`/messages`]).then();
  }
}
