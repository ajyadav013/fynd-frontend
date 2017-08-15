import { Component, Input } from '@angular/core';
import { AuthGuard } from '../service/auth_guard/authguard.service';
import { IUser } from '../model/index';

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
    public user:IUser;
    @Input('loggedInPlatforms')loggedInPlatforms:Array<string>;

    constructor(private _authGuard:AuthGuard) {
        this.user = this._authGuard.user;
    }

}
