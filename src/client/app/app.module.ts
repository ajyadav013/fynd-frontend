import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CookieModule } from 'ngx-cookie';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { MoviesModule } from './movies/movies.module';
import { SocialModule } from './social/social.module';
import { SharedModule } from './shared/shared.module';

import { routes } from './app.routes';

@NgModule({
    imports: [BrowserModule, HttpModule,
              FormsModule,
              CookieModule.forRoot(),
              RouterModule.forRoot(routes),
              MaterialModule,
              SharedModule.forRoot(),
              SocialModule.forRoot(),
              HomeModule.forRoot(),
              MoviesModule.forRoot(),
              AuthModule],
    declarations: [AppComponent],
    providers: [{
        provide: APP_BASE_HREF,
        useValue: '<%= APP_BASE %>'
    }],
    bootstrap: [AppComponent]

})
export class AppModule { }
