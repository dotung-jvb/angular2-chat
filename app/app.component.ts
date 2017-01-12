import { Component, OnInit } from '@angular/core';
import { Message }           from './message';
import { MessageService }    from './services/message.service';

@Component({
  selector: 'my-app',
  template: `<div class="container">
    <h1>Angular2 Chat App</h1>

    <div id="wrapper">
        <div id="menu">
            <p class="welcome">Welcome, <b>{{name}}</b></p>
            <div style="clear:both"></div>
        </div>
         
        <div id="chatbox"><ul><li *ngFor="let message of messages">{{message.message}}</li></ul></div>
         
        <form action="" #f="ngForm" (ngSubmit)="sendMessage(f.value)">
            <input #newMessage
              name="message" ngModel [(ngModel)]="message" placeholder="Type your message here" size="63" >
            <button type="submit">Send</button>
        </form>
    </div>
</div>`,
  providers: [MessageService]
})



export class AppComponent implements OnInit {

	//messages: Message[];
  name = "tung";
	public messages: any[];
    public message: string;

	constructor(private messageService: MessageService) { }

	getMessages(): void {
		 this.messageService.getMessages().subscribe((response:any) => {
            this.messages = response;
        }, error => {
            console.log('System error api');
        });
  }

	ngOnInit(): void {
		this.getMessages();
	}

	sendMessage(data): void {
    console.log(data);
    this.message = '';
	  this.messageService.sendMessage(data).subscribe(response=> {
            if (response) {
                this.getMessages();
                console.log(response);
            }
        });
	}
}