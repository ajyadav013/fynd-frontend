import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';
import { IMovies } from '../shared/model/index'
import { MoviesService } from './movies.service';

/**
 * This class represents the lazy loaded MoviesComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-movies',
  templateUrl: 'movies.component.html',
  //styleUrls: ['movies.component.css'],
})
export class MoviesComponent implements OnInit {

    public movies:Array<IMovies>;
    constructor(private _moviesService:MoviesService, private _router:Router) {}

    ngOnInit() {
        this.getMovies();
    }

    getMovies() {
        this._moviesService.getMovies()
            .subscribe(
                data => this.handleMovieSuccess(data),
                err => this.logError(err)
            );
    }

    deleteMovie(movieId:string) {
        this._moviesService.deleteMovie(movieId)
            .subscribe(
                response => this.handleDeleteResponse(response),
                err => this.logError(err)
            );
    }

    handleDeleteResponse(response:any) {
        this.getMovies();
    }

    handleMovieSuccess(response:any) {
        this.movies = response;
    }

    logError(err:any) {
    }
}
