import { Routes } from '@angular/router';
import { AuthRoutes } from './auth/auth.routes';
import { HomeRoutes } from './home/home.routes';
import { MoviesRoutes } from './movies/movies.routes';

export const routes: Routes = [
        ...AuthRoutes,
        ...HomeRoutes,
        ...MoviesRoutes
];
