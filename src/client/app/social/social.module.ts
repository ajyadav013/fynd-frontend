// Social Module
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule }       from '@angular/common';
import { SocialComponent } from './social.component';
import { SocialService } from './social.service';
//import { HttpModule, XHRBackend, RequestOptions  } from '@angular/http';

@NgModule({
    imports :[CommonModule],
    declarations: [SocialComponent],
    exports: [SocialComponent],
    // providers:[
    //     SocialService,
    // ]
})
export class SocialModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SocialModule,
        providers: [SocialService]
    };
  }
}
