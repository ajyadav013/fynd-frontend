import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CookieModule } from 'ngx-cookie';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { SocialModule } from './social/social.module';
import { SharedModule } from './shared/shared.module';

import { routes } from './app.routes';

@NgModule({
    imports: [BrowserModule, HttpModule,
              CookieModule.forRoot(),
              RouterModule.forRoot(routes),
              SharedModule.forRoot(),
              SocialModule.forRoot(),
              HomeModule.forRoot(),
              AuthModule, AboutModule],
    declarations: [AppComponent],
    providers: [{
        provide: APP_BASE_HREF,
        useValue: '<%= APP_BASE %>'
    }],
    bootstrap: [AppComponent]

})
export class AppModule { }
