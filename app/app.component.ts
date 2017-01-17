import { Component, OnInit } from '@angular/core';
import { Message }           from './message';
import { MessageService }    from './services/message.service';

//import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/Rx';

@Component({
  selector: 'my-app',
  template: `<div class="container">
    <h1>Angular2 Chat App</h1>

    <div id="wrapper">
        <div id="menu">
            <p class="welcome">Welcome, <b>{{name}}</b></p>
            <div style="clear:both"></div>
        </div>
        
        <div id="chatbox"><ul><li *ngFor="let message of messages"><b>{{message.name}}</b>: {{message.message}}</li></ul></div>
         
        <form action="" #f="ngForm" (ngSubmit)="sendMessage(f.value)">
            <input name="name" ngModel [(ngModel)]="name" hidden>
            <input #newMessage
              name="message" ngModel [(ngModel)]="message" placeholder="Type your message here" size="63" >
            <button type="submit">Send</button>
        </form>
    </div>
</div>`,
  providers: [MessageService]
})


export class AppComponent implements OnInit {

    name = "tung";
	public messages: any[];
    public message: string;
    public tmp_messages = {};
	constructor(private messageService: MessageService) { }

	ngOnInit(): void {
		this.getMessages();
	}

	getMessages(): void {
        this.messageService.getMessages().subscribe((response:any)=> {this.messages = response});
    }

	sendMessage(data: any): void {
        this.tmp_messages = {name: name, message: this.message };
        this.messageService.sendMessage(data).subscribe((response:any)=> {
            this.messages.push(this.tmp_messages);
        });
        this.message = '';
	}
}