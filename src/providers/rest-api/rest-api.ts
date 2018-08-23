import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { AuthenticateProvider } from '../../providers/authenticate/authenticate';

@Injectable()
export class RestApiProvider {

  private apiUrl = 'https://restcountries.eu/rest/v2/all';
  private getemployeeUrl = 'http://testing.jmsofttech.com/api/employee';
  
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
   return this.http.get(this.apiUrl).pipe(
      map(this.extractData1),
      catchError(this.handleError)
    );
     
  }

  private extractData(res: Response) {
    console.log(res)
    let body = [{"name":"John Deo", "img":"1.jpg", "shift":"10am to 12pm"}, {"name":"John Deo", "img":"2.jpg", "shift":"10am to 12pm"}, {"name":"John Deo", "img":"3.jpg", "shift":"10am to 12pm"}, {"name":"John Deo", "img":"4.jpg", "shift":"10am to 12pm"}, {"name":"John Deo", "img":"5.jpg", "shift":"10am to 12pm"}, {"name":"John Deo", "img":"6.jpg", "shift":"10am to 12pm"}];
    return res || {};
  }

  private extractData1(res: Response) {

    let body = [{"GameName" : "1 Crore Jackpot","PacketId" : "PKT1234t","Cost" : "12","Quantity" : "100" ,"LastTicketNo" : "100", "TotalAmount" : 120}, {"GameName" : "2 Crore Jackpot","PacketId" : "PKT1234t","Cost" : "12","Quantity" : "100" ,"LastTicketNo" : "100", "TotalAmount" : 120}, {"GameName" : "3 Crore Jackpot","PacketId" : "PKT1234t","Cost" : "12","Quantity" : "100" ,"LastTicketNo" : "100", "TotalAmount" : 120}];
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