import { Injectable }  from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ContentHeaderService } from '../shared/service/index';
import { Http, Response } from '@angular/http';
import { Config } from '../shared/config/env.config';
import { IMovies } from '../shared/model/index';

@Injectable()
export class MoviesService {
    constructor(private _contentHeaderService:ContentHeaderService, private _http:Http) { }

    public getMovies():Observable<any> {
        let options = this._contentHeaderService.getOptions(null);
        return this._http.get(Config.APIURL+'movies/', options)
            .map((res:Response) => this.handleMoviesResponse(res))
            .catch(this.handleMovieError);
    }

    public getMovieDetails(movie_id:string):Observable<any> {
        let options = this._contentHeaderService.getOptions(null);
        return this._http.get(Config.APIURL+'movies/'+movie_id, options)
            .map((res:Response) => this.handleGetMovieResponse(res))
            .catch(this.handleMovieError);
    }

    public getGenres():Observable<any> {
        let options = this._contentHeaderService.getOptions(null);
        return this._http.get(Config.APIURL+'genres/', options)
            .map((res:Response) => this.handleGenresResponse(res))
            .catch(this.handleMovieError);
    }


    public handleGenresResponse(response:any) {
        return response.json();
    }

    public handleGetMovieResponse(response:any) {
        return response.json();
    }


    public handleMoviesResponse(response:any) {
        return response.json();
    }


    public handleMovieError(error:any) {
        return Observable.of(false);
    }

}
