import { NgModule, ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { MoviesModule } from '../movies/movies.module';
import { SocialResolver } from './home.service';


@NgModule({
    imports: [SharedModule, MoviesModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: HomeModule,
            providers: [SocialResolver]
        };
    }
}
