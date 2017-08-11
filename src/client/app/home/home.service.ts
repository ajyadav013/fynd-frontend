import { Injectable }  from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SocialService } from '../social/social.service';
import { ContentHeaderService } from '../shared/service/index';
import { Http, Response } from '@angular/http';
import { Config } from '../shared/config/env.config';
import { IMovies } from '../shared/model/index';


@Injectable()
export class SocialResolver implements Resolve<any> {
    constructor(private socialService:SocialService) {}

    resolve() {
        return this.socialService.socialResolve();
    }

}

@Injectable()
export class HomeService {
    constructor(private _contentHeaderService:ContentHeaderService, private _http:Http) { }

    public getMovies():Observable<any> {
        let options = this._contentHeaderService.getOptions(null);
        return this._http.get(Config.APIURL+'movies/', options)
            .map((res:Response) => this.handleMoviesResponse(res))
            .catch(this.handleMovieError);
    }

    public handleMoviesResponse(response:any) {
        console.log('Movie response', response);
        return response.json();
    }


    public handleMovieError(error:any) {
        console.log('Movie Error', error);
        return Observable.of(false);
    }

}
