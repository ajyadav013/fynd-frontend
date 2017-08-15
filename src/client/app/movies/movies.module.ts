import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { MoviesComponent } from './movies.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { MovieAddComponent } from './movie-add/movie-add.component';
import { MoviesService } from './movies.service';

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, MaterialModule, BrowserAnimationsModule],
    declarations: [MoviesComponent, MovieEditComponent, MovieAddComponent],
    exports: [MoviesComponent, MovieEditComponent, MovieAddComponent],
})
export class MoviesModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: MoviesModule,
            providers: [MoviesService]
        };
    }
}
