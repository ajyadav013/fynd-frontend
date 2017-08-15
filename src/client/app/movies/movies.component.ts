import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgModel } from '@angular/forms';
import { Router }   from '@angular/router';
import { IMovies } from '../shared/model/index';
import { MoviesService } from './movies.service';
import { AuthGuard } from '../shared/service/auth_guard/authguard.service';
import { IUser } from '../shared/model/index';
import 'rxjs/add/operator/startWith';



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
    public _user:IUser;
    public movieCtrl: FormControl;
    public reactiveMovies:any;

    @ViewChild('reactiveAuto') reactiveAuto :any;

    constructor(
        private _moviesService:MoviesService,
        private _router:Router,
        private _authGuard:AuthGuard
    ) {
        this._user = this._authGuard.user;
        this.movieCtrl = new FormControl({name: 'Fynd'});
        this.reactiveMovies = this.movieCtrl.valueChanges
            .startWith(this.movieCtrl.value)
            .map(val => this.displayFn(val))
            .map(name => this.filterStates(name));
    }

    ngOnInit() {
        this.getMovies();
    }

    displayFn(value: any): string {
        return value && typeof value === 'object' ? value.name : value;
    }

    filterStates(val: string) {
        if(this.movies) {
            return val ? this.movies.filter(s => new RegExp(`^${val}`, 'gi').test(s.name))
            : this.movies;
        }
        return [];

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
        console.log('error', err);
    }
}
