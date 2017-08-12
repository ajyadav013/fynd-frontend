import { Injectable }  from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SocialService } from '../social/social.service';
import { ContentHeaderService } from '../shared/service/index';
import { Http, Response } from '@angular/http';
import { Config } from '../shared/config/env.config';
import { IMovies } from '../shared/model/index';


@Injectable()
export class SocialResolver implements Resolve<any> {
    constructor(private socialService:SocialService) {}

    resolve() {
        return this.socialService.socialResolve();
    }
}
