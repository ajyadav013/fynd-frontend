import { NgModule, ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { SocialResolver, HomeService } from './home.service';


@NgModule({
  imports: [SharedModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: HomeModule,
            providers: [SocialResolver, HomeService]
        };
    }
}
