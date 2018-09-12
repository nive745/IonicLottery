import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { AuthenticateProvider } from '../../providers/authenticate/authenticate';

@Injectable()
export class RestApiProvider {

  //private apiUrl = 'https://restcountries.eu/rest/v2/all';
  private getemployeeUrl = 'http://testing.jmsofttech.com/api/employee';
  private getallinventory = 'http://testing.jmsofttech.com/api/Bundle/GetBundleInventroy';
  
  constructor(public http: HttpClient, public authenticateProvider: AuthenticateProvider) {}

  getEmployees(): Observable<string[]> {
    let user = this.authenticateProvider.getAuthenticatedUser();
    console.log(user)
     let headers = new HttpHeaders(
     {
     'x-access-token':user.token

     });
     
    return this.http.get(this.getemployeeUrl,{headers}).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getCompleteInventory(): Observable<string[]> {
    let user = this.authenticateProvider.getAuthenticatedUser();
    
    let headers = new HttpHeaders(
      {
      'x-access-token':user.token
 
      });
    return this.http.get(this.getallinventory,{headers}).pipe(
      map(this.extractData1),
      catchError(this.handleError)
    );
     
  }

  private extractData(res: Response) {
    console.log(res)
   // let body = [{"name":"John Deo", "img":"1.jpg", "shift":"10am to 12pm"}, {"name":"John Deo", "img":"2.jpg", "shift":"10am to 12pm"}, {"name":"John Deo", "img":"3.jpg", "shift":"10am to 12pm"}, {"name":"John Deo", "img":"4.jpg", "shift":"10am to 12pm"}, {"name":"John Deo", "img":"5.jpg", "shift":"10am to 12pm"}, {"name":"John Deo", "img":"6.jpg", "shift":"10am to 12pm"}];
    return res || {};
  }

  private extractData1(res: Response) {

    console.log(res)
    // let body = [{"name":"John Deo", "img":"1.jpg", "shift":"10am to 12pm"}, {"name":"John Deo", "img":"2.jpg", "shift":"10am to 12pm"}, {"name":"John Deo", "img":"3.jpg", "shift":"10am to 12pm"}, {"name":"John Deo", "img":"4.jpg", "shift":"10am to 12pm"}, {"name":"John Deo", "img":"5.jpg", "shift":"10am to 12pm"}, {"name":"John Deo", "img":"6.jpg", "shift":"10am to 12pm"}];
     return res || {};
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