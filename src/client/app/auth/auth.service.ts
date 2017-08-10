import { Injectable } from '@angular/core';
import { Router }  from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie';
import { Http, Response } from '@angular/http';
import { ContentHeaderService } from '../shared/service/index';
import { Config } from '../shared/config/env.config';
import { IUser } from '../shared/model/index';

@Injectable()
export class AuthService {

    public user:IUser;
    public invalidCredentials:boolean = false; //set to true from each service's handleError if
    //respose status of 403(Forbidden) is received and is used in permissions.

    constructor(private http: Http,
                private router: Router,
                private _cookieService:CookieService,
                private _contentHeaderService:ContentHeaderService) {
    }


    login(credentials:any): Observable<any> {
        let username:string=credentials['username'];
        let password:string=credentials['password'];
        let body = JSON.stringify({ username, password });
        let options = this._contentHeaderService.getOptions(null);
        return this.http.post(Config.APIURL+'auth/login', body, options)
            .map((response:Response) => this.handleLoginResponse(response))
            .catch(this.handleLoginError);
    }

    logout(): Observable<any> {
        let body = {};
        let options = this._contentHeaderService.getOptions(null);
        return this.http.post(Config.APIURL+'auth/logout', body, options)
            .map((response:Response) => this.handleLogoutResponse(response))
            .catch((err:Response) => this.handleLogoutError(err));
    }

    checkLoggedIn(): Observable<any> {
        let options = this._contentHeaderService.getOptions(null);
        return this.http.get(Config.APIURL+'auth/me', options)
            .map((response:Response) => this.handleMeResponse(response))
            .catch((err:Response) => this.handleMeError(err));
    }

    private handleMeResponse(res:Response) {
        this.user = res.json();
        return true;
    }

    private handleMeError(err: Response) {
        this.logout().subscribe();
        return Observable.throw('Internal server error');
    }


    private handleLoginResponse(res:Response) {

        let body = res.json();
        if(body.token===undefined || body.token===null) {
            this.router.navigate(['/login']);
            return false;
        } else {
            this._cookieService.put('token', body.token);
            this.router.navigate(['']);
            this.invalidCredentials = false; // set here coz its value remains true after perform logout and
            //needs to be false after the login
            return true;
        }
    }

    private handleLoginError(err: Response) {
        let body = err.json();
        if (body.non_field_errors) {
            return Observable.throw(body.non_field_errors[0]);
        }else {
            return Observable.throw('Both fields are mandatory');
        }
    }

    private handleLogoutResponse(res:Response) {
        this.performLogout(res);

    }

    private handleLogoutError(err: Response) {
        this.performLogout(err);
        return Observable.throw('Internal server error');
    }

    private performLogout(res:Response) {
        if(this._cookieService.get('token')) {
            this._cookieService.remove('token');
        }
        this.router.navigate(['/login']);
    }
}
