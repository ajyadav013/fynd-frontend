import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router }   from '@angular/router';
import { IMovies, IGenres } from '../../shared/model/index';
import { MoviesService } from '../movies.service';

/**
 * This class represents the lazy loaded MoviesAddComponent.
 */
@Component({
  moduleId: module.id,
  templateUrl: 'movie-add.component.html',
})
export class MovieAddComponent implements OnInit {

    private movie:IMovies = new IMovies();
    private selectedGenres:Array<string> = [];
    private genres:IGenres = new IGenres();
    public showTemplate:boolean = false;
    constructor(private _moviesService:MoviesService, private _route: ActivatedRoute, private _router:Router) {}

    ngOnInit() {
        let _params:any = this._route.params;
        this._moviesService.getGenres()
            .subscribe(
                genres => this.extractGenres(genres),
                err => this.logError(err)
            );
    }

    extractGenres(genres:any) {
        this.genres = genres;
        this.showTemplate = true;

    }


    addMovie(movie:IMovies, genres:any) {

        movie.genres = []
        for (let i=0; i<genres.length; i++) {
            movie.genres.push(genres[i])
        }
        this._moviesService.addMovie(movie)
            .subscribe(
                response => this.addMovieResponse(response),
                err => this.logError(err)
            );

    }

    addMovieResponse(response:any) {
          this._router.navigate(['/']);
    }


    logError(err:any) {
        console.log('goy error', err);
    }


}
