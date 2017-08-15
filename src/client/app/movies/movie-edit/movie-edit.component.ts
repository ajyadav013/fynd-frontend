import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router }   from '@angular/router';
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

    public movie:IMovies = new IMovies();
    public genres:IGenres = new IGenres();
    public finalGenre:IGenres = new IGenres();
    public selectedGenres:Array<string> = [];
    public showTemplate:boolean = false;
    public error:boolean = false;
    constructor(private _moviesService:MoviesService, private _route: ActivatedRoute, private _router:Router) {}

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

    prePopulateGenre(genre:IGenres) {
        for(let i=0; i<this.selectedGenres.length; i++) {
            if(genre.name===this.selectedGenres[i]) {
                return true;
            }
        }
        return false;
    }


    editMovie(movie:IMovies) {
        this._moviesService.editMovie(movie)
            .subscribe(
                response => this.editMovieResponse(response),
                err => this.logError(err)
            );
    }


    editMovieResponse(response:any) {
        if(response===false) {
            this.error = true;
        } else {
            this._router.navigate(['/']);
        }
    }

    extractGenres(genres:any) {
        this.genres = genres;
        this.showTemplate = true;

    }

    extractMovie(movie:any) {
        this.movie = movie;
        for(let i=0; i<this.movie.genres.length; i++) {
            this.selectedGenres[i] = movie.genres[i].name;
        }
    }

    logError(err:any) {
        console.log('error', err);
    }


}
