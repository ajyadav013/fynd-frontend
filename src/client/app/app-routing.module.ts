import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AuthRoutes } from './auth/auth.routes';

export const routes: Routes = [
        ...AuthRoutes
];

@NgModule({
  imports: [
      RouterModule.forRoot([
          ...AuthRoutes
      /* define app module routes here, e.g., to lazily load a module
         (do not place feature module routes here, use an own -routing.module.ts in the feature instead)
       */
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
