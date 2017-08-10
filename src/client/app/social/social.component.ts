// Social Component
import { Component, Input, OnChanges } from '@angular/core';
import { SocialService } from './social.service';
import { Config } from '../shared/config/env.config';

@Component({
    moduleId: module.id,
    selector: 'social-app',
    templateUrl: 'social.component.html',
    styleUrls: ['social.component.css'],
})
export class SocialComponent implements OnChanges{
    @Input('loggedInPlatforms') loggedInPlatforms:Array<string>;

    public facebookLoggedIn:boolean=false;

    private socialAuthConfig = {
        'facebook':{
            'authEndpoint': Config.APIURL+'social',
            'clientId':Config.FACEBOOKCLIENTID,
            'provider':'facebook',
            'redirectURI' : Config.REDIRECTURL
        }
    };
    constructor(public socialService:SocialService) { }

    ngOnChanges() {
        for(let index=0; index<this.loggedInPlatforms.length; index++) {
            if(this.loggedInPlatforms[index]==='facebook') {
                this.facebookLoggedIn = true;
            }
        }
    }


    facebookLogin() {
        this.setSocialProvider('facebook');
        this.socialService.auth('facebook', this.socialAuthConfig);
    }

    setSocialProvider(provider:string) {
        localStorage.setItem('socialProvider', provider);
    }
}
