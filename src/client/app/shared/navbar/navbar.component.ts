import { Component, Input } from '@angular/core';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
})
export class NavbarComponent {

    @Input('loggedInPlatforms')loggedInPlatforms:Array<string>;

    constructor() {}

    // ngOnChanges() {
    //     console.log('logged in platforms in navbar onchanges', this.loggedInPlatforms);
    // }


}
