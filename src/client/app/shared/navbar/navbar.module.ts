// navbar Module
import { Component, NgModule } from '@angular/core';
import { CommonModule }       from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { SocialModule } from '../../social/social.module';
import { RouterModule } from '@angular/router';

@NgModule({
    imports :[CommonModule, RouterModule, SocialModule],
    declarations: [NavbarComponent],
    exports: [NavbarComponent],
})
export class NavbarModule { }
