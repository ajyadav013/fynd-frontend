import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavbarModule } from './navbar/navbar.module';

import { ContentHeaderService, AuthGuard, SocialGuard } from './service/index';
/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
    imports: [CommonModule, RouterModule, NavbarModule],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent, NavbarModule,
    CommonModule, FormsModule, RouterModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
        providers: [ContentHeaderService, AuthGuard, SocialGuard]
    };
  }
}
