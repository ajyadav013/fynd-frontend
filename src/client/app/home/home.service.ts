import { Injectable }  from '@angular/core';
import { Resolve } from '@angular/router';
import { SocialService } from '../social/social.service';


@Injectable()
export class SocialResolver implements Resolve<any> {
    constructor(private socialService:SocialService) {}

    resolve() {
        return this.socialService.socialResolve();
    }

}
