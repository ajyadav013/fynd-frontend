import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
    moduleId: module.id,
    selector: 'log-out',
    template: `
        <button  (click)="logout()" class="btn btn-primary">Logout</button>`
})
export class LogoutComponent {
    constructor(private authService : AuthService) { }
    logout() {
        this.authService.logout();
    }
}
