import { Routes } from '@angular/router';
import { AuthRoutes } from './auth/auth.routes';
import { HomeRoutes } from './home/home.routes';

export const routes: Routes = [
        ...AuthRoutes,
        ...HomeRoutes
];
