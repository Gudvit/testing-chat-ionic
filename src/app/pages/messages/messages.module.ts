import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MessagesComponent } from './messages.component';
import { MessagesRoutingModule } from './messages-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { ConversationComponent } from './components/conversation/conversation.component';
import { UserMessageComponent } from './components/user-message/user-message.component';
import { MyMessageComponent } from './components/my-message/my-message.component';


@NgModule({
  declarations: [
    MessagesComponent,
    FooterComponent,
    ConversationComponent,
    UserMessageComponent,
    MyMessageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessagesRoutingModule
  ]
})
export class MessagesModule { }
