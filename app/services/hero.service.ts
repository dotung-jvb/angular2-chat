import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
//import { Hero }           from './hero';
import { Observable }     from 'rxjs/Observable';
@Injectable()
export class HeroService {
  /*private heroesUrl = 'http://5872f6312f4460120032e655.mockapi.io/api/messages/ACA2';  // URL to web API
  constructor (private http: Http) {}
  getHeroes (): Observable<Hero[]> {
    return this.http.get(this.heroesUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  
  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  getHeroes (): Observable<Hero[]> {
    return this.http.get(this.heroesUrl)
                  .map(this.extractData)
                  .catch(this.handleError);
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