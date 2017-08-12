import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }   from '@angular/router';
import { IMovies, IGenres } from '../../shared/model/index';
import { MoviesService } from '../movies.service';

/**
 * This class represents the lazy loaded MoviesComponent.
 */
@Component({
  moduleId: module.id,
  templateUrl: 'movie-edit.component.html',
})
export class MovieEditComponent implements OnInit {

    private movie:IMovies = new IMovies();
    private selectedGenres:Array<string> = [];
    private genres:IGenres = new IGenres();
    public showTemplate:boolean = false;
    constructor(private _moviesService:MoviesService, private _route: ActivatedRoute) {}

    ngOnInit() {
        let _params:any = this._route.params;
        this._moviesService.getMovieDetails(_params.value.id)
            .subscribe(
                movie => this.extractMovie(movie),
                err => this.logError(err)
            );
        this._moviesService.getGenres()
            .subscribe(
                genres => this.extractGenres(genres),
                err => this.logError(err)
            );

    }

    extractGenres(genres:any) {
        this.genres = genres;
        console.log('genres', genres);
        this.showTemplate = true;

    }

    extractMovie(movie:IMovies) {
        this.movie = movie;
        console.log(this.movie)
        for(let i=0; i<this.movie.genres.length; i++) {
            this.selectedGenres[i] = movie.genres[i].name
        }

        console.log('got movie genres', this.selectedGenres);
    }

    logError(err:any) {
        console.log('goy error', err);
    }


}
