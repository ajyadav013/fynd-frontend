import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    constructor(private _route:ActivatedRoute) {}

    ngOnInit() {
        this.loggedInPlatforms = this._route.snapshot.data['social'];
    }
}
