import { Injectable }              from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

import { Message }                 from '../message';
//import { MESSAGES }                from '../mock-messages';

/*export const MESSAGES: Message[] = [
  { id: 1, user: 'Mr. Nice', message: '1' },
  { id: 2, user: 'Narco', message: '1' },
  { id: 3, user: 'Bombasto', message: '1' },
  { id: 4, user: 'Celeritas', message: '1' },
  { id: 5, user: 'Magneta', message: '1' },
  { id: 6, user: 'RubberMan', message: '1' },
  { id: 7, user: 'Dynama', message: '1' },
  { id: 8, user: 'Dr IQ', message: '1' },
  { id: 9, user: 'Magma', message: '1' },
  { id: 10, user: 'Tornado', message: '1' }
];*/
export const MESSAGES: Message[] = [];

@Injectable()
export class MessageService {

  constructor (private http: Http) {}

  private apiUrl = 'http://58734f112f4460120032e673.mockapi.io/api/tung/';

  getMessages(): Observable<any[]> {
    return this.http.get(this.apiUrl).map((response) => response.json() as Message[]);
  }

  private headers = new Headers({'Content-Type': 'application/json'});

    sendMessage (data: any): Observable<any> {
        return this.http.post(this.apiUrl, data) // ...using post request
                         .map((res:Response) => {console.log(res)}); //...errors if any
    }   

/*  updateProfileInformation(message: Message) {
    this.userSettings.firstName = user.firstName;
    this.userSettings.lastName = user.lastName;
    this.userSettings.dob = user.dob;

    var headers = new Headers();
    headers.append('Content-Type', this.constants.jsonContentType);

    var s = localStorage.getItem("accessToken");
    headers.append("Authorization", "Bearer " + s);
    var body = JSON.stringify(this.userSettings);

    return this.http.post(this.constants.userUrl + "UpdateUser", body, { headers: headers })
      .map((response: Response) => {
        var result = response.json();
        return result;
      })
      .catch(this.handleError)
  }*/
  /*private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }*/
  /*getMessages(): Promise<Message[]> {
    return Promise.resolve(MESSAGES);
  }*/
  /*private messagesUrl = 'http://58734f112f4460120032e673.mockapi.io/api/tung';  // URL to web API
  constructor (private http: Http) {}
  getMessages (): Observable<Message[]> {
    return this.http.get(this.messagesUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }*/
}