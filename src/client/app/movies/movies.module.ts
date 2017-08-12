import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MoviesComponent } from './movies.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { MoviesService } from './movies.service';

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule],
    declarations: [MoviesComponent, MovieEditComponent],
    exports: [MoviesComponent, MovieEditComponent],
})
export class MoviesModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: MoviesModule,
            providers: [MoviesService]
        };
    }
}
