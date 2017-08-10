// import { Headers } from '@angular/http';
// export const contentHeaders = new Headers();
// contentHeaders.append('Accept', 'application/json');
// contentHeaders.append('Content-Type', 'application/json');
import { Injectable } from '@angular/core';
import { RequestOptions, URLSearchParams } from '@angular/http';
import { Headers } from '@angular/http';
import { CookieService } from 'ngx-cookie';

@Injectable()
export class ContentHeaderService {
    constructor(private _cookieService:CookieService) { }

    getOptions(params:URLSearchParams) {
        let contentHeaders = new Headers();
        let options:any;
        contentHeaders.append('Accept', 'application/json');
        contentHeaders.append('Content-Type', 'application/json');
        if (this._cookieService.get('token')) {
            contentHeaders.append('Authorization', 'Token '+this._cookieService.get('token'));
        }
        if(params) {
            options = new RequestOptions({search: params, headers: contentHeaders});
        } else {
            options = new RequestOptions({headers: contentHeaders});
        }
        return options;
    }
}
