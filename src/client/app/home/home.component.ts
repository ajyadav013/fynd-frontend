import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from './home.service';
import { IMovies } from '../shared/model/index'

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit{

    public loggedInPlatforms:Array<string> = [];
    public movies:IMovies;
    constructor(private _route:ActivatedRoute, private _homeService:HomeService) {}

    ngOnInit() {
        this.loggedInPlatforms = this._route.snapshot.data['social'];
        this._homeService.getMovies()
            .subscribe(
                data => this.handleMovieSuccess(data),
                err => this.logError(err)
            );
    }

    handleMovieSuccess(response:any) {

        console.log('Home component subscribe response', response);
    }


    logError(err:any) {
        console.log('Home Component subscribe error', err);
    }


}
