import { Route } from '@angular/router';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { AuthGuard } from '../shared/service/index';

export const MoviesRoutes: Route[] = [
    {
        path: 'movie/edit/:id',
        component: MovieEditComponent,
        canActivate: [AuthGuard]
    }];
