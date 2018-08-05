import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class RestApiProvider {

  private apiUrl = 'https://restcountries.eu/rest/v2/all';

  constructor(public http: HttpClient) {}

  getCountries(): Observable<string[]> {
    return this.http.get(this.apiUrl).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  private extractData(res: Response) {

    let body = [{"name":"John Deo", "img":"1.jpg", "shift":"10am to 12pm"}, {"name":"John Deo", "img":"2.jpg", "shift":"10am to 12pm"}, {"name":"John Deo", "img":"3.jpg", "shift":"10am to 12pm"}, {"name":"John Deo", "img":"4.jpg", "shift":"10am to 12pm"}, {"name":"John Deo", "img":"5.jpg", "shift":"10am to 12pm"}, {"name":"John Deo", "img":"6.jpg", "shift":"10am to 12pm"}];
    return body || {};
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}