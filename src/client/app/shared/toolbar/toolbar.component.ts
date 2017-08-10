import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../service/index';

/**
 * This class represents the toolbar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css']
})
export class ToolbarComponent {

    constructor(private _authGuard: AuthGuard, private _router: Router) { }

    logout() {
        this._authGuard.logout()
            .subscribe( (response) => {
                if (response) {
                    this._router.navigate(['/login']);
                }
            });
    }

}
