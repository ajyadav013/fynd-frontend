import { Component, OnInit } from '@angular/core';
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
    constructor(private _moviesService:MoviesService) {}

    ngOnInit() {
        this._moviesService.getMovies()
            .subscribe(
                data => this.handleMovieSuccess(data),
                err => this.logError(err)
            );
    }

    handleMovieSuccess(response:any) {
        this.movies = response;
        console.log('Movies component subscribe response', response);
    }


    logError(err:any) {
        console.log('MOvies Component subscribe error', err);
    }
}
