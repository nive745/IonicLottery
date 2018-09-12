import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';




@Injectable()
export class AuthenticateProvider {
    constructor() {
        console.log('Hello AuthenticateProvider Provider'); 
    }

    /**
     * Store user on local storage.
     * 
     * @param user User.
     */
    private setAuthenticatedUser(user: any) {
        debugger;
        if (user != null) {
            localStorage.setItem('app.userInfo', 'true');
            localStorage.setItem('app.userInfo.id', user.id);
            localStorage.setItem('app.userInfo.name', user.name);
            localStorage.setItem('app.userInfo.token', user.token);
        }
    }

    /**
     * Get user from local storage.
     * 
     * @return User.
     */
    public getAuthenticatedUser(): any {
        let user: any;
        if (localStorage.getItem('app.userInfo')) {
            user = {
            id : localStorage.getItem('app.userInfo.id'),
            name : localStorage.getItem('app.userInfo.name'),
            token : localStorage.getItem('app.userInfo.token')
            }
        }
        return user;
    }

    /**
     * Remove user from local storage.
     */
    public clearAuthenticatedUser(): void {
        localStorage.removeItem('app.userInfo');
        localStorage.removeItem('app.userInfo.id');
        localStorage.removeItem('app.userInfo.name');
         localStorage.removeItem('app.userInfo.token');
    }

    /**
     * Perform authentication using credentials.
     * 
     * @param user Username.
     * @param password Password.
     */
    public authenticateUsingCredentials(user: string, password: string, token : string) {
        if (user === null || password === null) {
            // Throws error message.
            return Observable.throw('User and password are required.');
        } else {
           
            // Creates Observable.
            return Observable.create(observer => {
                // Perform server request to validate user credentials.
                this.setAuthenticatedUser({id: password, name: user, token:token});
                observer.next();
                observer.complete();
            });
        }
    }
}
