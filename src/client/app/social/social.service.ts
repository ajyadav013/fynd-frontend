import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ContentHeaderService } from '../shared/service/index';
import { Config } from '../shared/config/env.config';

@Injectable()
export class SocialService {

    constructor(private _contentHeaderService:ContentHeaderService, private _http:Http) { }

    public auth(provider:string, authConfig: any):void {
        localStorage.setItem('socialAuthConfig', JSON.stringify(authConfig));
        if(provider === 'facebook') {
            window.location.href = 'https://www.facebook.com/v2.8/dialog/oauth?client_id='+
                authConfig.facebook.clientId+'&redirect_uri='+
                authConfig.facebook.redirectURI+'&scope=email';
        }
    }

    public getUserSocialDetails(code:string):Observable<any> {
        let config = JSON.parse(localStorage.getItem('socialAuthConfig'));
        let socialProvider = localStorage.getItem('socialProvider');
        let body = {
            'code' : code,
            'clientId' : config[socialProvider].clientId,
            'redirectUri':config[socialProvider].redirectURI,
            'provider':config[socialProvider].provider
        };
        let options = this._contentHeaderService.getOptions(null);
        return this._http.post(Config.APIURL+'social/', body, options)
            .map((res: Response) => this.handleGetUserSocialDetails(res))
            .catch(this.handleError);
    }

    public socialResolve() {
        let options = this._contentHeaderService.getOptions(null);
        return this._http.get(Config.APIURL+'social/me', options)
            .map((res: Response) => this.handleSocialResolve(res))
            .catch(this.handleSocialResolveError);
    }

    public deleteSocialInfoLocalStorage() {
        localStorage.removeItem('socialAuthConfig');
        localStorage.removeItem('socialProvider');
    }

    private handleSocialResolve(response:any) {
        let loggedInPlatforms:Array<string> = [];
        let data = response.json();
        for(let i=0; i<data.length; i++) {
            loggedInPlatforms.push(data[i].social_platform);
        }
        return loggedInPlatforms;
    }


    private handleGetUserSocialDetails(response:any) {
        this.deleteSocialInfoLocalStorage();
        return true;
    }

    private handleError(error:any) {
        this.deleteSocialInfoLocalStorage();
        return Observable.of(false);
    }

    private handleSocialResolveError(error:any) {
        return Observable.of(false);
    }
}
