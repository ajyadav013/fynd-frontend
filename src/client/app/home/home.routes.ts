import { Route } from '@angular/router';
import { HomeComponent } from './home.component';
import { SocialResolver } from './home.service';
import { AuthGuard, SocialGuard } from '../shared/service/index';
import { MoviesRoutes } from '../movies/movies.routes';

export const HomeRoutes: Route[] = [
    {
        path: '',
        pathMatch:'full',
        component: HomeComponent,
        canActivate: [AuthGuard, SocialGuard],
        resolve: {social:SocialResolver},
        children: [
            ...MoviesRoutes
        ]
    }];
