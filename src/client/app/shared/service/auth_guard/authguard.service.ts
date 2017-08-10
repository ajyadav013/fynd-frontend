// Authguard Service

import { Injectable }  from '@angular/core';
import { Location } from '@angular/common';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Http, Response } from '@angular/http';
import { CookieService } from 'ngx-cookie';

import { Config } from '../..//config/env.config';
import { IUser } from '../..//model/index';
import { ContentHeaderService } from '../index';
import { SocialService } from '../../../social/social.service';

@Injectable()
export class AuthGuard implements CanActivate {
    public user:IUser;

    constructor(private router: Router,
                private http:Http,
                private _contentHeaderService:ContentHeaderService,
                private _cookieService:CookieService
                ) { }

    // Method to check if user is logged in
    canActivate():Observable<boolean> {
        return this.checkLoggedIn()
            .map((response:Response) => this.handleSuccess(response))
            .catch(this.logError);
    }

    checkLoggedIn(): Observable<any> {
        let options = this._contentHeaderService.getOptions(null);
        return this.http.get(Config.APIURL+'auth/me', options)
            .map((response:Response) => this.handleMeResponse(response))
            .catch((err:Response) => this.handleMeError(err));
    }

    // Logout User Didnt put it in auth service coz it causes circular dependency
    logout(): Observable<any> {
        let body = {};
        let options = this._contentHeaderService.getOptions(null);
        return this.http.post(Config.APIURL+'auth/logout', body, options)
            .map((response:Response) => this.handleLogoutResponse(response))
            .catch((err:Response) => this.handleLogoutError(err));
    }

    private handleSuccess(response:any) {
        return true;
    }

    private logError(error:any) {
        return Observable.of(false);
    }

    private handleMeResponse(res:Response) {
        this.user = res.json();
        return true;
    }

    private handleMeError(err: Response) {
        this.logout().subscribe();
        return Observable.throw('Internal server error');
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

@Injectable()
export class SocialGuard implements CanActivate {
    private _code:string;
    constructor(private _location:Location, private _socialService:SocialService) {
        let params = new URLSearchParams(this._location.path(false).split('?')[1]);
        this._code = params.get('code');
    }


    canActivate():Observable<boolean> {
        if(this._code) {
            return this._socialService.getUserSocialDetails(this._code)
                .map((res:Response) => this.handleSuccess(res))
                .catch(this.logError);
        } else {
            return Observable.of(true);
        }
    }

    private handleSuccess(response:any) {
        return true;
    }

    private logError(error:any) {
        return Observable.of(false);
    }

}
